import type { Lesson } from '../../types/curriculum'

export const m1l3: Lesson = {
  id: 'm1-l3',
  moduleId: 'm1',
  number: '1.3',
  title: 'Bertanya tanpa mengubah kalimat',
  subtitle: 'Kalimat tanya 해요체 dan delapan kata tanya utama',
  objective:
    'Setelah pelajaran ini kamu bisa mengajukan pertanyaan sehari-hari dalam bahasa Korea dan tahu kenapa kata tanya tidak perlu dipindah ke depan kalimat.',
  focus: ['kalimat tanya', 'kata tanya'],
  estimatedMinutes: 14,

  coreExamples: [
    { ko: '지금 뭐 해요?', id: 'Sekarang sedang apa?', highlight: ['뭐'] },
    { ko: '어디에서 공부해요?', id: 'Kamu belajar di mana?', highlight: ['어디', '에서'] },
    { ko: '이름이 뭐예요?', id: 'Siapa namamu?', highlight: ['뭐'] },
    {
      ko: '왜 한국어를 공부해요?',
      id: 'Kenapa kamu belajar bahasa Korea?',
      highlight: ['왜'],
    },
    { ko: '누가 커피를 마셔요?', id: 'Siapa yang minum kopi?', highlight: ['누가'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '어디에서 공부해요?',
        id: 'Kamu belajar di mana?',
        highlight: ['어디', '에서'],
      },
      rows: [
        {
          unit: '어디에서',
          formula: '어디 + 에서',
          meaning: '"di mana"; memakai 에서 karena ada kegiatan yang berlangsung',
        },
        { unit: '공부해요', formula: '공부하다 → 공부해요', meaning: 'Belajar, bentuk 해요체' },
      ],
      why:
        'Bentuk kalimat tanya 해요체 PERSIS sama dengan kalimat pernyataan. Tidak ada pembalikan urutan seperti bahasa Inggris, dan tidak ada kata tambahan seperti "apakah". Yang membedakan hanya nada yang naik di akhir saat diucapkan, dan tanda tanya saat ditulis. Kata tanyanya pun tetap berada di posisi yang sesuai dengan perannya — 어디에서 menempati tempat keterangan, sama seperti 카페에서 pada kalimat biasa.',
      swaps: [
        {
          alt: '어디에 가요?',
          effect:
            'Dengan 에 artinya "pergi ke mana" — menanyakan tujuan. Dengan 에서 artinya "melakukan sesuatu di mana". Kata kerjanya yang menentukan partikel mana yang masuk akal.',
        },
        {
          alt: '공부해요.',
          effect:
            'Hilangkan kata tanya dan tanda tanyanya, dan kalimat yang sama persis menjadi pernyataan: "Saya belajar."',
        },
      ],
    },
    {
      sentence: {
        ko: '누가 커피를 마셔요?',
        id: 'Siapa yang minum kopi?',
        highlight: ['누가', '를'],
      },
      rows: [
        {
          unit: '누가',
          formula: '누구 + 가 → 누가',
          meaning: '"siapa" sebagai pelaku; bentuknya menyusut',
        },
        { unit: '커피를', formula: '커피 + 를', meaning: 'Kopi — objek yang diminum' },
        { unit: '마셔요', formula: '마시다 → 마셔요', meaning: 'Minum, 해요체' },
      ],
      why:
        '누구 bertemu partikel subjek 가 tidak menjadi 누구가, melainkan menyusut menjadi 누가. Ini satu-satunya kata tanya yang berubah bentuk saat bertemu partikel. Partikel yang dipakai adalah 가 — bukan 는 — karena pertanyaannya justru menanyakan siapa pelakunya, dan menanyakan pelaku selalu memakai 이/가.',
      swaps: [
        {
          alt: '누구를 만나요?',
          effect:
            '"Bertemu siapa?" Di sini 누구 berperan sebagai objek, jadi bentuknya tidak menyusut: 누구 + 를.',
        },
        {
          alt: '저분은 누구예요?',
          effect:
            '"Beliau itu siapa?" Tanpa partikel subjek, 누구 tetap utuh dan menempel pada 예요.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '뭐 (무엇)', id: 'apa', pos: 'kata tanya', note: '뭐 adalah bentuk percakapan.' },
    { ko: '어디', id: 'di mana, ke mana', pos: 'kata tanya' },
    {
      ko: '누구',
      id: 'siapa',
      pos: 'kata tanya',
      note: 'Menjadi 누가 saat berperan sebagai subjek.',
    },
    { ko: '언제', id: 'kapan', pos: 'kata tanya' },
    { ko: '왜', id: 'kenapa', pos: 'kata tanya' },
    { ko: '어떻게', id: 'bagaimana, dengan cara apa', pos: 'kata tanya' },
    {
      ko: '몇',
      id: 'berapa (jumlah)',
      pos: 'kata tanya',
      example: { ko: '몇 시예요?', id: 'Jam berapa?' },
    },
    {
      ko: '얼마',
      id: 'berapa (harga)',
      pos: 'kata tanya',
      example: { ko: '이거 얼마예요?', id: 'Ini berapa harganya?' },
    },
    { ko: '바쁘다', id: 'sibuk', pos: 'kata sifat', note: '해요체: 바빠요.' },
    { ko: '회의', id: 'rapat', pos: 'kata benda' },
  ],

  grammar: [
    {
      title: 'Bertanya tanpa mengubah apa pun',
      form: 'kalimat 해요체 + nada naik + ?',
      body:
        'Inilah bagian termudah dari tata bahasa Korea. Kalimat pernyataan dan kalimat tanya 해요체 bentuknya identik. Kamu tidak perlu menambah kata, membalik urutan, atau mengubah akhiran.',
      examples: [
        { ko: '학생이에요.', id: 'Dia seorang pelajar.' },
        { ko: '학생이에요?', id: 'Apakah dia seorang pelajar?' },
        { ko: '집에 가요?', id: 'Mau pulang ke rumah?' },
      ],
      mistakes: [
        {
          wrong: '당신은 어디에 가요?',
          right: '어디에 가요?',
          why: '당신 ("Anda") jarang dipakai dalam percakapan dan bisa terdengar menantang. Orang Korea memakai nama + 씨, jabatan, atau — paling sering — tidak menyebut lawan bicara sama sekali.',
        },
      ],
      more:
        'Bentuk formal punya akhiran tanya tersendiri: 〜습니다 menjadi 〜습니까?, dan 〜입니다 menjadi 〜입니까? Jadi 가다 menjadi 갑니다 / 갑니까? Bentuk ini kamu dengar di bandara, hotel, dan rapat resmi, tetapi untuk percakapan sehari-hari 해요체 jauh lebih lazim.',
    },
    {
      title: 'Kata tanya tetap di tempatnya',
      body:
        'Berbeda dari bahasa Inggris yang selalu melempar kata tanya ke depan, kata tanya Korea duduk di posisi yang sesuai dengan perannya dalam kalimat — persis di tempat jawabannya nanti akan berada.',
      table: {
        caption:
          'Perhatikan: kata tanya tetap membawa partikel yang sesuai dengan perannya (어디에, 어디에서, 누가, 몇 시에).',
        columns: ['Kata tanya', 'Arti', 'Contoh', 'Terjemahan'],
        rows: [
          ['뭐 / 무엇', 'apa', '뭐 먹어요?', 'Makan apa?'],
          ['어디', 'di mana / ke mana', '어디에 가요?', 'Pergi ke mana?'],
          ['누구 / 누가', 'siapa', '누가 와요?', 'Siapa yang datang?'],
          ['언제', 'kapan', '언제 만나요?', 'Kapan kita bertemu?'],
          ['왜', 'kenapa', '왜 한국어를 배워요?', 'Kenapa belajar bahasa Korea?'],
          ['어떻게', 'bagaimana', '어떻게 가요?', 'Perginya bagaimana / naik apa?'],
          ['몇', 'berapa (jumlah)', '몇 시에 만나요?', 'Bertemu jam berapa?'],
          ['얼마', 'berapa (harga)', '얼마예요?', 'Berapa harganya?'],
        ],
      },
      examples: [
        {
          ko: '저는 카페에서 공부해요.',
          id: 'Saya belajar di kafe.',
          highlight: ['카페에서'],
        },
        {
          ko: '어디에서 공부해요?',
          id: 'Kamu belajar di mana?',
          highlight: ['어디에서'],
          note: 'Kata tanyanya menempati persis posisi jawabannya.',
        },
      ],
    },
    {
      title: '뭐 dan partikel yang sering dilepas',
      body:
        'Dalam pertanyaan sehari-hari, partikel objek 를 di belakang 뭐 hampir selalu dilepas: 뭐 해요? dan 뭐 먹어요? jauh lebih umum daripada 뭐를 해요?. Tetapi saat 뭐 berpasangan dengan 이에요/예요, bentuknya selalu utuh: 뭐예요.',
      examples: [
        { ko: '지금 뭐 해요?', id: 'Sekarang sedang apa?' },
        { ko: '이름이 뭐예요?', id: 'Siapa namamu?', note: '이름 adalah subjeknya, jadi memakai 이.' },
        { ko: '취미가 뭐예요?', id: 'Apa hobimu?' },
      ],
      more:
        'Bentuk panjang 무엇을 dipakai dalam tulisan resmi dan soal ujian: 무엇을 공부합니까? Dalam percakapan, bentuk itu akan terdengar terlalu kaku.',
    },
    {
      title: 'Satu bentuk, tiga maksud',
      body:
        'Kalimat 해요체 yang sama bisa berarti pernyataan, pertanyaan, atau AJAKAN. Hanya nada dan konteks yang membedakannya. Ini sangat praktis: kamu bisa mengajak orang tanpa mempelajari bentuk baru.',
      examples: [
        { ko: '같이 점심 먹어요.', id: 'Ayo makan siang bersama.', note: 'Ajakan.' },
        { ko: '같이 점심 먹어요?', id: 'Mau makan siang bersama?', note: 'Pertanyaan/ajakan halus.' },
        { ko: '저는 지금 점심 먹어요.', id: 'Saya sedang makan siang.', note: 'Pernyataan.' },
      ],
      more:
        'Untuk ajakan yang lebih jelas, bahasa Korea punya bentuk khusus -(으)ㄹ까요? ("bagaimana kalau kita…?") yang akan dibahas di Modul 3. Tapi dalam percakapan nyata, 해요체 biasa sudah sangat sering dipakai untuk mengajak.',
    },
  ],

  dialogue: {
    title: 'Bertanya di meja kerja',
    situation: 'Minho menghampiri meja Sujin untuk menanyakan sesuatu.',
    lines: [
      { speaker: '민호', ko: '수진 씨, 지금 바빠요?', id: 'Sujin, sekarang sibuk?' },
      {
        speaker: '수진',
        ko: '아니요, 괜찮아요. 왜요?',
        id: 'Tidak, tidak apa-apa. Kenapa?',
        note: '왜요? adalah cara ringan dan sopan untuk menanyakan "memangnya kenapa?".',
      },
      { speaker: '민호', ko: '이 단어가 뭐예요?', id: 'Kata ini apa artinya?' },
      {
        speaker: '수진',
        ko: '아, 그건 "회의"예요.',
        id: 'Oh, itu "rapat".',
        note: 'Memakai 그건 karena benda itu ada di dekat lawan bicara.',
      },
      { speaker: '민호', ko: '회의가 언제예요?', id: 'Rapatnya kapan?' },
      { speaker: '수진', ko: '오늘 세 시예요.', id: 'Hari ini jam tiga.' },
      { speaker: '민호', ko: '고마워요!', id: 'Terima kasih!' },
    ],
    politeness:
      'Semua pertanyaan di sini memakai 해요체 — sopan tanpa terasa kaku, dan tepat untuk rekan kerja sebaya. Kalau lawan bicaranya atasan, kamu akan lebih sering mendengar bentuk 〜습니까? atau tambahan 〜시〜 seperti 바쁘세요?',
  },

  passage: {
    title: '수진 씨의 메시지',
    intro: 'Pesan chat singkat — semuanya kalimat tanya.',
    sentences: [
      { ko: '비오 씨, 안녕하세요!', id: 'Vio, halo!' },
      { ko: '내일 시간 있어요?', id: 'Besok ada waktu?' },
      { ko: '같이 점심 먹어요.', id: 'Ayo makan siang bersama.' },
      { ko: '어디가 좋아요?', id: 'Di mana yang bagus?' },
      { ko: '몇 시가 좋아요?', id: 'Jam berapa yang cocok?' },
      { ko: '답장 주세요!', id: 'Tolong balas ya!' },
    ],
    vocabInContext: [
      { ko: '내일', id: 'besok' },
      { ko: '시간', id: 'waktu' },
      { ko: '같이', id: 'bersama-sama' },
      { ko: '답장', id: 'balasan' },
    ],
    analysis: [
      '내일 시간 있어요? — 있다 sebenarnya menuntut subjek dengan 이/가 (시간이 있어요?), tetapi dalam chat dan percakapan partikelnya sering dilepas.',
      '어디가 좋아요? — di sini 어디 berperan sebagai SUBJEK ("tempat mana yang bagus"), jadi ia mendapat partikel 가. Bandingkan dengan 어디에서 먹어요? yang memakai 에서 karena 어디 berperan sebagai tempat kegiatan.',
      '같이 점심 먹어요 bukan pertanyaan, melainkan ajakan. Bentuknya sama persis dengan kalimat pernyataan — konteks yang menentukan maksudnya.',
      '내일 tidak memakai 에, sama seperti 오늘 dan 어제.',
    ],
  },

  exercises: [
    {
      id: 'm1l3-e1',
      kind: 'build',
      prompt: 'Susun pertanyaan ini.',
      translation: 'Kamu belajar bahasa Korea di mana?',
      tiles: ['어디에서', '한국어를', '공부해요?'],
      distractors: ['어디에', '누가'],
      answers: ['어디에서 한국어를 공부해요?'],
      explain:
        'Kata tanya 어디 tetap berada di posisi keterangan tempat, dan memakai 에서 karena belajar adalah kegiatan yang berlangsung di sana. Urutannya sama persis dengan kalimat pernyataan 카페에서 한국어를 공부해요.',
      parts: [
        { part: '어디에서', role: 'kata tanya tempat kegiatan (어디 + 에서)' },
        { part: '한국어를', role: 'objek yang dipelajari' },
        { part: '공부해요?', role: 'kata kerja; hanya tanda tanya yang membedakannya dari pernyataan' },
      ],
      tags: ['kata tanya', '에서'],
    },
    {
      id: 'm1l3-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat.',
      context: 'Kamu mendengar suara di pintu dan bertanya siapa yang datang.',
      sentence: '___ 와요?',
      translation: 'Siapa yang datang?',
      options: ['누가', '누구를', '누구가', '어디가'],
      answer: '누가',
      explain:
        'Pertanyaannya menanyakan pelaku, jadi 누구 bertemu partikel subjek 가 — dan gabungan itu menyusut menjadi 누가.',
      whyNot: {
        누구를: '를 menandai objek. Di sini "siapa" adalah pelakunya, bukan sasaran tindakan.',
        누구가: 'Bentuk ini tidak ada. 누구 + 가 selalu menyusut menjadi 누가.',
        어디가: '어디 berarti "di mana", bukan "siapa".',
      },
      tags: ['kata tanya'],
    },
    {
      id: 'm1l3-e3',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      sentence: '이름___ 뭐예요?',
      translation: 'Siapa namamu?',
      answers: ['이'],
      explain:
        '이름 adalah subjek kalimat ("namanya apa") dan berakhir dengan 받침 ㅁ, jadi partikelnya 이. Pola ini juga berlaku untuk 취미가 뭐예요? dan 번호가 뭐예요?',
      tags: ['kata tanya', '이/가'],
    },
    {
      id: 'm1l3-e4',
      kind: 'match',
      prompt: 'Pasangkan kata tanya dengan artinya.',
      pairs: [
        { left: '언제', right: 'kapan' },
        { left: '어떻게', right: 'bagaimana, dengan cara apa' },
        { left: '얼마', right: 'berapa (harga)' },
        { left: '몇', right: 'berapa (jumlah)' },
        { left: '왜', right: 'kenapa' },
      ],
      explain:
        'Perhatikan dua kata "berapa": 몇 untuk jumlah dan selalu diikuti penghitung (몇 시, 몇 개, 몇 명), sedangkan 얼마 khusus untuk harga.',
      tags: ['kata tanya'],
    },
    {
      id: 'm1l3-e5',
      kind: 'correct',
      prompt: 'Kalimat ini benar secara tata bahasa, tetapi tidak terdengar wajar. Perbaiki.',
      sentence: '당신은 어디에 가요?',
      translation: 'Kamu mau pergi ke mana?',
      answers: ['어디에 가요'],
      explain:
        '당신 ("Anda") hampir tidak pernah dipakai dalam percakapan sehari-hari dan bisa terdengar menantang atau terlalu intim. Cara paling wajar adalah tidak menyebut lawan bicara sama sekali — konteks sudah menjelaskan siapa yang ditanya. Kalau perlu menyebutnya, pakai nama + 씨: 수진 씨는 어디에 가요?',
      tags: ['kalimat tanya'],
    },
    {
      id: 'm1l3-e6',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Kita bertemu jam berapa?',
      answers: ['몇 시에 만나요?', '우리 몇 시에 만나요?'],
      explain:
        '몇 시 berarti "jam berapa", dan karena menunjuk satu titik waktu, ia memakai partikel 에. Kata kerjanya 만나다 → 만나요.',
      hint: 'Polanya: 몇 시 + 에 + kata kerja.',
      alternatives: [
        { form: '우리 몇 시에 만나요?', nuance: 'Menambahkan 우리 ("kita") kalau ingin lebih eksplisit.' },
      ],
      tags: ['kata tanya', '에'],
    },
    {
      id: 'm1l3-e7',
      kind: 'mc',
      prompt: 'Dari pesan 수진 씨의 메시지, kalimat mana yang BUKAN pertanyaan?',
      options: [
        '같이 점심 먹어요.',
        '내일 시간 있어요?',
        '어디가 좋아요?',
        '몇 시가 좋아요?',
      ],
      answerIndex: 0,
      explain:
        '같이 점심 먹어요 adalah ajakan, bukan pertanyaan — tidak ada tanda tanya dan tidak ada kata tanya. Inilah bukti bahwa satu bentuk 해요체 bisa dipakai untuk pernyataan, pertanyaan, maupun ajakan.',
      whyNot: {
        '내일 시간 있어요?': 'Ini pertanyaan — ditandai tanda tanya di akhir.',
        '어디가 좋아요?': 'Ini pertanyaan dengan kata tanya 어디.',
        '몇 시가 좋아요?': 'Ini pertanyaan dengan kata tanya 몇.',
      },
      tags: ['pemahaman bacaan', 'kalimat tanya'],
    },
  ],

  quiz: [
    {
      id: 'm1l3-q1',
      kind: 'mc',
      prompt: 'Manakah cara yang benar untuk bertanya "Kamu bertemu siapa?"',
      options: ['누구를 만나요?', '누가 만나요?', '누구가 만나요?', '어디를 만나요?'],
      answerIndex: 0,
      explain:
        'Yang ditanyakan adalah orang yang ditemui, yaitu OBJEK, jadi bentuknya 누구 + 를. Bentuk 누가 hanya dipakai kalau "siapa" adalah pelakunya.',
      whyNot: {
        '누가 만나요?': 'Artinya "siapa yang bertemu (dengan seseorang)" — menanyakan pelakunya, bukan orang yang ditemui.',
        '누구가 만나요?': 'Bentuk 누구가 tidak ada; 누구 + 가 selalu menyusut menjadi 누가.',
        '어디를 만나요?': '어디 berarti "di mana", bukan "siapa".',
      },
      tags: ['kata tanya'],
    },
    {
      id: 'm1l3-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      sentence: '회의가 몇 시___ 시작해요?',
      translation: 'Rapatnya mulai jam berapa?',
      answers: ['에'],
      explain:
        '몇 시 menunjuk satu titik waktu, jadi memakai 에. Pola ini berlaku untuk semua jam dan tanggal: 세 시에, 월요일에, 오월에.',
      tags: ['에', 'kata tanya'],
    },
    {
      id: 'm1l3-q3',
      kind: 'build',
      prompt: 'Susun pertanyaannya.',
      translation: 'Kenapa kamu belajar bahasa Korea?',
      tiles: ['왜', '한국어를', '공부해요?'],
      distractors: ['어떻게', '어디에서'],
      answers: ['왜 한국어를 공부해요?'],
      explain:
        '왜 adalah keterangan alasan, jadi ia berdiri di depan tanpa partikel apa pun. Sisanya persis sama dengan kalimat pernyataan 한국어를 공부해요.',
      parts: [
        { part: '왜', role: 'kata tanya alasan, tanpa partikel' },
        { part: '한국어를', role: 'objek' },
        { part: '공부해요?', role: 'kata kerja + tanda tanya' },
      ],
      tags: ['kata tanya'],
    },
  ],

  summary: {
    points: [
      'Kalimat tanya 해요체 bentuknya sama persis dengan kalimat pernyataan — hanya nada dan tanda tanya yang berbeda.',
      'Kata tanya tidak pindah ke depan kalimat; ia duduk di posisi yang sama dengan jawabannya nanti.',
      'Kata tanya tetap membawa partikel sesuai perannya: 어디에, 어디에서, 몇 시에, 누가.',
      '누구 + 가 menyusut menjadi 누가; sebagai objek bentuknya tetap 누구를.',
      'Satu kalimat 해요체 bisa berarti pernyataan, pertanyaan, atau ajakan.',
    ],
    pitfalls: [
      {
        wrong: '누구가 와요?',
        right: '누가 와요?',
        why: '누구 bertemu partikel subjek 가 selalu menyusut menjadi 누가.',
      },
      {
        wrong: '당신은 뭐 해요?',
        right: '뭐 해요?',
        why: '당신 jarang dipakai dalam percakapan. Lebih wajar tanpa menyebut lawan bicara, atau memakai nama + 씨.',
      },
      {
        wrong: '어디 공부해요?',
        right: '어디에서 공부해요?',
        why: 'Kata tanya tetap butuh partikel. Tanpa 에서, perannya dalam kalimat tidak jelas.',
      },
    ],
  },
}
