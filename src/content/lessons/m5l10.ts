import type { Lesson } from '../../types/curriculum'

export const m5l10: Lesson = {
  id: 'm5-l10',
  moduleId: 'm5',
  number: '5.10',
  title: 'Telepon kantor',
  subtitle: '계시다, 드리다, dan kalimat telepon yang sudah baku',
  objective:
    'Setelah pelajaran ini kamu bisa menelepon kantor Korea, menanyakan seseorang dengan sopan, meninggalkan pesan, dan menutup telepon dengan benar.',
  focus: ['계시다', '전화 드리다', 'formula telepon'],
  estimatedMinutes: 17,

  coreExamples: [
    { ko: '여보세요?', id: 'Halo?', highlight: ['여보세요'] },
    {
      ko: '김 과장님 계세요?',
      id: 'Apakah Pak Manajer Kim ada?',
      highlight: ['계세요'],
      highlightKind: 'ending',
    },
    {
      ko: '지금 자리에 안 계세요.',
      id: 'Beliau sedang tidak di tempat.',
      highlight: ['안 계세요'],
      highlightKind: 'ending',
    },
    {
      ko: '메모 남겨 드릴까요?',
      id: 'Mau saya sampaikan pesan?',
      highlight: ['남겨 드릴까요'],
      highlightKind: 'ending',
    },
    {
      ko: '제가 다시 전화 드릴게요.',
      id: 'Saya yang akan menelepon lagi.',
      highlight: ['전화 드릴게요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '김 과장님 계세요?',
        id: 'Apakah Pak Manajer Kim ada?',
        highlight: ['계세요'],
        highlightKind: 'ending',
      },
      rows: [
        {
          unit: '김 과장님',
          formula: '김 + 과장 + 님',
          meaning: 'Manajer Kim; 님 adalah akhiran hormat untuk jabatan',
        },
        {
          unit: '계세요?',
          formula: '계시다 + (으)세요',
          meaning: '"Apakah beliau ada?" — bentuk hormat dari 있다',
        },
      ],
      why:
        '계시다 adalah bentuk HORMAT dari 있다, dan hanya dipakai untuk ORANG yang kamu hormati — tidak pernah untuk benda. Jadi 과장님 계세요? ("apakah manajer ada?") benar, tetapi 책이 계세요? salah; untuk benda tetap 있어요. Memakai 있어요? saat menanyakan atasan di telepon langsung terdengar kurang sopan, dan ini salah satu hal pertama yang diperhatikan orang Korea. Perhatikan juga akhiran 님 yang ditempel pada jabatan — tanpa itu, 과장 saja terdengar terlalu datar.',
      swaps: [
        {
          alt: '김 과장님 있어요?',
          effect:
            'Secara tata bahasa bisa dipahami, tetapi terdengar kurang sopan untuk konteks kantor. 계세요? adalah bentuk yang diharapkan.',
        },
        {
          alt: '김 과장님 자리에 계세요?',
          effect:
            'Lebih spesifik: "apakah beliau ada di mejanya?". Berguna kalau kamu tahu orangnya sedang di kantor tapi mungkin sedang rapat.',
        },
      ],
    },
    {
      sentence: {
        ko: '제가 다시 전화 드릴게요.',
        id: 'Saya yang akan menelepon lagi.',
        highlight: ['전화 드릴게요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '제가', formula: '저 + 가 → 제가', meaning: 'Saya — menegaskan siapa yang akan menelepon' },
        { unit: '다시', formula: '—', meaning: 'Lagi, kembali' },
        {
          unit: '전화 드릴게요',
          formula: '전화하다 → 전화 드리다 + (으)ㄹ게요',
          meaning: '"Saya akan menelepon" — bentuk rendah hati',
        },
      ],
      why:
        '전화 드리다 adalah bentuk rendah hati dari 전화하다, dipakai saat KAMU menelepon orang yang kamu hormati. Polanya melanjutkan 드리다 dari Pelajaran 5.4: beberapa kata kerja berbentuk "kata benda + 하다" mengganti 하다 dengan 드리다 ketika penerimanya dihormati. Yang paling sering kamu pakai: 전화 드리다, 연락 드리다, dan 말씀 드리다.',
      swaps: [
        {
          alt: '제가 다시 전화할게요.',
          effect: 'Bentuk biasa — tepat untuk rekan sebaya atau teman, tetapi terlalu datar untuk atasan.',
        },
        {
          alt: '제가 다시 연락 드릴게요.',
          effect:
            '"Saya akan menghubungi lagi." Lebih luas daripada 전화 — bisa lewat telepon, email, atau pesan.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '여보세요', id: 'halo (khusus telepon)', pos: 'ungkapan' },
    {
      ko: '계시다',
      id: 'ada (bentuk hormat dari 있다)',
      pos: 'kata kerja',
      note: 'Hanya untuk orang. 해요체 hormat: 계세요.',
    },
    { ko: '자리', id: 'tempat duduk, meja kerja', pos: 'kata benda', note: '자리에 없다 = tidak di tempat.' },
    { ko: '메모', id: 'pesan, catatan', pos: 'kata benda' },
    { ko: '남기다', id: 'meninggalkan', pos: 'kata kerja', note: '해요체: 남겨요.' },
    { ko: '바꾸다', id: 'mengganti, mengalihkan', pos: 'kata kerja', note: '바꿔 주세요 = tolong sambungkan.' },
    { ko: '끊다', id: 'memutus, menutup telepon', pos: 'kata kerja', note: '해요체: 끊어요.' },
    { ko: '들리다', id: 'terdengar', pos: 'kata kerja', note: '잘 안 들려요 = tidak terdengar jelas.' },
    { ko: '과장님', id: 'manajer', pos: 'kata benda', note: '님 adalah akhiran hormat untuk jabatan.' },
    { ko: '잠시만요', id: 'sebentar ya', pos: 'ungkapan' },
    { ko: '통화', id: 'percakapan telepon', pos: 'kata benda', note: '통화 중이에요 = sedang menelepon.' },
  ],

  grammar: [
    {
      title: '계시다 — bentuk hormat dari 있다',
      form: '있다 → 계시다 · 없다 → 안 계시다',
      body:
        'Beberapa kata kerja Korea punya bentuk hormat tersendiri yang sama sekali berbeda bentuknya. Kamu sudah bertemu 드시다 (dari 먹다) dan 드리다 (dari 주다); 계시다 melengkapi kelompok ini.',
      table: {
        caption: 'Semua bentuk hormat ini hanya dipakai untuk ORANG, tidak pernah untuk benda.',
        columns: ['Biasa', 'Hormat', 'Contoh', 'Arti'],
        rows: [
          ['있다', '계시다', '과장님 계세요?', 'Apakah manajer ada?'],
          ['없다', '안 계시다', '자리에 안 계세요.', 'Beliau tidak di tempat.'],
          ['먹다', '드시다', '식사 드셨어요?', 'Sudah makan?'],
          ['자다', '주무시다', '안녕히 주무세요.', 'Selamat tidur.'],
          ['말하다', '말씀하시다', '말씀하세요.', 'Silakan bicara.'],
          ['주다', '드리다', '메모 드릴게요.', 'Saya sampaikan pesannya.'],
        ],
      },
      examples: [
        { ko: '사장님은 지금 회의 중이세요.', id: 'Pak Direktur sedang rapat.' },
        { ko: '선생님 계세요?', id: 'Apakah Bapak/Ibu Guru ada?' },
      ],
      mistakes: [
        {
          wrong: '책이 계세요?',
          right: '책이 있어요?',
          why: '계시다 hanya untuk orang. Benda selalu memakai 있다.',
        },
        {
          wrong: '저는 지금 집에 계세요.',
          right: '저는 지금 집에 있어요.',
          why: 'Bentuk hormat tidak pernah dipakai untuk diri sendiri (Pelajaran 2.8).',
        },
      ],
    },
    {
      title: '드리다 — merendahkan diri sendiri',
      form: 'kata benda + 드리다 (menggantikan 하다)',
      body:
        'Kamu sudah memakai 드리다 untuk memberi barang di Pelajaran 5.4. Yang baru di sini: beberapa kata kerja "kata benda + 하다" pun mengganti 하다 dengan 드리다 saat lawan bicaranya dihormati.',
      table: {
        columns: ['Biasa', 'Rendah hati', 'Arti'],
        rows: [
          ['전화하다', '전화 드리다', 'menelepon'],
          ['연락하다', '연락 드리다', 'menghubungi'],
          ['말하다', '말씀 드리다', 'mengatakan'],
          ['인사하다', '인사 드리다', 'memberi salam'],
          ['주다', '드리다', 'memberikan'],
        ],
      },
      examples: [
        { ko: '제가 다시 전화 드릴게요.', id: 'Saya yang akan menelepon lagi.' },
        { ko: '내일 연락 드리겠습니다.', id: 'Besok saya akan menghubungi Anda.' },
        { ko: '잠깐 말씀 드려도 될까요?', id: 'Boleh saya bicara sebentar?' },
      ],
      more:
        'Perhatikan perbedaan arah yang konsisten: 계시다 menaikkan ORANG LAIN, sedangkan 드리다 merendahkan DIRI SENDIRI. Keduanya menghasilkan efek yang sama — menunjukkan hormat — tetapi dari dua arah berbeda. Inilah pola yang berulang di seluruh sistem kesopanan Korea.',
    },
    {
      title: 'Kalimat telepon yang sudah baku',
      body:
        'Percakapan telepon kantor di Korea sangat formulaik. Kabar baiknya, itu berarti kamu bisa menghafalnya dan langsung terdengar lancar.',
      table: {
        columns: ['Tahap', 'Bahasa Korea', 'Arti'],
        rows: [
          ['Membuka', '여보세요?', 'Halo?'],
          ['Menyebut diri', '저는 ABC 회사의 비오입니다.', 'Saya Vio dari perusahaan ABC.'],
          ['Menanyakan orang', '김 과장님 계세요?', 'Apakah Pak Kim ada?'],
          ['Minta disambungkan', '김 과장님 좀 바꿔 주세요.', 'Tolong sambungkan ke Pak Kim.'],
          ['Menunggu', '잠시만 기다려 주세요.', 'Mohon tunggu sebentar.'],
          ['Tidak ada', '지금 자리에 안 계세요.', 'Beliau sedang tidak di tempat.'],
          ['Menawarkan pesan', '메모 남겨 드릴까요?', 'Mau saya sampaikan pesan?'],
          ['Akan menelepon lagi', '다시 전화 드릴게요.', 'Saya akan menelepon lagi.'],
          ['Menutup', '들어가세요.', 'Selamat, sampai nanti.'],
        ],
      },
      examples: [
        { ko: '여보세요? 거기 한국무역이죠?', id: 'Halo? Ini Hanguk Muyeok, kan?', note: '-죠? dari Pelajaran 7.2.' },
        { ko: '잘 안 들려요. 다시 말씀해 주시겠어요?', id: 'Tidak terdengar jelas. Bisa diulang?' },
      ],
      more:
        '들어가세요 secara harfiah berarti "silakan masuk", dan sebagai penutup telepon maknanya kira-kira "silakan kembali ke urusanmu". Ini khas telepon — kamu tidak mengucapkannya saat berpisah langsung. Alternatif lain yang sama lazimnya adalah 수고하세요 kepada rekan sebaya, atau cukup 감사합니다.',
    },
    {
      title: 'Jabatan dan 님',
      body:
        'Di kantor Korea, orang dipanggil dengan JABATAN, bukan nama. Dan jabatan itu hampir selalu ditempeli 님 saat kamu menyebut orang lain.',
      table: {
        caption: 'Jangan pernah menempelkan 님 pada jabatanmu sendiri.',
        columns: ['Jabatan', 'Arti', 'Cara memanggil'],
        rows: [
          ['사장', 'direktur utama', '사장님'],
          ['부장', 'kepala divisi', '부장님'],
          ['과장', 'manajer', '과장님'],
          ['대리', 'asisten manajer', '대리님'],
          ['팀장', 'ketua tim', '팀장님'],
          ['선생님', 'guru / sapaan umum', 'sudah mengandung 님'],
        ],
      },
      examples: [
        { ko: '김 과장님 계세요?', id: 'Apakah Manajer Kim ada?', note: 'Marga + jabatan + 님.' },
        {
          ko: '저는 ABC 회사 대리 비오입니다.',
          id: 'Saya Vio, asisten manajer di perusahaan ABC.',
          note: 'Tanpa 님 — karena menyebut jabatan sendiri.',
        },
      ],
      mistakes: [
        {
          wrong: '저는 비오 과장님입니다.',
          right: '저는 비오 과장입니다.',
          why: '님 tidak pernah dipakai untuk diri sendiri — sama seperti 씨 di Pelajaran 1.2.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Menelepon kantor rekanan',
    situation: 'Vio menelepon perusahaan mitra untuk mencari Manajer Kim.',
    lines: [
      { speaker: '비오', ko: '여보세요? 거기 한국무역이죠?', id: 'Halo? Ini Hanguk Muyeok, kan?' },
      { speaker: '직원', ko: '네, 맞습니다.', id: 'Ya, betul.' },
      {
        speaker: '비오',
        ko: '저는 ABC 회사의 비오입니다. 김 과장님 계세요?',
        id: 'Saya Vio dari perusahaan ABC. Apakah Manajer Kim ada?',
        note: 'Menyebut diri tanpa 님, menyebut orang lain dengan 님.',
      },
      {
        speaker: '직원',
        ko: '잠시만 기다려 주세요. … 죄송합니다, 지금 자리에 안 계세요.',
        id: 'Mohon tunggu sebentar. … Maaf, beliau sedang tidak di tempat.',
        note: '안 계세요 — bentuk hormat dari 없어요.',
      },
      { speaker: '비오', ko: '그럼 언제쯤 들어오세요?', id: 'Kalau begitu kira-kira kapan beliau kembali?' },
      {
        speaker: '직원',
        ko: '세 시쯤 들어오실 거예요. 메모 남겨 드릴까요?',
        id: 'Sekitar jam tiga. Mau saya sampaikan pesan?',
        note: '들어오실 거예요 — dugaan dengan sisipan hormat 〜시〜.',
      },
      {
        speaker: '비오',
        ko: '아니요, 괜찮아요. 제가 다시 전화 드릴게요.',
        id: 'Tidak usah. Saya yang akan menelepon lagi.',
        note: '괜찮아요 menolak tawaran (Pelajaran 5.4); 전화 드릴게요 bentuk rendah hati.',
      },
      { speaker: '직원', ko: '네, 알겠습니다.', id: 'Baik, dimengerti.' },
      { speaker: '비오', ko: '감사합니다. 들어가세요.', id: 'Terima kasih. Sampai nanti.' },
    ],
    politeness:
      'Perhatikan dua arah kesopanan yang bekerja bersamaan. Vio memakai 계세요 dan 안 계세요 untuk MENAIKKAN Manajer Kim, lalu 전화 드릴게요 untuk MERENDAHKAN dirinya sendiri. Petugasnya memakai 합쇼체 (맞습니다, 알겠습니다) karena sedang mewakili perusahaan.',
  },

  passage: {
    title: '한국의 전화 예절',
    intro: 'Beberapa kebiasaan yang membedakan telepon Korea dari percakapan tatap muka.',
    sentences: [
      { ko: '한국에서는 전화를 받을 때 "여보세요"라고 해요.', id: 'Di Korea, saat menerima telepon kita mengucapkan "yeoboseyo".' },
      { ko: '그다음에 자기 이름을 말해요.', id: 'Setelah itu kita menyebutkan nama sendiri.' },
      { ko: '회사에 전화할 때는 회사 이름도 말해요.', id: 'Saat menelepon kantor, nama perusahaan juga disebutkan.' },
      { ko: '그 사람이 자리에 없으면 메모를 남길 수 있어요.', id: 'Kalau orangnya tidak di tempat, kita bisa meninggalkan pesan.' },
      { ko: '전화를 끊기 전에 "들어가세요"라고 인사해요.', id: 'Sebelum menutup telepon, kita mengucapkan "deureogaseyo".' },
      { ko: '이 인사는 전화에서만 써요.', id: 'Salam ini hanya dipakai di telepon.' },
    ],
    vocabInContext: [
      { ko: '받다', id: 'menerima' },
      { ko: '자기', id: 'diri sendiri' },
      { ko: '인사하다', id: 'memberi salam' },
      { ko: '쓰다', id: 'memakai' },
    ],
    analysis: [
      '전화를 받을 때 dan 전화할 때는 memakai -(으)ㄹ 때 ("saat/ketika"), pola yang belum dipelajari resmi — cukup kenali artinya.',
      '"여보세요"라고 해요 memakai 〜라고 하다 untuk mengutip ucapan. Pola kutipan ini muncul berkali-kali dalam bacaan, dan akan dibahas lebih lengkap nanti.',
      '자리에 없으면 memakai -(으)면 (Pelajaran 5.6) dengan 에 karena 없다 menyatakan keberadaan (Pelajaran 2.4).',
      '남길 수 있어요 adalah pola kemampuan -(으)ㄹ 수 있다 dari Pelajaran 3.3.',
      '끊기 전에 memakai -기 전에 dari Pelajaran 5.9 — kata kerja membutuhkan akhiran -기.',
      '전화에서만 memakai 에서 (tempat) + 만 ("hanya") — partikel tempat bertahan saat bertemu 만 (Pelajaran 2.6).',
    ],
  },

  exercises: [
    {
      id: 'm5l10-e1',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Kamu menelepon kantor dan menanyakan seorang manajer.',
      sentence: '김 과장님 ___?',
      translation: 'Apakah Manajer Kim ada?',
      options: ['계세요', '있어요', '이세요', '하세요'],
      answer: '계세요',
      explain:
        '계시다 adalah bentuk hormat dari 있다 dan dipakai untuk orang yang dihormati. Di konteks kantor, 계세요? adalah bentuk yang diharapkan.',
      whyNot: {
        있어요: 'Secara tata bahasa bisa dipahami, tetapi terdengar kurang sopan untuk menanyakan atasan.',
        이세요: '이다 dipakai untuk identitas ("adalah"), bukan keberadaan.',
        하세요: '하다 berarti "melakukan", bukan "ada".',
      },
      tags: ['계시다'],
    },
    {
      id: 'm5l10-e2',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '그 책이 계세요?',
      translation: 'Apakah buku itu ada?',
      answers: ['그 책이 있어요?', '그 책 있어요?'],
      explain:
        '계시다 hanya dipakai untuk ORANG yang dihormati. Benda selalu memakai 있다, tidak peduli seberapa sopan situasinya.',
      tags: ['계시다'],
    },
    {
      id: 'm5l10-e3',
      kind: 'fill',
      prompt: 'Ubah 전화하다 menjadi bentuk rendah hati.',
      context: 'Kamu akan menelepon kembali atasan rekanan.',
      sentence: '제가 다시 ___.',
      translation: 'Saya yang akan menelepon lagi.',
      answers: ['전화 드릴게요', '전화드릴게요'],
      explain:
        '전화하다 menjadi 전화 드리다 saat penerimanya dihormati, lalu ditutup -(으)ㄹ게요 karena kamu mengumumkan keputusanmu sendiri.',
      tags: ['전화 드리다'],
    },
    {
      id: 'm5l10-e4',
      kind: 'match',
      prompt: 'Pasangkan bentuk biasa dengan bentuk hormatnya.',
      pairs: [
        { left: '있다', right: '계시다 — ada (untuk orang)' },
        { left: '먹다', right: '드시다 — makan' },
        { left: '자다', right: '주무시다 — tidur' },
        { left: '말하다', right: '말씀하시다 — berbicara' },
        { left: '주다', right: '드리다 — memberikan (merendah)' },
        { left: '전화하다', right: '전화 드리다 — menelepon (merendah)' },
      ],
      explain:
        'Perhatikan dua arah yang berbeda: 계시다, 드시다, 주무시다, dan 말씀하시다 MENAIKKAN orang lain, sedangkan 드리다 dan 전화 드리다 MERENDAHKAN diri sendiri. Keduanya sama-sama menunjukkan hormat.',
      tags: ['계시다', '전화 드리다'],
    },
    {
      id: 'm5l10-e5',
      kind: 'build',
      prompt: 'Susun pembukaan telepon ini.',
      translation: 'Saya Vio dari perusahaan ABC. Apakah Manajer Kim ada?',
      tiles: ['저는', 'ABC 회사의', '비오입니다.', '김 과장님', '계세요?'],
      distractors: ['비오 과장님입니다.', '있어요?'],
      answers: ['저는 ABC 회사의 비오입니다. 김 과장님 계세요?'],
      explain:
        'Menyebut diri sendiri TANPA 님, menyebut orang lain DENGAN 님. Dan keberadaan orang yang dihormati memakai 계세요, bukan 있어요.',
      parts: [
        { part: '저는', role: 'topik: saya' },
        { part: 'ABC 회사의', role: 'asal perusahaan dengan 의' },
        { part: '비오입니다.', role: 'nama + 입니다 (formal, tanpa 님)' },
        { part: '김 과장님', role: 'marga + jabatan + 님' },
        { part: '계세요?', role: 'bentuk hormat dari 있어요?' },
      ],
      tags: ['계시다', 'formula telepon'],
    },
    {
      id: 'm5l10-e6',
      kind: 'correct',
      prompt: 'Perbaiki cara menyebut diri sendiri.',
      sentence: '저는 비오 과장님입니다.',
      translation: 'Saya Vio, seorang manajer.',
      answers: ['저는 비오 과장입니다'],
      explain:
        '님 adalah akhiran hormat yang tidak pernah dipakai untuk diri sendiri — sama persis seperti 씨 yang kamu pelajari di Pelajaran 1.2.',
      tags: ['formula telepon'],
    },
    {
      id: 'm5l10-e7',
      kind: 'mc',
      prompt: 'Kapan 들어가세요 dipakai?',
      options: [
        'Sebagai penutup percakapan TELEPON.',
        'Saat menyambut tamu masuk ke ruangan.',
        'Saat mempersilakan orang makan.',
        'Saat berpisah tatap muka di jalan.',
      ],
      answerIndex: 0,
      explain:
        'Harfiahnya "silakan masuk", tetapi sebagai penutup telepon maknanya kira-kira "silakan kembali ke urusanmu". Bacaan juga menegaskan 이 인사는 전화에서만 써요 — salam ini hanya dipakai di telepon.',
      whyNot: {
        'Saat menyambut tamu masuk ke ruangan.': 'Untuk itu dipakai 어서 오세요 atau 들어오세요.',
        'Saat mempersilakan orang makan.': 'Untuk itu dipakai 맛있게 드세요 (Pelajaran 5.3).',
        'Saat berpisah tatap muka di jalan.': 'Untuk itu dipakai 안녕히 가세요 (Pelajaran 5.1).',
      },
      tags: ['formula telepon'],
    },
    {
      id: 'm5l10-e8',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Mohon tunggu sebentar.',
      answers: ['잠시만 기다려 주세요', '잠깐만 기다려 주세요', '잠시만요'],
      explain:
        '기다리다 → 기다려요 → 기다려 → 기다려 주세요. Bentuk pendek 잠시만요 juga sangat lazim di telepon.',
      tags: ['formula telepon'],
    },
  ],

  quiz: [
    {
      id: 'm5l10-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR?',
      options: [
        '사장님은 지금 자리에 안 계세요.',
        '사장님은 지금 자리에 없으세요.',
        '사장님은 지금 자리에 안 있어요.',
        '저는 지금 자리에 안 계세요.',
      ],
      answerIndex: 0,
      explain:
        'Bentuk hormat dari 없어요 adalah 안 계세요 — memakai 계시다 yang disangkal dengan 안. Dan bentuk hormat tidak pernah dipakai untuk diri sendiri.',
      whyNot: {
        '사장님은 지금 자리에 없으세요.': '없다 tidak dipakai dalam bentuk hormat; yang benar 안 계세요.',
        '사장님은 지금 자리에 안 있어요.': '있어요 kurang sopan untuk menyebut atasan.',
        '저는 지금 자리에 안 계세요.': 'Bentuk hormat tidak boleh dipakai untuk diri sendiri.',
      },
      tags: ['계시다'],
    },
    {
      id: 'm5l10-q2',
      kind: 'fill',
      prompt: 'Ubah 연락하다 menjadi bentuk rendah hati.',
      sentence: '내일 ___.',
      translation: 'Besok saya akan menghubungi Anda.',
      answers: ['연락 드릴게요', '연락드릴게요', '연락 드리겠습니다'],
      explain:
        '연락하다 menjadi 연락 드리다 saat lawan bicaranya dihormati — polanya sama dengan 전화 드리다 dan 말씀 드리다.',
      tags: ['전화 드리다'],
    },
    {
      id: 'm5l10-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Mau saya sampaikan pesan?',
      answers: ['메모 남겨 드릴까요?', '메모를 남겨 드릴까요?'],
      explain:
        'Memakai -아/어 드릴까요? dari Pelajaran 5.4: 남기다 → 남겨요 → 남겨 → 남겨 드릴까요?. Ini tawaran dari pihak yang melayani.',
      tags: ['formula telepon'],
    },
  ],

  summary: {
    points: [
      '계시다 adalah bentuk hormat dari 있다 — hanya untuk ORANG, tidak pernah untuk benda.',
      'Bentuk sangkalannya 안 계세요, bukan 없으세요.',
      '드리다 merendahkan diri sendiri: 전화 드리다, 연락 드리다, 말씀 드리다.',
      '계시다 menaikkan orang lain; 드리다 merendahkan diri — dua arah, satu tujuan.',
      'Jabatan orang lain selalu ditempeli 님; jabatanmu sendiri tidak pernah.',
      '여보세요 hanya untuk telepon, dan 들어가세요 hanya untuk menutup telepon.',
      'Bentuk hormat tidak pernah dipakai untuk diri sendiri.',
    ],
    pitfalls: [
      {
        wrong: '책이 계세요?',
        right: '책이 있어요?',
        why: '계시다 hanya untuk orang.',
      },
      {
        wrong: '과장님이 없으세요.',
        right: '과장님이 안 계세요.',
        why: 'Bentuk hormat dari 없다 adalah 안 계시다.',
      },
      {
        wrong: '저는 비오 과장님입니다.',
        right: '저는 비오 과장입니다.',
        why: '님 tidak pernah dipakai untuk diri sendiri.',
      },
    ],
  },
}
