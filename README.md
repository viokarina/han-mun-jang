# 한 문장 — Buku Kerja Bahasa Korea

Buku kerja interaktif untuk belajar bahasa Korea dari struktur kalimatnya, dengan
antarmuka berbahasa Indonesia. Dibuat untuk pembelajar yang sudah bisa membaca
Hangul dan punya kosakata dasar, tetapi ingin benar-benar memahami **kenapa**
sebuah partikel dipakai dan bagaimana kalimat Korea dibangun.

Seluruh aplikasi berjalan di browser. Tidak ada akun, tidak ada server, dan tidak
ada API berbayar.

---

## Menjalankan

Butuh **Node.js 20 atau lebih baru**.

```bash
npm install
npm run dev
```

Lalu buka <http://localhost:5173>.

Perintah lain:

| Perintah            | Keterangan                                                       |
| ------------------- | ---------------------------------------------------------------- |
| `npm run dev`       | Server pengembangan dengan hot reload                             |
| `npm run build`     | Build produksi ke `dist/`                                         |
| `npm run preview`   | Menyajikan hasil build untuk diperiksa                            |
| `npm run typecheck` | Pemeriksaan TypeScript                                            |
| `npm run validate`  | Memeriksa konsistensi isi kurikulum (lihat di bawah)              |
| `npm run check`     | Menjalankan ketiganya: typecheck → validate → build               |

---

## Isi kurikulum

**7 modul · 28 pelajaran · 289 latihan · 40 soal Lab Partikel · 16 tugas menulis**

| Modul | Judul                            | Isi                                                                      |
| ----- | -------------------------------- | ------------------------------------------------------------------------ |
| 1     | Memahami Struktur Kalimat Korea  | Urutan S–O–V · 이에요/예요 · 아니에요 · kalimat tanya & kata tanya        |
| 2     | Partikel dalam Konteks           | 은/는 · 이/가 · 을/를 · 에 · 에서 · 도 · 만 · 하고/와·과/(이)랑 · 의 · 에게/한테 · 께/께서 · (으)로 · 부터/까지 · 보다 |
| 3     | Kata Kerja & Kata Sifat          | Batang kata & 해요체 · lampau 았/었어요 · rencana -(으)ㄹ 거예요 · 안/못/-지 않다 · -고 싶다 · -(으)ㄹ 수 있다 |
| 4     | Memperluas Kalimat               | Urutan keterangan · -고 · alasan -아/어서 vs -(으)니까                     |
| 5     | Percakapan Sehari-hari           | Perkenalan & tingkat kesopanan · memesan · restoran · minimarket · olahraga · menunjukkan arah |
| 6     | Membaca & Menulis                | Kata penyambung antarkalimat · menulis diari                              |
| 7     | Obrolan Santai & Budaya          | 반말 di rumah · soju & 고깃집 · 찜질방 (boleh/tidak boleh/harus) · K-pop |

Setiap pelajaran mengikuti struktur buku kerja yang sama:

**A** Tujuan · **B** Contoh inti · **C** Bedah kalimat · **D** Kosakata ·
**E** Catatan tata bahasa · **F** Dialog situasi nyata · **G** Bacaan singkat ·
**H** Buku kerja (latihan) · **J** Ringkasan + kuis penutup

Setiap kalimat Korea — di contoh, dialog, maupun bacaan — selalu disertai
terjemahan Indonesia tepat di bawahnya, dan terjemahan itu bisa disembunyikan
untuk menguji diri.

---

## Halaman

- **Dasbor** — lanjutkan pelajaran, target harian, kesalahan yang perlu diulang.
- **Belajar** — peta kurikulum per modul; pelajaran yang sudah selesai bisa dibuka lagi.
- **Lab Partikel** — latihan partikel di luar alur pelajaran, lengkap dengan tabel
  perbandingan dan pasangan minimal. Bisa difilter per set partikel dan per tingkat,
  serta menyoroti partikel yang paling sering kamu salah.
- **Studio Menulis** — terjemahan dua arah, perluasan kalimat, menulis terbimbing,
  diari, chat, dan respons percakapan.
- **Ulangan** — tiga mode: mengerjakan ulang kesalahan yang tercatat, kartu ulangan
  berjadwal, dan latihan campuran dari pelajaran yang sudah selesai.
- **Kemajuan** — statistik, aktivitas 28 hari, daftar kosakata dalam antrean ulangan,
  tulisanmu, riwayat kesalahan, dan tombol atur ulang.

### Jenis latihan

