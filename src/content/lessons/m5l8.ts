import type { Lesson } from '../../types/curriculum'

export const m5l8: Lesson = {
  id: 'm5-l8',
  moduleId: 'm5',
  number: '5.8',
  title: 'Naik taksi',
  subtitle: 'Menyebut tujuan, mengarahkan di jalan, dan membayar',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan tujuan kepada sopir taksi, memberi arahan sambil berjalan, dan meminta berhenti di titik yang tepat.',
  focus: ['-(으)면 되다', '-아/어 주시겠어요?', 'kosakata taksi'],
  estimatedMinutes: 16,

  coreExamples: [
    { ko: '명동역으로 가 주세요.', id: 'Tolong ke Stasiun Myeongdong.', highlight: ['으로'] },
    {
      ko: '여기서 세워 주세요.',
      id: 'Tolong berhenti di sini.',
      highlight: ['세워 주세요'],
      highlightKind: 'ending',
    },
    {
      ko: '저 건물 앞에서 내리면 돼요.',
      id: 'Turun di depan gedung itu saja.',
      highlight: ['내리면 돼요'],
      highlightKind: 'ending',
    },
    {
      ko: '조금만 더 가 주시겠어요?',
      id: 'Bisakah maju sedikit lagi?',
      highlight: ['가 주시겠어요'],
      highlightKind: 'ending',
    },
    { ko: '얼마나 걸려요?', id: 'Berapa lama perjalanannya?', highlight: ['얼마나'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저 건물 앞에서 내리면 돼요.',
        id: 'Turun di depan gedung itu saja.',
        highlight: ['내리면 돼요'],
        highlightKind: 'ending',
      },
      rows: [
        {
          unit: '저 건물 앞에서',
          formula: '저 건물 + 앞 + 에서',
          meaning: 'Di depan gedung itu; 에서 karena turun adalah kegiatan yang terjadi di situ',
        },
        { unit: '내리면', formula: '내리다 → 내리 + 면', meaning: 'Kalau turun' },
        { unit: '돼요', formula: '되다 → 돼요', meaning: '"Jadi / sudah cukup"' },
      ],
      why:
        '-(으)면 되다 berarti "cukup kalau …" atau "tinggal …". Pola ini dibangun dari dua hal yang sudah kamu kuasai: -(으)면 dari Pelajaran 5.6 dan 되다 dari Pelajaran 7.3. Nadanya santai dan memudahkan — kamu tidak sedang memerintah, hanya memberi tahu bahwa itu sudah memadai. Karena itu ia terasa jauh lebih sopan daripada "harus" saat berbicara dengan sopir.',
      swaps: [
        {
          alt: '저 건물 앞에서 내려 주세요.',
          effect:
            'Permintaan langsung: "tolong turunkan saya di depan gedung itu". Sama sopannya, hanya lebih tegas sebagai instruksi.',
        },
        {
          alt: '저 건물 앞에서 내려야 해요.',
          effect:
            '"Saya harus turun di depan gedung itu." Terdengar seperti menjelaskan keharusanmu sendiri, bukan mengarahkan sopir — agak janggal di konteks ini.',
        },
      ],
    },
    {
      sentence: {
        ko: '조금만 더 가 주시겠어요?',
        id: 'Bisakah maju sedikit lagi?',
        highlight: ['가 주시겠어요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '조금만', formula: '조금 + 만', meaning: 'Sedikit saja' },
        { unit: '더', formula: '—', meaning: 'Lagi, lebih jauh' },
        { unit: '가', formula: '가다 → 가요 → 가', meaning: 'Pergi, maju' },
        {
          unit: '주시겠어요?',
          formula: '주다 + 시 + 겠어요',
          meaning: '"Bersediakah Anda …?" — tingkat paling halus',
        },
      ],
      why:
        'Ini tingkat permintaan paling halus dalam bahasa Korea sehari-hari. Dibentuk dari -아/어 주다 (Pelajaran 5.2), ditambah sisipan hormat 〜시〜 (Pelajaran 2.8), lalu akhiran 〜겠〜 yang memperhalus. Tangga kesopanannya naik begini: 세워요 (datar, nyaris memerintah) → 세워 주세요 (sopan baku) → 세워 주시겠어요? (paling halus). Untuk taksi, tingkat kedua sudah cukup; tingkat ketiga berguna saat kamu meminta sesuatu yang agak merepotkan.',
      swaps: [
        {
          alt: '조금만 더 가 주세요.',
          effect: 'Sopan dan sepenuhnya memadai untuk situasi taksi biasa.',
        },
        {
          alt: '조금만 더 가 주실 수 있어요?',
          effect:
            'Variasi lain yang sama halusnya, memakai -(으)ㄹ 수 있다 dari Pelajaran 3.3: "bisakah Anda …?".',
        },
      ],
    },
  ],

  vocab: [
    { ko: '택시', id: 'taksi', pos: 'kata benda' },
    { ko: '기사님', id: 'Pak/Bu sopir', pos: 'kata benda', note: 'Cara memanggil sopir yang sopan.' },
    {
      ko: '세우다',
      id: 'menghentikan',
      pos: 'kata kerja',
      note: '해요체: 세워요.',
      example: { ko: '여기서 세워 주세요.', id: 'Tolong berhenti di sini.' },
    },
    { ko: '내리다', id: 'turun (dari kendaraan)', pos: 'kata kerja', note: '해요체: 내려요.' },
    { ko: '기본요금', id: 'tarif dasar', pos: 'kata benda' },
    { ko: '할증', id: 'tarif tambahan', pos: 'kata benda', note: '심야 할증 = tambahan tengah malam.' },
    { ko: '막히다', id: 'macet', pos: 'kata kerja', note: '길이 막혀요 = jalanan macet.' },
    { ko: '유턴', id: 'putar balik', pos: 'kata benda', note: '유턴하다 = memutar balik.' },
    { ko: '직진', id: 'lurus', pos: 'kata benda', note: '직진하다 = jalan lurus.' },
    { ko: '얼마나', id: 'berapa lama, seberapa', pos: 'kata tanya' },
    { ko: '영수증', id: 'struk', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-(으)면 되다 — "cukup begitu saja"',
      form: 'batang + 면 (vokal) · 으면 (konsonan) + 되다',
      body:
        'Menyatakan bahwa sesuatu sudah memadai — "tinggal … saja". Nadanya meringankan, bukan memerintah, sehingga sangat berguna saat memberi arahan kepada orang lain.',
      table: {
        columns: ['Kata kerja', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가', '가면 돼요', 'tinggal pergi saja'],
          ['내리다', '내리', '내리면 돼요', 'tinggal turun saja'],
          ['세우다', '세우', '세우면 돼요', 'tinggal berhenti saja'],
          ['하다', '하', '하면 돼요', 'tinggal lakukan saja'],
          ['주다', '주', '주면 돼요', 'tinggal berikan saja'],
        ],
      },
      examples: [
        { ko: '여기서 세우면 돼요.', id: 'Berhenti di sini saja.' },
        { ko: '카드로 하면 돼요?', id: 'Boleh bayar pakai kartu saja?' },
        { ko: '그냥 앞에서 내리면 돼요.', id: 'Turun di depan saja sudah cukup.' },
      ],
      mistakes: [
        {
          wrong: '여기서 세우면 되요.',
          right: '여기서 세우면 돼요.',
          why: '되 + 어요 menghasilkan 돼요 — sama seperti pada -아/어도 돼요 di Pelajaran 7.3.',
        },
      ],
    },
    {
      title: 'Tiga pola 되다 yang mudah tertukar',
      body:
        'Kamu kini sudah mengenal tiga pola yang semuanya berakhir 돼요. Bedanya terletak pada apa yang disampaikan: izin, keharusan, atau kecukupan.',
      table: {
        caption: 'Semuanya berakhir 돼요, tetapi bagian sebelum 되다 yang menentukan artinya.',
        columns: ['Pola', 'Arti', 'Contoh', 'Nada'],
        rows: [
          ['-아/어도 돼요', 'boleh', '가도 돼요', 'Memberi izin'],
          ['-(으)면 안 돼요', 'tidak boleh', '가면 안 돼요', 'Melarang'],
          ['-(으)면 돼요', 'cukup / tinggal', '가면 돼요', 'Meringankan'],
          ['-아/어야 돼요', 'harus', '가야 돼요', 'Mewajibkan'],
        ],
      },
      examples: [
        { ko: '여기서 내려도 돼요?', id: 'Boleh turun di sini?', note: 'Meminta izin.' },
        { ko: '여기서 내리면 돼요.', id: 'Turun di sini saja.', note: 'Memberi tahu bahwa itu memadai.' },
        { ko: '여기서 내려야 돼요.', id: 'Harus turun di sini.', note: 'Menyatakan keharusan.' },
      ],
      more:
        'Perhatikan bahwa hanya -(으)면 안 되다 dan -(으)면 되다 yang dibentuk dari BATANG. Dua lainnya — -아/어도 되다 dan -아/어야 되다 — dibentuk dari bentuk 해요체 tanpa 요. Kalau kamu ragu, cek dulu apakah polanya mengandung -(으)면.',
    },
    {
      title: '-아/어 주시겠어요? — permintaan paling halus',
      form: 'bentuk 해요체 − 요 + 주시겠어요?',
      body:
        'Tingkat tertinggi dari tangga permintaan. Berguna saat kamu meminta sesuatu yang sedikit merepotkan, atau kepada orang yang ingin kamu hormati secara khusus.',
      table: {
        caption: 'Untuk situasi sehari-hari, tingkat kedua (주세요) sudah sepenuhnya sopan.',
        columns: ['Tingkat', 'Bentuk', 'Kesan'],
        rows: [
          ['1', '세워요', 'Datar, hampir memerintah'],
          ['2', '세워 주세요', 'Sopan baku — paling sering dipakai'],
          ['3', '세워 주시겠어요?', 'Sangat halus, agak memohon'],
          ['3', '세워 주실 수 있어요?', 'Sama halusnya, bentuk lain'],
        ],
      },
      examples: [
        { ko: '조금만 더 가 주시겠어요?', id: 'Bisakah maju sedikit lagi?' },
        { ko: '에어컨 좀 켜 주시겠어요?', id: 'Bisakah ACnya dinyalakan?' },
        { ko: '창문 좀 열어 주시겠어요?', id: 'Bisakah jendelanya dibuka?' },
      ],
      more:
        'Kata 좀 yang kamu pelajari di Pelajaran 5.2 sangat sering menemani bentuk ini. Menambahkan 좀 membuat permintaan terasa lebih ringan: 세워 주시겠어요? sudah halus, tetapi 좀 세워 주시겠어요? terdengar lebih hangat lagi.',
    },
    {
      title: 'Kalimat yang dipakai di dalam taksi',
      body:
        'Hampir seluruh percakapan di taksi tersusun dari kalimat-kalimat ini. Menghafal lima saja sudah cukup untuk sebagian besar perjalanan.',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Catatan'],
        rows: [
          ['명동역으로 가 주세요.', 'Tolong ke Stasiun Myeongdong.', '(으)로 menandai arah tujuan'],
          ['이 주소로 가 주세요.', 'Tolong ke alamat ini.', 'Sambil menunjukkan layar ponsel'],
          ['여기서 세워 주세요.', 'Tolong berhenti di sini.', 'Paling sering dipakai'],
          ['저 앞에서 내릴게요.', 'Saya turun di depan sana.', '-(으)ㄹ게요: keputusan sendiri'],
          ['얼마나 걸려요?', 'Berapa lama?', 'Menanyakan durasi'],
          ['카드 돼요?', 'Bisa pakai kartu?', 'Bentuk pendek dari 카드로 결제돼요?'],
          ['영수증 주세요.', 'Tolong struknya.', 'Berguna untuk klaim kantor'],
        ],
      },
      examples: [
        { ko: '기사님, 여기서 세워 주세요.', id: 'Pak sopir, tolong berhenti di sini.' },
        { ko: '길이 많이 막히네요.', id: 'Jalanannya macet sekali ya.', note: '-네요 menyatakan kesan spontan.' },
      ],
      more:
        'Panggil sopir dengan 기사님 — bukan 아저씨, yang kini terdengar kurang sopan kepada orang yang sedang bekerja. Dan ketahuilah soal 할증: antara tengah malam dan subuh, tarif taksi di Korea naik otomatis. Kalau argonya terlihat lebih tinggi dari biasanya pada jam itu, bukan berarti kamu ditipu.',
    },
  ],

  dialogue: {
    title: 'Dari kantor ke stasiun',
    situation: 'Vio naik taksi setelah lembur, saat jalanan sedang padat.',
    lines: [
      { speaker: '비오', ko: '기사님, 명동역으로 가 주세요.', id: 'Pak, tolong ke Stasiun Myeongdong.' },
      { speaker: '기사님', ko: '네, 알겠습니다.', id: 'Baik, siap.' },
      {
        speaker: '비오',
        ko: '얼마나 걸려요?',
        id: 'Berapa lama ya?',
        note: '얼마나 menanyakan durasi atau kadar.',
      },
      {
        speaker: '기사님',
        ko: '지금 길이 막혀서 삼십 분쯤 걸릴 거예요.',
        id: 'Sekarang macet, jadi mungkin sekitar tiga puluh menit.',
        note: '막혀서 — alasan dengan -아/어서 (Pelajaran 4.2); 걸릴 거예요 — dugaan.',
      },
      { speaker: '비오', ko: '아, 네. 괜찮아요.', id: 'Oh, baik. Tidak apa-apa.' },
      {
        speaker: '비오',
        ko: '기사님, 조금만 더 가 주시겠어요? 저 건물 앞에서 내리면 돼요.',
        id: 'Pak, bisakah maju sedikit lagi? Saya turun di depan gedung itu saja.',
        note: 'Dua pola pelajaran ini sekaligus — permintaan halus lalu arahan yang meringankan.',
      },
      { speaker: '기사님', ko: '네, 여기 괜찮으세요?', id: 'Baik, di sini sudah pas?' },
      { speaker: '비오', ko: '네, 여기서 세워 주세요. 카드 돼요?', id: 'Ya, tolong berhenti di sini. Bisa pakai kartu?' },
      { speaker: '기사님', ko: '네, 됩니다.', id: 'Bisa.' },
      { speaker: '비오', ko: '영수증 주세요. 감사합니다!', id: 'Tolong struknya. Terima kasih!' },
    ],
    politeness:
      'Sopir memakai 알겠습니다 dan 됩니다 — bentuk 합쇼체 yang lazim dalam layanan pelanggan. Kamu cukup membalas dengan 해요체. Perhatikan juga Vio memakai 주시겠어요? hanya sekali, yaitu saat meminta sesuatu yang agak merepotkan; sisanya cukup 주세요.',
  },

  passage: {
    title: '한국에서 택시 타기',
    intro: 'Beberapa hal yang perlu diketahui sebelum naik taksi di Korea.',
    sentences: [
      { ko: '한국에서는 택시를 호출 앱으로 많이 불러요.', id: 'Di Korea, taksi banyak dipanggil lewat aplikasi.' },
      { ko: '앱을 쓰면 주소를 말하지 않아도 돼요.', id: 'Kalau pakai aplikasi, tidak perlu menyebutkan alamat.' },
      { ko: '길에서 직접 잡을 수도 있어요.', id: 'Bisa juga menyetop langsung di jalan.' },
      { ko: '밤 열두 시부터는 할증 요금이 붙어요.', id: 'Mulai jam dua belas malam, ada tarif tambahan.' },
      { ko: '그래서 밤에는 요금이 조금 비싸요.', id: 'Karena itu malam hari tarifnya agak mahal.' },
      { ko: '내릴 때 영수증을 받으면 좋아요.', id: 'Saat turun, sebaiknya minta struk.' },
    ],
    vocabInContext: [
      { ko: '호출 앱', id: 'aplikasi pemanggil' },
      { ko: '부르다', id: 'memanggil' },
      { ko: '잡다', id: 'menangkap, menyetop' },
      { ko: '붙다', id: 'menempel, dikenakan' },
    ],
    analysis: [
      '호출 앱으로 memakai (으)로 untuk menandai alat atau cara (Pelajaran 2.9).',
      '말하지 않아도 돼요 menggabungkan -지 않다 (Pelajaran 3.3) dengan -아/어도 되다 (Pelajaran 7.3) — hasilnya "tidak perlu mengatakan".',
      '잡을 수도 있어요 — -(으)ㄹ 수 있다 (Pelajaran 3.3) disisipi 도 ("juga"), jadi "bisa juga menyetop".',
      '열두 시부터는 memakai 부터 (titik awal, Pelajaran 2.9) + 는 (kontras dengan jam lain).',
      '내릴 때 memakai -(으)ㄹ 때 ("saat/ketika"), pola yang belum dipelajari — cukup kenali artinya dulu.',
      '받으면 좋아요 memakai -(으)면 (Pelajaran 5.6) untuk memberi saran halus: "kalau menerima, bagus" yaitu "sebaiknya minta".',
    ],
  },

  exercises: [
    {
      id: 'm5l8-e1',
      kind: 'fill',
      prompt: 'Ubah 내리다 menjadi bentuk "cukup begitu saja".',
      sentence: '저 건물 앞에서 ___.',
      translation: 'Turun di depan gedung itu saja.',
      answers: ['내리면 돼요', '내리면 됩니다'],
      explain:
        '-(으)면 되다 dibentuk dari BATANG: 내리 + 면 + 돼요. Nadanya meringankan — kamu memberi tahu bahwa itu sudah memadai, bukan memerintah.',
      hint: 'Dibentuk dari batang kata, seperti -(으)면 di Pelajaran 5.6.',
      tags: ['-(으)면 되다'],
    },
    {
      id: 'm5l8-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat untuk menyebut tujuan taksi.',
      context: 'Kamu menyebutkan ke mana taksi harus menuju.',
      sentence: '명동역___ 가 주세요.',
      translation: 'Tolong ke Stasiun Myeongdong.',
      options: ['으로', '에서', '까지', '를'],
      answer: '으로',
      explain:
        '(으)로 menandai arah tujuan, dan inilah yang lazim dipakai saat menyebut tujuan kepada sopir. 명동역 berakhir konsonan ㄱ, jadi bentuknya 으로. (명동역에 가 주세요 juga benar dan sama umum.)',
      whyNot: {
        에서: '에서 menandai titik asal atau tempat kegiatan — justru arah sebaliknya.',
        까지: '까지 berarti "sampai", dipakai untuk rentang: 집에서 명동역까지.',
        를: '가다 tidak mengambil objek dengan 를 dalam pemakaian biasa.',
      },
      tags: ['kosakata taksi'],
    },
    {
      id: 'm5l8-e3',
      kind: 'mc',
      prompt: 'Apa bedanya 여기서 내려도 돼요? dan 여기서 내리면 돼요?',
      options: [
        'Yang pertama meminta izin; yang kedua memberi tahu bahwa itu sudah cukup.',
        'Yang pertama lebih sopan.',
        'Yang kedua bentuk lampau.',
        'Keduanya artinya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '-아/어도 돼요? menanyakan izin ("boleh turun di sini?"). -(으)면 돼요 menyatakan kecukupan ("turun di sini saja sudah cukup"). Keduanya berakhir 돼요, tetapi bagian sebelumnya yang menentukan.',
      whyNot: {
        'Yang pertama lebih sopan.': 'Keduanya sama-sama sopan; yang berbeda adalah maksudnya.',
        'Yang kedua bentuk lampau.': 'Keduanya bentuk sekarang.',
        'Keduanya artinya sama persis.': 'Satu meminta izin, satu memberi arahan.',
      },
      tags: ['-(으)면 되다'],
    },
    {
      id: 'm5l8-e4',
      kind: 'match',
      prompt: 'Pasangkan kalimat taksi dengan artinya.',
      pairs: [
        { left: '여기서 세워 주세요', right: 'tolong berhenti di sini' },
        { left: '저 앞에서 내릴게요', right: 'saya turun di depan sana' },
        { left: '얼마나 걸려요?', right: 'berapa lama perjalanannya?' },
        { left: '카드 돼요?', right: 'bisa bayar pakai kartu?' },
        { left: '영수증 주세요', right: 'tolong struknya' },
        { left: '길이 많이 막히네요', right: 'jalanannya macet sekali ya' },
      ],
      explain:
        'Enam kalimat ini sudah menutupi hampir seluruh perjalanan taksi, dari menyebut tujuan sampai membayar.',
      tags: ['kosakata taksi'],
    },
    {
      id: 'm5l8-e5',
      kind: 'fill',
      prompt: 'Ubah 세우다 menjadi permintaan paling halus.',
      context: 'Kamu meminta sopir berhenti di tempat yang agak merepotkan.',
      sentence: '여기서 좀 ___?',
      translation: 'Bisakah berhenti di sini?',
      answers: ['세워 주시겠어요'],
      explain:
        'Tingkat paling halus: bentuk 해요체 tanpa 요 (세워) + 주시겠어요?. Dibentuk dari -아/어 주다 ditambah sisipan hormat 〜시〜 dan akhiran pelembut 〜겠〜.',
      tags: ['-아/어 주시겠어요?'],
    },
    {
      id: 'm5l8-e6',
      kind: 'build',
      prompt: 'Susun arahanmu kepada sopir.',
      translation: 'Bisakah maju sedikit lagi? Saya turun di depan gedung itu.',
      tiles: ['조금만', '더', '가 주시겠어요?', '저 건물', '앞에서', '내리면 돼요'],
      distractors: ['앞에', '내려야 해요'],
      answers: ['조금만 더 가 주시겠어요? 저 건물 앞에서 내리면 돼요'],
      explain:
        '앞에서 memakai 에서 karena turun adalah kegiatan yang terjadi di titik itu. Dan 내리면 돼요 terdengar jauh lebih ringan daripada 내려야 해요 untuk situasi ini.',
      parts: [
        { part: '조금만', role: 'sedikit saja' },
        { part: '더', role: 'lagi, lebih jauh' },
        { part: '가 주시겠어요?', role: 'permintaan paling halus' },
        { part: '저 건물', role: 'gedung itu' },
        { part: '앞에서', role: 'di depan (tempat kegiatan turun)' },
        { part: '내리면 돼요', role: '"turun di situ saja sudah cukup"' },
      ],
      tags: ['-(으)면 되다', '-아/어 주시겠어요?'],
    },
    {
      id: 'm5l8-e7',
      kind: 'correct',
      prompt: 'Perbaiki ejaannya.',
      sentence: '여기서 세우면 되요.',
      translation: 'Berhenti di sini saja.',
      answers: ['여기서 세우면 돼요'],
      explain:
        '되 + 어요 menghasilkan 돼요, persis seperti pada -아/어도 돼요 dan -(으)면 안 돼요 di Pelajaran 7.3. Ejaan 되요 selalu salah.',
      tags: ['-(으)면 되다'],
    },
    {
      id: 'm5l8-e8',
      kind: 'mc',
      prompt: 'Dari bacaan 한국에서 택시 타기, apa keuntungan memakai aplikasi?',
      options: [
        'Tidak perlu menyebutkan alamat.',
        'Tarifnya selalu lebih murah.',
        'Tidak kena tarif tambahan malam.',
        'Strukmu otomatis dikirim ke kantor.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat kedua berbunyi 앱을 쓰면 주소를 말하지 않아도 돼요 — "kalau pakai aplikasi, tidak perlu menyebutkan alamat".',
      whyNot: {
        'Tarifnya selalu lebih murah.': 'Bacaan tidak menyebut soal harga aplikasi.',
        'Tidak kena tarif tambahan malam.': '할증 disebut berlaku mulai jam dua belas malam, tanpa pengecualian aplikasi.',
        'Strukmu otomatis dikirim ke kantor.': 'Tidak disebut dalam bacaan.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm5l8-q1',
      kind: 'mc',
      prompt: 'Manakah yang berarti "harus turun di sini"?',
      options: ['여기서 내려야 돼요.', '여기서 내리면 돼요.', '여기서 내려도 돼요.', '여기서 내리면 안 돼요.'],
      answerIndex: 0,
      explain:
        '-아/어야 되다 menyatakan keharusan. Tiga pilihan lain sama-sama berakhir 돼요 tetapi artinya berbeda: cukup, boleh, dan dilarang.',
      whyNot: {
        '여기서 내리면 돼요.': 'Artinya "turun di sini saja sudah cukup".',
        '여기서 내려도 돼요.': 'Artinya "boleh turun di sini".',
        '여기서 내리면 안 돼요.': 'Artinya "tidak boleh turun di sini".',
      },
      tags: ['-(으)면 되다'],
    },
    {
      id: 'm5l8-q2',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Tolong berhenti di sini.',
      answers: ['여기서 세워 주세요', '여기에서 세워 주세요', '여기서 세워 주시겠어요?'],
      explain:
        '세우다 → 세워요 → 세워 → 세워 주세요. 여기서 adalah bentuk singkat 여기에서 (Pelajaran 2.5).',
      tags: ['kosakata taksi'],
    },
    {
      id: 'm5l8-q3',
      kind: 'fill',
      prompt: 'Ubah 켜다 menjadi permintaan paling halus.',
      context: 'Kamu minta ACnya dinyalakan.',
      sentence: '에어컨 좀 ___?',
      translation: 'Bisakah ACnya dinyalakan?',
      answers: ['켜 주시겠어요'],
      explain:
        '켜다 → 켜요 → 켜 → 켜 주시겠어요?. Kata 좀 membuat permintaannya terasa lebih ringan.',
      tags: ['-아/어 주시겠어요?'],
    },
  ],

  summary: {
    points: [
      '-(으)면 되다 berarti "cukup / tinggal begitu saja" — dibentuk dari BATANG.',
      'Empat pola 되다: 도 돼요 (boleh), 면 안 돼요 (tidak boleh), 면 돼요 (cukup), 야 돼요 (harus).',
      'Hanya pola ber-(으)면 yang dibentuk dari batang; dua lainnya dari 해요체 tanpa 요.',
      'Tangga permintaan: 세워요 → 세워 주세요 → 세워 주시겠어요?',
      'Tujuan taksi memakai (으)로 atau 에: 명동역으로 / 명동역에 가 주세요.',
      'Panggil sopir dengan 기사님, bukan 아저씨.',
      'Ejaannya selalu 돼요, tidak pernah 되요.',
    ],
    pitfalls: [
      {
        wrong: '세우면 되요.',
        right: '세우면 돼요.',
        why: '되 + 어요 menghasilkan 돼요.',
      },
      {
        wrong: '내려면 돼요.',
        right: '내리면 돼요.',
        why: '-(으)면 ditempel pada batang 내리, bukan pada bentuk 해요체 내려요.',
      },
      {
        wrong: '아저씨, 여기서 세워 주세요.',
        right: '기사님, 여기서 세워 주세요.',
        why: '기사님 adalah panggilan yang pantas untuk sopir yang sedang bekerja.',
      },
    ],
  },
}
