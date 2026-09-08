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

Buka folder aplikasi terlebih dahulu:

```bash
cd ipusnas-redesign
```

Kemudian buka `index.html` langsung di browser, atau gunakan Live Server di VS Code.

Jika ingin menggunakan fitur recorder demo, install dependency dari folder aplikasi:

```bash
npm install
```

## Struktur Repository

- `ipusnas-redesign/index.html` - halaman utama dan seluruh view prototype
- `ipusnas-redesign/style.css` - layout, komponen, responsive styling, dan tema gelap
- `ipusnas-redesign/script.js` - navigasi halaman, carousel, filter, tab, dan pengaturan tema
- `ipusnas-redesign/ebook-gadis-kretek.html` - konten ebook reader prototype
- `ipusnas-redesign/record-demo.js` - script Playwright untuk merekam demo aplikasi
- `ipusnas-redesign/package.json` - dependency untuk recorder demo

## Demo Video

Video demo dibuat dalam format WebM dan disimpan di folder `ipusnas-redesign/demo-video/`. Folder tersebut di-ignore oleh Git agar file video tidak masuk ke repository.

## Repository

[https://github.com/AfiqMir/iPusnas-redesign](https://github.com/AfiqMir/iPusnas-redesign)
