import type { Lesson } from '../../types/curriculum'

export const m2l5: Lesson = {
  id: 'm2-l5',
  moduleId: 'm2',
  number: '2.5',
  title: '에서 — tempat kegiatan & titik asal',
  subtitle: 'Perbandingan tuntas dengan 에',
  objective:
    'Setelah pelajaran ini kamu bisa memilih antara 에 dan 에서 hanya dengan melihat kata kerjanya, dan bisa menyebutkan dari mana kamu berasal.',
  focus: ['에서', '에'],
  estimatedMinutes: 15,

  coreExamples: [
    { ko: '저는 카페에서 공부해요.', id: 'Saya belajar di kafe.', highlight: ['에서'] },
    { ko: '저는 인도네시아에서 왔어요.', id: 'Saya datang dari Indonesia.', highlight: ['에서'] },
    { ko: '어디에서 일해요?', id: 'Kamu bekerja di mana?', highlight: ['에서'] },
    { ko: '식당에서 친구를 만나요.', id: 'Saya bertemu teman di rumah makan.', highlight: ['에서'] },
    {
      ko: '집에서 회사까지 한 시간 걸려요.',
      id: 'Dari rumah ke kantor butuh satu jam.',
      highlight: ['에서', '까지'],
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 카페에서 공부해요.',
        id: 'Saya belajar di kafe.',
        highlight: ['에서'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '카페에서',
          formula: '카페 + 에서',
          meaning: 'Di kafe — tempat berlangsungnya kegiatan',
        },
        { unit: '공부해요', formula: '공부하다 → 공부해요', meaning: 'Belajar, 해요체' },
      ],
      why:
        'Pertanyaan yang menentukan selalu sama: APAKAH ADA KEGIATAN YANG BERLANGSUNG DI SANA? Belajar adalah kegiatan nyata yang memakan waktu dan tenaga, jadi tempatnya memakai 에서. Kalau kalimatnya hanya menyatakan di mana sesuatu berada — tanpa ada yang dikerjakan — barulah memakai 에.',
      swaps: [
        {
          alt: '카페에 가요.',
          effect:
            'Dengan 에 karena 가다 menyatakan perpindahan menuju tujuan. Kafe di sini adalah titik akhir perjalanan, bukan tempat kegiatan.',
        },
        {
          alt: '카페에 있어요.',
          effect:
            'Dengan 에 karena 있다 hanya menyatakan keberadaan. Tidak ada yang sedang dikerjakan.',
        },
        {
          alt: '카페에서 있어요. ✗',
          effect:
            'Salah, dan ini kesalahan klasik. 있다 tidak pernah berpasangan dengan 에서.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 인도네시아에서 왔어요.',
        id: 'Saya datang dari Indonesia.',
        highlight: ['에서'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '인도네시아에서',
          formula: '인도네시아 + 에서',
          meaning: 'Dari Indonesia — titik asal',
        },
        { unit: '왔어요', formula: '오다 → 왔어요', meaning: 'Datang, bentuk lampau' },
      ],
      why:
        'Tugas kedua 에서 adalah menandai titik asal — "dari". Pola 〜에서 왔어요 adalah cara baku menyebutkan asal negara atau kota. Perhatikan bahwa 에 dan 에서 di sini berlawanan arah: 한국에 왔어요 berarti "saya datang KE Korea", sedangkan 한국에서 왔어요 berarti "saya datang DARI Korea".',
      swaps: [
        {
          alt: '인도네시아에 왔어요.',
          effect:
            'Artinya terbalik: "saya datang ke Indonesia". Kalimat ini masuk akal kalau diucapkan oleh orang asing yang baru tiba di Indonesia.',
        },
        {
          alt: '인도네시아 사람이에요.',
          effect:
            'Cara lain menyebut asal, tetapi menyatakan kewarganegaraan, bukan tempat keberangkatan. Keduanya sering dipakai berdampingan saat berkenalan.',
        },
      ],
    },
  ],

  vocab: [
    {
      ko: '일하다',
      id: 'bekerja',
      pos: 'kata kerja',
      note: '해요체: 일해요.',
      example: { ko: '회사에서 일해요.', id: 'Saya bekerja di kantor.' },
    },
    { ko: '쉬다', id: 'beristirahat', pos: 'kata kerja', note: '해요체: 쉬어요.' },
    { ko: '놀다', id: 'bermain, bersantai', pos: 'kata kerja', note: '해요체: 놀아요.' },
    { ko: '식당', id: 'rumah makan', pos: 'kata benda' },
    { ko: '카페', id: 'kafe', pos: 'kata benda' },
    { ko: '도서관', id: 'perpustakaan', pos: 'kata benda' },
    { ko: '걸리다', id: 'memakan waktu', pos: 'kata kerja', note: '해요체: 걸려요.' },
    { ko: '가깝다', id: 'dekat', pos: 'kata sifat', note: 'ㅂ tidak beraturan: 가까워요.' },
    { ko: '멀다', id: 'jauh', pos: 'kata sifat', note: '해요체: 멀어요.' },
    { ko: '살다', id: 'tinggal, hidup', pos: 'kata kerja', note: 'Menerima 에 maupun 에서.' },
  ],

  grammar: [
    {
      title: 'Dua tugas 에서',
      form: 'kata benda + 에서',
      body:
        'Seperti 에, bentuk 에서 tidak pernah berubah. Dua tugasnya sebenarnya satu gagasan yang sama: sesuatu "berasal dari" atau "terjadi di dalam" ruang itu.',
      table: {
        columns: ['Tugas', 'Kata kerja yang menyertai', 'Contoh'],
        rows: [
          [
            'Tempat kegiatan',
            '공부하다, 일하다, 먹다, 만나다, 쉬다, 놀다, 읽다',
            '도서관에서 책을 읽어요.',
          ],
          ['Titik asal', '오다, 출발하다, 시작하다', '인도네시아에서 왔어요.'],
          ['Titik awal jarak', '— (berpasangan dengan 까지)', '집에서 회사까지'],
        ],
      },
      examples: [
        { ko: '도서관에서 책을 읽어요.', id: 'Saya membaca buku di perpustakaan.', highlight: ['에서'] },
        { ko: '부산에서 출발해요.', id: 'Saya berangkat dari Busan.', highlight: ['에서'] },
      ],
    },
    {
      title: 'Tabel keputusan: 에 atau 에서?',
      body:
        'Jangan menghafal daftar tempat. Lihat kata kerjanya, lalu tanyakan: apakah ada sesuatu yang DIKERJAKAN di sana?',
      table: {
        caption:
          'Catatan: 살다 ("tinggal") menerima keduanya — 서울에 살아요 dan 서울에서 살아요 sama-sama dipakai.',
        columns: ['Kata kerja', 'Partikel', 'Contoh', 'Alasan'],
        rows: [
          ['가다 / 오다', '에', '학교에 가요.', 'Tujuan perpindahan'],
          ['있다 / 없다', '에', '집에 있어요.', 'Keberadaan, bukan kegiatan'],
          ['도착하다', '에', '공항에 도착해요.', 'Titik akhir'],
          ['공부하다', '에서', '카페에서 공부해요.', 'Kegiatan berlangsung'],
          ['먹다 / 마시다', '에서', '식당에서 먹어요.', 'Kegiatan berlangsung'],
          ['만나다', '에서', '로비에서 만나요.', 'Kegiatan berlangsung'],
          ['일하다 / 쉬다', '에서', '집에서 쉬어요.', 'Kegiatan berlangsung'],
        ],
      },
      mistakes: [
        {
          wrong: '집에서 있어요.',
          right: '집에 있어요.',
          why: '있다 menyatakan keberadaan. Tidak ada kegiatan, jadi tidak boleh 에서.',
        },
        {
          wrong: '카페에 공부해요.',
          right: '카페에서 공부해요.',
          why: 'Belajar adalah kegiatan, jadi tempatnya memakai 에서.',
        },
        {
          wrong: '학교에서 가요.',
          right: '학교에 가요.',
          why: 'Kalau maksudnya "pergi ke sekolah", tujuannya memakai 에. Dengan 에서, artinya menjadi "berangkat dari sekolah".',
        },
      ],
    },
    {
      title: 'Bentuk singkat 서',
      body:
        'Dalam percakapan, 에서 sering dipendekkan menjadi 서 — terutama setelah kata tanya dan kata tunjuk tempat.',
      table: {
        columns: ['Lengkap', 'Singkat', 'Arti'],
        rows: [
          ['어디에서', '어디서', 'di mana / dari mana'],
          ['여기에서', '여기서', 'di sini'],
          ['거기에서', '거기서', 'di situ'],
          ['저기에서', '저기서', 'di sana'],
        ],
      },
      examples: [
        { ko: '어디서 왔어요?', id: 'Kamu dari mana?', note: 'Bentuk singkat, sangat lazim.' },
        { ko: '여기서 기다려요.', id: 'Saya menunggu di sini.' },
      ],
      more:
        'Bentuk singkat ini wajar dalam percakapan dan pesan singkat, tetapi dalam tulisan resmi sebaiknya tetap memakai bentuk lengkap 에서. Perhatikan juga bahwa 에 tidak punya bentuk singkat semacam ini.',
    },
    {
      title: 'Pasangan jarak: 에서 … 까지',
      form: 'A에서 B까지',
      body:
        'Untuk menyatakan jarak antara dua tempat, titik awalnya memakai 에서 dan titik akhirnya 까지. Jangan tertukar dengan 부터 … 까지 yang dipakai untuk rentang WAKTU.',
      examples: [
        {
          ko: '집에서 회사까지 한 시간 걸려요.',
          id: 'Dari rumah ke kantor butuh satu jam.',
          highlight: ['에서', '까지'],
        },
        {
          ko: '아홉 시부터 여섯 시까지 일해요.',
          id: 'Saya bekerja dari jam sembilan sampai jam enam.',
          highlight: ['부터', '까지'],
          note: 'Rentang waktu memakai 부터, bukan 에서.',
        },
      ],
      more:
        'Pasangan ini dibahas lebih lengkap di Pelajaran 2.9. Untuk sekarang, cukup ingat: tempat → 에서…까지, waktu → 부터…까지.',
    },
  ],

  dialogue: {
    title: 'Berkenalan dengan rekan baru',
    situation: 'Minho berkenalan dengan karyawan baru di kantornya.',
    lines: [
      { speaker: '민호', ko: '안녕하세요. 어디에서 왔어요?', id: 'Halo. Anda berasal dari mana?' },
      {
        speaker: '비오',
        ko: '저는 인도네시아에서 왔어요. 자카르타에서 살았어요.',
        id: 'Saya dari Indonesia. Saya tinggal di Jakarta.',
        note: '에서 dua kali: pertama titik asal, kedua tempat kehidupan berlangsung.',
      },
      { speaker: '민호', ko: '아, 그래요? 지금은 어디에 살아요?', id: 'Oh, begitu? Sekarang tinggal di mana?' },
      {
        speaker: '비오',
        ko: '회사 근처에 살아요. 그래서 가까워요.',
        id: 'Saya tinggal di dekat kantor. Jadi dekat.',
        note: '살다 di sini memakai 에 — menekankan letak tempat tinggalnya.',
      },
      { speaker: '민호', ko: '좋네요. 집에서 회사까지 몇 분 걸려요?', id: 'Enak, ya. Dari rumah ke kantor berapa menit?' },
      { speaker: '비오', ko: '십 분쯤 걸려요.', id: 'Sekitar sepuluh menit.' },
    ],
    politeness:
      '좋네요 memakai akhiran -네요 yang menyatakan kesan spontan ("wah, enak ya"). Ia terdengar lebih hangat daripada 좋아요 biasa, dan sering dipakai untuk menanggapi cerita orang lain.',
  },

  passage: {
    title: '제 하루',
    intro: 'Perhatikan setiap partikel tempat: kenapa 에, kenapa 에서?',
    sentences: [
      { ko: '저는 아침 일곱 시에 일어나요.', id: 'Saya bangun jam tujuh pagi.' },
      { ko: '집에서 커피를 마셔요.', id: 'Saya minum kopi di rumah.' },
      { ko: '그리고 회사에 가요.', id: 'Lalu saya pergi ke kantor.' },
      { ko: '회사에서 아홉 시부터 여섯 시까지 일해요.', id: 'Di kantor saya bekerja dari jam sembilan sampai jam enam.' },
      { ko: '저녁에는 집에 있어요.', id: 'Malamnya saya di rumah.' },
      { ko: '가끔 카페에서 한국어를 공부해요.', id: 'Kadang-kadang saya belajar bahasa Korea di kafe.' },
    ],
    vocabInContext: [
      { ko: '일어나다', id: 'bangun tidur' },
      { ko: '가끔', id: 'kadang-kadang' },
      { ko: '그리고', id: 'lalu, dan' },
      { ko: '쯤', id: 'kira-kira, sekitar' },
    ],
    analysis: [
      '집에서 커피를 마셔요 — minum adalah kegiatan, jadi 에서.',
      '회사에 가요 — 가다 menyatakan perpindahan ke tujuan, jadi 에.',
      '회사에서 일해요 — bekerja adalah kegiatan, jadi 에서. Perhatikan: tempat yang sama (회사) memakai partikel berbeda tergantung kata kerjanya.',
      '집에 있어요 — 있다 menyatakan keberadaan, jadi 에. Bandingkan dengan 집에서 커피를 마셔요 di kalimat kedua.',
      '아침 일곱 시에 dan 저녁에는 memakai 에 untuk waktu; 가끔 adalah keterangan frekuensi yang tidak memakai partikel.',
    ],
  },

  exercises: [
    {
      id: 'm2l5-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menjelaskan kebiasaan belajarmu.',
      sentence: '저는 도서관___ 한국어를 공부해요.',
      translation: 'Saya belajar bahasa Korea di perpustakaan.',
      options: ['에서', '에', '로', '까지'],
      answer: '에서',
      explain:
        '공부하다 adalah kegiatan yang berlangsung di tempat itu, jadi tempatnya memakai 에서.',
      whyNot: {
        에: '에 dipakai untuk tujuan (도서관에 가요) atau keberadaan (도서관에 있어요), bukan untuk tempat berlangsungnya kegiatan.',
        로: '로 menandai alat, cara, atau arah.',
        까지: '까지 berarti "sampai", menandai batas akhir.',
      },
      tags: ['에서'],
    },
    {
      id: 'm2l5-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Orang Korea bertanya kamu berasal dari negara mana.',
      sentence: '저는 인도네시아___ 왔어요.',
      translation: 'Saya datang dari Indonesia.',
      options: ['에서', '에', '까지', '로'],
      answer: '에서',
      explain:
        '에서 juga menandai titik asal. Pola 〜에서 왔어요 adalah cara baku menyebutkan dari mana kamu berasal.',
      whyNot: {
        에: '인도네시아에 왔어요 berarti "saya datang KE Indonesia" — arahnya terbalik.',
        까지: '까지 menandai titik akhir, bukan titik awal.',
        로: '로 menandai arah tujuan atau cara, bukan asal.',
      },
      tags: ['에서'],
    },
    {
      id: 'm2l5-e3',
      kind: 'correct',
      prompt: 'Perbaiki partikel pada kalimat ini.',
      sentence: '지금 집에서 있어요.',
      translation: 'Sekarang saya ada di rumah.',
      answers: ['지금 집에 있어요'],
      explain:
        '있다 hanya menyatakan keberadaan — tidak ada kegiatan yang berlangsung — jadi tempatnya memakai 에. Ini kesalahan nomor satu untuk pasangan 에/에서.',
      tags: ['에서', '에'],
    },
    {
      id: 'm2l5-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap kata kerja dengan partikel tempat yang dituntutnya.',
      pairs: [
        { left: '가다', right: '에 — tujuan perpindahan: 학교에 가요' },
        { left: '있다', right: '에 — keberadaan: 집에 있어요' },
        { left: '일하다', right: '에서 — tempat bekerja: 회사에서 일해요' },
        { left: '만나다', right: '에서 — tempat bertemu: 로비에서 만나요' },
        { left: '오다 (dari)', right: '에서 — titik asal: 한국에서 왔어요' },
      ],
      explain:
        'Patokannya selalu sama: ada kegiatan → 에서; hanya tujuan atau keberadaan → 에. Tempat yang sama bisa memakai partikel berbeda tergantung kata kerjanya.',
      tags: ['에서', '에'],
    },
    {
      id: 'm2l5-e5',
      kind: 'build',
      prompt: 'Susun kalimatnya. Dua partikel tempat yang berbeda muncul di sini.',
      translation: 'Saya pergi ke kantor dan bekerja di kantor.',
      tiles: ['회사에', '가고', '회사에서', '일해요'],
      distractors: ['회사까지', '회사를'],
      answers: ['회사에 가고 회사에서 일해요'],
      explain:
        'Tempat yang sama, dua partikel berbeda: 회사에 가다 (tujuan) tetapi 회사에서 일하다 (tempat kegiatan). Inilah bukti bahwa yang menentukan adalah kata kerjanya, bukan tempatnya.',
      parts: [
        { part: '회사에', role: 'tujuan bagi 가다' },
        { part: '가고', role: '가다 + -고, menyambung ke kegiatan berikutnya' },
        { part: '회사에서', role: 'tempat kegiatan bagi 일하다' },
        { part: '일해요', role: 'kata kerja penutup' },
      ],
      tags: ['에서', '에'],
    },
    {
      id: 'm2l5-e6',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      context: 'Kamu menjelaskan berapa lama perjalanan sehari-harimu.',
      sentence: '집___ 회사까지 삼십 분 걸려요.',
      translation: 'Dari rumah ke kantor butuh tiga puluh menit.',
      answers: ['에서'],
      explain:
        'Untuk jarak TEMPAT, titik awalnya memakai 에서 dan titik akhirnya 까지. Jangan tertukar dengan 부터…까지 yang dipakai untuk rentang waktu.',
      hint: 'Ini jarak antartempat, bukan rentang waktu.',
      tags: ['에서'],
    },
    {
      id: 'm2l5-e7',
      kind: 'mc',
      prompt:
        'Dari bacaan 제 하루, kenapa 회사 memakai 에 di satu kalimat dan 에서 di kalimat berikutnya?',
      options: [
        'Karena kata kerjanya berbeda: 가다 menuntut 에, sedangkan 일하다 menuntut 에서.',
        'Karena kalimat keduanya lebih panjang.',
        'Karena 에서 dipakai untuk waktu dan 에 untuk tempat.',
        'Karena keduanya sebenarnya bisa dipertukarkan.',
      ],
      answerIndex: 0,
      explain:
        '회사에 가요 memakai 에 karena 가다 menyatakan perpindahan ke tujuan. 회사에서 일해요 memakai 에서 karena bekerja adalah kegiatan yang berlangsung di sana. Tempatnya sama; kata kerjanya yang menentukan.',
      whyNot: {
        'Karena kalimat keduanya lebih panjang.': 'Panjang kalimat tidak memengaruhi pilihan partikel.',
        'Karena 에서 dipakai untuk waktu dan 에 untuk tempat.':
          'Justru sebaliknya — 에서 tidak pernah dipakai untuk waktu sama sekali.',
        'Karena keduanya sebenarnya bisa dipertukarkan.':
          '회사에서 가요 akan berarti "berangkat dari kantor", dan 회사에 일해요 tidak gramatikal.',
      },
      tags: ['에서', '에', 'pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm2l5-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang SALAH?',
      options: [
        '카페에서 있어요.',
        '카페에서 공부해요.',
        '카페에 가요.',
        '카페에 있어요.',
      ],
      answerIndex: 0,
      explain:
        '있다 menyatakan keberadaan dan tidak pernah berpasangan dengan 에서. Yang benar adalah 카페에 있어요. Tiga pilihan lainnya semuanya tepat.',
      whyNot: {
        '카페에서 공부해요.': 'Benar — belajar adalah kegiatan.',
        '카페에 가요.': 'Benar — kafe adalah tujuan.',
        '카페에 있어요.': 'Benar — menyatakan keberadaan.',
      },
      tags: ['에서', '에'],
    },
    {
      id: 'm2l5-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      context: 'Kamu janjian bertemu teman di lobi kantor.',
      sentence: '로비___ 만나요.',
      translation: 'Kita bertemu di lobi.',
      answers: ['에서'],
      explain:
        '만나다 adalah kegiatan yang berlangsung di suatu tempat, jadi tempatnya memakai 에서.',
      tags: ['에서'],
    },
    {
      id: 'm2l5-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Akhir pekan saya istirahat di rumah.',
      answers: [
        '주말에는 집에서 쉬어요',
        '주말에 집에서 쉬어요',
        '저는 주말에 집에서 쉬어요',
      ],
      explain:
        '쉬다 adalah kegiatan, jadi 집 memakai 에서. Keterangan waktu 주말 memakai 에, dan boleh ditambah 는 kalau kamu ingin membandingkannya dengan hari kerja.',
      alternatives: [
        { form: '주말에 집에서 쉬어요.', nuance: 'Netral, tanpa nuansa membandingkan.' },
      ],
      tags: ['에서', '에'],
    },
  ],

  summary: {
    points: [
      '에서 menandai tempat berlangsungnya KEGIATAN, serta titik asal ("dari").',
      '에 menandai tujuan, keberadaan, dan titik waktu.',
      'Pertanyaan penentunya: apakah ada sesuatu yang dikerjakan di sana?',
      'Tempat yang sama bisa memakai partikel berbeda: 회사에 가요 tetapi 회사에서 일해요.',
      'Jarak antartempat memakai 에서…까지; rentang waktu memakai 부터…까지.',
    ],
    pitfalls: [
      {
        wrong: '집에서 있어요.',
        right: '집에 있어요.',
        why: '있다 menyatakan keberadaan, bukan kegiatan.',
      },
      {
        wrong: '카페에 공부해요.',
        right: '카페에서 공부해요.',
        why: 'Belajar adalah kegiatan, jadi tempatnya memakai 에서.',
      },
      {
        wrong: '한국에 왔어요. (untuk menyatakan asal)',
        right: '한국에서 왔어요.',
        why: '에 menunjuk tujuan; untuk titik asal dipakai 에서.',
      },
    ],
  },
}
