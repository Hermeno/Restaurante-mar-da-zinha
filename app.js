// Menu dinâmico - pratos
const menuItems = [
    // Entradas
    {
        id: 1,
        name: "Camarão Grelhado",
        category: "entradas",
        price: 450,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yLLjr9eZZ9tb5hAGfbZym3XfuO6ZgloEc03Pg6IPoQhkDZBbQ7iY2qn0oUAWjZzlyM611HLDsX0vAypzirQfIzvGbwVXNuqTLvdXEQuhl1SMSygbXBqvFbFK0mwCorrwYzthv1yxVUthDzlzsL9wnydvgivHkTd3AiUHjeRh_BLS4XePrHBAmqCNkYac05eNjNuLlwgNbx0VglD40NX3LY_rUxMrENaHgWSXc8Lx8MloVpI8N9sxZ4j5vXC7tUiTr0QEdXilepk",
        description: "Camarões grelhados na manteiga com alho crocante"
    },
    {
        id: 2,
        name: "Tábua de Queijos e Enchidos",
        category: "entradas",
        price: 550,
        image: "https://images.unsplash.com/photo-1536599018102-c8d36b6f6e38?w=400",
        description: "Seleção premium de queijos locais e enchidos importados"
    },
    {
        id: 3,
        name: "Ostras Fritas",
        category: "entradas",
        price: 600,
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64135?w=400",
        description: "Ostras empanadas e fritas, servidas com molho de limão"
    },
    {
        id: 4,
        name: "Calamares à Romana",
        category: "entradas",
        price: 500,
        image: "https://images.unsplash.com/photo-1599599810531-b9c7b4c3f5f1?w=400",
        description: "Anéis de lula fritos crocantes com limão siciliano"
    },
    
    // Pratos Principais
    {
        id: 5,
        name: "Camarão ao Alho",
        category: "principais",
        price: 850,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yLLjr9eZZ9tb5hAGfbZym3XfuO6ZgloEc03Pg6IPoQhkDZBbQ7iY2qn0oUAWjZzlyM611HLDsX0vAypzirQfIzvGbwVXNuqTLvdXEQuhl1SMSygbXBqvFbFK0mwCorrwYzthv1yxVUthDzlzsL9wnydvgivHkTd3AiUHjeRh_BLS4XePrHBAmqCNkYac05eNjNuLlwgNbx0VglD40NX3LY_rUxMrENaHgWSXc8Lx8MloVpI8N9sxZ4j5vXC7tUiTr0QEdXilepk",
        description: "Camarões selecionados saltados em azeite virgem, alho crocante e ervas finas"
    },
    {
        id: 6,
        name: "Peixe Grelhado",
        category: "principais",
        price: 750,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAdKF_1C2OSiajYu_iu8jKqUTjely620xJW_eU2LJd2gWcd-PDrRkzqoKZU7aLVvOvYRkSQkIO1_qCBXdvCCqLSBQknMS3HxOxbVn2Rwtn0Ch4edFRH0sZb7BVR3R9igTytlq_9Z8chE8MEQRkvF40p6Cwy8Dkl0s3U8TMGqQIDjvRKmqqd4S-FSUjjrTXhAXvivkn6osWSNPj84sp43irNLy7pC9ZWdi_0OWpW1rg2JfEO3eeyLs2ZXctmqIH_WwJt9W7BmGOxk",
        description: "Peixe fresco do dia grelhado na brasa com limão siciliano"
    },
    {
        id: 7,
        name: "Frango Grelhado",
        category: "principais",
        price: 650,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
        description: "Peito de frango grelhado com especiarias e manteiga de ervas"
    },
    {
        id: 8,
        name: "Bife Grelhado",
        category: "principais",
        price: 950,
        image: "https://images.unsplash.com/photo-1504674900927-2f521f798e7b?w=400",
        description: "Bife de primeira qualidade grelhado no carvão com sal grosso"
    },
    
    // Frutos do Mar
    {
        id: 9,
        name: "Arroz de Marisco",
        category: "frutos",
        price: 1200,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLbD7GzA7eFbEpJfWqm_sibwRilfe7nvQgYyhTEdiM0aA-2aAPRd9rWv3mEEZ8R5tQcJrIrRw8OApATSNQeiKoOmHi4X6UyJCu24tBq7wwRkojU9HKoNmi7wNLtJdYgcXT6VbOLsFbCMsqIIR7cAccNCS6GFVbwB__kUnkafn5M7iPFmHjA1GwR7WkDER_EiF6blzh7khQ6-SGccxMcFNloSlZ-bD_B5DTnOWY5SPWPR_GJ3V5-FZD85QM0jbAuqI4a0HQT1B8dGk",
        description: "Arroz caldoso rico em variedades de frutos do mar e temperos tradicionais"
    },
    {
        id: 10,
        name: "Lagosta na Manteiga",
        category: "frutos",
        price: 1800,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMNTmYv7taktXNAwqEmEc3y-5i2gmxp1tUethYGv7JV0Fppf7e-nEMtwZuR-G19usIcn-OD0b2yC2R64EmHs-Td2WOFhAm31QhJY_MXIxOXmnED7ZOdn1PpOdpjZ4Tn9nBRENHETJOqqFDKLZuMSncteug546sWe4vqaUQvV663pgA9iP_8aYnjQj7ET-n0kAkvi9iu_r3vaddWQAOuLZ0_2mvnkt8SFnwVXXZlJxSCNFe93FHagPnu49OIOSqJCCVsI7k1h7fbRM",
        description: "Cauda de lagosta suculenta banhada em manteiga clarificada e especiarias"
    },
    {
        id: 11,
        name: "Moqueca de Peixe",
        category: "frutos",
        price: 900,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
        description: "Peixe fresco em molho de leite de coco com pimentão e cebola"
    },
    {
        id: 12,
        name: "Platea de Frutos do Mar",
        category: "frutos",
        price: 2200,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Seleção premium com camarão, lagosta, peixe e mariscos variados"
    },
    
    // Bebidas
    {
        id: 13,
        name: "Vinho Branco Seco",
        category: "bebidas",
        price: 250,
        image: "https://images.unsplash.com/photo-1510812704763-8f07ffd8ac28?w=400",
        description: "Vinho branco refrescante - taça de 150ml"
    },
    {
        id: 14,
        name: "Cerveja Premium",
        category: "bebidas",
        price: 120,
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400",
        description: "Cerveja gelada importada - garrafa"
    },
    {
        id: 15,
        name: "Água de Coco",
        category: "bebidas",
        price: 80,
        image: "https://images.unsplash.com/photo-1553530666-ba953a5b3cb7?w=400",
        description: "Água de coco fresca servida na casca"
    },
    {
        id: 16,
        name: "Suco Natural",
        category: "bebidas",
        price: 100,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
        description: "Suco fresco de frutas do dia - escolha a sua"
    },
    
    // Sobremesas
    {
        id: 17,
        name: "Pudim de Leite Condensado",
        category: "sobremesas",
        price: 180,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Pudim cremoso com calda de caramelo"
    },
    {
        id: 18,
        name: "Chocolate Quente com Broa",
        category: "sobremesas",
        price: 150,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Chocolate quente artesanal com pão doce"
    },
    {
        id: 19,
        name: "Semifrio de Sapataria",
        category: "sobremesas",
        price: 220,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Sobremesa gelada com doce de leite e amendoim"
    },
    {
        id: 20,
        name: "Sorveteria Artesanal",
        category: "sobremesas",
        price: 160,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
        description: "Sorvete artesanal - escolha seus sabores favoritos"
    },
    
    // Mais Entradas
    {
        id: 21,
        name: "Atun Fresco com Abacate",
        category: "entradas",
        price: 580,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Fatias finas de atum fresco com abacate e molho asiático"
    },
    {
        id: 22,
        name: "Gambas à Ajillo",
        category: "entradas",
        price: 520,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Camarões salteados em azeite, alho e pimenta"
    },
    {
        id: 23,
        name: "Mexilhões ao Vinho Branco",
        category: "entradas",
        price: 490,
        image: "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400",
        description: "Mexilhões frescos cozidos em vinho branco e ervas"
    },
    {
        id: 24,
        name: "Ceviche de Peixe",
        category: "entradas",
        price: 610,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Peixe fresco marinado em limão e especiarias peruanas"
    },
    
    // Mais Pratos Principais
    {
        id: 25,
        name: "Salmão Grelhado",
        category: "principais",
        price: 920,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Filé de salmão com manteiga de ervas e vegetais grelhados"
    },
    {
        id: 26,
        name: "Peixe Inteiro Grelhado",
        category: "principais",
        price: 850,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Peixe inteiro fresco do dia grelhado com limão e sal"
    },
    {
        id: 27,
        name: "Moqueca de Marisco",
        category: "principais",
        price: 1050,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Mix de frutos do mar em molho de leite de coco e dendê"
    },
    {
        id: 28,
        name: "Bifinho ao Molho Madeira",
        category: "principais",
        price: 1100,
        image: "https://images.unsplash.com/photo-1504674900927-2f521f798e7b?w=400",
        description: "Bife mignon em molho madeira com batata palha"
    },
    {
        id: 29,
        name: "Peixe à Portuguesa",
        category: "principais",
        price: 890,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Peixe grelhado com batata, ovos e molho à portuguesa"
    },
    
    // Mais Frutos do Mar
    {
        id: 30,
        name: "Camarões Gigantes",
        category: "frutos",
        price: 1400,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Camarões gigantes grelhados com manteiga de alho"
    },
    {
        id: 31,
        name: "Sopa de Marisco",
        category: "frutos",
        price: 950,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Sopa cremosa com camarão, peixe e mariscos variados"
    },
    {
        id: 32,
        name: "Cataplana de Frutos do Mar",
        category: "frutos",
        price: 1600,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Especialidade portuguesa com frutos do mar cozidos a vapor"
    },
    {
        id: 33,
        name: "Lula à Alhó",
        category: "frutos",
        price: 850,
        image: "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400",
        description: "Lula grelhada salteada em azeite e alho"
    },
    {
        id: 34,
        name: "Espetada de Camarão",
        category: "frutos",
        price: 1200,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        description: "Espetadas de camarão grelhadas com frutas tropicais"
    },
    
    // Mais Bebidas
    {
        id: 35,
        name: "Vinho Tinto Premium",
        category: "bebidas",
        price: 320,
        image: "https://images.unsplash.com/photo-1510812704763-8f07ffd8ac28?w=400",
        description: "Vinho tinto reserva - taça de 150ml"
    },
    {
        id: 36,
        name: "Espumante Bruto",
        category: "bebidas",
        price: 280,
        image: "https://images.unsplash.com/photo-1510812704763-8f07ffd8ac28?w=400",
        description: "Espumante seco refrescante - taça de 150ml"
    },
    {
        id: 37,
        name: "Cocktail da Casa",
        category: "bebidas",
        price: 200,
        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400",
        description: "Cocktail especial à base de cachaça e frutas tropicais"
    },
    {
        id: 38,
        name: "Caipirinha",
        category: "bebidas",
        price: 180,
        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400",
        description: "Caipirinha de cachaça com limão e açúcar"
    },
    {
        id: 39,
        name: "Refrigerante Premium",
        category: "bebidas",
        price: 90,
        image: "https://images.unsplash.com/photo-1554866585-e0bba7ae62ca?w=400",
        description: "Refrigerante importado - garrafa"
    },
    
    // Mais Sobremesas
    {
        id: 40,
        name: "Tiramisú Italiano",
        category: "sobremesas",
        price: 240,
        image: "https://images.unsplash.com/photo-1571877227200-a0332ff43bb3?w=400",
        description: "Sobremesa italiana com café e mascarpone"
    },
    {
        id: 41,
        name: "Brownie de Chocolate",
        category: "sobremesas",
        price: 200,
        image: "https://images.unsplash.com/photo-1607920591413-264ec2b0ae23?w=400",
        description: "Brownie quente com sorvete de baunilha"
    },
    {
        id: 42,
        name: "Pavê de Doce de Leite",
        category: "sobremesas",
        price: 210,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Camadas de biscoito doce e leite condensado"
    },
    {
        id: 43,
        name: "Mousse de Fruta",
        category: "sobremesas",
        price: 190,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Mousse cremosa de manga ou morango"
    },
    {
        id: 44,
        name: "Profiteroles",
        category: "sobremesas",
        price: 250,
        image: "https://images.unsplash.com/photo-1571877227200-a0332ff43bb3?w=400",
        description: "Pequenas bolas de massa com calda de chocolate quente"
    }
];

