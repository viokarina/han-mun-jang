import type { Lesson } from '../../types/curriculum'

export const m1l1: Lesson = {
  id: 'm1-l1',
  moduleId: 'm1',
  number: '1.1',
  title: 'Kata kerja selalu di akhir',
  subtitle: 'Urutan S–O–V dan bedanya dengan bahasa Indonesia',
  objective:
    'Setelah pelajaran ini kamu bisa membaca kalimat Korea sederhana dengan urutan yang benar, dan tahu kenapa kata kerja tidak pernah berada di tengah kalimat.',
  focus: ['urutan SOV', 'peran partikel'],
  estimatedMinutes: 12,

  coreExamples: [
    {
      ko: '저는 커피를 마셔요.',
      id: 'Saya minum kopi.',
      literal: 'Saya(topik) kopi(objek) minum.',
      highlight: ['는', '를'],
    },
    {
      ko: '민호 씨는 영화를 봐요.',
      id: 'Minho menonton film.',
      literal: 'Minho(topik) film(objek) menonton.',
      highlight: ['는', '를'],
    },
    {
      ko: '저는 집에서 한국어를 공부해요.',
      id: 'Saya belajar bahasa Korea di rumah.',
      literal: 'Saya(topik) rumah-di bahasa Korea(objek) belajar.',
      highlight: ['는', '에서', '를'],
    },
    {
      ko: '오늘은 회사에 가요.',
      id: 'Hari ini saya pergi ke kantor.',
      literal: 'Hari ini(topik) kantor-ke pergi.',
      highlight: ['은', '에'],
    },
    {
      ko: '수진 씨는 학생이에요.',
      id: 'Sujin adalah seorang mahasiswa.',
      highlight: ['는'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 커피를 마셔요.',
        id: 'Saya minum kopi.',
        highlight: ['는', '를'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — ditandai sebagai topik pembicaraan' },
        { unit: '커피를', formula: '커피 + 를', meaning: 'Kopi — ditandai sebagai objek yang diminum' },
        { unit: '마셔요', formula: '마시다 → 마셔요', meaning: 'Minum, bentuk sopan sehari-hari (해요체)' },
      ],
      why:
        'Dalam bahasa Indonesia kita berkata "Saya minum kopi" (S–P–O). Dalam bahasa Korea objek selalu mendahului kata kerja: S–O–V. Yang membuat ini mungkin adalah partikel — 는 menandai pelaku, 를 menandai sasaran. Karena peran sudah tertempel pada katanya, urutan tidak perlu bekerja sekeras dalam bahasa Indonesia.',
      swaps: [
        {
          alt: '커피를 저는 마셔요.',
          effect:
            'Masih bisa dipahami, karena partikel tetap memberi tahu siapa pelaku dan apa objeknya. Tetapi memindahkan 커피를 ke depan terdengar seperti menekankan "kopi-nya". Urutan netral tetap 저는 커피를 마셔요.',
        },
        {
          alt: '저는 마셔요 커피를. ✗',
          effect:
            'Tidak wajar. Kata kerja (서술어) harus menutup kalimat. Ini adalah satu aturan urutan yang benar-benar kaku dalam bahasa Korea.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 집에서 한국어를 공부해요.',
        id: 'Saya belajar bahasa Korea di rumah.',
        highlight: ['는', '에서', '를'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        { unit: '집에서', formula: '집 + 에서', meaning: 'Di rumah — tempat kegiatan berlangsung' },
        { unit: '한국어를', formula: '한국어 + 를', meaning: 'Bahasa Korea — objek yang dipelajari' },
        { unit: '공부해요', formula: '공부하다 → 공부해요', meaning: 'Belajar, bentuk 해요체' },
      ],
      why:
        'Urutan netral kalimat Korea: topik → keterangan waktu/tempat → objek → kata kerja. Keterangan (집에서) berdiri di depan objek, bukan di belakang seperti dalam bahasa Indonesia ("belajar bahasa Korea di rumah").',
      swaps: [
        {
          alt: '집에서 저는 한국어를 공부해요.',
          effect:
            'Wajar juga. Keterangan tempat boleh pindah ke depan topik tanpa mengubah arti — penekanannya saja yang sedikit bergeser ke "di rumah".',
        },
      ],
    },
  ],

  vocab: [
    { ko: '저', id: 'saya', pos: 'kata benda', note: 'Bentuk sopan. Versi santai: 나.' },
    { ko: '학생', id: 'pelajar, mahasiswa', pos: 'kata benda' },
    { ko: '회사', id: 'kantor, perusahaan', pos: 'kata benda' },
    { ko: '집', id: 'rumah', pos: 'kata benda' },
    { ko: '커피', id: 'kopi', pos: 'kata benda' },
    { ko: '영화', id: 'film', pos: 'kata benda' },
    {
      ko: '마시다',
      id: 'minum',
      pos: 'kata kerja',
      note: 'Bentuk kamus. 해요체: 마셔요.',
      example: { ko: '물을 마셔요.', id: 'Saya minum air.' },
    },
    {
      ko: '보다',
      id: 'melihat, menonton',
      pos: 'kata kerja',
      note: '해요체: 봐요.',
      example: { ko: '영화를 봐요.', id: 'Saya menonton film.' },
    },
    {
      ko: '가다',
      id: 'pergi',
      pos: 'kata kerja',
      note: '해요체: 가요.',
      example: { ko: '학교에 가요.', id: 'Saya pergi ke sekolah.' },
    },
    {
      ko: '공부하다',
      id: 'belajar',
      pos: 'kata kerja',
      note: '해요체: 공부해요.',
      example: { ko: '한국어를 공부해요.', id: 'Saya belajar bahasa Korea.' },
    },
  ],

  grammar: [
    {
      title: 'Kata kerja menutup kalimat',
      form: '(Topik/Subjek) + (Keterangan) + (Objek) + Kata kerja',
      body:
        'Bahasa Korea adalah bahasa SOV: semua informasi lain muncul lebih dulu, lalu kata kerja datang paling akhir sebagai penutup. Karena itu, saat membaca kalimat Korea kamu baru tahu "apa yang terjadi" di detik terakhir. Biasakan membaca sampai habis sebelum menyimpulkan artinya.',
      examples: [
        {
          ko: '저는 밥을 먹어요.',
          id: 'Saya makan nasi.',
          highlight: ['먹어요'],
          highlightKind: 'ending',
        },
        {
          ko: '저는 아침에 집에서 빵을 먹어요.',
          id: 'Pagi hari saya makan roti di rumah.',
          highlight: ['먹어요'],
          highlightKind: 'ending',
          note: 'Kalimatnya jauh lebih panjang, tetapi kata kerjanya tetap di posisi yang sama: paling akhir.',
        },
      ],
      more:
        'Satu-satunya hal yang boleh muncul setelah kata kerja adalah penanda kalimat seperti tanda tanya, atau akhiran tambahan seperti 요 dan 니까. Tidak ada objek, keterangan, atau subjek yang boleh berada di belakang kata kerja dalam tulisan baku. (Dalam percakapan sangat santai orang kadang menambahkan keterangan di belakang sebagai renungan — tapi itu pengecualian, bukan pola yang perlu kamu tiru dulu.)',
    },
    {
      title: 'Partikel: penanda peran, bukan kata terpisah',
      form: 'kata benda + partikel (ditulis menempel)',
      body:
        'Partikel selalu ditulis menempel pada kata bendanya: 저는, bukan 저 는. Tugasnya adalah memberi tahu peran kata benda itu di dalam kalimat — pelaku, objek, tempat, tujuan, dan seterusnya. Inilah alasan urutan kata Korea bisa lebih luwes daripada bahasa Indonesia.',
      examples: [
        {
          ko: '커피를 마셔요.',
          id: 'Saya minum kopi.',
          highlight: ['를'],
          note: '를 menandai 커피 sebagai objek.',
        },
        {
          ko: '커피가 맛있어요.',
          id: 'Kopinya enak.',
          highlight: ['가'],
          note: '가 menandai 커피 sebagai subjek. Kata bendanya sama, partikelnya berbeda, artinya berubah total.',
        },
      ],
      mistakes: [
        {
          wrong: '저 는 커피 를 마셔요.',
          right: '저는 커피를 마셔요.',
          why: 'Partikel tidak pernah dipisah dengan spasi dari kata bendanya.',
        },
      ],
      more:
        'Dalam percakapan santai, partikel 는/가/를 sering dihilangkan: 커피 마셔요? ("Minum kopi?"). Itu bukan kesalahan — itu ragam lisan. Tapi selama kamu masih membangun rasa bahasa, tulis partikelnya lengkap supaya perannya jelas.',
    },
    {
      title: 'Subjek sering dihilangkan',
      body:
        'Kalau sudah jelas siapa yang dibicarakan, bahasa Korea membuang subjeknya. Mengulang 저는 di setiap kalimat justru terdengar kaku, seperti orang yang terus-menerus menunjuk dirinya sendiri.',
      examples: [
        {
          ko: 'A: 지금 뭐 해요?  B: 커피 마셔요.',
          id: 'A: Sekarang sedang apa?  B: Minum kopi.',
          note: 'B tidak mengatakan 저는 — konteksnya sudah jelas.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Di pantry kantor',
    situation: 'Dua rekan kerja bertemu di pantry pada pagi hari.',
    lines: [
      {
        speaker: '수진',
        ko: '안녕하세요. 뭐 마셔요?',
        id: 'Halo. Minum apa?',
        note: 'Dalam percakapan, 뭐를 biasanya disingkat menjadi 뭐 saja.',
      },
      {
        speaker: '민호',
        ko: '저는 커피 마셔요. 수진 씨는요?',
        id: 'Saya minum kopi. Kalau Sujin?',
        note: '~는요? dipakai untuk melemparkan pertanyaan yang sama kembali ke lawan bicara.',
      },
      { speaker: '수진', ko: '저는 녹차 마셔요.', id: 'Saya minum teh hijau.' },
      {
        speaker: '민호',
        ko: '저도 녹차 좋아해요.',
        id: 'Saya juga suka teh hijau.',
        note: '도 berarti "juga" — akan dipelajari lengkap di Modul 2.',
      },
    ],
    politeness:
      'Seluruh dialog memakai 해요체: bentuk sopan yang paling umum di kantor, toko, dan percakapan sehari-hari dengan orang yang belum akrab. Akhiran 요 adalah tandanya.',
  },

  passage: {
    title: '민호 씨의 하루',
    intro: 'Satu hari Minho, dalam empat kalimat.',
    sentences: [
      { ko: '민호 씨는 회사원이에요.', id: 'Minho adalah seorang karyawan.' },
      { ko: '아침에 커피를 마셔요.', id: 'Pagi hari dia minum kopi.' },
      { ko: '그리고 회사에 가요.', id: 'Lalu dia pergi ke kantor.' },
      { ko: '저녁에는 집에서 영화를 봐요.', id: 'Malamnya dia menonton film di rumah.' },
    ],
    vocabInContext: [
      { ko: '회사원', id: 'karyawan' },
      { ko: '아침', id: 'pagi' },
      { ko: '그리고', id: 'lalu, dan' },
      { ko: '저녁', id: 'malam, petang' },
    ],
    analysis: [
      '민호 씨는 memakai 는 karena Minho diperkenalkan sebagai topik cerita. Kalimat-kalimat berikutnya tidak perlu menyebut namanya lagi — pembaca sudah tahu siapa yang dibicarakan.',
      '아침에 dan 저녁에 memakai partikel 에 untuk menandai waktu.',
      '회사에 가요 memakai 에 karena kantor adalah tujuan pergi, sedangkan 집에서 영화를 봐요 memakai 에서 karena rumah adalah tempat kegiatan berlangsung. Bedanya dibahas tuntas di Pelajaran 2.5.',
      'Ketiga kata kerjanya — 마셔요, 가요, 봐요 — semuanya berada di akhir kalimat.',
    ],
  },

  exercises: [
    {
      id: 'm1l1-e1',
      kind: 'build',
      prompt: 'Susun kalimat Korea dari ubin di bawah.',
      translation: 'Saya minum kopi.',
      tiles: ['저는', '커피를', '마셔요'],
      distractors: ['에서', '가요'],
      answers: ['저는 커피를 마셔요'],
      explain:
        'Urutannya topik → objek → kata kerja. 저는 menandai siapa pelakunya, 커피를 menandai apa yang diminum, dan 마셔요 menutup kalimat.',
      parts: [
        { part: '저는', role: 'topik: saya' },
        { part: '커피를', role: 'objek: kopi (를 = penanda objek)' },
        { part: '마셔요', role: 'kata kerja 마시다 dalam bentuk 해요체' },
      ],
      tags: ['urutan SOV'],
      hint: 'Kata kerja selalu paling akhir. Objek berada tepat sebelum kata kerja.',
    },
    {
      id: 'm1l1-e2',
      kind: 'build',
      prompt: 'Susun kalimat Korea dari ubin di bawah.',
      translation: 'Minho menonton film di rumah.',
      tiles: ['민호 씨는', '집에서', '영화를', '봐요'],
      distractors: ['회사에', '를'],
      answers: ['민호 씨는 집에서 영화를 봐요', '집에서 민호 씨는 영화를 봐요'],
      explain:
        'Urutan netralnya: topik (민호 씨는) → tempat (집에서) → objek (영화를) → kata kerja (봐요). Perhatikan bahwa dalam bahasa Indonesia keterangan tempat justru diletakkan di belakang.',
      parts: [
        { part: '민호 씨는', role: 'topik: Minho' },
        { part: '집에서', role: 'tempat kegiatan berlangsung' },
        { part: '영화를', role: 'objek: film' },
        { part: '봐요', role: 'kata kerja 보다 → 봐요' },
      ],
      altNote:
        'Menaruh 집에서 di paling depan juga diterima dan terdengar wajar — yang tidak boleh adalah memindahkan 봐요 dari posisi terakhir.',
      tags: ['urutan SOV'],
    },
    {
      id: 'm1l1-e3',
      kind: 'correct',
      prompt: 'Kalimat ini salah urutan. Tulis versi yang benar.',
      sentence: '저는 마셔요 커피를.',
      translation: 'Saya minum kopi.',
      answers: ['저는 커피를 마셔요'],
      explain:
        'Kata kerja 마셔요 diletakkan sebelum objeknya — ini mengikuti pola bahasa Indonesia, bukan Korea. Dalam bahasa Korea kata kerja harus menutup kalimat, jadi 커피를 pindah ke depan 마셔요.',
      tags: ['urutan SOV'],
    },
    {
      id: 'm1l1-e4',
      kind: 'match',
      prompt: 'Pasangkan kata Korea dengan artinya.',
      pairs: [
        { left: '마시다', right: 'minum' },
        { left: '보다', right: 'melihat, menonton' },
        { left: '가다', right: 'pergi' },
        { left: '공부하다', right: 'belajar' },
        { left: '회사', right: 'kantor' },
      ],
      explain:
        'Keempat kata kerja di atas ditulis dalam bentuk kamus (berakhiran 다). Bentuk inilah yang kamu temukan di kamus, dan dari bentuk ini nanti kita bentuk 해요체.',
      tags: ['kosakata'],
    },
    {
      id: 'm1l1-e5',
      kind: 'fill',
      prompt: 'Lengkapi kalimat dengan kata kerja yang tepat dalam bentuk 해요체.',
      sentence: '저는 한국어를 ___.',
      translation: 'Saya belajar bahasa Korea.',
      answers: ['공부해요'],
      explain:
        '공부하다 ("belajar") berubah menjadi 공부해요 dalam 해요체. Semua kata kerja berakhiran 하다 berubah menjadi 해요.',
      hint: 'Kata kerjanya berakhiran 하다.',
      tags: ['해요체'],
    },
    {
      id: 'm1l1-e6',
      kind: 'mc',
      prompt: 'Berdasarkan bacaan "민호 씨의 하루", apa yang Minho lakukan di malam hari?',
      options: [
        '집에서 영화를 봐요.',
        '회사에 가요.',
        '커피를 마셔요.',
        '한국어를 공부해요.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat terakhir bacaan berbunyi 저녁에는 집에서 영화를 봐요 — "malamnya dia menonton film di rumah".',
      whyNot: {
        '회사에 가요.': 'Itu yang dia lakukan setelah minum kopi di pagi hari.',
        '커피를 마셔요.': '커피 diminum pada 아침 (pagi), bukan 저녁.',
        '한국어를 공부해요.': 'Belajar bahasa Korea tidak disebut dalam bacaan ini.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm1l1-q1',
      kind: 'mc',
      prompt: 'Manakah urutan kalimat Korea yang paling netral dan wajar?',
      options: [
        '저는 집에서 영화를 봐요.',
        '저는 봐요 영화를 집에서.',
        '영화를 봐요 저는 집에서.',
        '봐요 저는 집에서 영화를.',
      ],
      answerIndex: 0,
      explain:
        'Urutan netral: topik → keterangan tempat → objek → kata kerja. Tiga pilihan lainnya menaruh kata kerja bukan di akhir kalimat, dan itu tidak gramatikal.',
      tags: ['urutan SOV'],
    },
    {
      id: 'm1l1-q2',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Hari ini saya pergi ke kantor.',
      tiles: ['오늘은', '회사에', '가요'],
      distractors: ['에서', '봐요'],
      answers: ['오늘은 회사에 가요'],
      explain:
        '오늘은 adalah topik waktu, 회사에 menandai tujuan dengan partikel 에, dan 가요 menutup kalimat.',
      parts: [
        { part: '오늘은', role: 'topik waktu: hari ini' },
        { part: '회사에', role: 'tujuan: ke kantor' },
        { part: '가요', role: 'kata kerja 가다 → 가요' },
      ],
      tags: ['urutan SOV'],
    },
    {
      id: 'm1l1-q3',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel objek yang tepat.',
      sentence: '민호 씨는 영화___ 봐요.',
      translation: 'Minho menonton film.',
      answers: ['를'],
      explain:
        '영화 berakhir dengan vokal (화), jadi partikel objeknya 를. Kalau kata bendanya berakhir dengan konsonan, partikelnya 을 — misalnya 밥을.',
      tags: ['을/를'],
    },
  ],

  summary: {
    points: [
      'Urutan netral kalimat Korea: topik/subjek → keterangan waktu & tempat → objek → kata kerja.',
      'Kata kerja selalu menutup kalimat. Ini aturan yang kaku, berbeda dari bahasa Indonesia.',
      'Partikel ditulis menempel pada kata bendanya dan memberi tahu peran kata itu di dalam kalimat.',
      'Karena peran sudah ditandai partikel, bagian lain kalimat boleh bergeser untuk menekankan sesuatu — kecuali kata kerjanya.',
      'Subjek yang sudah jelas dari konteks biasanya dihilangkan.',
    ],
    pitfalls: [
      {
        wrong: '저는 마셔요 커피를.',
        right: '저는 커피를 마셔요.',
        why: 'Menyalin urutan bahasa Indonesia (S–P–O). Objek harus mendahului kata kerja.',
      },
      {
        wrong: '저 는 커피 를 마셔요.',
        right: '저는 커피를 마셔요.',
        why: 'Partikel dipisah dengan spasi. Partikel selalu menempel pada kata bendanya.',
      },
    ],
  },
}
