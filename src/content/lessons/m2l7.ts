import type { Lesson } from '../../types/curriculum'

export const m2l7: Lesson = {
  id: 'm2-l7',
  moduleId: 'm2',
  number: '2.7',
  title: 'Menyambung kata benda & menyatakan milik',
  subtitle: '하고 · 와/과 · (이)랑 · 의',
  objective:
    'Setelah pelajaran ini kamu bisa menyambungkan dua kata benda dengan tingkat keformalan yang tepat, dan menyatakan kepemilikan secara alami.',
  focus: ['하고', '와/과', '(이)랑', '의'],
  estimatedMinutes: 14,

  coreExamples: [
    { ko: '빵하고 우유를 샀어요.', id: 'Saya membeli roti dan susu.', highlight: ['하고'] },
    { ko: '친구하고 영화를 봤어요.', id: 'Saya menonton film bersama teman.', highlight: ['하고'] },
    { ko: '빵과 우유가 있어요.', id: 'Ada roti dan susu.', highlight: ['과'] },
    { ko: '동생이랑 게임을 해요.', id: 'Saya main game bersama adik.', highlight: ['이랑'] },
    { ko: '이건 친구의 가방이에요.', id: 'Ini tas teman saya.', highlight: ['의'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '친구하고 영화를 봤어요.',
        id: 'Saya menonton film bersama teman.',
        highlight: ['하고', '를'],
      },
      rows: [
        {
          unit: '친구하고',
          formula: '친구 + 하고',
          meaning: 'Bersama teman; 하고 di sini berarti "dengan", bukan "dan"',
        },
        { unit: '영화를', formula: '영화 + 를', meaning: 'Film — objek yang ditonton' },
        { unit: '봤어요', formula: '보다 → 봤어요', meaning: 'Menonton, bentuk lampau' },
      ],
      why:
        'Ketiga partikel penyambung — 하고, 와/과, (이)랑 — punya DUA arti sekaligus: "dan" saat menyambungkan dua kata benda setara, dan "dengan" saat menyebut teman melakukan sesuatu. Mana yang dimaksud ditentukan oleh struktur kalimatnya: kalau hanya ada satu kata benda yang tersambung dan ada kata kerja setelahnya, artinya "dengan".',
      swaps: [
        {
          alt: '친구하고 같이 영화를 봤어요.',
          effect:
            'Menambahkan 같이 ("bersama-sama") membuat makna "dengan" menjadi sangat jelas. Banyak penutur memakai gabungan ini secara default.',
        },
        {
          alt: '친구를 만났어요.',
          effect:
            'Kalau kata kerjanya 만나다, orang yang ditemui justru menjadi objek dengan 를 — bukan 하고. Lihat kembali Pelajaran 2.3.',
        },
      ],
    },
    {
      sentence: {
        ko: '이건 친구의 가방이에요.',
        id: 'Ini tas teman saya.',
        highlight: ['의'],
      },
      rows: [
        { unit: '이건', formula: '이것 + 은', meaning: 'Benda ini — topik kalimat' },
        {
          unit: '친구의',
          formula: '친구 + 의',
          meaning: 'Milik teman; 의 menyambungkan dua kata benda',
        },
        { unit: '가방이에요', formula: '가방 + 이에요', meaning: 'Adalah tas (받침 ㅇ → 이에요)' },
      ],
      why:
        '의 menyambungkan dua kata benda dalam hubungan kepemilikan atau keterkaitan. Yang penting diketahui: dalam percakapan sehari-hari, 의 SANGAT sering dilepas — 친구 가방이에요 terdengar sama alaminya. Dan satu hal yang mengejutkan: pada posisi partikel, 의 dibaca [에], bukan [의].',
      swaps: [
        {
          alt: '이건 친구 가방이에요.',
          effect:
            'Tanpa 의. Sama benarnya dan justru lebih lazim dalam percakapan. 의 dipertahankan terutama dalam tulisan atau saat hubungannya perlu ditegaskan.',
        },
        {
          alt: '이건 제 가방이에요.',
          effect:
            '저 + 의 menyusut menjadi 제. Untuk kata ganti orang, bentuk pendek inilah yang dipakai — 저의 terdengar kaku.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '하고', id: 'dan; dengan', pos: 'partikel', note: 'Netral, paling aman dipakai.' },
    { ko: '와 / 과', id: 'dan; dengan', pos: 'partikel', note: '와 setelah vokal, 과 setelah konsonan.' },
    { ko: '(이)랑', id: 'dan; dengan', pos: 'partikel', note: 'Santai. 랑 setelah vokal, 이랑 setelah konsonan.' },
    { ko: '의', id: 'milik, dari', pos: 'partikel', note: 'Dibaca [에] saat menjadi partikel.' },
    { ko: '같이', id: 'bersama-sama', pos: 'kata keterangan', note: 'Dibaca [가치].' },
    { ko: '동생', id: 'adik', pos: 'kata benda' },
    { ko: '사다', id: 'membeli', pos: 'kata kerja', note: '해요체: 사요. Lampau: 샀어요.' },
    { ko: '우유', id: 'susu', pos: 'kata benda' },
    { ko: '선물', id: 'hadiah', pos: 'kata benda' },
    { ko: '이름', id: 'nama', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: 'Tiga cara, satu arti',
      form: '하고 (netral) · 와/과 (agak formal) · (이)랑 (santai)',
      body:
        'Ketiganya bisa dipakai bergantian tanpa mengubah arti. Yang berbeda hanyalah rasa keformalannya. Kalau ragu, pakai 하고 — ia aman di hampir semua situasi.',
      table: {
        caption:
          'Hanya 와/과 dan (이)랑 yang berubah bentuk. 하고 selalu sama, tidak peduli ada 받침 atau tidak.',
        columns: ['Bentuk', 'Setelah vokal', 'Setelah konsonan', 'Rasanya'],
        rows: [
          ['하고', '친구하고', '빵하고', 'Netral — percakapan dan tulisan'],
          ['와 / 과', '친구와', '빵과', 'Agak formal, lazim dalam tulisan'],
          ['(이)랑', '친구랑', '빵이랑', 'Santai, untuk teman dekat'],
        ],
      },
      examples: [
        { ko: '빵하고 우유를 샀어요.', id: 'Saya membeli roti dan susu.', highlight: ['하고'] },
        { ko: '빵과 우유를 샀습니다.', id: 'Saya membeli roti dan susu.', highlight: ['과'], note: 'Versi formal, lengkap dengan akhiran 〜습니다.' },
        { ko: '빵이랑 우유 샀어.', id: 'Aku beli roti sama susu.', highlight: ['이랑'], note: 'Versi santai antar teman dekat (반말).' },
      ],
      mistakes: [
        { wrong: '빵와 우유', right: '빵과 우유', why: '빵 punya 받침, jadi pasangannya 과.' },
        { wrong: '친구과 갔어요', right: '친구와 갔어요', why: '친구 berakhir vokal, jadi pasangannya 와.' },
      ],
    },
    {
      title: '"dan" atau "dengan"?',
      body:
        'Satu partikel, dua fungsi. Perbedaannya terlihat dari apa yang mengikutinya: kalau ada kata benda kedua yang membawa partikel sendiri, artinya "dan". Kalau langsung disusul kata kerja, artinya "dengan".',
      examples: [
        {
          ko: '빵하고 우유를 샀어요.',
          id: 'Saya membeli roti dan susu.',
          note: '"dan" — dua benda yang sama-sama dibeli. Perhatikan 를 hanya muncul sekali, pada kata terakhir.',
        },
        {
          ko: '친구하고 갔어요.',
          id: 'Saya pergi bersama teman.',
          note: '"dengan" — tidak ada kata benda kedua.',
        },
        {
          ko: '친구하고 빵하고 우유를 샀어요.',
          id: 'Saya membeli roti dan susu bersama teman.',
          note: 'Keduanya sekaligus — meski kalimat seperti ini jarang, dan biasanya 같이 ditambahkan untuk memperjelas.',
        },
      ],
      more:
        'Saat menyambungkan tiga kata benda atau lebih, partikel penyambungnya diulang pada setiap kata kecuali yang terakhir, dan partikel peran (을/를, 이/가) hanya muncul sekali di ujung: 빵하고 우유하고 커피를 샀어요. Jangan memberi 를 pada setiap kata.',
    },
    {
      title: '의 dan bentuk pendeknya',
      form: 'kata benda + 의 + kata benda',
      body:
        'Tiga hal yang perlu kamu tahu tentang 의. Pertama, ia dibaca [에] pada posisi partikel. Kedua, untuk kata ganti orang ia menyusut. Ketiga, dalam percakapan ia sangat sering dilepas begitu saja.',
      table: {
        columns: ['Bentuk panjang', 'Bentuk pendek', 'Arti', 'Yang biasa dipakai'],
        rows: [
          ['저의', '제', 'saya punya', '제'],
          ['나의', '내', 'aku punya', '내'],
          ['너의', '네', 'kamu punya', '네'],
          ['친구의 가방', '친구 가방', 'tas teman', 'keduanya lazim'],
          ['한국의 날씨', '한국 날씨', 'cuaca Korea', 'keduanya lazim'],
        ],
      },
      examples: [
        { ko: '제 이름은 비오예요.', id: 'Nama saya Vio.', highlight: ['제'] },
        { ko: '회사 앞 식당', id: 'rumah makan di depan kantor', note: 'Tiga kata benda berderet tanpa 의 sama sekali — sangat umum.' },
      ],
      more:
        '의 lebih sering dipertahankan kalau hubungannya abstrak atau perlu ditegaskan: 사랑의 의미 ("makna cinta"), 우리의 미래 ("masa depan kita"). Untuk kepemilikan sehari-hari yang sudah jelas dari konteks, melepasnya justru terdengar lebih alami.',
    },
    {
      title: '우리 menggantikan "milik saya"',
      body:
        'Orang Korea memakai 우리 ("kami/kita") untuk menyebut hal-hal yang dianggap milik bersama — keluarga, rumah, kantor, negara — bahkan saat berbicara sendirian. Memakai 제 di tempat ini justru terdengar aneh.',
      examples: [
        { ko: '우리 가족은 네 명이에요.', id: 'Keluarga saya ada empat orang.' },
        { ko: '우리 회사는 서울에 있어요.', id: 'Kantor saya ada di Seoul.' },
        { ko: '우리 집에 오세요.', id: 'Silakan datang ke rumah saya.' },
      ],
      mistakes: [
        {
          wrong: '제 가족은 네 명이에요.',
          right: '우리 가족은 네 명이에요.',
          why: 'Tidak salah secara tata bahasa, tetapi terdengar tidak wajar. Untuk keluarga, rumah, dan kantor, orang Korea memakai 우리.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Belanja untuk sarapan',
    situation: 'Vio dan teman sekamarnya merencanakan belanja.',
    lines: [
      { speaker: '룸메이트', ko: '오늘 뭐 살 거예요?', id: 'Hari ini mau beli apa?' },
      {
        speaker: '비오',
        ko: '빵하고 우유하고 계란을 살 거예요.',
        id: 'Saya mau beli roti, susu, dan telur.',
        note: '하고 diulang di antara setiap kata, tetapi 을 hanya muncul sekali di kata terakhir.',
      },
      { speaker: '룸메이트', ko: '저도 같이 갈게요. 누구 차로 가요?', id: 'Saya ikut, ya. Naik mobil siapa?' },
      {
        speaker: '비오',
        ko: '친구 차로 가요. 친구도 같이 가요.',
        id: 'Naik mobil teman. Temannya juga ikut.',
        note: '친구 차 tanpa 의 — sangat lazim dalam percakapan.',
      },
      {
        speaker: '룸메이트',
        ko: '좋아요. 그럼 세 시에 우리 집 앞에서 만나요.',
        id: 'Baik. Kalau begitu jam tiga kita ketemu di depan rumah kita.',
        note: '우리 집 — bukan 제 집, meskipun maksudnya rumah mereka berdua.',
      },
    ],
    politeness:
      '〜ㄹ 거예요 menyatakan rencana ("akan"), dan 〜ㄹ게요 menyatakan niat yang melibatkan lawan bicara ("saya akan … ya"). Keduanya dibahas di Modul 3; di sini cukup kamu kenali bentuknya.',
  },

  passage: {
    title: '제 책상',
    intro: 'Satu paragraf pendek dengan banyak penyambung kata benda.',
    sentences: [
      { ko: '제 책상 위에 노트북하고 공책이 있어요.', id: 'Di atas meja saya ada laptop dan buku catatan.' },
      { ko: '공책은 친구의 선물이에요.', id: 'Buku catatan itu hadiah dari teman.' },
      { ko: '친구 이름은 민호예요.', id: 'Nama temannya Minho.' },
      { ko: '민호 씨하고 저는 같은 회사에서 일해요.', id: 'Minho dan saya bekerja di kantor yang sama.' },
      { ko: '우리는 점심시간에 같이 밥을 먹어요.', id: 'Kami makan siang bersama.' },
    ],
    vocabInContext: [
      { ko: '공책', id: 'buku catatan' },
      { ko: '같은', id: 'yang sama' },
      { ko: '점심시간', id: 'waktu makan siang' },
      { ko: '선물', id: 'hadiah' },
    ],
    analysis: [
      '노트북하고 공책이 있어요 — 하고 berarti "dan", dan partikel subjek 이 hanya muncul satu kali di kata terakhir.',
      '친구의 선물 mempertahankan 의 karena hubungannya ditegaskan, sedangkan 친구 이름 di kalimat berikutnya melepasnya. Keduanya benar — ini pilihan gaya, bukan aturan kaku.',
      '민호 씨하고 저는 — di sini 하고 menyambungkan dua orang sebagai subjek bersama, lalu 는 ditempelkan pada kata terakhir.',
      '우리는 dipakai untuk menyebut mereka berdua, sesuai kebiasaan Korea memakai 우리 untuk kelompok sendiri.',
    ],
  },

  exercises: [
    {
      id: 'm2l7-e1',
      kind: 'particle',
      prompt: 'Pilih bentuk yang ejaannya tepat.',
      context: 'Kamu menulis daftar belanja dalam bahasa tulis yang agak formal.',
      sentence: '빵___ 우유를 샀어요.',
      translation: 'Saya membeli roti dan susu.',
      options: ['과', '와'],
      answer: '과',
      explain:
        '빵 berakhir dengan konsonan ㅇ, jadi bentuknya 과. Setelah vokal barulah dipakai 와, misalnya 우유와. Dalam percakapan, 빵하고 dan 빵이랑 juga sepenuhnya benar.',
      whyNot: {
        와: '와 hanya dipakai setelah kata yang berakhir vokal.',
      },
      tags: ['와/과'],
    },
    {
      id: 'm2l7-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk santai yang ejaannya tepat.',
      context: 'Kamu mengobrol dengan teman dekat tentang adikmu.',
      sentence: '동생___ 게임을 해요.',
      translation: 'Saya main game bersama adik.',
      options: ['이랑', '랑'],
      answer: '이랑',
      explain:
        '동생 berakhir dengan konsonan ㅇ, jadi bentuknya 이랑. Setelah vokal cukup 랑, misalnya 친구랑.',
      whyNot: {
        랑: '랑 dipakai setelah vokal. Karena 동생 punya 받침, bentuknya 이랑.',
      },
      tags: ['(이)랑'],
    },
    {
      id: 'm2l7-e3',
      kind: 'fill',
      prompt: 'Lengkapi dengan bentuk kepemilikan yang paling lazim.',
      sentence: '___ 이름은 비오예요.',
      translation: 'Nama saya Vio.',
      answers: ['제'],
      explain:
        '저 + 의 menyusut menjadi 제, dan bentuk pendek inilah yang hampir selalu dipakai. 저의 benar secara tata bahasa tetapi terdengar kaku.',
      hint: 'Bentuk panjangnya 저의.',
      alternatives: [
        { form: '저의', nuance: 'Benar, tapi kaku — dipakai kalau ingin menekankan "milik SAYA".' },
      ],
      tags: ['의'],
    },
    {
      id: 'm2l7-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap bentuk dengan keterangannya.',
      pairs: [
        { left: '하고', right: 'netral — aman di semua situasi' },
        { left: '와/과', right: 'agak formal — lazim dalam tulisan' },
        { left: '(이)랑', right: 'santai — untuk teman dekat' },
        { left: '의', right: 'kepemilikan; sering dilepas dalam percakapan' },
        { left: '같이', right: 'bersama-sama (kata keterangan, bukan partikel)' },
      ],
      explain:
        'Ketiga partikel penyambung artinya sama; yang membedakan hanya keformalan. 같이 bukan partikel — ia kata keterangan yang sering menemani 하고 untuk memperjelas makna "bersama".',
      tags: ['하고', '와/과', '(이)랑'],
    },
    {
      id: 'm2l7-e5',
      kind: 'build',
      prompt: 'Susun kalimatnya. Perhatikan di mana partikel objek diletakkan.',
      translation: 'Saya membeli roti, susu, dan telur.',
      tiles: ['빵하고', '우유하고', '계란을', '샀어요'],
      distractors: ['빵을', '우유를'],
      answers: ['빵하고 우유하고 계란을 샀어요'],
      explain:
        'Saat menyambungkan tiga kata benda, 하고 diulang di antara setiap kata — tetapi partikel objek 을 hanya muncul SEKALI, pada kata terakhir. Memberi 을/를 pada setiap kata adalah kesalahan umum.',
      parts: [
        { part: '빵하고', role: 'kata benda pertama + penyambung' },
        { part: '우유하고', role: 'kata benda kedua + penyambung' },
        { part: '계란을', role: 'kata benda terakhir + partikel objek' },
        { part: '샀어요', role: '사다 dalam bentuk lampau' },
      ],
      tags: ['하고'],
    },
    {
      id: 'm2l7-e6',
      kind: 'correct',
      prompt: 'Kalimat ini benar secara tata bahasa, tetapi tidak terdengar wajar bagi penutur Korea. Perbaiki.',
      sentence: '제 가족은 네 명이에요.',
      translation: 'Keluarga saya ada empat orang.',
      answers: ['우리 가족은 네 명이에요'],
      explain:
        'Untuk keluarga, rumah, kantor, dan negara, orang Korea memakai 우리 ("kami") — bukan 제 — bahkan saat berbicara seorang diri. 제 가족 terdengar seperti memisahkan diri dari keluarga sendiri.',
      tags: ['의'],
    },
    {
      id: 'm2l7-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Kemarin saya menonton film bersama teman.',
      answers: [
        '어제 친구하고 영화를 봤어요',
        '어제 친구와 영화를 봤어요',
        '어제 친구랑 영화를 봤어요',
        '어제 친구하고 같이 영화를 봤어요',
      ],
      explain:
        '하고 di sini berarti "bersama" karena langsung disusul objek dan kata kerja, bukan kata benda setara. 와 dan 랑 juga diterima — bedanya hanya keformalan.',
      alternatives: [
        { form: '어제 친구하고 같이 영화를 봤어요.', nuance: 'Menambahkan 같이 membuat makna "bersama" lebih tegas.' },
      ],
      tags: ['하고'],
    },
  ],

  quiz: [
    {
      id: 'm2l7-q1',
      kind: 'mc',
      prompt: 'Manakah yang ejaannya SEMUA benar?',
      options: [
        '친구와 · 빵과 · 친구랑 · 빵이랑',
        '친구과 · 빵와 · 친구이랑 · 빵랑',
        '친구와 · 빵와 · 친구랑 · 빵랑',
        '친구과 · 빵과 · 친구랑 · 빵이랑',
      ],
      answerIndex: 0,
      explain:
        'Aturannya: setelah vokal pakai 와 dan 랑; setelah konsonan pakai 과 dan 이랑. 친구 berakhir vokal → 친구와, 친구랑. 빵 punya 받침 → 빵과, 빵이랑.',
      tags: ['와/과', '(이)랑'],
    },
    {
      id: 'm2l7-q2',
      kind: 'correct',
      prompt: 'Perbaiki letak partikel objeknya.',
      sentence: '빵을하고 우유를 샀어요.',
      translation: 'Saya membeli roti dan susu.',
      answers: ['빵하고 우유를 샀어요'],
      explain:
        'Partikel objek tidak diletakkan pada setiap kata benda. Saat dua kata benda disambung, 을/를 hanya muncul satu kali di kata terakhir.',
      tags: ['하고'],
    },
    {
      id: 'm2l7-q3',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel kepemilikan.',
      sentence: '이건 친구___ 선물이에요.',
      translation: 'Ini hadiah dari teman.',
      answers: ['의'],
      explain:
        '의 menyambungkan dua kata benda dalam hubungan kepemilikan. Perhatikan bahwa pada posisi ini 의 dibaca [에]. Dalam percakapan, melepasnya (친구 선물) juga sepenuhnya wajar.',
      alternatives: [
        { form: '친구 선물이에요', nuance: 'Tanpa 의 — lebih lazim dalam percakapan sehari-hari.' },
      ],
      tags: ['의'],
    },
  ],

  summary: {
    points: [
      '하고, 와/과, dan (이)랑 artinya sama — yang berbeda hanya keformalannya. Kalau ragu, pakai 하고.',
      '와 setelah vokal, 과 setelah konsonan; 랑 setelah vokal, 이랑 setelah konsonan. 하고 tidak pernah berubah.',
      'Ketiganya bisa berarti "dan" maupun "dengan" — strukturnya yang menentukan.',
      'Saat menyambung beberapa kata benda, partikel peran (을/를, 이/가) hanya muncul sekali di kata terakhir.',
      '의 menyatakan kepemilikan, dibaca [에], menyusut menjadi 제/내, dan sering dilepas dalam percakapan.',
      'Untuk keluarga, rumah, dan kantor, pakai 우리 — bukan 제.',
    ],
    pitfalls: [
      {
        wrong: '빵을하고 우유를 샀어요.',
        right: '빵하고 우유를 샀어요.',
        why: 'Partikel objek hanya diberikan pada kata benda terakhir.',
      },
      { wrong: '빵와 우유', right: '빵과 우유', why: '빵 punya 받침, jadi pasangannya 과.' },
      {
        wrong: '제 회사는 서울에 있어요.',
        right: '우리 회사는 서울에 있어요.',
        why: 'Untuk kantor dan keluarga, orang Korea memakai 우리.',
      },
    ],
  },
}
