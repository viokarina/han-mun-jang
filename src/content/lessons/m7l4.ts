import type { Lesson } from '../../types/curriculum'

export const m7l4: Lesson = {
  id: 'm7-l4',
  moduleId: 'm7',
  number: '7.4',
  title: 'Ngobrol soal K-pop',
  subtitle: '-잖아요, melembutkan pendapat, dan kosakata fandom',
  objective:
    'Setelah pelajaran ini kamu bisa membicarakan idol favoritmu dengan natural — menyebut siapa 최애-mu, memuji kemampuannya, dan menyampaikan pendapat tanpa terdengar memaksa.',
  focus: ['-잖아요', '-(으)ㄴ/는 것 같다', 'kosakata fandom'],
  estimatedMinutes: 18,

  coreExamples: [
    { ko: '최애가 누구예요?', id: 'Siapa bias kamu?', highlight: ['가'] },
    { ko: '이번 신곡 들었어요?', id: 'Sudah dengar lagu barunya?', highlight: ['들었어요'], highlightKind: 'ending' },
    {
      ko: '춤을 정말 잘 추잖아요.',
      id: 'Nari-nya jago banget, kan.',
      highlight: ['추잖아요'],
      highlightKind: 'ending',
    },
    {
      ko: '이 노래가 제일 좋은 것 같아요.',
      id: 'Menurut saya lagu ini yang paling bagus.',
      highlight: ['좋은 것 같아요'],
      highlightKind: 'ending',
    },
    { ko: '콘서트 티켓팅 성공했어요!', id: 'Berhasil dapat tiket konser!', highlight: ['성공했어요'], highlightKind: 'ending' },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '춤을 정말 잘 추잖아요.',
        id: 'Nari-nya jago banget, kan.',
        highlight: ['추잖아요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '춤을', formula: '춤 + 을', meaning: 'Tarian — objek; "menari" harfiahnya "menarikan tarian"' },
        { unit: '정말', formula: '—', meaning: 'Sungguh, benar-benar' },
        { unit: '잘', formula: '—', meaning: 'Dengan baik, jago' },
        { unit: '추잖아요', formula: '추다 → 추 + 잖아요', meaning: 'Menari — "kan, kamu juga tahu"' },
      ],
      why:
        '-잖아요 dipakai saat kamu mengingatkan lawan bicara tentang sesuatu yang KALIAN BERDUA sudah tahu. Bedanya dengan -죠? dari Pelajaran 7.2 penting: -죠? berbentuk pertanyaan dan mengajak setuju, sedangkan -잖아요 adalah pernyataan yang berarti "kan, itu kan sudah jelas". Perhatikan juga 춤을 추다 — dalam bahasa Korea "menari" secara harfiah adalah "menarikan tarian", jadi 춤 berperan sebagai objek dengan 을.',
      swaps: [
        {
          alt: '춤을 정말 잘 춰요.',
          effect: 'Pernyataan biasa. Menyampaikan fakta tanpa mengandaikan lawan bicara sudah tahu.',
        },
        {
          alt: '춤을 정말 잘 추죠?',
          effect:
            'Berbentuk pertanyaan, mengajak lawan bicara mengangguk. Lebih lembut daripada -잖아요 karena tidak mengandaikan apa pun.',
        },
      ],
    },
    {
      sentence: {
        ko: '이 노래가 제일 좋은 것 같아요.',
        id: 'Menurut saya lagu ini yang paling bagus.',
        highlight: ['좋은 것 같아요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '이 노래가', formula: '이 노래 + 가', meaning: 'Lagu ini — subjek dari kata sifat' },
        { unit: '제일', formula: '—', meaning: 'Paling' },
        { unit: '좋은', formula: '좋다 → 좋은', meaning: 'Yang bagus — kata sifat yang menerangkan' },
        { unit: '것', formula: '—', meaning: '"Hal", kata benda penyangga' },
        { unit: '같아요', formula: '같다 → 같아요', meaning: 'Sepertinya, tampaknya' },
      ],
      why:
        'Pola -(으)ㄴ/는 것 같다 berarti "sepertinya" atau "menurut saya". Orang Korea memakainya terus-menerus untuk melembutkan pendapat — menyatakan pendapat secara langsung bisa terdengar memaksakan diri. Bentuknya bergantung pada jenis kata: KATA SIFAT memakai -(으)ㄴ 것 같다 (좋은 것 같아요), sedangkan KATA KERJA memakai -는 것 같다 (잘하는 것 같아요).',
      swaps: [
        {
          alt: '이 노래가 제일 좋아요.',
          effect: 'Pendapat langsung. Tidak salah, hanya terdengar lebih tegas dan yakin.',
        },
        {
          alt: '저는 이 노래를 제일 좋아해요.',
          effect:
            'Memakai kata kerja 좋아하다, jadi lagunya menjadi objek dengan 를 — persis aturan dari Pelajaran 2.3.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '아이돌', id: 'idol', pos: 'kata benda' },
    { ko: '최애', id: 'bias, favorit nomor satu', pos: 'kata benda', note: 'Dari 최고 + 애정. Bahasa fandom.' },
    { ko: '입덕하다', id: 'mulai jadi penggemar', pos: 'kata kerja', note: 'Lawannya 탈덕하다 (berhenti jadi fan).' },
    { ko: '컴백', id: 'comeback, rilis baru', pos: 'kata benda' },
    { ko: '신곡', id: 'lagu baru', pos: 'kata benda' },
    { ko: '앨범', id: 'album', pos: 'kata benda' },
    { ko: '굿즈', id: 'merchandise', pos: 'kata benda' },
    { ko: '응원봉', id: 'lightstick', pos: 'kata benda' },
    { ko: '티켓팅', id: 'perburuan tiket', pos: 'kata benda', note: 'Kalau sangat sulit disebut 피켓팅.' },
    {
      ko: '춤을 추다',
      id: 'menari',
      pos: 'ungkapan',
      note: 'Harfiahnya "menarikan tarian". 해요체: 춤을 춰요.',
    },
    { ko: '빠지다', id: 'jatuh cinta pada, ketagihan', pos: 'kata kerja', note: '〜에 빠지다. 해요체: 빠져요.' },
  ],

  grammar: [
    {
      title: '-잖아요 — "kan, kamu juga tahu"',
      form: 'batang + 잖아요',
      body:
        'Dipakai saat kamu merujuk pada sesuatu yang sudah diketahui bersama. Nadanya seperti "kan" dalam "dia kan jago banget" — mengingatkan, bukan memberi informasi baru.',
      table: {
        caption: 'Ditempel pada BATANG, termasuk batang bentuk lampau.',
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['좋다', '좋', '좋잖아요', 'bagus kan'],
          ['추다', '추', '추잖아요', 'menari kan'],
          ['하다', '하', '하잖아요', 'melakukan kan'],
          ['먹었다', '먹었', '먹었잖아요', 'sudah makan kan'],
          ['이다', '이', '학생이잖아요', 'pelajar kan'],
        ],
      },
      examples: [
        { ko: '티켓팅 진짜 어렵잖아요.', id: 'Perburuan tiketnya susah banget kan.' },
        { ko: '어제 말했잖아요.', id: 'Kan kemarin sudah saya bilang.' },
        { ko: '그 그룹 유명하잖아요.', id: 'Grup itu kan terkenal.' },
      ],
      more:
        'Satu catatan sosial: karena -잖아요 mengandaikan lawan bicara SEHARUSNYA sudah tahu, memakainya kepada orang yang lebih senior atau belum akrab bisa terdengar seperti menegur — "kan sudah saya bilang". Di antara teman atau sesama penggemar, pemakaiannya sangat wajar dan membuat obrolan terasa akrab. Versi 반말-nya: 좋잖아.',
    },
    {
      title: '-(으)ㄴ/는 것 같다 — melembutkan pendapat',
      body:
        'Bentuknya bergantung pada jenis kata dan waktunya. Ini mungkin pola paling sering dipakai orang Korea untuk menyampaikan pendapat tanpa terdengar memaksakan.',
      table: {
        caption:
          'Patokan cepat: kata sifat pakai -(으)ㄴ, kata kerja sekarang pakai -는.',
        columns: ['Jenis kata', 'Pola', 'Contoh', 'Arti'],
        rows: [
          ['Kata sifat', '-(으)ㄴ 것 같다', '좋은 것 같아요', 'sepertinya bagus'],
          ['Kata sifat (konsonan)', '-은 것 같다', '많은 것 같아요', 'sepertinya banyak'],
          ['Kata kerja (sekarang)', '-는 것 같다', '잘하는 것 같아요', 'sepertinya pandai'],
          ['Kata kerja (lampau)', '-(으)ㄴ 것 같다', '간 것 같아요', 'sepertinya sudah pergi'],
          ['Kata benda', '인 것 같다', '학생인 것 같아요', 'sepertinya pelajar'],
        ],
      },
      examples: [
        { ko: '이 노래가 제일 좋은 것 같아요.', id: 'Menurut saya lagu ini yang paling bagus.' },
        { ko: '춤을 제일 잘 추는 것 같아요.', id: 'Menurut saya dia yang paling jago menari.' },
        { ko: '벌써 간 것 같아요.', id: 'Sepertinya dia sudah pergi.' },
      ],
      more:
        'Kenapa orang Korea begitu sering melembutkan pendapat? Karena menyatakan sesuatu terlalu pasti bisa terdengar seolah kamu menutup ruang bagi pendapat orang lain. Memakai 것 같아요 meninggalkan ruang itu terbuka. Kamu akan mendengarnya bahkan untuk hal yang jelas-jelas diketahui pembicara — termasuk tentang perasaannya sendiri: 저도 좋은 것 같아요.',
    },
    {
      title: '잘하다 dan 잘 + kata kerja',
      body:
        'Untuk memuji kemampuan seseorang — bagian paling penting dari obrolan K-pop — bahasa Korea punya dua pola yang bergantung pada katanya.',
      table: {
        columns: ['Kemampuan', 'Bahasa Korea', 'Catatan'],
        rows: [
          ['menyanyi', '노래를 잘해요', '잘하다 sebagai satu kata'],
          ['menari', '춤을 잘 춰요', '잘 + 추다 terpisah'],
          ['berakting', '연기를 잘해요', '잘하다'],
          ['berbahasa Korea', '한국어를 잘해요', '잘하다'],
          ['memasak', '요리를 잘해요', '잘하다'],
          ['rap', '랩을 잘해요', '잘하다'],
        ],
      },
      examples: [
        { ko: '노래도 잘하고 춤도 잘 춰요.', id: 'Nyanyinya bagus, narinya juga jago.' },
        { ko: '연기도 잘하는 것 같아요.', id: 'Sepertinya aktingnya juga bagus.' },
      ],
      mistakes: [
        {
          wrong: '춤을 잘해요.',
          right: '춤을 잘 춰요.',
          why: '춤 berpasangan dengan kata kerja 추다. Untuk kebanyakan kemampuan lain, 잘하다 bisa dipakai langsung.',
        },
      ],
    },
    {
      title: 'Kosakata fandom yang benar-benar dipakai',
      body:
        'Kata-kata ini tidak ada di buku pelajaran, tetapi muncul di setiap komentar dan obrolan penggemar. Sebagian besar adalah singkatan atau serapan.',
      table: {
        columns: ['Kata', 'Arti', 'Asal / catatan'],
        rows: [
          ['최애', 'bias, favorit utama', '최고 + 애정'],
          ['입덕', 'mulai jadi penggemar', '入 + 덕후'],
          ['덕질', 'aktivitas ngefans', 'Dari 덕후'],
          ['컴백', 'rilis baru', 'Dari "comeback"'],
          ['굿즈', 'merchandise', 'Dari "goods"'],
          ['응원봉', 'lightstick', '응원 (dukungan) + 봉 (tongkat)'],
          ['티켓팅', 'perburuan tiket', 'Kalau brutal: 피켓팅'],
          ['막내 / 리더', 'anggota termuda / ketua', 'Dipakai juga di luar K-pop'],
        ],
      },
      examples: [
        { ko: '작년에 입덕했어요.', id: 'Saya mulai jadi fan tahun lalu.' },
        { ko: '이번 컴백 기대돼요.', id: 'Saya nggak sabar menunggu comeback kali ini.' },
      ],
      more:
        'Kata 막내 ("yang termuda") dan 리더 bukan khusus K-pop — 막내 dipakai untuk anak bungsu di keluarga mana pun, dan kamu akan mendengarnya di kantor juga untuk menyebut karyawan paling junior. Begitu pula 덕후, yang berasal dari kata Jepang "otaku" dan kini berarti penggemar berat apa saja, bukan hanya K-pop.',
    },
  ],

  dialogue: {
    title: 'Ngobrol di pantry soal comeback',
    situation: 'Sujin memergoki Vio sedang menonton video musik di ponselnya.',
    lines: [
      { speaker: '수진', ko: '비오 씨, 케이팝 좋아해요?', id: 'Vio, suka K-pop?' },
      {
        speaker: '비오',
        ko: '네! 요즘 완전 빠졌어요.',
        id: 'Iya! Akhir-akhir ini benar-benar ketagihan.',
        note: '완전 adalah bahasa percakapan untuk "banget"; 빠지다 = terjatuh ke dalam, ketagihan.',
      },
      { speaker: '수진', ko: '최애가 누구예요?', id: 'Siapa bias kamu?' },
      {
        speaker: '비오',
        ko: '저는 리더요. 춤을 정말 잘 추잖아요.',
        id: 'Saya sih leadernya. Narinya jago banget kan.',
        note: '-잖아요 karena ia menganggap Sujin pun sudah tahu.',
      },
      { speaker: '수진', ko: '맞아요! 이번 신곡 들었어요?', id: 'Bener! Sudah dengar lagu barunya?' },
      {
        speaker: '비오',
        ko: '네, 들었어요. 이 노래가 제일 좋은 것 같아요.',
        id: 'Sudah. Menurut saya lagu ini yang paling bagus.',
        note: '좋은 것 같아요 melembutkan pendapat — lebih wajar daripada 제일 좋아요.',
      },
      { speaker: '수진', ko: '저도요. 그런데 콘서트 티켓팅 했어요?', id: 'Saya juga. Eh, sudah ikut war tiket konser?' },
      { speaker: '비오', ko: '했어요! 성공했어요!', id: 'Sudah! Berhasil!' },
      {
        speaker: '수진',
        ko: '와, 대단해요. 티켓팅 진짜 어렵잖아요.',
        id: 'Wah, hebat. War tiket kan susah banget.',
        note: 'Lagi-lagi -잖아요 — pengetahuan bersama antar sesama penggemar.',
      },
    ],
    politeness:
      'Seluruh percakapan memakai 해요체 karena mereka rekan kerja. Tetapi kosakatanya sangat santai: 완전, 최애, 티켓팅. Inilah pola yang sangat lazim di Korea — tingkat kesopanan tetap terjaga lewat akhiran, sementara kosakatanya bebas dan akrab.',
  },

  passage: {
    title: '제 최애 이야기',
    intro: 'Bagaimana seseorang jatuh ke dalam fandom.',
    sentences: [
      { ko: '저는 작년에 케이팝에 입덕했어요.', id: 'Saya mulai jadi penggemar K-pop tahun lalu.' },
      { ko: '유튜브에서 뮤직비디오를 봤어요. 그때부터 팬이 됐어요.', id: 'Saya menonton video musik di YouTube. Sejak saat itu saya jadi penggemar.' },
      { ko: '제 최애는 그룹의 메인댄서예요.', id: 'Bias saya adalah main dancer grup itu.' },
      { ko: '춤을 정말 잘 추고 노래도 잘해요.', id: 'Narinya jago sekali dan nyanyinya juga bagus.' },
      { ko: '지난달에 새 앨범이 나왔어요.', id: 'Bulan lalu album barunya keluar.' },
      { ko: '저는 앨범하고 응원봉을 샀어요.', id: 'Saya membeli albumnya dan lightstick.' },
      { ko: '다음에는 꼭 콘서트에 가고 싶어요.', id: 'Lain kali saya benar-benar ingin pergi ke konsernya.' },
    ],
    vocabInContext: [
      { ko: '뮤직비디오', id: 'video musik' },
      { ko: '팬이 되다', id: 'menjadi penggemar' },
      { ko: '메인댄서', id: 'penari utama' },
      { ko: '나오다', id: 'keluar, dirilis' },
    ],
    analysis: [
      '케이팝에 입덕했어요 — 입덕하다 memakai 에 untuk menandai ke dalam apa kamu "jatuh", sama seperti 〜에 빠지다.',
      '그때부터 memakai 부터 ("sejak") dari Pelajaran 2.9 — titik awal waktu.',
      '팬이 됐어요 — 되다 ("menjadi") menuntut 이/가 pada hasilnya, bukan 을/를. Jadi 팬이 됐어요, bukan 팬을 됐어요.',
      '춤을 정말 잘 추고 노래도 잘해요 — dua pola berbeda dalam satu kalimat: 춤 memakai 추다, sedangkan 노래 memakai 잘하다.',
      '새 앨범이 나왔어요 — 나오다 ("keluar") dipakai untuk rilis, sama seperti untuk makanan yang disajikan di Pelajaran 5.3.',
      '가고 싶어요 adalah pola keinginan dari Pelajaran 3.3, dan 꼭 ("pasti, benar-benar") memperkuatnya.',
    ],
  },

  exercises: [
    {
      id: 'm7l4-e1',
      kind: 'fill',
      prompt: 'Ubah 어렵다 menjadi bentuk -잖아요.',
      context: 'Kalian berdua sama-sama tahu perburuan tiket itu susah.',
      sentence: '티켓팅 진짜 ___.',
      translation: 'War tiket kan susah banget.',
      answers: ['어렵잖아요'],
      explain:
        '-잖아요 ditempel pada batang (어렵). Dipakai karena kamu merujuk pada hal yang lawan bicara pun sudah tahu — bukan memberi informasi baru.',
      hint: 'Ditempel pada batang, bukan pada bentuk 해요체.',
      tags: ['-잖아요'],
    },
    {
      id: 'm7l4-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang tepat untuk melembutkan pendapat.',
      context: '좋다 adalah KATA SIFAT.',
      sentence: '이 노래가 제일 ___.',
      translation: 'Menurut saya lagu ini yang paling bagus.',
      options: ['좋은 것 같아요', '좋는 것 같아요', '좋을 것 같아요', '좋은 것 해요'],
      answer: '좋은 것 같아요',
      explain:
        'Kata SIFAT memakai -(으)ㄴ 것 같다. 좋다 berakhir konsonan ㅎ, jadi bentuknya 좋은 것 같아요.',
      whyNot: {
        '좋는 것 같아요': '-는 것 같다 khusus untuk KATA KERJA bentuk sekarang, bukan kata sifat.',
        '좋을 것 같아요': 'Bentuk ini ada, tetapi artinya "sepertinya AKAN bagus" — dugaan tentang masa depan.',
        '좋은 것 해요': '같다 tidak bisa diganti 하다 dalam pola ini.',
      },
      tags: ['-(으)ㄴ/는 것 같다'],
    },
    {
      id: 'm7l4-e3',
      kind: 'fill',
      prompt: 'Lengkapi pujian ini.',
      context: '춤 berpasangan dengan kata kerja khusus.',
      sentence: '춤을 정말 ___.',
      translation: 'Narinya jago banget.',
      answers: ['잘 춰요', '잘 춥니다'],
      explain:
        '춤 selalu berpasangan dengan 추다, jadi bentuknya 춤을 잘 춰요 — bukan 춤을 잘해요. Untuk kemampuan lain seperti 노래 dan 연기, barulah dipakai 잘하다.',
      tags: ['잘하다'],
    },
    {
      id: 'm7l4-e4',
      kind: 'match',
      prompt: 'Pasangkan istilah fandom dengan artinya.',
      pairs: [
        { left: '최애', right: 'bias, favorit utama' },
        { left: '입덕하다', right: 'mulai jadi penggemar' },
        { left: '컴백', right: 'rilis baru' },
        { left: '굿즈', right: 'merchandise' },
        { left: '응원봉', right: 'lightstick' },
        { left: '티켓팅', right: 'perburuan tiket' },
      ],
      explain:
        'Sebagian besar istilah ini adalah serapan atau singkatan, dan tidak akan kamu temukan di buku pelajaran — tetapi muncul di hampir setiap obrolan penggemar.',
      tags: ['kosakata fandom'],
    },
    {
      id: 'm7l4-e5',
      kind: 'mc',
      prompt: 'Apa bedanya 어렵죠? dan 어렵잖아요?',
      options: [
        '어렵죠? bertanya mengajak setuju; 어렵잖아요 menyatakan "kan, kamu juga tahu".',
        '어렵죠? lebih santai daripada 어렵잖아요.',
        '어렵죠? bentuk lampau.',
        'Keduanya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '-죠? berbentuk pertanyaan dan membiarkan lawan bicara menjawab. -잖아요 adalah pernyataan yang mengandaikan lawan bicara SUDAH tahu — karena itu ia terdengar lebih akrab, tetapi juga bisa terasa menegur kalau salah sasaran.',
      whyNot: {
        '어렵죠? lebih santai daripada 어렵잖아요.': 'Justru -잖아요 yang lebih akrab dan berisiko.',
        '어렵죠? bentuk lampau.': 'Keduanya bentuk sekarang.',
        'Keduanya sama persis.': 'Satu bertanya, satu mengandaikan pengetahuan bersama.',
      },
      tags: ['-잖아요'],
    },
    {
      id: 'm7l4-e6',
      kind: 'build',
      prompt: 'Susun kalimat pujian ini.',
      translation: 'Nyanyinya bagus, narinya juga jago.',
      tiles: ['노래도', '잘하고', '춤도', '잘 춰요'],
      distractors: ['춤도 잘해요', '노래를'],
      answers: ['노래도 잘하고 춤도 잘 춰요'],
      explain:
        'Dua pola berbeda dalam satu kalimat: 노래 memakai 잘하다, sedangkan 춤 memakai 추다. Partikel 도 ("juga") menggantikan 을/를 pada keduanya — persis aturan Pelajaran 2.6.',
      parts: [
        { part: '노래도', role: 'objek + 도 ("juga"), menggantikan 를' },
        { part: '잘하고', role: '잘하다 + -고 untuk menyambung' },
        { part: '춤도', role: 'objek kedua + 도' },
        { part: '잘 춰요', role: '잘 + 추다, karena 춤 butuh 추다' },
      ],
      tags: ['잘하다'],
    },
    {
      id: 'm7l4-e7',
      kind: 'correct',
      prompt: 'Perbaiki partikelnya.',
      sentence: '그때부터 팬을 됐어요.',
      translation: 'Sejak saat itu saya jadi penggemar.',
      answers: ['그때부터 팬이 됐어요'],
      explain:
        '되다 ("menjadi") menuntut hasilnya memakai 이/가, bukan 을/를 — masuk kelompok yang sama dengan 있다, 없다, dan 필요하다 dari Pelajaran 2.3.',
      tags: ['kosakata fandom'],
    },
    {
      id: 'm7l4-e8',
      kind: 'mc',
      prompt: 'Dari bacaan 제 최애 이야기, bagaimana penulis mulai jadi penggemar?',
      options: [
        'Setelah menonton video musik di YouTube.',
        'Setelah pergi ke konser.',
        'Setelah membeli album.',
        'Karena diajak teman kantornya.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat kedua berbunyi 유튜브에서 뮤직비디오를 봤어요. 그때부터 팬이 됐어요 — "sejak saat itu saya jadi penggemar". Konser justru masih menjadi keinginan di kalimat terakhir.',
      whyNot: {
        'Setelah pergi ke konser.': 'Konser belum terjadi — 다음에는 꼭 콘서트에 가고 싶어요.',
        'Setelah membeli album.': 'Album dibeli setelah ia sudah menjadi penggemar.',
        'Karena diajak teman kantornya.': 'Tidak disebut dalam bacaan.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm7l4-q1',
      kind: 'fill',
      prompt: 'Ubah 잘하다 menjadi bentuk melembutkan pendapat.',
      context: '잘하다 adalah KATA KERJA dalam bentuk sekarang.',
      sentence: '연기도 ___.',
      translation: 'Sepertinya aktingnya juga bagus.',
      answers: ['잘하는 것 같아요'],
      explain:
        'Kata KERJA bentuk sekarang memakai -는 것 같다, jadi 잘하다 → 잘하는 것 같아요. Bandingkan dengan kata sifat yang memakai -(으)ㄴ: 좋은 것 같아요.',
      tags: ['-(으)ㄴ/는 것 같다'],
    },
    {
      id: 'm7l4-q2',
      kind: 'mc',
      prompt: 'Kapan sebaiknya kamu TIDAK memakai -잖아요?',
      options: [
        'Kepada atasan atau orang yang belum akrab — bisa terdengar seperti menegur.',
        'Kepada teman dekat.',
        'Saat membicarakan idol.',
        'Dalam kalimat bentuk lampau.',
      ],
      answerIndex: 0,
      explain:
        'Karena -잖아요 mengandaikan lawan bicara SEHARUSNYA sudah tahu, memakainya kepada orang yang lebih senior bisa terdengar seperti "kan sudah saya bilang". Di antara teman, justru terdengar akrab.',
      whyNot: {
        'Kepada teman dekat.': 'Justru di sinilah -잖아요 paling wajar.',
        'Saat membicarakan idol.': 'Tidak ada hubungannya dengan topik.',
        'Dalam kalimat bentuk lampau.': '먹었잖아요 sepenuhnya benar.',
      },
      tags: ['-잖아요'],
    },
    {
      id: 'm7l4-q3',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Siapa bias kamu?',
      answers: ['최애가 누구예요?', '최애는 누구예요?'],
      explain:
        '누구 memakai 예요 karena berakhir vokal, dan 최애 memakai 가 karena pertanyaannya menanyakan identitas — pola yang sama dengan 이름이 뭐예요? di Pelajaran 1.3.',
      tags: ['kosakata fandom'],
    },
  ],

  summary: {
    points: [
      '-잖아요 berarti "kan, kamu juga tahu" — pernyataan, bukan pertanyaan. Ditempel pada batang.',
      'Bedanya dengan -죠?: -죠? bertanya mengajak setuju, -잖아요 mengandaikan pengetahuan bersama.',
      'Hati-hati memakai -잖아요 kepada orang senior — bisa terdengar menegur.',
      '-(으)ㄴ 것 같다 untuk kata sifat, -는 것 같다 untuk kata kerja sekarang.',
      'Orang Korea sering melembutkan pendapat dengan 것 같아요, bahkan untuk perasaannya sendiri.',
      '춤 memakai 추다 (춤을 잘 춰요); kemampuan lain memakai 잘하다 (노래를 잘해요).',
      '되다 ("menjadi") menuntut 이/가: 팬이 됐어요, bukan 팬을 됐어요.',
    ],
    pitfalls: [
      {
        wrong: '춤을 잘해요.',
        right: '춤을 잘 춰요.',
        why: '춤 selalu berpasangan dengan kata kerja 추다.',
      },
      {
        wrong: '팬을 됐어요.',
        right: '팬이 됐어요.',
        why: '되다 menuntut hasilnya memakai 이/가.',
      },
      {
        wrong: '좋는 것 같아요.',
        right: '좋은 것 같아요.',
        why: '좋다 adalah kata sifat, jadi memakai -(으)ㄴ, bukan -는.',
      },
    ],
  },
}
