# 🚀 Guia de Instalação e Setup

## Pré-requisitos

- **Node.js** >= 12
  - Download: https://nodejs.org/
- **npm** (vem com Node.js)
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)

## ⚡ Setup Rápido (3 Passos)

### 1️⃣ Instalar Dependências

Abra o terminal na pasta `/Users/cash/Desktop/mar` e execute:

```bash
npm install
```

Vai instalar:
- Express (framework web)
- CORS (para requisições)

### 2️⃣ Iniciar o Backend

```bash
npm start
```

Vai ver:
```
╔════════════════════════════════════════════╗
║      🏨 MAR DA ZINHA - BACKEND             ║
║                                            ║
║  Servidor rodando em http://localhost:3000 ║
║  Admin:  http://localhost:3000/admin       ║
║  Health: http://localhost:3000/api/health  ║
╚════════════════════════════════════════════╝
```

**NÃO FECHE ESTE TERMINAL** - deixe rodando

### 3️⃣ Abrir o Frontend

Em outro terminal, ou no navegador, abra:

```
file:///Users/cash/Desktop/mar/index.html
```

Ou se usar Live Server do VS Code:
- Clique direito no `index.html`
- Escolha "Open with Live Server"

## ✅ Verificar se Está Funcionando

Acesse estes endereços para confirmar:

1. **Frontend**: http://localhost:5500/index.html (ou seu arquivo)
   - Deve ver o site do restaurante

2. **Backend Health**: http://localhost:3000/api/health
   - Deve retornar: `{"status":"OK","message":"Servidor Mar da Zinha está rodando"}`

3. **Dashboard Admin**: http://localhost:3000/admin
   - Dashboard com estatísticas

## 🧪 Testar Funcionalidades

### Menu Dinâmico
1. Acesse o site
2. Clique em "Ver Menu" no herói
3. Vá filtrando por categorias (Entradas, Principais, etc)

### Carrinho de Compras
1. Clique em "Adicionar ao Carrinho" em qualquer prato
2. Veja o contador de itens no ícone do carrinho aparecer
3. Clique no ícone do carrinho para abrir
4. Aumente/diminua quantidades com + e -

### Fazer Pedido
1. Com itens no carrinho
2. Clique em "Pagar com M-Pesa/Emola"
3. Escolha o método de pagamento
4. Que vai mostrar um código e confirmar no admin

### Fazer Reserva
1. Clique em "RESERVE A TABLE" no topo ou "Fazer Reserva" no herói
2. Preencha os dados
3. Clique em "Confirmar Reserva"
4. Veja a reservação no admin

### Admin
1. Acesse http://localhost:3000/admin
2. Veja todos os pedidos e reservas
3. Clique em "Atualizar" para refresh

## 📁 Estrutura de Pastas

Após instalar, a pasta ficará assim:

```
/Users/cash/Desktop/mar/
├── node_modules/              ← Dependências (criado automaticamente)
├── data/                       ← Banco de dados JSON
│   ├── orders.json            ← Pedidos
│   └── reservations.json      ← Reservas
├── index.html                 ← Site frontend
├── app.js                      ← Lógica frontend
├── server.js                   ← Backend Node.js
├── package.json               ← Configuração npm
├── package-lock.json          ← Lock de versões (criado automaticamente)
├── README.md                  ← Documentação
└── SETUP.md                   ← Este arquivo
```

## 🐛 Troubleshooting

### Erro: "npm não encontrado"
- Instale Node.js no seu computador
- Feche e reabra o terminal após instalar

### Erro: "Porta 3000 já está em uso"
Mude para outra porta em `server.js`:
```javascript
const PORT = 3001; // mude 3000 para 3001 (ou outra)
```

### Erro: "Cannot GET /api/orders"
- Verifique se o backend está rodando
- Verifique a URL no `app.js`

### Ele diz "Carrinho vazio" sempre
- Limpe o localStorage do navegador
- Pressione F12, Console, copie: `localStorage.clear()`
- Pressione Enter

### Não guarda pedidos/reservas
- Verifique se a pasta `data/` existe
- Se não existir, ela será criada automaticamente na primeira requisição
- Verifique permissões de escrita da pasta

## 🔄 Desenvolvimento Contínuo

Para desenvolvimento com auto-reload:

```bash
npm install -D nodemon
npm run dev
```

Isso vai reiniciar o servidor automaticamente quando mudar código.

## 📱 Acessar de Outro Computador/Telefone

Se quiser acessar o site de outro device:

1. Descubra o IP do seu computador:
   - **macOS/Linux**: `ifconfig | grep inet`
   - **Windows**: `ipconfig`
   
2. Encontre algo como: `192.168.x.x` ou `10.0.x.x`

3. No outro device, acesse:
   ```
   http://seu-ip:3000/admin
   http://seu-ip:5500 (se Live Server)
   ```
   
   Exemplo: `http://192.168.1.100:5500/index.html`

## 🛑 Parar o Servidor

- Clique no terminal do Node.js
- Pressione `Ctrl+C`

## ✨ Personalizações Rápidas

### Mudar Nome do Restaurante
Em `index.html`, procure por "MAR DA ZINHA" e mude

### Mudar Cores
Em `index.html`, na seção de cores em `tailwind.config`

### Adicionar/Remover Pratos
Em `app.js`, edite `const menuItems = [...]`

### Mudar Telefone/Horário
No footer do `index.html` ou em `server.js`

## 🎉 Pronto!

Seu site está 100% funcional:
- ✅ Menu dinâmico
- ✅ Carrinho de compras
- ✅ Pagamentos (M-Pesa/Emola)
- ✅ Sistema de reservas
- ✅ Backend completo
- ✅ Admin dashboard

Divirta-se! 🍽️
