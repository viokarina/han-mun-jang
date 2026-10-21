import type { Lesson } from '../../types/curriculum'

export const m3l1: Lesson = {
  id: 'm3-l1',
  moduleId: 'm3',
  number: '3.1',
  title: 'Dari bentuk kamus ke 해요체',
  subtitle: 'Batang kata, aturan vokal, dan penggabungan bunyi',
  objective:
    'Setelah pelajaran ini kamu bisa mengubah hampir semua kata kerja dan kata sifat dari bentuk kamus menjadi bentuk 해요체 — tanpa menghafal satu per satu.',
  focus: ['해요체', 'batang kata'],
  estimatedMinutes: 18,

  coreExamples: [
    {
      ko: '저는 매일 책을 읽어요.',
      id: 'Saya membaca buku setiap hari.',
      highlight: ['읽어요'],
      highlightKind: 'ending',
    },
    {
      ko: '친구를 기다려요.',
      id: 'Saya menunggu teman.',
      highlight: ['기다려요'],
      highlightKind: 'ending',
    },
    {
      ko: '요즘 아주 바빠요.',
      id: 'Akhir-akhir ini saya sangat sibuk.',
      highlight: ['바빠요'],
      highlightKind: 'ending',
    },
    {
      ko: '오늘 날씨가 더워요.',
      id: 'Hari ini cuacanya panas.',
      highlight: ['더워요'],
      highlightKind: 'ending',
    },
    {
      ko: '저는 집에서 쉬어요.',
      id: 'Saya beristirahat di rumah.',
      highlight: ['쉬어요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 매일 책을 읽어요.',
        id: 'Saya membaca buku setiap hari.',
        highlight: ['읽어요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        { unit: '매일', formula: '—', meaning: 'Setiap hari; tidak memakai 에' },
        { unit: '책을', formula: '책 + 을', meaning: 'Buku — objek (받침 ㄱ → 을)' },
        {
          unit: '읽어요',
          formula: '읽다 → batang 읽 → 읽 + 어요',
          meaning: 'Membaca; vokal batangnya ㅣ, jadi memakai 어요',
        },
      ],
      why:
        'Membentuk 해요체 selalu tiga langkah. Pertama, lepas 다 dari bentuk kamus — sisanya adalah batang kata (어간). Kedua, lihat vokal TERAKHIR pada batang itu: kalau ㅏ atau ㅗ, tambahkan 아요; selain itu, tambahkan 어요. Ketiga, gabungkan bunyinya kalau perlu. Pada 읽다, batangnya 읽 berakhir konsonan, jadi tidak ada penggabungan — hasilnya 읽어요.',
      swaps: [
        {
          alt: '앉다 → 앉아요',
          effect:
            'Batangnya 앉 dengan vokal ㅏ, jadi memakai 아요. Sama-sama berakhir konsonan, jadi tidak ada penggabungan.',
        },
        {
          alt: '공부하다 → 공부해요',
          effect:
            'Semua kata berakhiran 하다 berubah menjadi 해요 tanpa kecuali. Inilah kelompok yang paling mudah.',
        },
      ],
    },
    {
      sentence: {
        ko: '요즘 아주 바빠요.',
        id: 'Akhir-akhir ini saya sangat sibuk.',
        highlight: ['바빠요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '요즘', formula: '—', meaning: 'Akhir-akhir ini' },
        { unit: '아주', formula: '—', meaning: 'Sangat' },
        {
          unit: '바빠요',
          formula: '바쁘다 → 바쁘 → 바ㅃ + 아요 → 바빠요',
          meaning: 'Sibuk; ㅡ luluh, lalu vokal sebelumnya (ㅏ) menentukan akhirannya',
        },
      ],
      why:
        'Ini contoh pertama perubahan tidak beraturan. Kalau batang kata berakhir dengan vokal ㅡ, vokal itu LULUH saat bertemu akhiran. Yang menentukan 아요 atau 어요 kemudian adalah vokal pada suku kata SEBELUMNYA: 바쁘 → vokal sebelumnya ㅏ → 바빠요. Bandingkan 예쁘다 → vokal sebelumnya ㅖ → 예뻐요. Perhatikan juga bahwa 바쁘다 adalah KATA SIFAT, tetapi dikonjugasi persis seperti kata kerja — ini salah satu perbedaan besar dari bahasa Indonesia.',
      swaps: [
        {
          alt: '아프다 → 아파요',
          effect: 'Vokal sebelum ㅡ adalah ㅏ, jadi hasilnya 아파요 ("sakit").',
        },
        {
          alt: '쓰다 → 써요',
          effect:
            'Batangnya hanya satu suku kata, jadi tidak ada vokal sebelumnya. Dalam kasus ini selalu dipakai 어요 → 써요 ("menulis").',
        },
      ],
    },
  ],

  vocab: [
    { ko: '읽다', id: 'membaca', pos: 'kata kerja', note: '→ 읽어요' },
    { ko: '기다리다', id: 'menunggu', pos: 'kata kerja', note: '→ 기다려요' },
    { ko: '배우다', id: 'belajar, mempelajari', pos: 'kata kerja', note: '→ 배워요' },
    { ko: '쉬다', id: 'beristirahat', pos: 'kata kerja', note: '→ 쉬어요 (tanpa penggabungan)' },
    { ko: '바쁘다', id: 'sibuk', pos: 'kata sifat', note: 'ㅡ luluh → 바빠요' },
    { ko: '아프다', id: 'sakit', pos: 'kata sifat', note: 'ㅡ luluh → 아파요' },
    { ko: '덥다', id: 'panas (cuaca)', pos: 'kata sifat', note: 'ㅂ tidak beraturan → 더워요' },
    { ko: '춥다', id: 'dingin (cuaca)', pos: 'kata sifat', note: 'ㅂ tidak beraturan → 추워요' },
    { ko: '앉다', id: 'duduk', pos: 'kata kerja', note: '→ 앉아요' },
    { ko: '요즘', id: 'akhir-akhir ini', pos: 'kata keterangan' },
  ],

  grammar: [
    {
      title: 'Tiga langkah membentuk 해요체',
      form: '① lepas 다 → ② lihat vokal terakhir batang → ③ gabungkan bunyi',
      body:
        'Hanya ada tiga kemungkinan akhiran: 아요, 어요, dan 해요. Yang membuat pemula bingung bukan aturannya, melainkan langkah ketiga — penggabungan bunyi.',
      table: {
        columns: ['Vokal terakhir batang', 'Akhiran', 'Contoh', 'Hasil'],
        rows: [
          ['ㅏ atau ㅗ', '아요', '앉다 → 앉', '앉아요'],
          ['Selain itu', '어요', '읽다 → 읽', '읽어요'],
          ['하다', '해요', '공부하다 → 공부하', '공부해요'],
        ],
      },
      examples: [
        { ko: '여기 앉아요.', id: 'Silakan duduk di sini.' },
        { ko: '신문을 읽어요.', id: 'Saya membaca koran.' },
        { ko: '매일 운동해요.', id: 'Saya berolahraga setiap hari.' },
      ],
      more:
        'Perhatikan: yang dilihat adalah vokal terakhir pada BATANG, bukan pada bentuk kamus. Untuk 먹다, batangnya 먹 dengan vokal ㅓ → 먹어요. Untuk 좋다, batangnya 좋 dengan vokal ㅗ → 좋아요. Kalau batangnya lebih dari satu suku kata, yang dihitung tetap yang terakhir: 만나다 → batang 만나 → vokal ㅏ → 아요.',
    },
    {
      title: 'Penggabungan bunyi',
      body:
        'Kalau batang kata berakhir dengan VOKAL (bukan konsonan), bunyinya akan bergabung dengan akhiran. Tabel ini mencakup hampir semua yang akan kamu temui.',
      table: {
        caption:
          'Kalau batang berakhir konsonan (읽, 먹, 앉), tidak ada penggabungan sama sekali.',
        columns: ['Batang berakhir', 'Contoh', 'Hasil', 'Apa yang terjadi'],
        rows: [
          ['ㅏ', '가다 → 가 + 아요', '가요', 'Dua ㅏ menyatu jadi satu'],
          ['ㅓ', '서다 → 서 + 어요', '서요', 'Dua ㅓ menyatu jadi satu'],
          ['ㅗ', '오다 → 오 + 아요', '와요', 'ㅗ + ㅏ → ㅘ'],
          ['ㅜ', '배우다 → 배우 + 어요', '배워요', 'ㅜ + ㅓ → ㅝ'],
          ['ㅣ', '마시다 → 마시 + 어요', '마셔요', 'ㅣ + ㅓ → ㅕ'],
          ['ㅐ', '보내다 → 보내 + 어요', '보내요', 'ㅓ terserap, bentuknya tetap'],
          ['ㅟ', '쉬다 → 쉬 + 어요', '쉬어요', 'Tidak bergabung'],
          ['ㅚ', '되다 → 되 + 어요', '돼요', 'ㅚ + ㅓ → ㅙ'],
        ],
      },
      examples: [
        { ko: '학교에 가요.', id: 'Saya pergi ke sekolah.', note: '가다 → 가요.' },
        { ko: '커피를 마셔요.', id: 'Saya minum kopi.', note: '마시다 → 마셔요.' },
        { ko: '친구를 기다려요.', id: 'Saya menunggu teman.', note: '기다리다 → 기다려요.' },
      ],
      more:
        'Penggabungan ini bukan aturan ejaan yang kaku — ia meniru cara orang benar-benar mengucapkannya. Kalau kamu mencoba melafalkan 마시어요 dengan cepat, bunyinya memang berubah menjadi 마셔요 dengan sendirinya. Karena itu, membaca keras-keras adalah cara tercepat membiasakan diri.',
    },
    {
      title: 'Kata sifat juga dikonjugasi',
      body:
        'Inilah perbedaan besar dari bahasa Indonesia. Dalam bahasa Korea, kata sifat berperilaku seperti kata kerja: ia menutup kalimat dan ikut berubah bentuk. Tidak perlu kata "adalah" apa pun.',
      examples: [
        { ko: '날씨가 좋아요.', id: 'Cuacanya bagus.', note: '좋다 → 좋아요.' },
        { ko: '한국어가 어려워요.', id: 'Bahasa Koreanya sulit.', note: '어렵다 → 어려워요.' },
        { ko: '이 가방이 비싸요.', id: 'Tas ini mahal.', note: '비싸다 → 비싸요.' },
      ],
      mistakes: [
        {
          wrong: '날씨가 좋다예요.',
          right: '날씨가 좋아요.',
          why: 'Kata sifat tidak memerlukan 이에요/예요. Ia dikonjugasi sendiri seperti kata kerja.',
        },
      ],
      more:
        'Perbedaan antara kata kerja dan kata sifat tetap penting untuk pola lanjutan. Misalnya, hanya kata kerja yang bisa memakai -고 싶다 ("ingin") dan bentuk perintah -(으)세요. Kamu tidak bisa berkata 좋고 싶어요 untuk "ingin bagus".',
    },
    {
      title: 'Dua perubahan tidak beraturan yang paling sering muncul',
      body:
        'Ada beberapa pola tidak beraturan dalam bahasa Korea, tetapi dua ini muncul begitu sering sehingga sebaiknya kamu kenali sejak awal.',
      table: {
        caption:
          'Perubahan ㅂ tidak terjadi pada semua kata: 좁다 → 좁아요 dan 입다 → 입어요 tetap beraturan.',
        columns: ['Pola', 'Yang terjadi', 'Contoh', 'Hasil'],
        rows: [
          ['ㅡ luluh', 'Vokal ㅡ hilang; vokal sebelumnya menentukan akhiran', '바쁘다', '바빠요'],
          ['ㅡ luluh', 'Kalau hanya satu suku kata → selalu 어요', '쓰다', '써요'],
          ['ㅂ berubah', 'ㅂ menjadi 우, lalu bergabung', '덥다', '더워요'],
          ['ㅂ berubah', 'Sama', '어렵다', '어려워요'],
          ['ㅂ berubah', 'Sama', '맵다', '매워요'],
        ],
      },
      examples: [
        { ko: '오늘 날씨가 더워요.', id: 'Hari ini cuacanya panas.' },
        { ko: '이 음식이 매워요.', id: 'Makanan ini pedas.' },
        { ko: '머리가 아파요.', id: 'Kepala saya sakit.' },
      ],
      more:
        'Kata-kata ber-ㅂ yang tidak beraturan hampir semuanya KATA SIFAT: 덥다, 춥다, 어렵다, 쉽다, 맵다, 가깝다, 반갑다, 고맙다. Sedangkan kata kerja ber-ㅂ seperti 입다 ("memakai baju") dan 잡다 ("memegang") justru beraturan. Pola tidak beraturan lain — ㄷ (듣다 → 들어요), ㄹ (살다), dan 르 (모르다 → 몰라요) — akan diperkenalkan secara bertahap di pelajaran berikutnya.',
    },
  ],

  dialogue: {
    title: 'Menanyakan kabar',
    situation: 'Dua rekan kerja bertemu setelah beberapa minggu tidak berjumpa.',
    lines: [
      { speaker: '수진', ko: '비오 씨, 오랜만이에요! 요즘 어떻게 지내요?', id: 'Vio, lama tidak bertemu! Akhir-akhir ini bagaimana kabarmu?' },
      {
        speaker: '비오',
        ko: '잘 지내요. 그런데 요즘 아주 바빠요.',
        id: 'Saya baik. Tapi akhir-akhir ini sangat sibuk.',
        note: '지내다 → 지내요 (ㅐ, tanpa penggabungan). 바쁘다 → 바빠요 (ㅡ luluh).',
      },
      { speaker: '수진', ko: '왜요? 일이 많아요?', id: 'Kenapa? Pekerjaannya banyak?' },
      {
        speaker: '비오',
        ko: '네. 그리고 저녁에 한국어를 배워요.',
        id: 'Ya. Dan malam hari saya belajar bahasa Korea.',
        note: '배우다 → 배워요 (ㅜ + ㅓ → ㅝ).',
      },
      {
        speaker: '수진',
        ko: '우와, 대단해요! 한국어가 어려워요?',
        id: 'Wah, hebat! Bahasa Koreanya sulit?',
        note: '어렵다 → 어려워요 (ㅂ tidak beraturan).',
      },
      { speaker: '비오', ko: '조금 어려워요. 하지만 재미있어요.', id: 'Agak sulit. Tapi menyenangkan.' },
    ],
    politeness:
      '잘 지내요 adalah jawaban baku untuk "apa kabar". Perhatikan bahwa 어떻게 지내요? memakai bentuk sekarang meskipun menanyakan periode yang sedang berlangsung — bahasa Korea tidak punya bentuk "sedang" tersendiri untuk hal semacam ini.',
  },

  passage: {
    title: '제 저녁 시간',
    intro: 'Satu paragraf dengan delapan kata kerja berbeda. Coba kenali bentuk kamusnya.',
    sentences: [
      { ko: '저는 여섯 시에 퇴근해요.', id: 'Saya pulang kerja jam enam.' },
      { ko: '집에 와요. 그리고 조금 쉬어요.', id: 'Saya pulang ke rumah. Lalu istirahat sebentar.' },
      { ko: '저녁을 먹고 책을 읽어요.', id: 'Setelah makan malam saya membaca buku.' },
      { ko: '요즘은 한국 소설을 읽어요.', id: 'Akhir-akhir ini saya membaca novel Korea.' },
      { ko: '조금 어려워요. 하지만 아주 재미있어요.', id: 'Agak sulit. Tapi sangat menyenangkan.' },
      { ko: '열한 시쯤 자요.', id: 'Sekitar jam sebelas saya tidur.' },
    ],
    vocabInContext: [
      { ko: '퇴근하다', id: 'pulang kerja' },
      { ko: '소설', id: 'novel' },
      { ko: '자다', id: 'tidur' },
      { ko: '쯤', id: 'kira-kira, sekitar' },
    ],
    analysis: [
      '퇴근해요 — kata berakhiran 하다, jadi otomatis menjadi 해요.',
      '와요 — 오다 dengan batang berakhir ㅗ, bergabung menjadi ㅘ.',
      '쉬어요 — 쉬다 dengan batang berakhir ㅟ; vokal ini TIDAK bergabung, jadi bentuknya tetap dua suku kata.',
      '읽어요 — batangnya berakhir konsonan, jadi tidak ada penggabungan.',
      '어려워요 — 어렵다 dengan perubahan ㅂ → 우.',
      '자요 — 자다 dengan batang berakhir ㅏ, dua ㅏ menyatu menjadi satu.',
    ],
  },

  exercises: [
    {
      id: 'm3l1-e1',
      kind: 'fill',
      prompt: 'Ubah 마시다 menjadi bentuk 해요체.',
      sentence: '저는 아침에 커피를 ___.',
      translation: 'Saya minum kopi di pagi hari.',
      answers: ['마셔요'],
      explain:
        'Batangnya 마시 dengan vokal ㅣ, jadi memakai 어요. Lalu ㅣ + ㅓ bergabung menjadi ㅕ → 마셔요.',
      hint: 'Vokal terakhir batangnya ㅣ. Apa yang terjadi saat ㅣ bertemu ㅓ?',
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e2',
      kind: 'fill',
      prompt: 'Ubah 바쁘다 menjadi bentuk 해요체.',
      sentence: '요즘 아주 ___.',
      translation: 'Akhir-akhir ini saya sangat sibuk.',
      answers: ['바빠요'],
      explain:
        'Batangnya 바쁘 berakhir dengan ㅡ, jadi ㅡ luluh. Vokal pada suku kata sebelumnya adalah ㅏ, jadi akhirannya 아요 → 바빠요.',
      hint: 'Vokal ㅡ selalu luluh. Lihat vokal di suku kata sebelumnya.',
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e3',
      kind: 'match',
      prompt: 'Pasangkan bentuk kamus dengan bentuk 해요체-nya.',
      pairs: [
        { left: '오다', right: '와요' },
        { left: '배우다', right: '배워요' },
        { left: '기다리다', right: '기다려요' },
        { left: '쉬다', right: '쉬어요' },
        { left: '덥다', right: '더워요' },
        { left: '앉다', right: '앉아요' },
      ],
      explain:
        'Empat jenis perubahan muncul di sini: penggabungan vokal (오다, 배우다, 기다리다), tanpa penggabungan (쉬다, 앉다), dan perubahan ㅂ (덥다). Perhatikan bahwa 쉬다 TIDAK bergabung meskipun batangnya berakhir vokal.',
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e4',
      kind: 'particle',
      prompt: 'Pilih bentuk 해요체 yang benar untuk 좋다.',
      context: '좋다 adalah kata sifat yang berarti "bagus".',
      sentence: '오늘 날씨가 ___.',
      translation: 'Hari ini cuacanya bagus.',
      options: ['좋아요', '좋어요', '좋다예요', '좋해요'],
      answer: '좋아요',
      explain:
        'Batangnya 좋 dengan vokal ㅗ, jadi akhirannya 아요. Karena batangnya berakhir konsonan ㅎ, tidak ada penggabungan: 좋아요.',
      whyNot: {
        좋어요: 'Vokal ㅗ menuntut 아요, bukan 어요.',
        좋다예요: 'Kata sifat tidak memakai 이에요/예요 — ia dikonjugasi sendiri.',
        좋해요: '해요 hanya untuk kata berakhiran 하다.',
      },
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e5',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Setiap hari saya membaca buku di rumah.',
      tiles: ['저는', '매일', '집에서', '책을', '읽어요'],
      distractors: ['매일에', '읽아요'],
      answers: ['저는 매일 집에서 책을 읽어요'],
      explain:
        '읽다 punya batang 읽 dengan vokal ㅣ, jadi akhirannya 어요 — bukan 아요. Dan 매일 adalah keterangan frekuensi yang tidak memakai 에.',
      parts: [
        { part: '저는', role: 'topik' },
        { part: '매일', role: 'keterangan frekuensi, tanpa partikel' },
        { part: '집에서', role: 'tempat kegiatan' },
        { part: '책을', role: 'objek' },
        { part: '읽어요', role: '읽다 → 읽어요 (vokal ㅣ → 어요)' },
      ],
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e6',
      kind: 'correct',
      prompt: 'Perbaiki bentuk kata sifatnya.',
      sentence: '한국어가 어렵다예요.',
      translation: 'Bahasa Koreanya sulit.',
      answers: ['한국어가 어려워요'],
      explain:
        'Dua kesalahan sekaligus. Pertama, kata sifat tidak memakai 이에요/예요 — ia dikonjugasi seperti kata kerja. Kedua, 어렵다 adalah kata ber-ㅂ tidak beraturan: ㅂ berubah menjadi 우, lalu bergabung menjadi 어려워요.',
      tags: ['해요체'],
    },
    {
      id: 'm3l1-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea dengan bentuk 해요체.',
      direction: 'id-ko',
      source: 'Saya menunggu teman di kafe.',
      answers: ['카페에서 친구를 기다려요', '저는 카페에서 친구를 기다려요'],
      explain:
        '기다리다 punya batang 기다리 dengan vokal ㅣ → 어요, lalu bergabung menjadi 기다려요. Tempat kegiatan memakai 에서.',
      tags: ['해요체'],
    },
  ],

  quiz: [
    {
      id: 'm3l1-q1',
      kind: 'mc',
      prompt: 'Manakah bentuk 해요체 yang benar untuk 오다?',
      options: ['와요', '오아요', '오어요', '와아요'],
      answerIndex: 0,
      explain:
        'Batangnya 오 dengan vokal ㅗ → akhirannya 아요. Lalu ㅗ + ㅏ bergabung menjadi ㅘ, sehingga hasilnya 와요.',
      whyNot: {
        오아요: 'Bentuk sebelum penggabungan — dalam bahasa Korea baku, penggabungan ini wajib.',
        오어요: 'Vokal ㅗ menuntut 아요, bukan 어요.',
        와아요: 'Penggabungannya hanya terjadi sekali.',
      },
      tags: ['해요체'],
    },
    {
      id: 'm3l1-q2',
      kind: 'fill',
      prompt: 'Ubah 덥다 menjadi bentuk 해요체.',
      sentence: '여름에는 아주 ___.',
      translation: 'Pada musim panas sangat panas.',
      answers: ['더워요'],
      explain:
        '덥다 adalah kata sifat ber-ㅂ tidak beraturan: ㅂ berubah menjadi 우, lalu 우 + 어요 bergabung menjadi 워요 → 더워요.',
      tags: ['해요체'],
    },
    {
      id: 'm3l1-q3',
      kind: 'match',
      prompt: 'Pasangkan setiap kata kerja dengan aturan yang berlaku padanya.',
      pairs: [
        { left: '공부하다', right: 'semua 하다 → 해요' },
        { left: '먹다', right: 'batang berakhir konsonan → tanpa penggabungan' },
        { left: '보다', right: 'ㅗ + ㅏ → ㅘ' },
        { left: '쓰다', right: 'ㅡ luluh, satu suku kata → 어요' },
        { left: '춥다', right: 'ㅂ → 우' },
      ],
      explain:
        'Lima jalur utama pembentukan 해요체. Kalau kamu bisa mengenali jalur mana yang berlaku, kamu tidak perlu menghafal bentuk jadi satu per satu.',
      tags: ['해요체'],
    },
  ],

  summary: {
    points: [
      'Tiga langkah: lepas 다 → lihat vokal terakhir batang → gabungkan bunyi.',
      'Vokal ㅏ atau ㅗ → 아요; selain itu → 어요; semua 하다 → 해요.',
      'Batang yang berakhir konsonan tidak mengalami penggabungan.',
      'Batang yang berakhir vokal bergabung: 오 + 아요 → 와요, 마시 + 어요 → 마셔요.',
      'Kata sifat dikonjugasi persis seperti kata kerja — tidak memakai 이에요/예요.',
      'Dua pola tidak beraturan yang paling sering: ㅡ luluh (바쁘다 → 바빠요) dan ㅂ → 우 (덥다 → 더워요).',
    ],
    pitfalls: [
      {
        wrong: '날씨가 좋다예요.',
        right: '날씨가 좋아요.',
        why: 'Kata sifat tidak memerlukan 이에요/예요.',
      },
      {
        wrong: '읽아요',
        right: '읽어요',
        why: 'Vokal batangnya ㅣ, bukan ㅏ atau ㅗ, jadi akhirannya 어요.',
      },
      {
        wrong: '덥어요',
        right: '더워요',
        why: '덥다 adalah kata ber-ㅂ tidak beraturan: ㅂ berubah menjadi 우.',
      },
    ],
  },
}
