import type { Module } from '../types/curriculum'

export const modules: Module[] = [
  {
    id: 'm1',
    number: 1,
    title: 'Memahami Struktur Kalimat Korea',
    description:
      'Kenapa kata kerja selalu di akhir, apa sebenarnya tugas partikel, dan bagaimana membentuk kalimat pernyataan, penyangkalan, serta pertanyaan yang terdengar wajar.',
    accent: 'sage',
  },
  {
    id: 'm2',
    number: 2,
    title: 'Partikel dalam Konteks',
    description:
      'Satu per satu partikel penting dipelajari lewat kalimat utuh dan perbandingan langsung dengan partikel yang mirip — bukan lewat daftar terjemahan.',
    accent: 'blue',
  },
  {
    id: 'm3',
    number: 3,
    title: 'Kata Kerja & Kata Sifat',
    description:
      'Dari bentuk kamus ke batang kata, lalu ke bentuk sekarang, lampau, rencana, penyangkalan, keinginan, kemampuan, dan permintaan.',
    accent: 'clay',
  },
  {
    id: 'm4',
    number: 4,
    title: 'Memperluas Kalimat',
    description:
      'Mengubah kalimat pendek menjadi kalimat panjang yang alami: menambah waktu, tempat, keterangan, lalu menyambung beberapa klausa.',
    accent: 'plum',
  },
  {
    id: 'm5',
    number: 5,
    title: 'Percakapan Sehari-hari',
    description:
      'Sepuluh situasi nyata yang paling sering kamu temui: perkenalan, restoran, minimarket, olahraga, menunjukkan arah, salon, taksi, apotek, dan telepon kantor.',
    accent: 'gold',
  },
  {
    id: 'm6',
    number: 6,
    title: 'Membaca & Menulis',
    description:
      'Bacaan pendek, pesan chat, dan diari — lengkap dengan analisis partikel, pertanyaan pemahaman, dan latihan menulis sendiri.',
    accent: 'teal',
  },
  {
    id: 'm7',
    number: 7,
    title: 'Obrolan Santai & Budaya',
    description:
      'Bahasa Korea yang dipakai saat kamu sudah benar-benar bergaul: 반말 di rumah, etiket meja soju, aturan di 찜질방, dan obrolan K-pop.',
    accent: 'rose',
  },
]

export const moduleById = Object.fromEntries(modules.map((m) => [m.id, m]))
