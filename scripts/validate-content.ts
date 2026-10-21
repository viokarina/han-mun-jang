/**
 * Pemeriksa konsistensi data kurikulum.
 * Dijalankan dengan: node --experimental-strip-types validate.ts
 */
import { lessons, modules } from '../src/content/index.ts'
import { labQuestions, labSets } from '../src/content/particleLab.ts'
import { studioTasks } from '../src/content/studio.ts'

const problems: string[] = []
const warn = (s: string) => problems.push(s)

const norm = (s: string) =>
  s.normalize('NFC').trim().toLowerCase().replace(/[.!?。！？]+$/g, '').replace(/\s+/g, ' ')
const tight = (s: string) => norm(s).replace(/\s/g, '')

/* ---------- pelajaran ---------- */
const seenLessonIds = new Set<string>()
const seenExIds = new Set<string>()
const moduleIds = new Set(modules.map((m) => m.id))

let exTotal = 0
const kindCount: Record<string, number> = {}

for (const l of lessons) {
  if (seenLessonIds.has(l.id)) warn(`DUPLIKAT lesson id: ${l.id}`)
  seenLessonIds.add(l.id)
  if (!moduleIds.has(l.moduleId)) warn(`${l.id}: moduleId tidak dikenal (${l.moduleId})`)

  if (l.coreExamples.length < 3) warn(`${l.id}: hanya ${l.coreExamples.length} contoh inti (min 3)`)
  if (l.vocab.length < 5) warn(`${l.id}: hanya ${l.vocab.length} kosakata (min 5)`)
  if (l.exercises.length < 4) warn(`${l.id}: hanya ${l.exercises.length} latihan (min 4)`)
  if (l.quiz.length < 3) warn(`${l.id}: kuis hanya ${l.quiz.length} soal`)
  if (l.breakdowns.length < 1) warn(`${l.id}: tidak ada bedah kalimat`)
  if (l.summary.points.length < 3) warn(`${l.id}: ringkasan terlalu pendek`)

  // setiap contoh inti harus punya terjemahan
  for (const e of l.coreExamples) {
    if (!e.id?.trim()) warn(`${l.id}: contoh "${e.ko}" tanpa terjemahan`)
    if (e.highlight) {
      for (const h of e.highlight) {
        if (!e.ko.includes(h)) warn(`${l.id}: sorotan "${h}" tidak ada di "${e.ko}"`)
      }
    }
  }
  for (const b of l.breakdowns) {
    if (!b.sentence.id?.trim()) warn(`${l.id}: bedah kalimat tanpa terjemahan`)
    if (b.rows.length < 2) warn(`${l.id}: bedah "${b.sentence.ko}" hanya ${b.rows.length} baris`)
  }
  if (l.dialogue) {
    for (const line of l.dialogue.lines) {
      if (!line.id?.trim()) warn(`${l.id}: baris dialog "${line.ko}" tanpa terjemahan`)
    }
  }
  if (l.passage) {
    for (const s of l.passage.sentences) {
      if (!s.id?.trim()) warn(`${l.id}: kalimat bacaan "${s.ko}" tanpa terjemahan`)
    }
    if (l.passage.sentences.length < 3) warn(`${l.id}: bacaan terlalu pendek`)
  }

  for (const ex of [...l.exercises, ...l.quiz]) {
    exTotal++
    kindCount[ex.kind] = (kindCount[ex.kind] ?? 0) + 1
    if (seenExIds.has(ex.id)) warn(`DUPLIKAT exercise id: ${ex.id}`)
    seenExIds.add(ex.id)
    if (!ex.prompt?.trim()) warn(`${ex.id}: tanpa prompt`)

    switch (ex.kind) {
      case 'particle': {
        if (!ex.sentence.includes('___')) warn(`${ex.id}: kalimat tanpa "___"`)
        if (!ex.options.includes(ex.answer)) warn(`${ex.id}: jawaban "${ex.answer}" tidak ada di opsi`)
        if (new Set(ex.options).size !== ex.options.length) warn(`${ex.id}: opsi duplikat`)
        if (ex.options.length < 2) warn(`${ex.id}: opsi kurang dari 2`)
        for (const k of Object.keys(ex.whyNot ?? {})) {
          if (!ex.options.includes(k)) warn(`${ex.id}: whyNot "${k}" bukan salah satu opsi`)
          if (k === ex.answer) warn(`${ex.id}: whyNot menjelaskan jawaban yang BENAR`)
        }
        if (!ex.translation?.trim()) warn(`${ex.id}: tanpa terjemahan`)
        if (!ex.explain?.trim()) warn(`${ex.id}: tanpa penjelasan`)
        break
      }
      case 'fill': {
        if (!ex.sentence.includes('___')) warn(`${ex.id}: kalimat tanpa "___"`)
        if (!ex.answers.length) warn(`${ex.id}: tanpa jawaban`)
        if (ex.answers.some((a) => !a.trim())) warn(`${ex.id}: ada jawaban kosong`)
        if (!ex.explain?.trim()) warn(`${ex.id}: tanpa penjelasan`)
        break
      }
      case 'mc': {
        if (ex.answerIndex < 0 || ex.answerIndex >= ex.options.length)
          warn(`${ex.id}: answerIndex di luar jangkauan`)
        if (new Set(ex.options).size !== ex.options.length) warn(`${ex.id}: opsi duplikat`)
        for (const k of Object.keys(ex.whyNot ?? {})) {
          if (!ex.options.includes(k)) warn(`${ex.id}: whyNot "${k}" bukan salah satu opsi`)
          if (k === ex.options[ex.answerIndex]) warn(`${ex.id}: whyNot menjelaskan jawaban BENAR`)
        }
        break
      }
      case 'match': {
        if (ex.pairs.length < 3) warn(`${ex.id}: pasangan kurang dari 3`)
        const rights = ex.pairs.map((p) => p.right)
        if (new Set(rights).size !== rights.length) warn(`${ex.id}: sisi kanan duplikat (ambigu)`)
        const lefts = ex.pairs.map((p) => p.left)
        if (new Set(lefts).size !== lefts.length) warn(`${ex.id}: sisi kiri duplikat`)
        break
      }
      case 'build': {
        if (!ex.answers.length) warn(`${ex.id}: tanpa jawaban`)
        const bank = [...ex.tiles, ...(ex.distractors ?? [])]
        // jawaban model harus bisa disusun persis dari tiles
        const model = ex.answers[0]
        if (tight(ex.tiles.join(' ')) !== tight(model))
          warn(`${ex.id}: tiles tidak membentuk jawaban model\n    tiles = "${ex.tiles.join(' ')}"\n    model = "${model}"`)
        // setiap jawaban alternatif harus memakai persis kumpulan tile yang sama
        for (const a of ex.answers) {
          const needed = [...tight(a)].sort().join('')
          const have = [...tight(ex.tiles.join(''))].sort().join('')
          if (needed !== have)
            warn(`${ex.id}: alternatif "${a}" tidak bisa disusun dari tiles yang sama`)
        }
        // distraktor tidak boleh identik dengan tile asli
        for (const d of ex.distractors ?? []) {
          if (ex.tiles.includes(d)) warn(`${ex.id}: distraktor "${d}" sama dengan tile asli`)
        }
        if (new Set(bank).size !== bank.length) warn(`${ex.id}: ada tile duplikat di bank`)
        if (!ex.translation?.trim()) warn(`${ex.id}: tanpa terjemahan`)
        for (const p of ex.parts ?? []) {
          if (!tight(model).includes(tight(p.part)))
            warn(`${ex.id}: parts "${p.part}" tidak ada di jawaban model`)
        }
        break
      }
      case 'translate': {
        if (!ex.answers.length) warn(`${ex.id}: tanpa jawaban`)
        if (!ex.source?.trim()) warn(`${ex.id}: tanpa kalimat sumber`)
        const dupe = new Set(ex.answers.map(norm))
        if (dupe.size !== ex.answers.length) warn(`${ex.id}: jawaban duplikat setelah normalisasi`)
        break
      }
      case 'correct': {
        if (!ex.answers.length) warn(`${ex.id}: tanpa jawaban`)
        if (ex.answers.some((a) => tight(a) === tight(ex.sentence)))
          warn(`${ex.id}: jawaban sama dengan kalimat yang salah`)
        break
      }
      case 'write': {
        if (!ex.model?.trim()) warn(`${ex.id}: tanpa jawaban model`)
        if (!ex.checklist?.length) warn(`${ex.id}: tanpa daftar periksa`)
        for (const e of ex.expect ?? []) {
          if (!tight(ex.model).includes(tight(e)))
            warn(`${ex.id}: expect "${e}" tidak muncul di jawaban model`)
        }
        break
      }
    }
  }
}