Pilih partikel · isi rumpang · menjodohkan · susun kalimat dari ubin kata ·
terjemahan dua arah · perbaiki kesalahan · menulis bebas · pilihan ganda.

Setiap jawaban mendapat umpan balik spesifik: kalau benar, dijelaskan kenapa benar;
kalau salah, ditampilkan jawaban yang tepat, penjelasan khusus untuk pilihan yang
kamu ambil, dan aturan yang berlaku.

---

## Catatan penting soal penilaian

Aplikasi ini **tidak memakai model bahasa**. Semua pemeriksaan jawaban adalah
pencocokan teks terhadap daftar jawaban yang sudah dikonfigurasi, dengan
normalisasi (spasi, huruf besar/kecil, tanda baca akhir). Karena itu:

- **Latihan berjawaban pasti** (partikel, isian, susun kalimat, terjemahan,
  perbaikan) diperiksa otomatis. Beberapa jawaban alternatif yang sah sudah
  didaftarkan, dan perbedaan nuansanya dijelaskan setelah kamu menjawab.
- **Latihan menulis bebas** sengaja TIDAK dinilai benar/salah. Kamu dibandingkan
  dengan jawaban model, diberi catatan tata bahasa, dan daftar periksa untuk
  menilai tulisanmu sendiri.
- Kalau jawabanmu benar tetapi spasinya (띄어쓰기) berbeda dari bentuk baku,
  jawabanmu tetap diterima dan penulisan bakunya ditunjukkan.

---

## Penyimpanan kemajuan

Kemajuan disimpan di `localStorage` browser dengan kunci
`han-munjang:progress:v1`. Yang disimpan: pelajaran selesai, jawaban dan nilai
kuis, riwayat kesalahan, antrean kartu ulangan, kosakata yang sudah ditemui,
tulisan yang kamu simpan, aktivitas harian, dan target harian.

Artinya data terikat pada satu browser di satu perangkat. Tombol **Atur ulang
kemajuan** ada di halaman Kemajuan, dengan langkah konfirmasi.

Kalau browser memblokir penyimpanan lokal (mis. mode privat), aplikasi tetap
berjalan dan menampilkan peringatan bahwa kemajuan tidak akan tersimpan.

---

## Deploy ke Vercel (lewat GitHub)

Aplikasi ini statis sepenuhnya — tidak ada server, database, atau variabel
lingkungan yang perlu diisi. Sekali tersambung, setiap `git push` akan otomatis
men-deploy ulang.

### 1. Siapkan repositori

Proyeknya berada di folder `korean-workbook/`. Ada dua cara, pilih salah satu:

**Cara A — folder ini menjadi akar repositori (paling sederhana).**
Jalankan dari dalam `korean-workbook/`:

```bash
git init -b main
git add .
git commit -m "Buku kerja bahasa Korea"
git remote add origin https://github.com/<akun>/<nama-repo>.git
git push -u origin main
```

Di Vercel nanti, **Root Directory** dibiarkan apa adanya (`./`).

**Cara B — folder induk yang di-push.**
Kalau kamu ingin folder `learn/` yang menjadi repositori, salin dulu
`.gitignore` ini ke akar repositori, lalu saat mengimpor di Vercel setel
**Root Directory** ke `korean-workbook`.

### 2. Impor ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new) dan pilih **Import Git Repository**.
2. Pilih repositori yang baru kamu buat (beri izin akses GitHub bila diminta).
3. Vercel akan mengenali **Vite** secara otomatis. Berkas `vercel.json` di proyek
   ini sudah mengunci setelannya, jadi kamu tidak perlu mengisi apa pun:

   | Setelan           | Nilai           | Sumber        |
   | ----------------- | --------------- | ------------- |
   | Framework Preset  | Vite            | `vercel.json` |
   | Build Command     | `npm run build` | `vercel.json` |
   | Output Directory  | `dist`          | `vercel.json` |
   | Install Command   | bawaan Vercel   | —             |
   | Environment Vars  | tidak ada       | —             |

4. Klik **Deploy**.

### 3. Setelah tersambung

- Push ke `main` → deploy ke produksi.
- Buka pull request → Vercel membuat **Preview Deployment** dengan URL sendiri.
- Versi Node bisa dipilih di **Project Settings → Node.js Version** bila perlu.
  Proyek ini menuntut Node 20.19 ke atas (lihat `engines` di `package.json`).

Sebelum push, ada baiknya menjalankan pemeriksaan yang sama seperti CI:

```bash
npm run check
```

### Yang diatur oleh `vercel.json`

