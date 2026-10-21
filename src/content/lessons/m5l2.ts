import type { Lesson } from '../../types/curriculum'

export const m5l2: Lesson = {
  id: 'm5-l2',
  moduleId: 'm5',
  number: '5.2',
  title: 'Memesan, meminta, mengajak',
  subtitle: '주세요 · -(으)세요 · -(으)ㄹ까요? dan angka penghitung',
  objective:
    'Setelah pelajaran ini kamu bisa memesan makanan, meminta tolong dengan sopan, menanyakan harga, dan mengajak seseorang melakukan sesuatu.',
  focus: ['주세요', '-(으)세요', '-(으)ㄹ까요?', 'penghitung'],
  estimatedMinutes: 18,

  coreExamples: [
    {
      ko: '아메리카노 한 잔 주세요.',
      id: 'Tolong satu gelas americano.',
      highlight: ['주세요'],
      highlightKind: 'ending',
    },
    {
      ko: '조금만 기다려 주세요.',
      id: 'Tolong tunggu sebentar.',
      highlight: ['기다려 주세요'],
      highlightKind: 'ending',
    },
    {
      ko: '여기 앉으세요.',
      id: 'Silakan duduk di sini.',
      highlight: ['앉으세요'],
      highlightKind: 'ending',
    },
    {
      ko: '같이 점심 먹을까요?',
      id: 'Bagaimana kalau kita makan siang bersama?',
      highlight: ['먹을까요'],
      highlightKind: 'ending',
    },
    { ko: '이거 얼마예요?', id: 'Ini berapa harganya?', highlight: ['얼마'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '아메리카노 한 잔 주세요.',
        id: 'Tolong satu gelas americano.',
        highlight: ['주세요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '아메리카노', formula: '—', meaning: 'Americano; partikel objek dilepas dalam pesanan' },
        {
          unit: '한 잔',
          formula: '하나 → 한 + 잔',
          meaning: 'Satu gelas; 하나 menyusut menjadi 한 di depan penghitung',
        },
        { unit: '주세요', formula: '주다 + (으)세요', meaning: '"Tolong berikan"' },
      ],
      why:
        'Pola pesanan Korea selalu sama: BENDA → ANGKA → PENGHITUNG → 주세요. Perhatikan urutannya — angka dan penghitung berada SESUDAH bendanya, kebalikan dari bahasa Indonesia ("satu gelas americano"). Partikel objek 를 hampir selalu dilepas dalam pesanan karena kalimatnya pendek dan jelas.',
      swaps: [
        {
          alt: '아메리카노로 할게요.',
          effect:
            '"Saya pilih americano saja." Di sini 로 menandai pilihan. Sama lazimnya saat memesan, dan terdengar seperti baru saja memutuskan.',
        },
        {
          alt: '아메리카노 하나 주세요.',
          effect:
            'Memakai 하나 tanpa penghitung. Sedikit lebih santai, tetapi sepenuhnya wajar dan sangat sering terdengar.',
        },
      ],
    },
    {
      sentence: {
        ko: '조금만 기다려 주세요.',
        id: 'Tolong tunggu sebentar.',
        highlight: ['기다려 주세요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '조금만', formula: '조금 + 만', meaning: 'Sebentar saja; 만 membatasi' },
        {
          unit: '기다려',
          formula: '기다리다 → 기다려요 → 기다려',
          meaning: 'Bentuk 해요체 tanpa 요',
        },
        { unit: '주세요', formula: '주다 + (으)세요', meaning: 'Menjadikannya permintaan: "tolong …-kan"' },
      ],
      why:
        'Ada dua pola 주세요 yang penting dibedakan. Kalau kamu meminta BENDA, cukup: benda + 주세요 (물 주세요). Kalau kamu meminta TINDAKAN, kata kerjanya diubah dulu ke bentuk 해요체 tanpa 요, lalu disusul 주세요: 기다려 주세요, 도와주세요, 가르쳐 주세요. Pola kedua inilah yang membuatmu bisa meminta apa pun dengan sopan.',
      swaps: [
        {
          alt: '조금만 기다리세요.',
          effect:
            'Juga sopan, tetapi terdengar lebih seperti INSTRUKSI daripada permintaan. Pelayan boleh berkata begitu kepada pelanggan; pelanggan sebaiknya memakai 기다려 주세요.',
        },
        {
          alt: '조금만 기다려 주시겠어요?',
          effect:
            'Versi paling halus: "bisakah Anda menunggu sebentar?". Berguna untuk permintaan kepada atasan atau orang asing.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '주세요', id: 'tolong berikan / tolong lakukan', pos: 'ungkapan' },
    { ko: '잔', id: 'gelas, cangkir (penghitung)', pos: 'penghitung' },
    { ko: '개', id: 'buah (penghitung umum)', pos: 'penghitung' },
    { ko: '명 / 분', id: 'orang (penghitung); 분 adalah bentuk hormat', pos: 'penghitung' },
    { ko: '그릇', id: 'mangkuk (penghitung)', pos: 'penghitung' },
    { ko: '병', id: 'botol (penghitung)', pos: 'penghitung' },
    { ko: '계산하다', id: 'membayar, menghitung', pos: 'kata kerja', note: '계산해 주세요 = tolong hitungkan.' },
    { ko: '메뉴', id: 'menu', pos: 'kata benda' },
    { ko: '포장', id: 'bungkus, dibawa pulang', pos: 'kata benda', note: '포장해 주세요 = tolong dibungkus.' },
    { ko: '천천히', id: 'pelan-pelan', pos: 'kata keterangan' },
  ],

  grammar: [
    {
      title: '주세요 — dua pola permintaan',
      form: 'benda + 주세요 · kata kerja (해요체 − 요) + 주세요',
      body:
        'Satu ungkapan, dua cara pakai. Yang pertama untuk meminta barang, yang kedua untuk meminta seseorang melakukan sesuatu.',
      table: {
        columns: ['Yang diminta', 'Pola', 'Contoh', 'Arti'],
        rows: [
          ['Benda', 'benda + 주세요', '물 주세요.', 'Tolong (beri) air.'],
          ['Benda + jumlah', 'benda + angka + penghitung + 주세요', '커피 두 잔 주세요.', 'Tolong dua gelas kopi.'],
          ['Tindakan', '해요체 − 요 + 주세요', '기다려 주세요.', 'Tolong tunggu.'],
          ['Tindakan', '해요체 − 요 + 주세요', '천천히 말해 주세요.', 'Tolong bicara pelan-pelan.'],
          ['Tindakan', '해요체 − 요 + 주세요', '다시 설명해 주세요.', 'Tolong jelaskan lagi.'],
        ],
      },
      examples: [
        { ko: '메뉴 좀 주세요.', id: 'Tolong menunya.', note: '좀 melembutkan permintaan — hampir selalu ditambahkan.' },
        { ko: '사진 좀 찍어 주세요.', id: 'Tolong fotokan saya.' },
      ],
      more:
        'Kata 좀 secara harfiah berarti "sedikit", tetapi dalam permintaan fungsinya melembutkan — mirip "tolong ya" dalam bahasa Indonesia. Menambahkannya membuat permintaan terdengar jauh lebih halus: 물 주세요 benar, tetapi 물 좀 주세요 lebih hangat. Biasakan menyelipkannya.',
    },
    {
      title: '-(으)세요 — perintah sopan DAN bentuk hormat',
      form: 'batang + 으세요 (konsonan) · 세요 (vokal)',
      body:
        'Bentuk ini punya dua makna yang ditentukan konteks. Sebagai PERINTAH, ia berarti "silakan …". Sebagai bentuk HORMAT, ia menggambarkan apa yang sedang dilakukan orang yang kamu hormati.',
      table: {
        caption:
          'Beberapa kata kerja punya bentuk hormat tersendiri: 먹다 → 드세요, 자다 → 주무세요, 있다 → 계세요.',
        columns: ['Bentuk kamus', 'Batang', '-(으)세요', 'Sebagai perintah'],
        rows: [
          ['앉다', '앉', '앉으세요', 'Silakan duduk'],
          ['오다', '오', '오세요', 'Silakan datang'],
          ['기다리다', '기다리', '기다리세요', 'Silakan tunggu'],
          ['읽다', '읽', '읽으세요', 'Silakan baca'],
          ['먹다', '—', '드세요', 'Silakan makan'],
        ],
      },
      examples: [
        { ko: '여기 앉으세요.', id: 'Silakan duduk di sini.', note: 'Perintah sopan.' },
        { ko: '많이 드세요.', id: 'Silakan makan yang banyak.', note: 'Ungkapan tuan rumah yang sangat umum.' },
        {
          ko: '사장님께서 지금 오세요.',
          id: 'Pak Direktur sedang datang.',
          note: 'Di sini -(으)세요 bukan perintah, melainkan bentuk hormat.',
        },
      ],
      mistakes: [
        {
          wrong: '저는 여기 앉으세요.',
          right: '저는 여기 앉아요.',
          why: '-(으)세요 tidak pernah dipakai untuk diri sendiri — baik sebagai perintah maupun sebagai bentuk hormat.',
        },
      ],
      more:
        'Untuk melarang, bentuknya -지 마세요: 여기에서 사진을 찍지 마세요 ("jangan memotret di sini"). Ditempel pada batang kata, sama seperti -지 않다.',
    },
    {
      title: '-(으)ㄹ까요? — mengajak dan menawarkan',
      form: 'batang + ㄹ까요? (vokal) · 을까요? (konsonan)',
      body:
        'Bentuknya persis seperti -(으)ㄹ 거예요 dan -(으)ㄹ 수 있다. Artinya "bagaimana kalau kita…?" atau "perlukah saya…?" — tergantung siapa yang akan melakukannya.',
      table: {
        columns: ['Kalimat', 'Arti', 'Siapa yang bertindak'],
        rows: [
          ['같이 갈까요?', 'Bagaimana kalau kita pergi bersama?', 'Kita berdua'],
          ['점심 먹을까요?', 'Mau makan siang?', 'Kita berdua'],
          ['창문을 열까요?', 'Perlu saya bukakan jendelanya?', 'Saya'],
          ['뭐 마실까요?', 'Mau minum apa?', 'Kita berdua'],
        ],
      },
      examples: [
        { ko: '같이 점심 먹을까요?', id: 'Bagaimana kalau kita makan siang bersama?' },
        { ko: '제가 도와드릴까요?', id: 'Perlu saya bantu?', note: '도와드리다 adalah bentuk hormat dari 도와주다.' },
      ],
      more:
        'Jawaban untuk -(으)ㄹ까요? biasanya memakai 해요체 biasa: 네, 좋아요 atau 네, 그래요. Untuk menyatakan niatmu sendiri yang sudah pasti, ada bentuk -(으)ㄹ게요: 제가 할게요 ("biar saya yang kerjakan"). Bedanya, -(으)ㄹ까요? menanyakan pendapat lawan bicara, sedangkan -(으)ㄹ게요 mengumumkan keputusanmu.',
    },
    {
      title: 'Angka dan penghitung',
      body:
        'Bahasa Korea punya dua sistem angka. Yang mana dipakai ditentukan oleh BENDA yang dihitung, bukan oleh besar kecilnya angka.',
      table: {
        caption:
          'Empat angka pertama menyusut di depan penghitung: 하나→한, 둘→두, 셋→세, 넷→네. Juga 스물→스무.',
        columns: ['Sistem', 'Dipakai untuk', 'Contoh', 'Angka'],
        rows: [
          ['Asli Korea', 'Jumlah benda, orang, jam', '커피 두 잔, 세 시', '하나 둘 셋 넷 다섯'],
          ['Sino-Korea', 'Uang, menit, tanggal, nomor', '오천 원, 삼십 분', '일 이 삼 사 오'],
        ],
      },
      examples: [
        {
          ko: '커피 두 잔하고 케이크 한 개 주세요.',
          id: 'Tolong dua gelas kopi dan satu potong kue.',
        },
        {
          ko: '세 시 삼십 분에 만나요.',
          id: 'Kita bertemu jam setengah empat.',
          note: 'Jam memakai angka asli (세), menit memakai angka Sino (삼십). Satu kalimat, dua sistem.',
        },
        { ko: '다 해서 만 오천 원이에요.', id: 'Semuanya lima belas ribu won.' },
      ],
      mistakes: [
        {
          wrong: '커피 이 잔 주세요.',
          right: '커피 두 잔 주세요.',
          why: 'Jumlah benda memakai angka asli Korea, bukan Sino-Korea.',
        },
        {
          wrong: '하나 잔 주세요.',
          right: '한 잔 주세요.',
          why: '하나 menyusut menjadi 한 ketika diikuti penghitung.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Memesan di kafe',
    situation: 'Vio dan Sujin memesan minuman dan kue.',
    lines: [
      { speaker: '직원', ko: '어서 오세요. 주문하시겠어요?', id: 'Selamat datang. Mau pesan apa?' },
      {
        speaker: '비오',
        ko: '아메리카노 두 잔하고 치즈케이크 한 개 주세요.',
        id: 'Tolong dua gelas americano dan satu potong cheesecake.',
        note: 'Pola: benda → angka → penghitung → 주세요. 하고 menyambungkan dua pesanan.',
      },
      { speaker: '직원', ko: '네. 드시고 가세요?', id: 'Baik. Dimakan di sini?' },
      {
        speaker: '비오',
        ko: '네, 여기에서 먹을게요. 다 해서 얼마예요?',
        id: 'Ya, kami makan di sini. Semuanya berapa?',
        note: '먹을게요 — mengumumkan keputusan sendiri. 얼마예요? untuk menanyakan harga.',
      },
      { speaker: '직원', ko: '만 사천 원입니다.', id: 'Empat belas ribu won.' },
      {
        speaker: '비오',
        ko: '카드로 계산할게요.',
        id: 'Saya bayar pakai kartu.',
        note: '카드로 — 로 menandai alat pembayaran.',
      },
      {
        speaker: '수진',
        ko: '저기 창가 자리에 앉을까요?',
        id: 'Bagaimana kalau kita duduk di dekat jendela?',
        note: '-(으)ㄹ까요? mengajak lawan bicara.',
      },
      { speaker: '비오', ko: '네, 좋아요.', id: 'Ya, boleh.' },
    ],
    politeness:
      '어서 오세요 ("selamat datang") dan 드시고 가세요? keduanya memakai -(으)세요 karena pelayan berbicara kepada pelanggan. Sebagai pelanggan, kamu membalas dengan 해요체 biasa — tidak perlu memakai bentuk hormat kepada pelayan, tetapi tetap sopan.',
  },

  passage: {
    title: '점심시간',
    intro: 'Satu adegan makan siang, dari mengajak sampai membayar.',
    sentences: [
      { ko: '열두 시에 수진 씨한테 메시지를 보냈어요.', id: 'Jam dua belas saya mengirim pesan ke Sujin.' },
      { ko: '"같이 점심 먹을까요?"', id: '"Bagaimana kalau kita makan siang bersama?"' },
      { ko: '수진 씨가 "네, 좋아요"라고 답장했어요.', id: 'Sujin membalas, "Ya, boleh."' },
      { ko: '우리는 회사 앞 식당에 갔어요.', id: 'Kami pergi ke rumah makan di depan kantor.' },
      { ko: '저는 비빔밥 한 그릇을 시켰어요.', id: 'Saya memesan satu mangkuk bibimbap.' },
      { ko: '수진 씨는 김치찌개를 시켰어요.', id: 'Sujin memesan kimchi jjigae.' },
      { ko: '다 해서 이만 원이었어요.', id: 'Semuanya dua puluh ribu won.' },
      { ko: '오늘은 제가 계산했어요. 다음에는 수진 씨가 살 거예요.', id: 'Hari ini saya yang bayar. Lain kali Sujin yang traktir.' },
    ],
    vocabInContext: [
      { ko: '시키다', id: 'memesan' },
      { ko: '메시지', id: 'pesan' },
      { ko: '다 해서', id: 'semuanya, totalnya' },
      { ko: '사다', id: 'membeli; di sini "mentraktir"' },
    ],
    analysis: [
      '먹을까요? — batang 먹 berakhir konsonan, jadi memakai 을까요. Ini ajakan, bukan pertanyaan biasa.',
      '수진 씨한테 — penerima pesan adalah orang, jadi 한테.',
      '한 그릇을 — 하나 menyusut menjadi 한 di depan penghitung 그릇. Partikel objek 을 dipertahankan di sini karena kalimatnya berupa cerita, bukan pesanan langsung.',
      '이만 원 memakai angka Sino-Korea karena menyebut uang. Bandingkan dengan 한 그릇 yang memakai angka asli karena menghitung benda.',
      '제가 계산했어요 memakai 제가 — bukan 저는 — karena menekankan SIAPA yang membayar, menjawab "siapa yang bayar?" secara tersirat.',
      '오늘은 dan 다음에는 keduanya memakai 는 karena dua waktu sedang dibandingkan.',
    ],
  },

  exercises: [
    {
      id: 'm5l2-e1',
      kind: 'build',
      prompt: 'Susun pesanan ini.',
      translation: 'Tolong dua gelas kopi.',
      tiles: ['커피', '두', '잔', '주세요'],
      distractors: ['둘', '이'],
      answers: ['커피 두 잔 주세요'],
      explain:
        'Pola pesanan: benda → angka → penghitung → 주세요. Angka 둘 menyusut menjadi 두 di depan penghitung.',
      parts: [
        { part: '커피', role: 'benda yang dipesan; partikel objek dilepas' },
        { part: '두', role: 'angka asli Korea (둘 → 두)' },
        { part: '잔', role: 'penghitung untuk gelas/cangkir' },
        { part: '주세요', role: '"tolong berikan"' },
      ],
      tags: ['주세요', 'penghitung'],
    },
    {
      id: 'm5l2-e2',
      kind: 'fill',
      prompt: 'Ubah 기다리다 menjadi permintaan sopan dengan 주세요.',
      sentence: '조금만 ___.',
      translation: 'Tolong tunggu sebentar.',
      answers: ['기다려 주세요', '기다려주세요'],
      explain:
        'Untuk meminta TINDAKAN, kata kerjanya diubah ke bentuk 해요체 lalu 요-nya dibuang, baru disusul 주세요: 기다려요 → 기다려 → 기다려 주세요.',
      hint: 'Mulai dari bentuk 해요체: 기다려요.',
      tags: ['주세요'],
    },
    {
      id: 'm5l2-e3',
      kind: 'particle',
      prompt: 'Pilih bentuk ajakan yang benar.',
      context: 'Kamu mengajak rekan kerja makan siang bersama.',
      sentence: '같이 점심 ___?',
      translation: 'Bagaimana kalau kita makan siang bersama?',
      options: ['먹을까요', '먹까요', '먹어요까요', '먹을게요'],
      answer: '먹을까요',
      explain:
        'Batang 먹 berakhir konsonan, jadi memakai 을까요. Bentuknya sama persis dengan 먹을 거예요 dan 먹을 수 있어요 — semuanya dibangun dari batang + (으)ㄹ.',
      whyNot: {
        먹까요: 'Batang berakhir konsonan membutuhkan 을 sebagai penyambung.',
        먹어요까요: 'Bentuk ini dibangun dari batang kata, bukan dari 해요체.',
        먹을게요: 'Itu berarti "saya akan makan" — mengumumkan keputusan sendiri, bukan mengajak.',
      },
      tags: ['-(으)ㄹ까요?'],
    },
    {
      id: 'm5l2-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap penghitung dengan pemakaiannya.',
      pairs: [
        { left: '잔', right: 'gelas, cangkir' },
        { left: '개', right: 'benda pada umumnya' },
        { left: '명', right: 'orang' },
        { left: '그릇', right: 'mangkuk' },
        { left: '병', right: 'botol' },
        { left: '원', right: 'mata uang won' },
      ],
      explain:
        'Lima penghitung pertama memakai angka ASLI Korea (한, 두, 세…). Hanya 원 yang memakai angka Sino-Korea (오천 원), karena uang selalu memakai sistem Sino.',
      tags: ['penghitung'],
    },
    {
      id: 'm5l2-e5',
      kind: 'correct',
      prompt: 'Perbaiki angkanya.',
      sentence: '커피 이 잔 주세요.',
      translation: 'Tolong dua gelas kopi.',
      answers: ['커피 두 잔 주세요'],
      explain:
        '이 adalah angka Sino-Korea, yang dipakai untuk uang, menit, dan tanggal. Untuk menghitung BENDA, bahasa Korea memakai angka asli: 둘 → 두 di depan penghitung.',
      tags: ['penghitung'],
    },
    {
      id: 'm5l2-e6',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '저는 여기 앉으세요.',
      translation: 'Saya duduk di sini.',
      answers: ['저는 여기 앉아요', '여기 앉아요'],
      explain:
        '-(으)세요 tidak pernah dipakai untuk diri sendiri — baik sebagai perintah ("silakan duduk") maupun sebagai bentuk hormat. Untuk menyatakan apa yang KAMU lakukan, pakai 해요체 biasa: 앉아요.',
      tags: ['-(으)세요'],
    },
    {
      id: 'm5l2-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Tolong bicara pelan-pelan.',
      answers: ['천천히 말해 주세요', '천천히 말해주세요', '천천히 말씀해 주세요'],
      explain:
        '말하다 → 말해요 → 말해 → 말해 주세요. Ini kalimat yang akan sangat sering kamu pakai saat berbicara dengan penutur asli.',
      hint: 'Permintaan tindakan: bentuk 해요체 tanpa 요, lalu 주세요.',
      tags: ['주세요'],
    },
    {
      id: 'm5l2-e8',
      kind: 'mc',
      prompt: 'Apa perbedaan antara 제가 할까요? dan 제가 할게요?',
      options: [
        '할까요? menanyakan pendapat lawan bicara; 할게요 mengumumkan keputusanku sendiri.',
        '할까요? bentuk lampau; 할게요 bentuk sekarang.',
        '할까요? lebih sopan daripada 할게요.',
        'Keduanya artinya sama.',
      ],
      answerIndex: 0,
      explain:
        '제가 할까요? berarti "perlu saya yang kerjakan?" — kamu meminta persetujuan. 제가 할게요 berarti "biar saya yang kerjakan" — kamu sudah memutuskan dan memberi tahu. Keduanya sama-sama sopan.',
      whyNot: {
        '할까요? bentuk lampau; 할게요 bentuk sekarang.': 'Keduanya menunjuk ke masa depan.',
        '할까요? lebih sopan daripada 할게요.': 'Keduanya setara dari segi kesopanan; yang berbeda adalah maksudnya.',
        'Keduanya artinya sama.': 'Satu bertanya, satu memberi tahu — perbedaannya penting dalam percakapan.',
      },
      tags: ['-(으)ㄹ까요?'],
    },
  ],

  quiz: [
    {
      id: 'm5l2-q1',
      kind: 'build',
      prompt: 'Susun pesanan lengkap ini.',
      translation: 'Tolong satu mangkuk bibimbap dan dua botol air.',
      tiles: ['비빔밥', '한 그릇하고', '물', '두 병', '주세요'],
      distractors: ['하나 그릇', '이 병'],
      answers: ['비빔밥 한 그릇하고 물 두 병 주세요'],
      explain:
        'Dua pesanan disambung dengan 하고. Keduanya memakai angka asli Korea yang menyusut di depan penghitung: 하나 → 한, 둘 → 두.',
      parts: [
        { part: '비빔밥', role: 'pesanan pertama' },
        { part: '한 그릇하고', role: 'satu mangkuk + penyambung 하고' },
        { part: '물', role: 'pesanan kedua' },
        { part: '두 병', role: 'dua botol' },
        { part: '주세요', role: '"tolong berikan", menutup pesanan' },
      ],
      tags: ['주세요', 'penghitung'],
    },
    {
      id: 'm5l2-q2',
      kind: 'fill',
      prompt: 'Ubah 앉다 menjadi perintah sopan.',
      sentence: '여기 ___.',
      translation: 'Silakan duduk di sini.',
      answers: ['앉으세요'],
      explain:
        'Batang 앉 berakhir konsonan, jadi memakai 으세요. Bandingkan dengan 오다 yang batangnya berakhir vokal: 오세요.',
      tags: ['-(으)세요'],
    },
    {
      id: 'm5l2-q3',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR untuk menanyakan harga?',
      options: ['이거 얼마예요?', '이거 몇 예요?', '이거 얼마 있어요?', '이거 몇 돈이에요?'],
      answerIndex: 0,
      explain:
        '얼마 khusus untuk menanyakan harga, dan berpasangan dengan 예요 karena 얼마 berakhir vokal. 몇 dipakai untuk jumlah dan selalu diikuti penghitung: 몇 개, 몇 시, 몇 명.',
      whyNot: {
        '이거 몇 예요?': '몇 harus diikuti penghitung, tidak bisa berdiri sendiri seperti ini.',
        '이거 얼마 있어요?': 'Artinya menjadi "berapa banyak yang ada?", bukan menanyakan harga.',
        '이거 몇 돈이에요?': '돈 berarti "uang" secara umum dan tidak dipakai sebagai penghitung harga.',
      },
      tags: ['penghitung'],
    },
  ],

  summary: {
    points: [
      'Meminta benda: benda + 주세요. Meminta tindakan: bentuk 해요체 tanpa 요 + 주세요.',
      'Tambahkan 좀 untuk melembutkan permintaan: 물 좀 주세요.',
      '-(으)세요 berfungsi sebagai perintah sopan DAN sebagai bentuk hormat; tidak pernah untuk diri sendiri.',
      'Melarang memakai -지 마세요.',
      '-(으)ㄹ까요? untuk mengajak atau menawarkan; -(으)ㄹ게요 untuk mengumumkan keputusan sendiri.',
      'Jumlah benda memakai angka asli Korea; uang, menit, dan tanggal memakai angka Sino-Korea.',
      '하나/둘/셋/넷/스물 menyusut menjadi 한/두/세/네/스무 di depan penghitung.',
    ],
    pitfalls: [
      {
        wrong: '커피 이 잔 주세요.',
        right: '커피 두 잔 주세요.',
        why: 'Menghitung benda memakai angka asli Korea, bukan Sino-Korea.',
      },
      {
        wrong: '저는 여기 앉으세요.',
        right: '저는 여기 앉아요.',
        why: '-(으)세요 tidak pernah dipakai untuk diri sendiri.',
      },
      {
        wrong: '기다리 주세요.',
        right: '기다려 주세요.',
        why: 'Yang dipakai adalah bentuk 해요체 tanpa 요 (기다려), bukan batang kata.',
      },
    ],
  },
}