// Variáveis globais
let cart = [];
let currentFilter = 'todos';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderMenu('todos');
    loadCartFromStorage();
    updateCartUI();
});

// Renderizar menu
function renderMenu(category = 'todos') {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    const filtered = category === 'todos' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filtered.forEach(item => {
        const itemHTML = `
            <div class="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                <div class="h-48 overflow-hidden bg-gray-300">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${item.image}" alt="${item.name}">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-baseline mb-2">
                        <h3 class="text-xl text-primary font-bold">${item.name}</h3>
                        <span class="text-primary font-bold text-lg">${item.price} MZN</span>
                    </div>
                    <p class="text-on-surface-variant font-light mb-4 text-sm">${item.description}</p>
                    <button onclick="addToCart(${item.id})" class="w-full bg-primary text-white py-2 rounded hover:bg-primary-container transition font-bold uppercase tracking-widest text-xs">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
        menuGrid.innerHTML += itemHTML;
    });
}

// Filtrar menu
function filterMenu(category) {
    currentFilter = category;
    renderMenu(category);
    
    // Atualizar botões ativos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-primary', 'text-white');
        btn.classList.add('border', 'border-primary', 'text-primary');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-primary', 'text-white');
        activeBtn.classList.remove('border', 'border-primary', 'text-primary');
    }
    
    closeMobileMenu();
}

// Adicionar ao carrinho
function addToCart(itemId) {
    const item = menuItems.find(m => m.id === itemId);
    const cartItem = cart.find(c => c.id === itemId);
    
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    
    saveCartToStorage();
    updateCartUI();
    showCartNotification();
}

// Remover do carrinho
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCartUI();
}

// Atualizar quantidade
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
    } else {
        const item = cart.find(c => c.id === itemId);
        if (item) item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

// UI do Carrinho
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const subtotal = document.getElementById('subtotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 py-8 text-center">Carrinho vazio</p>';
        cartTotal.textContent = '0 MZN';
        subtotal.textContent = '0 MZN';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="border-b pb-3 flex justify-between items-center">
                <div class="flex-1">
                    <h4 class="font-bold text-sm">${item.name}</h4>
                    <p class="text-xs text-gray-500">${item.price} MZN x ${item.quantity}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-sm">-</button>
                    <span class="w-8 text-center font-bold">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-sm">+</button>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2">✕</button>
                </div>
            </div>
        `;
    }).join('');
    
    subtotal.textContent = `${total} MZN`;
    cartTotal.textContent = `${total} MZN`;
}

