import type { Lesson } from '../../types/curriculum'

export const m6l1: Lesson = {
  id: 'm6-l1',
  moduleId: 'm6',
  number: '6.1',
  title: 'Membaca dan menulis diari',
  subtitle: 'Menyambung kalimat menjadi paragraf yang mengalir',
  objective:
    'Setelah pelajaran ini kamu bisa membaca paragraf Korea sepanjang delapan kalimat, mengenali kata penyambungnya, dan menulis satu entri diari sendiri.',
  focus: ['kata penyambung', 'menulis diari'],
  estimatedMinutes: 20,

  coreExamples: [
    {
      ko: '아침에 늦게 일어났어요. 그래서 아침을 못 먹었어요.',
      id: 'Pagi ini saya bangun kesiangan. Karena itu saya tidak sempat sarapan.',
      highlight: ['그래서'],
    },
    {
      ko: '일이 많았어요. 하지만 재미있었어요.',
      id: 'Pekerjaannya banyak. Tapi menyenangkan.',
      highlight: ['하지만'],
    },
    {
      ko: '점심을 먹었어요. 그리고 커피를 마셨어요.',
      id: 'Saya makan siang. Lalu minum kopi.',
      highlight: ['그리고'],
    },
    {
      ko: '오늘은 정말 바빴어요. 그런데 기분은 좋았어요.',
      id: 'Hari ini benar-benar sibuk. Tapi perasaannya senang.',
      highlight: ['그런데'],
    },
    {
      ko: '내일은 조금 쉬고 싶어요.',
      id: 'Besok saya ingin sedikit beristirahat.',
      highlight: ['쉬고 싶어요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '아침에 늦게 일어났어요. 그래서 아침을 못 먹었어요.',
        id: 'Pagi ini saya bangun kesiangan. Karena itu saya tidak sempat sarapan.',
        highlight: ['그래서'],
      },
      rows: [
        { unit: '아침에', formula: '아침 + 에', meaning: 'Pada pagi hari — keterangan waktu' },
        { unit: '늦게', formula: '늦다 + 게', meaning: 'Dengan terlambat — kata sifat menjadi keterangan' },
        { unit: '일어났어요', formula: '일어나다 → 일어나요 → 일어났어요', meaning: 'Bangun, bentuk lampau' },
        {
          unit: '그래서',
          formula: '그렇다 + -아서',
          meaning: '"Karena itu"; menyambungkan dua kalimat TERPISAH',
        },
        { unit: '못 먹었어요', formula: '못 + 먹었어요', meaning: 'Tidak sempat makan' },
      ],
      why:
        'Ada dua cara menyatakan sebab-akibat, dan diari yang baik memakai keduanya bergantian. Di dalam SATU kalimat, pakai -아/어서: 늦게 일어나서 아침을 못 먹었어요. Di antara DUA kalimat, pakai 그래서 sebagai kata pembuka kalimat baru. Memakai kalimat pendek yang disambung 그래서 membuat tulisanmu terasa lebih ringan dan lebih mudah dibaca — itulah gaya khas diari Korea.',
      swaps: [
        {
          alt: '늦게 일어나서 아침을 못 먹었어요.',
          effect:
            'Digabung menjadi satu kalimat dengan -아/어서. Artinya sama, tetapi terasa lebih padat.',
        },
        {
          alt: '늦게 일어났어요. 그리고 아침을 못 먹었어요.',
          effect:
            '그리고 hanya berarti "dan" — hubungan sebab-akibatnya hilang, jadi kalimatnya terdengar seperti dua kejadian yang tidak berkaitan.',
        },
      ],
    },
    {
      sentence: {
        ko: '오늘은 정말 바빴어요. 그런데 기분은 좋았어요.',
        id: 'Hari ini benar-benar sibuk. Tapi perasaannya senang.',
        highlight: ['그런데', '은'],
      },
      rows: [
        { unit: '오늘은', formula: '오늘 + 은', meaning: 'Hari ini — topik, dengan nuansa membandingkan' },
        { unit: '바빴어요', formula: '바쁘다 → 바빠요 → 바빴어요', meaning: 'Sibuk, bentuk lampau' },
        { unit: '그런데', formula: '그렇다 + -ㄴ데', meaning: '"Tapi, ngomong-ngomong"' },
        { unit: '기분은', formula: '기분 + 은', meaning: 'Perasaan — diperhadapkan dengan kesibukan' },
        { unit: '좋았어요', formula: '좋다 → 좋아요 → 좋았어요', meaning: 'Senang, bentuk lampau' },
      ],
      why:
        'Perhatikan dua kali pemakaian 은: pertama pada 오늘은, lalu pada 기분은. Keduanya menandai kontras — hari ini dibandingkan hari lain, dan perasaan dibandingkan kesibukan. Inilah yang membuat paragraf Korea terasa mengalir: partikel 은/는 bekerja seperti engsel yang menghubungkan satu kalimat ke kalimat berikutnya.',
      swaps: [
        {
          alt: '오늘은 정말 바빴어요. 하지만 기분은 좋았어요.',
          effect:
            '하지만 lebih tegas dan lebih "tertulis" daripada 그런데. Keduanya benar; 그런데 terasa lebih seperti berbicara.',
        },
        {
          alt: '오늘은 바빴지만 기분은 좋았어요.',
          effect:
            'Digabung dengan -지만 ("meskipun"). Versi paling ringkas, dan terdengar lebih matang.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '그리고', id: 'dan, lalu', pos: 'kata keterangan', note: 'Menambahkan, tanpa hubungan sebab-akibat.' },
    { ko: '그래서', id: 'karena itu, jadi', pos: 'kata keterangan', note: 'Menyatakan akibat.' },
    { ko: '그런데', id: 'tapi, ngomong-ngomong', pos: 'kata keterangan', note: 'Ringan, seperti berbicara.' },
    { ko: '하지만', id: 'tetapi', pos: 'kata keterangan', note: 'Lebih tegas, lazim dalam tulisan.' },
    { ko: '그러니까', id: 'karena itu (dengan saran)', pos: 'kata keterangan' },
    { ko: '기분', id: 'perasaan, suasana hati', pos: 'kata benda' },
    { ko: '하루', id: 'satu hari', pos: 'kata benda' },
    { ko: '일기', id: 'diari, buku harian', pos: 'kata benda' },
    { ko: '힘들다', id: 'berat, melelahkan', pos: 'kata sifat', note: '→ 힘들어요 / 힘들었어요' },
    { ko: '보람있다', id: 'berfaedah, memuaskan', pos: 'kata sifat', note: '→ 보람있어요' },
  ],

  grammar: [
    {
      title: 'Empat kata penyambung antarkalimat',
      body:
        'Kata-kata ini berdiri di AWAL kalimat baru, berbeda dari -고 dan -아/어서 yang menempel pada kata kerja di dalam satu kalimat. Menguasai keempatnya sudah cukup untuk menulis paragraf yang mengalir.',
      table: {
        caption:
          'Semuanya berasal dari 그렇다 ("begitu") yang digabung dengan akhiran penyambung.',
        columns: ['Kata', 'Arti', 'Padanan di dalam satu kalimat', 'Contoh'],
        rows: [
          ['그리고', 'dan, lalu', '-고', '밥을 먹었어요. 그리고 쉬었어요.'],
          ['그래서', 'karena itu', '-아/어서', '비가 왔어요. 그래서 집에 있었어요.'],
          ['그런데', 'tapi, ngomong-ngomong', '-는데', '바빴어요. 그런데 기분은 좋았어요.'],
          ['하지만', 'tetapi', '-지만', '어려워요. 하지만 재미있어요.'],
          ['그러니까', 'karena itu (+ saran)', '-(으)니까', '비가 와요. 그러니까 우산을 가져가세요.'],
        ],
      },
      examples: [
        {
          ko: '점심을 먹었어요. 그리고 커피를 마셨어요.',
          id: 'Saya makan siang. Lalu minum kopi.',
          note: 'Dua kejadian berurutan tanpa hubungan sebab-akibat.',
        },
        {
          ko: '일이 많았어요. 그래서 늦게 퇴근했어요.',
          id: 'Pekerjaannya banyak. Karena itu saya pulang terlambat.',
          note: 'Ada hubungan sebab-akibat.',
        },
      ],
      more:
        '그런데 punya fungsi kedua yang sangat sering dipakai: mengganti topik pembicaraan, mirip "ngomong-ngomong" dalam bahasa Indonesia. 그런데, 주말에 뭐 해요? ("Ngomong-ngomong, akhir pekan ngapain?"). Dalam percakapan ia sering dipendekkan menjadi 근데.',
    },
    {
      title: 'Gaya diari Korea',
      body:
        'Diari Korea punya beberapa kebiasaan yang membuatnya mudah dikenali — dan mudah ditiru.',
      table: {
        columns: ['Kebiasaan', 'Contoh', 'Kenapa'],
        rows: [
          ['Kalimat pendek', '오늘은 바빴어요.', 'Lebih mudah dibaca daripada satu kalimat panjang'],
          ['Subjek dibuang', '늦게 일어났어요.', 'Sudah jelas penulisnya sendiri'],
          ['Dibuka dengan 오늘은', '오늘은 정말 바빴어요.', '은 memberi kesan "hari ini sih…"'],
          ['Ditutup dengan perasaan', '기분이 좋았어요.', 'Pola khas penutup diari'],
          ['Ditutup dengan rencana', '내일은 일찍 자고 싶어요.', 'Menghubungkan ke hari berikutnya'],
        ],
      },
      examples: [
        { ko: '오늘은 정말 긴 하루였어요.', id: 'Hari ini benar-benar hari yang panjang.' },
        { ko: '내일은 더 좋은 하루가 될 거예요.', id: 'Besok pasti jadi hari yang lebih baik.' },
      ],
      more:
        'Banyak orang Korea menulis diari dengan akhiran 〜다 (bentuk kamus) alih-alih 〜요, karena diari tidak ditujukan kepada siapa pun: 오늘은 바빴다. Gaya ini disebut 해라체 dan sepenuhnya wajar untuk tulisan pribadi. Tetapi untuk latihan, tetaplah memakai 해요체 — bentuk itulah yang akan kamu pakai berbicara.',
    },
    {
      title: '-게 mengubah kata sifat menjadi keterangan',
      form: 'batang kata sifat + 게',
      body:
        'Pola kecil yang membuat tulisanmu terasa jauh lebih alami. Ia mengubah "terlambat" menjadi "dengan terlambat", "sederhana" menjadi "dengan sederhana".',
      table: {
        columns: ['Kata sifat', 'Menjadi keterangan', 'Contoh'],
        rows: [
          ['늦다 (terlambat)', '늦게', '늦게 일어났어요.'],
          ['빠르다 (cepat)', '빠르게', '빠르게 걸었어요.'],
          ['간단하다 (sederhana)', '간단하게', '간단하게 먹었어요.'],
          ['재미있다 (menarik)', '재미있게', '재미있게 봤어요.'],
          ['맛있다 (enak)', '맛있게', '맛있게 먹었어요.'],
        ],
      },
      examples: [
        { ko: '오늘은 간단하게 아침을 먹었어요.', id: 'Hari ini saya sarapan sederhana.' },
        {
          ko: '맛있게 드세요.',
          id: 'Selamat menikmati.',
          note: 'Ungkapan tetap yang diucapkan saat menyajikan makanan.',
        },
      ],
      more:
        'Beberapa keterangan punya bentuk tersendiri yang lebih umum daripada bentuk -게: 빨리 (cepat) lebih sering dipakai daripada 빠르게, dan 일찍 (lebih awal) dipakai alih-alih 이르게. Keduanya tidak salah, hanya saja bentuk pendek itu sudah mapan.',
    },
    {
      title: 'Membaca paragraf Korea',
      body:
        'Saat membaca, jangan menerjemahkan kata per kata dari depan. Carilah dulu KATA KERJA DI UJUNG kalimat — itulah yang memberi tahu apa yang terjadi. Baru setelah itu lihat ke depan untuk mencari siapa dan apa.',
      examples: [
        {
          ko: '저는 어제 친구하고 회사 앞 식당에서 점심을 먹었어요.',
          id: 'Kemarin saya makan siang bersama teman di rumah makan depan kantor.',
          note: 'Mulai dari 먹었어요 ("makan, lampau") → lalu 점심을 ("makan siang") → lalu 식당에서 ("di rumah makan") → dan seterusnya mundur ke depan.',
        },
      ],
      more:
        'Kebiasaan ini juga membantumu MENULIS. Tentukan dulu kata kerjanya, lalu objeknya, lalu tempat dan waktunya, lalu topiknya — persis kebalikan dari cara kalimat itu dibaca. Inilah teknik yang sudah kamu latih di Pelajaran 4.1.',
    },
  ],

  dialogue: {
    title: 'Bertukar kabar lewat chat',
    situation: 'Vio dan Sujin bertukar pesan di malam hari.',
    lines: [
      { speaker: '수진', ko: '오늘 어땠어요?', id: 'Hari ini gimana?' },
      {
        speaker: '비오',
        ko: '좀 힘들었어요. 회의가 세 개 있었어요.',
        id: 'Agak berat. Ada tiga rapat.',
        note: '세 개 — angka asli Korea dengan penghitung 개.',
      },
      {
        speaker: '수진',
        ko: '어휴, 고생했어요. 그런데 다 끝났어요?',
        id: 'Aduh, capek ya. Tapi semuanya sudah selesai?',
        note: '그런데 di sini berfungsi mengganti arah pembicaraan.',
      },
      {
        speaker: '비오',
        ko: '네, 다 끝났어요. 그래서 지금 기분이 좋아요.',
        id: 'Ya, semuanya selesai. Karena itu sekarang perasaan saya senang.',
        note: '그래서 menyambungkan sebab dan akibat antara dua kalimat.',
      },
      { speaker: '수진', ko: '잘됐네요! 푹 쉬세요.', id: 'Syukurlah! Istirahat yang cukup, ya.' },
      { speaker: '비오', ko: '고마워요. 수진 씨도 잘 자요.', id: 'Terima kasih. Sujin juga selamat tidur.' },
    ],
    politeness:
      '고생했어요 diucapkan kepada orang yang sebaya atau lebih muda. Kepada atasan, bentuknya 고생 많으셨습니다. Dan 잘됐네요 memakai -네요 yang menyatakan reaksi spontan — terdengar hangat dan tulus.',
  },

  passage: {
    title: '어느 수요일',
    intro:
      'Satu entri diari lengkap — delapan kalimat. Coba baca sekali tanpa melihat terjemahan, lalu buka terjemahannya untuk memeriksa.',
    sentences: [
      { ko: '오늘은 수요일이었어요.', id: 'Hari ini hari Rabu.' },
      { ko: '아침에 늦게 일어났어요. 그래서 아침을 못 먹었어요.', id: 'Pagi tadi saya bangun kesiangan. Karena itu tidak sempat sarapan.' },
      { ko: '회사에 도착하니까 아홉 시 반이었어요.', id: 'Begitu sampai di kantor, ternyata sudah jam setengah sepuluh.' },
      { ko: '오전에는 회의가 두 개 있었어요.', id: 'Pagi hari ada dua rapat.' },
      { ko: '점심은 수진 씨하고 회사 앞 식당에서 먹었어요.', id: 'Makan siang saya di rumah makan depan kantor bersama Sujin.' },
      { ko: '오후에는 보고서를 썼어요. 일이 많아서 조금 힘들었어요.', id: 'Sore hari saya menulis laporan. Karena pekerjaannya banyak, agak berat.' },
      { ko: '하지만 다 끝내서 기분은 좋았어요.', id: 'Tapi karena semuanya selesai, perasaannya senang.' },
      { ko: '내일은 일찍 일어나고 싶어요. 그러니까 오늘은 일찍 잘 거예요.', id: 'Besok saya ingin bangun lebih awal. Karena itu hari ini saya akan tidur lebih awal.' },
    ],
    vocabInContext: [
      { ko: '수요일', id: 'hari Rabu' },
      { ko: '도착하다', id: 'tiba, sampai' },
      { ko: '오전 / 오후', id: 'pagi hari / sore hari' },
      { ko: '보고서', id: 'laporan' },
      { ko: '끝내다', id: 'menyelesaikan' },
    ],
    analysis: [
      '오늘은, 오전에는, 점심은, 오후에는, 내일은, 기분은 — enam kali 은/는 dipakai untuk membandingkan bagian-bagian hari. Inilah "engsel" yang membuat paragraf ini mengalir.',
      '그래서, 하지만, 그러니까 — tiga kata penyambung antarkalimat. Perhatikan bahwa 그러니까 dipilih di kalimat terakhir karena diikuti keputusan.',
      '일이 많아서 dan 다 끝내서 — dua klausa alasan di dalam kalimat, tanpa penanda lampau meskipun seluruh ceritanya tentang hari yang sudah lewat.',
      '도착하니까 memakai -(으)니까 dalam makna keduanya: "begitu melakukan X, ternyata Y". Ini pemakaian yang berbeda dari "karena", dan hanya muncul dengan kata kerja gerak.',
      '회의가 두 개 있었어요 — 있다 menuntut subjek dengan 가, lalu jumlahnya disebutkan dengan angka asli + penghitung.',
      'Entri ini ditutup dengan keinginan (일어나고 싶어요) dan rencana (잘 거예요) — pola penutup diari yang paling umum.',
    ],
  },

  exercises: [
    {
      id: 'm6l1-e1',
      kind: 'mc',
      prompt: 'Berdasarkan diari 어느 수요일, kenapa penulis tidak sempat sarapan?',
      options: [
        'Karena bangun kesiangan.',
        'Karena ada dua rapat di pagi hari.',
        'Karena harus menulis laporan.',
        'Karena makan siang bersama Sujin.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat kedua berbunyi 아침에 늦게 일어났어요. 그래서 아침을 못 먹었어요 — kata 그래서 menandai bahwa bangun kesiangan adalah sebabnya.',
      whyNot: {
        'Karena ada dua rapat di pagi hari.': 'Rapat disebut di kalimat keempat, setelah ia sudah tiba di kantor.',
        'Karena harus menulis laporan.': 'Laporan ditulis pada 오후 (sore hari).',
        'Karena makan siang bersama Sujin.': 'Itu kejadian terpisah di siang hari.',
      },
      tags: ['pemahaman bacaan'],
    },
    {
      id: 'm6l1-e2',
      kind: 'mc',
      prompt: 'Jam berapa penulis tiba di kantor?',
      context: 'Perhatikan kalimat ketiga.',
      options: ['아홉 시 반', '아홉 시', '열 시 반', '여덟 시 반'],
      answerIndex: 0,
      explain:
        '회사에 도착하니까 아홉 시 반이었어요 — 아홉 시 반 berarti jam setengah sepuluh (9:30). 반 berarti "setengah", dan selalu mengikuti jamnya.',
      tags: ['pemahaman bacaan'],
    },
    {
      id: 'm6l1-e3',
      kind: 'particle',
      prompt: 'Pilih kata penyambung yang tepat.',
      context:
        'Kalimat pertama adalah SEBAB, kalimat kedua adalah AKIBAT.',
      sentence: '비가 많이 왔어요. ___ 집에 있었어요.',
      translation: 'Hujannya deras. Karena itu saya di rumah.',
      options: ['그래서', '그리고', '하지만', '그런데'],
      answer: '그래서',
      explain:
        '그래서 menyatakan akibat — padanan antarkalimat dari -아/어서. Hujan deras adalah sebab, tinggal di rumah adalah akibatnya.',
      whyNot: {
        그리고: '그리고 hanya berarti "dan" — hubungan sebab-akibatnya hilang.',
        하지만: '하지만 berarti "tetapi", yang menyiratkan pertentangan.',
        그런데: '그런데 berarti "tapi" atau "ngomong-ngomong", bukan "karena itu".',
      },
      tags: ['kata penyambung'],
    },
    {
      id: 'm6l1-e4',
      kind: 'match',
      prompt: 'Pasangkan kata penyambung antarkalimat dengan padanannya di dalam satu kalimat.',
      pairs: [
        { left: '그리고', right: '-고' },
        { left: '그래서', right: '-아/어서' },
        { left: '하지만', right: '-지만' },
        { left: '그러니까', right: '-(으)니까' },
        { left: '그런데', right: '-는데' },
      ],
      explain:
        'Semua kata penyambung ini berasal dari 그렇다 ("begitu") yang digabung dengan akhiran penyambung masing-masing. Karena itu artinya selalu sejajar.',
      tags: ['kata penyambung'],
    },
    {
      id: 'm6l1-e5',
      kind: 'build',
      prompt:
        'Susun ulang keempat kalimat ini menjadi paragraf diari yang runtut.',
      translation:
        'Hari ini saya sibuk. Pagi hari ada rapat. Sore hari saya menulis laporan. Tapi semuanya selesai jadi saya senang.',
      tiles: [
        '오늘은 바빴어요.',
        '오전에는 회의가 있었어요.',
        '오후에는 보고서를 썼어요.',
        '하지만 다 끝내서 기분이 좋았어요.',
      ],
      answers: [
        '오늘은 바빴어요. 오전에는 회의가 있었어요. 오후에는 보고서를 썼어요. 하지만 다 끝내서 기분이 좋았어요.',
      ],
      explain:
        'Diari Korea biasanya dibuka dengan kesan umum (오늘은 바빴어요), lalu merinci kejadian secara berurutan waktu (오전 → 오후), lalu ditutup dengan perasaan. Kalimat yang dibuka 하지만 selalu berada setelah hal yang dipertentangkannya.',
      parts: [
        { part: '오늘은 바빴어요.', role: 'Kesan umum sebagai pembuka' },
        { part: '오전에는 회의가 있었어요.', role: 'Kejadian pagi' },
        { part: '오후에는 보고서를 썼어요.', role: 'Kejadian sore' },
        { part: '하지만 다 끝내서 기분이 좋았어요.', role: 'Penutup dengan perasaan' },
      ],
      tags: ['menulis diari'],
    },
    {
      id: 'm6l1-e6',
      kind: 'fill',
      prompt: 'Ubah kata sifat 간단하다 menjadi keterangan dengan -게.',
      sentence: '오늘은 아침을 ___ 먹었어요.',
      translation: 'Hari ini saya sarapan sederhana.',
      answers: ['간단하게'],
      explain:
        'Akhiran -게 ditempelkan pada batang kata sifat untuk menjadikannya keterangan: 간단하 + 게 → 간단하게 ("dengan sederhana").',
      tags: ['menulis diari'],
    },
    {
      id: 'm6l1-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Pekerjaannya banyak jadi agak berat. Tapi perasaannya senang.',
      answers: ['일이 많아서 조금 힘들었어요. 하지만 기분은 좋았어요', '일이 많아서 조금 힘들었어요. 그런데 기분은 좋았어요'],
      explain:
        '일이 많아서 adalah klausa alasan tanpa penanda lampau. 하지만 membuka kalimat kedua, dan 기분은 memakai 은 karena perasaan sedang diperhadapkan dengan kesibukan.',
      hint: 'Sebab-akibat di dalam kalimat memakai -아/어서; pertentangan antarkalimat memakai 하지만.',
      tags: ['kata penyambung'],
    },
    {
      id: 'm6l1-e8',
      kind: 'write',
      prompt: 'Tulis satu entri diari tentang harimu kemarin, 5–7 kalimat.',
      guide: [
        'Buka dengan kesan umum: 어제는 … 했어요 / 바빴어요.',
        'Ceritakan 2–3 kegiatan dalam bentuk lampau 았/었어요.',
        'Pakai setidaknya satu kata penyambung: 그래서, 하지만, atau 그리고.',
        'Pakai satu klausa alasan dengan -아/어서.',
        'Tutup dengan perasaanmu atau rencana untuk hari ini.',
      ],
      model:
        '어제는 조금 바빴어요. 오전에는 회의가 있었어요. 그리고 오후에는 보고서를 썼어요. 일이 많아서 늦게 퇴근했어요. 하지만 다 끝내서 기분은 좋았어요. 오늘은 일찍 쉬고 싶어요.',
      modelTranslation:
        'Kemarin agak sibuk. Pagi hari ada rapat. Lalu sore hari saya menulis laporan. Karena pekerjaannya banyak, saya pulang terlambat. Tapi karena semuanya selesai, perasaannya senang. Hari ini saya ingin istirahat lebih awal.',
      expect: ['어제', '그리고', '하지만', '아서'],
      checklist: [
        'Semua kegiatan kemarin memakai bentuk lampau 았/었어요.',
        'Klausa alasan dengan -아/어서 TIDAK membawa penanda lampau.',
        'Ada setidaknya satu kata penyambung di awal kalimat.',
        'Keterangan waktu memakai 에 bila perlu (tetapi 어제 tidak).',
        'Tempat kegiatan memakai 에서, tujuan memakai 에.',
        'Ada kalimat penutup tentang perasaan atau rencana.',
      ],
      tags: ['menulis diari'],
    },
  ],

  quiz: [
    {
      id: 'm6l1-q1',
      kind: 'mc',
      prompt: 'Dari diari 어느 수요일, bagaimana perasaan penulis di akhir hari?',
      options: [
        'Senang, karena semua pekerjaannya selesai.',
        'Kesal, karena bangun kesiangan.',
        'Biasa saja, tidak ada yang istimewa.',
        'Sedih, karena harus pulang terlambat.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat 하지만 다 끝내서 기분은 좋았어요 menyatakannya langsung: meskipun berat, perasaannya senang karena semuanya selesai. Kata 하지만 menandai pembalikan dari kalimat sebelumnya yang menyebut pekerjaan itu melelahkan.',
      tags: ['pemahaman bacaan'],
    },
    {
      id: 'm6l1-q2',
      kind: 'particle',
      prompt: 'Pilih kata penyambung yang tepat.',
      context: 'Kalimat kedua berupa SARAN untuk lawan bicara.',
      sentence: '비가 와요. ___ 우산을 가져가세요.',
      translation: 'Hujan. Karena itu bawalah payung.',
      options: ['그러니까', '그래서', '그리고', '하지만'],
      answer: '그러니까',
      explain:
        'Sama seperti -(으)니까 di dalam kalimat, bentuk antarkalimatnya 그러니까 wajib dipakai kalau kalimat berikutnya berupa perintah, saran, atau ajakan.',
      whyNot: {
        그래서: '그래서 (padanan -아/어서) tidak boleh diikuti perintah atau saran.',
        그리고: '그리고 hanya berarti "dan", tanpa hubungan sebab-akibat.',
        하지만: '하지만 berarti "tetapi".',
      },
      tags: ['kata penyambung'],
    },
    {
      id: 'm6l1-q3',
      kind: 'build',
      prompt: 'Susun kalimat penutup diari ini.',
      translation: 'Besok saya ingin bangun lebih awal.',
      tiles: ['내일은', '일찍', '일어나고', '싶어요'],
      distractors: ['내일에는', '일어났고'],
      answers: ['내일은 일찍 일어나고 싶어요'],
      explain:
        '내일 tidak memakai 에, tetapi boleh ditambah 은 untuk membandingkannya dengan hari ini. -고 싶다 ditempel pada batang 일어나, tanpa penanda lampau.',
      parts: [
        { part: '내일은', role: 'waktu + 은 (membandingkan dengan hari ini)' },
        { part: '일찍', role: 'keterangan: lebih awal' },
        { part: '일어나고', role: 'batang 일어나 + 고' },
        { part: '싶어요', role: '싶다 → 싶어요, menutup kalimat' },
      ],
      tags: ['menulis diari'],
    },
  ],

  summary: {
    points: [
      'Kata penyambung antarkalimat berdiri di awal kalimat baru: 그리고, 그래서, 그런데, 하지만, 그러니까.',
      'Masing-masing punya padanan di dalam satu kalimat: -고, -아/어서, -는데, -지만, -(으)니까.',
      '그러니까 wajib dipakai kalau kalimat berikutnya berupa saran atau perintah.',
      'Diari Korea memakai kalimat pendek, membuang subjek, dan ditutup dengan perasaan atau rencana.',
      '은/는 bekerja sebagai "engsel" yang membandingkan bagian-bagian cerita: 오늘은, 오후에는, 기분은.',
      '-게 mengubah kata sifat menjadi keterangan: 늦게, 간단하게, 맛있게.',
      'Saat membaca, cari kata kerja di ujung kalimat lebih dulu, baru lihat ke depan.',
    ],
    pitfalls: [
      {
        wrong: '비가 와요. 그래서 우산을 가져가세요.',
        right: '비가 와요. 그러니까 우산을 가져가세요.',
        why: 'Kalimat berikutnya berupa saran, jadi harus memakai 그러니까.',
      },
      {
        wrong: '일이 많았어서 힘들었어요.',
        right: '일이 많아서 힘들었어요.',
        why: 'Klausa -아/어서 tidak pernah membawa penanda lampau.',
      },
      {
        wrong: '내일에는 일찍 자고 싶어요.',
        right: '내일은 일찍 자고 싶어요.',
        why: '내일 tidak memakai 에, sama seperti 오늘 dan 어제.',
      },
    ],
  },
}
