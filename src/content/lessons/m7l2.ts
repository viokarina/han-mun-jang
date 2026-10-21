import type { Lesson } from '../../types/curriculum'

export const m7l2: Lesson = {
  id: 'm7-l2',
  moduleId: 'm7',
  number: '7.2',
  title: 'Soju & daging panggang',
  subtitle: 'Meja 고깃집, etiket menuang, dan cara menolak minum',
  objective:
    'Setelah pelajaran ini kamu bisa bertahan di meja 고깃집 — memesan, menanggapi obrolan dengan -죠?, menuang minum sesuai etiket, dan menolak alkohol tanpa membuat suasana canggung.',
  focus: ['-지요? / -죠?', '-아/어 드릴게요', 'etiket minum'],
  estimatedMinutes: 18,

  coreExamples: [
    {
      ko: '삼겹살 이인분하고 소주 한 병 주세요.',
      id: 'Tolong dua porsi samgyeopsal dan sebotol soju.',
      highlight: ['이인분', '한 병'],
    },
    { ko: '고기 다 익었어요?', id: 'Dagingnya sudah matang semua?', highlight: ['익었어요'], highlightKind: 'ending' },
    {
      ko: '제가 따라 드릴게요.',
      id: 'Biar saya yang tuangkan.',
      highlight: ['따라 드릴게요'],
      highlightKind: 'ending',
    },
    {
      ko: '이 집 고기 맛있죠?',
      id: 'Daging di tempat ini enak, kan?',
      highlight: ['맛있죠'],
      highlightKind: 'ending',
    },
    { ko: '저는 술을 잘 못 마셔요.', id: 'Saya tidak terlalu kuat minum.', highlight: ['못'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '이 집 고기 맛있죠?',
        id: 'Daging di tempat ini enak, kan?',
        highlight: ['맛있죠'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '이 집', formula: '이 + 집', meaning: 'Tempat ini; 집 juga berarti "kedai", bukan hanya rumah' },
        { unit: '고기', formula: '—', meaning: 'Daging; partikel dilepas karena kalimat percakapan' },
        {
          unit: '맛있죠?',
          formula: '맛있다 → 맛있지요? → 맛있죠?',
          meaning: 'Enak, kan? — mengajak lawan bicara setuju',
        },
      ],
      why:
        '-지요? (hampir selalu disingkat -죠?) dipakai saat kamu SUDAH yakin jawabannya dan hanya mencari persetujuan — persis seperti "kan?" dalam bahasa Indonesia. Bedanya dengan pertanyaan biasa penting: 맛있어요? berarti kamu benar-benar belum tahu, sedangkan 맛있죠? mengundang lawan bicara mengangguk. Di meja makan Korea, kalimat seperti ini muncul terus-menerus karena fungsinya membangun kebersamaan.',
      swaps: [
        {
          alt: '이 집 고기 맛있어요?',
          effect: 'Pertanyaan sungguhan — kamu belum pernah makan di sini dan ingin tahu.',
        },
        {
          alt: '이 집 고기 정말 맛있어요!',
          effect: 'Pernyataan tegas. Menyampaikan pendapatmu, tetapi tidak mengajak orang lain menyetujuinya.',
        },
      ],
    },
    {
      sentence: {
        ko: '제가 따라 드릴게요.',
        id: 'Biar saya yang tuangkan.',
        highlight: ['따라 드릴게요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '제가', formula: '저 + 가 → 제가', meaning: 'Saya — menegaskan siapa yang akan melakukannya' },
        {
          unit: '따라',
          formula: '따르다 → 따라요 → 따라',
          meaning: 'Menuangkan; bentuk 해요체 tanpa 요',
        },
        {
          unit: '드릴게요',
          formula: '드리다 + (으)ㄹ게요',
          meaning: '"Akan saya lakukan untuk Anda"',
        },
      ],
      why:
        'Kalimat ini menggabungkan tiga hal yang sudah kamu kuasai. Pola -아/어 주다 dari Pelajaran 5.2 ("melakukan untuk orang lain"), dengan 주다 diganti bentuk rendah hatinya 드리다 (Pelajaran 5.4), lalu ditutup -(으)ㄹ게요 yang menyatakan keputusan sendiri. Hasilnya: "biar saya yang tuangkan untuk Anda". Perhatikan 제가 dipakai — bukan 저는 — karena yang ditegaskan adalah SIAPA yang menuang.',
      swaps: [
        {
          alt: '제가 따라 줄게요.',
          effect: 'Versi biasa tanpa bentuk rendah hati — untuk teman sebaya.',
        },
        {
          alt: '제가 따라 드릴까요?',
          effect:
            'Dengan -(으)ㄹ까요? kamu MEMINTA IZIN ("perlu saya tuangkan?"), bukan memutuskan. Lebih berhati-hati, cocok untuk orang yang jauh lebih senior.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '삼겹살', id: 'samgyeopsal (daging perut babi)', pos: 'kata benda' },
    { ko: '소주', id: 'soju', pos: 'kata benda' },
    { ko: '고기', id: 'daging', pos: 'kata benda' },
    { ko: '굽다', id: 'memanggang', pos: 'kata kerja', note: 'ㅂ tidak beraturan: 구워요.' },
    { ko: '익다', id: 'matang', pos: 'kata kerja', note: '해요체: 익어요. Lampau: 익었어요.' },
    { ko: '상추', id: 'selada', pos: 'kata benda' },
    {
      ko: '따르다',
      id: 'menuangkan',
      pos: 'kata kerja',
      note: 'ㅡ luluh: 따라요.',
      example: { ko: '제가 따라 드릴게요.', id: 'Biar saya yang tuangkan.' },
    },
    { ko: '건배', id: 'bersulang, cheers', pos: 'kata benda', note: 'Versi santai: 짠!' },
    { ko: '한 잔 더', id: 'satu gelas lagi', pos: 'ungkapan' },
    { ko: '윗사람', id: 'orang yang lebih senior', pos: 'kata benda' },
    { ko: '예절', id: 'etiket, tata krama', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-지요? / -죠? — "kan?"',
      form: 'batang + 지요? → disingkat 죠?',
      body:
        'Dipakai saat kamu mencari persetujuan atas sesuatu yang kamu dan lawan bicara sama-sama tahu. Dalam percakapan, bentuk panjang 지요 hampir selalu disingkat menjadi 죠.',
      table: {
        caption: 'Ditempel pada BATANG, jadi bentuk lampau pun memakai batang lampaunya.',
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['맛있다', '맛있', '맛있죠?', 'enak, kan?'],
          ['좋다', '좋', '좋죠?', 'bagus, kan?'],
          ['가다', '가', '가죠?', 'pergi, kan?'],
          ['먹었다', '먹었', '먹었죠?', 'sudah makan, kan?'],
          ['이다', '이', '학생이죠?', 'pelajar, kan?'],
        ],
      },
      examples: [
        { ko: '오늘 날씨 좋죠?', id: 'Cuaca hari ini bagus, kan?' },
        { ko: '여기 처음이죠?', id: 'Baru pertama kali ke sini, kan?' },
        { ko: '소주 좋아하시죠?', id: 'Suka soju, kan?', note: 'Dengan 〜시〜 untuk orang yang dihormati.' },
      ],
      more:
        '-죠 juga dipakai sebagai JAWABAN, bukan pertanyaan — artinya menjadi "tentu saja". Kalau seseorang bertanya 한국 음식 좋아해요?, jawaban 좋아하죠! berarti "ya jelas suka dong". Demikian pula 알죠 ("tentu saya tahu") dan 그럼요 ("tentu saja"). Ini membuat percakapanmu terdengar jauh lebih hidup.',
    },
    {
      title: '-아/어 드릴게요 — "biar saya yang …"',
      form: 'bentuk 해요체 − 요 + 드릴게요',
      body:
        'Pasangan dari -아/어 드릴까요? yang kamu pelajari di Pelajaran 5.4. Bedanya: 드릴까요? meminta izin, sedangkan 드릴게요 menyatakan bahwa kamu sudah memutuskan untuk melakukannya.',
      table: {
        columns: ['Kata kerja', '해요체', 'Menawarkan', 'Memutuskan'],
        rows: [
          ['따르다', '따라요', '따라 드릴까요?', '따라 드릴게요'],
          ['돕다', '도와요', '도와 드릴까요?', '도와 드릴게요'],
          ['하다', '해요', '해 드릴까요?', '해 드릴게요'],
          ['사다', '사요', '사 드릴까요?', '사 드릴게요'],
        ],
      },
      examples: [
        { ko: '제가 따라 드릴게요.', id: 'Biar saya yang tuangkan.' },
        { ko: '오늘은 제가 살게요.', id: 'Hari ini saya yang traktir.', note: '사다 di sini berarti "mentraktir".' },
      ],
      more:
        'Untuk teman sebaya, cukup pakai versi biasa: 따라 줄게 atau 내가 살게. Bentuk 드리다 khusus dipakai saat penerimanya orang yang kamu hormati — konsisten dengan aturan 께/드리다 dari Pelajaran 2.8.',
    },
    {
      title: 'Etiket minum yang benar-benar dipakai',
      body:
        'Ini bukan sekadar pengetahuan budaya — kalau kamu duduk di meja dengan rekan kerja Korea, hal-hal ini akan langsung terlihat. Kabar baiknya, semuanya sederhana.',
      table: {
        caption: 'Semua aturan ini berlaku saat ada orang yang lebih senior di meja.',
        columns: ['Aturan', 'Bahasa Korea', 'Catatan'],
        rows: [
          ['Tuang dengan dua tangan', '두 손으로 따라요', 'Tangan kiri menopang siku atau botol'],
          ['Terima dengan dua tangan', '두 손으로 받아요', 'Berlaku juga untuk menerima gelas'],
          ['Jangan tuang gelasmu sendiri', '자기 잔은 자기가 안 따라요', 'Orang lain yang menuangkan untukmu'],
          ['Perhatikan gelas sebelah', '잔이 비면 따라 줘요', 'Mengisi gelas orang lain itu perhatian'],
          ['Palingkan wajah saat minum', '고개를 돌리고 마셔요', 'Kalau minum bersama yang lebih senior'],
          ['Bersulang', '건배! / 짠!', '짠 lebih santai'],
        ],
      },
      examples: [
        { ko: '자, 건배!', id: 'Ayo, bersulang!' },
        { ko: '한 잔 더 할까요?', id: 'Mau tambah satu gelas lagi?' },
        { ko: '잔이 비었네요. 제가 따라 드릴게요.', id: 'Gelasnya kosong, ya. Biar saya tuangkan.' },
      ],
      more:
        'Istilah 2차 (dibaca 이차) berarti "ronde kedua" — pindah ke tempat lain setelah makan, biasanya untuk minum lagi atau karaoke. Kamu akan sering mendengar 2차 갈까요?. Dan menolak 2차 jauh lebih mudah daripada menolak minuman pertama: cukup 저는 먼저 들어갈게요 ("saya pulang duluan").',
    },
    {
      title: 'Menolak minum tanpa membuat canggung',
      body:
        'Bagian paling berguna dari pelajaran ini. Kuncinya ada pada perbedaan 못 dan 안 yang kamu pelajari di Pelajaran 3.3 — dan di sini perbedaan itu menjadi sangat sosial.',
      table: {
        caption:
          '못 menyiratkan "saya tidak mampu" — tidak ada yang bisa memaksamu. 안 menyiratkan pilihan, dan bisa terasa seperti menolak ajakan.',
        columns: ['Kalimat', 'Arti', 'Kesannya'],
        rows: [
          ['저는 술을 잘 못 마셔요.', 'Saya tidak terlalu kuat minum.', 'Paling aman dan paling sering dipakai'],
          ['오늘은 운전해야 해서요.', 'Hari ini saya harus menyetir.', 'Alasan yang tidak bisa dibantah'],
          ['내일 일이 있어서요.', 'Besok saya ada urusan.', 'Halus, tidak perlu rinci'],
          ['저는 여기까지만 할게요.', 'Saya cukup sampai di sini.', 'Untuk berhenti di tengah'],
          ['저는 술 안 마셔요.', 'Saya tidak minum alkohol.', 'Jelas, tapi terdengar lebih tegas'],
        ],
      },
      examples: [
        {
          ko: '죄송해요, 저는 술을 잘 못 마셔요. 사이다 마실게요.',
          id: 'Maaf, saya tidak terlalu kuat minum. Saya minum soda saja.',
          note: '사이다 di Korea berarti minuman soda bening, bukan jus apel.',
        },
      ],
      more:
        'Perhatikan kata 잘 pada 잘 못 마셔요. Tanpa 잘, kalimat 못 마셔요 terdengar mutlak ("sama sekali tidak bisa"). Dengan 잘, artinya menjadi "tidak terlalu kuat" — lebih lembut dan lebih mudah diterima. Akhiran 〜서요 pada 운전해야 해서요 adalah alasan yang sengaja dibiarkan menggantung, dan justru itu membuatnya terdengar sopan.',
    },
  ],

  dialogue: {
    title: 'Makan malam tim di 고깃집',
    situation: 'Minho, Sujin, dan Vio makan malam setelah jam kerja.',
    lines: [
      {
        speaker: '민호',
        ko: '여기 삼겹살 이인분하고 소주 한 병 주세요.',
        id: 'Permisi, dua porsi samgyeopsal dan sebotol soju.',
        note: '이인분 angka Sino, 한 병 angka asli — persis seperti Pelajaran 5.3.',
      },
      { speaker: '수진', ko: '비오 씨, 소주 마셔요?', id: 'Vio, minum soju?' },
      {
        speaker: '비오',
        ko: '조금 마셔요. 많이는 못 마셔요.',
        id: 'Sedikit saja. Tidak kuat banyak.',
        note: '많이는 memakai 는 untuk membandingkan: "kalau banyak sih tidak".',
      },
      {
        speaker: '민호',
        ko: '그럼 한 잔만 해요. 제가 따라 드릴게요.',
        id: 'Kalau begitu satu gelas saja. Biar saya tuangkan.',
        note: '한 잔만 — 만 membatasi, "satu gelas saja".',
      },
      { speaker: '비오', ko: '감사합니다.', id: 'Terima kasih.', note: 'Diterima dengan dua tangan.' },
      { speaker: '민호', ko: '자, 건배!', id: 'Ayo, bersulang!' },
      { speaker: '수진', ko: '고기 다 익었어요. 드세요.', id: 'Dagingnya sudah matang. Silakan.' },
      {
        speaker: '비오',
        ko: '이 집 고기 정말 맛있죠?',
        id: 'Daging di sini enak banget, kan?',
        note: '-죠? mengajak setuju, bukan benar-benar bertanya.',
      },
      {
        speaker: '민호',
        ko: '그럼요. 여기 유명해요.',
        id: 'Tentu saja. Tempat ini terkenal.',
        note: '그럼요 = "tentu saja" — jawaban khas untuk pertanyaan ber-죠?.',
      },
    ],
    politeness:
      'Perhatikan bahwa Vio menolak dengan 많이는 못 마셔요 — memakai 못, bukan 안. Ini pilihan yang disengaja: 못 menyiratkan keterbatasan diri, sehingga tidak ada yang merasa ditolak. Minho pun langsung menyesuaikan menjadi 한 잔만 해요 tanpa memaksa.',
  },

  passage: {
    title: '한국의 술자리 예절',
    intro: 'Lima aturan tak tertulis di meja minum Korea.',
    sentences: [
      { ko: '한국에서는 술자리 예절이 중요해요.', id: 'Di Korea, etiket di meja minum itu penting.' },
      { ko: '윗사람 앞에서는 고개를 돌리고 마셔요.', id: 'Di depan orang yang lebih senior, kita memalingkan wajah saat minum.' },
      { ko: '그리고 술은 두 손으로 따라요.', id: 'Dan menuang minuman dilakukan dengan dua tangan.' },
      { ko: '자기 잔은 자기가 따르지 않아요.', id: 'Gelas sendiri tidak dituang sendiri.' },
      { ko: '옆 사람 잔이 비면 따라 줘요.', id: 'Kalau gelas orang di sebelah kosong, kita tuangkan untuknya.' },
      { ko: '술을 못 마시면 미리 말하세요. 괜찮아요.', id: 'Kalau tidak bisa minum, katakan dari awal. Tidak apa-apa.' },
    ],
    vocabInContext: [
      { ko: '술자리', id: 'acara minum bersama' },
      { ko: '고개를 돌리다', id: 'memalingkan wajah' },
      { ko: '비다', id: 'kosong' },
      { ko: '미리', id: 'sebelumnya, dari awal' },
    ],
    analysis: [
      '한국에서는 memakai 에서 (tempat kegiatan) + 는 (kontras dengan negara lain) — pola bertumpuk dari Pelajaran 2.1.',
      '고개를 돌리고 마셔요 memakai -고 untuk menyambung dua tindakan berurutan (Pelajaran 4.1): memalingkan wajah, lalu minum.',
      '두 손으로 — (으)로 menandai alat atau cara, persis seperti 지하철로 di Pelajaran 2.9.',
      '따르지 않아요 memakai bentuk penyangkalan panjang -지 않다 dari Pelajaran 3.3, yang terasa lebih tegas dan cocok untuk menyatakan aturan.',
      '잔이 비면 — klausa syarat -(으)면 dari Pelajaran 5.6, dengan subjek memakai 이 karena berada di dalam anak kalimat.',
      '못 마시면 memakai 못 (ketidakmampuan), bukan 안 — pilihan yang sama dengan yang dipakai Vio di dialog.',
    ],
  },

  exercises: [
    {
      id: 'm7l2-e1',
      kind: 'fill',
      prompt: 'Ubah 맛있다 menjadi bentuk "kan?".',
      context: 'Kamu yakin makanannya enak dan ingin temanmu setuju.',
      sentence: '이 집 고기 ___?',
      translation: 'Daging di tempat ini enak, kan?',
      answers: ['맛있죠', '맛있지요'],
      explain:
        '-지요? ditempel pada batang (맛있), lalu disingkat menjadi -죠? dalam percakapan. Berbeda dari 맛있어요? yang benar-benar menanyakan, 맛있죠? mengundang persetujuan.',
      hint: 'Ditempel pada batang, lalu disingkat.',
      tags: ['-지요? / -죠?'],
    },
    {
      id: 'm7l2-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk penyangkalan yang paling aman secara sosial.',
      context: 'Atasanmu menawarkan soju dan kamu ingin menolak tanpa membuat canggung.',
      sentence: '저는 술을 잘 ___ 마셔요.',
      translation: 'Saya tidak terlalu kuat minum.',
      options: ['못', '안', '아니', '없'],
      answer: '못',
      explain:
        '못 menyatakan KETIDAKMAMPUAN — "saya tidak kuat". Karena bukan soal pilihan, tidak ada yang merasa ditolak. Inilah cara paling lazim menolak minum di Korea.',
      whyNot: {
        안: '안 마셔요 berarti "saya tidak mau minum" — terdengar seperti pilihan, dan bisa terasa menolak ajakan.',
        아니: '아니다 dipakai untuk menyangkal identitas kata benda, bukan tindakan.',
        없: '없다 berarti "tidak ada", bukan penyangkalan kata kerja.',
      },
      tags: ['etiket minum'],
    },
    {
      id: 'm7l2-e3',
      kind: 'fill',
      prompt: 'Ubah 따르다 menjadi tawaran rendah hati yang sudah diputuskan.',
      context: 'Kamu memutuskan untuk menuangkan minuman bagi seniormu.',
      sentence: '제가 ___.',
      translation: 'Biar saya yang tuangkan.',
      answers: ['따라 드릴게요', '따라드릴게요'],
      explain:
        'Dibentuk dari 해요체 tanpa 요 (따라요 → 따라) lalu 드릴게요. Perhatikan 따르다 adalah kata ㅡ luluh: 따르 + 아요 → 따라요.',
      tags: ['-아/어 드릴게요'],
    },
    {
      id: 'm7l2-e4',
      kind: 'match',
      prompt: 'Pasangkan aturan etiket dengan kalimat Koreanya.',
      pairs: [
        { left: '두 손으로 따라요', right: 'menuang dengan dua tangan' },
        { left: '자기 잔은 자기가 안 따라요', right: 'gelas sendiri tidak dituang sendiri' },
        { left: '고개를 돌리고 마셔요', right: 'memalingkan wajah saat minum' },
        { left: '잔이 비면 따라 줘요', right: 'mengisi gelas orang di sebelah' },
        { left: '건배!', right: 'bersulang' },
      ],
      explain:
        'Semua aturan ini berlaku terutama saat ada orang yang lebih senior di meja. Di antara teman sebaya, suasananya jauh lebih longgar.',
      tags: ['etiket minum'],
    },
    {
      id: 'm7l2-e5',
      kind: 'mc',
      prompt: 'Apa bedanya 따라 드릴까요? dan 따라 드릴게요?',
      options: [
        '드릴까요? meminta izin dulu; 드릴게요 menyatakan kamu sudah memutuskan.',
        '드릴까요? lebih sopan daripada 드릴게요.',
        '드릴까요? bentuk sekarang, 드릴게요 bentuk lampau.',
        'Keduanya artinya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '-(으)ㄹ까요? menanyakan pendapat lawan bicara, sedangkan -(으)ㄹ게요 mengumumkan keputusanmu — persis seperti yang kamu pelajari di Pelajaran 5.2. Keduanya sama-sama memakai bentuk rendah hati 드리다.',
      whyNot: {
        '드릴까요? lebih sopan daripada 드릴게요.': 'Keduanya sama-sama memakai 드리다, jadi setara.',
        '드릴까요? bentuk sekarang, 드릴게요 bentuk lampau.': 'Keduanya menunjuk ke masa depan.',
        'Keduanya artinya sama persis.': 'Satu bertanya, satu memutuskan.',
      },
      tags: ['-아/어 드릴게요'],
    },
    {
      id: 'm7l2-e6',
      kind: 'build',
      prompt: 'Susun penolakan yang sopan ini.',
      translation: 'Maaf, saya tidak terlalu kuat minum.',
      tiles: ['죄송해요,', '저는', '술을', '잘', '못', '마셔요'],
      distractors: ['안', '마셔요?'],
      answers: ['죄송해요, 저는 술을 잘 못 마셔요'],
      explain:
        'Kata 잘 adalah kuncinya: tanpa 잘, kalimat 못 마셔요 terdengar mutlak. Dengan 잘, artinya menjadi "tidak terlalu kuat" — lebih lembut dan lebih mudah diterima.',
      parts: [
        { part: '죄송해요,', role: 'permintaan maaf pembuka' },
        { part: '저는', role: 'topik' },
        { part: '술을', role: 'objek' },
        { part: '잘', role: 'melembutkan: "tidak terlalu"' },
        { part: '못', role: 'ketidakmampuan, bukan pilihan' },
        { part: '마셔요', role: 'kata kerja penutup' },
      ],
      tags: ['etiket minum'],
    },
    {
      id: 'm7l2-e7',
      kind: 'correct',
      prompt: 'Perbaiki bentuk tawarannya.',
      sentence: '제가 따르 드릴게요.',
      translation: 'Biar saya yang tuangkan.',
      answers: ['제가 따라 드릴게요'],
      explain:
        'Pola -아/어 드릴게요 memakai bentuk 해요체 tanpa 요, bukan batang kata. 따르다 adalah kata ㅡ luluh: 따르 → 따라요 → 따라.',
      tags: ['-아/어 드릴게요'],
    },
    {
      id: 'm7l2-e8',
      kind: 'mc',
      prompt: 'Dari bacaan 한국의 술자리 예절, apa yang sebaiknya dilakukan kalau kamu tidak bisa minum?',
      options: [
        'Katakan dari awal — tidak apa-apa.',
        'Minum sedikit supaya tidak mengecewakan.',
        'Pura-pura minum lalu membuangnya.',
        'Tidak usah ikut acara minumnya sama sekali.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat terakhir berbunyi 술을 못 마시면 미리 말하세요. 괜찮아요 — "kalau tidak bisa minum, katakan dari awal. Tidak apa-apa."',
      whyNot: {
        'Minum sedikit supaya tidak mengecewakan.': 'Bacaan justru menyarankan berterus terang.',
        'Pura-pura minum lalu membuangnya.': 'Tidak disebut, dan bertentangan dengan 미리 말하세요.',
        'Tidak usah ikut acara minumnya sama sekali.': 'Bacaan tidak menyarankan menghindari acaranya.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm7l2-q1',
      kind: 'mc',
      prompt: 'Temanmu bertanya 한국 음식 좋아해요? dan kamu memang sangat suka. Jawaban mana yang paling hidup?',
      options: ['좋아하죠!', '좋아해요?', '좋아하지 않아요.', '좋아할까요?'],
      answerIndex: 0,
      explain:
        '-죠 sebagai JAWABAN berarti "tentu saja". 좋아하죠! terdengar jauh lebih hangat dan natural daripada sekadar 좋아해요.',
      whyNot: {
        '좋아해요?': 'Ini justru balik bertanya.',
        '좋아하지 않아요.': 'Artinya "saya tidak suka".',
        '좋아할까요?': 'Artinya "apa saya akan suka ya?" — belum terjadi.',
      },
      tags: ['-지요? / -죠?'],
    },
    {
      id: 'm7l2-q2',
      kind: 'fill',
      prompt: 'Ubah 돕다 menjadi tawaran rendah hati.',
      context: '돕다 adalah kata ㅂ tidak beraturan: 도와요.',
      sentence: '제가 ___.',
      translation: 'Biar saya bantu.',
      answers: ['도와 드릴게요', '도와드릴게요'],
      explain:
        '돕다 → 도와요 → 도와, lalu + 드릴게요. Perubahan ㅂ menjadi 오 di sini adalah pengecualian dalam kelompok ㅂ tidak beraturan (biasanya menjadi 우).',
      tags: ['-아/어 드릴게요'],
    },
    {
      id: 'm7l2-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Cuaca hari ini bagus, kan?',
      answers: ['오늘 날씨 좋죠?', '오늘 날씨 좋지요?', '오늘 날씨가 좋죠?'],
      explain:
        '-죠? ditempel pada batang 좋. Dalam percakapan, partikel 가 pada 날씨 sering dilepas karena kalimatnya pendek.',
      tags: ['-지요? / -죠?'],
    },
  ],

  summary: {
    points: [
      '-지요? disingkat -죠? berarti "kan?" — mencari persetujuan, bukan benar-benar bertanya.',
      'Sebagai jawaban, -죠 berarti "tentu saja": 좋아하죠!, 알죠, 그럼요.',
      '-아/어 드릴게요 = "biar saya yang …" (sudah diputuskan); -아/어 드릴까요? = "perlu saya …?" (minta izin).',
      'Tuang dan terima dengan dua tangan; jangan menuang gelasmu sendiri.',
      'Di depan yang lebih senior, palingkan wajah saat minum.',
      'Menolak minum memakai 못, bukan 안 — dan tambahkan 잘 supaya lebih lembut: 잘 못 마셔요.',
      '2차 berarti ronde kedua; menolaknya cukup dengan 저는 먼저 들어갈게요.',
    ],
    pitfalls: [
      {
        wrong: '저는 술 안 마셔요. (saat ditawari atasan)',
        right: '저는 술을 잘 못 마셔요.',
        why: '안 terdengar seperti pilihan menolak; 못 menyiratkan keterbatasan dan lebih mudah diterima.',
      },
      {
        wrong: '제가 따르 드릴게요.',
        right: '제가 따라 드릴게요.',
        why: 'Pola -아/어 드릴게요 memakai bentuk 해요체 tanpa 요, bukan batang kata.',
      },
      {
        wrong: '맛있어죠?',
        right: '맛있죠?',
        why: '-죠? ditempel langsung pada batang, bukan pada bentuk 해요체.',
      },
    ],
  },
}
