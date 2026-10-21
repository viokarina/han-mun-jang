import type { Lesson } from '../../types/curriculum'

export const m2l9: Lesson = {
  id: 'm2-l9',
  moduleId: 'm2',
  number: '2.9',
  title: 'Cara, batas, dan perbandingan',
  subtitle: '(으)로 · 부터/까지 · 보다',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan naik apa, dari kapan sampai kapan, dan membandingkan dua hal tanpa membalik artinya.',
  focus: ['(으)로', '부터/까지', '보다'],
  estimatedMinutes: 16,

  coreExamples: [
    { ko: '지하철로 회사에 가요.', id: 'Saya pergi ke kantor naik kereta bawah tanah.', highlight: ['로'] },
    { ko: '한국어로 메모를 써요.', id: 'Saya menulis memo dalam bahasa Korea.', highlight: ['로'] },
    {
      ko: '아홉 시부터 여섯 시까지 일해요.',
      id: 'Saya bekerja dari jam sembilan sampai jam enam.',
      highlight: ['부터', '까지'],
    },
    {
      ko: '집에서 회사까지 삼십 분 걸려요.',
      id: 'Dari rumah ke kantor butuh tiga puluh menit.',
      highlight: ['에서', '까지'],
    },
    {
      ko: '저는 커피보다 차를 더 좋아해요.',
      id: 'Saya lebih suka teh daripada kopi.',
      highlight: ['보다'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '지하철로 회사에 가요.',
        id: 'Saya pergi ke kantor naik kereta bawah tanah.',
        highlight: ['로', '에'],
      },
      rows: [
        {
          unit: '지하철로',
          formula: '지하철 + 로',
          meaning: 'Dengan kereta bawah tanah — alat/cara; bentuknya 로 karena berakhir ㄹ',
        },
        { unit: '회사에', formula: '회사 + 에', meaning: 'Ke kantor — tujuan' },
        { unit: '가요', formula: '가다 → 가요', meaning: 'Pergi, 해요체' },
      ],
      why:
        '(으)로 menjawab pertanyaan "dengan apa?" atau "bagaimana caranya?". Perhatikan bahwa alat (지하철로) dan tujuan (회사에) hadir berdampingan tanpa bertabrakan — masing-masing menjawab pertanyaan yang berbeda. Soal bentuk: 로 dipakai setelah vokal DAN setelah ㄹ; 으로 dipakai setelah konsonan lain. Pengecualian ㄹ ini adalah satu-satunya hal yang perlu dihafal.',
      swaps: [
        {
          alt: '지하철을 타고 회사에 가요.',
          effect:
            'Artinya sama, tetapi memakai kata kerja 타다 ("naik") yang disambung dengan -고. Bentuk ini lebih panjang tetapi juga sangat umum.',
        },
        {
          alt: '회사로 가요.',
          effect:
            'Dengan 로 pada tujuannya, penekanannya bergeser ke ARAH perjalanan, bukan titik akhirnya. Berguna saat memberi petunjuk jalan atau membandingkan beberapa arah.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 커피보다 차를 더 좋아해요.',
        id: 'Saya lebih suka teh daripada kopi.',
        highlight: ['보다', '를'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '커피보다',
          formula: '커피 + 보다',
          meaning: 'Dibandingkan kopi; 보다 menempel pada yang KALAH',
        },
        { unit: '차를', formula: '차 + 를', meaning: 'Teh — objek dari 좋아하다' },
        { unit: '더', formula: '—', meaning: '"lebih"; memperjelas, tetapi boleh dilepas' },
        { unit: '좋아해요', formula: '좋아하다 → 좋아해요', meaning: 'Menyukai, 해요체' },
      ],
      why:
        'Satu aturan yang menentukan segalanya: 보다 SELALU menempel pada hal yang kalah dalam perbandingan. Kalau kamu lebih suka teh, maka kopilah yang mendapat 보다. Membalik posisinya akan membalik arti kalimat sepenuhnya — dan ini kesalahan yang paling sering terjadi karena bahasa Indonesia menaruh "daripada" di tengah.',
      swaps: [
        {
          alt: '저는 차보다 커피를 더 좋아해요.',
          effect: 'Artinya terbalik: "saya lebih suka kopi daripada teh".',
        },
        {
          alt: '차가 커피보다 더 맛있어요.',
          effect:
            'Urutannya boleh dibalik tanpa mengubah arti, selama 보다 tetap menempel pada 커피. Yang menentukan adalah letak 보다, bukan urutan kata.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '지하철', id: 'kereta bawah tanah', pos: 'kata benda' },
    { ko: '버스', id: 'bus', pos: 'kata benda' },
    { ko: '자전거', id: 'sepeda', pos: 'kata benda' },
    { ko: '걸어서', id: 'dengan berjalan kaki', pos: 'ungkapan', note: 'Dari 걷다; bukan memakai 로.' },
    { ko: '더', id: 'lebih', pos: 'kata keterangan' },
    { ko: '제일 / 가장', id: 'paling', pos: 'kata keterangan' },
    { ko: '왼쪽', id: 'kiri', pos: 'kata benda' },
    { ko: '오른쪽', id: 'kanan', pos: 'kata benda' },
    { ko: '방학', id: 'libur semester', pos: 'kata benda' },
    { ko: '덥다', id: 'panas (cuaca)', pos: 'kata sifat', note: 'ㅂ tidak beraturan: 더워요.' },
  ],

  grammar: [
    {
      title: '(으)로 — satu partikel, lima tugas',
      form: '로 setelah vokal dan ㄹ · 으로 setelah konsonan lain',
      body:
        'Partikel ini terasa luas karena semua tugasnya berbagi satu gagasan: "melalui" sesuatu — melalui alat, melalui bahasa, melalui arah.',
      table: {
        columns: ['Tugas', 'Contoh', 'Arti'],
        rows: [
          ['Alat transportasi', '버스로 가요.', 'Pergi naik bus'],
          ['Alat / bahan', '젓가락으로 먹어요.', 'Makan dengan sumpit'],
          ['Bahasa', '한국어로 말해요.', 'Berbicara dalam bahasa Korea'],
          ['Arah umum', '왼쪽으로 가세요.', 'Belok ke kiri'],
          ['Pilihan', '커피로 할게요.', 'Saya pilih kopi saja'],
        ],
      },
      examples: [
        { ko: '자전거로 출근해요.', id: 'Saya berangkat kerja naik sepeda.', highlight: ['로'] },
        { ko: '손으로 드세요.', id: 'Silakan makan dengan tangan.', highlight: ['으로'] },
      ],
      mistakes: [
        {
          wrong: '지하철으로 가요.',
          right: '지하철로 가요.',
          why: '지하철 berakhir dengan ㄹ, dan setelah ㄹ bentuknya tetap 로.',
        },
        {
          wrong: '걸어로 가요.',
          right: '걸어서 가요.',
          why: 'Berjalan kaki bukan "alat", jadi tidak memakai 로. Bentuknya 걸어서 ("dengan berjalan").',
        },
      ],
      more:
        'Untuk arah, perbedaan 에 dan 로 cukup halus. 학교에 가요 menyebut sekolah sebagai tujuan akhir; 학교로 가요 lebih menekankan arah perjalanan. Dalam percakapan sehari-hari keduanya sering dipertukarkan, tetapi saat memberi petunjuk jalan, (으)로 jauh lebih lazim: 이쪽으로 오세요 ("silakan ke sini").',
    },
    {
      title: '부터 … 까지 vs 에서 … 까지',
      form: 'Waktu: 부터 … 까지 · Tempat: 에서 … 까지',
      body:
        'Titik akhirnya sama-sama 까지. Yang berbeda adalah titik awalnya: waktu memakai 부터, tempat memakai 에서. Tertukarnya dua ini adalah kesalahan yang sangat umum.',
      table: {
        columns: ['Jenis rentang', 'Pola', 'Contoh'],
        rows: [
          ['Waktu', '부터 … 까지', '아홉 시부터 여섯 시까지'],
          ['Tempat', '에서 … 까지', '집에서 회사까지'],
          ['Urutan / daftar', '부터 … 까지', '1번부터 10번까지'],
        ],
      },
      examples: [
        {
          ko: '월요일부터 금요일까지 일해요.',
          id: 'Saya bekerja dari Senin sampai Jumat.',
          highlight: ['부터', '까지'],
        },
        {
          ko: '서울에서 부산까지 기차로 가요.',
          id: 'Dari Seoul ke Busan saya naik kereta.',
          highlight: ['에서', '까지'],
        },
      ],
      mistakes: [
        {
          wrong: '집부터 회사까지 멀어요.',
          right: '집에서 회사까지 멀어요.',
          why: 'Untuk jarak antartempat, titik awalnya memakai 에서.',
        },
      ],
      more:
        '까지 punya dua makna tambahan di luar pasangan ini. Pertama, batas akhir atau tenggat: 금요일까지 보내 주세요 ("tolong kirim paling lambat Jumat"). Kedua, "bahkan": 비까지 왔어요 ("bahkan hujan pun turun"). Makna kedua ini mirip 도, tetapi terasa lebih kuat dan sering dipakai untuk hal yang di luar dugaan.',
    },
    {
      title: '보다 — perbandingan',
      form: 'A보다 B가/를 (+ 더) + kata sifat/kata kerja',
      body:
        'Yang ditempeli 보다 selalu kalah. Kata 더 ("lebih") memperjelas tetapi tidak wajib — kehadirannya tidak mengubah arti.',
      examples: [
        {
          ko: '오늘이 어제보다 더 더워요.',
          id: 'Hari ini lebih panas daripada kemarin.',
          highlight: ['보다'],
        },
        {
          ko: '한국어가 영어보다 어려워요.',
          id: 'Bahasa Korea lebih sulit daripada bahasa Inggris.',
          highlight: ['보다'],
          note: 'Tanpa 더 — artinya tetap sama.',
        },
        {
          ko: '이게 제일 맛있어요.',
          id: 'Ini yang paling enak.',
          note: 'Untuk tingkat tertinggi, pakai 제일 atau 가장 — bukan 보다.',
        },
      ],
      table: {
        columns: ['Pola', 'Contoh', 'Arti'],
        rows: [
          ['A보다 B가 + kata sifat', '커피보다 차가 좋아요.', 'Teh lebih enak daripada kopi'],
          ['A보다 B를 + 좋아하다', '커피보다 차를 좋아해요.', 'Lebih suka teh daripada kopi'],
          ['제일 / 가장', '차가 제일 좋아요.', 'Teh yang paling enak'],
        ],
      },
      mistakes: [
        {
          wrong: '저는 차보다 커피를 좋아해요. (kalau maksudnya lebih suka teh)',
          right: '저는 커피보다 차를 좋아해요.',
          why: 'Letak 보다 tertukar, sehingga artinya terbalik sepenuhnya.',
        },
      ],
      more:
        'Perhatikan bahwa pihak yang MENANG tetap membawa partikel normalnya: 가 kalau kata kerjanya kata sifat, 를 kalau kata kerjanya 좋아하다. 보다 tidak menggantikan partikel apa pun pada kata di sebelahnya — ia hanya menempel pada pembandingnya.',
    },
  ],

  dialogue: {
    title: 'Membandingkan cara berangkat kerja',
    situation: 'Dua rekan kerja membandingkan perjalanan mereka ke kantor.',
    lines: [
      { speaker: '민호', ko: '비오 씨는 회사에 어떻게 와요?', id: 'Vio berangkat ke kantor bagaimana?' },
      {
        speaker: '비오',
        ko: '저는 지하철로 와요. 집에서 회사까지 삼십 분쯤 걸려요.',
        id: 'Saya naik kereta bawah tanah. Dari rumah ke kantor sekitar tiga puluh menit.',
        note: '지하철로 — berakhir ㄹ, jadi 로. 집에서 … 까지 — jarak tempat.',
      },
      {
        speaker: '민호',
        ko: '저는 버스로 와요. 버스가 지하철보다 느려요.',
        id: 'Saya naik bus. Bus lebih lambat daripada kereta.',
        note: '지하철보다 — kereta adalah pembandingnya, jadi ia yang ditempeli 보다.',
      },
      { speaker: '비오', ko: '몇 시부터 몇 시까지 일해요?', id: 'Bekerja dari jam berapa sampai jam berapa?' },
      {
        speaker: '민호',
        ko: '아홉 시부터 여섯 시까지요. 금요일에는 다섯 시에 끝나요.',
        id: 'Dari jam sembilan sampai jam enam. Hari Jumat selesai jam lima.',
        note: '부터 … 까지 untuk rentang waktu; 〜요 di akhir menjaga kesopanan pada kalimat pendek.',
      },
    ],
    politeness:
      '어떻게 와요? adalah cara standar menanyakan moda transportasi. Jawabannya hampir selalu memakai (으)로, kecuali kalau jalan kaki — yang memakai 걸어서.',
  },

  passage: {
    title: '서울 여행',
    intro: 'Rencana perjalanan singkat — penuh dengan ketiga partikel pelajaran ini.',
    sentences: [
      { ko: '다음 달에 서울에 가요.', id: 'Bulan depan saya pergi ke Seoul.' },
      { ko: '월요일부터 금요일까지 거기에 있어요.', id: 'Dari Senin sampai Jumat saya ada di sana.' },
      { ko: '공항에서 호텔까지 버스로 가요.', id: 'Dari bandara ke hotel saya naik bus.' },
      { ko: '서울은 자카르타보다 추워요.', id: 'Seoul lebih dingin daripada Jakarta.' },
      { ko: '그래서 따뜻한 옷이 필요해요.', id: 'Karena itu saya butuh baju hangat.' },
      { ko: '저는 지하철로 여기저기 갈 거예요.', id: 'Saya akan pergi ke sana ke mari naik kereta bawah tanah.' },
    ],
    vocabInContext: [
      { ko: '공항', id: 'bandara' },
      { ko: '춥다', id: 'dingin (cuaca)' },
      { ko: '따뜻하다', id: 'hangat' },
      { ko: '여기저기', id: 'ke sana ke mari' },
    ],
    analysis: [
      '월요일부터 금요일까지 — rentang WAKTU, jadi titik awalnya 부터.',
      '공항에서 호텔까지 — rentang TEMPAT, jadi titik awalnya 에서. Dua pola ini muncul berurutan supaya perbedaannya terasa.',
      '서울은 자카르타보다 추워요 — Jakarta adalah pembandingnya, jadi ia yang ditempeli 보다. 서울 menjadi topik dengan 은.',
      '버스로 dan 지하철로 — keduanya alat transportasi. 버스 berakhir vokal → 로; 지하철 berakhir ㄹ → tetap 로.',
      '따뜻한 옷이 필요해요 — 필요하다 adalah kata sifat, jadi yang dibutuhkan memakai 이/가.',
    ],
  },

  exercises: [
    {
      id: 'm2l9-e1',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Temanmu bertanya kamu berangkat ke kantor naik apa.',
      sentence: '지하철___ 가요.',
      translation: 'Saya pergi naik kereta bawah tanah.',
      options: ['로', '으로', '에', '에서'],
      answer: '로',
      explain:
        '지하철 berakhir dengan ㄹ, dan setelah ㄹ bentuknya tetap 로 — bukan 으로. Ini satu-satunya pengecualian bentuk yang perlu diingat.',
      whyNot: {
        으로: '으로 dipakai setelah konsonan penutup SELAIN ㄹ, misalnya 손으로 atau 젓가락으로.',
        에: '에 menandai tujuan, bukan alat transportasi.',
        에서: '에서 menandai tempat kegiatan atau titik asal.',
      },
      tags: ['(으)로'],
    },
    {
      id: 'm2l9-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menjelaskan jam kerjamu.',
      sentence: '아홉 시___ 여섯 시까지 일해요.',
      translation: 'Saya bekerja dari jam sembilan sampai jam enam.',
      options: ['부터', '에서', '에', '보다'],
      answer: '부터',
      explain: 'Untuk rentang WAKTU, titik awalnya ditandai 부터 dan titik akhirnya 까지.',
      whyNot: {
        에서: '에서 dipakai sebagai titik awal untuk TEMPAT: 집에서 회사까지.',
        에: '에 menandai satu titik waktu, bukan awal sebuah rentang.',
        보다: '보다 menandai pembanding, bukan titik awal.',
      },
      tags: ['부터/까지'],
    },
    {
      id: 'm2l9-e3',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu lebih menyukai teh. Yang kalah dalam perbandingan adalah kopi.',
      sentence: '저는 커피___ 차를 더 좋아해요.',
      translation: 'Saya lebih suka teh daripada kopi.',
      options: ['보다', '하고', '도', '까지'],
      answer: '보다',
      explain:
        '보다 menempel pada hal yang DIKALAHKAN. Karena teh yang lebih disukai, maka 커피 yang mendapat 보다.',
      whyNot: {
        하고: '커피하고 차를 좋아해요 berarti "saya suka kopi dan teh" — tidak ada perbandingan.',
        도: '도 berarti "juga".',
        까지: '까지 berarti "sampai".',
      },
      tags: ['보다'],
    },
    {
      id: 'm2l9-e4',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '집부터 회사까지 멀어요.',
      translation: 'Dari rumah ke kantor jauh.',
      answers: ['집에서 회사까지 멀어요'],
      explain:
        'Untuk jarak antar-TEMPAT, titik awalnya memakai 에서, bukan 부터. 부터 khusus untuk rentang waktu dan urutan.',
      tags: ['부터/까지'],
    },
    {
      id: 'm2l9-e5',
      kind: 'match',
      prompt: 'Pasangkan setiap pola dengan pemakaiannya.',
      pairs: [
        { left: '(으)로', right: 'alat, cara, bahasa, arah' },
        { left: '부터 … 까지', right: 'rentang waktu' },
        { left: '에서 … 까지', right: 'jarak antartempat' },
        { left: '보다', right: 'pembanding yang kalah' },
        { left: '제일 / 가장', right: 'tingkat paling tinggi' },
      ],
      explain:
        'Perhatikan bahwa 까지 muncul di dua pasangan yang berbeda — yang berubah hanyalah titik awalnya, tergantung waktu atau tempat.',
      tags: ['(으)로', '부터/까지', '보다'],
    },
    {
      id: 'm2l9-e6',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Hari ini lebih panas daripada kemarin.',
      tiles: ['오늘이', '어제보다', '더', '더워요'],
      distractors: ['오늘보다', '어제가'],
      answers: ['오늘이 어제보다 더 더워요', '어제보다 오늘이 더 더워요'],
      explain:
        '어제 adalah pembandingnya, jadi ia yang ditempeli 보다. Pihak yang "menang" (오늘) tetap membawa partikel subjek 이. Urutan kedua bagian boleh dibalik tanpa mengubah arti.',
      parts: [
        { part: '오늘이', role: 'pihak yang lebih panas — subjek dengan 이' },
        { part: '어제보다', role: 'pembanding yang kalah' },
        { part: '더', role: '"lebih"; memperjelas, boleh dilepas' },
        { part: '더워요', role: '덥다 (ㅂ tidak beraturan) → 더워요' },
      ],
      altNote:
        '어제보다 오늘이 더 더워요 juga benar — yang menentukan arti adalah letak 보다, bukan urutan kata.',
      tags: ['보다'],
    },
    {
      id: 'm2l9-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya menulis memo dalam bahasa Korea.',
      answers: ['한국어로 메모를 써요', '저는 한국어로 메모를 써요'],
      explain:
        '(으)로 juga berarti "memakai/dalam" untuk bahasa dan alat tulis. 한국어 berakhir vokal, jadi bentuknya 로.',
      hint: 'Bahasa Korea di sini adalah "alat"-nya.',
      tags: ['(으)로'],
    },
  ],

  quiz: [
    {
      id: 'm2l9-q1',
      kind: 'mc',
      prompt:
        'Kamu ingin mengatakan "Bahasa Korea lebih sulit daripada bahasa Inggris". Mana yang benar?',
      options: [
        '영어보다 한국어가 더 어려워요.',
        '한국어보다 영어가 더 어려워요.',
        '영어가 한국어보다 더 어려워요.',
        '한국어보다 영어를 더 어려워요.',
      ],
      answerIndex: 0,
      explain:
        'Yang kalah dalam perbandingan adalah bahasa Inggris, jadi 영어 yang ditempeli 보다. Bahasa Korea sebagai pihak yang "lebih" tetap membawa partikel subjek 가.',
      whyNot: {
        '한국어보다 영어가 더 어려워요.': 'Artinya terbalik: bahasa Inggris yang lebih sulit.',
        '영어가 한국어보다 더 어려워요.': 'Juga terbalik — 한국어 yang ditempeli 보다 berarti ia yang kalah.',
        '한국어보다 영어를 더 어려워요.': 'Terbalik, dan 어렵다 adalah kata sifat yang tidak memakai 를.',
      },
      tags: ['보다'],
    },
    {
      id: 'm2l9-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan bentuk (으)로 yang tepat.',
      sentence: '저기에서 왼쪽___ 가세요.',
      translation: 'Dari sana, silakan belok ke kiri.',
      answers: ['으로'],
      explain:
        '왼쪽 berakhir dengan konsonan ㄱ, jadi bentuknya 으로. Bentuk 로 hanya dipakai setelah vokal atau setelah ㄹ.',
      tags: ['(으)로'],
    },
    {
      id: 'm2l9-q3',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Dari bandara ke hotel saya naik bus.',
      tiles: ['공항에서', '호텔까지', '버스로', '가요'],
      distractors: ['공항부터', '버스를'],
      answers: ['공항에서 호텔까지 버스로 가요'],
      explain:
        'Jarak antartempat memakai 에서…까지, dan alat transportasinya memakai (으)로. 버스 berakhir vokal, jadi bentuknya 로.',
      parts: [
        { part: '공항에서', role: 'titik awal tempat' },
        { part: '호텔까지', role: 'titik akhir' },
        { part: '버스로', role: 'alat transportasi' },
        { part: '가요', role: 'kata kerja penutup' },
      ],
      tags: ['(으)로', '부터/까지'],
    },
  ],

  summary: {
    points: [
      '(으)로 menandai alat, cara, bahasa, arah, dan pilihan. 로 setelah vokal dan ㄹ; 으로 setelah konsonan lain.',
      'Berjalan kaki tidak memakai 로 — bentuknya 걸어서.',
      'Rentang waktu: 부터 … 까지. Jarak antartempat: 에서 … 까지.',
      '까지 juga berarti tenggat ("paling lambat") dan "bahkan".',
      '보다 selalu menempel pada pihak yang KALAH dalam perbandingan.',
      'Untuk tingkat paling tinggi, pakai 제일 atau 가장 — bukan 보다.',
    ],
    pitfalls: [
      {
        wrong: '지하철으로 가요.',
        right: '지하철로 가요.',
        why: 'Setelah ㄹ, bentuknya tetap 로.',
      },
      {
        wrong: '집부터 회사까지 멀어요.',
        right: '집에서 회사까지 멀어요.',
        why: 'Jarak antartempat memakai 에서 sebagai titik awal.',
      },
      {
        wrong: '차보다 커피를 좋아해요. (kalau maksudnya lebih suka teh)',
        right: '커피보다 차를 좋아해요.',
        why: 'Letak 보다 menentukan siapa yang kalah — membaliknya membalikkan arti.',
      },
    ],
  },
}
