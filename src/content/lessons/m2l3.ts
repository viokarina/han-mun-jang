import type { Lesson } from '../../types/curriculum'

export const m2l3: Lesson = {
  id: 'm2-l3',
  moduleId: 'm2',
  number: '2.3',
  title: '을/를 — sasaran tindakan',
  subtitle: 'Dan kata kerja Korea yang partikelnya mengejutkan',
  objective:
    'Setelah pelajaran ini kamu bisa menandai objek dengan benar, dan tahu kenapa "suka", "bertemu", dan "naik" memakai partikel yang berbeda dari dugaanmu.',
  focus: ['을/를'],
  estimatedMinutes: 15,

  coreExamples: [
    { ko: '저는 밥을 먹어요.', id: 'Saya makan nasi.', highlight: ['을'] },
    { ko: '민호 씨는 영화를 봐요.', id: 'Minho menonton film.', highlight: ['를'] },
    { ko: '저는 한국 음악을 좋아해요.', id: 'Saya suka musik Korea.', highlight: ['을'] },
    { ko: '매일 한국어를 공부해요.', id: 'Setiap hari saya belajar bahasa Korea.', highlight: ['를'] },
    {
      ko: '주말에 친구를 만나요.',
      id: 'Akhir pekan saya bertemu teman.',
      highlight: ['를'],
      note: '만나다 memakai 를 — bukan "dengan", seperti dalam bahasa Indonesia.',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 한국 음악을 좋아해요.',
        id: 'Saya suka musik Korea.',
        highlight: ['을'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '한국 음악을',
          formula: '한국 음악 + 을',
          meaning: 'Musik Korea — objek; 받침 ㄱ pada 악, jadi bentuknya 을',
        },
        { unit: '좋아해요', formula: '좋아하다 → 좋아해요', meaning: 'Menyukai, 해요체' },
      ],
      why:
        '좋아하다 adalah kata KERJA ("menyukai"), jadi hal yang disukai berperan sebagai objek dan memakai 을/를. Bandingkan dengan 좋다, yang merupakan kata SIFAT ("bagus, enak"): 한국 음악이 좋아요. Keduanya bisa diterjemahkan "saya suka musik Korea", tetapi partikelnya berlawanan karena jenis katanya berbeda. Inilah sebabnya menghafal terjemahan Indonesia saja tidak cukup — kamu perlu tahu kata Korea itu kata kerja atau kata sifat.',
      swaps: [
        {
          alt: '한국 음악이 좋아요.',
          effect:
            'Memakai kata sifat 좋다. Artinya lebih ke arah "musik Korea itu bagus / menyenangkan bagi saya" — penilaian, bukan pernyataan selera pribadi yang aktif.',
        },
        {
          alt: '한국 음악은 좋아해요.',
          effect:
            '는 menggantikan 을 untuk membandingkan: "musik Korea sih suka (tapi yang lain mungkin tidak)".',
        },
      ],
    },
    {
      sentence: {
        ko: '주말에 친구를 만나요.',
        id: 'Akhir pekan saya bertemu teman.',
        highlight: ['에', '를'],
      },
      rows: [
        { unit: '주말에', formula: '주말 + 에', meaning: 'Pada akhir pekan — keterangan waktu' },
        { unit: '친구를', formula: '친구 + 를', meaning: 'Teman — objek yang ditemui' },
        { unit: '만나요', formula: '만나다 → 만나요', meaning: 'Bertemu, 해요체' },
      ],
      why:
        'Dalam bahasa Indonesia kita "bertemu DENGAN teman", sehingga terasa wajar memakai 하고. Tetapi 만나다 dalam bahasa Korea adalah kata kerja transitif: orang yang ditemui adalah objeknya. Bentuk baku dan paling umum adalah 친구를 만나요.',
      swaps: [
        {
          alt: '친구하고 만나요.',
          effect:
            'Juga dipakai dan terdengar wajar, terutama kalau kamu ingin menekankan "bersama-sama". Tetapi 친구를 만나요 lebih netral dan lebih sering muncul.',
        },
        {
          alt: '친구에게 만나요. ✗',
          effect:
            '에게/한테 menandai penerima sesuatu (seperti pada 주다, 보내다, 전화하다) dan tidak pernah dipakai dengan 만나다.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '밥', id: 'nasi, makanan', pos: 'kata benda' },
    { ko: '음악', id: 'musik', pos: 'kata benda' },
    { ko: '음식', id: 'makanan', pos: 'kata benda' },
    {
      ko: '만나다',
      id: 'bertemu',
      pos: 'kata kerja',
      note: 'Objeknya memakai 을/를. 해요체: 만나요.',
      example: { ko: '친구를 만나요.', id: 'Saya bertemu teman.' },
    },
    {
      ko: '타다',
      id: 'naik (kendaraan)',
      pos: 'kata kerja',
      note: 'Objeknya memakai 을/를: 버스를 타요.',
    },
    {
      ko: '먹다',
      id: 'makan',
      pos: 'kata kerja',
      note: '해요체: 먹어요.',
      example: { ko: '점심을 먹어요.', id: 'Saya makan siang.' },
    },
    { ko: '읽다', id: 'membaca', pos: 'kata kerja', note: '해요체: 읽어요.' },
    { ko: '매일', id: 'setiap hari', pos: 'kata keterangan', note: 'Tidak memakai 에.' },
    { ko: '매운', id: 'pedas (menerangkan kata benda)', pos: 'kata sifat', note: 'Dari 맵다.' },
    { ko: '필요하다', id: 'perlu, butuh', pos: 'kata sifat', note: 'Subjeknya memakai 이/가: 돈이 필요해요.' },
  ],

  grammar: [
    {
      title: '을 atau 를?',
      form: 'kata benda + 을 (ada 받침) · 를 (tanpa 받침)',
      body: 'Aturan bentuknya sama seperti partikel lain: ditentukan oleh konsonan penutup.',
      table: {
        columns: ['Kata benda', 'Alasan', 'Hasil'],
        rows: [
          ['밥', '받침 ㅂ → 을', '밥을'],
          ['음악', '받침 ㄱ → 을', '음악을'],
          ['영화', 'vokal → 를', '영화를'],
          ['친구', 'vokal → 를', '친구를'],
        ],
      },
    },
    {
      title: 'Kata kerja yang partikelnya mengejutkan',
      body:
        'Beberapa kata kerja Korea memakai 을/를 padahal bahasa Indonesia memakai kata depan — dan beberapa kata sifat memakai 이/가 padahal terasa seperti punya objek. Tabel ini layak kamu baca ulang beberapa kali.',
      table: {
        caption:
          'Kuncinya: kata KERJA transitif memakai 을/를, kata SIFAT dan 있다/없다 memakai 이/가.',
        columns: ['Kata Korea', 'Partikel', 'Contoh', 'Bahasa Indonesia'],
        rows: [
          ['만나다 (bertemu)', '을/를', '친구를 만나요', 'bertemu DENGAN teman'],
          ['타다 (naik)', '을/를', '버스를 타요', 'naik bus'],
          ['좋아하다 (menyukai)', '을/를', '커피를 좋아해요', 'suka kopi'],
          ['싫어하다 (tidak suka)', '을/를', '매운 음식을 싫어해요', 'tidak suka makanan pedas'],
          ['알다 (kenal, tahu)', '을/를', '그 사람을 알아요', 'kenal orang itu'],
          ['좋다 (bagus)', '이/가', '커피가 좋아요', 'kopi itu enak'],
          ['있다 / 없다 (ada)', '이/가', '시간이 없어요', 'tidak punya waktu'],
          ['필요하다 (perlu)', '이/가', '돈이 필요해요', 'butuh uang'],
        ],
      },
      mistakes: [
        {
          wrong: '친구하고 만나요. (sebagai bentuk baku)',
          right: '친구를 만나요.',
          why: 'Bentuk dengan 하고 tidak salah, tetapi 를 adalah pilihan yang lebih netral dan lebih sering dipakai.',
        },
        {
          wrong: '돈을 필요해요.',
          right: '돈이 필요해요.',
          why: '필요하다 adalah kata sifat ("diperlukan"), jadi yang dibutuhkan berperan sebagai subjek.',
        },
      ],
    },
    {
      title: 'Partikel objek sering dilepas',
      body:
        'Dalam percakapan santai, 을/를 sering tidak diucapkan: 밥 먹어요? ("Sudah makan?"), 뭐 봐요? ("Nonton apa?"). Ini ragam lisan yang sepenuhnya wajar, bukan kesalahan. Tetapi selama kamu masih membangun rasa bahasa, tulislah partikelnya supaya peran tiap kata tetap jelas bagimu.',
      examples: [
        { ko: '밥 먹었어요?', id: 'Sudah makan?', note: 'Sapaan sehari-hari; 을 dilepas.' },
        { ko: '커피 마실래요?', id: 'Mau minum kopi?', note: 'Partikel dilepas, terdengar ringan.' },
      ],
      more:
        'Partikel justru TIDAK boleh dilepas kalau kalimatnya panjang atau bisa menimbulkan kebingungan tentang siapa melakukan apa. Dalam tulisan — email kantor, laporan, diari — partikelnya tetap ditulis lengkap.',
    },
    {
      title: 'Kata kerja 하다 dan objeknya',
      form: 'kata benda + 하다 → satu kata kerja',
      body:
        'Banyak kata kerja Korea terbentuk dari "kata benda + 하다": 공부하다, 일하다, 운동하다, 요리하다, 전화하다. Kata benda di dalamnya bisa dipisahkan dan diberi partikel objek, tetapi hanya kalau tidak ada objek lain dalam kalimat.',
      examples: [
        { ko: '공부해요.', id: 'Saya belajar.', note: 'Bentuk gabung.' },
        { ko: '공부를 해요.', id: 'Saya belajar.', note: 'Dipisah; artinya sama, sedikit lebih menekankan.' },
        {
          ko: '한국어를 공부해요.',
          id: 'Saya belajar bahasa Korea.',
          note: 'Sudah ada objek lain, jadi harus memakai bentuk gabung.',
        },
      ],
      mistakes: [
        {
          wrong: '한국어를 공부를 해요.',
          right: '한국어를 공부해요.',
          why: 'Satu kalimat tidak boleh punya dua objek dengan 을/를 seperti ini.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Di kantin kantor',
    situation: 'Vio dan Sujin memilih menu makan siang.',
    lines: [
      { speaker: '수진', ko: '비오 씨, 뭐 먹어요?', id: 'Vio, makan apa?', note: '뭐를 disingkat menjadi 뭐.' },
      {
        speaker: '비오',
        ko: '저는 비빔밥을 먹어요. 수진 씨는요?',
        id: 'Saya makan bibimbap. Kalau Sujin?',
      },
      {
        speaker: '수진',
        ko: '저는 김치찌개를 먹어요. 매운 음식을 좋아해요.',
        id: 'Saya makan kimchi jjigae. Saya suka makanan pedas.',
        note: '좋아하다 adalah kata kerja, jadi 음식 memakai 을.',
      },
      { speaker: '비오', ko: '저도 매운 음식을 좋아해요!', id: 'Saya juga suka makanan pedas!' },
      {
        speaker: '수진',
        ko: '그럼 다음에 같이 떡볶이를 먹어요.',
        id: 'Kalau begitu lain kali kita makan tteokbokki bersama.',
        note: 'Kalimat 해요체 ini berfungsi sebagai ajakan.',
      },
      { speaker: '비오', ko: '좋아요!', id: 'Boleh!' },
    ],
    politeness:
      'Perhatikan 저도 pada kalimat keempat: 도 ("juga") menggantikan 는, tetapi partikel objek 을 pada 음식을 tetap dipakai karena berada pada kata yang berbeda.',
  },

  passage: {
    title: '주말 계획',
    intro: 'Rencana akhir pekan — hitung berapa kali partikel objek muncul.',
    sentences: [
      { ko: '이번 주말에 친구를 만나요.', id: 'Akhir pekan ini saya bertemu teman.' },
      { ko: '우리는 영화를 봐요.', id: 'Kami menonton film.' },
      { ko: '영화 후에 커피를 마셔요.', id: 'Setelah film kami minum kopi.' },
      { ko: '저는 한국 영화를 정말 좋아해요.', id: 'Saya sangat suka film Korea.' },
      { ko: '하지만 공포 영화는 싫어해요.', id: 'Tapi film horor tidak suka.' },
    ],
    vocabInContext: [
      { ko: '이번', id: 'kali ini' },
      { ko: '후에', id: 'setelah' },
      { ko: '공포 영화', id: 'film horor' },
      { ko: '정말', id: 'sungguh, sangat' },
    ],
    analysis: [
      'Empat kalimat pertama memakai 을/를 karena semuanya punya kata kerja transitif: 만나다, 보다, 마시다, 좋아하다.',
      '친구를 만나요 memakai 를, bukan 하고 — meskipun bahasa Indonesia berkata "bertemu dengan".',
      'Kalimat terakhir memakai 는 pada 공포 영화 karena sedang dibandingkan dengan 한국 영화. Di sini 는 menggantikan 를, persis seperti yang kita pelajari di Pelajaran 2.1.',
      '영화 후에 berarti "setelah film" — 후 adalah kata benda ("sesudah"), jadi ia butuh 에 seperti keterangan waktu lainnya.',
    ],
  },

  exercises: [
    {
      id: 'm2l3-e1',
      kind: 'particle',
      prompt: 'Pilih partikel objek yang tepat.',
      sentence: '저는 밥___ 먹어요.',
      translation: 'Saya makan nasi.',
      options: ['을', '를', '이', '에'],
      answer: '을',
      explain: '밥 berakhir dengan 받침 ㅂ, jadi partikel objeknya 을.',
      whyNot: {
        를: '를 dipakai setelah kata yang berakhir vokal, misalnya 영화를.',
        이: '이 menandai subjek. Nasi di sini adalah yang dimakan, bukan pelakunya.',
        에: '에 menandai tempat atau waktu.',
      },
      tags: ['을/를'],
    },
    {
      id: 'm2l3-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat. Perhatikan jenis kata kerjanya.',
      context: '좋아하다 adalah kata KERJA yang berarti "menyukai".',
      sentence: '저는 한국 음악___ 좋아해요.',
      translation: 'Saya suka musik Korea.',
      options: ['을', '이', '는', '도'],
      answer: '을',
      explain:
        '좋아하다 adalah kata kerja transitif, jadi yang disukai menjadi objek. 음악 berakhir 받침 ㄱ, maka bentuknya 을.',
      whyNot: {
        이: '이 akan benar kalau kata kerjanya 좋다 (kata sifat): 한국 음악이 좋아요. Dengan 좋아하다, partikelnya 을/를.',
        는: '한국 음악은 좋아해요 benar, tetapi menambahkan nuansa membandingkan — bukan pernyataan netral.',
        도: '도 berarti "juga", mengubah arti kalimat.',
      },
      tags: ['을/를'],
    },
    {
      id: 'm2l3-e3',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menyatakan bahwa kamu sedang tidak punya uang.',
      sentence: '지금 돈___ 없어요.',
      translation: 'Sekarang saya tidak punya uang.',
      options: ['이', '을', '는', '에'],
      answer: '이',
      explain:
        '없다 menyatakan keberadaan dan selalu memakai subjek dengan 이/가. 돈 berakhir 받침 ㄴ, jadi bentuknya 이.',
      whyNot: {
        을: 'Terpengaruh kata "punya" dalam bahasa Indonesia. 없다 bukan kata kerja transitif.',
        는: '돈은 없어요 benar, tetapi berarti "uang sih tidak ada (tapi hal lain ada)".',
        에: '에 menandai tempat atau waktu.',
      },
      tags: ['을/를', '이/가'],
    },
    {
      id: 'm2l3-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap kata kerja dengan partikel yang dituntutnya.',
      pairs: [
        { left: '만나다', right: '을/를 — 친구를 만나요' },
        { left: '타다', right: '을/를 — 버스를 타요' },
        { left: '좋다', right: '이/가 — 커피가 좋아요' },
        { left: '있다', right: '이/가 — 시간이 있어요' },
        { left: '필요하다', right: '이/가 — 돈이 필요해요' },
      ],
      explain:
        'Patokannya: kata KERJA transitif menuntut 을/를, sedangkan kata SIFAT dan 있다/없다 menuntut 이/가. Terjemahan Indonesianya sering menyesatkan, jadi ingat jenis katanya, bukan artinya.',
      tags: ['을/를', '이/가'],
    },
    {
      id: 'm2l3-e5',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Akhir pekan ini saya bertemu teman dan menonton film.',
      tiles: ['이번 주말에', '친구를', '만나고', '영화를', '봐요'],
      distractors: ['친구하고', '영화에'],
      answers: ['이번 주말에 친구를 만나고 영화를 봐요'],
      explain:
        '만나고 adalah batang kata 만나- ditambah -고 ("lalu"), yang menyambungkan dua kegiatan. Keduanya punya objek masing-masing dengan 를. Perhatikan bahwa 만나다 memakai 를, bukan 하고.',
      parts: [
        { part: '이번 주말에', role: 'keterangan waktu dengan 에' },
        { part: '친구를', role: 'objek pertama' },
        { part: '만나고', role: '만나다 + -고, menyambung ke kegiatan berikutnya' },
        { part: '영화를', role: 'objek kedua' },
        { part: '봐요', role: 'kata kerja penutup kalimat' },
      ],
      tags: ['을/를'],
    },
    {
      id: 'm2l3-e6',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '저는 한국어를 공부를 해요.',
      translation: 'Saya belajar bahasa Korea.',
      answers: ['저는 한국어를 공부해요'],
      explain:
        '공부하다 bisa dipisah menjadi 공부를 하다, tetapi hanya kalau tidak ada objek lain. Karena 한국어를 sudah menjadi objeknya, 공부하다 harus dipakai dalam bentuk gabung.',
      tags: ['을/를'],
    },
    {
      id: 'm2l3-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya naik bus setiap hari.',
      answers: ['매일 버스를 타요', '저는 매일 버스를 타요'],
      explain:
        '타다 ("naik") adalah kata kerja transitif, jadi kendaraannya menjadi objek dengan 를. 매일 adalah keterangan waktu yang TIDAK memakai 에.',
      hint: 'Kendaraan yang dinaiki adalah objeknya.',
      tags: ['을/를'],
    },
  ],

  quiz: [
    {
      id: 'm2l3-q1',
      kind: 'mc',
      prompt: 'Manakah pasangan kalimat yang KEDUANYA benar?',
      options: [
        '커피를 좋아해요. / 커피가 좋아요.',
        '커피가 좋아해요. / 커피를 좋아요.',
        '커피를 좋아해요. / 커피를 좋아요.',
        '커피가 좋아해요. / 커피가 좋아요.',
      ],
      answerIndex: 0,
      explain:
        '좋아하다 adalah kata kerja → objeknya memakai 를. 좋다 adalah kata sifat → subjeknya memakai 가. Keduanya benar dengan nuansa yang sedikit berbeda, tetapi partikelnya tidak boleh tertukar.',
      whyNot: {
        '커피가 좋아해요. / 커피를 좋아요.': 'Kedua partikelnya tertukar.',
        '커피를 좋아해요. / 커피를 좋아요.': 'Bagian kedua salah: 좋다 tidak pernah memakai 를.',
        '커피가 좋아해요. / 커피가 좋아요.': 'Bagian pertama salah: 좋아하다 menuntut objek dengan 를.',
      },
      tags: ['을/를', '이/가'],
    },
    {
      id: 'm2l3-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      sentence: '오늘 저녁에 친구___ 만나요.',
      translation: 'Malam ini saya bertemu teman.',
      answers: ['를'],
      explain:
        '만나다 adalah kata kerja transitif, jadi orang yang ditemui menjadi objek. 친구 berakhir vokal, maka bentuknya 를.',
      alternatives: [
        { form: '친구하고', nuance: 'Juga dipakai, dengan penekanan pada "bersama-sama".' },
      ],
      tags: ['을/를'],
    },
    {
      id: 'm2l3-q3',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '저는 시간을 없어요.',
      translation: 'Saya tidak punya waktu.',
      answers: ['저는 시간이 없어요'],
      explain:
        '없다 menuntut subjek dengan 이/가. Terjemahan Indonesia "punya waktu" membuat 을 terasa benar, tetapi logika Korea adalah "waktu itu tidak ada".',
      tags: ['을/를', '이/가'],
    },
  ],

  summary: {
    points: [
      '을 dipakai setelah 받침, 를 setelah vokal.',
      '을/를 menandai sasaran tindakan — tetapi hanya untuk kata KERJA transitif.',
      '만나다, 타다, 좋아하다, 싫어하다, 알다 memakai 을/를 meskipun bahasa Indonesia memakai kata depan.',
      '좋다, 있다, 없다, 필요하다 memakai 이/가 meskipun terasa seperti punya objek.',
      'Kata kerja "kata benda + 하다" tidak boleh dipisah kalau sudah ada objek lain dalam kalimat.',
    ],
    pitfalls: [
      {
        wrong: '돈을 필요해요.',
        right: '돈이 필요해요.',
        why: '필요하다 adalah kata sifat; yang dibutuhkan berperan sebagai subjek.',
      },
      {
        wrong: '한국어를 공부를 해요.',
        right: '한국어를 공부해요.',
        why: 'Dua objek dengan 을/를 dalam satu kalimat sederhana.',
      },
      {
        wrong: '커피를 좋아요.',
        right: '커피가 좋아요.',
        why: '좋다 adalah kata sifat dan tidak pernah memakai 을/를.',
      },
    ],
  },
}
