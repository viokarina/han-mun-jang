import type { Lesson } from '../../types/curriculum'

export const m4l2: Lesson = {
  id: 'm4-l2',
  moduleId: 'm4',
  number: '4.2',
  title: 'Menyatakan alasan',
  subtitle: '-아/어서 vs -(으)니까, dan kapan masing-masing dipakai',
  objective:
    'Setelah pelajaran ini kamu bisa menyambungkan sebab dan akibat dalam satu kalimat, serta tahu kenapa salah satunya tidak boleh dipakai untuk ajakan.',
  focus: ['-아/어서', '-(으)니까'],
  estimatedMinutes: 16,

  coreExamples: [
    {
      ko: '비가 와서 집에 있어요.',
      id: 'Karena hujan, saya di rumah.',
      highlight: ['와서'],
      highlightKind: 'ending',
    },
    {
      ko: '일이 많아서 늦게 퇴근했어요.',
      id: 'Karena pekerjaannya banyak, saya pulang terlambat.',
      highlight: ['많아서'],
      highlightKind: 'ending',
    },
    {
      ko: '시간이 없으니까 택시로 가요.',
      id: 'Karena tidak ada waktu, ayo naik taksi.',
      highlight: ['없으니까'],
      highlightKind: 'ending',
    },
    {
      ko: '날씨가 좋으니까 산책할까요?',
      id: 'Karena cuacanya bagus, bagaimana kalau jalan-jalan?',
      highlight: ['좋으니까'],
      highlightKind: 'ending',
    },
    {
      ko: '만나서 반가워요.',
      id: 'Senang bertemu dengan Anda.',
      highlight: ['만나서'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '일이 많아서 늦게 퇴근했어요.',
        id: 'Karena pekerjaannya banyak, saya pulang terlambat.',
        highlight: ['많아서'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '일이', formula: '일 + 이', meaning: 'Pekerjaan — subjek klausa alasan' },
        {
          unit: '많아서',
          formula: '많다 → 많아요 → 많아 + 서',
          meaning: 'Karena banyak; dibentuk dari bentuk 해요체 tanpa 요',
        },
        { unit: '늦게', formula: '늦다 + 게', meaning: 'Dengan terlambat — keterangan cara' },
        { unit: '퇴근했어요', formula: '퇴근하다 → 퇴근했어요', meaning: 'Pulang kerja, bentuk lampau' },
      ],
      why:
        'Dua hal penting di sini. Pertama, cara membentuknya: ambil bentuk 해요체, buang 요, tambahkan 서. 많아요 → 많아 → 많아서. Kedua — dan ini aturan yang sering dilanggar — klausa -아/어서 TIDAK BOLEH membawa penanda lampau. Meskipun ceritanya tentang kemarin, bentuknya tetap 많아서, bukan 많았어서. Waktu kejadiannya sudah ditunjukkan oleh kata kerja terakhir (퇴근했어요).',
      swaps: [
        {
          alt: '일이 많았어서 늦게 퇴근했어요. ✗',
          effect:
            'Salah. Penanda lampau 았 tidak pernah muncul sebelum -아/어서. Ini kesalahan nomor satu untuk pola ini.',
        },
        {
          alt: '일이 많으니까 늦게 퇴근했어요.',
          effect:
            'Benar juga, tetapi terdengar seperti kamu sedang MEMBERI ALASAN kepada seseorang — misalnya menjelaskan kepada atasan kenapa kamu pulang telat. -아/어서 terdengar lebih netral, seperti sekadar bercerita.',
        },
      ],
    },
    {
      sentence: {
        ko: '시간이 없으니까 택시로 가요.',
        id: 'Karena tidak ada waktu, ayo naik taksi.',
        highlight: ['없으니까'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '시간이', formula: '시간 + 이', meaning: 'Waktu — subjek klausa alasan' },
        {
          unit: '없으니까',
          formula: '없다 → 없 + 으니까',
          meaning: 'Karena tidak ada; dibentuk dari BATANG kata',
        },
        { unit: '택시로', formula: '택시 + 로', meaning: 'Dengan taksi — alat' },
        { unit: '가요', formula: '가다 → 가요', meaning: 'Pergi; di sini berfungsi sebagai ajakan' },
      ],
      why:
        'Kalimat ini HARUS memakai -(으)니까, bukan -아/어서. Alasannya: klausa akibatnya berupa AJAKAN ("ayo naik taksi"). -아/어서 tidak pernah boleh diikuti ajakan, perintah, atau permintaan. Cara membentuknya pun berbeda: -(으)니까 ditempel pada BATANG kata — 으니까 kalau batangnya berakhir konsonan, 니까 kalau berakhir vokal.',
      swaps: [
        {
          alt: '시간이 없어서 택시로 가요. (dalam arti ajakan) ✗',
          effect:
            'Tidak boleh. Kalau kalimat terakhir adalah ajakan atau perintah, alasannya wajib memakai -(으)니까.',
        },
        {
          alt: '시간이 없어서 택시로 갔어요.',
          effect:
            'Benar — karena sekarang kalimat terakhirnya adalah pernyataan ("saya pergi naik taksi"), bukan ajakan.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '비가 오다', id: 'hujan (turun)', pos: 'ungkapan', note: '→ 비가 와요 / 비가 와서' },
    { ko: '택시', id: 'taksi', pos: 'kata benda' },
    { ko: '산책하다', id: 'berjalan-jalan santai', pos: 'kata kerja', note: '→ 산책해요' },
    { ko: '피곤하다', id: 'lelah', pos: 'kata sifat', note: '→ 피곤해요' },
    { ko: '막히다', id: 'macet, tersumbat', pos: 'kata kerja', note: '길이 막혀요 = jalanan macet.' },
    { ko: '늦다', id: 'terlambat', pos: 'kata kerja', note: '→ 늦어요 / 늦게 (keterangan)' },
    { ko: '감기', id: 'flu, masuk angin', pos: 'kata benda', note: '감기에 걸리다 = kena flu.' },
    { ko: '그래서', id: 'karena itu, jadi', pos: 'kata keterangan', note: 'Menyambung dua kalimat terpisah.' },
    { ko: '왜냐하면', id: 'sebabnya adalah', pos: 'kata keterangan', note: 'Dipakai di awal kalimat penjelas.' },
    { ko: '우산', id: 'payung', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-아/어서 — alasan netral',
      form: 'bentuk 해요체 − 요 + 서',
      body:
        'Cara membentuknya persis seperti bentuk lampau: mulai dari 해요체, buang 요, lalu tambahkan 서. Semua penggabungan vokal sudah selesai, jadi kamu tidak perlu menghitung ulang.',
      table: {
        columns: ['Bentuk kamus', '해요체', '+ 서', 'Arti'],
        rows: [
          ['오다', '와요', '와서', 'karena datang'],
          ['많다', '많아요', '많아서', 'karena banyak'],
          ['없다', '없어요', '없어서', 'karena tidak ada'],
          ['바쁘다', '바빠요', '바빠서', 'karena sibuk'],
          ['피곤하다', '피곤해요', '피곤해서', 'karena lelah'],
          ['이다', '이에요', '이라서 / 여서', 'karena adalah'],
        ],
      },
      examples: [
        { ko: '비가 와서 우산을 샀어요.', id: 'Karena hujan, saya membeli payung.' },
        { ko: '피곤해서 일찍 잤어요.', id: 'Karena lelah, saya tidur lebih awal.' },
      ],
      mistakes: [
        {
          wrong: '비가 왔어서 집에 있었어요.',
          right: '비가 와서 집에 있었어요.',
          why: 'Penanda lampau tidak pernah muncul sebelum -아/어서.',
        },
      ],
      more:
        '-아/어서 punya makna kedua yang penting: URUTAN KEJADIAN yang berkaitan erat. 집에 와서 밥을 먹었어요 berarti "setelah sampai di rumah, saya makan" — bukan "karena sampai di rumah". Bedanya dengan -고: pada -아/어서, kegiatan kedua terjadi DI TEMPAT atau SEBAGAI LANJUTAN dari yang pertama; pada -고, keduanya sekadar berurutan tanpa kaitan. Bandingkan 친구를 만나서 영화를 봤어요 ("bertemu teman lalu nonton bersamanya") dengan 친구를 만나고 집에 갔어요 ("bertemu teman, lalu pulang").',
    },
    {
      title: '-(으)니까 — alasan yang ditekankan',
      form: 'batang + 으니까 (konsonan) · 니까 (vokal)',
      body:
        'Berbeda dari -아/어서, bentuk ini ditempel pada BATANG kata. Dan tidak seperti -아/어서, ia BOLEH membawa penanda lampau.',
      table: {
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가', '가니까', 'karena pergi'],
          ['없다', '없', '없으니까', 'karena tidak ada'],
          ['좋다', '좋', '좋으니까', 'karena bagus'],
          ['하다', '하', '하니까', 'karena melakukan'],
          ['먹었다', '먹었', '먹었으니까', 'karena sudah makan'],
        ],
      },
      examples: [
        { ko: '시간이 없으니까 빨리 가요.', id: 'Karena tidak ada waktu, ayo cepat pergi.' },
        { ko: '비가 오니까 우산을 가져가세요.', id: 'Karena hujan, bawalah payung.' },
        { ko: '밥을 먹었으니까 괜찮아요.', id: 'Karena sudah makan, tidak apa-apa.' },
      ],
    },
    {
      title: 'Tabel keputusan: mana yang dipakai?',
      body:
        'Satu aturan menyelesaikan sebagian besar kasus: lihat KALIMAT TERAKHIR. Kalau berupa ajakan, perintah, atau permintaan, wajib -(으)니까.',
      table: {
        caption:
          'Kalau klausa terakhirnya pernyataan biasa, keduanya benar — tinggal pilih nuansanya.',
        columns: ['Kalimat terakhir', 'Pakai', 'Contoh'],
        rows: [
          ['Pernyataan biasa', '-아/어서 atau -(으)니까', '비가 와서 집에 있어요.'],
          ['Ajakan (-아/어요, -ㄹ까요?)', '-(으)니까 saja', '시간이 없으니까 택시로 가요.'],
          ['Perintah / permintaan (-세요)', '-(으)니까 saja', '비가 오니까 우산을 쓰세요.'],
          ['Alasan sudah lampau', '-(으)니까 saja', '밥을 먹었으니까 괜찮아요.'],
          ['Ungkapan tetap', '-아/어서 saja', '만나서 반가워요.'],
        ],
      },
      examples: [
        {
          ko: '배가 고파서 밥을 먹었어요.',
          id: 'Karena lapar, saya makan.',
          note: 'Pernyataan — boleh keduanya, tetapi -아/어서 terasa lebih netral.',
        },
        {
          ko: '배가 고프니까 밥을 먹어요.',
          id: 'Karena lapar, ayo makan.',
          note: 'Ajakan — wajib -(으)니까.',
        },
      ],
      mistakes: [
        {
          wrong: '시간이 없어서 빨리 가세요.',
          right: '시간이 없으니까 빨리 가세요.',
          why: 'Klausa terakhirnya perintah, jadi alasannya harus memakai -(으)니까.',
        },
      ],
      more:
        'Di luar aturan itu, nuansanya berbeda tipis. -아/어서 terdengar seperti sekadar menjelaskan rangkaian sebab-akibat; -(으)니까 terdengar seperti kamu sedang MENGAJUKAN alasan itu kepada lawan bicara, kadang dengan sedikit penegasan. Karena itu, dalam permintaan maaf, -아/어서 lebih aman: 늦어서 죄송합니다 terdengar tulus, sedangkan 늦었으니까 죄송합니다 bisa terdengar seperti membela diri.',
    },
    {
      title: 'Ungkapan tetap dengan -아/어서',
      body:
        'Beberapa ungkapan sehari-hari sudah membeku dalam bentuk -아/어서. Hafalkan sebagai satu kesatuan — jangan mencoba menggantinya dengan -(으)니까.',
      table: {
        columns: ['Ungkapan', 'Arti', 'Kapan dipakai'],
        rows: [
          ['만나서 반가워요', 'Senang bertemu', 'Saat berkenalan'],
          ['늦어서 죄송합니다', 'Maaf saya terlambat', 'Permintaan maaf'],
          ['도와주셔서 감사합니다', 'Terima kasih sudah membantu', 'Ucapan terima kasih'],
          ['걱정해 주셔서 고마워요', 'Terima kasih sudah peduli', 'Ucapan terima kasih'],
        ],
      },
      examples: [
        { ko: '만나서 반가워요.', id: 'Senang bertemu dengan Anda.' },
        { ko: '늦어서 죄송합니다.', id: 'Maaf saya terlambat.' },
      ],
      more:
        'Polanya konsisten: permintaan maaf dan ucapan terima kasih di Korea hampir selalu memakai -아/어서 untuk menyebutkan alasannya. Kalau kamu hanya menghafal empat ungkapan dari pelajaran ini, hafalkan keempat ini — semuanya akan kamu pakai berulang kali.',
    },
  ],

  dialogue: {
    title: 'Terlambat karena macet',
    situation: 'Vio tiba terlambat di kantor dan menjelaskan kepada Sujin.',
    lines: [
      {
        speaker: '비오',
        ko: '늦어서 죄송합니다.',
        id: 'Maaf saya terlambat.',
        note: 'Ungkapan tetap — selalu memakai -아/어서.',
      },
      { speaker: '수진', ko: '괜찮아요. 무슨 일 있었어요?', id: 'Tidak apa-apa. Ada apa memangnya?' },
      {
        speaker: '비오',
        ko: '길이 많이 막혀서 한 시간 걸렸어요.',
        id: 'Jalanannya macet sekali jadi perjalanannya satu jam.',
        note: '막혀서 — dari 막혀요, tanpa penanda lampau meskipun ceritanya sudah lewat.',
      },
      {
        speaker: '수진',
        ko: '아, 오늘 비가 와서 더 막혀요.',
        id: 'Ah, hari ini hujan jadi lebih macet.',
      },
      {
        speaker: '비오',
        ko: '내일도 비가 와요?',
        id: 'Besok hujan juga?',
      },
      {
        speaker: '수진',
        ko: '네. 그러니까 내일은 좀 일찍 나오세요.',
        id: 'Ya. Karena itu besok berangkatlah sedikit lebih awal.',
        note: '그러니까 ("karena itu") adalah bentuk -(으)니까 yang berdiri sendiri. Dipakai di sini karena kalimat berikutnya adalah saran.',
      },
    ],
    politeness:
      '죄송합니다 lebih formal daripada 미안해요 dan tepat untuk situasi kantor. Perhatikan bahwa Sujin memakai 그러니까 — bukan 그래서 — karena ia hendak memberi saran. Pola "alasan + saran" selalu menuntut -(으)니까.',
  },

  passage: {
    title: '오늘 하루',
    intro: 'Catatan harian yang penuh sebab-akibat.',
    sentences: [
      { ko: '오늘 아침에 늦게 일어났어요.', id: 'Pagi ini saya bangun kesiangan.' },
      { ko: '알람을 못 들어서 삼십 분 늦었어요.', id: 'Karena tidak mendengar alarm, saya terlambat tiga puluh menit.' },
      { ko: '그래서 아침을 못 먹었어요.', id: 'Karena itu saya tidak sempat sarapan.' },
      { ko: '회사에서 일이 많아서 점심도 늦게 먹었어요.', id: 'Di kantor pekerjaannya banyak jadi makan siang pun telat.' },
      { ko: '너무 피곤하니까 오늘은 일찍 잘 거예요.', id: 'Karena terlalu lelah, hari ini saya akan tidur lebih awal.' },
      { ko: '내일은 알람을 두 개 맞출 거예요.', id: 'Besok saya akan pasang dua alarm.' },
    ],
    vocabInContext: [
      { ko: '알람', id: 'alarm' },
      { ko: '듣다', id: 'mendengar (→ 들어요, ㄷ tidak beraturan)' },
      { ko: '너무', id: 'terlalu, sangat' },
      { ko: '맞추다', id: 'menyetel, mencocokkan' },
    ],
    analysis: [
      '못 들어서 — klausa alasan tanpa penanda lampau, meskipun seluruh ceritanya tentang hari ini yang sudah lewat. Waktu kejadiannya ditunjukkan oleh 늦었어요.',
      '일이 많아서 — subjek klausa alasan memakai 이/가 (일이), bukan 은/는. Di dalam anak kalimat, subjeknya selalu memakai 이/가.',
      '그래서 adalah 그렇다 + -아서 yang sudah membeku menjadi satu kata, dipakai untuk menyambung dua kalimat TERPISAH.',
      '피곤하니까 memakai -(으)니까 karena klausa terakhirnya adalah keputusan/rencana yang sedang diambil. Dengan -아/어서 juga bisa dipahami, tetapi -(으)니까 terdengar lebih seperti "jadi ya sudah, saya putuskan…".',
      '들어서 berasal dari 듣다 yang tidak beraturan: ㄷ berubah menjadi ㄹ sebelum vokal → 들어요 → 들어서.',
    ],
  },

  exercises: [
    {
      id: 'm4l2-e1',
      kind: 'fill',
      prompt: 'Ubah menjadi klausa alasan dengan -아/어서.',
      sentence: '비가 ___ 집에 있어요. (오다)',
      translation: 'Karena hujan, saya di rumah.',
      answers: ['와서'],
      explain:
        '오다 → 와요 (해요체) → buang 요 → tambahkan 서 → 와서. Perhatikan bahwa penggabungan vokal (ㅗ + ㅏ → ㅘ) sudah terjadi di bentuk 해요체.',
      hint: 'Mulai dari bentuk 해요체-nya: 와요.',
      tags: ['-아/어서'],
    },
    {
      id: 'm4l2-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk alasan yang tepat.',
      context:
        'Kalimat terakhirnya adalah AJAKAN — kamu mengajak lawan bicara naik taksi.',
      sentence: '시간이 ___ 택시로 가요.',
      translation: 'Karena tidak ada waktu, ayo naik taksi.',
      options: ['없으니까', '없어서', '없고', '없지만'],
      answer: '없으니까',
      explain:
        'Kalau klausa terakhirnya berupa ajakan, perintah, atau permintaan, alasannya WAJIB memakai -(으)니까. 없다 punya batang 없 yang berakhir konsonan, jadi bentuknya 없으니까.',
      whyNot: {
        없어서: '-아/어서 tidak boleh diikuti ajakan atau perintah. Ini aturan yang kaku.',
        없고: '-고 sekadar menyambung dua hal tanpa menyatakan sebab-akibat.',
        없지만: '-지만 berarti "meskipun", bukan "karena".',
      },
      tags: ['-(으)니까'],
    },
    {
      id: 'm4l2-e3',
      kind: 'correct',
      prompt: 'Perbaiki klausa alasannya.',
      sentence: '일이 많았어서 늦게 퇴근했어요.',
      translation: 'Karena pekerjaannya banyak, saya pulang terlambat.',
      answers: ['일이 많아서 늦게 퇴근했어요'],
      explain:
        'Klausa -아/어서 tidak pernah membawa penanda lampau. Waktu kejadiannya sudah ditunjukkan oleh kata kerja terakhir (퇴근했어요), jadi klausa alasannya cukup 많아서.',
      tags: ['-아/어서'],
    },
    {
      id: 'm4l2-e4',
      kind: 'correct',
      prompt: 'Perbaiki bentuk alasannya.',
      sentence: '시간이 없어서 빨리 가세요.',
      translation: 'Karena tidak ada waktu, cepatlah pergi.',
      answers: ['시간이 없으니까 빨리 가세요'],
      explain:
        'Klausa terakhirnya adalah PERINTAH (가세요), jadi alasannya harus memakai -(으)니까. Ini salah satu aturan tata bahasa Korea yang benar-benar kaku.',
      tags: ['-(으)니까'],
    },
    {
      id: 'm4l2-e5',
      kind: 'match',
      prompt: 'Pasangkan setiap kalimat dengan bentuk alasan yang benar untuk mengisinya.',
      pairs: [
        {
          left: '시간이 없___ 같이 가요.',
          right: '없으니까 — diikuti ajakan',
        },
        {
          left: '비가 오___ 우산을 가져가세요.',
          right: '오니까 — diikuti perintah',
        },
        {
          left: '밥을 먹었___ 괜찮아요.',
          right: '먹었으니까 — alasannya sudah lampau',
        },
        {
          left: '늦___ 죄송합니다.',
          right: '늦어서 — permintaan maaf',
        },
        {
          left: '비가 와___ 집에 있어요.',
          right: '와서 — pernyataan biasa (boleh keduanya)',
        },
      ],
      explain:
        'Satu pertanyaan menyelesaikan hampir semua kasus: apakah kalimat terakhirnya meminta lawan bicara melakukan sesuatu? Kalau ya, pakai -(으)니까.',
      tags: ['-아/어서', '-(으)니까'],
    },
    {
      id: 'm4l2-e6',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Karena lelah, saya tidur lebih awal.',
      tiles: ['피곤해서', '일찍', '잤어요'],
      distractors: ['피곤했어서', '피곤하니까'],
      answers: ['피곤해서 일찍 잤어요'],
      explain:
        '피곤하다 → 피곤해요 → 피곤해서. Tanpa penanda lampau, meskipun kalimat utamanya lampau. 피곤하니까 juga bisa dipahami, tetapi untuk sekadar bercerita, -아/어서 lebih netral.',
      parts: [
        { part: '피곤해서', role: 'klausa alasan; dari 피곤해요 tanpa 요, + 서' },
        { part: '일찍', role: 'keterangan: lebih awal' },
        { part: '잤어요', role: '자다 → 자요 → 잤어요; membawa penanda lampau' },
      ],
      tags: ['-아/어서'],
    },
    {
      id: 'm4l2-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Karena cuacanya bagus, ayo jalan-jalan.',
      answers: [
        '날씨가 좋으니까 산책해요',
        '날씨가 좋으니까 산책할까요?',
        '날씨가 좋으니까 같이 산책해요',
      ],
      explain:
        'Kalimat terakhirnya ajakan, jadi alasannya wajib memakai -(으)니까. Batang 좋다 adalah 좋 yang berakhir konsonan, jadi bentuknya 좋으니까.',
      hint: 'Ajakan menuntut salah satu dari dua bentuk alasan — yang mana?',
      tags: ['-(으)니까'],
    },
    {
      id: 'm4l2-e8',
      kind: 'mc',
      prompt: 'Kenapa 만나서 반가워요 tidak bisa diubah menjadi 만나니까 반가워요?',
      options: [
        'Karena ini ungkapan tetap yang sudah membeku dengan -아/어서.',
        'Karena 만나다 tidak bisa memakai -(으)니까.',
        'Karena 반갑다 adalah kata sifat.',
        'Karena kalimatnya terlalu pendek.',
      ],
      answerIndex: 0,
      explain:
        'Ucapan terima kasih, permintaan maaf, dan salam perkenalan di Korea sudah membeku dalam bentuk -아/어서. 만나니까 반가워요 secara tata bahasa bisa dibentuk, tetapi tidak ada orang Korea yang mengucapkannya.',
      whyNot: {
        'Karena 만나다 tidak bisa memakai -(으)니까.': '만나니까 bisa dibentuk dan dipakai dalam kalimat lain.',
        'Karena 반갑다 adalah kata sifat.': 'Kata sifat boleh mengikuti kedua bentuk alasan.',
        'Karena kalimatnya terlalu pendek.': 'Panjang kalimat tidak memengaruhi pilihan bentuk.',
      },
      tags: ['-아/어서'],
    },
  ],

  quiz: [
    {
      id: 'm4l2-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang SALAH?',
      options: [
        '비가 와서 우산을 가져가세요.',
        '비가 오니까 우산을 가져가세요.',
        '비가 와서 우산을 샀어요.',
        '비가 와서 집에 있어요.',
      ],
      answerIndex: 0,
      explain:
        '가져가세요 adalah PERMINTAAN, dan -아/어서 tidak boleh diikuti permintaan. Yang benar adalah 비가 오니까 우산을 가져가세요. Tiga pilihan lainnya berakhir dengan pernyataan, jadi -아/어서 boleh dipakai.',
      tags: ['-아/어서', '-(으)니까'],
    },
    {
      id: 'm4l2-q2',
      kind: 'fill',
      prompt: 'Ubah menjadi klausa alasan dengan -(으)니까.',
      sentence: '밥을 ___ 괜찮아요. (먹었다)',
      translation: 'Karena sudah makan, tidak apa-apa.',
      answers: ['먹었으니까'],
      explain:
        'Berbeda dari -아/어서, bentuk -(으)니까 BOLEH membawa penanda lampau. Batangnya menjadi 먹었, yang berakhir konsonan, jadi memakai 으니까.',
      tags: ['-(으)니까'],
    },
    {
      id: 'm4l2-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Maaf saya terlambat.',
      answers: ['늦어서 죄송합니다', '늦어서 미안해요', '늦어서 죄송해요'],
      explain:
        'Permintaan maaf di Korea selalu memakai -아/어서 untuk menyebutkan alasannya: 늦어요 → 늦어 → 늦어서. Memakai -(으)니까 di sini akan terdengar seperti membela diri.',
      tags: ['-아/어서'],
    },
  ],

  summary: {
    points: [
      '-아/어서 dibentuk dari 해요체: buang 요, tambahkan 서.',
      '-(으)니까 dibentuk dari BATANG: 으니까 setelah konsonan, 니까 setelah vokal.',
      '-아/어서 TIDAK PERNAH membawa penanda lampau; -(으)니까 boleh.',
      'Kalau kalimat terakhirnya ajakan, perintah, atau permintaan, alasannya wajib -(으)니까.',
      'Permintaan maaf dan ucapan terima kasih selalu memakai -아/어서.',
      'Subjek di dalam klausa alasan memakai 이/가, bukan 은/는.',
    ],
    pitfalls: [
      {
        wrong: '비가 왔어서 집에 있었어요.',
        right: '비가 와서 집에 있었어요.',
        why: 'Penanda lampau tidak boleh muncul sebelum -아/어서.',
      },
      {
        wrong: '시간이 없어서 빨리 가세요.',
        right: '시간이 없으니까 빨리 가세요.',
        why: 'Klausa terakhirnya perintah, jadi wajib memakai -(으)니까.',
      },
      {
        wrong: '늦었으니까 죄송합니다.',
        right: '늦어서 죄송합니다.',
        why: 'Permintaan maaf memakai -아/어서; -(으)니까 terdengar membela diri.',
      },
    ],
  },
}
