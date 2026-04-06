const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database files
const ordersFile = path.join(__dirname, 'data', 'orders.json');
const reservationsFile = path.join(__dirname, 'data', 'reservations.json');

// Criar pasta data se não existir
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Inicializar arquivos de dados
const initializeFiles = () => {
    if (!fs.existsSync(ordersFile)) {
        fs.writeFileSync(ordersFile, JSON.stringify([]));
    }
    if (!fs.existsSync(reservationsFile)) {
        fs.writeFileSync(reservationsFile, JSON.stringify([]));
    }
};

initializeFiles();

// Funções auxiliares para ler/escrever dados
const readOrders = () => {
    try {
        return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    } catch {
        return [];
    }
};

const writeOrders = (orders) => {
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
};

const readReservations = () => {
    try {
        return JSON.parse(fs.readFileSync(reservationsFile, 'utf8'));
    } catch {
        return [];
    }
};

const writeReservations = (reservations) => {
    fs.writeFileSync(reservationsFile, JSON.stringify(reservations, null, 2));
};

// Gerar código único
const generateCode = () => {
    return 'MAR' + Math.random().toString(36).substring(2, 11).toUpperCase();
};

// ==================== ROTAS DE PEDIDOS ====================

// POST - Criar novo pedido
app.post('/api/orders', (req, res) => {
    try {
        const { items, total, method, timestamp } = req.body;
        
        if (!items || total === undefined || !method) {
            return res.status(400).json({ error: 'Dados inválidos' });
        }

        const orders = readOrders();
        const newOrder = {
            id: orders.length + 1,
            code: generateCode(),
            items,
            total,
            method,
            status: 'pendente', // pendente, confirmado, entregue, cancelado
            timestamp: timestamp || new Date().toISOString(),
            createdAt: new Date().toISOString()
        };

        orders.push(newOrder);
        writeOrders(orders);

        console.log('Novo pedido criado:', newOrder);

        res.json({
            success: true,
            orderId: newOrder.id,
            code: newOrder.code,
            message: `Pedido criado com sucesso. Total: ${total} MZN`
        });
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({ error: 'Erro ao processar pedido' });
    }
});

