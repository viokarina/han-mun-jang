import type { Lesson } from '../../types/curriculum'

export const m4l1: Lesson = {
  id: 'm4-l1',
  moduleId: 'm4',
  number: '4.1',
  title: 'Dari kalimat pendek ke kalimat panjang',
  subtitle: 'Menambah waktu, tempat, keterangan, dan menyambung dengan -고',
  objective:
    'Setelah pelajaran ini kamu bisa mengembangkan satu kalimat pendek menjadi kalimat panjang yang alami, langkah demi langkah — dan menyambungkan dua kegiatan dengan -고.',
  focus: ['urutan keterangan', '-고'],
  estimatedMinutes: 16,

  coreExamples: [
    { ko: '밥을 먹어요.', id: 'Saya makan nasi.' },
    { ko: '집에서 밥을 먹어요.', id: 'Saya makan nasi di rumah.', highlight: ['집에서'] },
    {
      ko: '저녁에 집에서 밥을 먹어요.',
      id: 'Saya makan nasi di rumah pada malam hari.',
      highlight: ['저녁에', '집에서'],
    },
    {
      ko: '저는 보통 저녁에 집에서 밥을 먹어요.',
      id: 'Saya biasanya makan nasi di rumah pada malam hari.',
      highlight: ['저는', '보통'],
    },
    {
      ko: '저는 보통 저녁에 집에서 밥을 먹고 책을 읽어요.',
      id: 'Saya biasanya makan nasi di rumah pada malam hari lalu membaca buku.',
      highlight: ['먹고'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '저는 보통 저녁에 집에서 밥을 먹어요.',
        id: 'Saya biasanya makan nasi di rumah pada malam hari.',
        highlight: ['는', '에', '에서', '을'],
      },
      rows: [
        { unit: '저는', formula: '저 + 는', meaning: 'Topik — siapa yang dibicarakan' },
        { unit: '보통', formula: '—', meaning: 'Keterangan frekuensi; tanpa partikel' },
        { unit: '저녁에', formula: '저녁 + 에', meaning: 'Keterangan waktu' },
        { unit: '집에서', formula: '집 + 에서', meaning: 'Keterangan tempat kegiatan' },
        { unit: '밥을', formula: '밥 + 을', meaning: 'Objek' },
        { unit: '먹어요', formula: '먹다 → 먹어요', meaning: 'Kata kerja, menutup kalimat' },
      ],
      why:
        'Urutan netral kalimat Korea selalu sama: TOPIK → FREKUENSI → WAKTU → TEMPAT → OBJEK → KATA KERJA. Kalau kamu menghafal satu urutan saja dalam seluruh kursus ini, hafalkan yang ini. Perhatikan bahwa objek selalu berada tepat sebelum kata kerja — tidak ada keterangan yang boleh menyelip di antara keduanya.',
      swaps: [
        {
          alt: '보통 저는 저녁에 집에서 밥을 먹어요.',
          effect:
            'Keterangan frekuensi boleh pindah ke depan topik. Perubahan ini tidak mengubah arti, hanya sedikit menggeser penekanan ke "biasanya".',
        },
        {
          alt: '저는 보통 집에서 저녁에 밥을 먹어요.',
          effect:
            'Tempat dan waktu boleh bertukar posisi, dan kalimatnya tetap wajar. Tetapi urutan waktu-dulu lebih umum.',
        },
        {
          alt: '저는 밥을 집에서 먹어요. (kurang wajar)',
          effect:
            'Menyelipkan keterangan tempat di antara objek dan kata kerja membuat kalimat terdengar janggal, kecuali kalau kamu sengaja menekankan "di RUMAH".',
        },
      ],
    },
    {
      sentence: {
        ko: '밥을 먹고 책을 읽어요.',
        id: 'Saya makan nasi lalu membaca buku.',
        highlight: ['먹고'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '밥을', formula: '밥 + 을', meaning: 'Objek kegiatan pertama' },
        {
          unit: '먹고',
          formula: '먹다 → 먹 + 고',
          meaning: 'Makan, lalu…; -고 ditempel pada BATANG',
        },
        { unit: '책을', formula: '책 + 을', meaning: 'Objek kegiatan kedua' },
        { unit: '읽어요', formula: '읽다 → 읽어요', meaning: 'Membaca; hanya kata kerja TERAKHIR yang dikonjugasi' },
      ],
      why:
        '-고 menyambungkan dua kegiatan menjadi satu kalimat. Dua hal yang perlu diperhatikan. Pertama, -고 ditempelkan pada BATANG kata, bukan pada bentuk 해요체 — jadi 먹고, bukan 먹어요고. Kedua, hanya kata kerja terakhir yang membawa penanda waktu dan kesopanan. Kalau kalimatnya lampau, cukup kata kerja terakhir yang berubah: 밥을 먹고 책을 읽었어요.',
      swaps: [
        {
          alt: '밥을 먹었고 책을 읽었어요.',
          effect:
            'Boleh, tetapi mengulang penanda lampau di kedua kata kerja terdengar berat. Bentuk yang lebih alami adalah 밥을 먹고 책을 읽었어요.',
        },
        {
          alt: '밥을 먹어서 책을 읽어요. (artinya berbeda)',
          effect:
            '-아/어서 menyatakan ALASAN atau urutan yang berkaitan erat. Kalimat ini jadi berarti "karena makan nasi, saya membaca buku" — tidak masuk akal. Gunakan -고 untuk kegiatan yang sekadar berurutan.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '보통', id: 'biasanya', pos: 'kata keterangan' },
    { ko: '항상', id: 'selalu', pos: 'kata keterangan' },
    { ko: '자주', id: 'sering', pos: 'kata keterangan' },
    { ko: '가끔', id: 'kadang-kadang', pos: 'kata keterangan' },
    { ko: '거의', id: 'hampir (tidak)', pos: 'kata keterangan', note: 'Biasanya dengan penyangkalan: 거의 안 가요.' },
    { ko: '전혀', id: 'sama sekali (tidak)', pos: 'kata keterangan', note: 'Selalu dengan penyangkalan.' },
    { ko: '일찍', id: 'lebih awal, pagi-pagi', pos: 'kata keterangan' },
    { ko: '늦게', id: 'terlambat, larut', pos: 'kata keterangan' },
    { ko: '씻다', id: 'mencuci, membasuh', pos: 'kata kerja', note: '→ 씻어요' },
    { ko: '출근하다', id: 'berangkat kerja', pos: 'kata kerja', note: '→ 출근해요' },
  ],

  grammar: [
    {
      title: 'Urutan baku kalimat Korea',
      form: 'Topik → Frekuensi → Waktu → Tempat → Objek → Kata kerja',
      body:
        'Setiap bagian menjawab pertanyaan yang berbeda, dan posisinya mengikuti urutan dari yang paling umum ke yang paling spesifik. Bagian mana pun boleh dihilangkan, tetapi urutannya tetap.',
      table: {
        caption:
          'Hanya satu posisi yang benar-benar kaku: kata kerja di akhir, dan objek tepat sebelumnya.',
        columns: ['Bagian', 'Menjawab', 'Contoh', 'Partikel'],
        rows: [
          ['Topik', 'Siapa?', '저는', '은/는'],
          ['Frekuensi', 'Seberapa sering?', '보통, 자주, 가끔', '— (tanpa partikel)'],
          ['Waktu', 'Kapan?', '저녁에, 세 시에', '에 (kecuali 오늘/어제/내일)'],
          ['Tempat', 'Di mana?', '집에서, 회사에', '에서 / 에'],
          ['Objek', 'Apa?', '밥을, 책을', '을/를'],
          ['Kata kerja', 'Melakukan apa?', '먹어요, 읽어요', '—'],
        ],
      },
      examples: [
        {
          ko: '저는 가끔 주말에 카페에서 한국어를 공부해요.',
          id: 'Saya kadang-kadang belajar bahasa Korea di kafe pada akhir pekan.',
        },
      ],
      more:
        'Kalau ada dua keterangan waktu, urutannya dari yang BESAR ke yang KECIL — kebalikan dari kebiasaan bahasa Indonesia yang kadang menyebut jam dulu. Jadi 내일 아침 아홉 시에, bukan 아홉 시 내일 아침에. Dan 에 cukup ditempelkan pada yang terakhir saja.',
    },
    {
      title: 'Membangun kalimat selangkah demi selangkah',
      body:
        'Cara paling efektif menulis kalimat Korea yang panjang bukan menerjemahkan kalimat Indonesia sekaligus, melainkan mulai dari inti (objek + kata kerja) lalu menambahkan satu lapis sekaligus dari belakang ke depan.',
      table: {
        columns: ['Langkah', 'Kalimat', 'Yang ditambahkan'],
        rows: [
          ['1', '밥을 먹어요.', 'Inti: objek + kata kerja'],
          ['2', '집에서 밥을 먹어요.', '+ tempat'],
          ['3', '저녁에 집에서 밥을 먹어요.', '+ waktu'],
          ['4', '보통 저녁에 집에서 밥을 먹어요.', '+ frekuensi'],
          ['5', '저는 보통 저녁에 집에서 밥을 먹어요.', '+ topik'],
        ],
      },
      examples: [
        {
          ko: '커피를 마셔요. → 아침에 커피를 마셔요. → 저는 매일 아침에 집에서 커피를 마셔요.',
          id: 'Minum kopi. → Pagi hari minum kopi. → Setiap pagi saya minum kopi di rumah.',
        },
      ],
      more:
        'Kebiasaan ini juga membantumu menghindari kesalahan urutan yang paling umum: menaruh keterangan tempat di belakang objek karena terbawa pola bahasa Indonesia ("makan nasi di rumah"). Kalau kamu membangun dari inti ke luar, keterangan selalu mendarat di posisi yang benar.',
    },
    {
      title: '-고 — menyambung dua kegiatan',
      form: 'batang + 고',
      body:
        'Ditempelkan langsung pada batang kata, tanpa memperhatikan 받침. Hanya kata kerja TERAKHIR yang membawa penanda waktu dan kesopanan.',
      table: {
        columns: ['Dua kalimat', 'Digabung dengan -고', 'Arti'],
        rows: [
          ['밥을 먹어요. 책을 읽어요.', '밥을 먹고 책을 읽어요.', 'Makan lalu membaca'],
          ['샤워해요. 출근해요.', '샤워하고 출근해요.', 'Mandi lalu berangkat kerja'],
          ['친구를 만났어요. 영화를 봤어요.', '친구를 만나고 영화를 봤어요.', 'Bertemu teman lalu nonton'],
        ],
      },
      examples: [
        { ko: '아침에 커피를 마시고 회사에 가요.', id: 'Pagi hari saya minum kopi lalu pergi ke kantor.' },
        {
          ko: '한국어는 어렵고 재미있어요.',
          id: 'Bahasa Korea itu sulit dan menyenangkan.',
          note: '-고 juga menyambungkan dua KATA SIFAT.',
        },
      ],
      mistakes: [
        {
          wrong: '밥을 먹어요고 책을 읽어요.',
          right: '밥을 먹고 책을 읽어요.',
          why: '-고 ditempel pada batang kata, bukan pada bentuk 해요체.',
        },
      ],
      more:
        '-고 punya dua makna yang perlu dibedakan. Pertama, sekadar mendaftar: 한국어는 어렵고 재미있어요 ("sulit DAN menyenangkan"). Kedua, urutan waktu: 밥을 먹고 책을 읽어요 ("makan LALU membaca"). Mana yang dimaksud terlihat dari jenis katanya — kata sifat cenderung mendaftar, kata kerja cenderung berurutan. Untuk urutan waktu yang ingin ditegaskan, ada juga bentuk -고 나서 ("setelah selesai…").',
    },
    {
      title: 'Keterangan yang menuntut penyangkalan',
      body:
        'Beberapa kata keterangan Korea hampir selalu berpasangan dengan bentuk penyangkalan. Memakainya dalam kalimat positif terdengar salah.',
      table: {
        columns: ['Keterangan', 'Arti', 'Contoh'],
        rows: [
          ['거의', 'hampir tidak', '거의 안 가요.'],
          ['전혀', 'sama sekali tidak', '전혀 몰라요.'],
          ['별로', 'tidak begitu', '별로 안 좋아해요.'],
          ['아직', 'belum', '아직 안 왔어요.'],
        ],
      },
      examples: [
        { ko: '저는 커피를 별로 안 좋아해요.', id: 'Saya tidak begitu suka kopi.' },
        { ko: '한국어를 아직 잘 못해요.', id: 'Saya belum terlalu bisa berbahasa Korea.' },
      ],
    },
  ],

  dialogue: {
    title: 'Menceritakan rutinitas pagi',
    situation: 'Sujin bertanya tentang kebiasaan pagi Vio.',
    lines: [
      { speaker: '수진', ko: '비오 씨는 아침에 보통 뭐 해요?', id: 'Vio biasanya pagi-pagi ngapain?' },
      {
        speaker: '비오',
        ko: '일곱 시에 일어나고 샤워해요.',
        id: 'Saya bangun jam tujuh lalu mandi.',
        note: '일어나고 — batang 일어나 + 고. Hanya 샤워해요 yang dikonjugasi.',
      },
      {
        speaker: '수진',
        ko: '아침은 먹어요?',
        id: 'Sarapan?',
        note: '아침은 memakai 은 karena sarapan diangkat sebagai topik baru.',
      },
      {
        speaker: '비오',
        ko: '보통 집에서 빵을 먹고 커피를 마셔요. 가끔 아침을 안 먹어요.',
        id: 'Biasanya saya makan roti dan minum kopi di rumah. Kadang-kadang saya tidak sarapan.',
        note: 'Urutannya: frekuensi (보통) → tempat (집에서) → objek → kata kerja.',
      },
      { speaker: '수진', ko: '저는 아침을 거의 안 먹어요. 시간이 없어요.', id: 'Saya hampir tidak pernah sarapan. Tidak ada waktu.' },
      {
        speaker: '비오',
        ko: '아, 저도 바쁜 날에는 그래요.',
        id: 'Ah, saya juga begitu kalau hari sedang sibuk.',
        note: '바쁜 날에는 — "pada hari yang sibuk"; 바쁜 adalah bentuk 바쁘다 yang menerangkan kata benda.',
      },
    ],
    politeness:
      '그래요 di akhir berfungsi seperti "begitu juga" — menggantikan seluruh kalimat yang baru saja diucapkan lawan bicara. Ini cara ringkas yang sangat sering dipakai dalam percakapan.',
  },

  passage: {
    title: '제 평일',
    intro: 'Satu hari kerja, diceritakan dengan kalimat-kalimat yang makin panjang.',
    sentences: [
      { ko: '저는 보통 일곱 시에 일어나요.', id: 'Saya biasanya bangun jam tujuh.' },
      { ko: '일어나고 바로 물을 마셔요.', id: 'Setelah bangun saya langsung minum air.' },
      { ko: '집에서 간단하게 아침을 먹고 여덟 시에 출근해요.', id: 'Saya sarapan sederhana di rumah lalu berangkat kerja jam delapan.' },
      { ko: '회사에서 아홉 시부터 여섯 시까지 일해요.', id: 'Di kantor saya bekerja dari jam sembilan sampai jam enam.' },
      { ko: '퇴근하고 가끔 친구를 만나요.', id: 'Setelah pulang kerja kadang saya bertemu teman.' },
      { ko: '하지만 보통은 집에 일찍 가고 한국어를 공부해요.', id: 'Tapi biasanya saya pulang lebih awal lalu belajar bahasa Korea.' },
    ],
    vocabInContext: [
      { ko: '바로', id: 'langsung, segera' },
      { ko: '간단하게', id: 'dengan sederhana' },
      { ko: '평일', id: 'hari kerja' },
      { ko: '퇴근하다', id: 'pulang kerja' },
    ],
    analysis: [
      'Kalimat ketiga memuat lima bagian sekaligus: tempat (집에서) → keterangan cara (간단하게) → objek (아침을) → -고 → waktu (여덟 시에) → kata kerja. Perhatikan bahwa setiap klausa punya urutannya sendiri.',
      '일어나고, 먹고, 퇴근하고, 가고 — empat kali -고, semuanya ditempel pada batang kata.',
      'Hanya kata kerja terakhir di setiap kalimat yang membawa 요. Inilah yang membuat kalimat panjang Korea tetap terasa ringan.',
      '보통은 memakai 은 karena sedang dibandingkan dengan 가끔 di kalimat sebelumnya.',
      '간단하게 berasal dari kata sifat 간단하다; akhiran -게 mengubah kata sifat menjadi keterangan, seperti "dengan sederhana".',
    ],
  },

  exercises: [
    {
      id: 'm4l1-e1',
      kind: 'build',
      prompt: 'Susun kalimat panjang ini dengan urutan yang benar.',
      translation: 'Saya biasanya makan nasi di rumah pada malam hari.',
      tiles: ['저는', '보통', '저녁에', '집에서', '밥을', '먹어요'],
      distractors: ['집에', '저녁'],
      answers: [
        '저는 보통 저녁에 집에서 밥을 먹어요',
        '보통 저는 저녁에 집에서 밥을 먹어요',
        '저는 보통 집에서 저녁에 밥을 먹어요',
      ],
      explain:
        'Urutan bakunya: topik → frekuensi → waktu → tempat → objek → kata kerja. Objek harus berada tepat sebelum kata kerja.',
      parts: [
        { part: '저는', role: 'topik' },
        { part: '보통', role: 'frekuensi, tanpa partikel' },
        { part: '저녁에', role: 'waktu dengan 에' },
        { part: '집에서', role: 'tempat kegiatan dengan 에서' },
        { part: '밥을', role: 'objek' },
        { part: '먹어요', role: 'kata kerja penutup' },
      ],
      altNote:
        'Menukar posisi 보통 dengan 저는, atau waktu dengan tempat, juga diterima — yang tidak boleh adalah memisahkan objek dari kata kerjanya.',
      tags: ['urutan keterangan'],
    },
    {
      id: 'm4l1-e2',
      kind: 'fill',
      prompt: 'Sambungkan kedua kegiatan dengan -고.',
      sentence: '아침에 커피를 ___ 회사에 가요. (마시다)',
      translation: 'Pagi hari saya minum kopi lalu pergi ke kantor.',
      answers: ['마시고'],
      explain:
        '-고 ditempel pada BATANG kata (마시), bukan pada bentuk 해요체. Jadi hasilnya 마시고, bukan 마셔요고.',
      hint: 'Batang 마시다 adalah 마시.',
      tags: ['-고'],
    },
    {
      id: 'm4l1-e3',
      kind: 'correct',
      prompt: 'Perbaiki letak keterangan tempatnya.',
      sentence: '저는 밥을 집에서 먹어요.',
      translation: 'Saya makan nasi di rumah.',
      answers: ['저는 집에서 밥을 먹어요'],
      explain:
        'Keterangan tempat berada SEBELUM objek, bukan sesudahnya. Pola bahasa Indonesia ("makan nasi di rumah") membuat urutan ini terasa benar, padahal dalam bahasa Korea objek harus menempel pada kata kerjanya.',
      tags: ['urutan keterangan'],
    },
    {
      id: 'm4l1-e4',
      kind: 'correct',
      prompt: 'Perbaiki bentuk penyambungnya.',
      sentence: '밥을 먹어요고 책을 읽어요.',
      translation: 'Saya makan nasi lalu membaca buku.',
      answers: ['밥을 먹고 책을 읽어요'],
      explain:
        '-고 ditempel pada batang kata (먹), bukan pada bentuk 해요체. Dan hanya kata kerja terakhir yang membawa akhiran 요.',
      tags: ['-고'],
    },
    {
      id: 'm4l1-e5',
      kind: 'match',
      prompt: 'Pasangkan setiap bagian kalimat dengan pertanyaan yang dijawabnya.',
      pairs: [
        { left: '저는', right: 'Siapa? (topik)' },
        { left: '보통', right: 'Seberapa sering?' },
        { left: '저녁에', right: 'Kapan?' },
        { left: '집에서', right: 'Di mana?' },
        { left: '밥을', right: 'Apa?' },
        { left: '먹어요', right: 'Melakukan apa?' },
      ],
      explain:
        'Urutan bagian-bagian ini mengikuti urutan pertanyaannya: dari yang paling umum (siapa) ke yang paling spesifik (melakukan apa).',
      tags: ['urutan keterangan'],
    },
    {
      id: 'm4l1-e6',
      kind: 'build',
      prompt: 'Susun kalimat yang menyambungkan dua kegiatan.',
      translation: 'Setelah pulang kerja kadang saya bertemu teman.',
      tiles: ['퇴근하고', '가끔', '친구를', '만나요'],
      distractors: ['퇴근해요고', '친구하고'],
      answers: ['퇴근하고 가끔 친구를 만나요', '가끔 퇴근하고 친구를 만나요'],
      explain:
        '퇴근하고 memakai batang 퇴근하 + 고. 만나다 memakai objek dengan 를 — bukan 하고 — karena orang yang ditemui adalah objeknya.',
      parts: [
        { part: '퇴근하고', role: 'kegiatan pertama; batang + 고' },
        { part: '가끔', role: 'frekuensi' },
        { part: '친구를', role: 'objek dari 만나다' },
        { part: '만나요', role: 'kata kerja terakhir, membawa akhiran 요' },
      ],
      tags: ['-고'],
    },
    {
      id: 'm4l1-e7',
      kind: 'write',
      prompt:
        'Perluas kalimat 커피를 마셔요 dengan menambahkan topik, frekuensi, waktu, dan tempat.',
      guide: [
        'Mulai dari inti: 커피를 마셔요.',
        'Tambahkan tempat dengan 에서.',
        'Tambahkan waktu dengan 에.',
        'Tambahkan frekuensi (매일, 보통, 가끔) — tanpa partikel.',
        'Terakhir tambahkan topik 저는.',
      ],
      model: '저는 매일 아침에 집에서 커피를 마셔요.',
      modelTranslation: 'Setiap pagi saya minum kopi di rumah.',
      expect: ['커피를', '마셔요', '에서'],
      checklist: [
        'Kata kerjanya tetap di akhir kalimat.',
        'Objek 커피를 berada tepat sebelum kata kerja.',
        'Keterangan tempat memakai 에서 karena minum adalah kegiatan.',
        'Keterangan frekuensi tidak memakai partikel apa pun.',
      ],
      tags: ['urutan keterangan'],
    },
  ],

  quiz: [
    {
      id: 'm4l1-q1',
      kind: 'mc',
      prompt: 'Manakah urutan yang paling netral dan wajar?',
      options: [
        '저는 자주 주말에 도서관에서 책을 읽어요.',
        '저는 책을 자주 도서관에서 주말에 읽어요.',
        '책을 읽어요 저는 자주 주말에 도서관에서.',
        '자주 책을 저는 주말에 도서관에서 읽어요.',
      ],
      answerIndex: 0,
      explain:
        'Urutan bakunya: topik (저는) → frekuensi (자주) → waktu (주말에) → tempat (도서관에서) → objek (책을) → kata kerja (읽어요).',
      whyNot: {
        '저는 책을 자주 도서관에서 주말에 읽어요.': 'Objek terlempar jauh dari kata kerjanya.',
        '책을 읽어요 저는 자주 주말에 도서관에서.': 'Kata kerja tidak berada di akhir kalimat.',
        '자주 책을 저는 주말에 도서관에서 읽어요.': 'Objek terpisah dari kata kerja dan topiknya terselip di tengah.',
      },
      tags: ['urutan keterangan'],
    },
    {
      id: 'm4l1-q2',
      kind: 'fill',
      prompt: 'Sambungkan dengan -고, dalam bentuk lampau.',
      sentence: '어제 친구를 ___ 영화를 봤어요. (만나다)',
      translation: 'Kemarin saya bertemu teman lalu menonton film.',
      answers: ['만나고'],
      explain:
        'Hanya kata kerja TERAKHIR yang membawa penanda lampau. Kata kerja pertama cukup memakai batang + 고, jadi 만나고 — bukan 만났고.',
      alternatives: [
        { form: '만났고', nuance: 'Bisa dipahami, tetapi mengulang penanda lampau terdengar berat.' },
      ],
      tags: ['-고'],
    },
    {
      id: 'm4l1-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya kadang-kadang belajar bahasa Korea di kafe pada akhir pekan.',
      answers: [
        '저는 가끔 주말에 카페에서 한국어를 공부해요',
        '가끔 주말에 카페에서 한국어를 공부해요',
        '저는 주말에 가끔 카페에서 한국어를 공부해요',
      ],
      explain:
        'Urutannya: 저는 (topik) → 가끔 (frekuensi) → 주말에 (waktu) → 카페에서 (tempat) → 한국어를 (objek) → 공부해요 (kata kerja).',
      hint: 'Ikuti urutan: siapa → seberapa sering → kapan → di mana → apa → melakukan apa.',
      tags: ['urutan keterangan'],
    },
  ],

  summary: {
    points: [
      'Urutan baku: topik → frekuensi → waktu → tempat → objek → kata kerja.',
      'Objek selalu berada tepat sebelum kata kerja; jangan selipkan keterangan di antaranya.',
      'Bangun kalimat panjang dari inti ke luar, bukan dengan menerjemahkan kalimat Indonesia sekaligus.',
      '-고 ditempel pada BATANG kata dan menyambungkan dua kegiatan atau dua kata sifat.',
      'Hanya kata kerja TERAKHIR yang membawa penanda waktu dan akhiran 요.',
      '거의, 전혀, 별로, dan 아직 hampir selalu berpasangan dengan bentuk penyangkalan.',
    ],
    pitfalls: [
      {
        wrong: '저는 밥을 집에서 먹어요.',
        right: '저는 집에서 밥을 먹어요.',
        why: 'Keterangan tempat berada sebelum objek, bukan sesudahnya.',
      },
      {
        wrong: '밥을 먹어요고 책을 읽어요.',
        right: '밥을 먹고 책을 읽어요.',
        why: '-고 ditempel pada batang kata, bukan pada bentuk 해요체.',
      },
      {
        wrong: '아홉 시 내일 아침에 만나요.',
        right: '내일 아침 아홉 시에 만나요.',
        why: 'Keterangan waktu disusun dari yang besar ke yang kecil.',
      },
    ],
  },
}