/* ---------- Particle Lab ---------- */
const setIds = new Set(labSets.map((s) => s.id))
const seenQ = new Set<string>()
for (const q of labQuestions) {
  if (seenQ.has(q.id)) warn(`DUPLIKAT lab id: ${q.id}`)
  seenQ.add(q.id)
  if (!setIds.has(q.setId)) warn(`${q.id}: setId tidak dikenal (${q.setId})`)
  if (!q.sentence.includes('___')) warn(`${q.id}: kalimat tanpa "___"`)
  if (!q.options.includes(q.answer)) warn(`${q.id}: jawaban tidak ada di opsi`)
  if (new Set(q.options).size !== q.options.length) warn(`${q.id}: opsi duplikat`)
  if (!q.context?.trim()) warn(`${q.id}: tanpa situasi`)
  if (!q.translation?.trim()) warn(`${q.id}: tanpa terjemahan`)
  if (!q.explain?.trim()) warn(`${q.id}: tanpa penjelasan`)
  for (const k of Object.keys(q.whyNot ?? {})) {
    if (!q.options.includes(k)) warn(`${q.id}: whyNot "${k}" bukan opsi`)
    if (k === q.answer) warn(`${q.id}: whyNot menjelaskan jawaban BENAR`)
  }
}
for (const s of labSets) {
  const n = labQuestions.filter((q) => q.setId === s.id).length
  if (n < 2) warn(`set ${s.id}: hanya ${n} soal`)
  for (const r of s.comparison?.rows ?? []) {
    if (r.length !== s.comparison!.columns.length)
      warn(`set ${s.id}: baris tabel tidak sepanjang kolom (${r.length} vs ${s.comparison!.columns.length})`)
  }
}

