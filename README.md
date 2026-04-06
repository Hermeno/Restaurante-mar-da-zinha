# 🏨 Mar da Zinha - Sistema Completo

Um site funcional de restaurante com menu dinâmico, carrinho de compras, integração de pagamentos (M-Pesa/Emola) e sistema de reservas.

## 📋 Funcionalidades

✅ **Menu Dinâmico**
- 20+ pratos divididos em 6 categorias
- Filtros por categoria
- Imagens e descrições de cada prato

✅ **Carrinho de Compras**
- Adicionar/remover itens
- Aumentar/diminuir quantidade
- Armazenamento local (persiste ao recarregar)
- Visualização total e subtotal

✅ **Pagamento**
- Integração M-Pesa
- Integração Emola
- Códigos únicos de pedido
- Confirmação de pagamento

✅ **Sistema de Reservas**
- Formulário completo
- Data, hora, número de pessoas
- Confirmação por email/SMS
- Armazenamento no backend

✅ **Backend Simples**
- API REST com Node.js/Express
- Armazenamento em JSON (sem banco de dados complexo)
- Endpoint de admin para visualizar pedidos e reservas
- Estatísticas em tempo real

✅ **Responsivo**
- Trabalha em mobile, tablet e desktop
- Menu mobile funcional
- Navegação intuitiva

## 🚀 Como Usar

### 1. Instalar Dependências (Backend)

```bash
cd /Users/cash/Desktop/mar
npm install
```

### 2. Iniciar o Backend

```bash
npm start
```

O servidor vai rodar em `http://localhost:3000`

### 3. Abrir o Frontend

Abra `index.html` no navegador (ou use Live Server do VS Code)

```
http://localhost:5500/index.html (se usar Live Server)
ou simplesmente abra arquivo no navegador
```

## 📁 Estrutura de Arquivos

```
/mar/
├── index.html           # Frontend principal
├── app.js               # Lógica do frontend (JavaScript)
├── server.js            # Backend Node.js
├── package.json         # Dependências npm
├── code.html            # Versão anterior (pode remover)
├── DESIGN.md            # Documentação de design
└── data/                # Pasta criada automaticamente
    ├── orders.json      # Pedidos salvos
    └── reservations.json # Reservas salvas
```

## 🌐 Endpoints da API

### Pedidos
- `POST /api/orders` - Criar novo pedido
- `GET /api/orders` - Listar todos os pedidos
- `GET /api/orders/:id` - Obter pedido específico
- `PUT /api/orders/:id/status` - Atualizar status

### Reservas
- `POST /api/reservations` - Criar nova reserva
- `GET /api/reservations` - Listar todas as reservas
- `GET /api/reservations/:id` - Obter reserva específica
- `PUT /api/reservations/:id` - Atualizar reserva
- `DELETE /api/reservations/:id` - Cancelar reserva

### Geral
- `GET /api/health` - Verificar saúde do servidor
- `GET /api/stats` - Estatísticas gerais
- `GET /admin` - Dashboard admin

## 🛍️ Fluxo do Cliente

1. **Navegar pelo Menu**
   - Filtrar por categoria
   - Ver detalhes de cada prato

2. **Adicionar ao Carrinho**
   - Clicar em "Adicionar ao Carrinho"
   - Gerenciar quantidade

3. **Checkout**
   - Clicar no carrinho
   - Escolher método de pagamento (M-Pesa ou Emola)

4. **Confirmação**
   - Receber código de pedido
   - Realizar pagamento via M-Pesa (*120#) ou Emola

## 📅 Reservas

Clientes podem:
- Escolher data e horário
- Indicar número de pessoas
- Adicionar observações (alergias, preferências)
- Receber confirmação com código

## 💾 Dados Armazenados

**Pedidos (orders.json)**
```json
{
  "id": 1,
  "code": "MAR1A2B3C",
  "items": [...],
  "total": 1500,
  "method": "mpesa",
  "status": "pendente",
  "timestamp": "2024-04-06T10:30:00Z"
}
```

**Reservas (reservations.json)**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "+258 84 000 0000",
  "guests": 2,
  "date": "2024-04-10",
  "time": "19:00",
  "status": "confirmada",
  "confirmationCode": "MAR1A2B3C"
}
```

## 🔧 Configuração

### Porta do Backend
Por padrão usa porta 3000. Para mudar:
```javascript
// Em server.js, mude:
const PORT = 3000; // para a porta desejada
```

### URL da API (Frontend)
Se o backend estiver em outra máquina/porta:
```javascript
// Em app.js, mude:
fetch('http://localhost:3000/api/orders', ...)
// para:
fetch('http://seu-servidor:porta/api/orders', ...)
```

## 📱 M-Pesa / Emola

O sistema atualmente simula os pagamentos. Para integração real:

1. Registre-se nas APIs de M-Pesa/Emola
2. Obtenha credenciais (API key, etc)
3. Implemente a integração no `app.js`

Exemplo simplificado:
```javascript
// Adicione seu código de integração aqui
async function payWithMpesa() {
    // Chamada para API real de M-Pesa
    // const response = await fetch('https://mpesa-api.com/payment', {...})
}
```

## 👨‍💼 Dashboard Admin

Acesse em `http://localhost:3000/admin`

Veja:
- Total de pedidos e receita
- Pedidos pendentes
- Últimas reservas
- Status de tudo em tempo real

## 🎨 Customização

### Cores
Edite as cores em `index.html` dentro da seção `<style>` ou em `tailwind.config`

### Menu
Edite `menuItems` em `app.js` para adicionar/remover pratos

### Informações do Restaurante
Edite as informações no `footer` e `nav`

## 📝 Notas

- Sem banco de dados complexo (usa JSON)
- Sem autenticação (para ambiente simples)
- Sem múltiplos usuários
- Simples de expandir

## 🚀 Próximos Passos (Opcionais)

- [ ] Integração com MongoDB/PostgreSQL
- [ ] Autenticação de usuários
- [ ] Histórico de pedidos por cliente
- [ ] Notificações via WhatsApp
- [ ] Integração real com M-Pesa/Emola
- [ ] Sistema de avaliações
- [ ] Promoções e cupons

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. Se o backend está rodando (`npm start`)
2. Se a porta 3000 não está em uso
3. Console do navegador (F12) para erros
4. Logs do servidor

## 📄 Licença

MIT License - Livre para usar e modificar
