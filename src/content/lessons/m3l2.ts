import type { Lesson } from '../../types/curriculum'

export const m3l2: Lesson = {
  id: 'm3-l2',
  moduleId: 'm3',
  number: '3.2',
  title: 'Kemarin dan besok',
  subtitle: 'Bentuk lampau 았/었어요 dan rencana -(으)ㄹ 거예요',
  objective:
    'Setelah pelajaran ini kamu bisa menceritakan apa yang sudah terjadi dan apa yang akan kamu lakukan — dengan satu jalan pintas yang membuat bentuk lampau jadi mudah.',
  focus: ['았/었어요', '(으)ㄹ 거예요'],
  estimatedMinutes: 16,

  coreExamples: [
    {
      ko: '어제 친구를 만났어요.',
      id: 'Kemarin saya bertemu teman.',
      highlight: ['만났어요'],
      highlightKind: 'ending',
    },
    {
      ko: '아침에 커피를 마셨어요.',
      id: 'Pagi tadi saya minum kopi.',
      highlight: ['마셨어요'],
      highlightKind: 'ending',
    },
    {
      ko: '주말에 아주 바빴어요.',
      id: 'Akhir pekan lalu saya sangat sibuk.',
      highlight: ['바빴어요'],
      highlightKind: 'ending',
    },
    {
      ko: '내일 회사에 갈 거예요.',
      id: 'Besok saya akan pergi ke kantor.',
      highlight: ['갈 거예요'],
      highlightKind: 'ending',
    },
    {
      ko: '저녁에 한국 음식을 먹을 거예요.',
      id: 'Malam nanti saya akan makan makanan Korea.',
      highlight: ['먹을 거예요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '아침에 커피를 마셨어요.',
        id: 'Pagi tadi saya minum kopi.',
        highlight: ['마셨어요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '아침에', formula: '아침 + 에', meaning: 'Pada pagi hari — keterangan waktu' },
        { unit: '커피를', formula: '커피 + 를', meaning: 'Kopi — objek' },
        {
          unit: '마셨어요',
          formula: '마셔요 → 마셔 + ㅆ어요',
          meaning: 'Minum, bentuk lampau',
        },
      ],
      why:
        'Inilah jalan pintasnya, dan ia bekerja untuk hampir semua kata kerja: ambil bentuk 해요체 yang sudah kamu kuasai, buang 요-nya, lalu tambahkan ㅆ어요 pada suku kata terakhir. 마셔요 → 마셔 → 마셨어요. Kamu tidak perlu mengulang seluruh perhitungan vokal dari bentuk kamus — semua penggabungan bunyi sudah selesai di bentuk 해요체.',
      swaps: [
        {
          alt: '가요 → 갔어요',
          effect: '"Pergi" menjadi "sudah pergi". Pola yang sama persis.',
        },
        {
          alt: '해요 → 했어요',
          effect: 'Semua kata berakhiran 하다 menjadi 했어요. Ini kelompok terbesar.',
        },
        {
          alt: '먹어요 → 먹었어요',
          effect: 'Batang berakhir konsonan, jadi bentuknya lebih panjang — tetapi polanya tetap sama.',
        },
      ],
    },
    {
      sentence: {
        ko: '저녁에 한국 음식을 먹을 거예요.',
        id: 'Malam nanti saya akan makan makanan Korea.',
        highlight: ['먹을 거예요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '저녁에', formula: '저녁 + 에', meaning: 'Pada malam hari' },
        { unit: '한국 음식을', formula: '한국 음식 + 을', meaning: 'Makanan Korea — objek' },
        {
          unit: '먹을 거예요',
          formula: '먹다 → 먹 + 을 거예요',
          meaning: 'Akan makan; batang berakhir konsonan, jadi memakai 을',
        },
      ],
      why:
        'Bentuk rencana dibuat dari BATANG kata, bukan dari bentuk 해요체. Kalau batangnya berakhir konsonan, tambahkan 을 거예요; kalau berakhir vokal, tambahkan ㄹ 거예요 yang ditulis menyatu dengan suku kata terakhir. Perhatikan bahwa 거예요 ditulis TERPISAH dengan spasi — ini kesalahan ejaan yang sering terjadi.',
      swaps: [
        {
          alt: '가다 → 갈 거예요',
          effect:
            'Batangnya 가 berakhir vokal, jadi ㄹ ditempelkan langsung pada 가 menjadi 갈.',
        },
        {
          alt: '저녁에 한국 음식을 먹어요.',
          effect:
            'Bentuk sekarang. Dalam bahasa Korea, bentuk sekarang juga sering dipakai untuk rencana yang sudah pasti — mirip "besok saya makan di luar" dalam bahasa Indonesia.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '어제', id: 'kemarin', pos: 'kata benda', note: 'Tidak memakai 에.' },
    { ko: '내일', id: 'besok', pos: 'kata benda', note: 'Tidak memakai 에.' },
    { ko: '다음 주', id: 'minggu depan', pos: 'kata benda' },
    { ko: '지난주', id: 'minggu lalu', pos: 'kata benda' },
    { ko: '계획', id: 'rencana', pos: 'kata benda' },
    { ko: '여행하다', id: 'berwisata, bepergian', pos: 'kata kerja', note: '→ 여행해요 / 여행했어요' },
    { ko: '준비하다', id: 'bersiap, menyiapkan', pos: 'kata kerja', note: '→ 준비해요' },
    { ko: '만들다', id: 'membuat', pos: 'kata kerja', note: '→ 만들어요 / 만들 거예요' },
    { ko: '늦다', id: 'terlambat', pos: 'kata kerja', note: '→ 늦어요 / 늦었어요' },
    { ko: '재미있다', id: 'menyenangkan', pos: 'kata sifat', note: '→ 재미있어요 / 재미있었어요' },
  ],

  grammar: [
    {
      title: 'Jalan pintas bentuk lampau',
      form: 'bentuk 해요체 − 요 + ㅆ어요',
      body:
        'Daripada menghitung ulang vokal dari bentuk kamus, pakai bentuk 해요체 yang sudah kamu kuasai. Buang 요, lalu tambahkan ㅆ sebagai 받침 pada suku kata terakhir, lalu 어요.',
      table: {
        columns: ['Bentuk kamus', '해요체', 'Lampau', 'Arti'],
        rows: [
          ['가다', '가요', '갔어요', 'pergi'],
          ['마시다', '마셔요', '마셨어요', 'minum'],
          ['보다', '봐요', '봤어요', 'melihat'],
          ['먹다', '먹어요', '먹었어요', 'makan'],
          ['하다', '해요', '했어요', 'melakukan'],
          ['오다', '와요', '왔어요', 'datang'],
          ['바쁘다', '바빠요', '바빴어요', 'sibuk'],
          ['덥다', '더워요', '더웠어요', 'panas'],
        ],
      },
      examples: [
        { ko: '어제 영화를 봤어요.', id: 'Kemarin saya menonton film.' },
        { ko: '점심을 먹었어요?', id: 'Sudah makan siang?' },
      ],
      more:
        'Perhatikan bahwa kata sifat juga punya bentuk lampau, dan ini terasa aneh bagi penutur bahasa Indonesia: 바빴어요 berarti "(saya) sibuk" pada waktu lampau — bukan "menjadi sibuk". Begitu pula 좋았어요 ("bagus, waktu itu") dan 재미있었어요 ("menyenangkan, waktu itu"). Bentuk inilah yang kamu pakai untuk menceritakan kesan tentang sesuatu yang sudah lewat.',
    },
    {
      title: 'Bentuk lampau untuk kata benda',
      form: 'kata benda + 이었어요 / 였어요',
      body:
        'Kalimat "A adalah B" juga punya bentuk lampau. Aturannya sama seperti 이에요/예요: ada 받침 → 이었어요, tanpa 받침 → 였어요.',
      table: {
        columns: ['Kata benda', 'Sekarang', 'Lampau', 'Arti'],
        rows: [
          ['학생', '학생이에요', '학생이었어요', 'adalah pelajar'],
          ['의사', '의사예요', '의사였어요', 'adalah dokter'],
          ['회사원', '회사원이에요', '회사원이었어요', 'adalah karyawan'],
        ],
      },
      examples: [
        { ko: '저는 전에 학생이었어요.', id: 'Dulu saya seorang pelajar.' },
        { ko: '조용한 주말이었어요.', id: 'Akhir pekan yang tenang.' },
      ],
    },
    {
      title: 'Rencana: -(으)ㄹ 거예요',
      form: 'batang + ㄹ 거예요 (vokal) · 을 거예요 (konsonan)',
      body:
        'Bentuk ini menyatakan rencana atau dugaan. Dibuat dari BATANG kata, bukan dari bentuk 해요체. Dan 거예요 selalu ditulis terpisah dengan spasi.',
      table: {
        caption:
          'Batang berakhiran ㄹ (살다, 만들다) tidak perlu tambahan apa pun: 살 거예요, 만들 거예요.',
        columns: ['Bentuk kamus', 'Batang', 'Rencana', 'Arti'],
        rows: [
          ['가다', '가', '갈 거예요', 'akan pergi'],
          ['보다', '보', '볼 거예요', 'akan menonton'],
          ['하다', '하', '할 거예요', 'akan melakukan'],
          ['먹다', '먹', '먹을 거예요', 'akan makan'],
          ['읽다', '읽', '읽을 거예요', 'akan membaca'],
          ['만들다', '만들', '만들 거예요', 'akan membuat'],
        ],
      },
      examples: [
        { ko: '내일 친구를 만날 거예요.', id: 'Besok saya akan bertemu teman.' },
        { ko: '다음 주에 한국에 갈 거예요.', id: 'Minggu depan saya akan pergi ke Korea.' },
      ],
      mistakes: [
        {
          wrong: '갈거예요',
          right: '갈 거예요',
          why: '거 adalah kata benda (singkatan dari 것), jadi ditulis terpisah.',
        },
        {
          wrong: '가요 거예요',
          right: '갈 거예요',
          why: 'Bentuk ini dibuat dari batang kata, bukan dari bentuk 해요체.',
        },
      ],
      more:
        'Ketika subjeknya orang ketiga, -(으)ㄹ 거예요 berubah makna menjadi dugaan: 민호 씨가 늦을 거예요 berarti "Minho sepertinya akan terlambat", bukan "Minho berencana terlambat". Jadi satu bentuk ini melayani dua makna — rencana untuk diri sendiri, dugaan untuk orang lain.',
    },
    {
      title: 'Bentuk sekarang juga bisa berarti masa depan',
      body:
        'Sama seperti bahasa Indonesia, bahasa Korea sering memakai bentuk sekarang untuk rencana yang sudah pasti dan dekat. Tidak semua kalimat tentang besok harus memakai -(으)ㄹ 거예요.',
      examples: [
        { ko: '내일 세 시에 만나요.', id: 'Besok kita bertemu jam tiga.', note: 'Janji yang sudah disepakati.' },
        { ko: '내일 세 시에 만날 거예요.', id: 'Besok saya akan bertemu (seseorang) jam tiga.', note: 'Menceritakan rencana.' },
      ],
      more:
        'Perbedaannya halus. Bentuk sekarang terdengar seperti kesepakatan bersama atau jadwal yang sudah tetap; -(으)ㄹ 거예요 terdengar seperti rencana pribadi yang sedang kamu ceritakan. Untuk mengajak seseorang, bentuk sekarang justru lebih alami: 같이 점심 먹어요.',
    },
  ],

  dialogue: {
    title: 'Membicarakan akhir pekan',
    situation: 'Senin pagi di kantor. Minho menanyakan akhir pekan Vio.',
    lines: [
      { speaker: '민호', ko: '주말에 뭐 했어요?', id: 'Akhir pekan ngapain?' },
      {
        speaker: '비오',
        ko: '토요일에는 집에서 쉬었어요. 일요일에는 친구를 만났어요.',
        id: 'Sabtu saya istirahat di rumah. Minggu saya bertemu teman.',
        note: '쉬어요 → 쉬었어요, 만나요 → 만났어요.',
      },
      { speaker: '민호', ko: '친구하고 뭐 했어요?', id: 'Ngapain sama temannya?' },
      {
        speaker: '비오',
        ko: '한국 영화를 봤어요. 정말 재미있었어요.',
        id: 'Kami menonton film Korea. Sungguh menyenangkan.',
        note: '재미있었어요 — kata sifat pun punya bentuk lampau.',
      },
      { speaker: '민호', ko: '좋네요. 다음 주말에는 뭐 할 거예요?', id: 'Enak, ya. Akhir pekan depan mau apa?' },
      {
        speaker: '비오',
        ko: '아직 계획이 없어요. 아마 집에서 한국어를 공부할 거예요.',
        id: 'Belum ada rencana. Mungkin saya akan belajar bahasa Korea di rumah.',
        note: '아마 ("mungkin") sering berpasangan dengan -(으)ㄹ 거예요.',
      },
    ],
    politeness:
      '뭐 했어요? adalah sapaan Senin pagi yang sangat umum di kantor Korea — setara dengan "akhir pekan ngapain?" dalam bahasa Indonesia. Jawaban singkat sudah cukup; tidak perlu cerita panjang.',
  },

  passage: {
    title: '지난 주말',
    intro: 'Catatan pendek tentang akhir pekan yang baru lewat.',
    sentences: [
      { ko: '지난 주말에 부산에 갔어요.', id: 'Akhir pekan lalu saya pergi ke Busan.' },
      { ko: '친구하고 같이 기차로 갔어요.', id: 'Saya pergi naik kereta bersama teman.' },
      { ko: '바다를 봤어요. 날씨가 아주 좋았어요.', id: 'Kami melihat laut. Cuacanya sangat bagus.' },
      { ko: '저녁에는 생선을 먹었어요. 정말 맛있었어요.', id: 'Malamnya kami makan ikan. Sungguh enak.' },
      { ko: '조금 피곤했어요. 하지만 아주 즐거웠어요.', id: 'Agak lelah. Tapi sangat menyenangkan.' },
      { ko: '다음 달에 또 갈 거예요.', id: 'Bulan depan saya akan pergi lagi.' },
    ],
    vocabInContext: [
      { ko: '바다', id: 'laut' },
      { ko: '생선', id: 'ikan (untuk dimakan)' },
      { ko: '피곤하다', id: 'lelah' },
      { ko: '즐겁다', id: 'menyenangkan, gembira' },
      { ko: '또', id: 'lagi' },
    ],
    analysis: [
      '갔어요, 봤어요, 먹었어요 — tiga kata kerja dalam bentuk lampau, semuanya dibentuk dari 해요체 masing-masing (가요, 봐요, 먹어요).',
      '좋았어요, 맛있었어요, 피곤했어요, 즐거웠어요 — semuanya KATA SIFAT dalam bentuk lampau. Inilah cara Korea menceritakan kesan tentang sesuatu yang sudah lewat.',
      '즐거웠어요 berasal dari 즐겁다, kata ber-ㅂ tidak beraturan: 즐겁 → 즐거워요 → 즐거웠어요.',
      'Kalimat terakhir memakai 갈 거예요 — rencana, dibentuk dari batang 가 + ㄹ 거예요.',
      '지난 주말에 memakai 에 (titik waktu), tetapi 다음 달에 juga begitu. Yang tidak memakai 에 hanyalah 오늘, 어제, 내일, 지금, 매일.',
    ],
  },

  exercises: [
    {
      id: 'm3l2-e1',
      kind: 'fill',
      prompt: 'Ubah ke bentuk lampau.',
      sentence: '어제 친구를 ___. (만나다)',
      translation: 'Kemarin saya bertemu teman.',
      answers: ['만났어요'],
      explain:
        '만나다 → 만나요 (해요체) → buang 요 → tambahkan ㅆ어요 → 만났어요.',
      hint: 'Mulai dari bentuk 해요체-nya: 만나요.',
      tags: ['았/었어요'],
    },
    {
      id: 'm3l2-e2',
      kind: 'fill',
      prompt: 'Ubah ke bentuk lampau.',
      sentence: '점심을 ___? (먹다)',
      translation: 'Sudah makan siang?',
      answers: ['먹었어요'],
      explain:
        '먹다 → 먹어요 → 먹었어요. Karena batangnya berakhir konsonan, bentuk 해요체-nya dua suku kata, dan bentuk lampaunya tiga.',
      tags: ['았/었어요'],
    },
    {
      id: 'm3l2-e3',
      kind: 'particle',
      prompt: 'Pilih bentuk rencana yang benar untuk 먹다.',
      context: 'Kamu menceritakan rencana makan malammu.',
      sentence: '저녁에 한국 음식을 ___.',
      translation: 'Malam nanti saya akan makan makanan Korea.',
      options: ['먹을 거예요', '먹 거예요', '먹어요 거예요', '먹을거예요'],
      answer: '먹을 거예요',
      explain:
        'Batangnya 먹 berakhir konsonan, jadi memakai 을 거예요. Dan 거예요 ditulis TERPISAH dengan spasi.',
      whyNot: {
        '먹 거예요': 'Batang yang berakhir konsonan membutuhkan 을 sebagai penyambung.',
        '먹어요 거예요': 'Bentuk ini dibuat dari batang kata, bukan dari bentuk 해요체.',
        먹을거예요: 'Ejaannya salah — 거 adalah kata benda, jadi ditulis terpisah.',
      },
      tags: ['(으)ㄹ 거예요'],
    },
    {
      id: 'm3l2-e4',
      kind: 'match',
      prompt: 'Pasangkan bentuk 해요체 dengan bentuk lampaunya.',
      pairs: [
        { left: '가요', right: '갔어요' },
        { left: '봐요', right: '봤어요' },
        { left: '마셔요', right: '마셨어요' },
        { left: '먹어요', right: '먹었어요' },
        { left: '해요', right: '했어요' },
        { left: '바빠요', right: '바빴어요' },
      ],
      explain:
        'Polanya selalu sama: buang 요, tambahkan ㅆ sebagai 받침, lalu 어요. Karena semua penggabungan vokal sudah selesai di bentuk 해요체, kamu tidak perlu menghitung ulang apa pun.',
      tags: ['았/었어요'],
    },
    {
      id: 'm3l2-e5',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Akhir pekan lalu saya menonton film Korea bersama teman.',
      tiles: ['지난 주말에', '친구하고', '한국 영화를', '봤어요'],
      distractors: ['볼 거예요', '친구를'],
      answers: ['지난 주말에 친구하고 한국 영화를 봤어요'],
      explain:
        '봤어요 adalah bentuk lampau dari 봐요. 친구하고 berarti "bersama teman" — bukan 친구를, karena yang ditonton adalah filmnya.',
      parts: [
        { part: '지난 주말에', role: 'keterangan waktu lampau dengan 에' },
        { part: '친구하고', role: '"bersama teman"' },
        { part: '한국 영화를', role: 'objek yang ditonton' },
        { part: '봤어요', role: '보다 → 봐요 → 봤어요' },
      ],
      tags: ['았/었어요'],
    },
    {
      id: 'm3l2-e6',
      kind: 'correct',
      prompt: 'Perbaiki bentuk rencananya.',
      sentence: '내일 회사에 가요 거예요.',
      translation: 'Besok saya akan pergi ke kantor.',
      answers: ['내일 회사에 갈 거예요'],
      explain:
        'Bentuk -(으)ㄹ 거예요 dibuat dari BATANG kata, bukan dari bentuk 해요체. Batang 가다 adalah 가, berakhir vokal, jadi ㄹ ditempelkan langsung menjadi 갈 거예요.',
      tags: ['(으)ㄹ 거예요'],
    },
    {
      id: 'm3l2-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Akhir pekan lalu saya sangat sibuk.',
      answers: [
        '지난 주말에 아주 바빴어요',
        '지난 주말에 정말 바빴어요',
        '저는 지난 주말에 아주 바빴어요',
      ],
      explain:
        '바쁘다 adalah kata sifat, dan kata sifat pun punya bentuk lampau: 바빠요 → 바빴어요. Inilah cara Korea menyatakan "waktu itu saya sibuk".',
      hint: 'Kata sifat juga dikonjugasi ke bentuk lampau.',
      tags: ['았/었어요'],
    },
  ],

  quiz: [
    {
      id: 'm3l2-q1',
      kind: 'mc',
      prompt: 'Manakah bentuk lampau yang benar untuk 공부하다?',
      options: ['공부했어요', '공부하었어요', '공부해었어요', '공부했아요'],
      answerIndex: 0,
      explain:
        '공부하다 → 공부해요 → buang 요 → tambahkan ㅆ어요 → 공부했어요. Semua kata berakhiran 하다 mengikuti pola ini.',
      tags: ['았/었어요'],
    },
    {
      id: 'm3l2-q2',
      kind: 'fill',
      prompt: 'Ubah 만들다 ke bentuk rencana.',
      sentence: '주말에 한국 음식을 ___.',
      translation: 'Akhir pekan saya akan membuat makanan Korea.',
      answers: ['만들 거예요'],
      explain:
        'Batang 만들다 adalah 만들, yang sudah berakhir dengan ㄹ. Dalam kasus ini tidak perlu menambahkan apa pun — langsung 만들 거예요.',
      tags: ['(으)ㄹ 거예요'],
    },
    {
      id: 'm3l2-q3',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Minggu depan saya akan pergi ke Korea.',
      tiles: ['다음 주에', '한국에', '갈 거예요'],
      distractors: ['갔어요', '한국에서'],
      answers: ['다음 주에 한국에 갈 거예요'],
      explain:
        '한국에 memakai 에 karena Korea adalah tujuan. 갈 거예요 dibentuk dari batang 가 + ㄹ 거예요, ditulis dengan spasi sebelum 거예요.',
      parts: [
        { part: '다음 주에', role: 'keterangan waktu' },
        { part: '한국에', role: 'tujuan perjalanan' },
        { part: '갈 거예요', role: 'rencana: 가 + ㄹ 거예요' },
      ],
      tags: ['(으)ㄹ 거예요'],
    },
  ],

  summary: {
    points: [
      'Bentuk lampau paling mudah dibuat dari 해요체: buang 요, tambahkan ㅆ어요.',
      'Kata sifat juga punya bentuk lampau: 바빴어요, 좋았어요, 재미있었어요.',
      'Kata benda memakai 이었어요 (ada 받침) atau 였어요 (tanpa 받침).',
      'Rencana memakai -(으)ㄹ 거예요, dibentuk dari BATANG kata — bukan dari 해요체.',
      '거예요 selalu ditulis terpisah dengan spasi.',
      'Untuk rencana yang sudah pasti, bentuk sekarang juga sering dipakai: 내일 세 시에 만나요.',
    ],
    pitfalls: [
      {
        wrong: '가요 거예요',
        right: '갈 거예요',
        why: 'Bentuk rencana dibuat dari batang kata, bukan dari bentuk 해요체.',
      },
      {
        wrong: '갈거예요',
        right: '갈 거예요',
        why: '거 adalah kata benda, jadi ditulis terpisah dengan spasi.',
      },
      {
        wrong: '어제 바빠요.',
        right: '어제 바빴어요.',
        why: 'Kata sifat pun harus dikonjugasi ke bentuk lampau.',
      },
    ],
  },
}