- **`rewrites`** — semua path yang tidak cocok dengan berkas nyata dilayani
  `index.html`. Berkas di `/assets/*` tetap dilayani dari disk karena Vercel
  memeriksa sistem berkas lebih dulu, baru menerapkan rewrite.
- **`headers`** — `/assets/*` di-cache satu tahun (`immutable`), aman karena Vite
  menyisipkan hash pada nama berkasnya. `/` sengaja tidak di-cache supaya deploy
  baru langsung terlihat tanpa perlu hard refresh.

### Catatan soal routing

Aplikasi ini memakai **hash router** (`/#/belajar/m2-l5`). Bagian setelah `#`
tidak pernah dikirim ke server, jadi menyegarkan halaman di URL bersarang
**sudah pasti bekerja** bahkan tanpa konfigurasi apa pun — ini sudah diuji pada
hasil build produksi.

Aturan `rewrites` tetap disertakan sebagai jaring pengaman: untuk URL tanpa `#`
(misalnya seseorang mengetik `/partikel` langsung), dan supaya aplikasi tidak
rusak kalau suatu saat routernya diganti ke History API.

---

## Struktur proyek

```
src/
  types/curriculum.ts      Model data: pelajaran, latihan, Lab, Studio
  content/
    modules.ts             Daftar modul
    index.ts               Daftar pelajaran — satu-satunya tempat pendaftaran
    lessons/*.ts           Satu berkas per pelajaran (data murni)
    particleLab.ts         Set partikel + bank soal Lab
    studio.ts              Tugas Studio Menulis
  store/
    types.ts               Bentuk data kemajuan
    progress.tsx           Context + localStorage + penjadwalan ulangan
  components/
    ui/                    Primitif tampilan, ikon, komponen kalimat Korea
    exercises/             Satu komponen per jenis latihan
    lesson/sections.tsx    Bagian A–J sebuah pelajaran
    layout/Shell.tsx       Kerangka halaman & navigasi
  pages/                   Satu berkas per halaman
  lib/                     Pemeriksaan jawaban, tanggal, statistik, router
scripts/
  validate-content.ts      Pemeriksa konsistensi kurikulum
vercel.json                Setelan deploy: output dir, SPA rewrite, cache aset
vite.config.ts             Setelan build
```

Isi pelajaran **sepenuhnya terpisah** dari kode tampilan. Komponen hanya membaca
data bertipe `Lesson`, jadi menambah pelajaran tidak menyentuh UI sama sekali.

### Menambah pelajaran baru

1. Buat berkas baru di `src/content/lessons/`, mis. `m3l4.ts`, yang mengekspor
   satu objek bertipe `Lesson`. Salin pelajaran yang sudah ada sebagai kerangka.
2. Impor dan sisipkan pada larik `lessons` di `src/content/index.ts`, pada posisi
   urutan belajar yang kamu mau.
3. Jalankan `npm run validate`.

Tidak ada berkas lain yang perlu diubah — peta kurikulum, dasbor, ulangan, dan
statistik semuanya ikut menyesuaikan.

### Pemeriksa kurikulum

`npm run validate` memeriksa hal-hal yang tidak bisa ditangkap TypeScript:

- id pelajaran/latihan yang kembar;
- kalimat isian yang lupa memakai `___`;
- jawaban yang tidak ada di antara pilihan, atau `answerIndex` di luar jangkauan;
- penjelasan `whyNot` yang justru menjelaskan jawaban yang benar;
- **ubin pada latihan susun kalimat yang tidak membentuk jawaban modelnya**;
- jawaban alternatif yang tidak bisa disusun dari ubin yang sama;
- sisi kanan latihan menjodohkan yang kembar (jadi ambigu);
- baris tabel yang jumlah kolomnya tidak cocok dengan judulnya;
- kalimat Korea tanpa terjemahan Indonesia;
- jumlah minimum contoh, kosakata, dan latihan per pelajaran.

---

## Teknologi

React 19 · TypeScript · Vite 7 · Tailwind CSS 4.

Tanpa pustaka routing (router berbasis hash ±40 baris), tanpa pustaka ikon
(ikon SVG ditulis sendiri), tanpa pustaka state management. `esbuild` dipakai
hanya oleh skrip pemeriksa kurikulum.

Aplikasi memuat font Noto Sans KR dan Source Serif 4 dari Google Fonts, tetapi
tetap tampil baik tanpa jaringan karena ada font cadangan sistem.

### Rencana ke depan

Model datanya sudah disiapkan supaya backend bisa ditambahkan nanti tanpa
merombak aplikasi: seluruh akses kemajuan lewat satu `ProgressProvider`, dan
bentuk datanya sudah bernomor versi (`version: 1`).
