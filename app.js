// --- STATE & DATA ---
const state = {
    products: [
        { id: 1, name: 'Alightmotion Premium', price: 15000, category: 'desain', image: 'https://l.top4top.io/p_3488eotzp7.png', description: '- Private\n- Garansi 5 Bulan\n- Email Dari Penjual / Seller\n- Resmi Support Semua Device' },
        { id: 2, name: 'Apple Music', price: 17000, category: 'streaming', image: 'https://k.top4top.io/p_348867liy5.png', description: '- Famplan\n- Bisa Invite Akun\n- Akun Diberikan\n- Full Garansi' },
        { id: 3, name: 'Apple Music Famplan', price: 35000, category: 'streaming', image: 'https://k.top4top.io/p_348867liy5.png', description: '- Head Famplan\n- Bisa Invite 5 Akun\n- Full Garansi' },
        { id: 4, name: 'Apple Cloud', price: 30000, category: 'lainnya', image: 'https://d.top4top.io/p_34887vi5w7.png', description: '- Harga per 3 Bulan\n- Full Garansi' },
        { id: 5, name: 'Bstation Sharing', price: 15000, category: 'streaming', image: 'https://f.top4top.io/p_3488n7k7r0.png', description: '- Harga per Bulan (Rp30.000/Tahun)\n- Tidak ada detail' },
        { id: 6, name: 'Bstation Private', price: 60000, category: 'streaming', image: 'https://f.top4top.io/p_3488n7k7r0.png', description: '- Harga per Bulan\n- Tanyakan Stock Terlebih Dahulu\n- Private No Rusuh\n- Akun Dari Seller' },
        { id: 7, name: 'Canva Pro Designer', price: 5000, category: 'desain', image: 'https://e.top4top.io/p_3488tyaha8.png', description: '- Harga per Bulan\n- Via Invite Email\n- Garansi 1 Bulan' },
        { id: 8, name: 'Canva Pro Owner', price: 15000, category: 'desain', image: 'https://e.top4top.io/p_3488tyaha8.png', description: '- Harga per Bulan\n- Bisa Invite 100 Member\n- Tanyakan Stock\n- Via Invite Email\n- Garansi 1 Bulan' },
        { id: 9, name: 'Canva Pro Lifetime Edu', price: 25000, category: 'desain', image: 'https://e.top4top.io/p_3488tyaha8.png', description: '- Garansi Seumur Hidup\n- Via Invite Email' },
        { id: 10, name: 'Capcut Pro Private', price: 50000, category: 'desain', image: 'https://i.top4top.io/p_3488vpji41.png', description: '- Harga per Bulan\n- Tanyakan Stock\n- Rekomendasi Agar Tidak Terkena Limit\n- Akun Dari Seller' },
        { id: 11, name: 'Capcut Pro Sharing', price: 25000, category: 'desain', image: 'https://i.top4top.io/p_3488vpji41.png', description: '- Harga per Bulan\n- Tanyakan Stock\n- Garansi Back Free\n- Akun Dari Seller' },
        { id: 12, name: 'ChatGPT Sharing', price: 45000, category: 'produktivitas', image: 'https://a.top4top.io/p_3488iclvr8.png', description: '- Full Garansi\n- Sharing 10 user\n- Pemakaian 1 user 3-4 jam per hari\n- Reset limit setiap pukul 17.00' },
        { id: 13, name: 'Netflix Premium 4K Sharing', price: 40000, category: 'streaming', image: 'https://h.top4top.io/p_3488tvptq2.png', description: '- 1 Profile 1 User\n- Kualitas 4K UHD\n- Full Garansi\n- Durasi 25-30 Hari' },
        { id: 14, name: 'Netflix Premium 4K Semi Private', price: 52000, category: 'streaming', image: 'https://h.top4top.io/p_3488tvptq2.png', description: '- Kualitas 4K UHD\n- Full Garansi\n- Durasi 25-30 Hari' },
        { id: 15, name: 'iQIYI Sharing', price: 17000, category: 'streaming', image: 'https://c.top4top.io/p_3488mdkyu6.png', description: '- Harga per Bulan (Rp25.000/Tahun)\n- Akun Dari Seller\n- Full Garansi' },
        { id: 16, name: 'Lightroom Sharing', price: 35000, category: 'desain', image: 'https://k.top4top.io/p_3488l4rj52.png', description: '- Akun Dari Seller' },
        { id: 17, name: 'Microsoft 365', price: 25000, category: 'produktivitas', image: 'https://i.top4top.io/p_34888zxwb0.png', description: '- Harga per Bulan\n- Sistem Invite Email Customer' },
        { id: 18, name: 'Prime Video Private', price: 20000, category: 'streaming', image: 'https://b.top4top.io/p_3488y48tr5.png', description: '- Akun Dari Seller\n- Support Semua Device\n- Full Garansi' },
        { id: 19, name: 'Remini Sharing Web/Apk', price: 18000, category: 'desain', image: 'https://a.top4top.io/p_34886tl6i4.png', description: '- Akun Dari Seller\n- Web iOS & Pro Aplikasi Android\n- Full Garansi' },
        { id: 20, name: 'Vidio Platinum Private', price: 36000, category: 'streaming', image: 'https://j.top4top.io/p_3488cifr61.png', description: '- Akun Dari Seller\n- Free Akses Liga1, TV Nasional, LaLiga, dll.' },
        { id: 21, name: 'Vidio Diamond Private', price: 125000, category: 'streaming', image: 'https://j.top4top.io/p_3488cifr61.png', description: '- Tanyakan Stock\n- Akun Dari Seller\n- Akses Konten Platinum & Premier League' },
        { id: 22, name: 'Viu Premium Private Basic', price: 2000, category: 'streaming', image: 'https://h.top4top.io/p_3488svn2j0.png', description: '- Harga per 1 Bulan\n- Opsi 3, 6, 12 bulan tersedia\n- Akun Dari Seller' },
        { id: 23, name: 'Wink Premium Sharing', price: 30000, category: 'desain', image: 'https://l.top4top.io/p_348820tw73.png', description: '- Akun Dari Seller\n- iOS Pasti Support, tidak semua Android support' },
        { id: 24, name: 'Youku Sharing', price: 15000, category: 'streaming', image: 'https://i.top4top.io/p_3488a6tdt3.png', description: '- Harga per 1 Bulan\n- Opsi 3 & 12 bulan tersedia\n- Akun Dari Seller' },
        { id: 25, name: 'Youtube Premium (Famplan)', price: 7000, category: 'streaming', image: 'https://f.top4top.io/p_3488nb21n9.png', description: '- Harga per 1 Bulan\n- Invite via Email Buyer\n- Include YT Music' },
        { id: 26, name: 'Youtube Premium (Individual)', price: 15000, category: 'streaming', image: 'https://f.top4top.io/p_3488nb21n9.png', description: '- Harga per 1 Bulan\n- Individual / Famhead\n- Include YT Music' },
        { id: 27, name: 'Zoom Private', price: 15000, category: 'produktivitas', image: 'https://g.top4top.io/p_3488zvk1h1.png', description: '- Harga per 2 Minggu\n- Max 100 Peserta\n- Full Garansi' },
    ],
    cart: [], 
    orders: [], 
    pageHistory: ['page-home'], 
    activeFilter: 'semua', 
    paymentTimerInterval: null, 
    selectedPaymentMethod: null
};

