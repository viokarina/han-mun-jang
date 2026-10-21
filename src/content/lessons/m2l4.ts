import type { Lesson } from '../../types/curriculum'

export const m2l4: Lesson = {
  id: 'm2-l4',
  moduleId: 'm2',
  number: '2.4',
  title: '에 — tujuan, keberadaan, waktu',
  subtitle: 'Satu partikel dengan tiga tugas yang saling berkaitan',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan ke mana kamu pergi, di mana sesuatu berada, dan kapan sesuatu terjadi — termasuk kata waktu yang justru tidak memakai 에.',
  focus: ['에'],
  estimatedMinutes: 15,

  coreExamples: [
    { ko: '저는 회사에 가요.', id: 'Saya pergi ke kantor.', highlight: ['에'] },
    { ko: '지금 집에 있어요.', id: 'Sekarang saya ada di rumah.', highlight: ['에'] },
    { ko: '세 시에 만나요.', id: 'Kita bertemu jam tiga.', highlight: ['에'] },
    { ko: '책상 위에 책이 있어요.', id: 'Di atas meja ada buku.', highlight: ['에'] },
    { ko: '월요일에 회의가 있어요.', id: 'Hari Senin ada rapat.', highlight: ['에'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '책상 위에 책이 있어요.',
        id: 'Di atas meja ada buku.',
        highlight: ['에', '이'],
      },
      rows: [
        {
          unit: '책상 위에',
          formula: '책상 + 위 + 에',
          meaning: 'Di atas meja; 위 ("atas") adalah kata benda, lalu 에 menandai letaknya',
        },
        { unit: '책이', formula: '책 + 이', meaning: 'Buku — subjek dari 있다' },
        { unit: '있어요', formula: '있다 → 있어요', meaning: 'Ada, 해요체' },
      ],
      why:
        'Kata posisi dalam bahasa Korea — 위, 아래, 앞, 뒤, 옆, 안, 밖 — adalah KATA BENDA, bukan kata depan. Jadi urutannya terbalik dari bahasa Indonesia: benda acuannya lebih dulu, baru kata posisinya, baru partikel 에. "Di atas meja" menjadi 책상 위에, harfiahnya "meja atas-nya di". Partikel 에 dipakai karena kalimat ini menyatakan KEBERADAAN, bukan kegiatan.',
      swaps: [
        {
          alt: '책상에 책이 있어요.',
          effect:
            'Tetap benar dan sering dipakai; artinya "ada buku di meja" tanpa menegaskan di bagian atasnya. Kata posisi boleh dilepas kalau tidak penting.',
        },
        {
          alt: '책상에서 책을 읽어요.',
          effect:
            'Dengan 에서 karena ada KEGIATAN yang berlangsung (membaca). Perbedaan 에 dan 에서 dibahas tuntas di pelajaran berikutnya.',
        },
      ],
    },
    {
      sentence: {
        ko: '월요일에 회의가 있어요.',
        id: 'Hari Senin ada rapat.',
        highlight: ['에', '가'],
      },
      rows: [
        { unit: '월요일에', formula: '월요일 + 에', meaning: 'Pada hari Senin — titik waktu' },
        { unit: '회의가', formula: '회의 + 가', meaning: 'Rapat — subjek dari 있다' },
        { unit: '있어요', formula: '있다 → 있어요', meaning: 'Ada, 해요체' },
      ],
      why:
        '에 menandai satu titik waktu: jam, hari, tanggal, bulan, tahun. Tetapi ada sekelompok kata waktu yang TIDAK PERNAH memakai 에 — yaitu kata waktu yang maknanya sudah relatif terhadap "sekarang": 오늘, 어제, 내일, 지금, 매일, 언제. Ini bukan aturan yang bisa ditebak dari logika; ia harus dihafal.',
      swaps: [
        {
          alt: '오늘 회의가 있어요.',
          effect:
            'Benar — tanpa 에. 오늘 termasuk kata waktu yang tidak memakai 에.',
        },
        {
          alt: '오늘에 회의가 있어요. ✗',
          effect: 'Salah. Ini kesalahan yang sangat sering dilakukan pembelajar.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '위', id: 'atas', pos: 'kata benda' },
    { ko: '아래 (밑)', id: 'bawah', pos: 'kata benda' },
    { ko: '앞', id: 'depan', pos: 'kata benda' },
    { ko: '뒤', id: 'belakang', pos: 'kata benda' },
    { ko: '옆', id: 'samping, sebelah', pos: 'kata benda' },
    { ko: '안', id: 'dalam', pos: 'kata benda' },
    { ko: '밖', id: 'luar', pos: 'kata benda' },
    { ko: '책상', id: 'meja (tulis)', pos: 'kata benda' },
    {
      ko: '끝나다',
      id: 'selesai, berakhir',
      pos: 'kata kerja',
      note: '해요체: 끝나요.',
      example: { ko: '회의가 네 시에 끝나요.', id: 'Rapatnya selesai jam empat.' },
    },
    { ko: '월요일', id: 'hari Senin', pos: 'kata benda', note: '화요일, 수요일, 목요일, 금요일, 토요일, 일요일.' },
  ],

  grammar: [
    {
      title: 'Tiga tugas 에',
      form: 'kata benda + 에 (bentuknya tidak pernah berubah)',
      body:
        'Tidak seperti 은/는 atau 이/가, bentuk 에 selalu sama — tidak peduli ada 받침 atau tidak. Yang perlu kamu kuasai adalah kapan memakainya.',
      table: {
        columns: ['Tugas', 'Kata kerja yang biasa menyertai', 'Contoh'],
        rows: [
          ['Tujuan (ke mana)', '가다, 오다, 도착하다, 다니다', '회사에 가요.'],
          ['Keberadaan (di mana)', '있다, 없다, 살다, 많다', '집에 있어요.'],
          ['Waktu (kapan)', 'semua kata kerja', '세 시에 만나요.'],
        ],
      },
      examples: [
        { ko: '학교에 다녀요.', id: 'Saya bersekolah di sana.', highlight: ['에'], note: '다니다 = pergi-pulang rutin.' },
        { ko: '서울에 살아요.', id: 'Saya tinggal di Seoul.', highlight: ['에'] },
        { ko: '오월에 한국에 가요.', id: 'Bulan Mei saya pergi ke Korea.', highlight: ['에'], note: 'Dua 에 dalam satu kalimat — satu waktu, satu tujuan.' },
      ],
      more:
        '살다 ("tinggal") menerima 에 maupun 에서: 서울에 살아요 dan 서울에서 살아요 keduanya dipakai. Dengan 에 penekanannya pada tempat tinggalnya, dengan 에서 pada kehidupan yang berlangsung di sana. Dalam praktik, 서울에 살아요 lebih sering kamu dengar.',
    },
    {
      title: 'Kata posisi adalah kata benda',
      form: 'benda acuan + kata posisi + 에',
      body:
        'Urutannya kebalikan dari bahasa Indonesia. "Di depan kantor" bukan 앞 회사에, melainkan 회사 앞에 — harfiahnya "kantor depan-nya di".',
      table: {
        columns: ['Kata posisi', 'Arti', 'Contoh', 'Terjemahan'],
        rows: [
          ['위', 'atas', '책상 위에', 'di atas meja'],
          ['아래 / 밑', 'bawah', '의자 밑에', 'di bawah kursi'],
          ['앞', 'depan', '회사 앞에', 'di depan kantor'],
          ['뒤', 'belakang', '집 뒤에', 'di belakang rumah'],
          ['옆', 'samping', '창문 옆에', 'di sebelah jendela'],
          ['안', 'dalam', '가방 안에', 'di dalam tas'],
          ['밖', 'luar', '건물 밖에', 'di luar gedung'],
          ['사이', 'antara', '은행과 카페 사이에', 'di antara bank dan kafe'],
        ],
      },
      mistakes: [
        {
          wrong: '위 책상에 책이 있어요.',
          right: '책상 위에 책이 있어요.',
          why: 'Kata posisi berada SESUDAH benda acuannya, bukan sebelum.',
        },
      ],
    },
    {
      title: 'Kata waktu yang tidak memakai 에',
      body:
        'Kelompok kata ini harus dihafal. Semuanya adalah kata waktu yang maknanya relatif terhadap saat berbicara, atau yang menyatakan frekuensi.',
      table: {
        caption: 'Semua kata di kolom kiri TIDAK memakai 에.',
        columns: ['Tanpa 에', 'Arti', 'Dengan 에', 'Arti'],
        rows: [
          ['오늘', 'hari ini', '월요일에', 'hari Senin'],
          ['어제', 'kemarin', '세 시에', 'jam tiga'],
          ['내일', 'besok', '오월에', 'bulan Mei'],
          ['지금', 'sekarang', '주말에', 'akhir pekan'],
          ['매일', 'setiap hari', '아침에', 'pagi hari'],
          ['언제', 'kapan', '방학에', 'saat libur'],
        ],
      },
      examples: [
        { ko: '내일 회의가 있어요.', id: 'Besok ada rapat.', note: 'Tanpa 에.' },
        { ko: '내일 아침에 회의가 있어요.', id: 'Besok pagi ada rapat.', note: '내일 tanpa 에, tetapi 아침 tetap memakai 에.' },
      ],
      mistakes: [
        { wrong: '오늘에 바빠요.', right: '오늘 바빠요.', why: '오늘 tidak pernah memakai 에.' },
        { wrong: '매일에 공부해요.', right: '매일 공부해요.', why: '매일 menyatakan frekuensi, bukan titik waktu.' },
      ],
    },
    {
      title: '에 untuk benda dan tempat, 한테 untuk orang',
      body:
        'Saat kamu mengirim atau menyampaikan sesuatu, penerimanya menentukan partikelnya: tempat dan organisasi memakai 에, sedangkan orang dan hewan memakai 한테/에게.',
      examples: [
        { ko: '회사에 전화해요.', id: 'Saya menelepon kantor.', highlight: ['에'] },
        { ko: '친구한테 전화해요.', id: 'Saya menelepon teman.', highlight: ['한테'] },
      ],
      more:
        'Pembagian ini dibahas lengkap di Pelajaran 2.8. Untuk sekarang cukup ingat: kalau penerimanya bisa diajak bicara, pakai 한테/에게. Kalau tidak, pakai 에.',
    },
  ],

  dialogue: {
    title: 'Mencari rekan kerja',
    situation: 'Vio mencari Sujin yang tidak ada di mejanya.',
    lines: [
      { speaker: '비오', ko: '수진 씨, 지금 어디에 있어요?', id: 'Sujin, sekarang ada di mana?' },
      {
        speaker: '수진',
        ko: '저는 지금 회의실에 있어요.',
        id: 'Saya sekarang di ruang rapat.',
        note: '있다 menyatakan keberadaan → 에, bukan 에서.',
      },
      { speaker: '비오', ko: '회의가 몇 시에 끝나요?', id: 'Rapatnya selesai jam berapa?' },
      { speaker: '수진', ko: '네 시에 끝나요. 왜요?', id: 'Selesai jam empat. Kenapa?' },
      {
        speaker: '비오',
        ko: '수진 씨 책상 위에 서류가 있어요.',
        id: 'Ada dokumen di atas meja Sujin.',
        note: '책상 위에 — benda acuan dulu, baru kata posisi, baru 에.',
      },
      { speaker: '수진', ko: '아, 고마워요. 네 시에 봐요!', id: 'Oh, terima kasih. Sampai jumpa jam empat!' },
    ],
    politeness:
      '네 시에 봐요 secara harfiah berarti "kita bertemu jam empat", tetapi dalam percakapan berfungsi seperti "sampai jumpa nanti". Bentuk 해요체 lagi-lagi dipakai untuk sesuatu yang bukan pernyataan.',
  },

  passage: {
    title: '제 방',
    intro: 'Menggambarkan sebuah ruangan — latihan terbaik untuk 에 dan kata posisi.',
    sentences: [
      { ko: '제 방은 작아요.', id: 'Kamar saya kecil.' },
      { ko: '방 안에 책상이 하나 있어요.', id: 'Di dalam kamar ada satu meja.' },
      { ko: '책상 위에 노트북하고 커피가 있어요.', id: 'Di atas meja ada laptop dan kopi.' },
      { ko: '침대는 창문 옆에 있어요.', id: 'Tempat tidurnya ada di sebelah jendela.' },
      {
        ko: '저는 매일 저녁에 이 방에서 한국어를 공부해요.',
        id: 'Setiap malam saya belajar bahasa Korea di kamar ini.',
      },
    ],
    vocabInContext: [
      { ko: '방', id: 'kamar' },
      { ko: '작다', id: 'kecil' },
      { ko: '노트북', id: 'laptop' },
      { ko: '침대', id: 'tempat tidur' },
    ],
    analysis: [
      '방 안에, 책상 위에, 창문 옆에 — ketiganya menyatakan keberadaan, jadi memakai 에. Perhatikan urutannya: benda acuan → kata posisi → 에.',
      '침대는 memakai 는 karena tempat tidur diangkat sebagai topik baru setelah meja selesai dibahas.',
      'Kalimat terakhir memakai 에서 pada 이 방에서 karena di situ ada KEGIATAN (belajar), bukan sekadar keberadaan. Bandingkan dengan 방 안에 di kalimat kedua.',
      '매일 tidak memakai 에, tetapi 저녁 tetap memakai 에 — keduanya muncul berdampingan dalam satu kalimat yang sama.',
    ],
  },

  exercises: [
    {
      id: 'm2l4-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Temanmu menelepon dan bertanya kamu sedang di mana.',
      sentence: '지금 집___ 있어요.',
      translation: 'Sekarang saya ada di rumah.',
      options: ['에', '에서', '를', '로'],
      answer: '에',
      explain:
        '있다 menyatakan keberadaan, bukan kegiatan. Tempat keberadaan selalu ditandai 에.',
      whyNot: {
        에서: 'Kesalahan paling umum untuk pasangan ini. 에서 dipakai kalau ada kegiatan yang berlangsung — 집에서 일해요 ("bekerja di rumah"), misalnya.',
        를: '있다 bukan kata kerja transitif, jadi tidak punya objek.',
        로: '로 menandai arah atau alat.',
      },
      tags: ['에'],
    },
    {
      id: 'm2l4-e2',
      kind: 'build',
      prompt: 'Susun kalimatnya. Perhatikan urutan kata posisinya.',
      translation: 'Di atas meja ada laptop.',
      tiles: ['책상', '위에', '노트북이', '있어요'],
      distractors: ['위', '노트북을'],
      answers: ['책상 위에 노트북이 있어요'],
      explain:
        'Kata posisi 위 berada SESUDAH benda acuannya, lalu 에 ditempelkan di belakangnya. Dan karena 있다 menuntut subjek, 노트북 memakai 이 — bukan 을.',
      parts: [
        { part: '책상', role: 'benda acuan' },
        { part: '위에', role: 'kata posisi "atas" + partikel 에' },
        { part: '노트북이', role: 'subjek dari 있다' },
        { part: '있어요', role: '있다 dalam 해요체' },
      ],
      tags: ['에'],
    },
    {
      id: 'm2l4-e3',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel waktu yang tepat. Kalau tidak perlu partikel, tulis tanda hubung ( - ).',
      sentence: '월요일___ 회의가 있어요.',
      translation: 'Hari Senin ada rapat.',
      answers: ['에'],
      explain:
        'Nama hari menunjuk satu titik waktu, jadi memakai 에. Yang tidak memakai 에 hanyalah kata waktu relatif seperti 오늘, 어제, 내일, 지금, 매일.',
      tags: ['에'],
    },
    {
      id: 'm2l4-e4',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '오늘에 아주 바빠요.',
      translation: 'Hari ini saya sangat sibuk.',
      answers: ['오늘 아주 바빠요', '오늘은 아주 바빠요'],
      explain:
        '오늘 termasuk kelompok kata waktu yang tidak pernah memakai 에 — bersama 어제, 내일, 지금, 매일, dan 언제. Kamu boleh menambahkan 은 (오늘은) kalau ingin memberi nuansa membandingkan, tetapi 에 tidak boleh.',
      tags: ['에'],
    },
    {
      id: 'm2l4-e5',
      kind: 'match',
      prompt: 'Pasangkan kata posisi dengan artinya.',
      pairs: [
        { left: '위', right: 'atas' },
        { left: '앞', right: 'depan' },
        { left: '뒤', right: 'belakang' },
        { left: '옆', right: 'samping, sebelah' },
        { left: '안', right: 'dalam' },
        { left: '밖', right: 'luar' },
      ],
      explain:
        'Semuanya kata benda. Pola pemakaiannya selalu sama: benda acuan + kata posisi + 에 (untuk keberadaan) atau + 에서 (untuk kegiatan).',
      tags: ['에'],
    },
    {
      id: 'm2l4-e6',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menelepon kantor tempatmu bekerja, bukan menelepon seseorang.',
      sentence: '아침에 회사___ 전화했어요.',
      translation: 'Pagi tadi saya menelepon kantor.',
      options: ['에', '한테', '에서', '를'],
      answer: '에',
      explain:
        'Penerima yang berupa tempat atau organisasi memakai 에. Kalau penerimanya orang, barulah dipakai 한테/에게.',
      whyNot: {
        한테: '한테 khusus untuk orang dan hewan — sesuatu yang bisa diajak bicara.',
        에서: '에서 menandai tempat kegiatan atau titik asal, bukan penerima.',
        를: '전화하다 tidak memakai objek untuk menyebut siapa yang ditelepon.',
      },
      tags: ['에'],
    },
    {
      id: 'm2l4-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Besok pagi saya pergi ke kantor.',
      answers: ['내일 아침에 회사에 가요', '저는 내일 아침에 회사에 가요'],
      explain:
        'Dua 에 muncul dalam satu kalimat: 아침에 untuk waktu, 회사에 untuk tujuan. Tetapi 내일 tidak memakai 에 sama sekali.',
      hint: 'Satu dari tiga kata keterangan di kalimat ini tidak boleh memakai 에.',
      tags: ['에'],
    },
  ],

  quiz: [
    {
      id: 'm2l4-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR?',
      options: [
        '내일 세 시에 만나요.',
        '내일에 세 시 만나요.',
        '내일에 세 시에 만나요.',
        '내일 세 시 만나요.',
      ],
      answerIndex: 0,
      explain:
        '내일 tidak pernah memakai 에, sedangkan 세 시 adalah titik waktu yang justru membutuhkan 에. Kalimat yang benar memakai keduanya sesuai aturannya masing-masing.',
      whyNot: {
        '내일에 세 시 만나요.': 'Keduanya terbalik.',
        '내일에 세 시에 만나요.': '내일 tidak boleh memakai 에.',
        '내일 세 시 만나요.': '세 시 membutuhkan 에. (Dalam percakapan sangat santai kadang dilepas, tetapi bentuk bakunya memakai 에.)',
      },
      tags: ['에'],
    },
    {
      id: 'm2l4-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan kata posisi dan partikel yang tepat.',
      context: 'Tempat tidurnya berada tepat di sebelah jendela.',
      sentence: '침대는 창문 ___ 있어요.',
      translation: 'Tempat tidurnya ada di sebelah jendela.',
      answers: ['옆에'],
      explain:
        '옆 ("samping") adalah kata benda yang diletakkan sesudah benda acuannya, lalu diberi 에 karena kalimat ini menyatakan keberadaan.',
      tags: ['에'],
    },
    {
      id: 'm2l4-q3',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Hari Senin jam sembilan ada rapat.',
      tiles: ['월요일', '아홉 시에', '회의가', '있어요'],
      distractors: ['월요일에는', '회의를'],
      answers: ['월요일 아홉 시에 회의가 있어요'],
      explain:
        'Kalau dua keterangan waktu berurutan dari yang besar ke yang kecil (hari lalu jam), 에 cukup ditempelkan pada yang terakhir saja. 회의 adalah subjek dari 있다, jadi memakai 가.',
      parts: [
        { part: '월요일', role: 'keterangan waktu besar; 에 tidak perlu diulang' },
        { part: '아홉 시에', role: 'keterangan waktu kecil, membawa 에' },
        { part: '회의가', role: 'subjek dari 있다' },
        { part: '있어요', role: '있다 dalam 해요체' },
      ],
      altNote:
        '월요일에 아홉 시에 회의가 있어요 juga bisa dipahami, tetapi terdengar bertele-tele. Satu 에 di akhir rangkaian sudah cukup.',
      tags: ['에'],
    },
  ],

  summary: {
    points: [
      'Bentuk 에 tidak pernah berubah — tidak peduli ada 받침 atau tidak.',
      'Tiga tugasnya: tujuan (가다/오다), keberadaan (있다/없다/살다), dan titik waktu.',
      'Kata posisi (위, 앞, 옆, 안, …) adalah kata benda dan diletakkan SESUDAH benda acuan: 책상 위에.',
      '오늘, 어제, 내일, 지금, 매일, 언제 tidak pernah memakai 에.',
      'Penerima berupa tempat memakai 에; penerima berupa orang memakai 한테/에게.',
    ],
    pitfalls: [
      {
        wrong: '오늘에 바빠요.',
        right: '오늘 바빠요.',
        why: '오늘 termasuk kata waktu yang tidak memakai 에.',
      },
      {
        wrong: '위 책상에 책이 있어요.',
        right: '책상 위에 책이 있어요.',
        why: 'Kata posisi berada sesudah benda acuannya, bukan sebelum.',
      },
      {
        wrong: '집에서 있어요.',
        right: '집에 있어요.',
        why: '있다 menyatakan keberadaan, bukan kegiatan — jadi memakai 에.',
      },
    ],
  },
}
