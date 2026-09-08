/* ============================================
   iPusnas Redesign – JavaScript
   ============================================ */

// Tab Navigation
function switchTab(btn, pageId) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    btn.classList.add('active');

    // Update pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Reset scroll position when switching tabs
    const scrollContainer = document.getElementById(pageId).querySelector('.page-scroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
}

// Internal Page Navigation
let pageHistory = [];

function showPage(pageId, title = '') {
    // Save current page to history
    const currentPage = document.querySelector('.page.active');
    if (currentPage && currentPage.id !== pageId) {
        pageHistory.push(currentPage.id);
    }
    
    // Special handling for dynamic titles (like in Selengkapnya)
    if (pageId === 'page-selengkapnya' && title) {
        const titleEl = document.getElementById('selengkapnya-title');
        if (titleEl) titleEl.textContent = title;
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    
    // Reset scroll
    const scrollContainer = targetPage.querySelector('.page-scroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
}

function openEbook() {
    showPage('page-ebook-reader');
}

function goBack() {
    if (pageHistory.length > 0) {
        const previousPageId = pageHistory.pop();
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show previous page
        document.getElementById(previousPageId).classList.add('active');
    } else {
        // Fallback to Beranda if no history
        showPage('page-beranda');
        
        // Also update bottom nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.nav-item').classList.add('active');
    }
}

// Sub-tabs (Rak Saya)
function switchRakTab(btn, contentId) {
    // Update sub-tab buttons
    const container = btn.closest('.sub-tabs');
    container.querySelectorAll('.sub-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    btn.classList.add('active');

    // Update content sections
    document.querySelectorAll('#page-rak-saya .rak-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
}

// Sub-tabs (Komunitas)
function switchKomunitasTab(btn, contentId) {
    // Update sub-tab buttons
    const container = btn.closest('.sub-tabs');
    container.querySelectorAll('.sub-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    btn.classList.add('active');

    // Update content sections
    document.querySelectorAll('#page-komunitas .komunitas-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
}

// Filter Chips (Beranda)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('ipusnas-theme');
    if (savedTheme === 'dark') setTheme('dark');

    // Basic chip interactions
    document.querySelectorAll('.chip-row').forEach(row => {
        const chips = row.querySelectorAll('.chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });
});
});

function setTheme(theme) {
    const isDark = theme === 'dark';
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.setAttribute('aria-checked', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
    }
    localStorage.setItem('ipusnas-theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
    setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
}

// Bottom Sheet Logic
function openFilterSheet() {
    document.getElementById('filter-sheet-overlay').classList.add('show');
    document.getElementById('filter-sheet').classList.add('show');
}

function closeFilterSheet() {
    document.getElementById('filter-sheet-overlay').classList.remove('show');
    document.getElementById('filter-sheet').classList.remove('show');
}

// Chip interaction in bottom sheet
document.querySelectorAll('.filter-section .chip').forEach(chip => {
    chip.addEventListener('click', function() {
        // Toggle active state for simple multi-select or single-select demo
        this.classList.toggle('active');
    });
});

// Featured banner carousel prototype
document.querySelectorAll('.featured-banner').forEach(banner => {
    const track = banner.querySelector('.banner-track');
    const dots = banner.parentElement.querySelectorAll('.banner-dots span');
    const bannerOptions = [
        {
            className: 'banner-slide-book',
            content: '<img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=640&h=360&fit=crop" alt="Buku The Book of Tomorrow"><div class="banner-overlay"></div><div class="banner-copy"><span>Review Buku</span><strong>The Book of Tomorrow</strong></div>'
        },
        {
            className: 'banner-slide-bulletin',
            content: '<div class="bulletin-art"><span class="bulletin-title">LEMBARAN</span><span class="bulletin-subtitle">JAGA LINGKUNGAN<br>JAGA KEHIDUPAN</span><span class="bulletin-trees">♣ ♣ ♣</span></div><div class="banner-copy"><span>Buletin Lembaran Vol. VI, Juni 2026</span></div>'
        },
        {
            className: 'banner-slide-reading',
            content: '<div class="reading-art"><span class="material-icons-round">auto_stories</span><strong>Temukan Cerita Baru</strong><small>Rekomendasi bacaan untukmu</small></div>'
        },
        {
            className: 'banner-slide-community',
            content: '<div class="community-art"><span class="material-icons-round">groups</span><strong>Ruang Baca Bersama</strong><small>Bagikan ulasan favoritmu</small></div>'
        }
    ];

    bannerOptions.sort(() => Math.random() - 0.5);
    track.innerHTML = bannerOptions.map(option =>
        `<article class="banner-slide ${option.className}">${option.content}</article>`
    ).join('');

    const slides = [...track.querySelectorAll('.banner-slide')];
    let activeIndex = 0;
    const centerSlide = (index, behavior = 'smooth') => {
        const slide = slides[index];
        track.scrollTo({
            left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
            behavior: behavior === 'auto' ? 'instant' : behavior
        });
        activeIndex = index;
        dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
    };

    banner.querySelector('.banner-arrow-prev').addEventListener('click', () => {
        const isWrapping = activeIndex === 0 || activeIndex === slides.length - 1;
        const previousIndex = activeIndex === 0
            ? slides.length - 1
            : activeIndex === slides.length - 1 ? 0 : activeIndex - 1;
        centerSlide(previousIndex, isWrapping ? 'auto' : 'smooth');
    });
    banner.querySelector('.banner-arrow-next').addEventListener('click', () => {
        const isWrapping = activeIndex === slides.length - 1;
        const nextIndex = (activeIndex + 1) % slides.length;
        centerSlide(nextIndex, isWrapping ? 'auto' : 'smooth');
    });
    dots.forEach((dot, index) => dot.addEventListener('click', () => centerSlide(index)));

    let scrollTimer;
    track.addEventListener('scroll', () => {
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => {
            const trackCenter = track.scrollLeft + track.clientWidth / 2;
            const closestIndex = slides.reduce((closest, slide, index) => {
                const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - trackCenter);
                return distance < closest.distance ? { index, distance } : closest;
            }, { index: 0, distance: Infinity }).index;
            activeIndex = closestIndex;
            dots.forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
        }, 80);
    });

    centerSlide(0, 'auto');
});

function applyFilter() {
    closeFilterSheet();
    
    const berandaScroll = document.querySelector('#page-beranda .page-scroll');
    const sections = berandaScroll.querySelectorAll('.section-block, .promo-banner');
    sections.forEach(sec => sec.style.display = 'none');
    
    if (!document.getElementById('beranda-list-view')) {
        const listView = document.createElement('div');
        listView.id = 'beranda-list-view';
        
        const sortBar = document.querySelector('#page-selengkapnya .sort-bar').cloneNode(true);
        const bookGrid = document.querySelector('#page-selengkapnya .book-grid-vertical').cloneNode(true);
        
        listView.appendChild(sortBar);
        listView.appendChild(bookGrid);
        
        // Insert before the 90px spacer
        const spacer = berandaScroll.querySelector('div[style="height:90px"]');
        if (spacer) {
            berandaScroll.insertBefore(listView, spacer);
        } else {
            berandaScroll.appendChild(listView);
        }
    } else {
        document.getElementById('beranda-list-view').style.display = 'block';
    }
}
