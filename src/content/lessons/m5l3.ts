import type { Lesson } from '../../types/curriculum'

export const m5l3: Lesson = {
  id: 'm5-l3',
  moduleId: 'm5',
  number: '5.3',
  title: 'Di restoran',
  subtitle: 'Dari pintu masuk sampai kasir',
  objective:
    'Setelah pelajaran ini kamu bisa menjalani satu kunjungan restoran Korea dari awal sampai akhir — menjawab pertanyaan pelayan, memesan per porsi, minta tambah lauk, dan membayar terpisah.',
  focus: ['-(으)ㄹ래요?', '인분', '좀 더 주세요'],
  estimatedMinutes: 16,

  coreExamples: [
    { ko: '두 명이요.', id: 'Dua orang.', highlight: ['명'] },
    {
      ko: '삼겹살 이인분 주세요.',
      id: 'Tolong dua porsi samgyeopsal.',
      highlight: ['이인분'],
    },
    { ko: '반찬 좀 더 주세요.', id: 'Tolong tambah lauknya.', highlight: ['더'] },
    {
      ko: '비오 씨, 뭐 먹을래요?',
      id: 'Vio, mau makan apa?',
      highlight: ['먹을래요'],
      highlightKind: 'ending',
    },
    {
      ko: '따로따로 계산해 주세요.',
      id: 'Tolong dihitung terpisah.',
      highlight: ['따로따로'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '삼겹살 이인분 주세요.',
        id: 'Tolong dua porsi samgyeopsal.',
        highlight: ['이인분'],
      },
      rows: [
        { unit: '삼겹살', formula: '—', meaning: 'Samgyeopsal — daging perut babi panggang' },
        {
          unit: '이인분',
          formula: '이 + 인분',
          meaning: 'Dua porsi; 인분 memakai angka SINO-Korea, bukan angka asli',
        },
        { unit: '주세요', formula: '주다 + (으)세요', meaning: '"Tolong berikan"' },
      ],
      why:
        'Di Pelajaran 5.2 kamu belajar bahwa jumlah benda memakai angka asli Korea: 한 잔, 두 개, 세 명. Tapi 인분 ("porsi") justru memakai angka SINO-Korea: 일인분, 이인분, 삼인분. Ini perkecualian yang benar-benar perlu dihafal, karena kamu akan memakainya setiap kali memesan daging — dan 두 인분 langsung terdengar salah bagi penutur asli.',
      swaps: [
        {
          alt: '삼겹살 두 인분 주세요. ✗',
          effect:
            'Salah. 인분 tidak pernah berpasangan dengan angka asli. Bentuk yang benar adalah 이인분.',
        },
        {
          alt: '삼겹살 이인분하고 된장찌개 하나 주세요.',
          effect:
            'Menambah pesanan kedua dengan 하고. Perhatikan 된장찌개 memakai 하나 — angka asli — karena ia dihitung sebagai benda biasa, bukan porsi.',
        },
      ],
    },
    {
      sentence: {
        ko: '따로따로 계산해 주세요.',
        id: 'Tolong dihitung terpisah.',
        highlight: ['계산해 주세요'],
        highlightKind: 'ending',
      },
      rows: [
        {
          unit: '따로따로',
          formula: '따로 + 따로',
          meaning: 'Sendiri-sendiri; kata diulang untuk memperkuat',
        },
        {
          unit: '계산해',
          formula: '계산하다 → 계산해요 → 계산해',
          meaning: 'Membayar; bentuk 해요체 tanpa 요',
        },
        { unit: '주세요', formula: '주다 + (으)세요', meaning: 'Menjadikannya permintaan: "tolong …-kan"' },
      ],
      why:
        'Ini pola permintaan tindakan dari Pelajaran 5.2 yang dipakai di situasi nyata: ambil bentuk 해요체, buang 요, lalu tambahkan 주세요. Kata 따로따로 adalah pengulangan dari 따로 ("terpisah") — bahasa Korea sering mengulang kata untuk memperkuat maknanya, seperti 하나하나 ("satu per satu") dan 가끔가끔.',
      swaps: [
        {
          alt: '같이 계산할게요.',
          effect:
            '"Saya bayar sekalian." Memakai -(으)ㄹ게요 karena kamu mengumumkan keputusanmu sendiri, bukan meminta.',
        },
        {
          alt: '계산이요.',
          effect:
            'Sangat pendek, dan justru paling sering terdengar di kasir. Akhiran 요 yang membuatnya tetap sopan meski cuma satu kata.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '여기요 / 저기요', id: 'permisi (memanggil pelayan)', pos: 'ungkapan' },
    {
      ko: '몇 분',
      id: 'berapa orang (bentuk hormat)',
      pos: 'kata tanya',
      note: '분 adalah penghitung hormat untuk 명.',
    },
    { ko: '인분', id: 'porsi', pos: 'penghitung', note: 'Memakai angka Sino: 일인분, 이인분.' },
    { ko: '반찬', id: 'lauk pendamping', pos: 'kata benda' },
    { ko: '더', id: 'lebih, tambah', pos: 'kata keterangan' },
    { ko: '따로따로', id: 'terpisah, sendiri-sendiri', pos: 'kata keterangan' },
    {
      ko: '계산하다',
      id: 'membayar, menghitung',
      pos: 'kata kerja',
      note: '해요체: 계산해요.',
      example: { ko: '계산해 주세요.', id: 'Tolong hitungkan.' },
    },
    { ko: '메뉴판', id: 'buku menu', pos: 'kata benda' },
    { ko: '잘 먹겠습니다', id: 'ungkapan sebelum makan', pos: 'ungkapan' },
    { ko: '잘 먹었습니다', id: 'ungkapan setelah makan', pos: 'ungkapan' },
    { ko: '맛있게 드세요', id: 'selamat menikmati', pos: 'ungkapan' },
  ],

  grammar: [
    {
      title: '-(으)ㄹ래요? — "mau …?"',
      form: 'batang + ㄹ래요? (vokal) · 을래요? (konsonan)',
      body:
        'Bentuk ini menanyakan KEINGINAN lawan bicara, dan terdengar lebih santai daripada -(으)ㄹ까요?. Bedanya halus tapi berguna: -(으)ㄹ까요? mengajak kita berdua melakukan sesuatu, sedangkan -(으)ㄹ래요? menanyakan maumu.',
      table: {
        caption: 'Pembentukannya sama persis dengan -(으)ㄹ 거예요 dan -(으)ㄹ까요?.',
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['먹다', '먹', '먹을래요?', 'mau makan?'],
          ['가다', '가', '갈래요?', 'mau pergi?'],
          ['마시다', '마시', '마실래요?', 'mau minum?'],
          ['시키다', '시키', '시킬래요?', 'mau pesan?'],
        ],
      },
      examples: [
        { ko: '뭐 먹을래요?', id: 'Mau makan apa?' },
        {
          ko: '저는 비빔밥 먹을래요.',
          id: 'Saya mau bibimbap.',
          note: 'Tanpa tanda tanya, bentuk ini menjadi pernyataan keinginanmu sendiri.',
        },
        {
          ko: '같이 점심 먹을까요?',
          id: 'Bagaimana kalau kita makan siang bersama?',
          note: 'Bandingkan: ini mengajak, bukan menanyakan maunya apa.',
        },
      ],
      more:
        'Kepada atasan atau orang yang jauh lebih tua, -(으)ㄹ래요? bisa terdengar terlalu santai. Bentuk yang lebih aman adalah 뭐 드시겠어요? atau 뭐 드실래요? — keduanya memakai 드시다, bentuk hormat dari 먹다. Pelayan restoran pun akan memakai bentuk itu kepadamu.',
    },
    {
      title: 'Angka di meja makan',
      body:
        'Satu kalimat pesanan bisa memuat dua sistem angka sekaligus. Yang menentukan bukan besar kecilnya angka, melainkan penghitungnya.',
      table: {
        caption: '인분 adalah satu-satunya penghitung umum di restoran yang memakai angka Sino-Korea.',
        columns: ['Penghitung', 'Sistem angka', 'Contoh', 'Arti'],
        rows: [
          ['인분 (porsi)', 'Sino', '이인분', 'dua porsi'],
          ['개 (buah)', 'Asli', '두 개', 'dua buah'],
          ['명 / 분 (orang)', 'Asli', '두 명 · 세 분', 'dua orang · tiga orang (hormat)'],
          ['병 (botol)', 'Asli', '소주 한 병', 'satu botol soju'],
          ['그릇 (mangkuk)', 'Asli', '비빔밥 한 그릇', 'satu mangkuk bibimbap'],
          ['원 (uang)', 'Sino', '만 오천 원', '15.000 won'],
        ],
      },
      examples: [
        {
          ko: '삼겹살 삼인분하고 소주 두 병 주세요.',
          id: 'Tolong tiga porsi samgyeopsal dan dua botol soju.',
          note: '삼인분 memakai angka Sino, 두 병 memakai angka asli — dalam satu kalimat.',
        },
      ],
      mistakes: [
        {
          wrong: '삼겹살 두 인분 주세요.',
          right: '삼겹살 이인분 주세요.',
          why: '인분 selalu berpasangan dengan angka Sino-Korea.',
        },
      ],
    },
    {
      title: '좀 더 — minta tambah',
      form: 'kata benda + 좀 더 + 주세요',
      body:
        'Ini kalimat yang paling sering kamu pakai di restoran Korea, karena lauk pendamping (반찬) umumnya boleh ditambah tanpa biaya. 더 berarti "lebih", dan 좀 melembutkan permintaannya.',
      examples: [
        { ko: '반찬 좀 더 주세요.', id: 'Tolong tambah lauknya.' },
        { ko: '물 좀 더 주세요.', id: 'Tolong tambah airnya.' },
        { ko: '김치 좀 더 주시겠어요?', id: 'Bisakah tambah kimchinya?', note: 'Versi lebih halus.' },
      ],
      more:
        'Untuk minuman di kafe, istilah yang dipakai adalah 리필: 리필 돼요? ("bisa isi ulang?"). Dan kalau kamu ingin menolak tambahan, cukup 아니요, 괜찮아요 — "tidak, sudah cukup".',
    },
    {
      title: 'Ungkapan tetap di meja makan',
      body:
        'Enam ungkapan ini terdengar di hampir setiap restoran Korea. Hafalkan sebagai satu kesatuan — membedah tata bahasanya tidak banyak menolong.',
      table: {
        columns: ['Ungkapan', 'Siapa yang bilang', 'Kapan'],
        rows: [
          ['어서 오세요', 'Pelayan', 'Saat kamu masuk'],
          ['몇 분이세요?', 'Pelayan', 'Menanyakan jumlah orang'],
          ['여기요 / 저기요', 'Kamu', 'Memanggil pelayan'],
          ['맛있게 드세요', 'Pelayan', 'Saat makanan diantar'],
          ['잘 먹겠습니다', 'Kamu', 'Sebelum mulai makan'],
          ['잘 먹었습니다', 'Kamu', 'Setelah selesai makan'],
        ],
      },
      examples: [
        { ko: '저기요, 메뉴판 좀 주세요.', id: 'Permisi, tolong buku menunya.' },
        { ko: '잘 먹었습니다!', id: 'Terima kasih, makanannya enak!' },
      ],
      more:
        '잘 먹겠습니다 dan 잘 먹었습니다 paling terasa penting kalau ada yang mentraktirmu — keduanya berfungsi sebagai ucapan terima kasih atas makanannya. Kalau kamu makan sendirian, tidak ada yang mengharapkanmu mengucapkannya.',
    },
  ],

  dialogue: {
    title: 'Makan siang berdua',
    situation: 'Vio dan Sujin masuk ke sebuah rumah makan dekat kantor.',
    lines: [
      { speaker: '직원', ko: '어서 오세요. 몇 분이세요?', id: 'Selamat datang. Berapa orang?' },
      {
        speaker: '비오',
        ko: '두 명이요.',
        id: 'Dua orang.',
        note: '명 memakai angka asli (두), dan 요 menjaga kesopanan pada jawaban sependek ini.',
      },
      {
        speaker: '직원',
        ko: '이쪽으로 앉으세요. 메뉴판 여기 있습니다.',
        id: 'Silakan duduk di sebelah sini. Ini buku menunya.',
      },
      {
        speaker: '수진',
        ko: '비오 씨, 뭐 먹을래요?',
        id: 'Vio, mau makan apa?',
        note: 'Menanyakan keinginan lawan bicara — bukan mengajak.',
      },
      { speaker: '비오', ko: '저는 비빔밥 먹을래요. 수진 씨는요?', id: 'Saya mau bibimbap. Kalau Sujin?' },
      {
        speaker: '수진',
        ko: '저는 김치찌개요. 저기요! 비빔밥 하나하고 김치찌개 하나 주세요.',
        id: 'Saya kimchi jjigae. Permisi! Tolong satu bibimbap dan satu kimchi jjigae.',
        note: '저기요 untuk memanggil pelayan; 하나 karena dihitung sebagai benda biasa.',
      },
      { speaker: '직원', ko: '네, 잠시만요. 맛있게 드세요.', id: 'Baik, sebentar ya. Selamat menikmati.' },
      {
        speaker: '비오',
        ko: '잘 먹겠습니다. 저기요, 반찬 좀 더 주세요.',
        id: 'Terima kasih makanannya. Permisi, tolong tambah lauknya.',
      },
      {
        speaker: '수진',
        ko: '계산은 따로따로 해 주세요.',
        id: 'Pembayarannya tolong dipisah.',
        note: '계산은 memakai 은 karena "soal pembayaran" diangkat sebagai topik baru.',
      },
    ],
    politeness:
      'Perhatikan ketimpangannya: pelayan memakai bentuk hormat (어서 오세요, 몇 분이세요?, 앉으세요, 드세요), sedangkan kamu sebagai pelanggan cukup menjawab dengan 해요체 biasa. Kamu tidak perlu membalas dengan bentuk hormat — itu justru akan terdengar aneh.',
  },

  passage: {
    title: '한국 식당 문화',
    intro: 'Dua kebiasaan di restoran Korea yang sering mengejutkan orang asing.',
    sentences: [
      { ko: '한국 식당에는 반찬이 많이 나와요.', id: 'Di restoran Korea, lauk pendampingnya keluar banyak.' },
      { ko: '반찬은 보통 무료예요.', id: 'Lauknya biasanya gratis.' },
      { ko: '더 먹고 싶으면 직원한테 부탁하세요.', id: 'Kalau mau tambah, mintalah ke pelayan.' },
      {
        ko: '그리고 한국 사람들은 보통 한 사람이 다 계산해요.',
        id: 'Dan orang Korea biasanya satu orang yang membayar semuanya.',
      },
      { ko: '다음에는 다른 사람이 사요.', id: 'Lain kali orang lain yang traktir.' },
      { ko: '하지만 요즘에는 따로따로 계산도 많이 해요.', id: 'Tapi akhir-akhir ini banyak juga yang bayar terpisah.' },
    ],
    vocabInContext: [
      { ko: '나오다', id: 'keluar, disajikan' },
      { ko: '무료', id: 'gratis' },
      { ko: '부탁하다', id: 'meminta tolong' },
      { ko: '다른', id: 'lain, yang lain' },
    ],
    analysis: [
      '반찬이 많이 나와요 — 나오다 ("keluar") adalah kata kerja yang dipakai untuk makanan yang disajikan, bukan 오다 biasa.',
      '더 먹고 싶으면 menggabungkan -고 싶다 (Pelajaran 3.3) dengan -(으)면 ("kalau"), yang dibahas tuntas di Pelajaran 5.6.',
      '직원한테 부탁하세요 — penerima berupa orang memakai 한테 (Pelajaran 2.8), lalu -(으)세요 mengubahnya menjadi saran sopan.',
      '한 사람이 다 계산해요 memakai 이 karena kalimat ini menjawab "siapa yang membayar" — persis aturan di Pelajaran 2.2.',
      '요즘에는 memakai 에 (waktu) + 는 (kontras dengan kebiasaan lama), pola bertumpuk dari Pelajaran 2.1.',
    ],
  },

  exercises: [
    {
      id: 'm5l3-e1',
      kind: 'particle',
      prompt: 'Pilih bentuk jumlah yang tepat.',
      context: 'Kamu memesan samgyeopsal untuk dua orang.',
      sentence: '삼겹살 ___ 주세요.',
      translation: 'Tolong dua porsi samgyeopsal.',
      options: ['이인분', '두 인분', '두 개', '이 개'],
      answer: '이인분',
      explain:
        '인분 ("porsi") selalu memakai angka SINO-Korea, jadi bentuknya 이인분. Ini perkecualian dari aturan umum bahwa jumlah benda memakai angka asli.',
      whyNot: {
        '두 인분': 'Angka asli (두) tidak pernah berpasangan dengan 인분. Ini kesalahan paling umum.',
        '두 개': '개 memang memakai angka asli, tetapi 개 untuk benda terhitung — bukan porsi daging.',
        '이 개': 'Dua kesalahan sekaligus: 개 memakai angka asli, bukan Sino.',
      },
      tags: ['인분'],
    },
    {
      id: 'm5l3-e2',
      kind: 'fill',
      prompt: 'Lengkapi permintaan ini.',
      context: 'Lauknya sudah habis dan kamu mau tambah.',
      sentence: '반찬 좀 ___ 주세요.',
      translation: 'Tolong tambah lauknya.',
      answers: ['더'],
      explain:
        '더 berarti "lebih". Digabung dengan 좀, ia menjadi permintaan halus yang akan sering kamu pakai di restoran Korea — karena 반찬 umumnya boleh ditambah gratis.',
      tags: ['좀 더 주세요'],
    },
    {
      id: 'm5l3-e3',
      kind: 'build',
      prompt: 'Susun pesanan ini.',
      translation: 'Tolong dua porsi samgyeopsal dan satu kimchi jjigae.',
      tiles: ['삼겹살', '이인분하고', '김치찌개', '하나', '주세요'],
      distractors: ['두 인분', '한 개'],
      answers: ['삼겹살 이인분하고 김치찌개 하나 주세요'],
      explain:
        'Dua sistem angka dalam satu kalimat: 이인분 memakai angka Sino karena penghitungnya 인분, sedangkan 하나 memakai angka asli karena kimchi jjigae dihitung sebagai benda biasa.',
      parts: [
        { part: '삼겹살', role: 'pesanan pertama' },
        { part: '이인분하고', role: 'dua porsi + penyambung 하고' },
        { part: '김치찌개', role: 'pesanan kedua' },
        { part: '하나', role: 'satu (angka asli, tanpa penghitung)' },
        { part: '주세요', role: '"tolong berikan", menutup pesanan' },
      ],
      tags: ['인분'],
    },
    {
      id: 'm5l3-e4',
      kind: 'match',
      prompt: 'Pasangkan ungkapan dengan situasinya.',
      pairs: [
        { left: '어서 오세요', right: 'pelayan menyambut kamu masuk' },
        { left: '저기요', right: 'kamu memanggil pelayan' },
        { left: '맛있게 드세요', right: 'pelayan mengantar makanan' },
        { left: '잘 먹겠습니다', right: 'kamu sebelum mulai makan' },
        { left: '잘 먹었습니다', right: 'kamu setelah selesai makan' },
        { left: '계산이요', right: 'kamu mau membayar' },
      ],
      explain:
        'Tiga diucapkan pelayan, tiga diucapkan kamu. Mengenali siapa yang bicara membantumu tidak salah pakai — misalnya 맛있게 드세요 tidak pernah diucapkan pelanggan kepada pelayan.',
      tags: ['ungkapan restoran'],
    },
    {
      id: 'm5l3-e5',
      kind: 'correct',
      prompt: 'Perbaiki jumlahnya.',
      sentence: '삼겹살 두 인분 주세요.',
      translation: 'Tolong dua porsi samgyeopsal.',
      answers: ['삼겹살 이인분 주세요'],
      explain:
        '인분 memakai angka Sino-Korea. 두 adalah angka asli yang dipakai untuk 개, 명, 병, dan 그릇 — tetapi tidak untuk 인분.',
      tags: ['인분'],
    },
    {
      id: 'm5l3-e6',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Tolong dihitung terpisah.',
      answers: ['따로따로 계산해 주세요', '계산은 따로따로 해 주세요', '따로따로 해 주세요'],
      explain:
        'Permintaan tindakan memakai bentuk 해요체 tanpa 요 lalu 주세요: 계산해요 → 계산해 → 계산해 주세요.',
      hint: 'Mulai dari bentuk 해요체 kata kerjanya.',
      tags: ['좀 더 주세요'],
    },
    {
      id: 'm5l3-e7',
      kind: 'mc',
      prompt: 'Dari bacaan 한국 식당 문화, siapa yang biasanya membayar?',
      options: [
        'Satu orang membayar semuanya, lalu lain kali gantian.',
        'Selalu dibagi rata sejak awal.',
        'Pelayan yang menentukan.',
        'Yang paling muda selalu membayar.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat 한 사람이 다 계산해요 disusul 다음에는 다른 사람이 사요 — satu orang membayar, lalu bergantian di kesempatan berikutnya. Bacaan juga menyebut bahwa belakangan ini bayar terpisah makin umum.',
      whyNot: {
        'Selalu dibagi rata sejak awal.':
          'Justru itu disebut sebagai kebiasaan baru (요즘에는), bukan kebiasaan umumnya.',
        'Pelayan yang menentukan.': 'Tidak disebut sama sekali dalam bacaan.',
        'Yang paling muda selalu membayar.': 'Bacaan tidak menyinggung soal usia.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm5l3-q1',
      kind: 'mc',
      prompt: 'Manakah pesanan yang angkanya SEMUA benar?',
      options: [
        '삼겹살 이인분하고 소주 두 병 주세요.',
        '삼겹살 두 인분하고 소주 이 병 주세요.',
        '삼겹살 이인분하고 소주 이 병 주세요.',
        '삼겹살 두 인분하고 소주 두 병 주세요.',
      ],
      answerIndex: 0,
      explain:
        '인분 memakai angka Sino (이인분), sedangkan 병 memakai angka asli (두 병). Hanya pilihan pertama yang memakai keduanya dengan benar.',
      tags: ['인분'],
    },
    {
      id: 'm5l3-q2',
      kind: 'fill',
      prompt: 'Ubah 마시다 menjadi bentuk "mau …?".',
      sentence: '뭐 ___?',
      translation: 'Mau minum apa?',
      answers: ['마실래요'],
      explain:
        'Batang 마시 berakhir vokal, jadi memakai ㄹ래요 → 마실래요. Bentuknya dibangun dari batang, sama seperti -(으)ㄹ 거예요 dan -(으)ㄹ까요?.',
      tags: ['-(으)ㄹ래요?'],
    },
    {
      id: 'm5l3-q3',
      kind: 'mc',
      prompt: 'Apa bedanya 뭐 먹을래요? dan 같이 먹을까요?',
      options: [
        '먹을래요? menanyakan maumu apa; 먹을까요? mengajak kita makan bersama.',
        '먹을래요? lebih sopan daripada 먹을까요?',
        '먹을래요? bentuk lampau, 먹을까요? bentuk sekarang.',
        'Keduanya artinya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '-(으)ㄹ래요? menanyakan KEINGINAN lawan bicara, jadi cocok saat memilih menu. -(으)ㄹ까요? mengajak melakukan sesuatu BERSAMA. Keduanya setara dari segi kesopanan.',
      whyNot: {
        '먹을래요? lebih sopan daripada 먹을까요?': 'Justru -(으)ㄹ래요? sedikit lebih santai.',
        '먹을래요? bentuk lampau, 먹을까요? bentuk sekarang.': 'Keduanya menunjuk ke masa depan.',
        'Keduanya artinya sama persis.':
          'Satu menanyakan maumu, satu mengajak — bedanya terasa dalam percakapan nyata.',
      },
      tags: ['-(으)ㄹ래요?'],
    },
  ],

  summary: {
    points: [
      '인분 ("porsi") memakai angka SINO-Korea: 일인분, 이인분, 삼인분 — berbeda dari penghitung lain.',
      '개, 명, 병, 그릇 tetap memakai angka asli: 두 개, 두 명, 한 병.',
      '-(으)ㄹ래요? menanyakan keinginan lawan bicara; -(으)ㄹ까요? mengajak bersama.',
      '좀 더 + 주세요 untuk minta tambah; 반찬 di Korea umumnya gratis.',
      'Pelayan memakai bentuk hormat kepadamu, tetapi kamu cukup menjawab dengan 해요체.',
      '따로따로 계산해 주세요 untuk bayar terpisah; 같이 계산할게요 kalau kamu yang mentraktir.',
    ],
    pitfalls: [
      {
        wrong: '삼겹살 두 인분 주세요.',
        right: '삼겹살 이인분 주세요.',
        why: '인분 selalu berpasangan dengan angka Sino-Korea.',
      },
      {
        wrong: '계산하 주세요.',
        right: '계산해 주세요.',
        why: 'Yang dipakai adalah bentuk 해요체 tanpa 요 (계산해), bukan batang kata.',
      },
      {
        wrong: '(kepada pelayan) 맛있게 드세요.',
        right: '잘 먹겠습니다.',
        why: '맛있게 드세요 diucapkan oleh yang menyajikan, bukan yang makan.',
      },
    ],
  },
}
