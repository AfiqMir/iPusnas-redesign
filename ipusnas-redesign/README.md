# iPusnas Redesign

Prototype redesign aplikasi iPusnas untuk eksplorasi pengalaman membaca digital dan interaksi perpustakaan.

## Fitur

- Beranda dengan pencarian, filter, rekomendasi, dan buku populer
- Carousel banner dengan navigasi arrow, dot indicator, swipe, dan cycle navigation
- Kartu buku yang sedang dibaca dengan progress halaman
- Detail buku, sinopsis, estimasi antrean, info detail, ulasan, dan buku serupa
- Ebook reader prototype
- Rak Saya dengan tab Pinjaman, Antrian, dan Riwayat
- Komunitas dengan tab Komunitas Saya, Cari Komunitas, dan Trending
- Profil, pengaturan akun, notifikasi, dan preferensi
- Mode gelap dan terang dengan penyimpanan preferensi melalui `localStorage`
- Tampilan responsif bergaya mobile app

## Menjalankan Prototype

Prototype ini menggunakan HTML, CSS, dan JavaScript tanpa build step.

1. Buka `index.html` langsung di browser, atau gunakan Live Server di VS Code.
2. Jika ingin menggunakan fitur recorder demo, install dependency terlebih dahulu:

```bash
npm install
```

## Struktur File

- `index.html` - halaman utama dan seluruh view prototype
- `style.css` - layout, komponen, responsive styling, dan tema gelap
- `script.js` - navigasi halaman, carousel, filter, tab, dan pengaturan tema
- `ebook-gadis-kretek.html` - konten ebook reader prototype
- `record-demo.js` - script Playwright untuk merekam demo aplikasi
- `package.json` - dependency untuk recorder demo

## Demo Video

Video demo dibuat dalam format WebM dan disimpan di folder `demo-video/`. Folder tersebut di-ignore oleh Git agar file video tidak masuk ke repository.

## Repository

[https://github.com/AfiqMir/iPusnas-redesign](https://github.com/AfiqMir/iPusnas-redesign)
