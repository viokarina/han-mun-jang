import type { Lesson } from '../../types/curriculum'

export const m3l3: Lesson = {
  id: 'm3-l3',
  moduleId: 'm3',
  number: '3.3',
  title: 'Tidak, tidak bisa, dan ingin',
  subtitle: '안 · -지 않다 · 못 · -고 싶다 · -(으)ㄹ 수 있다/없다',
  objective:
    'Setelah pelajaran ini kamu bisa menyangkal sebuah kalimat dengan dua cara, membedakan "tidak mau" dari "tidak bisa", serta menyatakan keinginan dan kemampuan.',
  focus: ['안 / -지 않다', '못', '-고 싶다', '-(으)ㄹ 수 있다'],
  estimatedMinutes: 18,

  coreExamples: [
    {
      ko: '저는 커피를 안 마셔요.',
      id: 'Saya tidak minum kopi.',
      highlight: ['안'],
      highlightKind: 'ending',
    },
    {
      ko: '오늘은 바쁘지 않아요.',
      id: 'Hari ini saya tidak sibuk.',
      highlight: ['지 않아요'],
      highlightKind: 'ending',
    },
    {
      ko: '시간이 없어서 못 갔어요.',
      id: 'Karena tidak ada waktu, saya tidak bisa pergi.',
      highlight: ['못'],
      highlightKind: 'ending',
    },
    {
      ko: '한국에 가고 싶어요.',
      id: 'Saya ingin pergi ke Korea.',
      highlight: ['고 싶어요'],
      highlightKind: 'ending',
    },
    {
      ko: '저는 한국어를 조금 할 수 있어요.',
      id: 'Saya bisa berbahasa Korea sedikit.',
      highlight: ['할 수 있어요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 커피를 안 마셔요.',
        id: 'Saya tidak minum kopi.',
        highlight: ['안'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        { unit: '커피를', formula: '커피 + 를', meaning: 'Kopi — objek' },
        { unit: '안', formula: '—', meaning: 'Penyangkalan; berdiri TEPAT di depan kata kerja' },
        { unit: '마셔요', formula: '마시다 → 마셔요', meaning: 'Minum, 해요체' },
      ],
      why:
        'Ada dua cara menyangkal dalam bahasa Korea, dan keduanya berarti sama. 안 adalah cara pendek: cukup letakkan di depan kata kerja atau kata sifat, dengan spasi. 〜지 않다 adalah cara panjang yang ditempelkan pada batang kata. Bentuk pendek lebih umum dalam percakapan; bentuk panjang terasa sedikit lebih tegas dan lebih sering muncul dalam tulisan.',
      swaps: [
        {
          alt: '저는 커피를 마시지 않아요.',
          effect:
            'Artinya persis sama, memakai bentuk panjang. Sedikit lebih formal dan terdengar lebih tegas.',
        },
        {
          alt: '저는 커피를 못 마셔요.',
          effect:
            'Artinya berubah menjadi "saya TIDAK BISA minum kopi" — misalnya karena alergi atau sakit lambung. Bukan soal pilihan, melainkan ketidakmampuan.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 한국어를 조금 할 수 있어요.',
        id: 'Saya bisa berbahasa Korea sedikit.',
        highlight: ['할 수 있어요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        { unit: '한국어를', formula: '한국어 + 를', meaning: 'Bahasa Korea — objek' },
        { unit: '조금', formula: '—', meaning: 'Sedikit' },
        {
          unit: '할 수 있어요',
          formula: '하다 → 하 + ㄹ 수 있어요',
          meaning: 'Bisa melakukan; 수 adalah kata benda yang berarti "kemungkinan, cara"',
        },
      ],
      why:
        'Bentuk ini sebenarnya kalimat "ada/tidak ada" yang kita pelajari di Modul 2. 수 adalah kata benda yang berarti "kemungkinan", jadi 할 수 있어요 secara harfiah berarti "kemungkinan melakukannya itu ada". Karena itu ia memakai 있다/없다 — dan karena itu pula ketiga kata ditulis terpisah: 할 · 수 · 있어요.',
      swaps: [
        {
          alt: '저는 한국어를 못 해요.',
          effect:
            'Lebih pendek dan sangat umum dalam percakapan: "saya tidak bisa berbahasa Korea". 못 하다 dan -(으)ㄹ 수 없다 sering saling menggantikan.',
        },
        {
          alt: '저는 한국어를 할 수 없어요.',
          effect:
            'Bentuk panjang untuk "tidak bisa". Terdengar sedikit lebih formal daripada 못 해요.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '안', id: 'tidak (penyangkalan)', pos: 'kata keterangan', note: 'Ditulis terpisah di depan kata kerja.' },
    { ko: '못', id: 'tidak bisa', pos: 'kata keterangan', note: 'Menyatakan ketidakmampuan.' },
    { ko: '수영하다', id: 'berenang', pos: 'kata kerja', note: '→ 수영해요' },
    { ko: '운전하다', id: 'menyetir', pos: 'kata kerja', note: '→ 운전해요' },
    { ko: '매운 것', id: 'yang pedas', pos: 'kata benda' },
    { ko: '배우다', id: 'belajar, mempelajari', pos: 'kata kerja', note: '→ 배워요' },
    { ko: '여행', id: 'perjalanan, wisata', pos: 'kata benda' },
    { ko: '꼭', id: 'pasti, sungguh-sungguh', pos: 'kata keterangan' },
    { ko: '아직', id: 'belum, masih', pos: 'kata keterangan' },
    { ko: '잘', id: 'dengan baik, pandai', pos: 'kata keterangan' },
  ],

  grammar: [
    {
      title: 'Dua cara menyangkal: 안 dan -지 않다',
      form: '안 + kata kerja · batang + 지 않다',
      body:
        'Keduanya berarti sama. Bentuk pendek 안 lebih sering dipakai dalam percakapan; bentuk panjang -지 않다 terasa lebih tegas dan lebih lazim dalam tulisan.',
      table: {
        columns: ['Dasar', 'Dengan 안', 'Dengan -지 않다', 'Arti'],
        rows: [
          ['가요', '안 가요', '가지 않아요', 'tidak pergi'],
          ['먹어요', '안 먹어요', '먹지 않아요', 'tidak makan'],
          ['바빠요', '안 바빠요', '바쁘지 않아요', 'tidak sibuk'],
          ['좋아요', '안 좋아요', '좋지 않아요', 'tidak bagus'],
        ],
      },
      examples: [
        { ko: '오늘은 안 바빠요.', id: 'Hari ini saya tidak sibuk.' },
        { ko: '오늘은 바쁘지 않아요.', id: 'Hari ini saya tidak sibuk.', note: 'Artinya sama, nadanya sedikit lebih tegas.' },
      ],
      mistakes: [
        {
          wrong: '저는 커피를 마셔 안요.',
          right: '저는 커피를 안 마셔요.',
          why: '안 selalu berdiri di DEPAN kata kerja, tidak pernah di tengah atau belakang.',
        },
      ],
      more:
        'Untuk kata kerja berbentuk "kata benda + 하다", 안 diselipkan di antara keduanya — bukan di depan seluruh kata: 공부 안 해요, bukan 안 공부해요. Pola ini berlaku untuk 일하다 (일 안 해요), 운동하다 (운동 안 해요), dan seterusnya. Tetapi untuk kata kerja 하다 yang tidak bisa dipisah seperti 좋아하다, bentuknya tetap 안 좋아해요.',
    },
    {
      title: '못 — tidak bisa',
      form: '못 + kata kerja · batang + 지 못하다',
      body:
        'Perbedaan 안 dan 못 adalah perbedaan antara PILIHAN dan KEMAMPUAN. 안 berarti "tidak melakukannya" (karena tidak mau atau tidak perlu); 못 berarti "tidak bisa melakukannya" (ada yang menghalangi).',
      table: {
        caption: '못 hanya dipakai dengan kata KERJA, tidak pernah dengan kata sifat.',
        columns: ['Kalimat', 'Arti', 'Nuansa'],
        rows: [
          ['안 갔어요', 'Saya tidak pergi', 'Pilihan saya sendiri'],
          ['못 갔어요', 'Saya tidak bisa pergi', 'Ada halangan'],
          ['안 먹어요', 'Saya tidak makan itu', 'Tidak suka / tidak mau'],
          ['못 먹어요', 'Saya tidak bisa makan itu', 'Alergi, terlalu pedas, dll.'],
        ],
      },
      examples: [
        { ko: '어제 시간이 없어서 못 갔어요.', id: 'Kemarin karena tidak ada waktu, saya tidak bisa pergi.' },
        { ko: '저는 매운 것을 못 먹어요.', id: 'Saya tidak bisa makan yang pedas.' },
      ],
      mistakes: [
        {
          wrong: '오늘은 못 바빠요.',
          right: '오늘은 안 바빠요.',
          why: '못 tidak pernah dipakai dengan kata sifat — "tidak bisa sibuk" tidak masuk akal.',
        },
      ],
      more:
        'Seperti 안, kata 못 juga diselipkan di tengah untuk kata kerja "kata benda + 하다": 운동 못 해요, 일 못 해요. Perhatikan juga pelafalannya — 못 해요 dibaca [모태요] dan 못 먹어요 dibaca [몬머거요].',
    },
    {
      title: '-고 싶다 — ingin',
      form: 'batang + 고 싶다',
      body:
        'Ditempelkan langsung pada batang kata, tanpa perlu memperhatikan 받침. Hanya berlaku untuk kata KERJA — kamu tidak bisa berkata "ingin bagus" dengan pola ini.',
      table: {
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가', '가고 싶어요', 'ingin pergi'],
          ['먹다', '먹', '먹고 싶어요', 'ingin makan'],
          ['배우다', '배우', '배우고 싶어요', 'ingin belajar'],
          ['쉬다', '쉬', '쉬고 싶어요', 'ingin istirahat'],
        ],
      },
      examples: [
        { ko: '한국에 가고 싶어요.', id: 'Saya ingin pergi ke Korea.' },
        { ko: '오늘은 집에서 쉬고 싶어요.', id: 'Hari ini saya ingin istirahat di rumah.' },
        { ko: '뭐 먹고 싶어요?', id: 'Mau makan apa?' },
      ],
      more:
        'Satu hal yang perlu diketahui: -고 싶다 hanya dipakai untuk keinginan DIRI SENDIRI atau untuk bertanya kepada lawan bicara. Untuk menyebut keinginan orang ketiga, bahasa Korea memakai -고 싶어하다: 민호 씨는 한국에 가고 싶어해요. Alasannya masuk akal — kamu tidak bisa benar-benar tahu isi hati orang lain, jadi bahasanya menandai bahwa itu hanya pengamatan dari luar.',
    },
    {
      title: '-(으)ㄹ 수 있다 / 없다 — bisa & tidak bisa',
      form: 'batang + ㄹ 수 있다 (vokal) · 을 수 있다 (konsonan)',
      body:
        'Pola pembentukannya sama persis dengan -(으)ㄹ 거예요. Dan karena 수 adalah kata benda, ketiga bagiannya ditulis terpisah.',
      table: {
        columns: ['Bentuk kamus', 'Bisa', 'Tidak bisa', 'Arti'],
        rows: [
          ['하다', '할 수 있어요', '할 수 없어요', 'bisa melakukan'],
          ['가다', '갈 수 있어요', '갈 수 없어요', 'bisa pergi'],
          ['먹다', '먹을 수 있어요', '먹을 수 없어요', 'bisa makan'],
          ['읽다', '읽을 수 있어요', '읽을 수 없어요', 'bisa membaca'],
          ['만들다', '만들 수 있어요', '만들 수 없어요', 'bisa membuat'],
        ],
      },
      examples: [
        { ko: '저는 한글을 읽을 수 있어요.', id: 'Saya bisa membaca Hangul.' },
        { ko: '내일은 올 수 없어요.', id: 'Besok saya tidak bisa datang.' },
      ],
      mistakes: [
        {
          wrong: '할수있어요',
          right: '할 수 있어요',
          why: '수 adalah kata benda, jadi ditulis terpisah dari kedua sisinya.',
        },
      ],
      more:
        '-(으)ㄹ 수 없다 dan 못 hampir selalu bisa saling menggantikan. Perbedaannya halus: 못 cenderung menunjuk halangan dari luar atau keterbatasan diri ("saya tidak mampu"), sedangkan -(으)ㄹ 수 없다 terdengar lebih netral dan sedikit formal. Dalam percakapan sehari-hari, 못 jauh lebih sering terdengar.',
    },
  ],

  dialogue: {
    title: 'Menolak ajakan',
    situation: 'Sujin mengajak Vio makan malam, tetapi Vio punya halangan.',
    lines: [
      { speaker: '수진', ko: '비오 씨, 오늘 저녁에 같이 밥 먹어요.', id: 'Vio, malam ini makan bareng, yuk.' },
      {
        speaker: '비오',
        ko: '아, 미안해요. 오늘은 못 가요.',
        id: 'Ah, maaf. Hari ini saya tidak bisa.',
        note: '못 — ada halangan, bukan karena tidak mau.',
      },
      { speaker: '수진', ko: '왜요? 바빠요?', id: 'Kenapa? Sibuk?' },
      {
        speaker: '비오',
        ko: '네, 일이 많아서 늦게 끝나요. 정말 가고 싶어요.',
        id: 'Ya, karena pekerjaannya banyak, selesainya telat. Saya benar-benar ingin ikut.',
        note: '가고 싶어요 — menegaskan bahwa ia MAU, hanya tidak bisa.',
      },
      {
        speaker: '수진',
        ko: '괜찮아요. 그럼 내일은 시간 있어요?',
        id: 'Tidak apa-apa. Kalau begitu besok ada waktu?',
      },
      {
        speaker: '비오',
        ko: '내일은 괜찮아요. 내일 꼭 갈 수 있어요!',
        id: 'Besok tidak masalah. Besok saya pasti bisa ikut!',
        note: '갈 수 있어요 — menegaskan kemampuan, terdengar lebih meyakinkan daripada 가요 saja.',
      },
    ],
    politeness:
      'Menolak ajakan dalam bahasa Korea biasanya dilakukan dalam tiga langkah: minta maaf (미안해요), sebutkan bahwa kamu tidak BISA (못), lalu tegaskan bahwa kamu sebenarnya mau (가고 싶어요). Menolak dengan 안 가요 saja bisa terdengar dingin.',
  },

  passage: {
    title: '제가 하고 싶은 것',
    intro: 'Keinginan dan keterbatasan — paragraf pendek yang memakai kelima pola pelajaran ini.',
    sentences: [
      { ko: '저는 한국에 가고 싶어요.', id: 'Saya ingin pergi ke Korea.' },
      { ko: '하지만 아직 못 갔어요.', id: 'Tapi sampai sekarang belum bisa pergi.' },
      { ko: '시간이 없어서 자주 여행하지 않아요.', id: 'Karena tidak ada waktu, saya tidak sering bepergian.' },
      { ko: '그래서 요즘 한국어를 공부해요.', id: 'Karena itu akhir-akhir ini saya belajar bahasa Korea.' },
      { ko: '지금은 한글을 읽을 수 있어요.', id: 'Sekarang saya sudah bisa membaca Hangul.' },
      { ko: '하지만 아직 빨리 말할 수 없어요.', id: 'Tapi saya belum bisa bicara dengan cepat.' },
      { ko: '내년에는 꼭 서울에 갈 거예요.', id: 'Tahun depan saya pasti akan pergi ke Seoul.' },
    ],
    vocabInContext: [
      { ko: '자주', id: 'sering' },
      { ko: '빨리', id: 'dengan cepat' },
      { ko: '말하다', id: 'berbicara' },
      { ko: '내년', id: 'tahun depan' },
    ],
    analysis: [
      '못 갔어요 — ketidakmampuan dalam bentuk lampau. 못 tetap berdiri di depan, dan kata kerjanya yang berubah ke bentuk lampau.',
      '여행하지 않아요 — bentuk panjang penyangkalan. Perhatikan bahwa -지 않다 ditempel pada batang 여행하, bukan pada 여행해요.',
      '읽을 수 있어요 — batang 읽 berakhir konsonan, jadi memakai 을 수 있어요.',
      '말할 수 없어요 — batang 말하 berakhir vokal, jadi ㄹ ditempelkan menjadi 말할.',
      '아직 ("belum") sering berpasangan dengan 못 dan 〜ㄹ 수 없다 untuk menyatakan sesuatu yang masih dalam proses.',
      'Kalimat terakhir memakai 갈 거예요 — pola rencana dari Pelajaran 3.2, yang bentuknya sangat mirip dengan 갈 수 있어요.',
    ],
  },

  exercises: [
    {
      id: 'm3l3-e1',
      kind: 'particle',
      prompt: 'Pilih bentuk penyangkalan yang tepat.',
      context: 'Kamu tidak minum kopi karena memang tidak suka — ini pilihanmu sendiri.',
      sentence: '저는 커피를 ___ 마셔요.',
      translation: 'Saya tidak minum kopi.',
      options: ['안', '못', '아니', '없'],
      answer: '안',
      explain:
        '안 menyatakan penyangkalan biasa — tidak melakukannya karena tidak mau atau tidak perlu. Ia berdiri tepat di depan kata kerja, ditulis dengan spasi.',
      whyNot: {
        못: '못 berarti "tidak bisa" — ada halangan. Kalau kamu memang tidak suka, 안 yang tepat.',
        아니: '아니다 dipakai untuk menyangkal identitas kata benda, bukan tindakan.',
        없: '없다 berarti "tidak ada", bukan penyangkalan kata kerja.',
      },
      tags: ['안 / -지 않다'],
    },
    {
      id: 'm3l3-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Kamu alergi makanan pedas, jadi memakannya di luar kemampuanmu.',
      sentence: '저는 매운 것을 ___ 먹어요.',
      translation: 'Saya tidak bisa makan yang pedas.',
      options: ['못', '안', '아니', '지 않'],
      answer: '못',
      explain:
        '못 menyatakan ketidakmampuan — ada sesuatu yang menghalangi. Alergi adalah halangan nyata, bukan pilihan.',
      whyNot: {
        안: '안 먹어요 berarti "saya tidak makan itu" — terdengar seperti pilihan pribadi, bukan karena tidak mampu.',
        아니: '아니다 untuk menyangkal kata benda.',
        '지 않': '-지 않다 ditempel pada batang kata di belakang, bukan diletakkan di depan.',
      },
      tags: ['못'],
    },
    {
      id: 'm3l3-e3',
      kind: 'fill',
      prompt: 'Ubah ke bentuk panjang penyangkalan dengan -지 않다.',
      sentence: '오늘은 ___. (바쁘다)',
      translation: 'Hari ini saya tidak sibuk.',
      answers: ['바쁘지 않아요'],
      explain:
        '-지 않다 ditempel pada BATANG kata (바쁘), bukan pada bentuk 해요체. Lalu 않다 dikonjugasi menjadi 않아요.',
      hint: 'Batang 바쁘다 adalah 바쁘. Tempelkan 지 않다 di situ.',
      alternatives: [
        { form: '안 바빠요', nuance: 'Bentuk pendek — artinya sama, lebih lazim dalam percakapan.' },
      ],
      tags: ['안 / -지 않다'],
    },
    {
      id: 'm3l3-e4',
      kind: 'fill',
      prompt: 'Ubah ke bentuk keinginan dengan -고 싶다.',
      sentence: '오늘은 집에서 ___. (쉬다)',
      translation: 'Hari ini saya ingin istirahat di rumah.',
      answers: ['쉬고 싶어요'],
      explain:
        '-고 싶다 ditempelkan langsung pada batang (쉬), tanpa perlu memperhatikan 받침. Lalu 싶다 dikonjugasi menjadi 싶어요.',
      tags: ['-고 싶다'],
    },
    {
      id: 'm3l3-e5',
      kind: 'match',
      prompt: 'Pasangkan setiap kalimat dengan maknanya.',
      pairs: [
        { left: '안 갔어요', right: 'tidak pergi — pilihan sendiri' },
        { left: '못 갔어요', right: 'tidak bisa pergi — ada halangan' },
        { left: '가고 싶어요', right: 'ingin pergi' },
        { left: '갈 수 있어요', right: 'bisa pergi' },
        { left: '갈 거예요', right: 'akan pergi' },
      ],
      explain:
        'Lima pola yang bentuknya mirip tetapi maknanya berbeda tajam. Perhatikan betapa dekatnya 갈 수 있어요 dan 갈 거예요 — keduanya dibentuk dari batang + (으)ㄹ.',
      tags: ['못', '-고 싶다', '-(으)ㄹ 수 있다'],
    },
    {
      id: 'm3l3-e6',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Sekarang saya sudah bisa membaca Hangul.',
      tiles: ['지금은', '한글을', '읽을 수', '있어요'],
      distractors: ['읽 수', '읽을 거예요'],
      answers: ['지금은 한글을 읽을 수 있어요'],
      explain:
        'Batang 읽 berakhir konsonan, jadi memakai 을 수 있어요. Ketiga bagiannya — 읽을 · 수 · 있어요 — ditulis terpisah karena 수 adalah kata benda.',
      parts: [
        { part: '지금은', role: 'keterangan waktu + 은 (membandingkan dengan dulu)' },
        { part: '한글을', role: 'objek yang dibaca' },
        { part: '읽을 수', role: 'batang 읽 + 을 수 ("kemungkinan membaca")' },
        { part: '있어요', role: '있다 — "ada", menutup kalimat' },
      ],
      tags: ['-(으)ㄹ 수 있다'],
    },
    {
      id: 'm3l3-e7',
      kind: 'correct',
      prompt: 'Perbaiki letak kata penyangkalnya.',
      sentence: '저는 오늘 안 공부해요.',
      translation: 'Hari ini saya tidak belajar.',
      answers: ['저는 오늘 공부 안 해요', '오늘 공부 안 해요'],
      explain:
        'Untuk kata kerja berbentuk "kata benda + 하다", kata 안 diselipkan DI ANTARA keduanya: 공부 안 해요 — bukan 안 공부해요. Aturan yang sama berlaku untuk 일 안 해요, 운동 안 해요, dan 전화 안 해요.',
      tags: ['안 / -지 않다'],
    },
    {
      id: 'm3l3-e8',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya ingin pergi ke Korea, tapi belum bisa pergi.',
      answers: [
        '한국에 가고 싶어요. 하지만 아직 못 갔어요',
        '저는 한국에 가고 싶어요. 하지만 아직 못 갔어요',
        '한국에 가고 싶어요. 그런데 아직 못 갔어요',
      ],
      explain:
        '가고 싶어요 menyatakan keinginan; 못 갔어요 menyatakan ketidakmampuan dalam bentuk lampau. Kata 아직 ("belum") memperjelas bahwa keadaannya masih berlangsung.',
      hint: 'Dua kalimat, disambung dengan 하지만 atau 그런데.',
      tags: ['-고 싶다', '못'],
    },
  ],

  quiz: [
    {
      id: 'm3l3-q1',
      kind: 'mc',
      prompt: 'Apa perbedaan antara 안 먹어요 dan 못 먹어요?',
      options: [
        '안 = tidak mau / tidak melakukannya; 못 = tidak mampu karena ada halangan.',
        '안 untuk bentuk sekarang; 못 untuk bentuk lampau.',
        '안 lebih sopan daripada 못.',
        'Keduanya artinya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '안 menyangkal tindakannya — biasanya karena pilihan. 못 menyangkal kemampuannya — ada sesuatu yang menghalangi. 저는 매운 것을 안 먹어요 berarti "saya tidak makan pedas (tidak suka)", sedangkan 못 먹어요 berarti "saya tidak tahan pedas".',
      whyNot: {
        '안 untuk bentuk sekarang; 못 untuk bentuk lampau.': 'Keduanya bisa dipakai di semua bentuk waktu.',
        '안 lebih sopan daripada 못.': 'Keduanya sama-sama netral dari segi kesopanan.',
        'Keduanya artinya sama persis.': 'Perbedaan ini justru inti pelajaran ini.',
      },
      tags: ['안 / -지 않다', '못'],
    },
    {
      id: 'm3l3-q2',
      kind: 'fill',
      prompt: 'Ubah 만들다 ke bentuk "bisa".',
      sentence: '저는 김치를 ___.',
      translation: 'Saya bisa membuat kimchi.',
      answers: ['만들 수 있어요'],
      explain:
        'Batang 만들다 adalah 만들, yang sudah berakhir ㄹ — jadi tidak perlu menambahkan 을. Hasilnya 만들 수 있어요, ditulis dalam tiga bagian terpisah.',
      tags: ['-(으)ㄹ 수 있다'],
    },
    {
      id: 'm3l3-q3',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '오늘은 못 바빠요.',
      translation: 'Hari ini saya tidak sibuk.',
      answers: ['오늘은 안 바빠요', '오늘은 바쁘지 않아요'],
      explain:
        '못 hanya dipakai dengan kata KERJA, karena ia menyangkal kemampuan. 바쁘다 adalah kata sifat — "tidak bisa sibuk" tidak masuk akal. Yang benar adalah 안 바빠요 atau 바쁘지 않아요.',
      tags: ['못'],
    },
  ],

  summary: {
    points: [
      '안 + kata kerja dan batang + -지 않다 artinya sama: penyangkalan biasa.',
      '못 menyatakan ketidakmampuan — ada halangan. Hanya untuk kata kerja, tidak pernah untuk kata sifat.',
      'Untuk kata kerja "kata benda + 하다", 안 dan 못 diselipkan di tengah: 공부 안 해요, 운동 못 해요.',
      '-고 싶다 ditempel langsung pada batang; hanya untuk kata kerja, dan hanya untuk diri sendiri atau pertanyaan.',
      '-(으)ㄹ 수 있다/없다 dibentuk seperti -(으)ㄹ 거예요, dan ditulis dalam tiga bagian terpisah.',
      '못 dan -(으)ㄹ 수 없다 hampir selalu bisa saling menggantikan; 못 lebih lazim dalam percakapan.',
    ],
    pitfalls: [
      {
        wrong: '안 공부해요.',
        right: '공부 안 해요.',
        why: 'Untuk kata kerja "kata benda + 하다", 안 diselipkan di tengah.',
      },
      {
        wrong: '못 바빠요.',
        right: '안 바빠요.',
        why: '못 tidak pernah dipakai dengan kata sifat.',
      },
      {
        wrong: '할수있어요',
        right: '할 수 있어요',
        why: '수 adalah kata benda, jadi ditulis terpisah di kedua sisinya.',
      },
    ],
  },
}
