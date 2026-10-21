/**
 * Model data kurikulum.
 *
 * Semua konten pelajaran ditulis sebagai data murni (lihat `src/content/`),
 * terpisah total dari komponen UI. Menambah pelajaran = menambah satu file
 * data baru dan mendaftarkannya di `src/content/index.ts`.
 */

export type PartOfSpeech =
  | 'kata benda'
  | 'kata kerja'
  | 'kata sifat'
  | 'kata keterangan'
  | 'partikel'
  | 'ungkapan'
  | 'kata tanya'
  | 'angka'
  | 'penghitung'

/** Satu kata kosakata di dalam kotak kosakata pelajaran. */
export interface Vocab {
  ko: string
  id: string
  pos?: PartOfSpeech
  example?: SentencePair
  /** Catatan singkat: nuansa, bentuk kamus, dsb. */
  note?: string
}

/**
 * Pasangan kalimat Korea + terjemahan Indonesia.
 * `id` SELALU ditampilkan tepat di bawah `ko`.
 */
export interface SentencePair {
  ko: string
  id: string
  /** Struktur harfiah, ditampilkan terpisah dari terjemahan natural. */
  literal?: string
  /** Potongan teks di dalam `ko` yang disorot (partikel / akhiran). */
  highlight?: string[]
  /** Jenis sorotan: hijau = partikel, ambar = akhiran/konjugasi. */
  highlightKind?: 'particle' | 'ending'
  note?: string
}

export interface BreakdownRow {
  /** Unit Korea, mis. 회사에 */
  unit: string
  /** Rumus pembentuk, mis. 회사 + 에 */
  formula: string
  /** Fungsi/arti dalam konteks kalimat ini. */
  meaning: string
}

/** Bedah kalimat: satu kalimat inti dipecah menjadi unit bermakna. */
export interface Breakdown {
  sentence: SentencePair
  rows: BreakdownRow[]
  /** Mengapa partikel/akhiran itu dipakai di sini. */
  why: string
  /** Bagaimana kalimat berubah kalau memakai bentuk lain. */
  swaps?: { alt: string; effect: string }[]
}

export interface ContrastTable {
  caption?: string
  columns: string[]
  rows: string[][]
}

export interface Mistake {
  wrong: string
  right: string
  why: string
}

export interface GrammarNote {
  title: string
  /** Rumus pembentukan, ditampilkan sebagai "chip" rumus. */
  form?: string
  /** Penjelasan inti — singkat, 2–5 kalimat. */
  body: string
  examples?: SentencePair[]
  /** Penjelasan tambahan, disembunyikan di balik "Selengkapnya". */
  more?: string
  moreExamples?: SentencePair[]
  mistakes?: Mistake[]
  table?: ContrastTable
}

export interface DialogueLine {
  speaker: string
  ko: string
  id: string
  note?: string
}

export interface Dialogue {
  title: string
  situation: string
  lines: DialogueLine[]
  /** Catatan kesopanan / nuansa untuk dialog ini. */
  politeness?: string
}

export interface Passage {
  title: string
  intro?: string
  sentences: SentencePair[]
  /** Kosakata baru yang muncul di bacaan. */
  vocabInContext?: Vocab[]
  /** Analisis tata bahasa & partikel per poin. */
  analysis?: string[]
}

/* ------------------------------------------------------------------ */
/*  Latihan                                                            */
/* ------------------------------------------------------------------ */

export type ExerciseKind =
  | 'particle'
  | 'fill'
  | 'match'
  | 'build'
  | 'translate'
  | 'correct'
  | 'write'
  | 'mc'

interface ExerciseBase {
  id: string
  kind: ExerciseKind
  /** Instruksi atau pertanyaan. */
  prompt: string
  /** Petunjuk tata bahasa yang bisa dibuka/ditutup. */
  hint?: string
  /** Tag untuk sistem review, mis. ['은/는', 'topik']. */
  tags?: string[]
}

/** Pilih partikel yang tepat. `sentence` memakai `___` sebagai lubang. */
export interface ParticleExercise extends ExerciseBase {
  kind: 'particle'
  /** Konteks/situasi agar jawaban yang dimaksud masuk akal. */
  context?: string
  sentence: string
  translation: string
  options: string[]
  answer: string
  explain: string
  /** Penjelasan spesifik kalau memilih opsi tertentu yang salah. */
  whyNot?: Record<string, string>
}

/** Isi bagian rumpang (partikel, konjugasi, atau kata). */
export interface FillExercise extends ExerciseBase {
  kind: 'fill'
  context?: string
  sentence: string
  translation: string
  /** Jawaban pertama = jawaban model; sisanya alternatif yang diterima. */
  answers: string[]
  explain: string
  /** Alternatif yang benar tetapi berbeda nuansa. */
  alternatives?: { form: string; nuance: string }[]
}

/** Menjodohkan. */
export interface MatchExercise extends ExerciseBase {
  kind: 'match'
  pairs: { left: string; right: string; note?: string }[]
  explain?: string
}