// Storage do carrinho
function saveCartToStorage() {
    localStorage.setItem('marzinha_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('marzinha_cart');
    if (saved) cart = JSON.parse(saved);
}

// Modais
function openCart() {
    document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function openReservationModal() {
    document.getElementById('reservationModal').classList.add('active');
    closeMobileMenu();
}

function closeReservationModal() {
    document.getElementById('reservationModal').classList.remove('active');
}

function openPaymentModal() {
    document.getElementById('paymentModal').classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function showSuccessModal(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').classList.add('active');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Menu móvel
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

document.getElementById('menuToggle').addEventListener('click', toggleMobileMenu);
document.getElementById('cartBtn').addEventListener('click', openCart);

// Checkout
function checkoutMpesa() {
    closeCart();
    openPaymentModal();
}

function payWithMpesa() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simular envio para backend
    const order = {
        items: cart,
        total: total,
        method: 'mpesa',
        timestamp: new Date().toISOString()
    };
    
    fetch('https://restaurante-mar-da-zinha.onrender.com/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log('Pedido criado:', data);
        cart = [];
        saveCartToStorage();
        closePaymentModal();
        showSuccessModal(`Pedido confirmado! Total: ${total} MZN. Use código ${data.code} para confirmar via M-Pesa em *120#`);
    })
    .catch(err => {
        console.error('Erro:', err);
        // Mesmo com erro, vamos simular o sucesso localmente
        simulateSuccess(total, 'M-Pesa');
    });
}

function payWithEmola() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const order = {
        items: cart,
        total: total,
        method: 'emola',
        timestamp: new Date().toISOString()
    };
    
    fetch('https://restaurante-mar-da-zinha.onrender.com/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log('Pedido criado:', data);
        cart = [];
        saveCartToStorage();
        closePaymentModal();
        showSuccessModal(`Pedido confirmado! Total: ${total} MZN. Código de pagamento: ${data.code}`);
    })
    .catch(err => {
        console.error('Erro:', err);
        // Mesmo com erro, vamos simular o sucesso localmente
        simulateSuccess(total, 'Emola');
    });
}

