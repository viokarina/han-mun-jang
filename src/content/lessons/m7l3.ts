import type { Lesson } from '../../types/curriculum'

export const m7l3: Lesson = {
  id: 'm7-l3',
  moduleId: 'm7',
  number: '7.3',
  title: 'Sauna & 찜질방',
  subtitle: 'Boleh, tidak boleh, harus — dan tidak perlu',
  objective:
    'Setelah pelajaran ini kamu bisa menanyakan izin, memahami larangan, dan menyatakan kewajiban — empat pola yang kamu butuhkan di tempat mana pun yang punya aturan.',
  focus: ['-아/어도 되다', '-(으)면 안 되다', '-아/어야 하다'],
  estimatedMinutes: 18,

  coreExamples: [
    {
      ko: '여기서 사진 찍어도 돼요?',
      id: 'Boleh foto di sini?',
      highlight: ['찍어도 돼요'],
      highlightKind: 'ending',
    },
    {
      ko: '아니요, 사진을 찍으면 안 돼요.',
      id: 'Tidak, tidak boleh memotret.',
      highlight: ['찍으면 안 돼요'],
      highlightKind: 'ending',
    },
    {
      ko: '신발은 신발장에 넣어야 해요.',
      id: 'Sepatu harus dimasukkan ke loker sepatu.',
      highlight: ['넣어야 해요'],
      highlightKind: 'ending',
    },
    {
      ko: '수영복은 안 입어도 돼요.',
      id: 'Baju renang tidak perlu dipakai.',
      highlight: ['안 입어도 돼요'],
      highlightKind: 'ending',
    },
    { ko: '찜질방에서 자도 돼요.', id: 'Boleh tidur di jjimjilbang.', highlight: ['자도 돼요'], highlightKind: 'ending' },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '여기서 사진 찍어도 돼요?',
        id: 'Boleh foto di sini?',
        highlight: ['찍어도 돼요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '여기서', formula: '여기에서 → 여기서', meaning: 'Di sini — bentuk singkat dari Pelajaran 2.5' },
        { unit: '사진', formula: '—', meaning: 'Foto; partikel 을 dilepas karena kalimat percakapan' },
        {
          unit: '찍어도',
          formula: '찍다 → 찍어요 → 찍어 + 도',
          meaning: '"Meskipun memotret"',
        },
        { unit: '돼요?', formula: '되다 → 돼요', meaning: '"Jadi / boleh?"' },
      ],
      why:
        'Pola -아/어도 되다 secara harfiah berarti "meskipun melakukan X, tetap boleh" — dan itulah cara bahasa Korea menyatakan izin. Dibentuk dari bentuk 해요체 tanpa 요, lalu ditambah 도 되다. Satu hal yang perlu diperhatikan: 되다 menjadi 돼요, bukan 되요. Kesalahan ejaan ini bahkan sering dilakukan penutur asli, tetapi tetap salah.',
      swaps: [
        {
          alt: '여기서 사진 찍어도 괜찮아요?',
          effect:
            'Artinya sama. 괜찮다 bisa menggantikan 되다 dalam pola ini, dan terdengar sedikit lebih lembut.',
        },
        {
          alt: '여기서 사진 찍을 수 있어요?',
          effect:
            'Artinya bergeser menjadi "apakah saya BISA memotret di sini?" — soal kemampuan atau fasilitas, bukan izin. Untuk meminta izin, pakai -아/어도 돼요?.',
        },
      ],
    },
    {
      sentence: {
        ko: '신발은 신발장에 넣어야 해요.',
        id: 'Sepatu harus dimasukkan ke loker sepatu.',
        highlight: ['넣어야 해요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '신발은', formula: '신발 + 은', meaning: 'Sepatu — topik, karena jadi pokok aturan' },
        { unit: '신발장에', formula: '신발장 + 에', meaning: 'Ke loker sepatu — tujuan' },
        {
          unit: '넣어야',
          formula: '넣다 → 넣어요 → 넣어 + 야',
          meaning: '"Harus memasukkan"',
        },
        { unit: '해요', formula: '하다 → 해요', meaning: 'Melengkapi pola kewajiban' },
      ],
      why:
        '-아/어야 하다 menyatakan kewajiban, dan dibentuk dengan cara yang sama persis: bentuk 해요체 tanpa 요, lalu 야 하다. Bentuk 되다 juga dipakai — 넣어야 돼요 — dengan arti yang praktis sama; 돼요 hanya terasa sedikit lebih percakapan. Perhatikan bahwa ketiga pola dalam pelajaran ini (도 돼요, 야 해요, 면 안 돼요) semuanya dibangun dari bahan yang sudah kamu kuasai.',
      swaps: [
        {
          alt: '신발은 신발장에 넣어야 돼요.',
          effect: 'Sama benarnya dan sedikit lebih santai. Keduanya terdengar sepanjang hari di Korea.',
        },
        {
          alt: '신발은 안 넣어도 돼요.',
          effect:
            'Perhatikan baik-baik: ini berarti "sepatu TIDAK PERLU dimasukkan" — bukan "dilarang dimasukkan". Kebalikan dari kewajiban adalah ketidakwajiban, bukan larangan.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '찜질방', id: 'jjimjilbang (sauna umum Korea)', pos: 'kata benda' },
    { ko: '목욕탕', id: 'pemandian umum', pos: 'kata benda' },
    { ko: '신발장', id: 'loker sepatu', pos: 'kata benda' },
    { ko: '옷장', id: 'loker baju', pos: 'kata benda' },
    { ko: '열쇠', id: 'kunci', pos: 'kata benda' },
    { ko: '수건', id: 'handuk', pos: 'kata benda' },
    { ko: '찜질복', id: 'baju seragam jjimjilbang', pos: 'kata benda' },
    { ko: '입장료', id: 'biaya masuk', pos: 'kata benda' },
    {
      ko: '넣다',
      id: 'memasukkan',
      pos: 'kata kerja',
      note: '해요체: 넣어요.',
      example: { ko: '가방에 넣어요.', id: 'Saya masukkan ke tas.' },
    },
    { ko: '갈아입다', id: 'berganti baju', pos: 'kata kerja', note: '해요체: 갈아입어요.' },
    { ko: '맥반석 계란', id: 'telur panggang khas jjimjilbang', pos: 'kata benda' },
    { ko: '식혜', id: 'minuman beras manis', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-아/어도 되다 — boleh',
      form: 'bentuk 해요체 − 요 + 도 되다',
      body:
        'Dipakai untuk meminta izin (dengan tanda tanya) dan memberi izin (tanpa tanda tanya). Pembentukannya sama dengan -아/어 주세요 dan -아/어 드릴게요 yang sudah kamu kuasai.',
      table: {
        caption: 'Perhatikan ejaan: 돼요, bukan 되요. Bentuk lengkapnya 되 + 어요 → 돼요.',
        columns: ['Kata kerja', '해요체', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가요', '가도 돼요', 'boleh pergi'],
          ['먹다', '먹어요', '먹어도 돼요', 'boleh makan'],
          ['하다', '해요', '해도 돼요', 'boleh melakukan'],
          ['찍다', '찍어요', '찍어도 돼요', 'boleh memotret'],
          ['자다', '자요', '자도 돼요', 'boleh tidur'],
        ],
      },
      examples: [
        { ko: '여기 앉아도 돼요?', id: 'Boleh duduk di sini?' },
        { ko: '네, 앉아도 돼요.', id: 'Ya, boleh duduk.' },
        { ko: '사진 찍어도 괜찮아요?', id: 'Boleh foto, nggak?', note: '괜찮다 bisa menggantikan 되다.' },
      ],
      mistakes: [
        {
          wrong: '여기 앉아도 되요?',
          right: '여기 앉아도 돼요?',
          why: '되다 + 어요 menghasilkan 돼요. Ejaan 되요 salah, meskipun sering terlihat.',
        },
      ],
    },
    {
      title: '-(으)면 안 되다 — tidak boleh',
      form: 'batang + (으)면 + 안 되다',
      body:
        'Pola ini memakai -(으)면 yang sudah kamu pelajari di Pelajaran 5.6, lalu ditutup 안 되다. Harfiahnya "kalau melakukan X, tidak jadi" — yaitu "dilarang X". Perhatikan bahwa ini dibentuk dari BATANG, berbeda dari dua pola lainnya.',
      table: {
        columns: ['Kata kerja', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가', '가면 안 돼요', 'tidak boleh pergi'],
          ['먹다', '먹', '먹으면 안 돼요', 'tidak boleh makan'],
          ['찍다', '찍', '찍으면 안 돼요', 'tidak boleh memotret'],
          ['입다', '입', '입으면 안 돼요', 'tidak boleh memakai'],
          ['하다', '하', '하면 안 돼요', 'tidak boleh melakukan'],
        ],
      },
      examples: [
        { ko: '여기에서 담배를 피우면 안 돼요.', id: 'Tidak boleh merokok di sini.' },
        { ko: '목욕탕에서는 수영복을 입으면 안 돼요.', id: 'Di pemandian tidak boleh memakai baju renang.' },
      ],
      more:
        'Untuk larangan yang diucapkan langsung kepada seseorang, ada bentuk yang lebih tegas: -지 마세요 ("jangan …"), misalnya 사진을 찍지 마세요. Bedanya halus — -(으)면 안 돼요 menjelaskan ATURAN, sedangkan -지 마세요 adalah PERINTAH langsung. Papan pengumuman biasanya memakai -지 마세요.',
    },
    {
      title: 'Empat pola yang mudah tertukar',
      body:
        'Inilah inti pelajaran ini. Perhatikan baris terakhir — kesalahan paling umum adalah mengira kebalikan dari "harus" adalah "tidak boleh", padahal yang benar adalah "tidak perlu".',
      table: {
        caption:
          'Kebalikan dari 가야 해요 ("harus pergi") bukan 가면 안 돼요 ("dilarang pergi"), melainkan 안 가도 돼요 ("tidak perlu pergi").',
        columns: ['Pola', 'Arti', 'Contoh', 'Dibentuk dari'],
        rows: [
          ['-아/어도 돼요', 'boleh', '가도 돼요', '해요체 − 요'],
          ['-(으)면 안 돼요', 'tidak boleh', '가면 안 돼요', 'batang'],
          ['-아/어야 해요', 'harus', '가야 해요', '해요체 − 요'],
          ['안 -아/어도 돼요', 'tidak perlu', '안 가도 돼요', '해요체 − 요'],
        ],
      },
      examples: [
        {
          ko: '수영복을 입어야 해요?',
          id: 'Apakah harus memakai baju renang?',
          note: 'Menanyakan kewajiban.',
        },
        {
          ko: '아니요, 안 입어도 돼요.',
          id: 'Tidak, tidak perlu dipakai.',
          note: 'Tidak wajib — tetapi boleh saja kalau mau.',
        },
        {
          ko: '아니요, 입으면 안 돼요.',
          id: 'Tidak, justru tidak boleh dipakai.',
          note: 'Dilarang — artinya jauh berbeda dari jawaban di atas.',
        },
      ],
      mistakes: [
        {
          wrong: '(maksudnya "tidak perlu") 안 가면 안 돼요.',
          right: '안 가도 돼요.',
          why: '안 가면 안 돼요 justru berarti "tidak boleh tidak pergi" — yakni harus pergi.',
        },
      ],
    },
    {
      title: 'Alur di 찜질방',
      body:
        'Urutan ini sama di hampir semua 찜질방, dan mengetahuinya membuat kunjungan pertamamu jauh lebih tenang.',
      table: {
        columns: ['Urutan', 'Bahasa Korea', 'Arti'],
        rows: [
          ['1', '입장료를 내요', 'Membayar biaya masuk'],
          ['2', '신발을 신발장에 넣어요', 'Menyimpan sepatu di loker sepatu'],
          ['3', '옷장 열쇠를 받아요', 'Menerima kunci loker baju'],
          ['4', '옷을 갈아입어요', 'Berganti baju'],
          ['5', '목욕탕에서 씻어요', 'Mandi di pemandian'],
          ['6', '찜질복을 입고 찜질방에 가요', 'Pakai baju jjimjilbang lalu masuk ruang sauna'],
        ],
      },
      examples: [
        {
          ko: '목욕탕에서는 수영복을 입으면 안 돼요.',
          id: 'Di area pemandian tidak boleh memakai baju renang.',
          note: 'Ini mengejutkan banyak pendatang — area mandi memang tanpa pakaian, dan terpisah menurut jenis kelamin.',
        },
        {
          ko: '찜질방에서는 찜질복을 입어야 해요.',
          id: 'Di ruang jjimjilbang harus memakai baju seragamnya.',
          note: 'Ruang ini bercampur, jadi pakaian wajib.',
        },
      ],
      more:
        'Dua jajanan yang hampir selalu ada: 맥반석 계란 (telur yang dipanggang di batu, kulitnya kecokelatan) dan 식혜 (minuman beras manis yang dingin). Keduanya sudah menjadi bagian dari pengalaman 찜질방 itu sendiri. Dan ya — 찜질방에서 자도 돼요: banyak orang memang menginap di sana.',
    },
  ],

  dialogue: {
    title: 'Pertama kali ke 찜질방',
    situation: 'Sujin mengajak Vio ke jjimjilbang, dan Vio belum pernah ke sana.',
    lines: [
      { speaker: '비오', ko: '수진 씨, 여기 처음이에요. 어떻게 해요?', id: 'Sujin, saya baru pertama kali. Caranya gimana?' },
      {
        speaker: '수진',
        ko: '먼저 입장료를 내야 해요. 그리고 옷장 열쇠를 받아요.',
        id: 'Pertama harus bayar tiket masuk. Lalu terima kunci loker.',
        note: '내야 해요 — kewajiban, dari 내요 + 야 하다.',
      },
      { speaker: '비오', ko: '수영복 입어야 해요?', id: 'Harus pakai baju renang?' },
      {
        speaker: '수진',
        ko: '아니요! 목욕탕에서는 수영복을 입으면 안 돼요.',
        id: 'Tidak! Di pemandian justru tidak boleh pakai baju renang.',
        note: 'Bukan "tidak perlu" — tetapi "dilarang". Bedanya penting.',
      },
      { speaker: '비오', ko: '아, 그래요? 찜질방에서는요?', id: 'Oh, begitu? Kalau di ruang jjimjilbang?' },
      {
        speaker: '수진',
        ko: '찜질방에서는 이 찜질복을 입어야 해요.',
        id: 'Di jjimjilbang harus pakai baju ini.',
        note: '에서는 — tempat kegiatan + kontras dengan ruangan sebelumnya.',
      },
      { speaker: '비오', ko: '여기서 사진 찍어도 돼요?', id: 'Boleh foto di sini?' },
      { speaker: '수진', ko: '아니요, 사진은 찍으면 안 돼요.', id: 'Tidak, memotret tidak boleh.' },
      { speaker: '비오', ko: '알겠어요. 그런데 여기서 자도 돼요?', id: 'Baik. Tapi boleh tidur di sini?' },
      {
        speaker: '수진',
        ko: '네, 자도 돼요. 많은 사람들이 여기서 자요.',
        id: 'Boleh. Banyak orang memang tidur di sini.',
      },
    ],
    politeness:
      'Perhatikan dua jawaban berbeda Sujin atas pertanyaan Vio. Untuk baju renang ia memakai 입으면 안 돼요 (dilarang), sedangkan kalau yang dimaksud hanya "tidak wajib" ia akan berkata 안 입어도 돼요. Salah memilih di antara keduanya bisa membuatmu melakukan hal yang benar-benar tidak pantas di tempat umum.',
  },

  passage: {
    title: '찜질방에 처음 갔어요',
    intro: 'Catatan harian setelah kunjungan pertama.',
    sentences: [
      { ko: '지난 주말에 처음으로 찜질방에 갔어요.', id: 'Akhir pekan lalu saya pertama kali pergi ke jjimjilbang.' },
      { ko: '입장료를 내고 옷장 열쇠를 받았어요.', id: 'Saya membayar tiket masuk lalu menerima kunci loker.' },
      { ko: '먼저 목욕탕에서 샤워를 했어요.', id: 'Pertama saya mandi di pemandian.' },
      { ko: '그다음에 찜질복을 입고 찜질방에 들어갔어요.', id: 'Setelah itu saya pakai baju jjimjilbang dan masuk ruang sauna.' },
      { ko: '안이 정말 따뜻했어요.', id: 'Di dalamnya hangat sekali.' },
      { ko: '맥반석 계란하고 식혜를 먹었어요. 정말 맛있었어요.', id: 'Saya makan telur panggang dan minum sikhye. Enak sekali.' },
      { ko: '세 시간쯤 있었어요. 집에 와서 푹 잤어요.', id: 'Saya di sana sekitar tiga jam. Sampai rumah saya tidur nyenyak.' },
    ],
    vocabInContext: [
      { ko: '처음으로', id: 'untuk pertama kalinya' },
      { ko: '그다음에', id: 'setelah itu' },
      { ko: '따뜻하다', id: 'hangat' },
      { ko: '푹 자다', id: 'tidur nyenyak' },
    ],
    analysis: [
      '입장료를 내고 — -고 menyambung dua kegiatan berurutan (Pelajaran 4.1), dan hanya kata kerja terakhir yang membawa penanda lampau.',
      '찜질복을 입고 찜질방에 들어갔어요 — pola yang sama: pakai baju, lalu masuk.',
      '세 시간쯤 memakai angka asli (세) karena menghitung jumlah jam. Bandingkan dengan 세 시 ("pukul tiga") yang juga asli, tetapi 삼십 분 ("tiga puluh menit") yang memakai Sino.',
      '집에 와서 푹 잤어요 — di sini -아/어서 bermakna URUTAN KEJADIAN yang berkaitan erat ("pulang lalu tidur"), bukan sebab (Pelajaran 4.2).',
      '안이 따뜻했어요 — 안 ("dalam") berfungsi sebagai kata benda dan menjadi subjek dengan 이, persis seperti kata posisi lain di Pelajaran 2.4.',
      '처음으로 memakai (으)로 dalam makna "sebagai/dengan cara" — di sini "untuk pertama kalinya".',
    ],
  },

  exercises: [
    {
      id: 'm7l3-e1',
      kind: 'fill',
      prompt: 'Ubah 찍다 menjadi bentuk meminta izin.',
      sentence: '여기서 사진 ___?',
      translation: 'Boleh foto di sini?',
      answers: ['찍어도 돼요', '찍어도 되나요', '찍어도 괜찮아요'],
      explain:
        'Pola -아/어도 되다 dibentuk dari 해요체 tanpa 요: 찍어요 → 찍어 → 찍어도 돼요. Ingat ejaannya 돼요, bukan 되요.',
      hint: 'Mulai dari bentuk 해요체: 찍어요.',
      tags: ['-아/어도 되다'],
    },
    {
      id: 'm7l3-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Di area pemandian, baju renang benar-benar DILARANG — bukan sekadar tidak wajib.',
      sentence: '목욕탕에서는 수영복을 ___.',
      translation: 'Di pemandian tidak boleh memakai baju renang.',
      options: ['입으면 안 돼요', '안 입어도 돼요', '입어야 해요', '입어도 돼요'],
      answer: '입으면 안 돼요',
      explain:
        '-(으)면 안 되다 menyatakan LARANGAN. Dibentuk dari batang 입 + 으면 + 안 돼요.',
      whyNot: {
        '안 입어도 돼요': 'Artinya "tidak perlu dipakai" — menyiratkan boleh dipakai kalau mau. Berbeda jauh.',
        '입어야 해요': 'Artinya justru "harus dipakai".',
        '입어도 돼요': 'Artinya "boleh dipakai".',
      },
      tags: ['-(으)면 안 되다'],
    },
    {
      id: 'm7l3-e3',
      kind: 'fill',
      prompt: 'Ubah 내다 menjadi bentuk kewajiban.',
      sentence: '먼저 입장료를 ___.',
      translation: 'Pertama harus membayar tiket masuk.',
      answers: ['내야 해요', '내야 돼요'],
      explain:
        '-아/어야 하다 dibentuk dari 해요체 tanpa 요: 내요 → 내 → 내야 해요. Bentuk 내야 돼요 juga benar dan sedikit lebih santai.',
      tags: ['-아/어야 하다'],
    },
    {
      id: 'm7l3-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap pola dengan artinya.',
      pairs: [
        { left: '가도 돼요', right: 'boleh pergi' },
        { left: '가면 안 돼요', right: 'tidak boleh pergi' },
        { left: '가야 해요', right: 'harus pergi' },
        { left: '안 가도 돼요', right: 'tidak perlu pergi' },
        { left: '갈 수 있어요', right: 'bisa pergi (soal kemampuan)' },
      ],
      explain:
        'Empat yang pertama adalah soal ATURAN; yang terakhir soal KEMAMPUAN. Perhatikan bahwa kebalikan dari "harus" adalah "tidak perlu", bukan "tidak boleh".',
      tags: ['-아/어도 되다', '-(으)면 안 되다', '-아/어야 하다'],
    },
    {
      id: 'm7l3-e5',
      kind: 'mc',
      prompt:
        'Kamu bertanya 수영복을 입어야 해요? dan dijawab 아니요, 안 입어도 돼요. Apa artinya?',
      options: [
        'Tidak wajib dipakai, tapi boleh saja kalau mau.',
        'Dilarang keras memakainya.',
        'Harus dipakai.',
        'Hanya boleh dipakai di ruang tertentu.',
      ],
      answerIndex: 0,
      explain:
        '안 -아/어도 돼요 berarti "tidak perlu" — kewajibannya dihapus, tetapi tidak ada larangan. Kalau yang dimaksud adalah larangan, jawabannya akan 입으면 안 돼요.',
      whyNot: {
        'Dilarang keras memakainya.': 'Itu memerlukan 입으면 안 돼요.',
        'Harus dipakai.': 'Itu justru 입어야 해요.',
        'Hanya boleh dipakai di ruang tertentu.': 'Kalimatnya tidak menyebut pembatasan ruang.',
      },
      tags: ['-아/어도 되다'],
    },
    {
      id: 'm7l3-e6',
      kind: 'build',
      prompt: 'Susun aturan ini.',
      translation: 'Sepatu harus dimasukkan ke loker sepatu.',
      tiles: ['신발은', '신발장에', '넣어야', '해요'],
      distractors: ['신발장에서', '넣으면'],
      answers: ['신발은 신발장에 넣어야 해요'],
      explain:
        '신발장에 memakai 에 karena loker adalah TUJUAN benda itu masuk, bukan tempat kegiatan. Dan 넣어야 해요 dibentuk dari 넣어요 tanpa 요.',
      parts: [
        { part: '신발은', role: 'topik aturan' },
        { part: '신발장에', role: 'tujuan dengan 에' },
        { part: '넣어야', role: 'kewajiban: 넣어 + 야' },
        { part: '해요', role: 'melengkapi pola -아/어야 하다' },
      ],
      tags: ['-아/어야 하다'],
    },
    {
      id: 'm7l3-e7',
      kind: 'correct',
      prompt: 'Perbaiki ejaannya.',
      sentence: '여기 앉아도 되요?',
      translation: 'Boleh duduk di sini?',
      answers: ['여기 앉아도 돼요?'],
      explain:
        '되다 + 어요 menghasilkan 돼요 — vokal ㅚ bertemu ㅓ menjadi ㅙ, persis seperti yang kamu pelajari di tabel penggabungan bunyi Pelajaran 3.1. Ejaan 되요 salah meskipun sering terlihat.',
      tags: ['-아/어도 되다'],
    },
    {
      id: 'm7l3-e8',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Tidak boleh merokok di sini.',
      answers: [
        '여기에서 담배를 피우면 안 돼요',
        '여기서 담배를 피우면 안 돼요',
        '여기에서 담배를 피우면 안 됩니다',
      ],
      explain:
        '-(으)면 안 되다 dibentuk dari batang 피우 + 면 + 안 돼요. Tempat kegiatan memakai 에서, yang boleh disingkat menjadi 여기서.',
      hint: 'Larangan dibentuk dari batang kata, bukan dari bentuk 해요체.',
      tags: ['-(으)면 안 되다'],
    },
  ],

  quiz: [
    {
      id: 'm7l3-q1',
      kind: 'mc',
      prompt: 'Manakah yang berarti "tidak perlu datang"?',
      options: ['안 와도 돼요.', '오면 안 돼요.', '와야 해요.', '안 오면 안 돼요.'],
      answerIndex: 0,
      explain:
        'Pola 안 -아/어도 돼요 menghapus kewajiban: "tidak perlu". Hati-hati dengan pilihan terakhir — 안 오면 안 돼요 berarti "tidak boleh tidak datang", yakni justru HARUS datang.',
      whyNot: {
        '오면 안 돼요.': 'Artinya "tidak boleh datang" — sebuah larangan.',
        '와야 해요.': 'Artinya "harus datang".',
        '안 오면 안 돼요.': 'Dua penyangkalan saling meniadakan: artinya "harus datang".',
      },
      tags: ['-아/어도 되다', '-(으)면 안 되다'],
    },
    {
      id: 'm7l3-q2',
      kind: 'fill',
      prompt: 'Ubah 먹다 menjadi bentuk larangan.',
      sentence: '여기에서 음식을 ___.',
      translation: 'Tidak boleh makan di sini.',
      answers: ['먹으면 안 돼요'],
      explain:
        'Batang 먹 berakhir konsonan, jadi memakai 으면, lalu ditutup 안 돼요. Pola ini satu-satunya dari tiga yang dibentuk dari batang.',
      tags: ['-(으)면 안 되다'],
    },
    {
      id: 'm7l3-q3',
      kind: 'mc',
      prompt: 'Apa bedanya 사진 찍어도 돼요? dan 사진 찍을 수 있어요?',
      options: [
        'Yang pertama meminta IZIN; yang kedua menanyakan KEMAMPUAN atau kemungkinan.',
        'Yang pertama lebih sopan.',
        'Yang pertama bentuk lampau.',
        'Keduanya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '-아/어도 되다 soal boleh atau tidak menurut aturan. -(으)ㄹ 수 있다 (Pelajaran 3.3) soal mampu atau memungkinkan secara teknis. Di tempat yang punya aturan, yang kamu butuhkan adalah yang pertama.',
      whyNot: {
        'Yang pertama lebih sopan.': 'Keduanya sama-sama 해요체.',
        'Yang pertama bentuk lampau.': 'Keduanya bentuk sekarang.',
        'Keduanya sama persis.': 'Izin dan kemampuan adalah dua hal berbeda.',
      },
      tags: ['-아/어도 되다'],
    },
  ],

  summary: {
    points: [
      '-아/어도 돼요 = boleh. Dibentuk dari 해요체 tanpa 요, lalu 도 돼요.',
      '-(으)면 안 돼요 = tidak boleh. Satu-satunya dari tiga pola ini yang dibentuk dari BATANG.',
      '-아/어야 해요 = harus. Bentuk 돼요 juga benar dan sedikit lebih santai.',
      '안 -아/어도 돼요 = tidak perlu — BUKAN "tidak boleh".',
      'Ejaannya 돼요, bukan 되요 (되 + 어요 → 돼요).',
      '-아/어도 되다 soal izin; -(으)ㄹ 수 있다 soal kemampuan.',
      'Di 목욕탕 baju renang dilarang; di 찜질방 justru wajib memakai 찜질복.',
    ],
    pitfalls: [
      {
        wrong: '앉아도 되요?',
        right: '앉아도 돼요?',
        why: '되 + 어요 menghasilkan 돼요.',
      },
      {
        wrong: '(maksudnya "tidak perlu") 안 가면 안 돼요.',
        right: '안 가도 돼요.',
        why: '안 가면 안 돼요 berarti "tidak boleh tidak pergi", yakni harus pergi.',
      },
      {
        wrong: '먹어도 안 돼요.',
        right: '먹으면 안 돼요.',
        why: 'Larangan memakai -(으)면, dibentuk dari batang kata.',
      },
    ],
  },
}
