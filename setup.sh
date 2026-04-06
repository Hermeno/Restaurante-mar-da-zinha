#!/bin/bash

echo "╔════════════════════════════════════════════╗"
echo "║      🏨 MAR DA ZINHA - SETUP SCRIPT        ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "Faça download em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ npm encontrado: $(npm --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo ""
echo "✅ Dependências instaladas com sucesso!"
echo ""
echo "╔════════════════════════════════════════════╗"
echo "║           SETUP COMPLETADO!                ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "🚀 Para iniciar o servidor, execute:"
echo "   npm start"
echo ""
echo "📖 Para mais informações, leia SETUP.md"
echo ""
