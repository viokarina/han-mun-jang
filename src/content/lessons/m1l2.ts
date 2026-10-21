import type { Lesson } from '../../types/curriculum'

export const m1l2: Lesson = {
  id: 'm1-l2',
  moduleId: 'm1',
  number: '1.2',
  title: 'Kalimat "A adalah B"',
  subtitle: '이에요 · 예요 · 아니에요 dan logika di baliknya',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan identitas, pekerjaan, dan kepemilikan dalam bahasa Korea — lengkap dengan cara menyangkalnya.',
  focus: ['이에요/예요', '이/가 아니에요'],
  estimatedMinutes: 14,

  coreExamples: [
    {
      ko: '저는 인도네시아 사람이에요.',
      id: 'Saya orang Indonesia.',
      highlight: ['이에요'],
      highlightKind: 'ending',
    },
    {
      ko: '수진 씨는 의사예요.',
      id: 'Sujin seorang dokter.',
      highlight: ['예요'],
      highlightKind: 'ending',
    },
    {
      ko: '이건 제 가방이에요.',
      id: 'Ini tas saya.',
      highlight: ['이에요'],
      highlightKind: 'ending',
      note: '이건 adalah bentuk singkat dari 이것은 ("benda ini, sebagai topik").',
    },
    {
      ko: '저는 학생이 아니에요.',
      id: 'Saya bukan pelajar.',
      highlight: ['이 아니에요'],
      highlightKind: 'ending',
    },
    {
      ko: '여기는 회사가 아니에요. 학교예요.',
      id: 'Di sini bukan kantor. Ini sekolah.',
      highlight: ['가 아니에요', '예요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 인도네시아 사람이에요.',
        id: 'Saya orang Indonesia.',
        highlight: ['이에요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '인도네시아',
          formula: '—',
          meaning: 'Indonesia; langsung menerangkan kata benda di belakangnya',
        },
        {
          unit: '사람이에요',
          formula: '사람 + 이에요',
          meaning: '"adalah orang"; bentuk 이에요 dipilih karena 사람 berakhir konsonan ㅁ',
        },
      ],
      why:
        'Bahasa Korea tidak punya kata kerja "adalah" yang berdiri sendiri. 이에요/예요 menempel langsung pada kata bendanya dan sekaligus menutup kalimat — persis seperti kata kerja biasa. Pilihan antara 이에요 dan 예요 ditentukan semata-mata oleh ada tidaknya 받침 pada kata bendanya.',
      swaps: [
        {
          alt: '저는 인도네시아 사람예요. ✗',
          effect:
            '사람 punya 받침 (ㅁ), jadi bentuk yang benar adalah 사람이에요. 예요 hanya untuk kata benda yang berakhir vokal.',
        },
        {
          alt: '저는 인도네시아 사람입니다.',
          effect:
            'Artinya sama persis, tetapi 〜입니다 adalah bentuk formal yang dipakai dalam presentasi, siaran berita, dan perkenalan resmi. Menariknya, 입니다 tidak peduli pada 받침 — bentuknya selalu sama.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 학생이 아니에요.',
        id: 'Saya bukan pelajar.',
        highlight: ['이', '아니에요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '학생이',
          formula: '학생 + 이',
          meaning: '"pelajar" + partikel 이; partikel ini wajib muncul sebelum 아니에요',
        },
        { unit: '아니에요', formula: '아니다 → 아니에요', meaning: '"bukan", bentuk 해요체' },
      ],
      why:
        'Sangkalan identitas tidak dibuat dengan menempelkan apa pun pada 이에요, melainkan dengan DUA kata: kata bendanya mendapat partikel 이/가, lalu disusul 아니에요. Partikel yang dipakai adalah penanda subjek 이/가 — bukan penanda objek 을/를 — karena 아니다 bukan kata kerja transitif. Dalam tata bahasa Korea bagian 학생이 ini disebut pelengkap (보어), dan pelengkap selalu memakai 이/가.',
      swaps: [
        {
          alt: '저는 학생을 아니에요. ✗',
          effect:
            'Kesalahan yang sangat umum. 아니다 tidak punya objek, jadi 을/를 tidak pernah muncul di sini.',
        },
        {
          alt: '저는 학생은 아니에요.',
          effect:
            'Benar juga, tetapi artinya bergeser menjadi "pelajar sih bukan (tapi mungkin sesuatu yang lain)". 은/는 menambahkan nuansa kontras. Untuk sangkalan netral, pakai 이/가.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '사람', id: 'orang', pos: 'kata benda' },
    { ko: '의사', id: 'dokter', pos: 'kata benda' },
    { ko: '선생님', id: 'guru', pos: 'kata benda', note: '님 adalah akhiran hormat.' },
    { ko: '회사원', id: 'karyawan', pos: 'kata benda' },
    { ko: '친구', id: 'teman', pos: 'kata benda' },
    { ko: '가방', id: 'tas', pos: 'kata benda' },
    {
      ko: '이것 (이거)',
      id: 'ini',
      pos: 'kata benda',
      note: '이거 adalah bentuk percakapan.',
      example: { ko: '이건 뭐예요?', id: 'Ini apa?' },
    },
    { ko: '여기', id: 'di sini, tempat ini', pos: 'kata benda' },
    { ko: '명함', id: 'kartu nama', pos: 'kata benda' },
    {
      ko: '아니다',
      id: 'bukan',
      pos: 'kata kerja',
      note: '해요체: 아니에요. Selalu didahului 이/가.',
      example: { ko: '제 가방이 아니에요.', id: 'Itu bukan tas saya.' },
    },
  ],

  grammar: [
    {
      title: '이에요 atau 예요?',
      form: 'kata benda + 이에요 (ada 받침) · 예요 (tanpa 받침)',
      body:
        'Hanya ada satu hal yang menentukan pilihannya: apakah suku kata terakhir kata bendanya punya konsonan penutup (받침). Tidak ada hubungannya dengan arti atau jenis kata.',
      table: {
        columns: ['Kata benda', 'Alasan', 'Hasil', 'Arti'],
        rows: [
          ['학생', '받침 ㅇ → 이에요', '학생이에요', 'adalah pelajar'],
          ['회사원', '받침 ㄴ → 이에요', '회사원이에요', 'adalah karyawan'],
          ['의사', 'berakhir vokal → 예요', '의사예요', 'adalah dokter'],
          ['친구', 'berakhir vokal → 예요', '친구예요', 'adalah teman'],
        ],
      },
      mistakes: [
        {
          wrong: '의사이에요',
          right: '의사예요',
          why: '의사 berakhir vokal ㅏ, jadi bentuknya 예요.',
        },
        {
          wrong: '학생예요',
          right: '학생이에요',
          why: '학생 punya 받침 ㅇ, jadi bentuknya 이에요.',
        },
      ],
      more:
        'Dalam tulisan resmi dan pidato dipakai 〜입니다, dan bentuk ini tidak peduli pada 받침: 학생입니다, 의사입니다. Pertanyaannya menjadi 〜입니까? Kamu akan sering mendengarnya di bandara, pengumuman, dan perkenalan formal. Untuk percakapan sehari-hari, 이에요/예요 jauh lebih umum.',
      moreExamples: [
        { ko: '저는 김민호입니다.', id: 'Saya Kim Minho.', note: 'Perkenalan formal.' },
        { ko: '여기가 사무실입니까?', id: 'Apakah di sini kantornya?' },
      ],
    },
    {
      title: 'Menyangkal: 이/가 아니에요',
      form: 'kata benda + 이/가 + 아니에요',
      body:
        'Berbeda dari 이에요/예요 yang menempel, sangkalan selalu ditulis sebagai dua kata. Kata bendanya mendapat 이 (ada 받침) atau 가 (tanpa 받침), lalu 아니에요 berdiri sendiri.',
      examples: [
        {
          ko: '저는 의사가 아니에요.',
          id: 'Saya bukan dokter.',
          highlight: ['가 아니에요'],
          highlightKind: 'ending',
        },
        {
          ko: '이건 제 가방이 아니에요.',
          id: 'Ini bukan tas saya.',
          highlight: ['이 아니에요'],
          highlightKind: 'ending',
        },
      ],
      mistakes: [
        {
          wrong: '저는 의사를 아니에요.',
          right: '저는 의사가 아니에요.',
          why: '아니다 bukan kata kerja transitif, jadi tidak pernah memakai 을/를.',
        },
        {
          wrong: '저는 의사가 아니예요.',
          right: '저는 의사가 아니에요.',
          why: 'Ejaannya 아니에요, bukan 아니예요 — ini kesalahan tulis yang bahkan sering dilakukan penutur asli.',
        },
      ],
    },
    {
      title: 'Kata tunjuk: 이거 · 그거 · 저거',
      body:
        'Bahasa Korea membedakan tiga jarak, bukan dua seperti "ini/itu" dalam bahasa Indonesia. 이것 untuk benda dekat pembicara, 그것 untuk benda dekat lawan bicara (atau yang sudah disebut sebelumnya), dan 저것 untuk benda yang jauh dari keduanya.',
      table: {
        caption:
          'Bentuk gabungan inilah yang paling sering kamu dengar dalam percakapan.',
        columns: ['Bentuk penuh', 'Percakapan', '+ 은/는', '+ 이/가'],
        rows: [
          ['이것', '이거', '이건', '이게'],
          ['그것', '그거', '그건', '그게'],
          ['저것', '저거', '저건', '저게'],
        ],
      },
      examples: [
        { ko: '이건 뭐예요?', id: 'Ini apa?' },
        {
          ko: '그건 제 명함이에요.',
          id: 'Itu kartu nama saya.',
          note: 'Memakai 그 karena bendanya ada di dekat lawan bicara.',
        },
      ],
    },
    {
      title: 'Memakai 씨 dengan nama',
      body:
        '씨 ditempelkan pada nama orang lain untuk menandai kesopanan netral — setara dengan memanggil rekan kerja dengan namanya. Dua hal penting: jangan pernah memakainya untuk dirimu sendiri, dan jangan memakainya untuk orang yang jauh lebih tinggi kedudukannya.',
      examples: [
        { ko: '민호 씨는 회사원이에요.', id: 'Minho seorang karyawan.' },
        {
          ko: '저는 비오 씨예요. ✗',
          id: '—',
          note: 'Salah: 씨 tidak dipakai untuk diri sendiri. Cukup 저는 비오예요.',
        },
      ],
      more:
        'Untuk atasan atau guru, pakai jabatan + 님: 선생님, 과장님, 사장님. Memanggil atasan dengan "나마 + 씨" terdengar kurang hormat. 씨 juga lebih baik ditempelkan pada nama depan atau nama lengkap (민호 씨, 김민호 씨) daripada hanya pada marga (김 씨), yang justru terdengar merendahkan.',
    },
  ],

  dialogue: {
    title: 'Berkenalan di acara kantor',
    situation: 'Dua orang baru saling bertemu di sebuah acara perusahaan.',
    lines: [
      {
        speaker: '수진',
        ko: '안녕하세요. 이름이 뭐예요?',
        id: 'Halo. Siapa nama Anda?',
        note: 'Harfiahnya "namanya apa?" — 이름 adalah subjeknya, jadi memakai 이.',
      },
      {
        speaker: '비오',
        ko: '저는 비오예요. 만나서 반가워요.',
        id: 'Saya Vio. Senang bertemu dengan Anda.',
      },
      {
        speaker: '수진',
        ko: '비오 씨는 한국 사람이에요?',
        id: 'Apakah Vio orang Korea?',
        note: 'Kalimat tanya dibuat hanya dengan menaikkan nada di akhir — bentuk katanya tidak berubah.',
      },
      {
        speaker: '비오',
        ko: '아니요, 한국 사람이 아니에요. 인도네시아 사람이에요.',
        id: 'Bukan, saya bukan orang Korea. Saya orang Indonesia.',
      },
      {
        speaker: '수진',
        ko: '아, 그래요? 저는 수진이에요.',
        id: 'Oh, begitu? Saya Sujin.',
        note: '그래요? adalah tanggapan serbaguna: "oh ya?", "begitu ya?".',
      },
    ],
    politeness:
      '반가워요 (해요체) dan 반갑습니다 (formal) sama-sama benar. Di acara kantor yang agak resmi, banyak orang memilih 반갑습니다 pada kalimat pertama lalu melanjutkan dengan 해요체.',
  },

  passage: {
    title: '제 소개',
    intro: 'Perkenalan diri yang bisa langsung kamu pakai.',
    sentences: [
      { ko: '안녕하세요. 저는 비오예요.', id: 'Halo. Saya Vio.' },
      { ko: '인도네시아 사람이에요.', id: 'Saya orang Indonesia.' },
      { ko: '저는 회사원이에요. 학생이 아니에요.', id: 'Saya karyawan. Bukan pelajar.' },
      { ko: '이건 제 명함이에요.', id: 'Ini kartu nama saya.' },
      { ko: '만나서 반가워요.', id: 'Senang bertemu dengan Anda.' },
    ],
    vocabInContext: [
      { ko: '소개', id: 'perkenalan' },
      { ko: '명함', id: 'kartu nama' },
      { ko: '반갑다', id: 'senang (bertemu)' },
    ],
    analysis: [
      'Kalimat kedua dan keempat tidak mengulang 저는 karena topiknya sudah jelas sejak kalimat pertama. Mengulangnya justru terdengar kaku.',
      '비오예요 memakai 예요 (berakhir vokal), sedangkan 회사원이에요 memakai 이에요 (받침 ㄴ).',
      '학생이 아니에요 memakai partikel 이 — bukan 을 — karena 아니다 menuntut pelengkap dengan 이/가.',
      '이건 adalah bentuk singkat 이것은: kata tunjuk 이것 digabung partikel topik 은.',
    ],
  },

  exercises: [
    {
      id: 'm1l2-e1',
      kind: 'fill',
      prompt: 'Lengkapi dengan 이에요 atau 예요.',
      sentence: '수진 씨는 의사___.',
      translation: 'Sujin seorang dokter.',
      answers: ['예요'],
      explain:
        '의사 berakhir dengan vokal ㅏ, jadi bentuk yang benar adalah 예요. Kalau kata bendanya punya 받침, barulah dipakai 이에요.',
      hint: 'Periksa dulu: apakah 사 punya konsonan penutup?',
      tags: ['이에요/예요'],
    },
    {
      id: 'm1l2-e2',
      kind: 'fill',
      prompt: 'Lengkapi dengan 이에요 atau 예요.',
      sentence: '저는 회사원___.',
      translation: 'Saya seorang karyawan.',
      answers: ['이에요'],
      explain:
        '회사원 berakhir dengan konsonan ㄴ (받침), jadi bentuknya 이에요. Bandingkan: 친구예요 (tanpa 받침) dan 학생이에요 (dengan 받침).',
      tags: ['이에요/예요'],
    },
    {
      id: 'm1l2-e3',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat sebelum 아니에요.',
      context:
        'Seseorang bertanya 학생이에요? dan kamu menjawab dengan sangkalan biasa, tanpa maksud membandingkan.',
      sentence: '저는 학생___ 아니에요.',
      translation: 'Saya bukan pelajar.',
      options: ['이', '가', '을', '는'],
      answer: '이',
      explain:
        '아니다 menuntut pelengkap dengan 이/가. 학생 punya 받침 ㅇ, jadi bentuknya 이.',
      whyNot: {
        가: '가 dipakai setelah kata yang berakhir vokal, misalnya 의사가 아니에요. 학생 punya 받침.',
        을: 'Ini kesalahan yang paling sering terjadi. 아니다 bukan kata kerja transitif, jadi tidak pernah memakai 을/를.',
        는: '학생은 아니에요 sebenarnya benar, tetapi menambahkan nuansa kontras — "pelajar sih bukan, tapi…". Untuk sangkalan netral, bentuk bakunya memakai 이/가.',
      },
      tags: ['이/가 아니에요'],
    },
    {
      id: 'm1l2-e4',
      kind: 'match',
      prompt: 'Pasangkan kata tunjuk dan kosakata dengan artinya.',
      pairs: [
        { left: '이것', right: 'ini (dekat saya)' },
        { left: '그것', right: 'itu (dekat lawan bicara)' },
        { left: '저것', right: 'itu (jauh dari kita berdua)' },
        { left: '명함', right: 'kartu nama' },
        { left: '회사원', right: 'karyawan' },
      ],
      explain:
        'Bahasa Korea membedakan tiga jarak, sedangkan bahasa Indonesia hanya dua. Perbedaan 그것 dan 저것 bergantung pada posisi lawan bicara, bukan hanya jarak fisik.',
      tags: ['kata tunjuk'],
    },
    {
      id: 'm1l2-e5',
      kind: 'build',
      prompt: 'Susun kalimat sangkalan ini.',
      translation: 'Ini bukan tas saya.',
      tiles: ['이건', '제', '가방이', '아니에요'],
      distractors: ['가방을', '이에요'],
      answers: ['이건 제 가방이 아니에요'],
      explain:
        '이건 = 이것은 (topik). 제 = "milik saya". 가방이 memakai 이 karena 가방 punya 받침 ㅇ dan karena 아니에요 menuntut pelengkap dengan 이/가.',
      parts: [
        { part: '이건', role: 'ini, sebagai topik (이것 + 은)' },
        { part: '제', role: 'milik saya (저 + 의 → 제)' },
        { part: '가방이', role: 'pelengkap dengan partikel 이' },
        { part: '아니에요', role: '"bukan", menutup kalimat' },
      ],
      tags: ['이/가 아니에요'],
    },
    {
      id: 'm1l2-e6',
      kind: 'correct',
      prompt: 'Perbaiki kesalahan pada kalimat ini.',
      sentence: '저는 의사이에요.',
      translation: 'Saya seorang dokter.',
      answers: ['저는 의사예요'],
      explain:
        '의사 berakhir dengan vokal, jadi bentuk yang benar adalah 의사예요. Bentuk 이에요 hanya dipakai setelah kata benda yang punya 받침.',
      tags: ['이에요/예요'],
    },
    {
      id: 'm1l2-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya bukan orang Korea.',
      answers: [
        '저는 한국 사람이 아니에요',
        '한국 사람이 아니에요',
        '저는 한국사람이 아니에요',
      ],
      explain:
        '한국 사람 berakhir dengan 받침 ㅁ, jadi partikel pelengkapnya 이, lalu disusul 아니에요 sebagai kata terpisah.',
      hint: 'Polanya: kata benda + 이/가 + 아니에요.',
      tags: ['이/가 아니에요'],
    },
  ],

  quiz: [
    {
      id: 'm1l2-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang ejaannya benar?',
      options: [
        '제 친구는 선생님이에요.',
        '제 친구는 선생님예요.',
        '제 친구는 선생님이예요.',
        '제 친구는 선생님에요.',
      ],
      answerIndex: 0,
      explain:
        '선생님 berakhir dengan 받침 ㅁ, jadi bentuknya 이에요. Perhatikan juga ejaannya: 이에요, bukan 이예요 atau 에요.',
      tags: ['이에요/예요'],
    },
    {
      id: 'm1l2-q2',
      kind: 'fill',
      prompt: 'Lengkapi sangkalan ini.',
      sentence: '여기는 회사___ 아니에요.',
      translation: 'Di sini bukan kantor.',
      answers: ['가'],
      explain:
        '회사 berakhir dengan vokal ㅏ, jadi partikel pelengkapnya 가. Kalau kata bendanya punya 받침, barulah dipakai 이.',
      tags: ['이/가 아니에요'],
    },
    {
      id: 'm1l2-q3',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Sujin bukan dokter. Dia seorang guru.',
      tiles: ['수진 씨는', '의사가', '아니에요.', '선생님이에요'],
      distractors: ['의사를', '선생님예요'],
      answers: ['수진 씨는 의사가 아니에요. 선생님이에요'],
      explain:
        'Kalimat pertama menyangkal dengan 의사가 아니에요 (의사 berakhir vokal → 가). Kalimat kedua tidak perlu mengulang subjeknya, dan 선생님 punya 받침 → 선생님이에요.',
      parts: [
        { part: '수진 씨는', role: 'topik: Sujin' },
        { part: '의사가', role: 'pelengkap untuk 아니에요' },
        { part: '아니에요.', role: 'menyangkal kalimat pertama' },
        { part: '선생님이에요', role: 'identitas sebenarnya, tanpa mengulang subjek' },
      ],
      tags: ['이에요/예요', '이/가 아니에요'],
    },
  ],

  summary: {
    points: [
      '이에요 dipakai setelah kata benda yang punya 받침; 예요 setelah kata benda yang berakhir vokal.',
      'Keduanya menempel pada kata bendanya dan menutup kalimat — tidak ada kata "adalah" yang berdiri sendiri.',
      'Sangkalan memakai dua kata: kata benda + 이/가 + 아니에요.',
      'Partikel sebelum 아니에요 adalah 이/가, bukan 을/를.',
      'Kata tunjuk Korea membedakan tiga jarak: 이것 (dekat saya), 그것 (dekat kamu), 저것 (jauh dari kita).',
    ],
    pitfalls: [
      {
        wrong: '저는 의사이에요.',
        right: '저는 의사예요.',
        why: 'Memakai 이에요 setelah kata benda yang berakhir vokal.',
      },
      {
        wrong: '저는 학생을 아니에요.',
        right: '저는 학생이 아니에요.',
        why: 'Memakai penanda objek. 아니다 menuntut pelengkap dengan 이/가.',
      },
      {
        wrong: '저는 비오 씨예요.',
        right: '저는 비오예요.',
        why: '씨 tidak pernah dipakai untuk menyebut diri sendiri.',
      },
    ],
  },
}