const paymentMethods = {
    seabank: { name: 'SeaBank', number: '901205052597', owner: 'JAJANG NURJAMAN', type: 'bank', fee: 2000 },
    bca: { name: 'BCA', number: '7753160550', owner: 'JAJANG NURJAMAN', type: 'bank', fee: 2000 },
    dana: { name: 'DANA', number: '083175546255', owner: 'JAJANG NURJAMAN', type: 'ewallet', fee: 1000 },
    gopay: { name: 'Gopay', number: '089654291565', owner: 'JAJANG NURJAMAN', type: 'ewallet', fee: 1000 }
};

const util = {
    formatCurrency: (amount) => `Rp${amount.toLocaleString('id-ID')`,
    saveToLocalStorage: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    loadFromLocalStorage: (key) => JSON.parse(localStorage.getItem(key)) || [],
    cleanupOldOrders: () => {
        const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        state.orders = state.orders.filter(order => new Date(order.date).getTime() > sevenDaysAgo);
        util.saveToLocalStorage('orders', state.orders);
    }
};

function renderPage(pageId, content) {
    document.getElementById(pageId).innerHTML = content;
    lucide.createIcons();
}

const pageRenderers = {
    'page-home': () => {
        const content = `<div class="p-4"><header class="mb-6"><div><p class="text-sm text-gray-400">Selamat Datang,</p><h1 class="text-2xl font-bold">Pengguna Morphins</h1></div></header><div id="filter-container" class="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2"><button class="filter-btn active px-4 py-1.5 text-sm whitespace-nowrap" data-filter="semua">Semua</button><button class="filter-btn px-4 py-1.5 text-sm whitespace-nowrap" data-filter="streaming">Streaming</button><button class="filter-btn px-4 py-1.5 text-sm whitespace-nowrap" data-filter="desain">Desain</button><button class="filter-btn px-4 py-1.5 text-sm whitespace-nowrap" data-filter="produktivitas">Produktivitas</button><button class="filter-btn px-4 py-1.5 text-sm whitespace-nowrap" data-filter="lainnya">Lainnya</button></div><section><h2 class="text-xl font-bold mb-4">Semua Produk</h2><div id="product-grid" class="grid grid-cols-2 gap-4"></div></section></div>`;
        renderPage('page-home', content);
        renderProducts();
        document.getElementById('filter-container')?.addEventListener('click', e => {
            const btn = e.target.closest('button');
            if (btn?.dataset.filter) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.activeFilter = btn.dataset.filter;
                renderProducts();
            }
        });
    },
    'page-search': () => {
        const content = `<div class="p-4"><header class="mb-6"><h1 class="text-2xl font-bold">Pencarian</h1></header><div class="relative"><i data-lucide="search" class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i><input id="search-page-input" type="text" placeholder="Ketik untuk mencari..." class="w-full bg-[#1c1c1e] border border-gray-700 rounded-full p-3 pl-14"></div><div id="search-results-container" class="mt-6"></div></div>`;
        renderPage('page-search', content);
        document.getElementById('search-page-input').addEventListener('input', e => renderSearchResults(e.target.value));
        renderSearchResults('');
    },
    'page-cart': () => {
        const selectAllCheckbox = state.cart.length ? `<label class="flex items-center gap-2 text-sm"><input type="checkbox" id="select-all-cart" class="w-4 h-4">Pilih Semua</label>` : '';
        const content = `<div class="p-4"><header class="flex justify-between items-center mb-6"><h1 class="text-2xl font-bold">Keranjang</h1>${selectAllCheckbox}</header><div id="cart-items-list" class="space-y-3">${state.cart.length ? state.cart.map(item => `<div class="flex items-center gap-3 bg-[#1c1c1e] p-3 rounded-xl"><input type="checkbox" class="cart-item-checkbox w-5 h-5" data-id="${item.id}" data-price="${item.price}"><img src="${item.image}" class="w-16 h-16 rounded-lg object-cover"><div class="flex-grow"><h3>${item.name}</h3><p class="font-bold">${util.formatCurrency(item.price)}</p></div><i data-lucide="trash-2" class="cart-item-delete" onclick="handleDeleteCartItem(${item.id})"></i></div>`).join('') : `<div class="text-center text-gray-500 py-20"><p>Keranjangmu masih kosong.</p></div>`}</div>${state.cart.length ? `<div class="mt-8 pt-4 border-t border-gray-800"><div class="flex justify-between text-lg mb-4"><span>Total</span><span id="cart-total" class="font-bold">Rp0</span></div><button id="pay-selected-btn" onclick="handleCheckoutFromCart()" class="w-full btn btn-primary" disabled><i data-lucide="shield-check"></i> Bayar yang Dipilih</button></div>` : ''}</div>`;
        renderPage('page-cart', content);
        if (state.cart.length) {
            setupCartEventListeners();
        }
    },
    'page-profile': () => {
        const content = `<div class="p-4"><header class="mb-8"><h1 class="text-2xl font-bold">Pengaturan</h1></header><div class="text-center mb-8"><img src="https://placehold.co/100x100/3f3f46/ffffff?text=U" class="w-24 h-24 rounded-full mx-auto mb-4"><h2 class="text-xl font-bold">Pengguna Morphins</h2></div><div class="space-y-3"><button onclick="navigateTo('page-edit-profile')" class="w-full flex justify-between items-center bg-[#1c1c1e] p-4 rounded-xl text-left"><span class="flex items-center gap-3"><i data-lucide="user"></i>Edit Profil</span><i data-lucide="chevron-right"></i></button><button onclick="navigateTo('page-order-history')" class="w-full flex justify-between items-center bg-[#1c1c1e] p-4 rounded-xl text-left"><span class="flex items-center gap-3"><i data-lucide="history"></i>Riwayat Pembelian</span><i data-lucide="chevron-right"></i></button><button onclick="navigateTo('page-terms')" class="w-full flex justify-between items-center bg-[#1c1c1e] p-4 rounded-xl text-left"><span class="flex items-center gap-3"><i data-lucide="file-text"></i>Syarat & Ketentuan</span><i data-lucide="chevron-right"></i></button><button onclick="handleLogout()" class="w-full flex justify-between items-center bg-red-800/20 text-red-400 p-4 rounded-xl mt-6 text-left"><span class="flex items-center gap-3 font-bold"><i data-lucide="log-out"></i>Logout</span></button></div></div>`;
        renderPage('page-profile', content);
    },
    'page-order-history': () => {
        const content = `<div class="p-4"><header class="flex items-center mb-6"><button onclick="navigateBack()" class="mr-2 p-2"><i data-lucide="arrow-left"></i></button><h1 class="text-xl font-bold">Riwayat Pembelian</h1></header><div class="space-y-3">${state.orders.length ? state.orders.map(order => `<div class="bg-[#1c1c1e] p-4 rounded-xl"><div><span class="font-bold">${order.orderNumber}</span><span class="text-xs text-gray-400 float-right">${new Date(order.date).toLocaleDateString('id-ID')}</span></div><p class="text-right font-semibold mt-2">${util.formatCurrency(order.total)}</p></div>`).join('') : `<p class="text-center text-gray-500">Belum ada riwayat pesanan.</p>`}</div></div>`;
        renderPage('page-order-history', content);
    },
    'page-edit-profile': () => {
        const content = `<div class="p-4"><header class="flex items-center mb-6"><button onclick="navigateBack()" class="mr-2 p-2"><i data-lucide="arrow-left"></i></button><h1 class="text-xl font-bold">Edit Profil</h1></header><form class="space-y-4" onsubmit="event.preventDefault(); alert('Profil Disimpan!');"><label class="block"><span class="text-sm text-gray-400">Nama Penerima</span><input type="text" class="form-input" value="Pengguna Morphins"></label><label class="block"><span class="text-sm text-gray-400">Nomor Rekening</span><input type="text" class="form-input" placeholder="cth: 1234567890"></label><label class="block"><span class="text-sm text-gray-400">Nama Bank / E-Wallet</span><input type="text" class="form-input" placeholder="cth: BCA atau DANA"></label><button type="submit" class="w-full btn btn-primary mt-4">Simpan</button></form></div>`;
        renderPage('page-edit-profile', content);
    },
    'page-terms': () => {
        const content = `<div class="p-4"><header class="flex items-center mb-6"><button onclick="navigateBack()" class="mr-2 p-2"><i data-lucide="arrow-left"></i></button><h1 class="text-xl font-bold">Syarat & Ketentuan</h1></header><div class="text-gray-300 space-y-4"><h3>1. Penggunaan Produk</h3><p class="text-sm">Semua produk digital yang dibeli adalah untuk penggunaan pribadi dan tidak boleh didistribusikan ulang.</p><h3>2. Pembayaran</h3><p class="text-sm">Pembayaran harus diselesaikan dalam 10 menit. Jika tidak, pesanan akan dibatalkan. Kami tidak bertanggung jawab atas kesalahan transfer.</p><h3>3. Pengembalian Dana</h3><p class="text-sm">Semua penjualan bersifat final dan tidak ada pengembalian dana karena sifat produk digital.</p></div></div>`;
        renderPage('page-terms', content);
    },
    'page-detail': (product) => {
        const content = `<div class="p-4"><header class="flex items-center mb-4"><button onclick="navigateBack()" class="mr-2 p-2"><i data-lucide="arrow-left"></i></button><h1 class="text-xl font-bold">Detail Produk</h1></header><img src="${product.image}" class="w-full h-56 object-cover rounded-xl mb-4"><h2 class="text-2xl font-bold">${product.name}</h2><p class="text-gray-400 mb-2">${product.category}</p><p class="text-xl font-bold my-4">${util.formatCurrency(product.price)}</p><p class="text-gray-300 mb-6" style="white-space: pre-wrap;">${product.description}</p><div class="flex gap-3"><button onclick="handleAddToCart(${product.id})" class="w-full btn btn-secondary"><i data-lucide="shopping-cart"></i> Keranjang</button><button onclick="handleBuyNow(${product.id})" class="w-full btn btn-primary"><i data-lucide="zap"></i> Beli Sekarang</button></div></div>`;
        renderPage('page-detail', content);
    },
    'page-payment': (order) => {
        const paymentMethodsHTML = Object.keys(paymentMethods).map(key => `
            <div class="payment-method border border-gray-700 p-3 rounded-xl cursor-pointer" onclick="handleSelectPayment('${key}')">
                <p class="font-semibold">${paymentMethods[key].name}</p>
            </div>`).join('');
        const content = `<div class="p-4"><header class="mb-4"><h1 class="text-xl font-bold">Pembayaran</h1></header><div id="payment-timer" class="text-center font-bold text-2xl text-red-500 mb-4"></div><div class="bg-[#1c1c1e] p-4 rounded-xl mb-4"><div class="flex justify-between"><span>Subtotal</span><span>${util.formatCurrency(order.subtotal)}</span></div><div class="flex justify-between"><span>Biaya Admin</span><span id="admin-fee-display">-</span></div><hr class="border-gray-700 my-2"><div class="flex justify-between font-bold text-lg"><span>Total</span><span id="total-payment-display">${util.formatCurrency(order.subtotal)}</span></div></div><h3 class="font-bold mb-2">Pilih Metode Pembayaran</h3><div class="grid grid-cols-2 gap-3 mb-4">${paymentMethodsHTML}</div><div id="payment-details-container" class="mb-6"></div><div class="space-y-3"><button id="confirm-payment-btn" onclick="handleConfirmPayment()" class="w-full btn btn-primary" disabled>Saya Sudah Bayar</button></div></div>`;
        renderPage('page-payment', content);
        startPaymentTimer(order.paymentDeadline);
    },
    'page-confirmation': (order) => {
        const content = `<div class="p-4 text-center py-20"><div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><i data-lucide="check" class="w-10 h-10"></i></div><h2 class="text-xl font-bold">Pembayaran Dikonfirmasi</h2><p class="text-gray-400">Pesanan #${order.orderNumber} akan diproses.</p><button onclick="navigateTo('page-home', true)" class="w-full btn btn-primary mt-6">Kembali ke Beranda</button></div>`;
        renderPage('page-confirmation', content);
    }
};

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    let products = state.products.filter(p => state.activeFilter === 'semua' || p.category === state.activeFilter);
    grid.innerHTML = products.map(product => `<div class="bg-[#1c1c1e] rounded-xl flex flex-col"><div class="relative cursor-pointer" onclick="handleViewDetail(${product.id})"><img src="${product.image}" class="w-full h-36 object-cover rounded-t-xl"><div class="absolute top-3 right-3 bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded-full">${product.category}</div></div><div class="p-3 flex items-center justify-between"><div><h3 class="font-semibold text-sm">${product.name}</h3><p class="font-bold">${util.formatCurrency(product.price)}</p></div><button onclick="handleViewDetail(${product.id})" class="bg-white text-black rounded-full p-2 hover:bg-gray-200"><i data-lucide="arrow-right" class="w-4 h-4"></i></button></div></div>`).join('');
    lucide.createIcons();
}

function renderSearchResults(query) {
    const container = document.getElementById('search-results-container');
    if (!container) return;
    if (!query) return container.innerHTML = `<div class="text-center text-gray-500 py-20"><p>Cari produk favoritmu.</p></div>`;
    let results = state.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    container.innerHTML = results.length ? `<div class="grid grid-cols-2 gap-4">${results.map(p => `<div class="bg-[#1c1c1e] rounded-xl cursor-pointer" onclick="handleViewDetail(${p.id})"><div class="relative"><img src="${p.image}" class="w-full h-36 object-cover rounded-t-xl"></div><div class="p-3"><h3 class="font-semibold">${p.name}</h3><p class="font-bold">${util.formatCurrency(p.price)}</p></div></div>`).join('')}</div>` : `<div class="text-center text-gray-500"><p>Produk "${query}" tidak ditemukan.</p></div>`;
    lucide.createIcons();
}

function showModal(content) {
    document.getElementById('modal-overlay').style.display = 'block';
    const modalContent = document.getElementById('
