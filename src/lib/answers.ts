/**
 * Pemeriksaan jawaban.
 *
 * Aplikasi ini berjalan sepenuhnya di browser tanpa model bahasa, jadi
 * pemeriksaan di sini murni berbasis pencocokan teks yang dinormalisasi
 * terhadap daftar jawaban yang sudah dikonfigurasi. Kita TIDAK berpura-pura
 * memahami makna kalimat. Karena itu:
 *
 *  - Latihan berjawaban pasti  → diperiksa otomatis (`checkAnswer`).
 *  - Latihan terbuka (menulis) → tidak dinilai benar/salah; pengguna
 *    membandingkan dengan jawaban model dan daftar periksa.
 */

/** Hapus tanda baca akhir, rapikan spasi, samakan huruf kecil. */
export function normalize(raw: string): string {
  return raw
    .normalize('NFC')
    .trim()
    .toLowerCase()
    .replace(/[.!?。！？]+$/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([,，])\s*/g, '$1')
}

/** Versi tanpa spasi sama sekali — untuk mendeteksi masalah spasi saja. */
export function stripSpaces(raw: string): string {
  return normalize(raw).replace(/\s/g, '')
}

export type MatchQuality =
  /** Persis sama dengan salah satu jawaban yang diterima. */
  | 'exact'
  /** Benar, tetapi spasi (띄어쓰기) berbeda dari jawaban model. */
  | 'spacing'
  /** Tidak cocok. */
  | 'none'

export interface AnswerResult {
  quality: MatchQuality
  correct: boolean
  /** Jawaban yang cocok (dalam bentuk aslinya), kalau ada. */
  matched?: string
  /** Jawaban model = entri pertama. */
  model: string
}

export function checkAnswer(input: string, answers: string[]): AnswerResult {
  const model = answers[0] ?? ''
  const given = normalize(input)
  if (!given) return { quality: 'none', correct: false, model }

  for (const a of answers) {
    if (normalize(a) === given) {
      return { quality: 'exact', correct: true, matched: a, model }
    }
  }
  const tight = stripSpaces(input)
  for (const a of answers) {
    if (stripSpaces(a) === tight) {
      return { quality: 'spacing', correct: true, matched: a, model }
    }
  }
  return { quality: 'none', correct: false, model }
}

/**
 * Seberapa dekat jawaban dengan jawaban model (0–1), dipakai hanya untuk
 * memberi petunjuk "hampir benar", bukan untuk menilai.
 */
export function similarity(a: string, b: string): number {
  const x = stripSpaces(a)
  const y = stripSpaces(b)
  if (!x || !y) return 0
  if (x === y) return 1
  const d = levenshtein(x, y)
  return Math.max(0, 1 - d / Math.max(x.length, y.length))
}

function levenshtein(a: string, b: string): number {
  const m = a.length
  const n = b.length
  let prev = new Array<number>(n + 1)
  let cur = new Array<number>(n + 1)
  for (let j = 0; j <= n; j++) prev[j] = j
  for (let i = 1; i <= m; i++) {
    cur[0] = i
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost)
    }
    const tmp = prev
    prev = cur
    cur = tmp
  }
  return prev[n]
}

/** Apakah teks mengandung aksara Hangul? */
export function hasHangul(s: string): boolean {
  return /[ᄀ-ᇿ㄰-㆏가-힯]/.test(s)
}

/**
 * Apakah suku kata terakhir sebuah kata berakhir dengan konsonan penutup
 * (받침)? Dipakai untuk memeriksa pilihan 은/는, 이/가, 을/를, dst.
 */
export function endsWithBatchim(word: string): boolean | null {
  const chars = word.replace(/[^가-힣]/g, '')
  if (!chars) return null
  const last = chars.charCodeAt(chars.length - 1) - 0xac00
  if (last < 0 || last > 11171) return null
  return last % 28 !== 0
}

/** Pisahkan kalimat berisi `___` menjadi bagian sebelum & sesudah. */
export function splitBlank(sentence: string): [string, string] {
  const i = sentence.indexOf('___')
  if (i === -1) return [sentence, '']
  return [sentence.slice(0, i), sentence.slice(i + 3)]
}

/** Acak urutan larik (salinan baru). */
export function shuffle<T>(items: readonly T[], seed?: number): T[] {
  const out = items.slice()
  let s = seed ?? Math.floor(Math.random() * 1e9)
  const rnd = () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