// GET - Listar todos os pedidos
app.get('/api/orders', (req, res) => {
    try {
        const orders = readOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
});

// GET - Pedido específico
app.get('/api/orders/:id', (req, res) => {
    try {
        const orders = readOrders();
        const order = orders.find(o => o.id === parseInt(req.params.id));
        
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedido' });
    }
});

// PUT - Atualizar status do pedido
app.put('/api/orders/:id/status', (req, res) => {
    try {
        const { status } = req.body;
        const orders = readOrders();
        const order = orders.find(o => o.id === parseInt(req.params.id));
        
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        order.status = status;
        order.updatedAt = new Date().toISOString();
        writeOrders(orders);

        res.json({
            success: true,
            message: `Status do pedido atualizado para ${status}`,
            order
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
});

// ==================== ROTAS DE RESERVAS ====================

// POST - Criar nova reserva
app.post('/api/reservations', (req, res) => {
    try {
        const { name, email, phone, guests, date, time, notes, timestamp } = req.body;

        if (!name || !email || !phone || !guests || !date || !time) {
            return res.status(400).json({ error: 'Dados incompletos' });
        }

        const reservations = readReservations();
        const newReservation = {
            id: reservations.length + 1,
            name,
            email,
            phone,
            guests: parseInt(guests),
            date,
            time,
            notes: notes || '',
            status: 'confirmada', // confirmada, cancelada, concluída
            confirmationCode: generateCode(),
            timestamp: timestamp || new Date().toISOString(),
            createdAt: new Date().toISOString()
        };

        reservations.push(newReservation);
        writeReservations(reservations);

        console.log('Nova reserva criada:', newReservation);

        res.json({
            success: true,
            reservationId: newReservation.id,
            confirmationCode: newReservation.confirmationCode,
            message: `Reserva confirmada para ${guests} pessoas em ${date} às ${time}`
        });
    } catch (error) {
        console.error('Erro ao criar reserva:', error);
        res.status(500).json({ error: 'Erro ao processar reserva' });
    }
});

// GET - Listar todas as reservas
app.get('/api/reservations', (req, res) => {
    try {
        const reservations = readReservations();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar reservas' });
    }
});

// GET - Reserva específica
app.get('/api/reservations/:id', (req, res) => {
    try {
        const reservations = readReservations();
        const reservation = reservations.find(r => r.id === parseInt(req.params.id));
        
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }

        res.json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar reserva' });
    }
});

// PUT - Atualizar reserva
app.put('/api/reservations/:id', (req, res) => {
    try {
        const { status, notes } = req.body;
        const reservations = readReservations();
        const reservation = reservations.find(r => r.id === parseInt(req.params.id));
        
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }

        if (status) reservation.status = status;
        if (notes !== undefined) reservation.notes = notes;
        reservation.updatedAt = new Date().toISOString();

        writeReservations(reservations);

        res.json({
            success: true,
            message: 'Reserva atualizada com sucesso',
            reservation
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar reserva' });
    }
});

// DELETE - Cancelar reserva
app.delete('/api/reservations/:id', (req, res) => {
    try {
        const reservations = readReservations();
        const index = reservations.findIndex(r => r.id === parseInt(req.params.id));
        
        if (index === -1) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }

        const removedReservation = reservations.splice(index, 1);
        writeReservations(reservations);

        res.json({
            success: true,
            message: 'Reserva cancelada',
            reservation: removedReservation[0]
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cancelar reserva' });
    }
});

// ==================== ROTAS GERAIS ====================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor Mar da Zinha está rodando' });
});

// Estatísticas
app.get('/api/stats', (req, res) => {
    try {
        const orders = readOrders();
        const reservations = readReservations();
        
        const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
        const pendingOrders = orders.filter(o => o.status === 'pendente').length;
        const totalReservations = reservations.length;
        const todayReservations = reservations.filter(r => 
            new Date(r.date).toDateString() === new Date().toDateString()
        ).length;

        res.json({
            totalOrders: orders.length,
            totalRevenue,
            pendingOrders,
            totalReservations,
            todayReservations,
            lastOrder: orders[orders.length - 1] || null,
            lastReservation: reservations[reservations.length - 1] || null
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estatísticas' });
    }
});

// ==================== PÁGINA ADMIN SIMPLES ====================
app.get('/admin', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Admin - Mar da Zinha</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { max-width: 1200px; margin: 0 auto; }
                h1 { color: #004370; margin-bottom: 30px; }
                .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
                .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .stat-card h3 { color: #004370; margin-bottom: 10px; }
                .stat-value { font-size: 28px; font-weight: bold; color: #735c00; }
                .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
                .section h2 { color: #004370; margin-bottom: 15px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
                th { background: #004370; color: white; }
                tr:hover { background: #f5f5f5; }
                .status { padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
                .status.pendente { background: #fff3cd; color: #856404; }
                .status.confirmado { background: #d4edda; color: #155724; }
                .status.confirmada { background: #d4edda; color: #155724; }
                .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; }
                .btn-primary { background: #004370; color: white; }
                .btn-danger { background: #dc3545; color: white; }
                .refresh { margin-bottom: 15px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🏨 Admin - Mar da Zinha</h1>
                
                <div class="stats" id="stats"></div>

                <div class="section">
                    <h2>Pedidos Recentes</h2>
                    <div class="refresh">
                        <button class="btn btn-primary" onclick="loadOrders()">Atualizar</button>
                    </div>
                    <table id="ordersTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Código</th>
                                <th>Total</th>
                                <th>Método</th>
                                <th>Status</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="section">
                    <h2>Reservas Recentes</h2>
                    <div class="refresh">
                        <button class="btn btn-primary" onclick="loadReservations()">Atualizar</button>
                    </div>
                    <table id="reservationsTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Pessoas</th>
                                <th>Data</th>
                                <th>Horário</th>
                                <th>Telefone</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>

            <script>
                async function loadStats() {
                    try {
                        const res = await fetch('/api/stats');
                        const data = await res.json();
                        
                        document.getElementById('stats').innerHTML = \`
                            <div class="stat-card">
                                <h3>Total de Pedidos</h3>
                                <div class="stat-value">\${data.totalOrders}</div>
                            </div>
                            <div class="stat-card">
                                <h3>Receita Total</h3>
                                <div class="stat-value">\${data.totalRevenue} MZN</div>
                            </div>
                            <div class="stat-card">
                                <h3>Pedidos Pendentes</h3>
                                <div class="stat-value">\${data.pendingOrders}</div>
                            </div>
                            <div class="stat-card">
                                <h3>Reservas Hoje</h3>
                                <div class="stat-value">\${data.todayReservations}</div>
                            </div>
                        \`;
                    } catch (e) {
                        console.error('Erro ao carregar estatísticas:', e);
                    }
                }

                async function loadOrders() {
                    try {
                        const res = await fetch('/api/orders');
                        const orders = await res.json();
                        
                        const tbody = document.querySelector('#ordersTable tbody');
                        tbody.innerHTML = orders.reverse().slice(0, 10).map(order => \`
                            <tr>
                                <td>#\${order.id}</td>
                                <td><strong>\${order.code}</strong></td>
                                <td>\${order.total} MZN</td>
                                <td>\${order.method}</td>
                                <td><span class="status \${order.status}">\${order.status}</span></td>
                                <td>\${new Date(order.createdAt).toLocaleString()}</td>
                            </tr>
                        \`).join('');
                    } catch (e) {
                        console.error('Erro ao carregar pedidos:', e);
                    }
                }

                async function loadReservations() {
                    try {
                        const res = await fetch('/api/reservations');
                        const reservations = await res.json();
                        
                        const tbody = document.querySelector('#reservationsTable tbody');
                        tbody.innerHTML = reservations.reverse().slice(0, 10).map(res => \`
                            <tr>
                                <td>#\${res.id}</td>
                                <td>\${res.name}</td>
                                <td>\${res.guests}</td>
                                <td>\${res.date}</td>
                                <td>\${res.time}</td>
                                <td>\${res.phone}</td>
                                <td><span class="status \${res.status}">\${res.status}</span></td>
                            </tr>
                        \`).join('');
                    } catch (e) {
                        console.error('Erro ao carregar reservas:', e);
                    }
                }

                // Carregar dados ao abrir
                loadStats();
                loadOrders();
                loadReservations();

                // Atualizar a cada 30 segundos
                setInterval(() => {
                    loadStats();
                    loadOrders();
                    loadReservations();
                }, 30000);
            </script>
        </body>
        </html>
    `);
});

// ==================== INICIAR SERVIDOR ====================
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════╗
    ║      🏨 MAR DA ZINHA - BACKEND             ║
    ║                                            ║
    ║  Servidor rodando em http://localhost:${PORT}   ║
    ║  Admin:  http://localhost:${PORT}/admin         ║
    ║  Health: http://localhost:${PORT}/api/health    ║
    ╚════════════════════════════════════════════╝
    `);
});

module.exports = app;
