import type { Lesson } from '../../types/curriculum'

export const m5l5: Lesson = {
  id: 'm5-l5',
  moduleId: 'm5',
  number: '5.5',
  title: 'Olahraga & kebugaran',
  subtitle: 'Pergi untuk melakukan sesuatu, dan seberapa sering',
  objective:
    'Setelah pelajaran ini kamu bisa menyebutkan olahraga apa yang kamu lakukan, seberapa sering, dan mengajak orang berolahraga bersama.',
  focus: ['-(으)러 가다', 'frekuensi', '-고 있다'],
  estimatedMinutes: 16,

  coreExamples: [
    {
      ko: '저는 일주일에 세 번 운동해요.',
      id: 'Saya olahraga tiga kali seminggu.',
      highlight: ['에', '세 번'],
    },
    {
      ko: '아침에 운동하러 가요.',
      id: 'Pagi hari saya pergi berolahraga.',
      highlight: ['운동하러'],
      highlightKind: 'ending',
    },
    {
      ko: '요즘 헬스장에 다니고 있어요.',
      id: 'Akhir-akhir ini saya rutin ke gym.',
      highlight: ['다니고 있어요'],
      highlightKind: 'ending',
    },
    { ko: '한국 사람들은 등산을 정말 좋아해요.', id: 'Orang Korea sangat suka mendaki.', highlight: ['을'] },
    {
      ko: '같이 운동할래요?',
      id: 'Mau olahraga bareng?',
      highlight: ['할래요'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '아침에 운동하러 가요.',
        id: 'Pagi hari saya pergi berolahraga.',
        highlight: ['운동하러'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '아침에', formula: '아침 + 에', meaning: 'Pada pagi hari — keterangan waktu' },
        {
          unit: '운동하러',
          formula: '운동하다 → 운동하 + 러',
          meaning: 'Untuk berolahraga — menyatakan TUJUAN kepergian',
        },
        { unit: '가요', formula: '가다 → 가요', meaning: 'Pergi' },
      ],
      why:
        '-(으)러 menyatakan tujuan dari sebuah perpindahan, dan ia hanya boleh dipasangkan dengan kata kerja gerak: 가다, 오다, 다니다. Bentuknya diambil dari BATANG: kalau batang berakhir vokal atau ㄹ pakai 러, kalau berakhir konsonan lain pakai 으러. Batang 운동하다 adalah 운동하 yang berakhir vokal, jadi hasilnya 운동하러.',
      swaps: [
        {
          alt: '운동하러 와요.',
          effect: '"Datang untuk berolahraga." Kata kerja geraknya diganti 오다, tujuannya tetap sama.',
        },
        {
          alt: '운동하고 가요.',
          effect:
            'Artinya berubah total menjadi "berolahraga LALU pergi". -고 hanya menyambung dua kegiatan berurutan, sedangkan -(으)러 menyatakan alasan kepergian. Ini pasangan yang paling sering tertukar.',
        },
      ],
    },
    {
      sentence: {
        ko: '저는 일주일에 세 번 운동해요.',
        id: 'Saya olahraga tiga kali seminggu.',
        highlight: ['에', '세 번'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Saya — topik kalimat' },
        {
          unit: '일주일에',
          formula: '일주일 + 에',
          meaning: 'Dalam seminggu; 에 di sini berarti "per"',
        },
        { unit: '세 번', formula: '셋 → 세 + 번', meaning: 'Tiga kali; angka asli yang menyusut' },
        { unit: '운동해요', formula: '운동하다 → 운동해요', meaning: 'Berolahraga' },
      ],
      why:
        'Pola frekuensi Korea selalu: SATUAN WAKTU + 에 + ANGKA + 번. Urutannya kebalikan dari bahasa Indonesia, yang menyebut jumlahnya dulu ("tiga kali seminggu"). Partikel 에 di sini bukan menandai waktu kejadian, melainkan berarti "per" atau "dalam". Dan angkanya memakai bentuk asli yang menyusut di depan penghitung: 한 번, 두 번, 세 번.',
      swaps: [
        { alt: '하루에 한 번 운동해요.', effect: '"Sekali sehari." Satuan waktunya diganti 하루.' },
        {
          alt: '한 달에 두 번 등산해요.',
          effect: '"Dua kali sebulan." Perhatikan 한 달 juga memakai angka asli.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '운동하다', id: 'berolahraga', pos: 'kata kerja', note: '해요체: 운동해요.' },
    { ko: '헬스장', id: 'pusat kebugaran, gym', pos: 'kata benda' },
    { ko: '등산하다', id: 'mendaki gunung', pos: 'kata kerja', note: 'Juga: 등산을 가다.' },
    { ko: '수영하다', id: 'berenang', pos: 'kata kerja' },
    { ko: '다니다', id: 'rutin pergi ke (sekolah, gym)', pos: 'kata kerja', note: '해요체: 다녀요.' },
    { ko: '번', id: 'kali (penghitung)', pos: 'penghitung', note: 'Angka asli: 한 번, 두 번.' },
    { ko: '일주일', id: 'satu minggu', pos: 'kata benda' },
    { ko: '한 달', id: 'satu bulan', pos: 'kata benda' },
    {
      ko: '힘들다',
      id: 'berat, melelahkan',
      pos: 'kata sifat',
      note: '해요체: 힘들어요.',
      example: { ko: '등산은 조금 힘들어요.', id: 'Mendaki agak melelahkan.' },
    },
    { ko: '공기', id: 'udara', pos: 'kata benda' },
    { ko: '막걸리', id: 'makgeolli (arak beras)', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: '-(으)러 가다 — pergi untuk melakukan sesuatu',
      form: 'batang + 러 (vokal / ㄹ) · 으러 (konsonan) + 가다 / 오다 / 다니다',
      body:
        'Pola ini menjawab pertanyaan "pergi untuk apa?". Syarat pentingnya: kata kerja kedua HARUS kata kerja gerak. Kamu tidak bisa berkata 운동하러 해요.',
      table: {
        caption: 'Batang berakhiran ㄹ tetap memakai 러 saja: 놀다 → 놀러.',
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Contoh'],
        rows: [
          ['운동하다', '운동하', '운동하러', '운동하러 가요.'],
          ['먹다', '먹', '먹으러', '밥 먹으러 가요.'],
          ['보다', '보', '보러', '영화 보러 가요.'],
          ['사다', '사', '사러', '옷 사러 가요.'],
          ['배우다', '배우', '배우러', '한국어 배우러 다녀요.'],
          ['놀다', '놀', '놀러', '친구 집에 놀러 가요.'],
        ],
      },
      examples: [
        { ko: '점심 먹으러 갈까요?', id: 'Mau pergi makan siang?' },
        { ko: '수영하러 다녀요.', id: 'Saya rutin pergi berenang.' },
      ],
      mistakes: [
        {
          wrong: '운동하러 해요.',
          right: '운동하러 가요.',
          why: '-(으)러 hanya boleh diikuti kata kerja gerak seperti 가다, 오다, atau 다니다.',
        },
        {
          wrong: '운동해러 가요.',
          right: '운동하러 가요.',
          why: '-(으)러 ditempel pada BATANG (운동하), bukan pada bentuk 해요체.',
        },
      ],
      more:
        'Ada pola mirip yang lebih luas: -(으)려고 ("berniat untuk"), yang boleh diikuti kata kerja apa pun — 운동하려고 일찍 일어났어요 ("saya bangun pagi supaya bisa olahraga"). Untuk sekarang, cukup kuasai -(으)러 yang khusus untuk kepergian; ia jauh lebih sering dipakai dalam percakapan sehari-hari.',
    },
    {
      title: 'Menyebut frekuensi',
      form: 'satuan waktu + 에 + angka + 번',
      body:
        'Urutannya kebalikan dari bahasa Indonesia. Kita berkata "tiga kali seminggu"; orang Korea berkata "dalam seminggu, tiga kali".',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Catatan'],
        rows: [
          ['하루에 한 번', 'sekali sehari', '하루 = satu hari'],
          ['일주일에 두 번', 'dua kali seminggu', '일주일 = satu minggu'],
          ['한 달에 세 번', 'tiga kali sebulan', '한 달 memakai angka asli'],
          ['일 년에 네 번', 'empat kali setahun', '일 년 memakai angka Sino'],
          ['일주일에 몇 번?', 'berapa kali seminggu?', 'Untuk bertanya'],
        ],
      },
      examples: [
        { ko: '일주일에 몇 번 운동해요?', id: 'Berapa kali seminggu kamu olahraga?' },
        { ko: '한 달에 한 번쯤 등산해요.', id: 'Kira-kira sebulan sekali saya mendaki.' },
      ],
      more:
        'Kalau frekuensinya tidak pasti, lebih alami memakai kata keterangan yang sudah kamu kenal dari Pelajaran 4.1: 매일, 자주, 가끔, 거의 안, 전혀 안. Misalnya 저는 가끔 수영해요 terdengar lebih wajar daripada memaksakan angka.',
    },
    {
      title: '-고 있다 — sedang berlangsung',
      form: 'batang + 고 있다',
      body:
        'Dua makna sekaligus: sesuatu yang sedang terjadi persis sekarang, dan kebiasaan yang sedang berjalan pada periode ini. Makna kedua inilah yang paling berguna saat bercerita tentang olahraga.',
      table: {
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['운동하다', '운동하', '운동하고 있어요', 'sedang berolahraga'],
          ['다니다', '다니', '다니고 있어요', 'sedang rutin pergi'],
          ['배우다', '배우', '배우고 있어요', 'sedang belajar'],
          ['먹다', '먹', '먹고 있어요', 'sedang makan'],
        ],
      },
      examples: [
        { ko: '지금 운동하고 있어요.', id: 'Sekarang saya sedang berolahraga.', note: 'Sedang terjadi saat ini.' },
        {
          ko: '요즘 헬스장에 다니고 있어요.',
          id: 'Akhir-akhir ini saya rutin ke gym.',
          note: 'Kebiasaan yang sedang berjalan periode ini.',
        },
      ],
      more:
        'Hati-hati jangan memakainya berlebihan. Bahasa Korea jauh lebih sering memakai bentuk sekarang biasa di tempat bahasa Inggris memakai "-ing". Pertanyaan 지금 뭐 해요? terdengar lebih alami daripada 지금 뭐 하고 있어요?, meskipun keduanya benar. Pakai -고 있다 saat kamu memang ingin menekankan bahwa sesuatu sedang berlangsung.',
    },
    {
      title: 'Kata kerja yang tepat untuk tiap olahraga',
      body:
        'Ini bagian yang tidak bisa ditebak dari terjemahan. Dalam bahasa Indonesia semuanya "main" atau "olahraga", tetapi bahasa Korea memilih kata kerja yang berbeda — dan memakai yang salah langsung terdengar janggal.',
      table: {
        caption: 'Patokan kasar: yang dinaiki pakai 타다, permainan beregu pakai 하다.',
        columns: ['Olahraga', 'Kata kerja', 'Kalimat', 'Arti'],
        rows: [
          ['축구 (sepak bola)', '하다', '축구를 해요.', 'bermain sepak bola'],
          ['야구 (bisbol)', '하다 / 보다', '야구를 봐요.', 'menonton bisbol'],
          ['수영 (renang)', '하다', '수영을 해요.', 'berenang'],
          ['자전거 (sepeda)', '타다', '자전거를 타요.', 'bersepeda'],
          ['스키 (ski)', '타다', '스키를 타요.', 'bermain ski'],
          ['등산 (mendaki)', '하다 / 가다', '등산을 가요.', 'pergi mendaki'],
        ],
      },
      examples: [
        { ko: '주말에 자전거를 타요.', id: 'Akhir pekan saya bersepeda.' },
        { ko: '친구하고 축구를 해요.', id: 'Saya bermain sepak bola dengan teman.' },
      ],
      mistakes: [
        {
          wrong: '자전거를 해요.',
          right: '자전거를 타요.',
          why: 'Apa pun yang dinaiki — sepeda, ski, kuda, bus — memakai 타다.',
        },
      ],
    },
  ],

  dialogue: {
    title: 'Ngobrol soal olahraga',
    situation: 'Sujin dan Vio mengobrol saat istirahat siang.',
    lines: [
      { speaker: '수진', ko: '비오 씨, 요즘 운동해요?', id: 'Vio, akhir-akhir ini olahraga?' },
      {
        speaker: '비오',
        ko: '네, 헬스장에 다니고 있어요.',
        id: 'Ya, saya lagi rutin ke gym.',
        note: '-고 있다 untuk kebiasaan yang sedang berjalan periode ini.',
      },
      {
        speaker: '수진',
        ko: '일주일에 몇 번 가요?',
        id: 'Seminggu berapa kali?',
        note: 'Pola frekuensi dalam bentuk pertanyaan.',
      },
      { speaker: '비오', ko: '세 번쯤 가요. 수진 씨는요?', id: 'Sekitar tiga kali. Kalau Sujin?' },
      {
        speaker: '수진',
        ko: '저는 주말에 등산하러 가요.',
        id: 'Saya kalau akhir pekan pergi mendaki.',
        note: '등산하러 가요 — tujuan kepergian.',
      },
      { speaker: '비오', ko: '등산이요? 힘들지 않아요?', id: 'Mendaki? Nggak capek?' },
      {
        speaker: '수진',
        ko: '조금 힘들어요. 하지만 공기가 좋아서 기분이 좋아요.',
        id: 'Agak capek. Tapi karena udaranya segar, rasanya enak.',
        note: '좋아서 — klausa alasan tanpa penanda lampau (Pelajaran 4.2).',
      },
      { speaker: '비오', ko: '저도 한번 같이 갈래요!', id: 'Saya mau ikut sekali-sekali!' },
      { speaker: '수진', ko: '좋아요. 다음 주 토요일에 어때요?', id: 'Boleh. Sabtu depan gimana?' },
    ],
    politeness:
      '힘들지 않아요? memakai bentuk penyangkalan panjang -지 않다 dari Pelajaran 3.3 untuk bertanya. Dalam bahasa Korea, bertanya secara negatif seperti ini terdengar lebih ramah dan tidak menantang dibandingkan 힘들어요? yang terasa datar.',
  },

  passage: {
    title: '한국의 등산',
    intro: 'Kenapa akhir pekan di gunung Korea selalu ramai.',
    sentences: [
      { ko: '한국 사람들은 등산을 정말 좋아해요.', id: 'Orang Korea sangat suka mendaki.' },
      { ko: '주말에 산에 가면 사람이 아주 많아요.', id: 'Kalau pergi ke gunung saat akhir pekan, orangnya banyak sekali.' },
      { ko: '한국에는 산이 많아요. 그래서 등산이 인기가 많아요.', id: 'Di Korea banyak gunung. Karena itu mendaki sangat populer.' },
      { ko: '사람들은 보통 김밥하고 물을 가져가요.', id: 'Orang-orang biasanya membawa gimbap dan air.' },
      { ko: '산 위에서 김밥을 먹으면 정말 맛있어요.', id: 'Kalau makan gimbap di atas gunung, rasanya enak sekali.' },
      { ko: '그리고 내려와서 막걸리를 마셔요.', id: 'Lalu setelah turun, mereka minum makgeolli.' },
    ],
    vocabInContext: [
      { ko: '산', id: 'gunung' },
      { ko: '인기가 많다', id: 'populer' },
      { ko: '가져가다', id: 'membawa pergi' },
      { ko: '내려오다', id: 'turun' },
    ],
    analysis: [
      '산에 가면 dan 김밥을 먹으면 memakai -(으)면 ("kalau"), yang dibahas tuntas di Pelajaran 5.6 berikutnya. Bentuknya dari batang: 가 + 면, 먹 + 으면.',
      '사람이 아주 많아요 — 많다 adalah kata sifat, jadi subjeknya memakai 이 (Pelajaran 2.2).',
      '인기가 많아요 adalah ungkapan tetap untuk "populer". Harfiahnya "popularitasnya banyak" — jadi 인기 memakai 가, bukan 를.',
      '내려와서 memakai -아/어서 dalam makna URUTAN KEJADIAN, bukan alasan: "turun lalu minum" (Pelajaran 4.2).',
      '한국에는 memakai 에 (tempat) + 는 (kontras dengan negara lain), pola bertumpuk dari Pelajaran 2.1.',
    ],
  },

  exercises: [
    {
      id: 'm5l5-e1',
      kind: 'fill',
      prompt: 'Ubah 먹다 menjadi bentuk tujuan dengan -(으)러.',
      sentence: '점심 ___ 갈까요?',
      translation: 'Mau pergi makan siang?',
      answers: ['먹으러'],
      explain:
        'Batang 먹 berakhir konsonan, jadi memakai 으러 → 먹으러. Bentuk ini ditempel pada BATANG, bukan pada bentuk 해요체.',
      hint: 'Batang 먹다 adalah 먹, dan ia berakhir konsonan.',
      tags: ['-(으)러 가다'],
    },
    {
      id: 'm5l5-e2',
      kind: 'particle',
      prompt: 'Pilih kata kerja yang tepat.',
      context: 'Sepeda adalah sesuatu yang dinaiki.',
      sentence: '주말에 자전거를 ___.',
      translation: 'Akhir pekan saya bersepeda.',
      options: ['타요', '해요', '가요', '뛰어요'],
      answer: '타요',
      explain:
        'Apa pun yang dinaiki — sepeda, ski, bus, kereta — memakai 타다. Ini tidak bisa ditebak dari bahasa Indonesia yang berkata "bersepeda".',
      whyNot: {
        해요: '하다 dipakai untuk permainan seperti 축구를 해요 atau 수영을 해요, bukan untuk kendaraan.',
        가요: '가다 berarti "pergi" dan tidak bisa mengambil 자전거를 sebagai objek.',
        뛰어요: '뛰다 berarti "berlari", bukan "mengendarai".',
      },
      tags: ['kata kerja olahraga'],
    },
    {
      id: 'm5l5-e3',
      kind: 'build',
      prompt: 'Susun kalimat frekuensi ini.',
      translation: 'Saya olahraga tiga kali seminggu.',
      tiles: ['저는', '일주일에', '세 번', '운동해요'],
      distractors: ['세 번에', '일주일을'],
      answers: ['저는 일주일에 세 번 운동해요'],
      explain:
        'Pola frekuensi Korea: satuan waktu + 에 + angka + 번. Urutannya kebalikan dari bahasa Indonesia, dan 에 di sini berarti "per", bukan menandai kapan kejadiannya.',
      parts: [
        { part: '저는', role: 'topik' },
        { part: '일주일에', role: 'satuan waktu + 에 ("per minggu")' },
        { part: '세 번', role: 'tiga kali (angka asli yang menyusut)' },
        { part: '운동해요', role: 'kata kerja penutup' },
      ],
      tags: ['frekuensi'],
    },
    {
      id: 'm5l5-e4',
      kind: 'correct',
      prompt: 'Perbaiki bentuk tujuannya.',
      sentence: '저는 아침에 운동해러 가요.',
      translation: 'Pagi hari saya pergi berolahraga.',
      answers: ['저는 아침에 운동하러 가요', '아침에 운동하러 가요'],
      explain:
        '-(으)러 ditempel pada BATANG kata (운동하), bukan pada bentuk 해요체 (운동해). Bandingkan dengan -고 싶다 dan -고 있다 yang juga memakai batang.',
      tags: ['-(으)러 가다'],
    },
    {
      id: 'm5l5-e5',
      kind: 'match',
      prompt: 'Pasangkan olahraga dengan kata kerjanya.',
      pairs: [
        { left: '축구', right: '하다 — 축구를 해요' },
        { left: '자전거', right: '타다 — 자전거를 타요' },
        { left: '수영', right: '하다 — 수영을 해요' },
        { left: '스키', right: '타다 — 스키를 타요' },
        { left: '등산', right: '가다 — 등산을 가요' },
      ],
      explain:
        'Patokan kasarnya: yang dinaiki memakai 타다, permainan memakai 하다. 등산 bisa memakai 하다 maupun 가다, tetapi 등산을 가요 paling sering terdengar.',
      tags: ['kata kerja olahraga'],
    },
    {
      id: 'm5l5-e6',
      kind: 'fill',
      prompt: 'Ubah 다니다 menjadi bentuk "sedang berlangsung".',
      context: 'Kamu sedang dalam periode rutin ke gym.',
      sentence: '요즘 헬스장에 ___.',
      translation: 'Akhir-akhir ini saya rutin ke gym.',
      answers: ['다니고 있어요'],
      explain:
        '-고 있다 ditempel pada batang (다니) lalu 있다 dikonjugasi: 다니고 있어요. Di sini maknanya bukan "sedang berjalan sekarang", melainkan kebiasaan yang sedang berlangsung periode ini.',
      tags: ['-고 있다'],
    },
    {
      id: 'm5l5-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Seminggu berapa kali kamu olahraga?',
      answers: ['일주일에 몇 번 운동해요?'],
      explain:
        '몇 번 menggantikan posisi angka dalam pola frekuensi: satuan waktu + 에 + 몇 번. Ingat bahwa 몇 selalu diikuti penghitung.',
      hint: 'Ganti bagian angkanya dengan kata tanya.',
      tags: ['frekuensi'],
    },
    {
      id: 'm5l5-e8',
      kind: 'mc',
      prompt: 'Apa bedanya 운동하러 가요 dan 운동하고 가요?',
      options: [
        '운동하러 가요 = pergi UNTUK olahraga; 운동하고 가요 = olahraga LALU pergi.',
        'Keduanya artinya sama.',
        '운동하러 가요 bentuk sopan, 운동하고 가요 bentuk santai.',
        '운동하러 가요 bentuk lampau.',
      ],
      answerIndex: 0,
      explain:
        '-(으)러 menyatakan TUJUAN kepergian, sedangkan -고 hanya menyambung dua kegiatan yang berurutan. Jadi 운동하고 가요 berarti kamu berolahraga dulu, baru pergi ke tempat lain.',
      whyNot: {
        'Keduanya artinya sama.': 'Justru inilah pasangan yang paling sering tertukar.',
        '운동하러 가요 bentuk sopan, 운동하고 가요 bentuk santai.': 'Keduanya sama-sama 해요체.',
        '운동하러 가요 bentuk lampau.': 'Keduanya bentuk sekarang.',
      },
      tags: ['-(으)러 가다'],
    },
  ],

  quiz: [
    {
      id: 'm5l5-q1',
      kind: 'mc',
      prompt: 'Manakah kalimat yang BENAR?',
      options: [
        '친구 집에 놀러 가요.',
        '친구 집에 놀으러 가요.',
        '친구 집에 놀러 해요.',
        '친구 집에 놀아러 가요.',
      ],
      answerIndex: 0,
      explain:
        'Batang 놀다 adalah 놀 yang berakhir ㄹ, dan batang berakhiran ㄹ memakai 러 saja — bukan 으러. Dan kata kerja keduanya harus kata kerja gerak (가요).',
      whyNot: {
        '친구 집에 놀으러 가요.': 'Batang berakhiran ㄹ tidak memakai 으러.',
        '친구 집에 놀러 해요.': '-(으)러 harus diikuti kata kerja gerak, bukan 하다.',
        '친구 집에 놀아러 가요.': '-(으)러 ditempel pada batang, bukan pada bentuk 해요체.',
      },
      tags: ['-(으)러 가다'],
    },
    {
      id: 'm5l5-q2',
      kind: 'fill',
      prompt: 'Lengkapi pola frekuensinya.',
      context: 'Dua kali dalam sebulan.',
      sentence: '___ 두 번 등산해요.',
      translation: 'Saya mendaki dua kali sebulan.',
      answers: ['한 달에'],
      explain:
        '한 달 ("satu bulan") memakai angka asli, lalu 에 ditambahkan untuk menyatakan "per". Pola lengkapnya: satuan waktu + 에 + angka + 번.',
      tags: ['frekuensi'],
    },
    {
      id: 'm5l5-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Akhir pekan saya pergi mendaki.',
      answers: [
        '주말에 등산하러 가요',
        '저는 주말에 등산하러 가요',
        '주말에는 등산하러 가요',
        '주말에 등산을 가요',
      ],
      explain:
        '등산하러 가요 memakai -(으)러 untuk menyatakan tujuan kepergian. Bentuk 등산을 가요 juga wajar dan sangat sering dipakai untuk mendaki secara khusus.',
      tags: ['-(으)러 가다'],
    },
  ],

  summary: {
    points: [
      '-(으)러 menyatakan tujuan kepergian dan HARUS diikuti kata kerja gerak: 가다, 오다, 다니다.',
      'Bentuknya dari batang: 러 setelah vokal dan ㄹ, 으러 setelah konsonan lain.',
      '-(으)러 가요 ("pergi untuk") berbeda tajam dari -고 가요 ("lalu pergi").',
      'Frekuensi memakai pola: satuan waktu + 에 + angka + 번 — urutannya kebalikan dari bahasa Indonesia.',
      '-고 있다 untuk sesuatu yang sedang berlangsung, termasuk kebiasaan periode ini.',
      'Olahraga yang "dinaiki" memakai 타다, permainan memakai 하다: 자전거를 타요, 축구를 해요.',
    ],
    pitfalls: [
      {
        wrong: '운동해러 가요.',
        right: '운동하러 가요.',
        why: '-(으)러 ditempel pada batang kata, bukan pada bentuk 해요체.',
      },
      {
        wrong: '자전거를 해요.',
        right: '자전거를 타요.',
        why: 'Semua yang dinaiki memakai 타다.',
      },
      {
        wrong: '세 번 일주일에 운동해요.',
        right: '일주일에 세 번 운동해요.',
        why: 'Satuan waktu selalu mendahului jumlahnya.',
      },
    ],
  },
}
