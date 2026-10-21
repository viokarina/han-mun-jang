import type { Lesson } from '../../types/curriculum'

export const m2l6: Lesson = {
  id: 'm2-l6',
  moduleId: 'm2',
  number: '2.6',
  title: '도 & 만 — juga dan hanya',
  subtitle: 'Partikel yang mengusir partikel lain — tapi tidak semuanya',
  objective:
    'Setelah pelajaran ini kamu bisa menyatakan "juga" dan "hanya" di posisi yang tepat, dan tahu partikel mana yang hilang dan mana yang bertahan.',
  focus: ['도', '만'],
  estimatedMinutes: 14,

  coreExamples: [
    { ko: '저도 커피를 마셔요.', id: 'Saya juga minum kopi.', highlight: ['도'] },
    { ko: '저는 커피도 마셔요.', id: 'Saya minum kopi juga.', highlight: ['도'] },
    { ko: '저는 물만 마셔요.', id: 'Saya hanya minum air putih.', highlight: ['만'] },
    { ko: '주말에도 일해요.', id: 'Akhir pekan pun saya bekerja.', highlight: ['에도'] },
    { ko: '주말에만 쉬어요.', id: 'Saya hanya istirahat di akhir pekan.', highlight: ['에만'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저도 커피를 마셔요.',
        id: 'Saya juga minum kopi.',
        highlight: ['도'],
      },
      rows: [
        {
          unit: '저도',
          formula: '저 + 는 → 저 + 도',
          meaning: 'Saya juga; 도 mengambil tempat 는',
        },
        { unit: '커피를', formula: '커피 + 를', meaning: 'Kopi — objek, partikelnya tetap' },
        { unit: '마셔요', formula: '마시다 → 마셔요', meaning: 'Minum, 해요체' },
      ],
      why:
        'Letak 도 menentukan APA yang "juga". Di sini 도 menempel pada 저, jadi yang ditambahkan ke daftar adalah ORANGNYA: sebelumnya ada orang lain yang minum kopi, dan saya ikut. Perhatikan bahwa 는 menghilang — 저는도 tidak ada — tetapi partikel objek 를 pada kata lain tetap utuh.',
      swaps: [
        {
          alt: '저는 커피도 마셔요.',
          effect:
            'Sekarang yang "juga" adalah minumannya: saya minum hal lain, dan kopi termasuk salah satunya. Kalimatnya hampir sama, tetapi maknanya berpindah hanya karena letak 도.',
        },
        {
          alt: '저만 커피를 마셔요.',
          effect: '"Hanya saya yang minum kopi" — 만 menempati posisi yang sama dengan 도.',
        },
      ],
    },
    {
      sentence: {
        ko: '주말에도 일해요.',
        id: 'Akhir pekan pun saya bekerja.',
        highlight: ['에도'],
      },
      rows: [
        {
          unit: '주말에도',
          formula: '주말 + 에 + 도',
          meaning: 'Bahkan di akhir pekan; 에 tetap, lalu 도 ditempelkan di belakangnya',
        },
        { unit: '일해요', formula: '일하다 → 일해요', meaning: 'Bekerja, 해요체' },
      ],
      why:
        'Inilah aturan yang paling sering salah. 도 dan 만 mengusir 은/는, 이/가, dan 을/를 — tetapi TIDAK mengusir partikel tempat dan waktu. 에, 에서, 한테, 로 semuanya bertahan, dan 도/만 ditumpuk di belakangnya: 에도, 에서도, 한테도, 에만, 에서만.',
      swaps: [
        {
          alt: '주말도 일해요.',
          effect:
            'Terdengar seperti "akhir pekan pun bekerja" dengan akhir pekannya sebagai pelaku — janggal. Keterangan waktu tetap butuh 에.',
        },
        {
          alt: '주말에만 일해요.',
          effect: '"Saya hanya bekerja di akhir pekan" — polanya sama, hanya 도 diganti 만.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '물', id: 'air (minum)', pos: 'kata benda' },
    { ko: '우유', id: 'susu', pos: 'kata benda' },
    { ko: '빵', id: 'roti', pos: 'kata benda' },
    { ko: '운동하다', id: 'berolahraga', pos: 'kata kerja', note: '해요체: 운동해요.' },
    { ko: '요리하다', id: 'memasak', pos: 'kata kerja', note: '해요체: 요리해요.' },
    { ko: '가끔', id: 'kadang-kadang', pos: 'kata keterangan' },
    { ko: '항상', id: 'selalu', pos: 'kata keterangan' },
    { ko: '조금', id: 'sedikit', pos: 'kata keterangan' },
    { ko: '아주', id: 'sangat', pos: 'kata keterangan' },
    { ko: '다이어트', id: 'diet', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: 'Partikel yang diusir, partikel yang bertahan',
      form: '도 / 만 menggantikan 은/는, 이/가, 을/를 — tetapi menumpuk pada 에, 에서, 한테, 로',
      body:
        'Ini satu-satunya aturan yang benar-benar perlu kamu hafal dari pelajaran ini. Partikel "peran dasar" (topik, subjek, objek) menghilang; partikel "tempat dan arah" bertahan.',
      table: {
        columns: ['Dasar', '+ 도', '+ 만', 'Catatan'],
        rows: [
          ['저는', '저도', '저만', '는 hilang'],
          ['커피가', '커피도', '커피만', '가 hilang'],
          ['밥을', '밥도', '밥만', '을 hilang'],
          ['주말에', '주말에도', '주말에만', '에 bertahan'],
          ['집에서', '집에서도', '집에서만', '에서 bertahan'],
          ['친구한테', '친구한테도', '친구한테만', '한테 bertahan'],
        ],
      },
      mistakes: [
        { wrong: '저는도 가요.', right: '저도 가요.', why: '는 harus dilepas sebelum 도.' },
        { wrong: '밥을만 먹어요.', right: '밥만 먹어요.', why: '을 harus dilepas sebelum 만.' },
        {
          wrong: '주말도 일해요.',
          right: '주말에도 일해요.',
          why: 'Keterangan waktu tetap butuh 에; 도 ditumpuk di belakangnya.',
        },
      ],
    },
    {
      title: 'Letak 도 mengubah arti',
      body:
        'Karena 도 bisa menempel pada hampir kata benda mana pun dalam kalimat, letaknya menentukan maknanya. Bacalah kalimat dengan pertanyaan "apa yang ditambahkan ke daftar?"',
      examples: [
        {
          ko: '저도 빵을 먹어요.',
          id: 'Saya juga makan roti.',
          highlight: ['도'],
          note: 'Orang lain makan roti, saya ikut. Yang ditambahkan: ORANGNYA.',
        },
        {
          ko: '저는 빵도 먹어요.',
          id: 'Saya makan roti juga.',
          highlight: ['도'],
          note: 'Saya makan hal lain, roti termasuk. Yang ditambahkan: MAKANANNYA.',
        },
        {
          ko: '집에서도 빵을 먹어요.',
          id: 'Di rumah pun saya makan roti.',
          highlight: ['에서도'],
          note: 'Yang ditambahkan: TEMPATNYA.',
        },
      ],
      more:
        '도 juga punya makna "bahkan" yang lebih kuat, terutama untuk sesuatu yang mengejutkan: 비까지 왔어요 dan 비도 왔어요 sama-sama bisa berarti "bahkan hujan pun turun". Dan dalam kalimat penyangkalan, 도 berarti "pun tidak": 물도 안 마셨어요 ("air pun tidak saya minum").',
    },
    {
      title: '만 — hanya, saja',
      form: 'kata benda + 만',
      body:
        '만 membatasi: dari semua kemungkinan, hanya yang ini. Bentuknya tidak pernah berubah, tidak peduli ada 받침 atau tidak.',
      examples: [
        { ko: '저는 물만 마셔요.', id: 'Saya hanya minum air putih.', highlight: ['만'] },
        { ko: '한 명만 왔어요.', id: 'Hanya satu orang yang datang.', highlight: ['만'] },
        {
          ko: '주말에만 쉬어요.',
          id: 'Saya hanya istirahat di akhir pekan.',
          highlight: ['에만'],
        },
      ],
      mistakes: [
        {
          wrong: '저만은 커피를 마셔요.',
          right: '저만 커피를 마셔요.',
          why: 'Menumpuk 만 dengan 은 di sini membuat kalimatnya janggal. (Bentuk 만은 ada, tetapi dipakai untuk penekanan khusus yang jarang muncul di tingkat ini.)',
        },
      ],
      more:
        '만 juga sering dipakai dengan kata kerja untuk membatasi kegiatan, lewat pola -기만 하다: 듣기만 해요 ("saya hanya mendengarkan"). Pola itu belum perlu sekarang, tetapi akan terasa akrab kalau kamu sudah terbiasa dengan 만 pada kata benda.',
    },
    {
      title: 'Menjawab dengan 도',
      body:
        'Dalam percakapan, 도 sangat sering dipakai sendirian sebagai jawaban pendek. Ini cara paling alami untuk menyatakan "saya juga".',
      examples: [
        {
          ko: 'A: 저는 커피를 좋아해요.  B: 저도요.',
          id: 'A: Saya suka kopi.  B: Saya juga.',
          note: '저도요 = 저도 + 요 (akhiran sopan). Sangat lazim.',
        },
        {
          ko: 'A: 반가워요.  B: 저도 반가워요.',
          id: 'A: Senang bertemu.  B: Saya juga senang bertemu.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Memesan minuman saat diet',
    situation: 'Tiga rekan kerja memesan di kafe. Vio sedang menjaga pola makan.',
    lines: [
      { speaker: '수진', ko: '저는 아메리카노 마실게요.', id: 'Saya mau americano.' },
      {
        speaker: '민호',
        ko: '저도 아메리카노요.',
        id: 'Saya juga americano.',
        note: '저도 — yang "juga" adalah orangnya. 요 di akhir membuatnya tetap sopan meski kalimatnya pendek.',
      },
      {
        speaker: '비오',
        ko: '저는 물만 마셔요. 요즘 다이어트해요.',
        id: 'Saya hanya minum air. Akhir-akhir ini saya sedang diet.',
        note: '물만 — 만 menggantikan partikel objek 을.',
      },
      { speaker: '수진', ko: '아, 그래요? 저도 가끔 다이어트해요.', id: 'Oh, begitu? Saya kadang-kadang juga diet.' },
      {
        speaker: '민호',
        ko: '저는 주말에만 운동해요. 평일에는 시간이 없어요.',
        id: 'Kalau saya, hanya olahraga di akhir pekan. Hari kerja tidak ada waktu.',
        note: '주말에만 — 에 bertahan, 만 ditumpuk. 평일에는 — 에 bertahan, 는 ditumpuk.',
      },
    ],
    politeness:
      'Kalimat pendek seperti 저도 아메리카노요 sangat umum saat memesan. Akhiran 요 bisa ditempelkan hampir pada apa saja untuk menjaga kesopanan tanpa membuat kalimat penuh.',
  },

  passage: {
    title: '제 룸메이트',
    intro: 'Dua orang dengan kebiasaan berbeda — tempat 도 dan 만 paling berguna.',
    sentences: [
      { ko: '저는 룸메이트하고 같이 살아요.', id: 'Saya tinggal bersama teman sekamar.' },
      { ko: '저는 아침에 커피를 마셔요.', id: 'Saya minum kopi di pagi hari.' },
      { ko: '룸메이트도 커피를 마셔요.', id: 'Teman sekamar saya juga minum kopi.' },
      { ko: '하지만 저는 아침에만 마셔요.', id: 'Tapi saya hanya minum di pagi hari.' },
      { ko: '룸메이트는 저녁에도 마셔요.', id: 'Teman sekamar saya minum di malam hari juga.' },
      { ko: '그래서 밤에 잠을 잘 못 자요.', id: 'Karena itu dia tidak bisa tidur nyenyak di malam hari.' },
    ],
    vocabInContext: [
      { ko: '룸메이트', id: 'teman sekamar' },
      { ko: '밤', id: 'malam' },
      { ko: '잠을 자다', id: 'tidur' },
      { ko: '못', id: 'tidak bisa' },
    ],
    analysis: [
      '룸메이트도 — 도 menempel pada orangnya, karena yang ditambahkan ke daftar adalah teman sekamarnya.',
      '아침에만 dan 저녁에도 — keduanya mempertahankan 에 dan menumpuk 만/도 di belakangnya. Inilah pola yang paling sering salah.',
      '룸메이트는 pada kalimat kelima memakai 는, bukan 도, karena sekarang dua kebiasaan sedang DIBANDINGKAN, bukan ditambahkan.',
      '잘 못 자요 — 못 menyatakan ketidakmampuan ("tidak bisa"), dibahas di Modul 3.',
    ],
  },

  exercises: [
    {
      id: 'm2l6-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Temanmu baru saja berkata 저는 커피를 마셔요. Kamu minum hal yang sama.',
      sentence: '저___ 커피를 마셔요.',
      translation: 'Saya juga minum kopi.',
      options: ['도', '는', '만', '가'],
      answer: '도',
      explain:
        '도 berarti "juga" dan menggantikan 는 di posisi itu — bentuk 저는도 tidak ada. Karena yang "juga" adalah orangnya, 도 menempel pada 저.',
      whyNot: {
        는: '는 hanya menjadikannya topik, tanpa makna "juga" — hubungannya dengan ucapan temanmu jadi hilang.',
        만: '만 berarti "hanya": "cuma saya yang minum kopi".',
        가: '가 menyorot pelakunya sebagai informasi baru, bukan menyatakan kesamaan.',
      },
      tags: ['도'],
    },
    {
      id: 'm2l6-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Kamu bekerja di kantor, dan ternyata di rumah pun kamu masih bekerja.',
      sentence: '저는 집___ 일해요.',
      translation: 'Saya bekerja di rumah juga.',
      options: ['에서도', '도', '에만', '에서만'],
      answer: '에서도',
      explain:
        'Tempat kegiatan tetap butuh 에서, lalu 도 ditumpuk di belakangnya. Berbeda dari 는/가/를, partikel tempat tidak dilepas saat bertemu 도.',
      whyNot: {
        도: '집도 일해요 akan terdengar seperti "rumah pun bekerja" — rumahnya yang jadi pelaku.',
        에만: 'Artinya "hanya di", dan 에 juga keliru karena ada kegiatan yang berlangsung.',
        에서만: 'Bentuknya benar, tetapi artinya "hanya di rumah" — bukan "di rumah juga".',
      },
      tags: ['도'],
    },
    {
      id: 'm2l6-e3',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Kamu bekerja setiap hari kerja; hanya di akhir pekan kamu beristirahat.',
      sentence: '주말___ 쉬어요.',
      translation: 'Saya hanya istirahat di akhir pekan.',
      options: ['에만', '만', '에도', '부터'],
      answer: '에만',
      explain:
        '주말 adalah keterangan waktu, jadi 에 tetap dipakai, lalu 만 ditumpuk: 주말에만. Polanya identik dengan 에서도.',
      whyNot: {
        만: '주말만 쉬어요 terdengar seperti "akhir pekan saja yang beristirahat".',
        에도: 'Artinya "di akhir pekan juga", bukan "hanya".',
        부터: '부터 berarti "mulai dari", menandai titik awal rentang waktu.',
      },
      tags: ['만'],
    },
    {
      id: 'm2l6-e4',
      kind: 'mc',
      prompt: 'Apa perbedaan antara 저도 빵을 먹어요 dan 저는 빵도 먹어요?',
      options: [
        'Yang pertama menambahkan orangnya ke daftar; yang kedua menambahkan makanannya.',
        'Yang pertama lebih sopan daripada yang kedua.',
        'Yang pertama bentuk lampau, yang kedua bentuk sekarang.',
        'Keduanya artinya persis sama.',
      ],
      answerIndex: 0,
      explain:
        '저도 빵을 먹어요 berarti "saya juga makan roti" — orang lain makan roti, dan saya ikut. 저는 빵도 먹어요 berarti "saya makan roti juga" — saya makan hal lain, dan roti termasuk. Letak 도 yang menentukan.',
      whyNot: {
        'Yang pertama lebih sopan daripada yang kedua.': '도 tidak ada hubungannya dengan tingkat kesopanan.',
        'Yang pertama bentuk lampau, yang kedua bentuk sekarang.': 'Keduanya bentuk sekarang (마셔요/먹어요).',
        'Keduanya artinya persis sama.': 'Justru inilah inti pelajaran ini — letak 도 mengubah arti.',
      },
      tags: ['도'],
    },
    {
      id: 'm2l6-e5',
      kind: 'correct',
      prompt: 'Perbaiki susunan partikelnya.',
      sentence: '저는도 한국어를 공부해요.',
      translation: 'Saya juga belajar bahasa Korea.',
      answers: ['저도 한국어를 공부해요'],
      explain:
        '도 menggantikan 는, jadi keduanya tidak boleh muncul bersamaan. Bentuk yang benar adalah 저도. Perhatikan bahwa partikel objek 를 pada 한국어 tetap utuh karena berada pada kata yang berbeda.',
      tags: ['도'],
    },
    {
      id: 'm2l6-e6',
      kind: 'build',
      prompt: 'Susun kalimatnya.',
      translation: 'Teman sekamar saya minum kopi di malam hari juga.',
      tiles: ['룸메이트는', '저녁에도', '커피를', '마셔요'],
      distractors: ['저녁도', '커피도'],
      answers: ['룸메이트는 저녁에도 커피를 마셔요'],
      explain:
        '저녁에도 mempertahankan 에 lalu menumpuk 도 — karena yang "juga" adalah WAKTUNYA. 룸메이트는 memakai 는 karena sedang dibandingkan dengan kebiasaanmu sendiri.',
      parts: [
        { part: '룸메이트는', role: 'topik pembanding' },
        { part: '저녁에도', role: 'waktu (에) + "juga" (도)' },
        { part: '커피를', role: 'objek, partikelnya tetap' },
        { part: '마셔요', role: 'kata kerja penutup' },
      ],
      tags: ['도'],
    },
    {
      id: 'm2l6-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya hanya minum air putih.',
      answers: ['저는 물만 마셔요', '물만 마셔요'],
      explain:
        '만 menggantikan partikel objek 을 sepenuhnya — bentuk 물을만 tidak ada. Cukup 물만.',
      hint: 'Partikel objeknya tidak perlu ditulis.',
      tags: ['만'],
    },
  ],

  quiz: [
    {
      id: 'm2l6-q1',
      kind: 'mc',
      prompt: 'Manakah yang BENAR?',
      options: [
        '친구한테도 말했어요.',
        '친구도한테 말했어요.',
        '친구를도 말했어요.',
        '친구한테는도 말했어요.',
      ],
      answerIndex: 0,
      explain:
        '한테 adalah partikel penerima yang bertahan saat bertemu 도, dan 도 ditumpuk di belakangnya: 한테도. Urutannya selalu partikel dasar dulu, baru 도/만.',
      whyNot: {
        '친구도한테 말했어요.': 'Urutannya terbalik — 도 selalu di belakang.',
        '친구를도 말했어요.': '을/를 harus dilepas sebelum 도, dan 말하다 di sini memerlukan 한테.',
        '친구한테는도 말했어요.': '는 dan 도 tidak boleh muncul bersamaan.',
      },
      tags: ['도'],
    },
    {
      id: 'm2l6-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan bentuk yang tepat.',
      context: 'Kamu hanya berolahraga pada hari Sabtu, tidak pada hari lain.',
      sentence: '토요일___ 운동해요.',
      translation: 'Saya hanya berolahraga pada hari Sabtu.',
      answers: ['에만'],
      explain:
        'Nama hari adalah titik waktu, jadi 에 tetap dipakai, lalu 만 ditumpuk di belakangnya.',
      tags: ['만'],
    },
    {
      id: 'm2l6-q3',
      kind: 'correct',
      prompt: 'Perbaiki kalimat ini.',
      sentence: '저는 밥을만 먹어요.',
      translation: 'Saya hanya makan nasi.',
      answers: ['저는 밥만 먹어요'],
      explain:
        'Partikel objek 을 harus dilepas sebelum 만 — bentuk 밥을만 tidak ada. Berbeda halnya dengan 에/에서/한테, yang justru dipertahankan.',
      tags: ['만'],
    },
  ],

  summary: {
    points: [
      '도 berarti "juga/pun", 만 berarti "hanya/saja". Bentuk keduanya tidak pernah berubah.',
      'Keduanya MENGGANTIKAN 은/는, 이/가, dan 을/를.',
      'Keduanya MENUMPUK pada 에, 에서, 한테, 로: 주말에도, 집에서만, 친구한테도.',
      'Letak 도 menentukan apa yang "juga" — orangnya, bendanya, atau tempatnya.',
      '저도요 adalah jawaban pendek yang sangat lazim untuk "saya juga".',
    ],
    pitfalls: [
      { wrong: '저는도 가요.', right: '저도 가요.', why: '는 harus dilepas sebelum 도.' },
      { wrong: '밥을만 먹어요.', right: '밥만 먹어요.', why: '을 harus dilepas sebelum 만.' },
      {
        wrong: '주말도 일해요.',
        right: '주말에도 일해요.',
        why: 'Keterangan waktu tetap butuh 에; 도 ditumpuk di belakangnya.',
      },
    ],
  },
}
