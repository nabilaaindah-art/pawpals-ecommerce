function pawPalsApp() {
            return {
                activePage: 'login',
                isLoggedIn: false,
                isAdminLoggedIn: false,
                loginForm: { username: '', password: '' },
                adminLoginForm: { username: '', password: '' },
                accountTab: 'overview',
                cartDrawerOpen: false,
                mobileFilterOpen: false,
                sellerAddModal: false,
                adminProductModal: false,
                selectedProduct: null,
                detailMode: 'b2c',
                detailQty: 1,
                toast: { show: false, message: '', type: 'success' },
                paymentReference: 'PP-DEMO-' + Date.now().toString(36).toUpperCase(),
                virtualAccountNumber: '8808123456789012',
                qrRenderError: '',

                adminProductForm: {
                    id: null,
                    name: '',
                    brand: 'PawPals Official',
                    category: 'Pet Food',
                    pet: 'Kucing',
                    retailPrice: 150000,
                    wholesalePrice: 125000,
                    moq: 5,
                    stock: 50,
                    image: ''
                },

                newProductForm: {
                    name: '',
                    category: 'Pet Food',
                    retailPrice: 120000,
                    wholesalePrice: 95000,
                    moq: 5,
                    stock: 40
                },

                filters: {
                    search: '',
                    category: 'All',
                    pet: 'All',
                    wholesaleOnly: false,
                    sort: 'featured'
                },

                checkoutForm: {
                    courier: 'PawExpress Reguler (2-3 Hari)',
                    shippingCost: 15000,
                    paymentMethod: 'QRIS Instant'
                },
                buyerAddress: {
                    name: 'Nabila Indah Kurniadi',
                    phone: '0812-8899-7766',
                    street: 'Jl. Kemang Raya No. 42',
                    district: 'Mampang Prapatan',
                    city: 'Jakarta Selatan',
                    province: 'DKI Jakarta',
                    postalCode: '12730'
                },
                addressForm: {
                    name: '',
                    phone: '',
                    street: '',
                    district: '',
                    city: '',
                    province: '',
                    postalCode: ''
                },
                trackingOrderId: null,
                trackingStages: [
                    'Pesanan dibuat',
                    'Pembayaran dikonfirmasi',
                    'Diproses seller',
                    'Dalam pengiriman',
                    'Pesanan diterima'
                ],

                petTypes: [
                    { name: 'Anjing', emoji: '🐶' },
                    { name: 'Kucing', emoji: '🐱' },
                    { name: 'Burung', emoji: '🦜' },
                    { name: 'Ikan', emoji: '🐠' },
                    { name: 'Kelinci', emoji: '🐰' },
                    { name: 'Hamster', emoji: '🐹' },
                    { name: 'Reptil', emoji: '🦎' },
                    { name: 'Lainnya', emoji: '🐾' }
                ],

                categories: [
                    { name: 'Pet Food', emoji: '🍲', subtitle: 'Dry, Wet, Grain-Free & Organic Food' },
                    { name: 'Treats & Snacks', emoji: '🦴', subtitle: 'Dental Treats & Training Snacks' },
                    { name: 'Pet Accessories', emoji: ' collar', subtitle: 'Collar, Leash, Harness, Bed & Bowl' },
                    { name: 'Toys & Entertainment', emoji: '🎾', subtitle: 'Interactive Toys & Scratching Post' },
                    { name: 'Grooming & Hygiene', emoji: '🛁', subtitle: 'Shampoo, Brush, Wipes & Perfume' },
                    { name: 'Health & Wellness', emoji: '🩺', subtitle: 'Vitamin, Dental & Flea Care' },
                    { name: 'Cat Supplies', emoji: '🐈', subtitle: 'Cat Litter, Litter Box & Furniture' },
                    { name: 'Small Animals', emoji: '🐹', subtitle: 'Rabbit, Hamster, Bird, Fish & Reptile' }
                ],

                products: [
                    {
                        id: 1,
                        name: 'Royal Holistic Grain-Free Salmon & Sweet Potato 4kg',
                        sku: 'PP-FD-001',
                        brand: 'NutriPaws',
                        store: 'PawPals Official Flagship',
                        category: 'Pet Food',
                        pet: 'Anjing',
                        retailPrice: 345000,
                        discountPrice: 299000,
                        isWholesale: true,
                        moq: 5,
                        wholesalePrice: 255000,
                        tiers: [
                            { label: '5 - 9 Unit', min: 5, max: 9, price: 255000 },
                            { label: '10 - 24 Unit', min: 10, max: 24, price: 238000 },
                            { label: '25+ Unit', min: 25, max: null, price: 220000 }
                        ],
                        stock: 85,
                        rating: '4.9',
                        badge: 'Best Seller',
                        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80',
                        description: 'Makanan anjing kering bebas biji-bijian dengan protein salmon segar kaya Omega-3 untuk kesehatan kulit, bulu berkilau, dan pencernaan sensitif.'
                    },
                    {
                        id: 2,
                        name: 'PurrOrganic Indoor Hairball Control Cat Food 2.5kg',
                        sku: 'PP-FD-002',
                        brand: 'PurrOrganic',
                        store: 'PawPals Official Flagship',
                        category: 'Pet Food',
                        pet: 'Kucing',
                        retailPrice: 215000,
                        discountPrice: 189000,
                        isWholesale: true,
                        moq: 6,
                        wholesalePrice: 162000,
                        tiers: [
                            { label: '6 - 11 Unit', min: 6, max: 11, price: 162000 },
                            { label: '12 - 29 Unit', min: 12, max: 29, price: 150000 },
                            { label: '30+ Unit', min: 30, max: null, price: 139000 }
                        ],
                        stock: 120,
                        rating: '4.9',
                        badge: 'Top Rated',
                        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80',
                        description: 'Formula khusus kucing rumahan dengan serat alami untuk mencegah hairball, mengontrol bau kotoran, dan menjaga berat badan ideal.'
                    },
                    {
                        id: 3,
                        name: 'EcoTofu Clumping Cat Litter Green Tea 7L',
                        sku: 'PP-CT-003',
                        brand: 'CleanPaw',
                        store: 'HealthyPet Supply Jakarta',
                        category: 'Cat Supplies',
                        pet: 'Kucing',
                        retailPrice: 85000,
                        discountPrice: null,
                        isWholesale: true,
                        moq: 10,
                        wholesalePrice: 64000,
                        tiers: [
                            { label: '10 - 29 Unit', min: 10, max: 29, price: 64000 },
                            { label: '30 - 59 Unit', min: 30, max: 59, price: 58000 },
                            { label: '60+ Unit', min: 60, max: null, price: 52000 }
                        ],
                        stock: 240,
                        rating: '4.8',
                        badge: 'Eco Choice',
                        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80',
                        description: 'Pasir kucing berbahan ampas tahu organik 100% biodegradable, cepat menggumpal, bebas debu, dan aman disiram ke toilet.'
                    },
                    {
                        id: 4,
                        name: 'Ergonomic Memory Foam Orthopedic Pet Bed (Large)',
                        sku: 'PP-AC-004',
                        brand: 'CozyTail',
                        store: 'CozyTail Living',
                        category: 'Pet Accessories',
                        pet: 'Anjing',
                        retailPrice: 420000,
                        discountPrice: 359000,
                        isWholesale: true,
                        moq: 3,
                        wholesalePrice: 295000,
                        tiers: [
                            { label: '3 - 7 Unit', min: 3, max: 7, price: 295000 },
                            { label: '8 - 15 Unit', min: 8, max: 15, price: 270000 },
                            { label: '16+ Unit', min: 16, max: null, price: 245000 }
                        ],
                        stock: 34,
                        rating: '4.9',
                        badge: 'Premium',
                        image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80',
                        description: 'Kasur ortopedi dengan busa memori penopang sendi, sarung kain lembut yang dapat dilepas-cuci, dan alas anti-slip.'
                    },
                    {
                        id: 5,
                        name: 'Freeze-Dried Chicken & Duck Dental Chew Treats 150g',
                        sku: 'PP-TR-005',
                        brand: 'TailBites',
                        store: 'PawPals Official Flagship',
                        category: 'Treats & Snacks',
                        pet: 'Anjing',
                        retailPrice: 78000,
                        discountPrice: 65000,
                        isWholesale: true,
                        moq: 12,
                        wholesalePrice: 51000,
                        tiers: [
                            { label: '12 - 23 Unit', min: 12, max: 23, price: 51000 },
                            { label: '24 - 49 Unit', min: 24, max: 49, price: 46000 },
                            { label: '50+ Unit', min: 50, max: null, price: 42000 }
                        ],
                        stock: 150,
                        rating: '4.8',
                        badge: 'New Arrival',
                        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80',
                        description: 'Camilan daging ayam dan bebek asli metode freeze-dried tanpa pengawet untuk membantu membersihkan karang gigi.'
                    },
                    {
                        id: 6,
                        name: 'Oatmeal & Aloe Vera Hypoallergenic Pet Shampoo 500ml',
                        sku: 'PP-GR-006',
                        brand: 'BotaniPet',
                        store: 'HealthyPet Supply Jakarta',
                        category: 'Grooming & Hygiene',
                        pet: 'Kucing',
                        retailPrice: 115000,
                        discountPrice: null,
                        isWholesale: true,
                        moq: 6,
                        wholesalePrice: 88000,
                        tiers: [
                            { label: '6 - 14 Unit', min: 6, max: 14, price: 88000 },
                            { label: '15 - 29 Unit', min: 15, max: 29, price: 80000 },
                            { label: '30+ Unit', min: 30, max: null, price: 74000 }
                        ],
                        stock: 92,
                        rating: '4.7',
                        badge: null,
                        image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80',
                        description: 'Sampo lembut bebas paraben dan sulfat untuk menenangkan kulit kering serta melembutkan bulu anjing dan kucing.'
                    },
                    {
                        id: 7,
                        name: 'Omega-3 Coat & Skin Multivitamin Soft Chews (90 Tabs)',
                        sku: 'PP-HL-007',
                        brand: 'VetVital',
                        store: 'PawPals Official Flagship',
                        category: 'Health & Wellness',
                        pet: 'Anjing',
                        retailPrice: 165000,
                        discountPrice: 145000,
                        isWholesale: true,
                        moq: 6,
                        wholesalePrice: 118000,
                        tiers: [
                            { label: '6 - 11 Unit', min: 6, max: 11, price: 118000 },
                            { label: '12+ Unit', min: 12, max: null, price: 105000 }
                        ],
                        stock: 64,
                        rating: '4.9',
                        badge: 'Vet Approved',
                        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=700&q=80',
                        description: 'Suplemen harian dengan minyak ikan salmon, biotin, dan vitamin E untuk mengurangi kerontokan bulu dan memperkuat imun.'
                    },
                    {
                        id: 8,
                        name: 'Interactive Feather & Bell Cat Scratching Tower',
                        sku: 'PP-TY-008',
                        brand: 'PlayPaws',
                        store: 'CozyTail Living',
                        category: 'Toys & Entertainment',
                        pet: 'Kucing',
                        retailPrice: 240000,
                        discountPrice: 198000,
                        isWholesale: false,
                        moq: 1,
                        wholesalePrice: 198000,
                        tiers: [],
                        stock: 28,
                        rating: '4.8',
                        badge: 'Hot Item',
                        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=700&q=80',
                        description: 'Tiang garukan tali sisal alami dengan mainan interaktif agar kucing tetap aktif dan furnitur rumah terlindungi.'
                    },
                    {
                        id: 9,
                        name: 'Organic Timothy Hay & Herbal Pellets Rabbit Pack 2kg',
                        sku: 'PP-SM-009',
                        brand: 'MeadowPets',
                        store: 'HealthyPet Supply Jakarta',
                        category: 'Small Animals',
                        pet: 'Kelinci',
                        retailPrice: 110000,
                        discountPrice: 95000,
                        isWholesale: true,
                        moq: 8,
                        wholesalePrice: 76000,
                        tiers: [
                            { label: '8 - 19 Unit', min: 8, max: 19, price: 76000 },
                            { label: '20+ Unit', min: 20, max: null, price: 68000 }
                        ],
                        stock: 54,
                        rating: '4.8',
                        badge: null,
                        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=700&q=80',
                        description: 'Rumput Timothy segar berserat tinggi dipadukan pelet herbal untuk kesehatan pencernaan dan gigi kelinci kesayangan.'
                    },
                    {
                        id: 10,
                        name: 'Silent Spinner Wheel & Wooden Hideout Hamster Set',
                        sku: 'PP-SM-010',
                        brand: 'TinyBurrow',
                        store: 'CozyTail Living',
                        category: 'Small Animals',
                        pet: 'Hamster',
                        retailPrice: 135000,
                        discountPrice: null,
                        isWholesale: true,
                        moq: 6,
                        wholesalePrice: 105000,
                        tiers: [
                            { label: '6 - 14 Unit', min: 6, max: 14, price: 105000 },
                            { label: '15+ Unit', min: 15, max: null, price: 94000 }
                        ],
                        stock: 41,
                        rating: '4.7',
                        badge: null,
                        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=700&q=80',
                        description: 'Roda lari tanpa suara dan rumah kayu alami bebas serpihan untuk kenyamanan aktivitas malam hari hamster.'
                    }
                ],

                wishlist: [1, 2],

                cart: [],

                orders: [
                    {
                        id: 'PP-20261110-8942A',
                        date: '10 Nov 2026',
                        status: 'Delivered • Completed',
                        summary: 'Royal Holistic Grain-Free Salmon 4kg (1x Retail B2C)',
                        payment: 'QRIS Instant',
                        total: 314000,
                        courier: 'PawExpress Reguler',
                        trackingNumber: 'PPE-8942A',
                        trackingStep: 5,
                        shippingAddress: {
                            name: 'Nabila Indah Kurniadi',
                            phone: '0812-8899-7766',
                            street: 'Jl. Kemang Raya No. 42',
                            district: 'Mampang Prapatan',
                            city: 'Jakarta Selatan',
                            province: 'DKI Jakarta',
                            postalCode: '12730'
                        }
                    },
                    {
                        id: 'PP-20261104-3190B',
                        date: '04 Nov 2026',
                        status: 'Completed (B2B Wholesale)',
                        summary: 'EcoTofu Clumping Cat Litter 7L (12x Grosir Tier 1)',
                        payment: 'Virtual Account BCA',
                        total: 803000,
                        courier: 'PawCargo Grosir',
                        trackingNumber: 'PPC-3190B',
                        trackingStep: 5,
                        shippingAddress: {
                            name: 'Nabila Indah Kurniadi',
                            phone: '0812-8899-7766',
                            street: 'Jl. Kemang Raya No. 42',
                            district: 'Mampang Prapatan',
                            city: 'Jakarta Selatan',
                            province: 'DKI Jakarta',
                            postalCode: '12730'
                        }
                    }
                ],

                myPets: [
                    { name: 'Mochi', emoji: '🐱', breed: 'British Shorthair', age: '2 Tahun', diet: 'Diet: Indoor Hairball Control' },
                    { name: 'Bruno', emoji: '🐶', breed: 'Golden Retriever', age: '3 Tahun', diet: 'Diet: Grain-Free Salmon' }
                ],

                initApp() {
                    this.cart = [
                        { product: this.products[0], qty: 1, mode: 'b2c' }
                    ];
                    this.addressForm = { ...this.buyerAddress };
                    try {
                        const savedAddress = window.localStorage.getItem('pawpals.buyerAddress');
                        if (savedAddress) {
                            const parsedAddress = JSON.parse(savedAddress);
                            const requiredFields = ['name', 'phone', 'street', 'district', 'city', 'province', 'postalCode'];
                            if (!parsedAddress || requiredFields.some(field => typeof parsedAddress[field] !== 'string' || !parsedAddress[field].trim())) {
                                throw new Error('Data alamat tersimpan tidak lengkap.');
                            }
                            this.buyerAddress = parsedAddress;
                            this.addressForm = { ...parsedAddress };
                        }
                    } catch (error) {
                        console.error('Gagal memuat alamat tersimpan:', error);
                        this.showToast('Alamat tersimpan tidak dapat dimuat.', 'error');
                    }
                    this.$nextTick(() => lucide.createIcons());
                },

                login() {
                    if (this.loginForm.username.trim() !== 'buyer' || this.loginForm.password !== 'buyer123') {
                        this.showToast('Username atau password tidak sesuai.', 'error');
                        return;
                    }

                    this.isLoggedIn = true;
                    this.loginForm = { username: '', password: '' };
                    this.showToast('Berhasil masuk ke PawPals.');
                    this.navigate('home');
                },

                adminLogin() {
                    if (this.adminLoginForm.username.trim() !== 'admin' || this.adminLoginForm.password !== 'admin123') {
                        this.showToast('Username atau password admin tidak sesuai.', 'error');
                        return;
                    }

                    this.isAdminLoggedIn = true;
                    this.adminLoginForm = { username: '', password: '' };
                    this.showToast('Verifikasi admin berhasil.');
                    this.navigate('admin');
                },

                logout() {
                    this.isLoggedIn = false;
                    this.isAdminLoggedIn = false;
                    this.loginForm = { username: '', password: '' };
                    this.adminLoginForm = { username: '', password: '' };
                    this.activePage = 'login';
                    this.showToast('Anda telah keluar dari akun.');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                },

                logoutAdmin() {
                    this.isAdminLoggedIn = false;
                    this.activePage = this.isLoggedIn ? 'home' : 'login';
                    this.showToast('Sesi Admin Control telah berakhir.');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                },

                saveBuyerAddress() {
                    const requiredFields = ['name', 'phone', 'street', 'district', 'city', 'province', 'postalCode'];
                    if (requiredFields.some(field => !String(this.addressForm[field] || '').trim())) {
                        this.showToast('Lengkapi semua kolom alamat terlebih dahulu.', 'error');
                        return;
                    }

                    const address = Object.fromEntries(
                        requiredFields.map(field => [field, String(this.addressForm[field]).trim()])
                    );
                    this.buyerAddress = address;
                    this.addressForm = { ...address };

                    try {
                        window.localStorage.setItem('pawpals.buyerAddress', JSON.stringify(address));
                        this.showToast('Alamat utama berhasil disimpan.');
                    } catch (error) {
                        console.error('Gagal menyimpan alamat ke browser:', error);
                        this.showToast('Alamat tersimpan untuk sesi ini, tetapi gagal disimpan permanen.', 'error');
                    }
                },

                formatAddress(address) {
                    if (!address) return 'Alamat pengiriman tidak tersedia.';
                    return [
                        address.street,
                        address.district,
                        address.city,
                        address.province,
                        address.postalCode
                    ].filter(Boolean).join(', ');
                },

                toggleOrderTracking(orderId) {
                    this.trackingOrderId = this.trackingOrderId === orderId ? null : orderId;
                },

                formatRupiah(num) {
                    return 'Rp ' + Number(num).toLocaleString('id-ID');
                },

                showToast(message, type = 'success') {
                    this.toast = { show: true, message, type };
                    setTimeout(() => { this.toast.show = false; }, 3500);
                },

                navigate(page, tab = null) {
                    if (page === 'login') {
                        this.activePage = this.isLoggedIn ? 'home' : (this.isAdminLoggedIn ? 'admin' : 'login');
                    } else if (page === 'admin-login') {
                        this.activePage = this.isAdminLoggedIn ? 'admin' : 'admin-login';
                    } else if (page === 'seller' || page === 'admin') {
                        if (!this.isAdminLoggedIn) {
                            this.activePage = 'admin-login';
                            this.showToast('Login Admin diperlukan untuk membuka area ini.', 'error');
                        } else {
                            this.activePage = page;
                        }
                    } else if (!this.isLoggedIn) {
                        this.activePage = this.isAdminLoggedIn ? 'admin' : 'login';
                        this.showToast('Silakan masuk sebagai Buyer untuk melanjutkan.', 'error');
                    } else {
                        this.activePage = page;
                    }
                    if (tab) this.accountTab = tab;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    this.$nextTick(() => lucide.createIcons());
                },

                renderDemoQr() {
                    const target = document.getElementById('demoQrisCanvas');
                    if (!target || target.dataset.paymentReference === this.paymentReference) return;
                    if (typeof QRCode === 'undefined') {
                        this.qrRenderError = 'QR simulasi tidak dapat dimuat. Periksa koneksi internet Anda.';
                        return;
                    }

                    try {
                        target.textContent = '';
                        new QRCode(target, {
                            text: `PAWPALS-DEMO:${this.paymentReference}`,
                            width: 160,
                            height: 160
                        });
                        target.dataset.paymentReference = this.paymentReference;
                        this.qrRenderError = '';
                    } catch (error) {
                        console.error('Gagal membuat QR simulasi:', error);
                        this.qrRenderError = 'QR simulasi gagal dibuat.';
                    }
                },

                filterByCategory(categoryName) {
                    this.filters.category = categoryName;
                    this.navigate('catalog');
                },

                filterByPet(petName) {
                    this.filters.pet = petName;
                    this.navigate('catalog');
                },

                goToCatalogWholesale() {
                    this.filters.wholesaleOnly = true;
                    this.navigate('catalog');
                },

                resetFilters() {
                    this.filters = {
                        search: '',
                        category: 'All',
                        pet: 'All',
                        wholesaleOnly: false,
                        sort: 'featured'
                    };
                },

                get filteredProducts() {
                    let list = this.products.filter(p => {
                        const matchSearch = !this.filters.search.trim() ||
                            p.name.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                            p.brand.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                            p.category.toLowerCase().includes(this.filters.search.toLowerCase());
                        const matchCat = this.filters.category === 'All' || p.category === this.filters.category;
                        const matchPet = this.filters.pet === 'All' || p.pet === this.filters.pet;
                        const matchB2B = !this.filters.wholesaleOnly || p.isWholesale;
                        return matchSearch && matchCat && matchPet && matchB2B;
                    });

                    if (this.filters.sort === 'price_asc') {
                        list = [...list].sort((a, b) => (a.discountPrice || a.retailPrice) - (b.discountPrice || b.retailPrice));
                    } else if (this.filters.sort === 'price_desc') {
                        list = [...list].sort((a, b) => (b.discountPrice || b.retailPrice) - (a.discountPrice || a.retailPrice));
                    }
                    return list;
                },

                openProductDetail(product, preferredMode = 'b2c') {
                    this.selectedProduct = product;
                    if (preferredMode === 'b2b' && product.isWholesale) {
                        this.detailMode = 'b2b';
                        this.detailQty = product.moq;
                    } else {
                        this.detailMode = 'b2c';
                        this.detailQty = 1;
                    }
                    this.navigate('detail');
                },

                get computedDetailUnitPrice() {
                    if (!this.selectedProduct) return 0;
                    return this.resolveUnitPrice(this.selectedProduct, this.detailQty, this.detailMode);
                },

                resolveUnitPrice(product, qty, mode) {
                    const baseRetail = product.discountPrice || product.retailPrice;
                    if (product.isWholesale && (mode === 'b2b' || qty >= product.moq) && qty >= product.moq) {
                        if (product.tiers && product.tiers.length > 0) {
                            const matched = [...product.tiers]
                                .filter(t => qty >= t.min && (t.max === null || qty <= t.max))
                                .sort((a, b) => b.min - a.min)[0];
                            if (matched) return matched.price;
                        }
                        return product.wholesalePrice || baseRetail;
                    }
                    return baseRetail;
                },

                decrementDetailQty() {
                    const minAllowed = (this.detailMode === 'b2b' && this.selectedProduct?.isWholesale)
                        ? this.selectedProduct.moq
                        : 1;
                    if (this.detailQty > minAllowed) {
                        this.detailQty--;
                    }
                },

                toggleWishlist(productId) {
                    const idx = this.wishlist.indexOf(productId);
                    if (idx > -1) {
                        this.wishlist.splice(idx, 1);
                        this.showToast('Produk dihapus dari Wishlist.');
                    } else {
                        this.wishlist.push(productId);
                        this.showToast('Produk disimpan ke Wishlist!');
                    }
                    this.$nextTick(() => lucide.createIcons());
                },

                isWishlisted(productId) {
                    return this.wishlist.includes(productId);
                },

                addToCart(product, qty = 1, mode = 'b2c') {
                    if (product.stock < qty) {
                        this.showToast(`Stok tidak mencukupi (tersisa ${product.stock} unit).`, 'error');
                        return;
                    }
                    if (mode === 'b2b' && product.isWholesale && qty < product.moq) {
                        qty = product.moq;
                    }

                    const existing = this.cart.find(i => i.product.id === product.id);
                    if (existing) {
                        const nextQty = existing.qty + qty;
                        if (nextQty > product.stock) {
                            this.showToast(`Maksimal stok tersedia ${product.stock} unit.`, 'error');
                            return;
                        }
                        existing.qty = nextQty;
                        if (product.isWholesale && existing.qty >= product.moq) {
                            existing.mode = 'b2b';
                        }
                    } else {
                        this.cart.push({
                            product,
                            qty,
                            mode: (product.isWholesale && qty >= product.moq) ? 'b2b' : mode
                        });
                    }

                    this.showToast(`"${product.name}" (${qty}x) ditambahkan ke keranjang!`);
                    this.$nextTick(() => lucide.createIcons());
                },

                buyNow(product, qty = 1, mode = 'b2c') {
                    this.addToCart(product, qty, mode);
                    this.navigate('checkout');
                },

                removeFromCart(index) {
                    this.cart.splice(index, 1);
                },

                updateCartQty(index, newQty) {
                    const item = this.cart[index];
                    if (!item) return;
                    if (newQty <= 0) {
                        this.cart.splice(index, 1);
                        return;
                    }
                    if (newQty > item.product.stock) {
                        this.showToast(`Stok maksimal ${item.product.stock} unit.`, 'error');
                        return;
                    }
                    item.qty = newQty;
                    item.mode = (item.product.isWholesale && newQty >= item.product.moq) ? 'b2b' : 'b2c';
                },

                getCartItemMode(item) {
                    return (item.product.isWholesale && item.qty >= item.product.moq) ? 'b2b' : 'b2c';
                },

                getCartItemUnitPrice(item) {
                    return this.resolveUnitPrice(item.product, item.qty, this.getCartItemMode(item));
                },

                get totalCartQty() {
                    return this.cart.reduce((sum, item) => sum + item.qty, 0);
                },

                get cartSubtotal() {
                    return this.cart.reduce((sum, item) => sum + (this.getCartItemUnitPrice(item) * item.qty), 0);
                },

                submitCheckout() {
                    if (this.cart.length === 0) {
                        this.showToast('Keranjang belanja kosong.', 'error');
                        return;
                    }

                    this.cart.forEach(item => {
                        const prod = this.products.find(p => p.id === item.product.id);
                        if (prod) {
                            prod.stock = Math.max(0, prod.stock - item.qty);
                        }
                    });

                    const summaryText = this.cart
                        .map(i => `${i.product.name} (${i.qty}x ${this.getCartItemMode(i).toUpperCase()})`)
                        .join(', ');

                    const newOrder = {
                        id: 'PP-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000),
                        date: 'Hari Ini',
                        status: 'Paid • Diproses Seller',
                        summary: summaryText,
                        payment: this.checkoutForm.paymentMethod,
                        total: this.cartSubtotal + this.checkoutForm.shippingCost,
                        courier: this.checkoutForm.courier,
                        trackingNumber: 'PP-' + Date.now().toString(36).toUpperCase(),
                        trackingStep: 3,
                        shippingAddress: { ...this.buyerAddress }
                    };

                    this.orders.unshift(newOrder);
                    this.cart = [];
                    this.showToast(`Pesanan ${newOrder.id} berhasil dibuat & dibayar!`);
                    this.navigate('account', 'overview');
                },

                createSellerProduct() {
                    if (!this.newProductForm.name.trim()) {
                        this.showToast('Nama produk wajib diisi.', 'error');
                        return;
                    }
                    const moqVal = Math.max(1, Number(this.newProductForm.moq) || 1);
                    const retailVal = Number(this.newProductForm.retailPrice) || 100000;
                    const wholesaleVal = Number(this.newProductForm.wholesalePrice) || retailVal;

                    this.products.unshift({
                        id: Date.now(),
                        name: this.newProductForm.name,
                        sku: 'PP-SEL-' + Math.floor(100 + Math.random() * 900),
                        brand: 'PawPals Partner',
                        store: 'PawPals Official Supply Store',
                        category: this.newProductForm.category,
                        pet: 'Anjing',
                        retailPrice: retailVal,
                        discountPrice: null,
                        isWholesale: wholesaleVal < retailVal && moqVal > 1,
                        moq: moqVal,
                        wholesalePrice: wholesaleVal,
                        tiers: [
                            { label: `${moqVal}+ Unit`, min: moqVal, max: null, price: wholesaleVal }
                        ],
                        stock: Number(this.newProductForm.stock) || 20,
                        rating: '5.0',
                        badge: 'New',
                        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80',
                        description: 'Produk berkualitas dari mitra seller terverifikasi PawPals.'
                    });

                    this.sellerAddModal = false;
                    this.newProductForm.name = '';
                    this.showToast('Produk baru berhasil ditambahkan ke katalog!');
                    this.$nextTick(() => lucide.createIcons());
                },

                openAdminProductModal(product = null) {
                    if (product) {
                        this.adminProductForm = { ...product };
                    } else {
                        this.adminProductForm = {
                            id: null,
                            name: '',
                            brand: 'PawPals Official',
                            category: 'Pet Food',
                            pet: 'Kucing',
                            retailPrice: 150000,
                            wholesalePrice: 125000,
                            moq: 5,
                            stock: 50,
                            image: ''
                        };
                    }
                    this.adminProductModal = true;
                },

                openAdminEditMedia(product) {
                    this.openAdminProductModal(product);
                },

                handleAdminImageUpload(event) {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.adminProductForm.image = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                },

                updateAdminProductStock(product) {
                    this.showToast(`Stok "${product.name}" diperbarui menjadi ${product.stock} unit.`);
                },

                saveAdminProduct() {
                    if (!this.adminProductForm.name.trim()) {
                        this.showToast('Nama produk wajib diisi.', 'error');
                        return;
                    }

                    if (this.adminProductForm.id) {
                        const idx = this.products.findIndex(p => p.id === this.adminProductForm.id);
                        if (idx > -1) {
                            this.products[idx] = { ...this.adminProductForm };
                        }
                        this.showToast('Produk berhasil diperbarui.');
                    } else {
                        const newProd = {
                            ...this.adminProductForm,
                            id: Date.now(),
                            sku: 'PP-ADM-' + Math.floor(100 + Math.random() * 900),
                            store: 'PawPals Platform Admin',
                            rating: '5.0',
                            badge: 'New SKU',
                            isWholesale: true,
                            tiers: [
                                { label: `${this.adminProductForm.moq}+ Unit`, min: this.adminProductForm.moq, max: null, price: this.adminProductForm.wholesalePrice }
                            ]
                        };
                        this.products.unshift(newProd);
                        this.showToast('Produk baru berhasil ditambahkan ke platform.');
                    }

                    this.adminProductModal = false;
                    this.$nextTick(() => lucide.createIcons());
                },

                addSamplePet() {
                    this.myPets.push({
                        name: 'Luna',
                        emoji: '🐕',
                        breed: 'Poodle',
                        age: '1 Tahun',
                        diet: 'Diet: Puppy Sensitive Skin'
                    });
                    this.showToast('Anabul baru berhasil ditambahkan ke profil Anda!');
                },

                copyReferralLink() {
                    const input = document.getElementById('refLinkInput');
                    input.select();
                    document.execCommand('copy');
                    this.showToast('Tautan referral berhasil disalin ke clipboard!');
                }
            };
        }