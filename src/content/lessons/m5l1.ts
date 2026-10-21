import type { Lesson } from '../../types/curriculum'

export const m5l1: Lesson = {
  id: 'm5-l1',
  moduleId: 'm5',
  number: '5.1',
  title: 'Memperkenalkan diri',
  subtitle: 'Tiga tingkat kesopanan, salam, dan basa-basi kantor',
  objective:
    'Setelah pelajaran ini kamu bisa memperkenalkan diri dengan percaya diri, memilih tingkat kesopanan yang tepat, dan membuka serta menutup percakapan seperti orang Korea.',
  focus: ['해요체', 'tingkat kesopanan', 'perkenalan'],
  estimatedMinutes: 16,

  coreExamples: [
    { ko: '안녕하세요. 저는 비오예요.', id: 'Halo. Saya Vio.' },
    { ko: '인도네시아에서 왔어요.', id: 'Saya berasal dari Indonesia.', highlight: ['에서'] },
    { ko: '회사에서 마케팅 일을 해요.', id: 'Saya bekerja di bidang pemasaran.', highlight: ['에서', '을'] },
    { ko: '요즘 한국어를 배워요. 아직 잘 못해요.', id: 'Akhir-akhir ini saya belajar bahasa Korea. Belum terlalu bisa.' },
    {
      ko: '만나서 반갑습니다.',
      id: 'Senang bertemu dengan Anda.',
      highlight: ['습니다'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '회사에서 마케팅 일을 해요.',
        id: 'Saya bekerja di bidang pemasaran.',
        highlight: ['에서', '을'],
      },
      rows: [
        { unit: '회사에서', formula: '회사 + 에서', meaning: 'Di kantor — tempat kegiatan' },
        { unit: '마케팅 일을', formula: '마케팅 + 일 + 을', meaning: 'Pekerjaan pemasaran — objek' },
        { unit: '해요', formula: '하다 → 해요', meaning: 'Melakukan, 해요체' },
      ],
      why:
        'Saat menyebut pekerjaan, bahasa Korea punya dua pola. Pola pertama menyebut jabatan sebagai identitas: 저는 회사원이에요. Pola kedua menyebut apa yang kamu KERJAKAN: 마케팅 일을 해요. Pola kedua terdengar lebih informatif dan lebih sering dipakai di perkenalan kerja. Perhatikan bahwa 마케팅 dan 일 berderet langsung tanpa 의 — dua kata benda yang bergandengan memang tidak selalu butuh penyambung.',
      swaps: [
        {
          alt: '저는 마케팅 팀에서 일해요.',
          effect:
            'Menyebut tim atau divisinya. 에서 tetap dipakai karena di situlah pekerjaanmu berlangsung.',
        },
        {
          alt: '저는 회사원이에요.',
          effect:
            'Lebih umum dan lebih singkat, tetapi tidak memberi tahu apa yang kamu kerjakan. Banyak orang menyebut keduanya berurutan.',
        },
      ],
    },
    {
      sentence: {
        ko: '만나서 반갑습니다.',
        id: 'Senang bertemu dengan Anda.',
        highlight: ['습니다'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '만나서', formula: '만나다 → 만나요 → 만나 + 서', meaning: 'Karena bertemu' },
        {
          unit: '반갑습니다',
          formula: '반갑다 → 반갑 + 습니다',
          meaning: 'Senang; akhiran formal 합쇼체',
        },
      ],
      why:
        'Ungkapan ini memakai akhiran 〜습니다, bukan 〜요. Inilah tingkat kesopanan tertinggi yang umum dipakai — disebut 합쇼체. Pada perkenalan pertama, terutama di lingkungan kerja, banyak orang Korea memakai 합쇼체 untuk kalimat pembuka lalu melanjutkan percakapan dengan 해요체. Jadi kamu akan sering mendengar 만나서 반갑습니다 disusul kalimat-kalimat ber-요 biasa.',
      swaps: [
        {
          alt: '만나서 반가워요.',
          effect:
            'Versi 해요체. Sepenuhnya sopan dan cocok untuk rekan sebaya atau suasana santai — hanya terasa sedikit lebih akrab.',
        },
        {
          alt: '만나서 반가워.',
          effect:
            'Versi 반말 (santai). Hanya untuk teman sebaya yang sudah akrab atau orang yang jelas lebih muda.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '안녕하세요', id: 'halo, selamat pagi/siang/malam', pos: 'ungkapan' },
    { ko: '안녕히 가세요', id: 'selamat jalan (kepada yang pergi)', pos: 'ungkapan' },
    { ko: '안녕히 계세요', id: 'selamat tinggal (kepada yang tetap tinggal)', pos: 'ungkapan' },
    { ko: '반갑습니다', id: 'senang bertemu', pos: 'ungkapan' },
    { ko: '잘 부탁드립니다', id: 'mohon kerja samanya', pos: 'ungkapan', note: 'Penutup baku perkenalan kerja.' },
    { ko: '수고하셨습니다', id: 'terima kasih atas kerja kerasnya', pos: 'ungkapan', note: 'Diucapkan saat pulang kerja.' },
    { ko: '마케팅', id: 'pemasaran', pos: 'kata benda' },
    { ko: '팀', id: 'tim', pos: 'kata benda' },
    { ko: '취미', id: 'hobi', pos: 'kata benda' },
    { ko: '처음', id: 'pertama kali', pos: 'kata benda', note: '처음 뵙겠습니다 = "baru pertama kali bertemu".' },
  ],

  grammar: [
    {
      title: 'Tiga tingkat kesopanan',
      body:
        'Bahasa Korea tidak punya satu bentuk "netral". Setiap kalimat yang kamu ucapkan menyatakan hubunganmu dengan lawan bicara. Untungnya, satu tingkat sudah cukup untuk hampir semua situasi: 해요체.',
      table: {
        caption:
          '해요체 adalah pilihan aman di 95% situasi. Kalau ragu, pakai ini.',
        columns: ['Tingkat', 'Contoh (가다)', 'Dipakai kepada', 'Rasanya'],
        rows: [
          ['합쇼체 (formal)', '갑니다 / 갑니까?', 'Atasan, pelanggan, hadirin', 'Resmi, berjarak'],
          ['해요체 (sopan)', '가요 / 가요?', 'Rekan kerja, orang baru, pelayan', 'Sopan tapi hangat'],
          ['반말 (santai)', '가 / 가?', 'Teman akrab, adik, anak kecil', 'Akrab'],
        ],
      },
      examples: [
        { ko: '저는 인도네시아에서 왔습니다.', id: 'Saya berasal dari Indonesia.', note: '합쇼체 — untuk perkenalan resmi.' },
        { ko: '저는 인도네시아에서 왔어요.', id: 'Saya berasal dari Indonesia.', note: '해요체 — untuk hampir semua situasi.' },
      ],
      more:
        'Kesalahan yang paling merugikan bukan memakai 해요체 kepada atasan — itu hanya terdengar sedikit santai. Yang benar-benar canggung adalah memakai 반말 kepada orang yang belum akrab, karena terdengar merendahkan. Jadi: jangan memakai 반말 sampai lawan bicaramu menawarkannya sendiri (biasanya dengan berkata 말 놓으세요).',
    },
    {
      title: 'Kerangka perkenalan diri',
      body:
        'Perkenalan diri di Korea punya urutan yang cukup baku. Hafalkan kerangkanya, lalu ganti isinya sesuai dirimu.',
      table: {
        columns: ['Bagian', 'Pola', 'Contoh'],
        rows: [
          ['Salam', '안녕하세요', '안녕하세요.'],
          ['Nama', '저는 ___예요/이에요', '저는 비오예요.'],
          ['Asal', '___에서 왔어요', '인도네시아에서 왔어요.'],
          ['Pekerjaan', '___이에요 / ___ 일을 해요', '회사원이에요.'],
          ['Tambahan', 'hobi, lama tinggal, dll.', '한국 음악을 좋아해요.'],
          ['Penutup', '만나서 반갑습니다', '만나서 반갑습니다.'],
        ],
      },
      examples: [
        {
          ko: '안녕하세요. 저는 비오예요. 인도네시아에서 왔어요. 만나서 반갑습니다.',
          id: 'Halo. Saya Vio. Saya berasal dari Indonesia. Senang bertemu dengan Anda.',
        },
      ],
      more:
        'Di lingkungan kerja, penutupnya sering diganti 잘 부탁드립니다 — harfiahnya "mohon kebaikan Anda", setara dengan "mohon kerja samanya". Ungkapan ini tidak punya padanan persis dalam bahasa Indonesia, tetapi hampir selalu diucapkan di hari pertama bekerja atau saat bergabung ke tim baru.',
    },
    {
      title: 'Dua cara mengucapkan selamat tinggal',
      form: '안녕히 가세요 (yang pergi) · 안녕히 계세요 (yang tinggal)',
      body:
        'Ini salah satu hal kecil yang langsung membedakan pembelajar yang teliti. Pilihannya bergantung pada SIAPA yang beranjak pergi.',
      table: {
        columns: ['Situasi', 'Yang kamu ucapkan', 'Harfiah'],
        rows: [
          ['Kamu tetap, dia pergi', '안녕히 가세요', 'Pergilah dengan selamat'],
          ['Kamu pergi, dia tetap', '안녕히 계세요', 'Tinggallah dengan selamat'],
          ['Kalian berdua pergi', '안녕히 가세요', 'Saling mengucapkan'],
          ['Situasi santai', '잘 가 / 잘 있어', 'Versi 반말'],
        ],
      },
      examples: [
        {
          ko: '(Keluar dari toko) 안녕히 계세요.',
          id: 'Permisi, saya pergi dulu.',
          note: 'Penjaga tokonya tetap di sana, jadi 계세요.',
        },
        {
          ko: '(Mengantar tamu ke pintu) 안녕히 가세요.',
          id: 'Selamat jalan.',
          note: 'Tamunya yang pergi, jadi 가세요.',
        },
      ],
    },
    {
      title: 'Basa-basi kantor',
      body:
        'Beberapa ungkapan ini terdengar aneh kalau diterjemahkan harfiah, tetapi dipakai berkali-kali setiap hari. Hafalkan sebagai satu kesatuan.',
      table: {
        columns: ['Ungkapan', 'Kapan', 'Arti sebenarnya'],
        rows: [
          ['수고하셨습니다', 'Saat pulang kerja', 'Terima kasih atas kerja kerasnya'],
          ['수고하세요', 'Saat meninggalkan orang yang masih bekerja', 'Semangat terus'],
          ['식사하셨어요?', 'Sapaan siang hari', 'Sudah makan? (bukan ajakan)'],
          ['좋은 하루 되세요', 'Saat berpisah pagi/siang', 'Semoga harimu baik'],
          ['고생 많으셨어요', 'Setelah proyek berat selesai', 'Anda sudah berjuang keras'],
        ],
      },
      examples: [
        { ko: '먼저 가겠습니다. 수고하셨습니다.', id: 'Saya pulang duluan. Terima kasih atas kerja kerasnya.' },
        {
          ko: '식사하셨어요?',
          id: 'Sudah makan?',
          note: 'Sapaan biasa — jawab saja 네, 먹었어요. Tidak perlu dianggap sebagai ajakan makan.',
        },
      ],
      more:
        '수고하셨습니다 adalah ungkapan yang paling sering kamu dengar di kantor Korea. Satu catatan sosial: ungkapan ini sebaiknya tidak diucapkan dari bawahan kepada atasan secara langsung, karena mengandung nada "menilai kerja orang lain". Kepada atasan, 고생 많으셨습니다 atau sekadar 먼저 들어가 보겠습니다 lebih aman.',
    },
  ],

  dialogue: {
    title: 'Hari pertama di kantor',
    situation: 'Vio diperkenalkan kepada tim barunya.',
    lines: [
      {
        speaker: '과장님',
        ko: '여러분, 오늘부터 같이 일할 비오 씨입니다.',
        id: 'Semuanya, ini Vio yang mulai hari ini bekerja bersama kita.',
        note: '〜입니다 — bentuk formal, wajar untuk pengumuman di depan tim.',
      },
      {
        speaker: '비오',
        ko: '안녕하세요. 비오입니다. 인도네시아에서 왔습니다. 잘 부탁드립니다.',
        id: 'Halo. Saya Vio. Saya berasal dari Indonesia. Mohon kerja samanya.',
        note: 'Perkenalan di depan banyak orang memakai 합쇼체.',
      },
      {
        speaker: '수진',
        ko: '반갑습니다! 저는 수진이에요. 같은 팀이에요.',
        id: 'Senang bertemu! Saya Sujin. Kita satu tim.',
        note: 'Kalimat pertama formal, lalu beralih ke 해요체 — pola yang sangat lazim.',
      },
      { speaker: '비오', ko: '아, 반가워요. 잘 모르는 게 많아요.', id: 'Ah, senang bertemu. Masih banyak yang saya belum tahu.' },
      {
        speaker: '수진',
        ko: '괜찮아요. 모르는 거 있으면 저한테 물어보세요.',
        id: 'Tidak apa-apa. Kalau ada yang tidak tahu, tanya saja ke saya.',
        note: '저한테 — penerima berupa orang, jadi 한테.',
      },
      { speaker: '비오', ko: '고맙습니다!', id: 'Terima kasih!' },
    ],
    politeness:
      'Perhatikan perpindahan tingkat kesopanan dalam satu adegan. Di depan tim, Vio memakai 합쇼체. Begitu bicara berdua dengan Sujin, keduanya beralih ke 해요체. Pergeseran ini normal dan justru terdengar wajar — yang canggung adalah tetap memakai 합쇼체 untuk obrolan berdua yang santai.',
  },

  passage: {
    title: '자기소개',
    intro: 'Perkenalan tertulis — bisa langsung kamu pakai dan ubah isinya.',
    sentences: [
      { ko: '안녕하세요. 처음 뵙겠습니다.', id: 'Halo. Senang berkenalan dengan Anda.' },
      { ko: '저는 비오라고 합니다.', id: 'Nama saya Vio.' },
      { ko: '인도네시아 자카르타에서 왔습니다.', id: 'Saya berasal dari Jakarta, Indonesia.' },
      { ko: '지금은 서울에서 일하고 있습니다.', id: 'Sekarang saya bekerja di Seoul.' },
      { ko: '회사에서 마케팅 일을 합니다.', id: 'Di kantor saya mengerjakan bidang pemasaran.' },
      { ko: '취미는 음악 듣기하고 요리예요.', id: 'Hobi saya mendengarkan musik dan memasak.' },
      { ko: '한국어는 아직 서툴지만 열심히 배우고 있어요.', id: 'Bahasa Korea saya masih kaku, tapi saya belajar dengan sungguh-sungguh.' },
      { ko: '잘 부탁드립니다.', id: 'Mohon kerja samanya.' },
    ],
    vocabInContext: [
      { ko: '처음 뵙겠습니다', id: 'senang berkenalan (sangat formal)' },
      { ko: '〜라고 합니다', id: 'nama saya …' },
      { ko: '서툴다', id: 'kaku, belum lancar' },
      { ko: '열심히', id: 'dengan sungguh-sungguh' },
    ],
    analysis: [
      'Paragraf ini memakai 합쇼체 (〜습니다/〜ㅂ니다) karena berupa perkenalan tertulis yang resmi. Dalam percakapan berdua, seluruhnya bisa diubah ke 해요체.',
      '비오라고 합니다 adalah pola baku memperkenalkan nama dalam situasi formal — sedikit lebih santun daripada 저는 비오입니다.',
      '일하고 있습니다 memakai pola -고 있다 ("sedang"), yang dipakai untuk keadaan yang berlangsung. Dalam 해요체 bentuknya 일하고 있어요.',
      '취미는 memakai 는 karena hobi diangkat sebagai topik baru. 음악 듣기 mengubah kata kerja 듣다 menjadi kata benda dengan akhiran -기.',
      '서툴지만 memakai -지만 ("meskipun"), yang menyambungkan dua hal yang bertentangan dalam satu kalimat.',
      'Kalimat terakhir tidak punya padanan persis dalam bahasa Indonesia, tetapi hampir wajib ada di penutup perkenalan kerja.',
    ],
  },

  exercises: [
    {
      id: 'm5l1-e1',
      kind: 'build',
      prompt: 'Susun kalimat perkenalan ini.',
      translation: 'Halo. Saya Vio. Saya berasal dari Indonesia.',
      tiles: ['안녕하세요.', '저는', '비오예요.', '인도네시아에서', '왔어요'],
      distractors: ['비오이에요.', '인도네시아에'],
      answers: ['안녕하세요. 저는 비오예요. 인도네시아에서 왔어요'],
      explain:
        '비오 berakhir vokal, jadi memakai 예요. Dan asal negara selalu memakai 에서 — dengan 에, artinya justru berubah menjadi "datang KE Indonesia".',
      parts: [
        { part: '안녕하세요.', role: 'salam pembuka' },
        { part: '저는', role: 'topik: saya' },
        { part: '비오예요.', role: 'nama + 예요 (berakhir vokal)' },
        { part: '인도네시아에서', role: 'asal, dengan 에서' },
        { part: '왔어요', role: '오다 → 왔어요 (bentuk lampau)' },
      ],
      tags: ['perkenalan'],
    },
    {
      id: 'm5l1-e2',
      kind: 'mc',
      prompt:
        'Kamu keluar dari sebuah toko. Penjaga tokonya tetap di dalam. Apa yang kamu ucapkan?',
      context: 'Pikirkan siapa yang beranjak pergi.',
      options: ['안녕히 계세요.', '안녕히 가세요.', '안녕하세요.', '반갑습니다.'],
      answerIndex: 0,
      explain:
        'Karena KAMU yang pergi dan penjaga toko yang tetap tinggal, ucapannya 안녕히 계세요 ("tinggallah dengan selamat"). Penjaga toko akan membalas dengan 안녕히 가세요.',
      whyNot: {
        '안녕히 가세요.': 'Itu diucapkan kepada orang yang PERGI. Di sini kamulah yang pergi.',
        '안녕하세요.': 'Itu salam pembuka, bukan penutup.',
        '반갑습니다.': 'Itu diucapkan saat baru berkenalan.',
      },
      tags: ['salam'],
    },
    {
      id: 'm5l1-e3',
      kind: 'match',
      prompt: 'Pasangkan setiap ungkapan dengan situasi pemakaiannya.',
      pairs: [
        { left: '수고하셨습니다', right: 'saat pulang kerja' },
        { left: '잘 부탁드립니다', right: 'penutup perkenalan di tempat kerja' },
        { left: '안녕히 계세요', right: 'kamu pergi, dia tetap tinggal' },
        { left: '식사하셨어요?', right: 'sapaan siang hari, bukan ajakan makan' },
        { left: '처음 뵙겠습니다', right: 'perkenalan pertama yang sangat formal' },
      ],
      explain:
        'Semua ungkapan ini sulit diterjemahkan harfiah tetapi dipakai setiap hari. Menghafalnya sebagai satu kesatuan jauh lebih berguna daripada membedah tata bahasanya.',
      tags: ['perkenalan'],
    },
    {
      id: 'm5l1-e4',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menyebutkan negara asalmu kepada orang Korea.',
      sentence: '저는 인도네시아___ 왔어요.',
      translation: 'Saya berasal dari Indonesia.',
      options: ['에서', '에', '으로', '까지'],
      answer: '에서',
      explain:
        '에서 menandai titik asal. Pola 〜에서 왔어요 adalah cara baku menyebutkan dari mana kamu berasal.',
      whyNot: {
        에: '인도네시아에 왔어요 berarti "saya datang KE Indonesia" — arahnya terbalik.',
        으로: '으로 menandai arah atau alat, bukan asal.',
        까지: '까지 menandai titik akhir.',
      },
      tags: ['에서', 'perkenalan'],
    },
    {
      id: 'm5l1-e5',
      kind: 'mc',
      prompt:
        'Kamu baru berkenalan dengan rekan kerja seumuran di kantor. Tingkat kesopanan mana yang paling tepat?',
      options: [
        '해요체 — 반가워요, 저는 비오예요.',
        '반말 — 반가워, 나는 비오야.',
        '합쇼체 untuk seluruh percakapan — 반갑습니다, 저는 비오입니다. 오늘 날씨가 좋습니다.',
        'Campur bebas antara 반말 dan 해요체.',
      ],
      answerIndex: 0,
      explain:
        '해요체 adalah pilihan aman untuk rekan kerja baru: sopan tanpa terasa kaku. Memakai 합쇼체 untuk SELURUH percakapan berdua terdengar terlalu berjarak, meskipun untuk kalimat pembuka saja justru wajar.',
      whyNot: {
        '반말 — 반가워, 나는 비오야.':
          '반말 kepada orang yang belum akrab terdengar merendahkan. Tunggu sampai ditawarkan.',
        '합쇼체 untuk seluruh percakapan — 반갑습니다, 저는 비오입니다. 오늘 날씨가 좋습니다.':
          'Tidak salah, tetapi terdengar seperti sedang berpidato. Umumnya hanya kalimat pembuka yang formal.',
        'Campur bebas antara 반말 dan 해요체.':
          'Mencampur tanpa alasan terdengar tidak konsisten dan bisa menyinggung.',
      },
      tags: ['tingkat kesopanan'],
    },
    {
      id: 'm5l1-e6',
      kind: 'fill',
      prompt: 'Lengkapi dengan bentuk yang tepat.',
      sentence: '저는 회사에서 마케팅 일___ 해요.',
      translation: 'Saya mengerjakan bidang pemasaran di kantor.',
      answers: ['을'],
      explain:
        '일 ("pekerjaan") adalah objek dari 하다, dan berakhir dengan 받침 ㄹ, jadi partikelnya 을.',
      tags: ['을/를', 'perkenalan'],
    },
    {
      id: 'm5l1-e7',
      kind: 'write',
      prompt: 'Tulis perkenalan dirimu sendiri dalam 5–6 kalimat bahasa Korea.',
      guide: [
        'Mulai dengan 안녕하세요.',
        'Sebutkan namamu: 저는 ___예요/이에요.',
        'Sebutkan asalmu dengan 에서 왔어요.',
        'Sebutkan pekerjaan atau status.',
        'Tambahkan satu kalimat tentang hobi atau hal yang kamu suka.',
        'Tutup dengan 만나서 반갑습니다.',
      ],
      model:
        '안녕하세요. 저는 비오예요. 인도네시아에서 왔어요. 회사에서 마케팅 일을 해요. 한국 음악을 좋아해요. 만나서 반갑습니다.',
      modelTranslation:
        'Halo. Saya Vio. Saya berasal dari Indonesia. Saya mengerjakan bidang pemasaran di kantor. Saya suka musik Korea. Senang bertemu dengan Anda.',
      expect: ['안녕하세요', '에서 왔어요', '반갑습니다'],
      checklist: [
        'Pemilihan 예요 / 이에요 sudah sesuai ada atau tidaknya 받침 pada namamu.',
        'Asal memakai 에서, bukan 에.',
        'Kalimat tentang kesukaan memakai 을/를 (karena 좋아하다 adalah kata kerja).',
        'Semua kalimat memakai tingkat kesopanan yang konsisten.',
        'Ada salam pembuka dan penutup.',
      ],
      tags: ['perkenalan'],
    },
  ],

  quiz: [
    {
      id: 'm5l1-q1',
      kind: 'mc',
      prompt: 'Rekanmu masih bekerja, dan kamu pulang duluan. Apa yang paling tepat kamu ucapkan?',
      options: [
        '먼저 가겠습니다. 수고하세요.',
        '먼저 가겠습니다. 안녕히 가세요.',
        '먼저 가겠습니다. 반갑습니다.',
        '먼저 가겠습니다. 처음 뵙겠습니다.',
      ],
      answerIndex: 0,
      explain:
        '수고하세요 ditujukan kepada orang yang MASIH bekerja — semacam "semangat terus". Dan karena rekanmu tetap tinggal, 안녕히 가세요 (yang ditujukan kepada orang yang pergi) tidak tepat.',
      whyNot: {
        '먼저 가겠습니다. 안녕히 가세요.': '안녕히 가세요 diucapkan kepada orang yang pergi; di sini kamulah yang pergi.',
        '먼저 가겠습니다. 반갑습니다.': '반갑습니다 untuk perkenalan.',
        '먼저 가겠습니다. 처음 뵙겠습니다.': 'Itu untuk pertemuan pertama.',
      },
      tags: ['salam'],
    },
    {
      id: 'm5l1-q2',
      kind: 'build',
      prompt: 'Susun kalimat penutup perkenalan kerja.',
      translation: 'Senang bertemu dengan Anda. Mohon kerja samanya.',
      tiles: ['만나서', '반갑습니다.', '잘', '부탁드립니다'],
      distractors: ['만나니까', '반가워'],
      answers: ['만나서 반갑습니다. 잘 부탁드립니다'],
      explain:
        '만나서 memakai -아/어서 karena ini ungkapan tetap. 잘 부탁드립니다 adalah penutup baku perkenalan di lingkungan kerja Korea.',
      parts: [
        { part: '만나서', role: 'alasan dengan -아/어서 (ungkapan tetap)' },
        { part: '반갑습니다.', role: '합쇼체 dari 반갑다' },
        { part: '잘', role: '"dengan baik"' },
        { part: '부탁드립니다', role: '"mohon kebaikan Anda"' },
      ],
      tags: ['perkenalan'],
    },
    {
      id: 'm5l1-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea dengan 해요체.',
      direction: 'id-ko',
      source: 'Akhir-akhir ini saya belajar bahasa Korea.',
      answers: [
        '요즘 한국어를 배워요',
        '저는 요즘 한국어를 배워요',
        '요즘 한국어를 공부해요',
      ],
      explain:
        '배우다 → 배워요 (ㅜ + ㅓ → ㅝ). 한국어 adalah objek, jadi memakai 를. 요즘 adalah keterangan waktu yang tidak memakai 에.',
      alternatives: [
        { form: '요즘 한국어를 공부해요.', nuance: '공부하다 lebih menekankan proses belajar formal; 배우다 lebih luas.' },
      ],
      tags: ['해요체'],
    },
  ],

  summary: {
    points: [
      'Tiga tingkat kesopanan: 합쇼체 (formal), 해요체 (sopan), 반말 (santai). 해요체 aman di hampir semua situasi.',
      'Jangan memakai 반말 sampai lawan bicaramu menawarkannya.',
      'Kerangka perkenalan: salam → nama → asal → pekerjaan → tambahan → penutup.',
      '안녕히 가세요 untuk orang yang pergi; 안녕히 계세요 kalau kamu yang pergi.',
      '잘 부탁드립니다 adalah penutup baku perkenalan di tempat kerja.',
      'Memulai dengan satu kalimat formal lalu beralih ke 해요체 adalah pola yang sangat lazim.',
    ],
    pitfalls: [
      {
        wrong: '(sambil keluar toko) 안녕히 가세요.',
        right: '안녕히 계세요.',
        why: 'Yang pergi adalah kamu, jadi lawan bicaramu yang "tinggal".',
      },
      {
        wrong: '인도네시아에 왔어요.',
        right: '인도네시아에서 왔어요.',
        why: 'Asal memakai 에서; dengan 에 artinya "datang ke Indonesia".',
      },
      {
        wrong: '저는 비오 씨예요.',
        right: '저는 비오예요.',
        why: '씨 tidak pernah dipakai untuk diri sendiri.',
      },
    ],
  },
}
