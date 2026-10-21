import type { Lesson } from '../../types/curriculum'

export const m5l4: Lesson = {
  id: 'm5-l4',
  moduleId: 'm5',
  number: '5.4',
  title: 'Belanja di minimarket',
  subtitle: 'Menjawab tawaran petugas tanpa panik',
  objective:
    'Setelah pelajaran ini kamu bisa menangani seluruh percakapan di kasir 편의점 — memahami tawaran petugas, menolak dengan sopan, dan menyebut cara bayar.',
  focus: ['-아/어 드릴까요?', '필요하다', '괜찮아요'],
  estimatedMinutes: 15,

  coreExamples: [
    {
      ko: '봉투 필요하세요?',
      id: 'Butuh kantong plastik?',
      highlight: ['필요하세요'],
      highlightKind: 'ending',
    },
    { ko: '아니요, 괜찮아요.', id: 'Tidak, tidak usah.', highlight: ['괜찮아요'] },
    {
      ko: '도시락 데워 드릴까요?',
      id: 'Mau saya hangatkan bekalnya?',
      highlight: ['데워 드릴까요'],
      highlightKind: 'ending',
    },
    { ko: '네, 데워 주세요.', id: 'Ya, tolong dihangatkan.', highlight: ['주세요'], highlightKind: 'ending' },
    { ko: '카드로 할게요.', id: 'Saya bayar pakai kartu.', highlight: ['로'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '도시락 데워 드릴까요?',
        id: 'Mau saya hangatkan bekalnya?',
        highlight: ['데워 드릴까요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '도시락', formula: '—', meaning: 'Kotak bekal siap makan' },
        {
          unit: '데워',
          formula: '데우다 → 데워요 → 데워',
          meaning: 'Menghangatkan; bentuk 해요체 tanpa 요',
        },
        {
          unit: '드릴까요?',
          formula: '드리다 + (으)ㄹ까요?',
          meaning: '"Perlukah saya lakukan untuk Anda?"',
        },
      ],
      why:
        '드리다 adalah bentuk HORMAT dari 주다, dan dipakai saat KAMU melakukan sesuatu untuk orang yang dihormati — termasuk saat pegawai melayani pelanggan. Jadi -아/어 드릴까요? berarti "perlukah saya …-kan untuk Anda?". Kamu akan mendengar pola ini terus-menerus di toko, tetapi sebagai pelanggan kamu hampir tidak pernah memakainya sendiri. Tugasmu cukup mengenalinya dan menjawab.',
      swaps: [
        {
          alt: '도시락 데워 줄까요?',
          effect:
            'Versi biasa tanpa bentuk hormat. Wajar antar teman sebaya, tetapi terdengar terlalu akrab kalau diucapkan pegawai kepada pelanggan.',
        },
        {
          alt: '도시락 데워 주세요.',
          effect:
            'Ini yang KAMU ucapkan kalau pegawainya tidak menawarkan lebih dulu: "tolong dihangatkan".',
        },
      ],
    },
    {
      sentence: {
        ko: '봉투 필요하세요?',
        id: 'Butuh kantong plastik?',
        highlight: ['필요하세요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '봉투', formula: '—', meaning: 'Kantong plastik; partikel 가 dilepas karena kalimatnya pendek' },
        {
          unit: '필요하세요?',
          formula: '필요하다 + (으)세요',
          meaning: '"Apakah Anda membutuhkan?"',
        },
      ],
      why:
        'Dua hal penting di sini. Pertama, 필요하다 adalah kata SIFAT, jadi hal yang dibutuhkan berperan sebagai subjek dengan 이/가 — bentuk lengkapnya 봉투가 필요하세요?, bukan 봉투를. Kedua, akhiran -(으)세요 di sini BUKAN perintah, melainkan bentuk hormat dari Pelajaran 2.8 — pegawai sedang menghormatimu sebagai pelanggan, bukan menyuruhmu.',
      swaps: [
        {
          alt: '봉투 필요해요?',
          effect:
            'Tanpa bentuk hormat. Secara tata bahasa benar, tetapi terdengar terlalu datar diucapkan pegawai kepada pelanggan.',
        },
        {
          alt: '봉투 주세요.',
          effect: 'Kalau kamu yang meminta lebih dulu: "tolong kantongnya".',
        },
      ],
    },
  ],

  vocab: [
    { ko: '편의점', id: 'minimarket', pos: 'kata benda' },
    { ko: '봉투', id: 'kantong plastik', pos: 'kata benda' },
    { ko: '도시락', id: 'kotak bekal', pos: 'kata benda' },
    { ko: '삼각김밥', id: 'nasi kepal segitiga', pos: 'kata benda' },
    { ko: '컵라면', id: 'mi cup', pos: 'kata benda' },
    {
      ko: '데우다',
      id: 'menghangatkan',
      pos: 'kata kerja',
      note: '해요체: 데워요.',
      example: { ko: '데워 주세요.', id: 'Tolong dihangatkan.' },
    },
    {
      ko: '필요하다',
      id: 'butuh, perlu',
      pos: 'kata sifat',
      note: 'Subjeknya memakai 이/가: 봉투가 필요해요.',
    },
    { ko: '영수증', id: 'struk', pos: 'kata benda' },
    { ko: '현금', id: 'uang tunai', pos: 'kata benda' },
    { ko: '괜찮아요', id: 'tidak usah / tidak apa-apa', pos: 'ungkapan' },
    { ko: '전자레인지', id: 'microwave', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-아/어 드릴까요? — tawaran dari pegawai',
      form: 'bentuk 해요체 − 요 + 드릴까요?',
      body:
        'Pola ini dibentuk persis seperti -아/어 주세요 dari Pelajaran 5.2, hanya 주세요 diganti 드릴까요?. Artinya "perlukah saya …-kan untuk Anda?" dan hampir selalu diucapkan oleh pihak yang melayani.',
      table: {
        caption: 'Semua dibentuk dari bentuk 해요체, bukan dari batang kata.',
        columns: ['Kata kerja', '해요체', 'Tawaran', 'Arti'],
        rows: [
          ['데우다', '데워요', '데워 드릴까요?', 'Perlu dihangatkan?'],
          ['넣다', '넣어요', '넣어 드릴까요?', 'Perlu dimasukkan?'],
          ['포장하다', '포장해요', '포장해 드릴까요?', 'Perlu dibungkus?'],
          ['빼다', '빼요', '빼 드릴까요?', 'Perlu dikeluarkan?'],
        ],
      },
      examples: [
        { ko: '봉투에 넣어 드릴까요?', id: 'Mau saya masukkan ke kantong?' },
        { ko: '영수증 드릴까요?', id: 'Mau struknya?', note: 'Tanpa kata kerja lain — 드리다 berdiri sendiri sebagai "memberikan".' },
      ],
      more:
        'Hubungannya dengan Pelajaran 2.8: 드리다 adalah pasangan rendah hati dari 주다, sama seperti 께 adalah pasangan hormat dari 한테. Aturannya konsisten — kalau penerimanya dihormati, kata kerjanya ikut berubah. Karena itu pegawai berkata 드릴까요?, sedangkan kamu berkata 주세요.',
    },
    {
      title: '괜찮아요 — cara menolak yang paling berguna',
      body:
        'Ini mungkin satu kata paling berguna di seluruh pelajaran ini. 괜찮아요 secara harfiah berarti "tidak apa-apa", tetapi sebagai JAWABAN atas tawaran, artinya "tidak usah, terima kasih". Tanpa mengetahui ini, kamu bisa tidak sengaja menerima semua yang ditawarkan.',
      table: {
        columns: ['Pegawai menawarkan', 'Kalau mau', 'Kalau tidak mau'],
        rows: [
          ['봉투 필요하세요?', '네, 주세요.', '아니요, 괜찮아요.'],
          ['데워 드릴까요?', '네, 데워 주세요.', '아니요, 괜찮아요.'],
          ['영수증 드릴까요?', '네, 주세요.', '아니요, 괜찮아요.'],
          ['포인트 적립하시겠어요?', '네, 할게요.', '아니요, 괜찮아요.'],
        ],
      },
      examples: [
        {
          ko: 'A: 봉투 필요하세요?  B: 아니요, 괜찮아요. 가방 있어요.',
          id: 'A: Butuh kantong?  B: Tidak usah. Saya bawa tas.',
        },
      ],
      mistakes: [
        {
          wrong: '(menolak tawaran) 아니요, 안 괜찮아요.',
          right: '아니요, 괜찮아요.',
          why: '안 괜찮아요 berarti "saya TIDAK baik-baik saja" — justru kebalikannya. Untuk menolak, 괜찮아요 dipakai apa adanya.',
        },
      ],
      more:
        'Perhatikan bahwa 괜찮아요 punya dua makna yang berlawanan arah tergantung konteks. Sebagai jawaban atas 미안해요, artinya "tidak apa-apa, santai". Sebagai jawaban atas tawaran, artinya "tidak usah". Nada suara dan situasinya yang membedakan — dan orang Korea tidak pernah bingung karena konteksnya selalu jelas.',
    },
    {
      title: '필요하다 memakai 이/가',
      form: 'kata benda + 이/가 + 필요해요',
      body:
        'Kata ini masuk kelompok yang sama dengan 있다, 없다, dan 좋다 dari Pelajaran 2.3: meskipun terjemahan Indonesianya terasa seperti punya objek ("saya BUTUH kantong"), logika Korea adalah "kantong itu diperlukan".',
      examples: [
        { ko: '봉투가 필요해요.', id: 'Saya butuh kantong.', highlight: ['가'] },
        { ko: '시간이 필요해요.', id: 'Saya butuh waktu.', highlight: ['이'] },
        { ko: '도움이 필요하세요?', id: 'Butuh bantuan?', highlight: ['이'] },
      ],
      mistakes: [
        {
          wrong: '봉투를 필요해요.',
          right: '봉투가 필요해요.',
          why: '필요하다 adalah kata sifat dan tidak pernah memakai 을/를.',
        },
      ],
      more:
        'Dalam percakapan cepat seperti di kasir, partikelnya sering dilepas sama sekali: 봉투 필요하세요?. Itu wajar. Tetapi begitu kamu menulis kalimat lengkap, partikel yang benar adalah 이/가.',
    },
    {
      title: 'Menyebut cara bayar',
      form: 'kata benda + (으)로 + 할게요',
      body:
        'Ingat (으)로 dari Pelajaran 2.9 yang menandai alat dan cara? Inilah pemakaiannya yang paling sering dalam hidup sehari-hari di Korea.',
      table: {
        columns: ['Cara bayar', 'Kalimat', 'Catatan bentuk'],
        rows: [
          ['Kartu', '카드로 할게요.', '카드 berakhir vokal → 로'],
          ['Tunai', '현금으로 할게요.', '현금 berakhir ㅁ → 으로'],
          ['Transfer', '계좌이체로 할게요.', 'berakhir vokal → 로'],
        ],
      },
      examples: [
        { ko: '카드로 계산할게요.', id: 'Saya bayar pakai kartu.' },
        { ko: '현금으로 할게요.', id: 'Saya bayar tunai.' },
      ],
      more:
        'Memakai -(으)ㄹ게요 di sini tepat karena kamu sedang MENGUMUMKAN keputusanmu kepada pegawai — bukan bertanya. Bandingkan dengan -(으)ㄹ까요? yang justru meminta pendapat.',
    },
  ],

  dialogue: {
    title: 'Di kasir 편의점',
    situation: 'Vio membeli bekal dan minuman di minimarket dekat rumah.',
    lines: [
      { speaker: '직원', ko: '어서 오세요.', id: 'Selamat datang.' },
      { speaker: '비오', ko: '이거 주세요.', id: 'Ini saja.' },
      {
        speaker: '직원',
        ko: '네. 도시락 데워 드릴까요?',
        id: 'Baik. Bekalnya mau dihangatkan?',
        note: 'Pegawai memakai 드릴까요? karena ia yang melayani.',
      },
      { speaker: '비오', ko: '네, 데워 주세요.', id: 'Ya, tolong dihangatkan.' },
      {
        speaker: '직원',
        ko: '봉투 필요하세요? 봉투는 백 원이에요.',
        id: 'Butuh kantong? Kantongnya seratus won.',
        note: '백 원 memakai angka Sino karena menyebut uang.',
      },
      {
        speaker: '비오',
        ko: '아니요, 괜찮아요. 가방 있어요.',
        id: 'Tidak usah. Saya bawa tas.',
        note: '괜찮아요 di sini berarti menolak, bukan "tidak apa-apa".',
      },
      { speaker: '직원', ko: '포인트 적립하시겠어요?', id: 'Mau kumpulkan poin?' },
      { speaker: '비오', ko: '아니요, 괜찮아요.', id: 'Tidak usah.' },
      { speaker: '직원', ko: '모두 팔천오백 원입니다.', id: 'Totalnya delapan ribu lima ratus won.' },
      { speaker: '비오', ko: '카드로 할게요.', id: 'Pakai kartu.' },
      { speaker: '직원', ko: '네, 여기 영수증이요. 안녕히 가세요.', id: 'Baik, ini struknya. Selamat jalan.' },
    ],
    politeness:
      'Seluruh tawaran pegawai memakai bentuk hormat: 필요하세요, 드릴까요, 적립하시겠어요. Kamu cukup menjawab dengan 해요체 pendek. Perhatikan juga penutupnya — pegawai berkata 안녕히 가세요 karena KAMU yang pergi, persis aturan di Pelajaran 5.1.',
  },

  passage: {
    title: '한국의 편의점',
    intro: 'Kenapa minimarket di Korea terasa seperti kantin mini.',
    sentences: [
      { ko: '한국 편의점은 보통 이십사 시간 문을 열어요.', id: 'Minimarket di Korea biasanya buka 24 jam.' },
      { ko: '도시락, 삼각김밥, 컵라면을 팔아요.', id: 'Mereka menjual bekal, nasi kepal segitiga, dan mi cup.' },
      { ko: '직원이 도시락을 데워 줘요.', id: 'Petugasnya menghangatkan bekal untuk kita.' },
      { ko: '가게 안에 전자레인지하고 뜨거운 물이 있어요.', id: 'Di dalam toko ada microwave dan air panas.' },
      { ko: '그래서 컵라면을 바로 먹을 수 있어요.', id: 'Jadi mi cup bisa langsung dimakan.' },
      { ko: '저는 바쁜 날에 편의점에서 점심을 자주 먹어요.', id: 'Saya sering makan siang di minimarket kalau sedang sibuk.' },
    ],
    vocabInContext: [
      { ko: '문을 열다', id: 'buka (toko)' },
      { ko: '팔다', id: 'menjual' },
      { ko: '뜨겁다', id: 'panas (benda)' },
      { ko: '바로', id: 'langsung' },
    ],
    analysis: [
      '이십사 시간 memakai angka Sino karena menyatakan LAMA waktu (24 jam), bukan jam berapa. Kalau menyebut pukul, barulah dipakai angka asli: 네 시.',
      '데워 줘요 memakai 주다 biasa — bukan 드리다 — karena kalimat ini bercerita tentang pegawai secara umum, bukan diucapkan langsung kepada pelanggan.',
      '전자레인지하고 뜨거운 물이 있어요 — 하고 menyambung dua kata benda, dan partikel subjek 이 hanya muncul sekali di kata terakhir (Pelajaran 2.7).',
      '먹을 수 있어요 adalah pola kemampuan dari Pelajaran 3.3: batang 먹 + 을 수 있다.',
      '바쁜 날에 — kata sifat 바쁘다 berubah menjadi 바쁜 saat menerangkan kata benda 날 ("hari").',
    ],
  },

  exercises: [
    {
      id: 'm5l4-e1',
      kind: 'mc',
      prompt: 'Pegawai bertanya 봉투 필요하세요? dan kamu TIDAK butuh kantong. Apa jawabannya?',
      context: 'Kamu sudah membawa tas sendiri.',
      options: ['아니요, 괜찮아요.', '아니요, 안 괜찮아요.', '네, 괜찮아요.', '아니요, 필요해요.'],
      answerIndex: 0,
      explain:
        '괜찮아요 sebagai jawaban atas tawaran berarti "tidak usah, terima kasih". Inilah cara menolak paling lazim dan paling sopan di Korea.',
      whyNot: {
        '아니요, 안 괜찮아요.': '안 괜찮아요 berarti "saya tidak baik-baik saja" — justru kebalikannya.',
        '네, 괜찮아요.': '네 berarti "ya", jadi jawabannya bertentangan dengan dirinya sendiri.',
        '아니요, 필요해요.': 'Juga bertentangan: 아니요 menolak, tetapi 필요해요 berarti "saya butuh".',
      },
      tags: ['괜찮아요'],
    },
    {
      id: 'm5l4-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: '필요하다 adalah kata sifat, seperti 좋다 dan 있다.',
      sentence: '봉투___ 필요해요.',
      translation: 'Saya butuh kantong plastik.',
      options: ['가', '를', '는', '로'],
      answer: '가',
      explain:
        '필요하다 adalah kata SIFAT, jadi hal yang dibutuhkan berperan sebagai subjek dengan 이/가. 봉투 berakhir vokal, maka bentuknya 가.',
      whyNot: {
        를: 'Terpengaruh kata "butuh" dalam bahasa Indonesia yang terasa punya objek. 필요하다 tidak pernah memakai 을/를.',
        는: '봉투는 필요해요 benar, tetapi menambahkan nuansa membandingkan — "kalau kantong sih butuh".',
        로: '로 menandai alat atau cara, bukan hal yang dibutuhkan.',
      },
      tags: ['필요하다'],
    },
    {
      id: 'm5l4-e3',
      kind: 'fill',
      prompt: 'Ubah 데우다 menjadi tawaran dari pegawai.',
      context: 'Pegawai menawarkan untuk menghangatkan bekalmu.',
      sentence: '도시락 ___?',
      translation: 'Mau saya hangatkan bekalnya?',
      answers: ['데워 드릴까요', '데워드릴까요'],
      explain:
        'Pola -아/어 드릴까요? dibentuk dari 해요체 tanpa 요: 데워요 → 데워 → 데워 드릴까요?. 드리다 adalah bentuk rendah hati dari 주다.',
      hint: 'Mulai dari bentuk 해요체: 데워요.',
      tags: ['-아/어 드릴까요?'],
    },
    {
      id: 'm5l4-e4',
      kind: 'match',
      prompt: 'Pasangkan tawaran pegawai dengan artinya.',
      pairs: [
        { left: '봉투 필요하세요?', right: 'Butuh kantong plastik?' },
        { left: '데워 드릴까요?', right: 'Mau dihangatkan?' },
        { left: '영수증 드릴까요?', right: 'Mau struknya?' },
        { left: '포인트 적립하시겠어요?', right: 'Mau kumpulkan poin?' },
        { left: '봉투에 넣어 드릴까요?', right: 'Mau dimasukkan ke kantong?' },
      ],
      explain:
        'Semuanya memakai bentuk hormat karena pegawai melayani pelanggan. Kamu cukup menjawab 네, 주세요 atau 아니요, 괜찮아요 — tidak perlu membalas dengan bentuk hormat.',
      tags: ['-아/어 드릴까요?'],
    },
    {
      id: 'm5l4-e5',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '저는 봉투를 필요해요.',
      translation: 'Saya butuh kantong plastik.',
      answers: ['저는 봉투가 필요해요', '봉투가 필요해요'],
      explain:
        '필요하다 adalah kata sifat, jadi yang dibutuhkan berperan sebagai subjek dengan 이/가 — sama seperti 시간이 없어요 dan 날씨가 좋아요.',
      tags: ['필요하다'],
    },
    {
      id: 'm5l4-e6',
      kind: 'build',
      prompt: 'Susun jawabanmu di kasir.',
      translation: 'Tidak usah. Saya bayar pakai kartu.',
      tiles: ['아니요,', '괜찮아요.', '카드로', '할게요'],
      distractors: ['카드를', '할까요'],
      answers: ['아니요, 괜찮아요. 카드로 할게요'],
      explain:
        '괜찮아요 menolak tawaran sebelumnya. 카드로 memakai (으)로 karena menyatakan cara, dan -(으)ㄹ게요 dipakai karena kamu mengumumkan keputusanmu sendiri.',
      parts: [
        { part: '아니요,', role: 'menolak' },
        { part: '괜찮아요.', role: '"tidak usah, terima kasih"' },
        { part: '카드로', role: 'cara bayar dengan (으)로' },
        { part: '할게요', role: 'keputusan sendiri dengan -(으)ㄹ게요' },
      ],
      tags: ['괜찮아요'],
    },
    {
      id: 'm5l4-e7',
      kind: 'mc',
      prompt: 'Dari bacaan 한국의 편의점, kenapa mi cup bisa langsung dimakan di toko?',
      options: [
        'Karena di dalam toko ada microwave dan air panas.',
        'Karena petugasnya yang memasakkan.',
        'Karena minimarket buka 24 jam.',
        'Karena mi cupnya sudah matang dari pabrik.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat 가게 안에 전자레인지하고 뜨거운 물이 있어요 disusul 그래서 컵라면을 바로 먹을 수 있어요 — kata 그래서 menandai hubungan sebab-akibatnya.',
      whyNot: {
        'Karena petugasnya yang memasakkan.': 'Petugas hanya menghangatkan 도시락, bukan memasak mi.',
        'Karena minimarket buka 24 jam.': 'Itu fakta terpisah di kalimat pertama, bukan sebabnya.',
        'Karena mi cupnya sudah matang dari pabrik.': 'Tidak disebut dalam bacaan.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm5l4-q1',
      kind: 'mc',
      prompt: 'Kenapa pegawai berkata 드릴까요? dan bukan 줄까요?',
      options: [
        'Karena 드리다 adalah bentuk rendah hati dari 주다, dipakai saat melayani orang yang dihormati.',
        'Karena 드리다 bentuk lampau dari 주다.',
        'Karena 줄까요? tidak gramatikal.',
        'Karena 드리다 dipakai untuk benda, 주다 untuk tindakan.',
      ],
      answerIndex: 0,
      explain:
        'Sama seperti 께 adalah bentuk hormat dari 한테 (Pelajaran 2.8), 드리다 adalah pasangan rendah hati dari 주다. Pegawai memposisikan pelanggan sebagai pihak yang dihormati.',
      whyNot: {
        'Karena 드리다 bentuk lampau dari 주다.': 'Bentuk lampau 주다 adalah 줬어요.',
        'Karena 줄까요? tidak gramatikal.': '줄까요? sepenuhnya benar — hanya terlalu akrab untuk situasi ini.',
        'Karena 드리다 dipakai untuk benda, 주다 untuk tindakan.': 'Keduanya bisa dipakai untuk benda maupun tindakan.',
      },
      tags: ['-아/어 드릴까요?'],
    },
    {
      id: 'm5l4-q2',
      kind: 'fill',
      prompt: 'Lengkapi cara bayarnya.',
      context: '현금 berakhir dengan konsonan ㅁ.',
      sentence: '___ 할게요.',
      translation: 'Saya bayar tunai.',
      answers: ['현금으로'],
      explain:
        '현금 berakhir konsonan ㅁ, jadi bentuknya 으로. Bandingkan dengan 카드 yang berakhir vokal → 카드로.',
      tags: ['(으)로'],
    },
    {
      id: 'm5l4-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Ya, tolong dihangatkan.',
      answers: ['네, 데워 주세요', '네 데워 주세요', '데워 주세요'],
      explain:
        'Permintaan tindakan memakai bentuk 해요체 tanpa 요 lalu 주세요: 데워요 → 데워 → 데워 주세요. Perhatikan bahwa kamu memakai 주세요, sedangkan pegawai memakai 드릴까요?.',
      tags: ['-아/어 드릴까요?'],
    },
  ],

  summary: {
    points: [
      '-아/어 드릴까요? adalah tawaran dari pihak yang melayani; kamu cukup mengenalinya dan menjawab.',
      '드리다 adalah bentuk rendah hati dari 주다 — pegawai pakai 드릴까요?, kamu pakai 주세요.',
      '괜찮아요 sebagai jawaban atas tawaran berarti "tidak usah", bukan "tidak apa-apa".',
      'Jangan menjawab tawaran dengan 안 괜찮아요 — artinya justru terbalik.',
      '필요하다 adalah kata sifat: hal yang dibutuhkan memakai 이/가, bukan 을/를.',
      'Cara bayar memakai (으)로: 카드로, 현금으로 — lalu -(으)ㄹ게요 karena kamu yang memutuskan.',
    ],
    pitfalls: [
      {
        wrong: '봉투를 필요해요.',
        right: '봉투가 필요해요.',
        why: '필요하다 adalah kata sifat dan tidak pernah memakai 을/를.',
      },
      {
        wrong: '(menolak tawaran) 아니요, 안 괜찮아요.',
        right: '아니요, 괜찮아요.',
        why: '안 괜찮아요 berarti "saya tidak baik-baik saja".',
      },
      {
        wrong: '(sebagai pelanggan) 데워 드릴까요?',
        right: '데워 주세요.',
        why: '드리다 dipakai oleh pihak yang melayani, bukan yang dilayani.',
      },
    ],
  },
}
