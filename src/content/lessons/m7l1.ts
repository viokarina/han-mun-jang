import type { Lesson } from '../../types/curriculum'

export const m7l1: Lesson = {
  id: 'm7-l1',
  moduleId: 'm7',
  number: '7.1',
  title: 'Obrolan di rumah',
  subtitle: '반말 — bahasa akrab, dan kapan boleh dipakai',
  objective:
    'Setelah pelajaran ini kamu bisa memahami dan memakai 반말 untuk berbicara dengan keluarga dan teman dekat — serta tahu persis kapan kamu TIDAK boleh memakainya.',
  focus: ['반말', '나 / 내가', '-(으)ㄹ래?'],
  estimatedMinutes: 18,

  coreExamples: [
    { ko: '밥 먹었어?', id: 'Sudah makan?', highlight: ['먹었어'], highlightKind: 'ending' },
    { ko: '엄마, 나 지금 좀 바빠.', id: 'Ibu, aku lagi agak sibuk.', highlight: ['나', '바빠'] },
    { ko: '리모컨 어디 있어?', id: 'Remotenya di mana?', highlight: ['있어'], highlightKind: 'ending' },
    { ko: '설거지 좀 해 줘.', id: 'Tolong cuci piringnya dong.', highlight: ['줘'], highlightKind: 'ending' },
    {
      ko: '우리 같이 영화 볼래?',
      id: 'Kita nonton film bareng, yuk?',
      highlight: ['볼래'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '밥 먹었어?',
        id: 'Sudah makan?',
        highlight: ['먹었어'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '밥', formula: '—', meaning: 'Nasi, makanan; partikel 을 dilepas karena kalimatnya pendek' },
        { unit: '먹었어?', formula: '먹었어요 → 먹었어', meaning: 'Sudah makan? — 요 dibuang' },
      ],
      why:
        'Inilah kabar baiknya: 반말 hampir selalu dibuat dengan SATU langkah — buang 요 dari bentuk 해요체. 먹었어요 menjadi 먹었어, 가요 menjadi 가, 바빠요 menjadi 바빠. Dan sama seperti di 해요체 (Pelajaran 1.3), kalimat tanyanya tidak berubah bentuk; hanya nadanya yang naik. Perlu diketahui juga: 밥 먹었어? adalah sapaan sehari-hari di keluarga Korea, bukan benar-benar pertanyaan tentang makanan — fungsinya mirip "apa kabar" dalam bahasa Indonesia.',
      swaps: [
        {
          alt: '밥 먹었어요?',
          effect: 'Versi 해요체 — untuk teman yang belum terlalu akrab atau rekan kerja sebaya.',
        },
        {
          alt: '식사하셨어요?',
          effect:
            'Versi hormat untuk orang tua, atasan, atau tamu. 식사하다 adalah kata yang lebih santun daripada 밥 먹다, dan 〜셨〜 menambahkan penghormatan.',
        },
      ],
    },
    {
      sentence: {
        ko: '엄마, 나 지금 좀 바빠.',
        id: 'Ibu, aku lagi agak sibuk.',
        highlight: ['나', '바빠'],
      },
      rows: [
        { unit: '엄마', formula: '—', meaning: 'Ibu — panggilan akrab, dipakai anak ke ibunya' },
        { unit: '나', formula: '저 → 나', meaning: 'Aku; bentuk 반말 dari 저' },
        { unit: '좀', formula: '—', meaning: 'Agak, sedikit — melembutkan nada' },
        { unit: '바빠', formula: '바빠요 → 바빠', meaning: 'Sibuk, 반말' },
      ],
      why:
        'Ada satu hal yang WAJIB ikut berubah saat kamu beralih ke 반말: kata ganti orang pertama. 저 menjadi 나, dan 제가 menjadi 내가. Memakai 저 bersama akhiran 반말 terdengar campur aduk dan langsung terasa janggal. Perhatikan juga partikel 는 dilepas (나는 → 나), karena dalam percakapan akrab yang pendek partikel sering dibuang.',
      swaps: [
        { alt: '저는 지금 좀 바빠요.', effect: 'Versi 해요체 lengkap, untuk orang yang belum akrab.' },
        {
          alt: '엄마, 나 지금 바빠!',
          effect:
            'Tanpa 좀, nadanya jadi lebih tegas — bisa terdengar seperti menolak dengan kesal. Kata 좀 benar-benar bekerja melembutkan.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '나', id: 'aku (bentuk 반말 dari 저)', pos: 'kata benda', note: 'Subjek: 내가.' },
    { ko: '응 / 어', id: 'ya (반말)', pos: 'ungkapan', note: 'Versi 해요체: 네.' },
    { ko: '아니', id: 'tidak, bukan (반말)', pos: 'ungkapan', note: 'Versi 해요체: 아니요.' },
    { ko: '엄마 / 아빠', id: 'ibu / ayah', pos: 'kata benda' },
    { ko: '설거지하다', id: 'mencuci piring', pos: 'kata kerja', note: '해요체: 설거지해요.' },
    { ko: '치우다', id: 'membereskan, merapikan', pos: 'kata kerja', note: '해요체: 치워요.' },
    { ko: '버리다', id: 'membuang', pos: 'kata kerja', note: '쓰레기를 버리다 = membuang sampah.' },
    { ko: '리모컨', id: 'remote', pos: 'kata benda' },
    { ko: '이따가', id: 'nanti (hari ini juga)', pos: 'kata keterangan' },
    { ko: '알았어', id: 'oke, mengerti (반말)', pos: 'ungkapan', note: 'Versi 해요체: 알았어요.' },
    { ko: '더럽다', id: 'kotor', pos: 'kata sifat', note: 'ㅂ tidak beraturan: 더러워요.' },
  ],

  grammar: [
    {
      title: 'Membuat 반말: buang 요',
      form: 'bentuk 해요체 − 요',
      body:
        'Aturan utamanya hanya satu, dan berlaku untuk hampir semua kata kerja dan kata sifat. Karena kamu sudah menguasai 해요체, kamu sebenarnya sudah menguasai 반말 juga.',
      table: {
        caption: 'Satu-satunya yang menyimpang adalah 이에요/예요 — lihat catatan berikutnya.',
        columns: ['해요체', '반말', 'Arti'],
        rows: [
          ['가요', '가', 'pergi'],
          ['먹어요', '먹어', 'makan'],
          ['해요', '해', 'melakukan'],
          ['봐요', '봐', 'melihat'],
          ['바빠요', '바빠', 'sibuk'],
          ['먹었어요', '먹었어', 'sudah makan'],
          ['갈 거예요', '갈 거야', 'akan pergi'],
          ['먹을래요?', '먹을래?', 'mau makan?'],
        ],
      },
      examples: [
        { ko: '어디 가?', id: 'Mau ke mana?' },
        { ko: '나 지금 밥 먹어.', id: 'Aku lagi makan.' },
        { ko: '내일 뭐 할 거야?', id: 'Besok mau ngapain?' },
      ],
      more:
        'Bentuk perintah 반말 juga sama: cukup buang 요 dari 해요체. 앉으세요 menjadi 앉아, 오세요 menjadi 와, 하세요 menjadi 해. Jadi 여기 앉아 berarti "duduk sini". Nadanya yang menentukan apakah itu terdengar ramah atau memerintah.',
    },
    {
      title: 'Perkecualian: 이에요/예요 menjadi 이야/야',
      form: 'kata benda + 이야 (ada 받침) · 야 (tanpa 받침)',
      body:
        'Kalimat "A adalah B" tidak mengikuti aturan buang-요. Bentuknya berubah sendiri, dan pembagian 받침-nya sama persis seperti 이에요/예요 dari Pelajaran 1.2.',
      table: {
        columns: ['해요체', '반말', 'Alasan bentuk'],
        rows: [
          ['학생이에요', '학생이야', '받침 ㅇ → 이야'],
          ['친구예요', '친구야', 'vokal → 야'],
          ['어디예요?', '어디야?', 'vokal → 야'],
          ['뭐예요?', '뭐야?', 'vokal → 야'],
          ['학생이 아니에요', '학생이 아니야', 'sangkalan juga berubah'],
        ],
      },
      examples: [
        { ko: '지금 어디야?', id: 'Sekarang di mana?' },
        { ko: '이게 뭐야?', id: 'Ini apa?' },
        { ko: '쟤는 내 친구야.', id: 'Dia itu temanku.' },
      ],
      mistakes: [
        {
          wrong: '지금 어디예?',
          right: '지금 어디야?',
          why: '이에요/예요 tidak bisa sekadar dibuang 요-nya; bentuk 반말-nya adalah 이야/야.',
        },
      ],
    },
    {
      title: '저 → 나, 제가 → 내가',
      body:
        'Beralih ke 반말 berarti ikut mengganti kata ganti orang pertama. Ini bukan pilihan gaya — memakai 저 dengan akhiran 반말 terdengar seperti dua tingkat bahasa bertabrakan.',
      table: {
        caption:
          '네 ("milikmu") dalam percakapan diucapkan [니], supaya tidak tertukar dengan 내 ("milikku").',
        columns: ['Sopan', '반말', 'Arti'],
        rows: [
          ['저', '나', 'saya / aku'],
          ['제가', '내가', 'saya (sebagai pelaku)'],
          ['저는', '나는 (난)', 'saya (sebagai topik)'],
          ['제', '내', 'milik saya'],
          ['— ', '너', 'kamu'],
          ['— ', '네 (니)', 'milikmu'],
        ],
      },
      examples: [
        { ko: '내가 할게.', id: 'Biar aku yang kerjakan.' },
        { ko: '이거 네 거야?', id: 'Ini punyamu?' },
        { ko: '난 안 갈래.', id: 'Aku nggak mau ikut.', note: '난 adalah bentuk pendek dari 나는.' },
      ],
      more:
        'Kata 너 ("kamu") hanya ada di 반말 — tidak ada padanannya yang sopan. Inilah sebabnya dalam 해요체 orang Korea memakai nama + 씨 atau tidak menyebut lawan bicara sama sekali, seperti yang kita bahas di Pelajaran 1.3.',
    },
    {
      title: 'Memanggil nama: 아 / 야',
      form: 'nama + 아 (ada 받침) · 야 (tanpa 받침)',
      body:
        'Dalam 반말, memanggil nama seseorang membutuhkan akhiran panggilan. Tanpa itu, memanggil nama saja terdengar terpotong.',
      table: {
        columns: ['Nama', 'Akhiran', 'Hasil', 'Alasan'],
        rows: [
          ['지훈', '아', '지훈아', '받침 ㄴ'],
          ['민호', '야', '민호야', 'berakhir vokal'],
          ['수진', '아', '수진아', '받침 ㄴ'],
          ['비오', '야', '비오야', 'berakhir vokal'],
        ],
      },
      examples: [
        { ko: '비오야, 밥 먹었어?', id: 'Vio, sudah makan?' },
        { ko: '수진아, 이것 좀 봐.', id: 'Sujin, lihat ini sebentar.' },
        { ko: '야, 어디 가?', id: 'Hei, mau ke mana?', note: '야 sendirian berarti "hei" — sangat akrab, bisa kasar kalau salah sasaran.' },
      ],
      mistakes: [
        {
          wrong: '수진 씨야, 밥 먹었어?',
          right: '수진아, 밥 먹었어?',
          why: '씨 adalah penanda sopan dan tidak pernah bercampur dengan 반말.',
        },
      ],
    },
    {
      title: 'Kapan 반말 TIDAK boleh dipakai',
      body:
        'Ini bagian yang lebih penting daripada tata bahasanya. Memakai 해요체 kepada teman dekat hanya terdengar sedikit berjarak — tidak masalah. Tetapi memakai 반말 kepada orang yang salah terdengar merendahkan, dan itu kesalahan sosial yang nyata.',
      table: {
        columns: ['Kepada siapa', '반말?', 'Catatan'],
        rows: [
          ['Teman sebaya yang akrab', 'Boleh', 'Setelah saling sepakat'],
          ['Adik, sepupu lebih muda', 'Boleh', ''],
          ['Anak kecil', 'Boleh', ''],
          ['Orang tua sendiri', 'Boleh', 'Umum di keluarga Korea'],
          ['Kakak kandung', 'Boleh', 'Tapi panggil 형/오빠/누나/언니'],
          ['Rekan kerja sebaya', 'Tunggu', 'Sampai ditawarkan'],
          ['Siapa pun yang lebih tua', 'Jangan', 'Meski sudah akrab'],
          ['Atasan, guru, pelanggan', 'Jangan', 'Tidak pernah'],
        ],
      },
      examples: [
        {
          ko: '우리 말 놓을까요?',
          id: 'Gimana kalau kita pakai bahasa santai saja?',
          note: 'Cara mengusulkan beralih ke 반말.',
        },
        {
          ko: '네, 말 놓으세요.',
          id: 'Boleh, silakan pakai bahasa santai.',
          note: 'Biasanya yang lebih tua yang mempersilakan lebih dulu.',
        },
      ],
      more:
        'Aturan praktisnya: jangan pernah MEMULAI 반말 sendiri kepada orang yang lebih tua, meskipun kalian sudah akrab. Tunggu sampai mereka berkata 말 놓으세요 atau 편하게 해. Sebaliknya, kalau seseorang yang lebih muda tiba-tiba memakai 반말 kepadamu tanpa izin, itu memang terasa kurang sopan bagi orang Korea — jadi perasaanmu tidak salah kalau merasa aneh.',
    },
  ],

  dialogue: {
    title: 'Di rumah, sore hari',
    situation: 'Vio baru pulang dan ibunya menyapa dari dapur.',
    lines: [
      {
        speaker: '엄마',
        ko: '비오야, 밥 먹었어?',
        id: 'Vio, sudah makan?',
        note: '비오 berakhir vokal, jadi panggilannya 비오야.',
      },
      { speaker: '비오', ko: '아니, 아직. 엄마는?', id: 'Belum. Ibu sendiri?' },
      {
        speaker: '엄마',
        ko: '나도 아직. 같이 먹을래?',
        id: 'Ibu juga belum. Mau makan bareng?',
        note: '먹을래? adalah 반말 dari 먹을래요? (Pelajaran 5.3).',
      },
      {
        speaker: '비오',
        ko: '응, 좋아. 내가 설거지할게.',
        id: 'Iya, boleh. Biar aku yang cuci piring.',
        note: '내가 — bentuk 반말 dari 제가. Dan 할게 dari 할게요.',
      },
      { speaker: '엄마', ko: '그래. 그런데 쓰레기 좀 버려 줘.', id: 'Oke. Tapi tolong buang sampahnya dong.' },
      {
        speaker: '비오',
        ko: '알았어. 이따가 할게.',
        id: 'Oke. Nanti aku kerjakan.',
        note: '알았어 adalah 반말 dari 알았어요 — "oke, mengerti".',
      },
      { speaker: '엄마', ko: '지금 해. 냄새 나.', id: 'Sekarang aja. Baunya kecium.' },
      { speaker: '비오', ko: '알았어, 알았어.', id: 'Iya, iya.' },
    ],
    politeness:
      'Perhatikan bahwa ibunya pun memakai 반말 kepada anaknya, dan anaknya membalas dengan 반말 juga — ini normal dalam keluarga Korea. Tetapi panggilannya tetap hormat: anak memanggil 엄마, bukan namanya. Dalam bahasa Korea, memanggil orang tua atau kakak dengan nama adalah hal yang tidak dilakukan.',
  },

  passage: {
    title: '동생한테 보낸 메시지',
    intro: 'Pesan chat ke adik — seluruhnya dalam 반말.',
    sentences: [
      { ko: '야, 지금 어디야?', id: 'Hei, sekarang di mana?' },
      { ko: '나 지금 집에 가.', id: 'Aku lagi jalan pulang.' },
      { ko: '저녁에 뭐 먹을래?', id: 'Malam mau makan apa?' },
      { ko: '내가 치킨 시킬게.', id: 'Biar aku yang pesan ayam.' },
      { ko: '그리고 네 방 좀 치워. 너무 더러워.', id: 'Dan bersihin kamarmu dong. Kotor banget.' },
      { ko: '엄마가 또 화냈어.', id: 'Ibu marah lagi.' },
    ],
    vocabInContext: [
      { ko: '치킨', id: 'ayam goreng' },
      { ko: '시키다', id: 'memesan' },
      { ko: '너무', id: 'terlalu, banget' },
      { ko: '화내다', id: 'marah' },
    ],
    analysis: [
      'Semua kalimat memakai 반말, dan semuanya dibentuk dengan membuang 요: 어디야 (dari 어디예요), 가 (dari 가요), 먹을래 (dari 먹을래요), 시킬게 (dari 시킬게요), 치워 (dari 치워요), 화냈어 (dari 화냈어요).',
      '어디야? memakai 야 karena 어디 berakhir vokal. Kalau kata bendanya berakhir konsonan, bentuknya 이야 — misalnya 학생이야.',
      '네 방 — 네 adalah "milikmu" dalam 반말. Dalam percakapan ia diucapkan [니] supaya tidak tertukar dengan 내 ("milikku") yang bunyinya terlalu mirip.',
      '내가 치킨 시킬게 — 내가 adalah bentuk 반말 dari 제가, dipakai karena menegaskan SIAPA yang akan memesan.',
      '야 di awal pesan berarti "hei". Ini hanya untuk adik atau teman yang sangat akrab — memakainya kepada orang yang lebih tua akan terdengar kasar.',
      '네 방 좀 치워 adalah perintah 반말, dibentuk dari 치워요 tanpa 요. Kata 좀 melembutkannya sedikit.',
    ],
  },

  exercises: [
    {
      id: 'm7l1-e1',
      kind: 'fill',
      prompt: 'Ubah ke bentuk 반말.',
      sentence: '밥 ___? (먹었어요)',
      translation: 'Sudah makan?',
      answers: ['먹었어'],
      explain:
        'Aturan utama 반말: buang 요 dari bentuk 해요체. 먹었어요 → 먹었어. Bentuk tanyanya tidak berubah — hanya nadanya yang naik.',
      tags: ['반말'],
    },
    {
      id: 'm7l1-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk 반말 yang tepat.',
      context: '어디 berakhir dengan vokal.',
      sentence: '지금 ___?',
      translation: 'Sekarang di mana?',
      options: ['어디야', '어디예', '어디이야', '어디어'],
      answer: '어디야',
      explain:
        '이에요/예요 adalah satu-satunya perkecualian dari aturan buang-요. Bentuk 반말-nya adalah 이야 (setelah konsonan) atau 야 (setelah vokal). 어디 berakhir vokal, jadi 어디야.',
      whyNot: {
        어디예: '예요 tidak bisa sekadar dibuang 요-nya — bentuknya berubah menjadi 야.',
        어디이야: '이야 dipakai setelah konsonan, misalnya 학생이야.',
        어디어: 'Bentuk ini tidak ada.',
      },
      tags: ['반말'],
    },
    {
      id: 'm7l1-e3',
      kind: 'correct',
      prompt: 'Kata ganti orangnya tidak cocok dengan tingkat bahasanya. Perbaiki.',
      sentence: '저 지금 좀 바빠.',
      translation: 'Aku lagi agak sibuk.',
      answers: ['나 지금 좀 바빠'],
      explain:
        'Akhiran 바빠 adalah 반말, jadi kata ganti orangnya harus ikut berubah: 저 → 나. Mencampur 저 dengan akhiran 반말 terdengar seperti dua tingkat bahasa bertabrakan.',
      tags: ['나 / 내가'],
    },
    {
      id: 'm7l1-e4',
      kind: 'match',
      prompt: 'Pasangkan bentuk sopan dengan bentuk 반말-nya.',
      pairs: [
        { left: '저는', right: '나는 (난)' },
        { left: '제가', right: '내가' },
        { left: '네 (ya)', right: '응 / 어' },
        { left: '아니요', right: '아니' },
        { left: '친구예요', right: '친구야' },
        { left: '학생이에요', right: '학생이야' },
      ],
      explain:
        'Perhatikan bahwa yang berubah bukan hanya akhiran kata kerjanya — kata ganti orang dan kata "ya/tidak" pun punya versi 반말 tersendiri.',
      tags: ['반말', '나 / 내가'],
    },
    {
      id: 'm7l1-e5',
      kind: 'fill',
      prompt: 'Lengkapi panggilan namanya.',
      context: '수진 berakhir dengan konsonan ㄴ.',
      sentence: '___, 이것 좀 봐.',
      translation: 'Sujin, lihat ini sebentar.',
      answers: ['수진아'],
      explain:
        'Dalam 반말, nama orang diberi akhiran panggilan: 아 kalau berakhir konsonan, 야 kalau berakhir vokal. 수진 punya 받침 ㄴ, jadi bentuknya 수진아.',
      tags: ['반말'],
    },
    {
      id: 'm7l1-e6',
      kind: 'build',
      prompt: 'Susun kalimat 반말 ini.',
      translation: 'Biar aku yang cuci piring.',
      tiles: ['내가', '설거지할게'],
      distractors: ['제가', '설거지할게요'],
      answers: ['내가 설거지할게'],
      explain:
        '내가 adalah bentuk 반말 dari 제가, dan 할게 adalah 할게요 tanpa 요. Keduanya harus konsisten — 제가 설거지할게 akan terdengar campur aduk.',
      parts: [
        { part: '내가', role: 'pelaku yang ditegaskan (반말 dari 제가)' },
        { part: '설거지할게', role: 'keputusan sendiri, 반말 dari 설거지할게요' },
      ],
      tags: ['나 / 내가'],
    },
    {
      id: 'm7l1-e7',
      kind: 'mc',
      prompt:
        'Rekan kerja barumu seumuran denganmu. Kalian baru kenal seminggu. Tingkat bahasa apa yang tepat?',
      options: [
        '해요체, sampai salah satu mengusulkan 말 놓을까요?',
        '반말, karena kalian seumuran.',
        '합쇼체 untuk seterusnya.',
        '반말 kalau berdua, 해요체 kalau ada orang lain.',
      ],
      answerIndex: 0,
      explain:
        'Seumuran saja tidak cukup — 반말 butuh kesepakatan. Mulailah dengan 해요체, lalu salah satu akan mengusulkan 말 놓을까요?. Memakai 해요체 terlalu lama hanya terdengar sedikit berjarak, sedangkan memakai 반말 terlalu cepat terasa kurang sopan.',
      whyNot: {
        '반말, karena kalian seumuran.': 'Seumuran memungkinkan 반말, tetapi tetap perlu disepakati dulu.',
        '합쇼체 untuk seterusnya.': 'Terlalu formal untuk rekan sebaya; terdengar seperti berpidato.',
        '반말 kalau berdua, 해요체 kalau ada orang lain.':
          'Berpindah-pindah tanpa kesepakatan justru membingungkan.',
      },
      tags: ['반말'],
    },
    {
      id: 'm7l1-e8',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea dengan 반말.',
      direction: 'id-ko',
      source: 'Malam mau makan apa?',
      answers: ['저녁에 뭐 먹을래?', '저녁에 뭐 먹어?'],
      explain:
        '먹을래? adalah bentuk 반말 dari 먹을래요?. Keterangan waktu 저녁 tetap memakai 에 — partikel tempat dan waktu tidak ikut hilang dalam 반말.',
      hint: 'Mulai dari bentuk 해요체-nya, lalu buang 요.',
      tags: ['-(으)ㄹ래?'],
    },
  ],

  quiz: [
    {
      id: 'm7l1-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat 반말 yang SEMUA bagiannya konsisten?',
      options: [
        '나 내일 친구 만날 거야.',
        '저 내일 친구 만날 거야.',
        '나 내일 친구 만날 거예요.',
        '제가 내일 친구 만날 거야.',
      ],
      answerIndex: 0,
      explain:
        'Dalam 반말, kata ganti orangnya 나 (bukan 저) dan akhirannya 거야 (bukan 거예요). Hanya pilihan pertama yang konsisten di kedua bagian.',
      whyNot: {
        '저 내일 친구 만날 거야.': '저 adalah bentuk sopan — bertabrakan dengan akhiran 반말.',
        '나 내일 친구 만날 거예요.': 'Kata gantinya 반말 tetapi akhirannya 해요체.',
        '제가 내일 친구 만날 거야.': '제가 adalah bentuk sopan; yang tepat adalah 내가.',
      },
      tags: ['반말', '나 / 내가'],
    },
    {
      id: 'm7l1-q2',
      kind: 'fill',
      prompt: 'Ubah ke bentuk 반말.',
      sentence: '이게 ___? (뭐예요)',
      translation: 'Ini apa?',
      answers: ['뭐야'],
      explain:
        '뭐 berakhir vokal, jadi bentuk 반말-nya 뭐야. Ingat bahwa 이에요/예요 tidak mengikuti aturan buang-요.',
      tags: ['반말'],
    },
    {
      id: 'm7l1-q3',
      kind: 'correct',
      prompt: 'Perbaiki panggilannya.',
      sentence: '수진 씨야, 밥 먹었어?',
      translation: 'Sujin, sudah makan?',
      answers: ['수진아, 밥 먹었어?'],
      explain:
        '씨 adalah penanda sopan dan tidak pernah bercampur dengan 반말. Dalam 반말, nama diberi akhiran panggilan: 수진 punya 받침, jadi 수진아.',
      tags: ['반말'],
    },
  ],

  summary: {
    points: [
      '반말 dibuat dengan membuang 요 dari bentuk 해요체: 가요 → 가, 먹었어요 → 먹었어.',
      'Perkecualiannya 이에요/예요 yang berubah menjadi 이야/야: 학생이야, 뭐야?',
      '저 → 나, 제가 → 내가. Kata ganti harus ikut berubah agar tidak campur aduk.',
      'Memanggil nama butuh akhiran: 수진아 (받침), 민호야 (vokal). Tidak pernah dengan 씨.',
      '네 ("milikmu") diucapkan [니] supaya tidak tertukar dengan 내 ("milikku").',
      'Jangan pernah memulai 반말 kepada orang yang lebih tua — tunggu sampai mereka berkata 말 놓으세요.',
      'Memakai 해요체 terlalu lama hanya terasa berjarak; memakai 반말 terlalu cepat terasa merendahkan.',
    ],
    pitfalls: [
      {
        wrong: '저 지금 바빠.',
        right: '나 지금 바빠.',
        why: 'Kata ganti sopan 저 bertabrakan dengan akhiran 반말.',
      },
      {
        wrong: '지금 어디예?',
        right: '지금 어디야?',
        why: '예요 tidak bisa sekadar dibuang 요-nya; bentuknya menjadi 야.',
      },
      {
        wrong: '수진 씨야, 어디 가?',
        right: '수진아, 어디 가?',
        why: '씨 adalah penanda sopan dan tidak dipakai dalam 반말.',
      },
    ],
  },
}
