import type { Lesson } from '../../types/curriculum'

export const m2l8: Lesson = {
  id: 'm2-l8',
  moduleId: 'm2',
  number: '2.8',
  title: 'Kepada siapa, dari siapa',
  subtitle: '에게 · 한테 · 께 · 에게서/한테서 · 께서',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan penerima dan sumber dengan benar, serta mengenali bentuk hormat saat berbicara tentang orang yang lebih tua.',
  focus: ['에게/한테', '에게서/한테서', '께/께서'],
  estimatedMinutes: 15,

  coreExamples: [
    { ko: '친구한테 선물을 줬어요.', id: 'Saya memberi hadiah kepada teman.', highlight: ['한테'] },
    { ko: '친구한테서 편지를 받았어요.', id: 'Saya menerima surat dari teman.', highlight: ['한테서'] },
    { ko: '선생님께 질문을 드렸어요.', id: 'Saya mengajukan pertanyaan kepada guru.', highlight: ['께'] },
    { ko: '할머니께서 오셨어요.', id: 'Nenek datang.', highlight: ['께서'] },
    { ko: '회사에 전화했어요.', id: 'Saya menelepon kantor.', highlight: ['에'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '친구한테서 편지를 받았어요.',
        id: 'Saya menerima surat dari teman.',
        highlight: ['한테서', '를'],
      },
      rows: [
        {
          unit: '친구한테서',
          formula: '친구 + 한테 + 서',
          meaning: 'Dari teman; tambahan 서 membalik arah menjadi "dari"',
        },
        { unit: '편지를', formula: '편지 + 를', meaning: 'Surat — objek yang diterima' },
        { unit: '받았어요', formula: '받다 → 받았어요', meaning: 'Menerima, bentuk lampau' },
      ],
      why:
        'Arahnya ditentukan oleh ada tidaknya 서. Tanpa 서, partikel ini berarti "kepada" — sesuatu bergerak menuju orang itu. Dengan 서, artinya "dari" — sesuatu berasal darinya. Kata kerjanya membantu memastikan: 주다 (memberi), 보내다 (mengirim), 말하다 (berkata) menuntut arah "kepada"; sedangkan 받다 (menerima), 듣다 (mendengar), 배우다 (belajar dari) menuntut arah "dari". Pola 서 ini sama persis dengan 에서, yang juga berarti "dari" untuk tempat.',
      swaps: [
        {
          alt: '친구한테 편지를 보냈어요.',
          effect:
            '"Saya mengirim surat kepada teman." Tanpa 서 dan dengan kata kerja 보내다, arahnya berbalik.',
        },
        {
          alt: '친구에게서 편지를 받았어요.',
          effect:
            'Artinya sama persis. 에게서 adalah versi tulisan dari 한테서 — sedikit lebih rapi, sering muncul dalam surat dan artikel.',
        },
      ],
    },
    {
      sentence: {
        ko: '할머니께서 오셨어요.',
        id: 'Nenek datang.',
        highlight: ['께서', '셨'],
      },
      rows: [
        {
          unit: '할머니께서',
          formula: '할머니 + 께서',
          meaning: 'Nenek — SUBJEK dalam bentuk hormat; 께서 menggantikan 이/가',
        },
        {
          unit: '오셨어요',
          formula: '오다 + 시 + 었어요 → 오셨어요',
          meaning: 'Datang, dengan sisipan hormat 〜시〜',
        },
      ],
      why:
        'Ini bagian yang paling sering membingungkan: 께 dan 께서 terlihat mirip tetapi tugasnya berlawanan. 께 adalah bentuk hormat dari 한테/에게 — menandai PENERIMA. 께서 adalah bentuk hormat dari 이/가 — menandai SUBJEK. Dan saat subjeknya dihormati, kata kerjanya ikut naik dengan sisipan 〜시〜.',
      swaps: [
        {
          alt: '할머니께 선물을 드렸어요.',
          effect:
            '"Saya memberi hadiah kepada nenek." Di sini nenek adalah penerima, jadi 께 — dan kata kerjanya memakai 드리다, bentuk hormat dari 주다.',
        },
        {
          alt: '할머니가 왔어요.',
          effect:
            'Benar secara tata bahasa dan dipakai dalam percakapan santai di dalam keluarga. Tetapi saat berbicara dengan orang luar tentang nenek, bentuk hormat lebih pantas.',
        },
      ],
    },
  ],

  vocab: [
    {
      ko: '주다',
      id: 'memberi',
      pos: 'kata kerja',
      note: '해요체: 줘요. Bentuk hormat: 드리다.',
    },
    { ko: '받다', id: 'menerima', pos: 'kata kerja', note: '해요체: 받아요.' },
    { ko: '보내다', id: 'mengirim', pos: 'kata kerja', note: '해요체: 보내요.' },
    { ko: '편지', id: 'surat', pos: 'kata benda' },
    { ko: '질문', id: 'pertanyaan', pos: 'kata benda' },
    { ko: '할머니', id: 'nenek', pos: 'kata benda' },
    { ko: '할아버지', id: 'kakek', pos: 'kata benda' },
    { ko: '부모님', id: 'orang tua', pos: 'kata benda', note: '님 adalah akhiran hormat.' },
    { ko: '전화하다', id: 'menelepon', pos: 'kata kerja', note: '해요체: 전화해요.' },
    { ko: '가르치다', id: 'mengajar', pos: 'kata kerja', note: '해요체: 가르쳐요.' },
  ],

  grammar: [
    {
      title: 'Peta lengkap: kepada & dari',
      form: 'orang/hewan → 한테/에게 · tempat/organisasi → 에',
      body:
        'Pilihan pertama bukan soal keformalan, melainkan soal APA penerimanya. Kalau penerimanya bisa diajak bicara, pakai 한테/에게. Kalau tidak, pakai 에.',
      table: {
        caption:
          'Untuk tempat, bentuk "dari"-nya adalah 에서 — pola 서 yang sama dengan 한테서.',
        columns: ['Penerima', 'Arah "kepada"', 'Arah "dari"', 'Contoh'],
        rows: [
          ['Orang (percakapan)', '한테', '한테서', '친구한테 줬어요.'],
          ['Orang (tulisan)', '에게', '에게서', '친구에게 보냈어요.'],
          ['Orang yang dihormati', '께', '께', '선생님께 드렸어요.'],
          ['Tempat / organisasi', '에', '에서', '회사에 전화했어요.'],
        ],
      },
      examples: [
        { ko: '동생한테 전화했어요.', id: 'Saya menelepon adik.', highlight: ['한테'] },
        { ko: '회사에 전화했어요.', id: 'Saya menelepon kantor.', highlight: ['에'] },
      ],
      mistakes: [
        {
          wrong: '회사한테 전화했어요.',
          right: '회사에 전화했어요.',
          why: 'Perusahaan bukan orang. Penerima yang berupa tempat atau organisasi memakai 에.',
        },
        {
          wrong: '친구에 선물을 줬어요.',
          right: '친구한테 선물을 줬어요.',
          why: 'Orang tidak memakai 에 — harus 한테 atau 에게.',
        },
      ],
      more:
        'Bentuk 에게서 dan 한테서 sering dipendekkan kembali menjadi 에게 dan 한테 dalam percakapan sehari-hari, karena kata kerjanya sudah menjelaskan arahnya: 친구한테 들었어요 ("saya dengar dari teman") sangat lazim. Jadi kalau kamu mendengar 한테 dengan kata kerja 받다 atau 듣다, jangan bingung — artinya tetap "dari".',
    },
    {
      title: '께 dan 께서 — dua bentuk hormat yang berlawanan',
      body:
        'Keduanya terlihat mirip, tetapi menandai peran yang berbeda. Cara mengingatnya: 께서 punya 서, dan 서 muncul pada kata kerja "berdiri" — subjek yang berdiri di depan kalimat.',
      table: {
        columns: ['Bentuk hormat', 'Menggantikan', 'Menandai', 'Contoh'],
        rows: [
          ['께', '한테 / 에게', 'Penerima', '선생님께 드렸어요.'],
          ['께서', '이 / 가', 'Subjek', '선생님께서 오셨어요.'],
          ['께서는', '은 / 는', 'Topik', '선생님께서는 바쁘세요.'],
        ],
      },
      examples: [
        {
          ko: '부모님께 선물을 드렸어요.',
          id: 'Saya memberi hadiah kepada orang tua saya.',
          highlight: ['께'],
          note: '주다 → 드리다, bentuk hormat saat penerimanya dihormati.',
        },
        {
          ko: '부모님께서 선물을 주셨어요.',
          id: 'Orang tua saya memberi hadiah.',
          highlight: ['께서'],
          note: '주다 + 시 → 주셨어요, karena pelakunya yang dihormati.',
        },
      ],
      more:
        'Perhatikan pasangan kata kerjanya. Kalau YANG MEMBERI adalah kamu dan penerimanya dihormati, pakai 드리다. Kalau YANG MEMBERI adalah orang yang dihormati, pakai 주시다. Bahasa Korea menyesuaikan kata kerja, bukan hanya partikelnya — inilah yang membuat sistem hormatnya terasa rumit pada awalnya.',
    },
    {
      title: 'Sisipan hormat 〜시〜',
      form: 'batang kata + (으)시 + akhiran',
      body:
        'Saat SUBJEK kalimat adalah orang yang kamu hormati, kata kerjanya mendapat sisipan 〜(으)시〜. Dalam 해요체, hasilnya hampir selalu berakhiran 〜세요 (sekarang) atau 〜셨어요 (lampau).',
      table: {
        columns: ['Dasar', 'Bentuk hormat (sekarang)', 'Bentuk hormat (lampau)', 'Arti'],
        rows: [
          ['가요', '가세요', '가셨어요', 'pergi'],
          ['와요', '오세요', '오셨어요', 'datang'],
          ['바빠요', '바쁘세요', '바쁘셨어요', 'sibuk'],
          ['읽어요', '읽으세요', '읽으셨어요', 'membaca'],
          ['먹어요', '드세요', '드셨어요', 'makan (kata khusus)'],
        ],
      },
      examples: [
        { ko: '선생님께서 지금 바쁘세요.', id: 'Gurunya sekarang sedang sibuk.' },
        { ko: '할아버지께서 신문을 읽으세요.', id: 'Kakek sedang membaca koran.' },
      ],
      more:
        'Sisipan ini TIDAK dipakai untuk diri sendiri. 저는 가세요 adalah kesalahan yang terdengar lucu bagi penutur Korea — seolah kamu menghormati dirimu sendiri. Beberapa kata kerja punya bentuk hormat tersendiri yang tidak mengikuti pola: 먹다 → 드시다, 자다 → 주무시다, 있다 → 계시다, 말하다 → 말씀하시다.',
    },
  ],

  dialogue: {
    title: 'Mengirim dokumen',
    situation: 'Vio dan Sujin membicarakan dokumen yang harus dikirim ke atasan.',
    lines: [
      { speaker: '비오', ko: '수진 씨, 이 서류를 누구한테 보내요?', id: 'Sujin, dokumen ini dikirim ke siapa?' },
      {
        speaker: '수진',
        ko: '과장님께 보내세요.',
        id: 'Kirimkan kepada Pak/Bu Manajer.',
        note: '과장님 adalah atasan, jadi penerimanya memakai 께 — bukan 한테.',
      },
      { speaker: '비오', ko: '네. 그리고 회사 이메일로 보내요?', id: 'Baik. Dan dikirim lewat email kantor?' },
      {
        speaker: '수진',
        ko: '네. 아, 과장님께서 오늘 오후에 회의가 있으세요.',
        id: 'Ya. Oh, Pak Manajer ada rapat sore ini.',
        note: '과장님께서 — sekarang beliau menjadi SUBJEK, jadi partikelnya 께서, dan 있다 menjadi 있으세요.',
      },
      {
        speaker: '비오',
        ko: '그럼 오전에 보낼게요. 고마워요!',
        id: 'Kalau begitu saya kirim pagi ini. Terima kasih!',
      },
    ],
    politeness:
      'Perhatikan pergantiannya dalam satu percakapan: 과장님께 saat beliau menerima sesuatu, 과장님께서 saat beliau menjadi pelaku. Partikelnya berubah mengikuti peran, bukan mengikuti orangnya.',
  },

  passage: {
    title: '할머니의 편지',
    intro: 'Sebuah catatan pendek tentang surat dari nenek.',
    sentences: [
      { ko: '어제 할머니께서 편지를 보내셨어요.', id: 'Kemarin nenek mengirim surat.' },
      { ko: '저는 할머니한테서 편지를 자주 받아요.', id: 'Saya sering menerima surat dari nenek.' },
      { ko: '할머니께서는 손글씨가 아주 예쁘세요.', id: 'Tulisan tangan nenek sangat bagus.' },
      { ko: '저도 할머니께 답장을 썼어요.', id: 'Saya juga menulis balasan kepada nenek.' },
      { ko: '다음 주에 할머니 댁에 갈 거예요.', id: 'Minggu depan saya akan pergi ke rumah nenek.' },
    ],
    vocabInContext: [
      { ko: '손글씨', id: 'tulisan tangan' },
      { ko: '자주', id: 'sering' },
      { ko: '답장', id: 'balasan' },
      { ko: '댁', id: 'rumah (bentuk hormat dari 집)' },
    ],
    analysis: [
      '할머니께서 보내셨어요 — nenek adalah pelakunya, jadi 께서 (pengganti 이/가) dan kata kerjanya memakai 〜시〜.',
      '할머니한테서 받아요 — nenek adalah sumbernya, jadi 한테서. Di sini tidak dipakai 께 karena arahnya "dari", dan bentuk hormat untuk arah "dari" memang jarang dipakai dalam percakapan.',
      '할머니께서는 — 께서 (subjek hormat) ditambah 는 (topik), persis seperti 저는 tetapi dalam bentuk hormat.',
      '할머니께 답장을 썼어요 — sekarang nenek adalah penerima, jadi 께. Satu paragraf, tiga peran berbeda untuk orang yang sama.',
      '댁 adalah kata hormat untuk 집. Bahasa Korea mengganti kata bendanya juga, bukan hanya partikel dan kata kerjanya.',
    ],
  },

  exercises: [
    {
      id: 'm2l8-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu bercerita kepada teman bahwa kamu memberi hadiah kepada temanmu yang lain.',
      sentence: '친구___ 선물을 줬어요.',
      translation: 'Saya memberi hadiah kepada teman.',
      options: ['한테', '에', '에서', '으로'],
      answer: '한테',
      explain:
        'Penerima yang berupa ORANG memakai 한테 (percakapan) atau 에게 (tulisan). 에 hanya untuk tempat dan organisasi.',
      whyNot: {
        에: '에 dipakai untuk benda dan tempat: 회사에 전화했어요. Untuk orang, bentuknya 한테/에게.',
        에서: '에서 menandai tempat kegiatan atau titik asal.',
        으로: '으로 menandai alat, cara, atau arah.',
      },
      tags: ['에게/한테'],
    },
    {
      id: 'm2l8-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat. Perhatikan arah pemberiannya.',
      context: 'Kata kerjanya 받다 ("menerima") — jadi sesuatu bergerak menuju kamu.',
      sentence: '어제 친구___ 편지를 받았어요.',
      translation: 'Kemarin saya menerima surat dari teman.',
      options: ['한테서', '한테', '께', '에'],
      answer: '한테서',
      explain:
        'Tambahan 서 membalik arah: 한테 = "kepada", 한테서 = "dari". Karena kamu yang menerima, teman adalah sumbernya.',
      whyNot: {
        한테: 'Dalam percakapan sehari-hari orang Korea sering tetap memakai 한테 di sini, dan itu tidak salah — tetapi 한테서 menyatakan arahnya secara jelas dan merupakan bentuk yang paling aman untuk dipelajari.',
        께: '께 adalah bentuk hormat dari 한테 dan tetap berarti "kepada", bukan "dari".',
        에: '에 untuk benda dan tempat, bukan orang.',
      },
      tags: ['에게서/한테서'],
    },
    {
      id: 'm2l8-e3',
      kind: 'particle',
      prompt: 'Pilih bentuk hormat yang tepat.',
      context: 'Nenekmu adalah PELAKU yang datang berkunjung.',
      sentence: '할머니___ 오셨어요.',
      translation: 'Nenek datang.',
      options: ['께서', '께', '한테', '에서'],
      answer: '께서',
      explain:
        '께서 adalah bentuk hormat dari 이/가, yaitu penanda SUBJEK. Karena nenek adalah pelaku yang datang, partikelnya 께서 — dan kata kerjanya ikut naik dengan sisipan 〜시〜: 오다 → 오셨어요.',
      whyNot: {
        께: '께 adalah bentuk hormat dari 한테 ("kepada") — menandai penerima, bukan pelaku.',
        한테: '한테 juga menandai penerima, dan terlalu santai untuk nenek.',
        에서: '에서 menandai tempat, bukan orang.',
      },
      tags: ['께/께서'],
    },
    {
      id: 'm2l8-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap partikel dengan tugasnya.',
      pairs: [
        { left: '한테', right: 'kepada (orang) — percakapan' },
        { left: '에게', right: 'kepada (orang) — tulisan' },
        { left: '한테서', right: 'dari (orang)' },
        { left: '께', right: 'kepada (orang yang dihormati)' },
        { left: '께서', right: 'penanda subjek hormat (pengganti 이/가)' },
        { left: '에', right: 'kepada (tempat atau organisasi)' },
      ],
      explain:
        'Dua pertanyaan yang menentukan: (1) penerimanya orang atau tempat? (2) arahnya "kepada" atau "dari"? Baru setelah itu pertanyaan ketiga: perlukah bentuk hormat?',
      tags: ['에게/한테', '께/께서'],
    },
    {
      id: 'm2l8-e5',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '어제 회사한테 전화했어요.',
      translation: 'Kemarin saya menelepon kantor.',
      answers: ['어제 회사에 전화했어요'],
      explain:
        'Perusahaan bukan orang yang bisa diajak bicara, jadi penerimanya memakai 에. 한테/에게 hanya dipakai untuk orang dan hewan.',
      tags: ['에게/한테'],
    },
    {
      id: 'm2l8-e6',
      kind: 'build',
      prompt: 'Susun kalimatnya. Gunakan bentuk hormat.',
      translation: 'Saya memberi hadiah kepada orang tua saya.',
      tiles: ['부모님께', '선물을', '드렸어요'],
      distractors: ['부모님께서', '줬어요'],
      answers: ['부모님께 선물을 드렸어요'],
      explain:
        'Orang tua adalah PENERIMA, jadi partikelnya 께 — bukan 께서. Dan karena penerimanya dihormati, kata kerja 주다 diganti bentuk hormatnya 드리다 → 드렸어요.',
      parts: [
        { part: '부모님께', role: 'penerima yang dihormati (께 menggantikan 한테)' },
        { part: '선물을', role: 'objek yang diberikan' },
        { part: '드렸어요', role: '드리다 — bentuk hormat dari 주다' },
      ],
      tags: ['께/께서'],
    },
    {
      id: 'm2l8-e7',
      kind: 'mc',
      prompt: 'Apa perbedaan antara 선생님께 dan 선생님께서?',
      options: [
        '께 menandai penerima; 께서 menandai subjek.',
        '께 lebih sopan daripada 께서.',
        '께 untuk bentuk lampau; 께서 untuk bentuk sekarang.',
        'Keduanya sama, hanya beda ejaan.',
      ],
      answerIndex: 0,
      explain:
        '께 adalah bentuk hormat dari 한테/에게 dan menandai siapa yang menerima sesuatu. 께서 adalah bentuk hormat dari 이/가 dan menandai siapa yang melakukan sesuatu. Keduanya sama-sama hormat, tetapi perannya berlawanan.',
      whyNot: {
        '께 lebih sopan daripada 께서.': 'Keduanya sama-sama bentuk hormat; yang berbeda adalah perannya.',
        '께 untuk bentuk lampau; 께서 untuk bentuk sekarang.': 'Partikel tidak ada hubungannya dengan waktu.',
        'Keduanya sama, hanya beda ejaan.': 'Justru inilah perbedaan terpenting dalam pelajaran ini.',
      },
      tags: ['께/께서'],
    },
  ],

  quiz: [
    {
      id: 'm2l8-q1',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      context: 'Kamu mengirim email kepada adikmu.',
      sentence: '동생___ 이메일을 보냈어요.',
      translation: 'Saya mengirim email kepada adik.',
      answers: ['한테', '에게'],
      explain:
        'Adik adalah orang, dan arahnya "kepada", jadi partikelnya 한테 (percakapan) atau 에게 (tulisan). Keduanya diterima.',
      alternatives: [
        { form: '동생에게', nuance: 'Sedikit lebih rapi, lazim dalam tulisan.' },
      ],
      tags: ['에게/한테'],
    },
    {
      id: 'm2l8-q2',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR?',
      options: [
        '할머니께서 신문을 읽으세요.',
        '할머니께 신문을 읽으세요.',
        '할머니께서 신문을 읽어요.',
        '저는 신문을 읽으세요.',
      ],
      answerIndex: 0,
      explain:
        'Nenek adalah pelakunya, jadi memakai 께서 (subjek hormat), dan kata kerjanya mendapat sisipan 〜시〜 → 읽으세요. Kedua penanda hormat itu harus muncul bersama.',
      whyNot: {
        '할머니께 신문을 읽으세요.': '께 menandai penerima, padahal nenek adalah pelakunya.',
        '할머니께서 신문을 읽어요.': 'Partikelnya sudah hormat, tetapi kata kerjanya belum — terasa tidak konsisten.',
        '저는 신문을 읽으세요.': 'Sisipan 〜시〜 tidak pernah dipakai untuk diri sendiri.',
      },
      tags: ['께/께서'],
    },
    {
      id: 'm2l8-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya belajar bahasa Korea dari teman.',
      answers: [
        '친구한테서 한국어를 배웠어요',
        '친구한테 한국어를 배웠어요',
        '친구에게서 한국어를 배웠어요',
        '친구한테서 한국어를 배워요',
      ],
      explain:
        '배우다 ("belajar dari") menuntut arah "dari", jadi sumbernya memakai 한테서 atau 에게서. Dalam percakapan, 한테 saja juga sering dipakai karena kata kerjanya sudah menjelaskan arahnya.',
      hint: 'Pengetahuan bergerak DARI temanmu menuju kamu.',
      tags: ['에게서/한테서'],
    },
  ],

  summary: {
    points: [
      'Penerima berupa ORANG memakai 한테 (percakapan) atau 에게 (tulisan); penerima berupa TEMPAT memakai 에.',
      'Tambahan 서 membalik arah: 한테 = kepada, 한테서 = dari.',
      '께 adalah bentuk hormat dari 한테/에게 — menandai penerima.',
      '께서 adalah bentuk hormat dari 이/가 — menandai subjek.',
      'Saat subjeknya dihormati, kata kerjanya mendapat sisipan 〜(으)시〜 → 〜세요 / 〜셨어요.',
      'Sisipan hormat tidak pernah dipakai untuk diri sendiri.',
    ],
    pitfalls: [
      {
        wrong: '회사한테 전화했어요.',
        right: '회사에 전화했어요.',
        why: 'Organisasi bukan orang — penerimanya memakai 에.',
      },
      {
        wrong: '할머니께 오셨어요.',
        right: '할머니께서 오셨어요.',
        why: 'Nenek adalah pelakunya, jadi butuh 께서 (subjek), bukan 께 (penerima).',
      },
      {
        wrong: '저는 지금 가세요.',
        right: '저는 지금 가요.',
        why: 'Sisipan hormat 〜시〜 tidak pernah dipakai untuk diri sendiri.',
      },
    ],
  },
}
