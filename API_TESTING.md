# API Testing - Mar da Zinha

## Health Check
```bash
curl http://localhost:3000/api/health
```

## Criar Pedido (POST)
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"id": 1, "name": "Camarão Grelhado", "price": 450, "quantity": 2}
    ],
    "total": 900,
    "method": "mpesa"
  }'
```

## Listar Pedidos (GET)
```bash
curl http://localhost:3000/api/orders
```

## Obter Pedido Específico
```bash
curl http://localhost:3000/api/orders/1
```

## Atualizar Status de Pedido
```bash
curl -X PUT http://localhost:3000/api/orders/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "confirmado"}'
```

## Criar Reserva (POST)
```bash
curl -X POST http://localhost:3000/api/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "+258 84 000 0000",
    "guests": 4,
    "date": "2024-04-10",
    "time": "19:00",
    "notes": "Sem pimenta por favor"
  }'
```

## Listar Reservas (GET)
```bash
curl http://localhost:3000/api/reservations
```

## Obter Reserva Específica
```bash
curl http://localhost:3000/api/reservations/1
```

## Atualizar Reserva (PUT)
```bash
curl -X PUT http://localhost:3000/api/reservations/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmada",
    "notes": "Mesa perto da janela"
  }'
```

## Cancelar Reserva (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/reservations/1
```

## Obter Estatísticas
```bash
curl http://localhost:3000/api/stats
```

## Usando Postman

1. Importe estas requisições em Postman ou use o Thunder Client do VS Code
2. Altere `localhost:3000` para o seu servidor
3. Adicione as seguintes headers:
   - Content-Type: application/json
   - Accept: application/json

## PowerShell (Windows)

```powershell
# Health Check
Invoke-WebRequest -Uri http://localhost:3000/api/health

# Criar Pedido
$body = @{
    items = @(@{id=1; name="Camarão Grelhado"; price=450; quantity=2})
    total = 900
    method = "mpesa"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/api/orders `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```
