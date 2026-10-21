import type { Lesson } from '../../types/curriculum'

export const m5l9: Lesson = {
  id: 'm5-l9',
  moduleId: 'm5',
  number: '5.9',
  title: 'Rumah sakit & apotek',
  subtitle: 'Menjelaskan sakitmu dan memahami aturan minum obat',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan bagian tubuh yang sakit, menjelaskan gejala, dan memahami instruksi apoteker tentang kapan obat harus diminum.',
  focus: ['부위 + 이/가 아프다', '-기 전에 / 후에', 'gejala'],
  estimatedMinutes: 17,

  coreExamples: [
    { ko: '머리가 아파요.', id: 'Kepala saya sakit.', highlight: ['가'] },
    {
      ko: '어디가 아프세요?',
      id: 'Bagian mana yang sakit?',
      highlight: ['아프세요'],
      highlightKind: 'ending',
    },
    { ko: '열이 나고 기침이 나요.', id: 'Saya demam dan batuk.', highlight: ['이', '나요'] },
    {
      ko: '이 약은 식사 후에 드세요.',
      id: 'Obat ini diminum setelah makan.',
      highlight: ['후에'],
    },
    {
      ko: '자기 전에 한 알 드세요.',
      id: 'Minum satu butir sebelum tidur.',
      highlight: ['자기 전에'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '머리가 아파요.',
        id: 'Kepala saya sakit.',
        highlight: ['가'],
      },
      rows: [
        { unit: '머리가', formula: '머리 + 가', meaning: 'Kepala — SUBJEK, bukan objek' },
        { unit: '아파요', formula: '아프다 → 아파요', meaning: 'Sakit; ㅡ luluh seperti 바쁘다 → 바빠요' },
      ],
      why:
        'Dalam bahasa Indonesia kita berkata "saya sakit kepala", sehingga kepala terasa seperti objek. Tetapi 아프다 adalah KATA SIFAT, jadi bagian tubuh berperan sebagai SUBJEK dengan 이/가 — logikanya "kepalanya terasa sakit". Inilah sebabnya 머리를 아파요 salah. Pola ini masuk kelompok yang sama dengan 시간이 없어요 dan 날씨가 좋아요 dari Pelajaran 2.2: kata sifat selalu menggambarkan keadaan subjeknya.',
      swaps: [
        {
          alt: '저는 머리가 아파요.',
          effect:
            'Topik dan subjek hadir bersama — 저는 menetapkan siapa yang dibicarakan, 머리가 menunjuk apa yang sakit. Pola "topik + subjek" dari Pelajaran 2.2.',
        },
        {
          alt: '어제부터 머리가 아팠어요.',
          effect:
            '"Kepala saya sakit sejak kemarin." Memakai 부터 (titik awal) dan bentuk lampau — ini yang akan ditanyakan dokter.',
        },
      ],
    },
    {
      sentence: {
        ko: '자기 전에 한 알 드세요.',
        id: 'Minum satu butir sebelum tidur.',
        highlight: ['자기 전에'],
      },
      rows: [
        {
          unit: '자기 전에',
          formula: '자다 → 자 + 기 전에',
          meaning: 'Sebelum tidur; -기 mengubah kata kerja jadi kata benda',
        },
        { unit: '한 알', formula: '하나 → 한 + 알', meaning: 'Satu butir; 알 memakai angka asli' },
        { unit: '드세요', formula: '드시다 + (으)세요', meaning: 'Silakan minum — bentuk hormat dari 먹다' },
      ],
      why:
        'Pola -기 전에 ("sebelum …") dibentuk dari BATANG + 기 전에. Akhiran -기 mengubah kata kerja menjadi kata benda, lalu 전에 berarti "sebelum". Untuk "sesudah", bentuk yang paling mudah justru memakai kata benda langsung: 식사 후에. Perhatikan juga 드세요 — apoteker memakai bentuk hormat dari 먹다, persis seperti pelayan restoran berkata 맛있게 드세요 di Pelajaran 5.3.',
      swaps: [
        {
          alt: '식사 전에 드세요.',
          effect: '"Minum sebelum makan." Memakai kata benda 식사, jadi tidak perlu -기.',
        },
        {
          alt: '밥 먹기 전에 드세요.',
          effect: '"Minum sebelum makan nasi." Memakai kata kerja, jadi perlu -기 전에.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '병원', id: 'rumah sakit, klinik', pos: 'kata benda' },
    { ko: '약국', id: 'apotek', pos: 'kata benda' },
    { ko: '약', id: 'obat', pos: 'kata benda' },
    { ko: '알', id: 'butir (penghitung obat)', pos: 'penghitung', note: 'Angka asli: 한 알, 두 알.' },
    {
      ko: '아프다',
      id: 'sakit',
      pos: 'kata sifat',
      note: 'ㅡ luluh: 아파요. Subjeknya memakai 이/가.',
      example: { ko: '배가 아파요.', id: 'Perut saya sakit.' },
    },
    { ko: '열', id: 'demam', pos: 'kata benda', note: '열이 나다 = demam.' },
    { ko: '기침', id: 'batuk', pos: 'kata benda', note: '기침이 나다 = batuk.' },
    { ko: '콧물', id: 'ingus', pos: 'kata benda', note: '콧물이 나다 = pilek.' },
    { ko: '처방전', id: 'resep dokter', pos: 'kata benda' },
    { ko: '감기', id: 'flu, masuk angin', pos: 'kata benda', note: '감기에 걸리다 = kena flu.' },
    {
      ko: '낫다',
      id: 'sembuh',
      pos: 'kata kerja',
      note: 'ㅅ tidak beraturan: 나아요. 빨리 나으세요 = semoga cepat sembuh.',
    },
  ],

  grammar: [
    {
      title: 'Bagian tubuh + 이/가 + 아프다',
      form: 'bagian tubuh + 이/가 + 아파요',
      body:
        'Satu pola ini sudah cukup untuk menjelaskan hampir semua keluhan. Yang perlu diingat: bagian tubuhnya adalah SUBJEK, bukan objek.',
      table: {
        columns: ['Bagian tubuh', 'Arti', 'Kalimat'],
        rows: [
          ['머리', 'kepala', '머리가 아파요'],
          ['배', 'perut', '배가 아파요'],
          ['목', 'tenggorokan, leher', '목이 아파요'],
          ['이', 'gigi', '이가 아파요'],
          ['허리', 'pinggang', '허리가 아파요'],
          ['다리', 'kaki', '다리가 아파요'],
          ['어디', 'mana (bertanya)', '어디가 아프세요?'],
        ],
      },
      examples: [
        { ko: '어제부터 목이 아파요.', id: 'Tenggorokan saya sakit sejak kemarin.' },
        { ko: '많이 아프세요?', id: 'Sakitnya parah?', note: 'Dokter memakai bentuk hormat 〜시〜.' },
      ],
      mistakes: [
        {
          wrong: '머리를 아파요.',
          right: '머리가 아파요.',
          why: '아프다 adalah kata sifat, jadi bagian tubuh berperan sebagai subjek.',
        },
        {
          wrong: '저는 아파요 머리가.',
          right: '저는 머리가 아파요.',
          why: 'Kata sifat tetap menutup kalimat, seperti semua predikat Korea.',
        },
      ],
    },
    {
      title: '나다 — gejala yang "keluar"',
      form: 'gejala + 이/가 + 나요',
      body:
        'Sebagian gejala tidak memakai 아프다, melainkan 나다 ("keluar, muncul"). Polanya sama: gejalanya menjadi subjek.',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Harfiah'],
        rows: [
          ['열이 나요', 'saya demam', 'panasnya keluar'],
          ['기침이 나요', 'saya batuk', 'batuknya keluar'],
          ['콧물이 나요', 'saya pilek', 'ingusnya keluar'],
          ['땀이 나요', 'saya berkeringat', 'keringatnya keluar'],
          ['피가 나요', 'saya berdarah', 'darahnya keluar'],
        ],
      },
      examples: [
        { ko: '열이 나고 기침이 나요.', id: 'Saya demam dan batuk.', note: '-고 menyambung dua gejala.' },
        { ko: '감기에 걸렸어요.', id: 'Saya kena flu.', note: '감기 memakai 에 — "tertangkap OLEH flu".' },
      ],
      more:
        'Perhatikan 감기에 걸리다 ("kena flu") yang memakai 에, bukan 을/를. Pola ini juga berlaku untuk penyakit lain. Dan untuk menyatakan sudah berapa lama, pakai 부터: 어제부터 열이 났어요 ("saya demam sejak kemarin") — ini pertanyaan pertama yang akan diajukan dokter.',
    },
    {
      title: '-기 전에 dan 후에',
      form: 'batang + 기 전에 · kata benda + 전에 / 후에',
      body:
        'Dipakai di mana-mana, tetapi paling sering kamu dengar di apotek. Untuk "sebelum" dengan kata kerja, akhiran -기 wajib; untuk kata benda, tidak perlu.',
      table: {
        caption: 'Untuk "sesudah" dengan kata kerja, bentuknya -(으)ㄴ 후에: 먹은 후에.',
        columns: ['Pola', 'Contoh', 'Arti'],
        rows: [
          ['kata kerja + 기 전에', '자기 전에', 'sebelum tidur'],
          ['kata kerja + 기 전에', '먹기 전에', 'sebelum makan'],
          ['kata benda + 전에', '식사 전에', 'sebelum makan'],
          ['kata benda + 후에', '식사 후에', 'setelah makan'],
          ['kata benda + 후에', '운동 후에', 'setelah olahraga'],
          ['kata kerja + (으)ㄴ 후에', '먹은 후에', 'setelah makan'],
        ],
      },
      examples: [
        { ko: '자기 전에 약을 드세요.', id: 'Minum obatnya sebelum tidur.' },
        { ko: '식사 후에 삼십 분 뒤에 드세요.', id: 'Minum tiga puluh menit setelah makan.' },
        { ko: '운동하기 전에 물을 마셔요.', id: 'Saya minum air sebelum berolahraga.' },
      ],
      mistakes: [
        {
          wrong: '자 전에 드세요.',
          right: '자기 전에 드세요.',
          why: 'Kata kerja membutuhkan akhiran -기 sebelum 전에.',
        },
      ],
    },
    {
      title: 'Membaca aturan minum obat',
      body:
        'Apoteker Korea hampir selalu menjelaskan secara lisan, dan kalimatnya mengikuti pola yang sama. Perhatikan bahwa pola frekuensi dari Pelajaran 5.5 muncul lagi di sini.',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Catatan'],
        rows: [
          ['하루에 세 번', 'tiga kali sehari', 'Pola frekuensi Pelajaran 5.5'],
          ['식사 후에', 'setelah makan', 'Paling umum'],
          ['식후 삼십 분', '30 menit sesudah makan', 'Bentuk singkat tertulis'],
          ['자기 전에', 'sebelum tidur', 'Kata kerja + 기 전에'],
          ['한 알씩', 'satu butir setiap kali', '씩 = masing-masing'],
          ['다 드세요', 'habiskan semuanya', 'Untuk antibiotik'],
        ],
      },
      examples: [
        {
          ko: '하루에 세 번, 식사 후에 한 알씩 드세요.',
          id: 'Tiga kali sehari, satu butir setelah makan.',
          note: 'Kalimat lengkap yang akan kamu dengar di apotek.',
        },
        { ko: '빨리 나으세요.', id: 'Semoga cepat sembuh.', note: 'Dari 낫다, kata ㅅ tidak beraturan.' },
      ],
      more:
        'Ucapan perpisahan di apotek atau rumah sakit adalah 빨리 나으세요 ("semoga cepat sembuh"). Kata 낫다 adalah kata ㅅ tidak beraturan: ㅅ luluh sebelum vokal, jadi 낫 + 아요 menjadi 나아요, dan bentuk hormatnya 나으세요. Jawabannya cukup 감사합니다.',
    },
  ],

  dialogue: {
    title: 'Di apotek',
    situation: 'Vio merasa tidak enak badan sejak kemarin dan mampir ke apotek.',
    lines: [
      { speaker: '비오', ko: '안녕하세요. 감기약 있어요?', id: 'Halo. Ada obat flu?' },
      {
        speaker: '약사',
        ko: '네, 어디가 아프세요?',
        id: 'Ada. Bagian mana yang sakit?',
        note: '어디가 — bagian tubuh sebagai subjek, dengan bentuk hormat 아프세요.',
      },
      {
        speaker: '비오',
        ko: '어제부터 열이 나고 기침이 나요.',
        id: 'Sejak kemarin saya demam dan batuk.',
        note: '부터 menandai sejak kapan; -고 menyambung dua gejala.',
      },
      { speaker: '약사', ko: '목도 아프세요?', id: 'Tenggorokannya sakit juga?' },
      { speaker: '비오', ko: '네, 조금 아파요.', id: 'Ya, agak sakit.' },
      {
        speaker: '약사',
        ko: '이 약 드세요. 하루에 세 번, 식사 후에 한 알씩 드세요.',
        id: 'Minum obat ini. Tiga kali sehari, satu butir setelah makan.',
        note: 'Pola frekuensi dari Pelajaran 5.5 muncul lagi di sini.',
      },
      {
        speaker: '비오',
        ko: '자기 전에도 먹어야 돼요?',
        id: 'Sebelum tidur juga harus diminum?',
        note: '자기 전에 + 도 ("juga"); 먹어야 돼요 adalah pola keharusan Pelajaran 7.3.',
      },
      { speaker: '약사', ko: '네, 자기 전에 한 알 더 드세요.', id: 'Ya, minum satu butir lagi sebelum tidur.' },
      { speaker: '비오', ko: '얼마예요?', id: 'Berapa?' },
      {
        speaker: '약사',
        ko: '오천 원입니다. 빨리 나으세요.',
        id: 'Lima ribu won. Semoga cepat sembuh.',
        note: '나으세요 dari 낫다 — ucapan perpisahan baku di apotek.',
      },
    ],
    politeness:
      'Apoteker memakai 아프세요 dan 드세요 — bentuk hormat — karena kamu adalah pelanggan. Kamu menjawab dengan 해요체 biasa. Perhatikan bahwa 먹다 berubah menjadi 드시다 dalam bentuk hormat, salah satu dari sedikit kata kerja yang punya bentuk hormat tersendiri (Pelajaran 2.8).',
  },

  passage: {
    title: '병원하고 약국',
    intro: 'Bagaimana sistemnya bekerja di Korea.',
    sentences: [
      { ko: '한국에서는 병원하고 약국이 따로 있어요.', id: 'Di Korea, rumah sakit dan apotek terpisah.' },
      { ko: '먼저 병원에서 진료를 받아요.', id: 'Pertama kita berobat di rumah sakit.' },
      { ko: '의사 선생님이 처방전을 줘요.', id: 'Dokter memberikan resep.' },
      { ko: '그다음에 약국에 가서 약을 사요.', id: 'Setelah itu kita ke apotek untuk membeli obat.' },
      { ko: '가벼운 감기약은 약국에서 바로 살 수 있어요.', id: 'Obat flu ringan bisa langsung dibeli di apotek.' },
      { ko: '약을 먹기 전에 설명을 잘 읽으세요.', id: 'Sebelum minum obat, bacalah keterangannya baik-baik.' },
    ],
    vocabInContext: [
      { ko: '따로', id: 'terpisah' },
      { ko: '진료를 받다', id: 'menjalani pemeriksaan' },
      { ko: '의사 선생님', id: 'dokter' },
      { ko: '설명', id: 'keterangan, penjelasan' },
    ],
    analysis: [
      '한국에서는 memakai 에서 (tempat kegiatan) + 는 (kontras dengan negara lain).',
      '병원에서 진료를 받아요 memakai 에서 karena berobat adalah kegiatan yang berlangsung di sana (Pelajaran 2.5).',
      '의사 선생님이 처방전을 줘요 — 이 menandai pelakunya, 을 menandai apa yang diberikan.',
      '약국에 가서 약을 사요 memakai -아/어서 dalam makna URUTAN KEJADIAN: "pergi ke apotek LALU membeli" (Pelajaran 4.2).',
      '가벼운 감기약 — kata sifat 가볍다 menjadi 가벼운 saat menerangkan kata benda.',
      '약을 먹기 전에 memakai -기 전에 dengan kata kerja, sedangkan 식사 후에 memakai kata benda langsung.',
    ],
  },

  exercises: [
    {
      id: 'm5l9-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: '아프다 adalah KATA SIFAT, seperti 좋다 dan 많다.',
      sentence: '머리___ 아파요.',
      translation: 'Kepala saya sakit.',
      options: ['가', '를', '는', '에'],
      answer: '가',
      explain:
        '아프다 adalah kata sifat, jadi bagian tubuh berperan sebagai SUBJEK dengan 이/가. 머리 berakhir vokal, maka bentuknya 가.',
      whyNot: {
        를: 'Terpengaruh bahasa Indonesia "sakit kepala" yang terasa punya objek. Kata sifat tidak pernah memakai 을/를.',
        는: '머리는 아파요 benar tetapi menambahkan nuansa membandingkan — "kalau kepala sih sakit (yang lain tidak)".',
        에: '에 menandai tempat atau waktu, bukan hal yang mengalami keadaan.',
      },
      tags: ['부위 + 이/가 아프다'],
    },
    {
      id: 'm5l9-e2',
      kind: 'fill',
      prompt: 'Ubah 자다 menjadi bentuk "sebelum …".',
      sentence: '___ 한 알 드세요.',
      translation: 'Minum satu butir sebelum tidur.',
      answers: ['자기 전에'],
      explain:
        'Kata kerja membutuhkan akhiran -기 sebelum 전에: 자 + 기 전에 → 자기 전에. Kalau yang dipakai kata benda, -기 tidak diperlukan: 식사 전에.',
      hint: 'Kata kerja butuh satu akhiran tambahan sebelum 전에.',
      tags: ['-기 전에 / 후에'],
    },
    {
      id: 'm5l9-e3',
      kind: 'match',
      prompt: 'Pasangkan gejala dengan artinya.',
      pairs: [
        { left: '열이 나요', right: 'saya demam' },
        { left: '기침이 나요', right: 'saya batuk' },
        { left: '콧물이 나요', right: 'saya pilek' },
        { left: '목이 아파요', right: 'tenggorokan saya sakit' },
        { left: '배가 아파요', right: 'perut saya sakit' },
        { left: '감기에 걸렸어요', right: 'saya kena flu' },
      ],
      explain:
        'Perhatikan dua pola berbeda: sebagian gejala memakai 나다 ("keluar"), sebagian memakai 아프다 ("sakit"). Keduanya menempatkan gejalanya sebagai subjek dengan 이/가.',
      tags: ['gejala'],
    },
    {
      id: 'm5l9-e4',
      kind: 'build',
      prompt: 'Susun penjelasan gejalamu.',
      translation: 'Sejak kemarin saya demam dan batuk.',
      tiles: ['어제부터', '열이', '나고', '기침이', '나요'],
      distractors: ['열을', '어제에'],
      answers: ['어제부터 열이 나고 기침이 나요'],
      explain:
        '부터 menandai sejak kapan. Kedua gejala memakai 이/가 karena merekalah subjeknya, dan -고 menyambung dua keadaan.',
      parts: [
        { part: '어제부터', role: 'sejak kemarin (부터 = titik awal)' },
        { part: '열이', role: 'demam sebagai subjek' },
        { part: '나고', role: '나다 + -고, menyambung' },
        { part: '기침이', role: 'batuk sebagai subjek' },
        { part: '나요', role: 'kata kerja penutup' },
      ],
      tags: ['gejala'],
    },
    {
      id: 'm5l9-e5',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '저는 배를 아파요.',
      translation: 'Perut saya sakit.',
      answers: ['저는 배가 아파요', '배가 아파요'],
      explain:
        '아프다 adalah kata sifat, jadi bagian tubuh menjadi subjek dengan 이/가. Kalimat ini juga menunjukkan pola "topik + subjek": 저는 menetapkan siapa, 배가 menunjuk apa yang sakit.',
      tags: ['부위 + 이/가 아프다'],
    },
    {
      id: 'm5l9-e6',
      kind: 'fill',
      prompt: 'Lengkapi aturan minum obatnya.',
      context: 'Tiga kali dalam satu hari.',
      sentence: '___ 세 번 드세요.',
      translation: 'Minum tiga kali sehari.',
      answers: ['하루에'],
      explain:
        'Pola frekuensi dari Pelajaran 5.5: satuan waktu + 에 + angka + 번. 하루 berarti "satu hari".',
      tags: ['-기 전에 / 후에'],
    },
    {
      id: 'm5l9-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Obat ini diminum setelah makan.',
      answers: ['이 약은 식사 후에 드세요', '이 약은 식사 후에 먹어요', '이 약 식사 후에 드세요'],
      explain:
        '식사 adalah kata benda, jadi cukup ditambah 후에 tanpa -기. Dan 드세요 adalah bentuk hormat dari 먹다, yang dipakai apoteker kepada pelanggan.',
      hint: '식사 adalah kata benda, bukan kata kerja.',
      tags: ['-기 전에 / 후에'],
    },
    {
      id: 'm5l9-e8',
      kind: 'mc',
      prompt: 'Dari bacaan 병원하고 약국, kapan kamu perlu 처방전?',
      options: [
        'Untuk membeli obat di apotek setelah berobat di rumah sakit.',
        'Untuk masuk ke rumah sakit.',
        'Untuk membeli obat flu ringan.',
        'Untuk mendapat potongan harga.',
      ],
      answerIndex: 0,
      explain:
        'Bacaan menjelaskan alurnya: berobat di rumah sakit → dokter memberi 처방전 → pergi ke apotek membeli obat. Untuk obat flu ringan, bacaan justru menyebut bisa langsung dibeli tanpa resep.',
      whyNot: {
        'Untuk masuk ke rumah sakit.': 'Resep diberikan setelah pemeriksaan, bukan sebelum.',
        'Untuk membeli obat flu ringan.':
          'Justru sebaliknya — 가벼운 감기약은 약국에서 바로 살 수 있어요.',
        'Untuk mendapat potongan harga.': 'Tidak disebut dalam bacaan.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm5l9-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR?',
      options: ['목이 아파요.', '목을 아파요.', '목에 아파요.', '목이 아프다요.'],
      answerIndex: 0,
      explain:
        '아프다 adalah kata sifat, jadi bagian tubuh menjadi subjek dengan 이/가. 목 berakhir konsonan ㄱ, maka bentuknya 이.',
      whyNot: {
        '목을 아파요.': 'Kata sifat tidak pernah memakai 을/를.',
        '목에 아파요.': '에 menandai tempat atau waktu.',
        '목이 아프다요.': 'Bentuk kamus 아프다 tidak bisa langsung ditambah 요.',
      },
      tags: ['부위 + 이/가 아프다'],
    },
    {
      id: 'm5l9-q2',
      kind: 'fill',
      prompt: 'Ubah 운동하다 menjadi bentuk "sebelum …".',
      sentence: '___ 물을 마셔요.',
      translation: 'Saya minum air sebelum berolahraga.',
      answers: ['운동하기 전에'],
      explain:
        'Batang 운동하 + 기 전에 → 운동하기 전에. Perhatikan bahwa -기 ditempel pada batang, bukan pada bentuk 해요체 운동해요.',
      tags: ['-기 전에 / 후에'],
    },
    {
      id: 'm5l9-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Bagian mana yang sakit?',
      answers: ['어디가 아프세요?', '어디가 아파요?'],
      explain:
        '어디 berperan sebagai SUBJEK di sini ("bagian mana yang sakit"), jadi memakai 가 — persis seperti 어디가 좋아요? di Pelajaran 1.3. Dokter memakai bentuk hormat 아프세요.',
      tags: ['부위 + 이/가 아프다'],
    },
  ],

  summary: {
    points: [
      '아프다 adalah KATA SIFAT: bagian tubuh menjadi subjek dengan 이/가, bukan objek.',
      'Sebagian gejala memakai 나다: 열이 나요, 기침이 나요, 콧물이 나요.',
      '감기에 걸리다 memakai 에, bukan 을/를.',
      'Kata kerja + 기 전에 ("sebelum"); kata benda + 전에 / 후에.',
      'Untuk "setelah" dengan kata kerja, bentuknya -(으)ㄴ 후에: 먹은 후에.',
      'Aturan obat memakai pola frekuensi dari Pelajaran 5.5: 하루에 세 번.',
      '빨리 나으세요 ("semoga cepat sembuh") berasal dari 낫다, kata ㅅ tidak beraturan.',
    ],
    pitfalls: [
      {
        wrong: '머리를 아파요.',
        right: '머리가 아파요.',
        why: 'Kata sifat menggambarkan keadaan subjeknya, bukan mengenai objek.',
      },
      {
        wrong: '자 전에 드세요.',
        right: '자기 전에 드세요.',
        why: 'Kata kerja butuh akhiran -기 sebelum 전에.',
      },
      {
        wrong: '감기를 걸렸어요.',
        right: '감기에 걸렸어요.',
        why: '걸리다 untuk penyakit memakai 에.',
      },
    ],
  },
}