function simulateSuccess(total, method) {
    const code = 'MAR' + Math.random().toString(36).substring(7).toUpperCase();
    cart = [];
    saveCartToStorage();
    closePaymentModal();
    showSuccessModal(`Pedido confirmado! Total: ${total} MZN (${method}). Código: ${code}`);
    updateCartUI();
}

// Reserva
function submitReservation(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const reservation = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        guests: formData.get('guests'),
        date: formData.get('date'),
        time: formData.get('time'),
        notes: formData.get('notes'),
        timestamp: new Date().toISOString()
    };
    
    fetch('https://restaurante-mar-da-zinha.onrender.com/api/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    .then(res => res.json())
    .then(data => {
        console.log('Reserva criada:', data);
        showSuccessModal(`Reserva confirmada para ${reservation.guests} pessoas em ${reservation.date} às ${reservation.time}!`);
        event.target.reset();
        closeReservationModal();
    })
    .catch(err => {
        console.error('Erro:', err);
        // Simular sucesso localmente se offline
        showSuccessModal(`Reserva confirmada para ${reservation.guests} pessoas em ${reservation.date} às ${reservation.time}!`);
        event.target.reset();
        closeReservationModal();
    });
}

// Scroll para menu
function scrollToMenu() {
    document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });
}

// Notificação de item adicionado
function showCartNotification() {
    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 300);
}

// Fechar modais ao clicar fora
document.getElementById('cartModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeCart();
});

document.getElementById('reservationModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeReservationModal();
});

document.getElementById('paymentModal')?.addEventListener('click', function(e) {
    if (e.target === this) closePaymentModal();
});

document.getElementById('successModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeSuccessModal();
});