/** Menyusun kalimat dari ubin kata (gaya Duolingo). */
export interface BuildExercise extends ExerciseBase {
  kind: 'build'
  /** Kalimat Indonesia yang harus dibangun — selalu terlihat. */
  translation: string
  context?: string
  /** Ubin yang benar (urutan model). */
  tiles: string[]
  /** Ubin pengecoh. */
  distractors?: string[]
  /**
   * Susunan yang diterima. Setiap entri adalah kalimat utuh (ubin digabung
   * dengan spasi). Entri pertama = jawaban model.
   */
  answers: string[]
  explain: string
  /** Fungsi tiap bagian pada jawaban model. */
  parts?: { part: string; role: string }[]
  /** Catatan kalau ada susunan lain yang juga wajar. */
  altNote?: string
}

/** Terjemahan dua arah. */
export interface TranslateExercise extends ExerciseBase {
  kind: 'translate'
  direction: 'id-ko' | 'ko-id'
  source: string
  /** Jawaban pertama = jawaban model. */
  answers: string[]
  explain: string
  alternatives?: { form: string; nuance: string }[]
}

/** Temukan dan perbaiki kesalahan. */
export interface CorrectExercise extends ExerciseBase {
  kind: 'correct'
  /** Kalimat yang salah. */
  sentence: string
  translation: string
  answers: string[]
  /** Apa yang salah dan mengapa. */
  explain: string
}

/** Menulis bebas — dinilai sendiri dengan bantuan daftar periksa. */
export interface WriteExercise extends ExerciseBase {
  kind: 'write'
  guide?: string[]
  /** Contoh jawaban. */
  model: string
  modelTranslation: string
  /** Daftar periksa mandiri. */
  checklist: string[]
  /** Kata/pola yang sebaiknya muncul — dipakai untuk petunjuk otomatis. */
  expect?: string[]
}

/** Pilihan ganda (pemahaman bacaan, kuis akhir). */
export interface McExercise extends ExerciseBase {
  kind: 'mc'
  context?: string
  options: string[]
  answerIndex: number
  explain: string
  whyNot?: Record<string, string>
}

export type Exercise =
  | ParticleExercise
  | FillExercise
  | MatchExercise
  | BuildExercise
  | TranslateExercise
  | CorrectExercise
  | WriteExercise
  | McExercise

/* ------------------------------------------------------------------ */
/*  Pelajaran & modul                                                  */
/* ------------------------------------------------------------------ */

export interface LessonSummary {
  /** Poin-poin kunci. */
  points: string[]
  /** Kesalahan yang paling sering terjadi. */
  pitfalls: Mistake[]
}

export interface Lesson {
  id: string
  moduleId: string
  /** Nomor urut tampil, mis. "1.2". */
  number: string
  title: string
  /** Satu baris, muncul di peta kurikulum. */
  subtitle: string
  /** Tujuan pembelajaran — apa yang bisa saya lakukan setelah ini. */
  objective: string
  /** Fokus tata bahasa, mis. ['은/는']. Dipakai untuk review & SRS. */
  focus: string[]
  estimatedMinutes: number
  coreExamples: SentencePair[]
  breakdowns: Breakdown[]
  vocab: Vocab[]
  grammar: GrammarNote[]
  dialogue?: Dialogue
  passage?: Passage
  exercises: Exercise[]
  /** Kuis singkat penutup. */
  quiz: Exercise[]
  summary: LessonSummary
}

export interface Module {
  id: string
  number: number
  title: string
  description: string
  /** Warna aksen lembut untuk kartu modul. */
  accent: 'sage' | 'blue' | 'clay' | 'plum' | 'gold' | 'teal'
}

/* ------------------------------------------------------------------ */
/*  Particle Lab                                                       */
/* ------------------------------------------------------------------ */

export type LabDifficulty = 'dasar' | 'menengah' | 'ulangan'

export interface LabQuestion {
  id: string
  /** Kunci set partikel, mis. 'eun-i' untuk 은/는 vs 이/가. */
  setId: string
  difficulty: LabDifficulty
  /** Situasi singkat supaya jawaban yang dimaksud masuk akal. */
  context: string
  sentence: string
  translation: string
  options: string[]
  answer: string
  explain: string
  whyNot?: Record<string, string>
}

export interface LabSet {
  id: string
  title: string
  short: string
  description: string
  particles: string[]
  comparison?: ContrastTable
  minimalPairs?: { a: SentencePair; b: SentencePair; difference: string }[]
}

/* ------------------------------------------------------------------ */
/*  Writing Studio                                                     */
/* ------------------------------------------------------------------ */

export type StudioKind =
  | 'terjemahan-id-ko'
  | 'terjemahan-ko-id'
  | 'perluasan'
  | 'tulisan-terbimbing'
  | 'diari'
  | 'chat'
  | 'respons'

export interface StudioTask {
  id: string
  kind: StudioKind
  title: string
  level: 'dasar' | 'menengah'
  /** Instruksi yang dilihat pengguna. */
  prompt: string
  /** Teks sumber (kalimat Indonesia / Korea / kalimat awal). */
  source?: string
  /** Konteks tambahan, mis. isi chat lawan bicara. */
  context?: string
  /** Rambu-rambu penulisan. */
  guide?: string[]
  /** Kosakata bantu. */
  helpers?: { ko: string; id: string }[]
  /**
   * Untuk tugas berjawaban pasti: daftar jawaban yang diterima.
   * Kalau kosong → tugas terbuka, dinilai sendiri dengan model + daftar periksa.
   */
  answers?: string[]
  model: string
  modelTranslation?: string
  notes: string[]
  checklist?: string[]
  alternatives?: { form: string; nuance: string }[]
}
