# Portofolio Binar Alif Prabasetya

Website portofolio UI/UX dan web development.

**Live:** https://binaralifpra.github.io/portofolio/

## Proyek

| Proyek | Website | Kode |
|---|---|---|
| FitHome | [fit-home-sable.vercel.app](https://fit-home-sable.vercel.app/) | [FitHome](https://github.com/binaralifpra/FitHome) |
| Talkuno | [talkuno-dc6o.vercel.app](https://talkuno-dc6o.vercel.app/) | [talkuno](https://github.com/binaralifpra/talkuno) |
| AI-SPIKENG | [binaralifpra.github.io/AI-SPIKENG](https://binaralifpra.github.io/AI-SPIKENG/) | [AI-SPIKENG](https://github.com/binaralifpra/AI-SPIKENG) |
| CHIBBO | [binaralifpra.github.io/CHIBBO](https://binaralifpra.github.io/CHIBBO/) | [CHIBBO](https://github.com/binaralifpra/CHIBBO) |
| Retipma | [binaralifpra.github.io/Retipma](https://binaralifpra.github.io/Retipma/) | [Retipma](https://github.com/binaralifpra/Retipma) |
| Rute Pahlawan | [binaralifpra.github.io/RutePahlawan](https://binaralifpra.github.io/RutePahlawan/) | [RutePahlawan](https://github.com/binaralifpra/RutePahlawan) |

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
