# Portofolio Binar Alif Prabasetya

Website portofolio UI/UX dan web development.

**Live:** https://binaralifpra.github.io/portofolio/

## Proyek

| Proyek | Website | Kode | Desain |
|---|---|---|---|
| FitHome | [fit-home-sable.vercel.app](https://fit-home-sable.vercel.app/) | [FitHome](https://github.com/binaralifpra/FitHome) | |
| Talkuno | [talkuno-dc6o.vercel.app](https://talkuno-dc6o.vercel.app/) | [talkuno](https://github.com/binaralifpra/talkuno) | |
| AI-SPIKENG | [binaralifpra.github.io/AI-SPIKENG](https://binaralifpra.github.io/AI-SPIKENG/) | [AI-SPIKENG](https://github.com/binaralifpra/AI-SPIKENG) | |
| CHIBBO | [binaralifpra.github.io/CHIBBO](https://binaralifpra.github.io/CHIBBO/) | [CHIBBO](https://github.com/binaralifpra/CHIBBO) | |
| Retipma | [binaralifpra.github.io/Retipma](https://binaralifpra.github.io/Retipma/) | [Retipma](https://github.com/binaralifpra/Retipma) | |
| Rute Pahlawan | [binaralifpra.github.io/RutePahlawan](https://binaralifpra.github.io/RutePahlawan/) | [RutePahlawan](https://github.com/binaralifpra/RutePahlawan) | [Figma prototype](https://www.figma.com/proto/nTVPL2HFLlJvqN6cHTKR14/MyWeb---Runner-Surabaya?node-id=3-4&p=f&t=TiL6eSv9WeDRTL0b-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A4) |
| Milky Wilky | [binaralifpra.github.io/MilkyWilky](https://binaralifpra.github.io/MilkyWilky/) | [MilkyWilky](https://github.com/binaralifpra/MilkyWilky) | [Figma prototype](https://www.figma.com/proto/V9D3dfGggWe2jFiDvkLF0K/MilkyWilky-Grid?node-id=22-67&p=f&t=PjtbARYlvaP2XbUc-0&scaling=contain&content-scaling=fixed&page-id=0%3A1) |

## Struktur

```
index.html      Halaman Karya (grid proyek + filter)
project.html    Template studi kasus, dirender dari js/projects.js (?id=<proyek>)
about.html      Halaman Tentang
css/style.css   Seluruh gaya
js/projects.js  Data semua proyek: teks, link, dan gambar
js/main.js      Render grid & studi kasus, placeholder gambar, animasi
assets/         CV, foto profil, gambar halaman Tentang, gambar proyek (assets/work/<id>/)
```

Untuk menambah atau mengubah proyek, cukup edit `js/projects.js`. Gambar proyek disimpan di `assets/work/<id>/` dengan rasio 16:10.

## Menjalankan secara lokal

Tanpa build step. Buka dengan server statis apa saja, misalnya:

```
python -m http.server
```

lalu buka http://localhost:8000.

## Kontak

binaralifpra@gmail.com · [GitHub](https://github.com/binaralifpra) · [TikTok](https://www.tiktok.com/@binaralifpro) · [Instagram](https://www.instagram.com/binaralifpro)