/* ---------- tabel di pelajaran ---------- */
for (const l of lessons) {
  for (const g of l.grammar) {
    if (g.table) {
      for (const r of g.table.rows) {
        if (r.length !== g.table.columns.length)
          warn(`${l.id} / "${g.title}": baris tabel ${r.length} kolom, header ${g.table.columns.length}`)
      }
    }
  }
}

/* ---------- Writing Studio ---------- */
const seenT = new Set<string>()
for (const t of studioTasks) {
  if (seenT.has(t.id)) warn(`DUPLIKAT studio id: ${t.id}`)
  seenT.add(t.id)
  if (!t.model?.trim()) warn(`${t.id}: tanpa jawaban model`)
  if (!t.notes?.length) warn(`${t.id}: tanpa catatan`)
  if (t.answers && !t.answers.length) warn(`${t.id}: answers kosong (gunakan undefined)`)
  if (t.answers && !t.answers.some((a) => tight(a) === tight(t.model)))
    warn(`${t.id}: jawaban model tidak termasuk daftar answers`)
}

/* ---------- laporan ---------- */
console.log('=== RINGKASAN ===')
console.log(`Modul           : ${modules.length}`)
console.log(`Pelajaran       : ${lessons.length}`)
console.log(`Latihan + kuis  : ${exTotal}`)
console.log(`Jenis latihan   : ${JSON.stringify(kindCount)}`)
console.log(`Soal Lab        : ${labQuestions.length} di ${labSets.length} set`)
console.log(`Tugas Studio    : ${studioTasks.length}`)
const vocab = new Set(lessons.flatMap((l) => l.vocab.map((v) => v.ko)))
console.log(`Kosakata unik   : ${vocab.size}`)
console.log('')
if (problems.length === 0) {
  console.log('✓ Tidak ada masalah ditemukan.')
} else {
  console.log(`✗ ${problems.length} masalah:`)
  for (const p of problems) console.log('  - ' + p)
  process.exitCode = 1
}

