import type { Lesson } from '../../types/curriculum'

export const m2l1: Lesson = {
  id: 'm2-l1',
  moduleId: 'm2',
  number: '2.1',
  title: '은/는 — menata apa yang dibicarakan',
  subtitle: 'Partikel topik dan nuansa membandingkan yang sering terlewat',
  objective:
    'Setelah pelajaran ini kamu bisa memakai 은/는 untuk menetapkan topik dan untuk membandingkan dua hal — serta tahu kenapa 은/는 bukan "penanda subjek".',
  focus: ['은/는'],
  estimatedMinutes: 15,

  coreExamples: [
    { ko: '저는 비오예요.', id: 'Saya Vio.', highlight: ['는'] },
    {
      ko: '오늘은 회사에 가요.',
      id: 'Hari ini saya pergi ke kantor.',
      highlight: ['은'],
      note: '은 di sini menyiratkan "kalau hari ini" — hari lain mungkin berbeda.',
    },
    {
      ko: '커피는 좋아해요. 하지만 차는 싫어해요.',
      id: 'Kopi saya suka. Tapi teh tidak suka.',
      highlight: ['는'],
    },
    {
      ko: '언니는 의사예요. 저는 회사원이에요.',
      id: 'Kakak saya dokter. Kalau saya, karyawan.',
      highlight: ['는'],
    },
    {
      ko: '한국어는 어려워요. 하지만 재미있어요.',
      id: 'Bahasa Korea itu sulit. Tapi menyenangkan.',
      highlight: ['는'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '오늘은 회사에 가요.',
        id: 'Hari ini saya pergi ke kantor.',
        highlight: ['은', '에'],
      },
      rows: [
        {
          unit: '오늘은',
          formula: '오늘 + 은',
          meaning: 'Hari ini, diangkat sebagai topik — menyiratkan perbandingan dengan hari lain',
        },
        { unit: '회사에', formula: '회사 + 에', meaning: 'Ke kantor; menandai tujuan' },
        { unit: '가요', formula: '가다 → 가요', meaning: 'Pergi, bentuk 해요체' },
      ],
      why:
        '은/는 tidak menandai siapa pelakunya. Tugasnya adalah mengangkat sesuatu menjadi "bahan pembicaraan", dan hampir selalu membawa perbandingan diam-diam. 오늘은 회사에 가요 terasa seperti "kalau hari ini, saya ke kantor" — pendengar Korea akan menangkap bahwa hari lain mungkin berbeda. Perhatikan juga: pelakunya (saya) tidak disebut sama sekali, karena sudah jelas dari konteks.',
      swaps: [
        {
          alt: '오늘 회사에 가요.',
          effect:
            'Tanpa 은, kalimatnya netral — sekadar memberi tahu rencana hari ini tanpa membandingkan apa pun. Justru bentuk inilah yang paling sering dipakai dalam percakapan biasa.',
        },
        {
          alt: '오늘도 회사에 가요.',
          effect:
            '도 ("juga") menggantikan posisi 은 dan mengubah artinya: "hari ini pun saya ke kantor" — menyiratkan kemarin juga begitu.',
        },
      ],
    },
    {
      sentence: {
        ko: '커피는 좋아해요. 하지만 차는 싫어해요.',
        id: 'Kopi saya suka. Tapi teh tidak suka.',
        highlight: ['는'],
      },
      rows: [
        {
          unit: '커피는',
          formula: '커피 + 는',
          meaning: 'Kopi, diangkat sebagai pembanding pertama',
        },
        { unit: '좋아해요', formula: '좋아하다 → 좋아해요', meaning: 'Menyukai, 해요체' },
        { unit: '차는', formula: '차 + 는', meaning: 'Teh, pembanding kedua' },
        { unit: '싫어해요', formula: '싫어하다 → 싫어해요', meaning: 'Tidak menyukai' },
      ],
      why:
        'Inilah kunci yang sering terlewat: 커피 dan 차 sebenarnya adalah OBJEK dari 좋아하다, yang normalnya memakai 를. Tetapi karena keduanya sedang diperhadapkan, 를 diganti 는. Jadi 은/는 bisa menggantikan 이/가 maupun 을/를 ketika dua hal dibandingkan — dan itulah sebabnya 은/는 tidak bisa disebut "penanda subjek".',
      swaps: [
        {
          alt: '커피를 좋아해요.',
          effect:
            'Kalimat netral tanpa pembandingan: sekadar menyatakan bahwa saya suka kopi.',
        },
        {
          alt: '커피는 좋아해요. (berdiri sendiri)',
          effect:
            'Bahkan tanpa kalimat kedua, 는 tetap menyiratkan ada sesuatu yang lain yang tidak disukai. Pendengar akan menangkap nuansa "kopi sih suka, tapi…" dan mungkin menunggu kelanjutannya.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '오늘', id: 'hari ini', pos: 'kata benda', note: 'Tidak memakai 에.' },
    { ko: '어제', id: 'kemarin', pos: 'kata benda' },
    { ko: '주말', id: 'akhir pekan', pos: 'kata benda' },
    { ko: '언니', id: 'kakak perempuan (dipakai oleh perempuan)', pos: 'kata benda' },
    { ko: '차', id: 'teh', pos: 'kata benda' },
    {
      ko: '좋아하다',
      id: 'menyukai',
      pos: 'kata kerja',
      note: 'Kata KERJA, jadi objeknya memakai 을/를.',
      example: { ko: '한국 음악을 좋아해요.', id: 'Saya suka musik Korea.' },
    },
    { ko: '싫어하다', id: 'tidak menyukai', pos: 'kata kerja', note: '해요체: 싫어해요.' },
    {
      ko: '어렵다',
      id: 'sulit',
      pos: 'kata sifat',
      note: 'ㅂ tidak beraturan: 어려워요.',
    },
    { ko: '재미있다', id: 'menyenangkan, menarik', pos: 'kata sifat', note: '해요체: 재미있어요.' },
    { ko: '하지만', id: 'tetapi', pos: 'kata keterangan' },
  ],

  grammar: [
    {
      title: '은 atau 는?',
      form: 'kata benda + 은 (ada 받침) · 는 (tanpa 받침)',
      body:
        'Pilihannya ditentukan semata-mata oleh ada tidaknya konsonan penutup pada suku kata terakhir — sama seperti 이에요/예요.',
      table: {
        columns: ['Kata benda', 'Alasan', 'Hasil'],
        rows: [
          ['주말', '받침 ㄹ → 은', '주말은'],
          ['선생님', '받침 ㅁ → 은', '선생님은'],
          ['어머니', 'vokal → 는', '어머니는'],
          ['커피', 'vokal → 는', '커피는'],
        ],
      },
    },
    {
      title: 'Tiga tugas 은/는',
      body:
        'Hampir semua pemakaian 은/는 bisa dikelompokkan ke dalam tiga tugas ini. Kalau kamu bisa mengenali mana yang sedang terjadi, pilihanmu akan jauh lebih mantap.',
      table: {
        columns: ['Tugas', 'Contoh', 'Rasanya seperti'],
        rows: [
          ['Menetapkan topik', '저는 회사원이에요.', '"Soal saya, saya karyawan."'],
          ['Membandingkan', '커피는 좋아해요. 차는 싫어해요.', '"Kopi sih suka, teh tidak."'],
          [
            'Menyebut hal yang sudah diketahui',
            '그 영화는 재미있어요.',
            '"Film itu — yang tadi kita bicarakan — bagus."',
          ],
        ],
      },
      examples: [
        {
          ko: '한국어는 어려워요.',
          id: 'Bahasa Korea itu sulit.',
          highlight: ['는'],
          note: 'Mengangkat "bahasa Korea" sebagai topik yang hendak dikomentari.',
        },
        {
          ko: '주말에는 집에서 쉬어요.',
          id: 'Kalau akhir pekan, saya istirahat di rumah.',
          highlight: ['에는'],
          note: 'Membandingkan akhir pekan dengan hari kerja.',
        },
      ],
    },
    {
      title: '은/는 mengusir sebagian partikel, tapi tidak semuanya',
      form: '이/가 dan 을/를 dilepas · 에, 에서, 한테 tetap',
      body:
        'Saat 은/는 masuk, penanda subjek 이/가 dan penanda objek 을/를 menghilang. Tetapi partikel tempat dan waktu tetap bertahan dan 은/는 ditempelkan di belakangnya.',
      table: {
        columns: ['Dasar', '+ 은/는', 'Catatan'],
        rows: [
          ['저 + 가', '저는', '이/가 dilepas'],
          ['커피 + 를', '커피는', '을/를 dilepas'],
          ['주말 + 에', '주말에는', '에 tetap'],
          ['집 + 에서', '집에서는', '에서 tetap'],
          ['친구 + 한테', '친구한테는', '한테 tetap'],
        ],
      },
      mistakes: [
        {
          wrong: '커피를는 좋아해요.',
          right: '커피는 좋아해요.',
          why: '을/를 dan 은/는 tidak pernah muncul bersamaan pada satu kata.',
        },
        {
          wrong: '주말는 집에서 쉬어요.',
          right: '주말에는 집에서 쉬어요.',
          why: 'Dua kesalahan sekaligus: 주말 punya 받침 jadi bentuknya 은, dan keterangan waktu tetap butuh 에.',
        },
      ],
    },
    {
      title: 'Kapan 은/는 justru salah',
      body:
        'Jangan memakai 은/는 untuk informasi yang benar-benar baru atau untuk menjawab pertanyaan "siapa/apa". Dalam dua situasi itu, bahasa Korea menuntut 이/가.',
      examples: [
        {
          ko: 'A: 누가 왔어요?  B: 민호 씨가 왔어요.',
          id: 'A: Siapa yang datang?  B: Minho yang datang.',
          note: '민호 씨는 왔어요 akan terdengar seperti "kalau Minho sih, dia datang" — bukan jawaban langsung.',
        },
        {
          ko: '어, 비가 와요!',
          id: 'Eh, hujan!',
          note: 'Sesuatu yang baru terjadi di depan mata → 이/가, bukan 은/는.',
        },
      ],
      more:
        'Ada juga aturan yang baru terasa nanti: di dalam anak kalimat (misalnya klausa penerang kata benda atau klausa alasan), subjeknya memakai 이/가, bukan 은/는. Contohnya 비가 와서 집에 있어요 ("karena hujan, saya di rumah") — bukan 비는 와서. Untuk sekarang, cukup ingat bahwa 은/는 bekerja pada tataran kalimat utuh, bukan di dalam potongan kalimat.',
    },
  ],

  dialogue: {
    title: 'Membandingkan rencana akhir pekan',
    situation: 'Dua rekan kerja mengobrol di hari Jumat sore.',
    lines: [
      { speaker: '민호', ko: '수진 씨, 주말에 뭐 해요?', id: 'Sujin, akhir pekan mau apa?' },
      {
        speaker: '수진',
        ko: '토요일에는 집에서 쉬어요. 일요일에는 친구를 만나요.',
        id: 'Sabtu saya istirahat di rumah. Minggu bertemu teman.',
        note: '에 untuk waktu, lalu 는 karena dua hari sedang dibandingkan.',
      },
      {
        speaker: '민호',
        ko: '저는 주말에도 일해요.',
        id: 'Kalau saya, akhir pekan pun kerja.',
        note: '저는 mengangkat diri sebagai pembanding; 주말에도 memakai 에 + 도 ("bahkan di akhir pekan").',
      },
      { speaker: '수진', ko: '정말요? 많이 바빠요?', id: 'Benarkah? Sangat sibuk, ya?' },
      {
        speaker: '민호',
        ko: '네, 요즘은 좀 바빠요.',
        id: 'Ya, akhir-akhir ini agak sibuk.',
        note: '요즘은 — 는 membandingkan "akhir-akhir ini" dengan masa sebelumnya.',
      },
    ],
    politeness:
      'Seluruh percakapan memakai 해요체. Perhatikan bahwa 저는 hanya muncul sekali, tepat ketika Minho ingin membandingkan dirinya dengan Sujin. Di kalimat lain subjeknya dibuang karena sudah jelas.',
  },

  passage: {
    title: '우리 가족',
    intro: 'Memperkenalkan beberapa orang berturut-turut — tempat 은/는 paling sering muncul.',
    sentences: [
      { ko: '우리 가족은 네 명이에요.', id: 'Keluarga kami ada empat orang.' },
      { ko: '아버지는 선생님이에요.', id: 'Ayah saya guru.' },
      { ko: '어머니는 회사원이에요.', id: 'Ibu saya karyawan.' },
      { ko: '언니는 의사예요.', id: 'Kakak perempuan saya dokter.' },
      { ko: '저는 학생이 아니에요. 저도 회사원이에요.', id: 'Saya bukan pelajar. Saya juga karyawan.' },
    ],
    vocabInContext: [
      { ko: '가족', id: 'keluarga' },
      { ko: '명', id: 'orang (penghitung untuk manusia)' },
      { ko: '아버지', id: 'ayah' },
      { ko: '어머니', id: 'ibu' },
    ],
    analysis: [
      'Setiap anggota keluarga diangkat satu per satu dengan 은/는. Inilah pola khas saat memperkenalkan beberapa hal berturut-turut: masing-masing menjadi topik sesaat, lalu dikomentari.',
      '우리 가족은 memakai 은 (받침 ㄱ pada 족), sedangkan 어머니는 memakai 는 (berakhir vokal).',
      'Kalimat terakhir memakai 도 yang MENGGANTIKAN 는, karena saya masuk ke kategori yang sama dengan ibu. Kalau tetap memakai 저는, nuansa "juga" itu hilang.',
      '우리 ("kami") lazim dipakai orang Korea untuk menyebut keluarga dan milik bersama, bahkan saat berbicara seorang diri: 우리 가족, 우리 집, 우리 회사.',
    ],
  },

  exercises: [
    {
      id: 'm2l1-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu memperkenalkan diri di hari pertama kerja.',
      sentence: '저___ 비오예요.',
      translation: 'Saya Vio.',
      options: ['는', '가', '를', '에'],
      answer: '는',
      explain:
        'Perkenalan diri menetapkan dirimu sebagai topik pembicaraan — tugas nomor satu dari 은/는. 저 berakhir vokal, jadi bentuknya 는.',
      whyNot: {
        가: 'Bentuk subjek dari 저 adalah 제가, bukan 저가. Lagi pula 제가 비오예요 terdengar seperti menegaskan "sayalah Vio", bukan perkenalan biasa.',
        를: '를 menandai objek, yaitu sasaran sebuah tindakan.',
        에: '에 menandai tempat atau waktu, bukan orang.',
      },
      tags: ['은/는'],
    },
    {
      id: 'm2l1-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context:
        'Kamu sedang membandingkan dua minuman: kopi kamu suka, teh tidak.',
      sentence: '커피___ 좋아해요. 차는 싫어해요.',
      translation: 'Kopi saya suka. Teh tidak suka.',
      options: ['는', '를', '가', '도'],
      answer: '는',
      explain:
        'Meskipun 커피 adalah objek dari 좋아하다, partikel objek 를 diganti 는 karena dua hal sedang diperhadapkan. Inilah fungsi kontras dari 은/는.',
      whyNot: {
        를: '커피를 좋아해요 benar secara tata bahasa, tetapi menjadi pernyataan netral — nuansa membandingkan dengan teh hilang.',
        가: '좋아하다 adalah kata kerja, jadi 커피 adalah objeknya, bukan subjek. Dan untuk membandingkan, yang dipakai adalah 는.',
        도: '도 berarti "juga", yang justru menyiratkan teh pun disukai — kebalikan dari maksud kalimat.',
      },
      tags: ['은/는'],
    },
    {
      id: 'm2l1-e3',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat (boleh lebih dari satu partikel).',
      context: 'Kamu membandingkan akhir pekan dengan hari kerja yang sibuk.',
      sentence: '주말___ 집에서 쉬어요.',
      translation: 'Kalau akhir pekan, saya istirahat di rumah.',
      answers: ['에는'],
      explain:
        'Dua partikel dipakai bersama: 에 untuk menandai waktu, lalu 는 untuk membandingkan akhir pekan dengan hari lain. Partikel tempat dan waktu tidak diusir oleh 은/는 — mereka bertumpuk.',
      hint: 'Keterangan waktu butuh satu partikel, dan nuansa membandingkan butuh satu lagi.',
      alternatives: [
        { form: '주말에', nuance: 'Benar juga, tetapi netral — tanpa nuansa membandingkan.' },
      ],
      tags: ['은/는', '에'],
    },
    {
      id: 'm2l1-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap kata dengan bentuk 은/는 yang benar beserta alasannya.',
      pairs: [
        { left: '학생', right: '학생은 — ada 받침' },
        { left: '친구', right: '친구는 — tanpa 받침' },
        { left: '선생님', right: '선생님은 — ada 받침' },
        { left: '어머니', right: '어머니는 — tanpa 받침' },
        { left: '주말', right: '주말은 — ada 받침' },
      ],
      explain:
        'Satu-satunya pertanyaan yang perlu kamu ajukan adalah: apakah suku kata terakhir punya konsonan penutup? Kalau ya, pakai 은; kalau tidak, pakai 는.',
      tags: ['은/는'],
    },
    {
      id: 'm2l1-e5',
      kind: 'build',
      prompt: 'Susun dua kalimat yang saling membandingkan.',
      translation: 'Kakak saya dokter. Kalau saya, karyawan.',
      tiles: ['언니는', '의사예요.', '저는', '회사원이에요'],
      distractors: ['언니가', '저도'],
      answers: ['언니는 의사예요. 저는 회사원이에요'],
      explain:
        'Dua orang diperhadapkan, jadi keduanya memakai 는. Kalau memakai 언니가, kalimatnya berubah menjadi jawaban atas "siapa yang dokter?" dan nuansa membandingkannya hilang.',
      parts: [
        { part: '언니는', role: 'pembanding pertama' },
        { part: '의사예요.', role: 'identitasnya (의사 berakhir vokal → 예요)' },
        { part: '저는', role: 'pembanding kedua' },
        { part: '회사원이에요', role: 'identitas saya (받침 ㄴ → 이에요)' },
      ],
      tags: ['은/는'],
    },
    {
      id: 'm2l1-e6',
      kind: 'correct',
      prompt:
        'Ini jawaban atas pertanyaan 누가 왔어요? ("Siapa yang datang?"). Partikelnya kurang tepat — perbaiki.',
      sentence: '민호 씨는 왔어요.',
      translation: 'Minho yang datang.',
      answers: ['민호 씨가 왔어요'],
      explain:
        'Menjawab pertanyaan "siapa" berarti menunjuk pelakunya, dan itu selalu memakai 이/가. Dengan 는, kalimatnya terdengar seperti "kalau Minho sih dia datang (yang lain tidak)" — sebuah perbandingan, bukan jawaban.',
      tags: ['은/는', '이/가'],
    },
    {
      id: 'm2l1-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Bahasa Korea itu sulit. Tapi menyenangkan.',
      answers: ['한국어는 어려워요. 하지만 재미있어요', '한국어는 어려워요. 그렇지만 재미있어요'],
      explain:
        '한국어 diangkat sebagai topik dengan 는 karena kalimat ini memberi komentar tentangnya. 어렵다 adalah kata sifat ㅂ tidak beraturan: 어려워요.',
      alternatives: [
        { form: '한국어는 어렵지만 재미있어요.', nuance: 'Digabung jadi satu kalimat dengan -지만 ("meskipun"), terdengar lebih ringkas.' },
      ],
      tags: ['은/는'],
    },
  ],

  quiz: [
    {
      id: 'm2l1-q1',
      kind: 'mc',
      prompt:
        'Kalimat 커피는 좋아해요 (berdiri sendiri, tanpa kalimat lanjutan) paling tepat dipahami sebagai…',
      options: [
        '"Kopi sih suka — tapi mungkin ada yang lain yang tidak."',
        '"Sayalah yang menyukai kopi."',
        '"Saya suka kopi juga."',
        '"Saya hanya suka kopi."',
      ],
      answerIndex: 0,
      explain:
        '는 menggantikan partikel objek 를 di sini, dan itu selalu membawa nuansa membandingkan. Meskipun kalimat pembandingnya tidak diucapkan, pendengar Korea tetap menangkap bahwa ada sesuatu yang tersirat.',
      whyNot: {
        '"Sayalah yang menyukai kopi."': 'Itu memerlukan 제가 좋아해요, dengan penekanan pada pelakunya.',
        '"Saya suka kopi juga."': 'Itu memerlukan 커피도 좋아해요.',
        '"Saya hanya suka kopi."': 'Itu memerlukan 커피만 좋아해요.',
      },
      tags: ['은/는'],
    },
    {
      id: 'm2l1-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan bentuk 은/는 yang benar.',
      sentence: '선생님___ 한국 사람이에요.',
      translation: 'Guru saya orang Korea.',
      answers: ['은'],
      explain:
        '선생님 berakhir dengan 받침 ㅁ, jadi bentuknya 은. Bandingkan: 어머니는 (vokal) dan 주말은 (받침 ㄹ).',
      tags: ['은/는'],
    },
    {
      id: 'm2l1-q3',
      kind: 'correct',
      prompt: 'Perbaiki susunan partikel pada kalimat ini.',
      sentence: '주말는 집에서 쉬어요.',
      translation: 'Kalau akhir pekan, saya istirahat di rumah.',
      answers: ['주말에는 집에서 쉬어요'],
      explain:
        'Dua hal yang perlu diperbaiki. Pertama, 주말 punya 받침 jadi bentuknya 은, bukan 는. Kedua — dan ini yang lebih penting — keterangan waktu tetap membutuhkan 에, lalu 는 ditempelkan di belakangnya: 주말에는.',
      tags: ['은/는', '에'],
    },
  ],

  summary: {
    points: [
      '은 dipakai setelah 받침, 는 setelah vokal.',
      '은/는 menetapkan topik, membandingkan, atau menunjuk hal yang sudah diketahui — bukan menandai subjek.',
      'Saat 은/는 masuk, partikel 이/가 dan 을/를 dilepas, tetapi 에, 에서, dan 한테 tetap bertahan: 주말에는, 집에서는.',
      'Nuansa membandingkan tetap terasa meskipun kalimat pembandingnya tidak diucapkan.',
      'Untuk informasi baru dan jawaban atas "siapa/apa", pakai 이/가 — bukan 은/는.',
    ],
    pitfalls: [
      {
        wrong: '커피를는 좋아해요.',
        right: '커피는 좋아해요.',
        why: '을/를 dan 은/는 tidak pernah muncul bersamaan.',
      },
      {
        wrong: '주말는 쉬어요.',
        right: '주말에는 쉬어요.',
        why: '주말 punya 받침 (→ 은), dan keterangan waktu tetap butuh 에.',
      },
      {
        wrong: '(menjawab 누가 왔어요?) 민호 씨는 왔어요.',
        right: '민호 씨가 왔어요.',
        why: 'Menjawab "siapa" selalu memakai 이/가.',
      },
    ],
  },
}
