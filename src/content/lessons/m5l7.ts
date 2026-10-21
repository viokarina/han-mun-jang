import type { Lesson } from '../../types/curriculum'

export const m5l7: Lesson = {
  id: 'm5-l7',
  moduleId: 'm5',
  number: '5.7',
  title: 'Di salon',
  subtitle: 'Menjelaskan maumu, dan bertanya soal pengalaman',
  objective:
    'Setelah pelajaran ini kamu bisa menjelaskan potongan rambut yang kamu inginkan dengan ukuran yang jelas, dan bertanya apakah seseorang pernah mencoba sesuatu.',
  focus: ['-게 + 주세요', '-아/어 봤어요', 'ukuran & takaran'],
  estimatedMinutes: 17,

  coreExamples: [
    {
      ko: '머리 어떻게 해 드릴까요?',
      id: 'Rambutnya mau ditata bagaimana?',
      highlight: ['해 드릴까요'],
      highlightKind: 'ending',
    },
    {
      ko: '조금만 짧게 잘라 주세요.',
      id: 'Tolong potong pendek sedikit saja.',
      highlight: ['짧게'],
      highlightKind: 'ending',
    },
    { ko: '앞머리는 그대로 두세요.', id: 'Poninya biarkan saja.', highlight: ['는'] },
    {
      ko: '염색해 봤어요?',
      id: 'Pernah mewarnai rambut?',
      highlight: ['해 봤어요'],
      highlightKind: 'ending',
    },
    {
      ko: '너무 짧지 않게 해 주세요.',
      id: 'Tolong jangan terlalu pendek.',
      highlight: ['짧지 않게'],
      highlightKind: 'ending',
    },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '조금만 짧게 잘라 주세요.',
        id: 'Tolong potong pendek sedikit saja.',
        highlight: ['짧게', '잘라 주세요'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '조금만', formula: '조금 + 만', meaning: 'Sedikit saja; 만 membatasi (Pelajaran 2.6)' },
        { unit: '짧게', formula: '짧다 → 짧 + 게', meaning: 'Dengan pendek — kata sifat menjadi keterangan' },
        {
          unit: '잘라',
          formula: '자르다 → 잘라요 → 잘라',
          meaning: 'Memotong; bentuk 해요체 tanpa 요',
        },
        { unit: '주세요', formula: '주다 + (으)세요', meaning: 'Menjadikannya permintaan' },
      ],
      why:
        'Akhiran -게 yang kamu lihat sekilas di Pelajaran 6.1 ternyata sangat praktis di salon: ia mengubah kata sifat menjadi keterangan, sehingga kamu bisa menjelaskan HASIL yang kamu inginkan. 짧다 ("pendek") menjadi 짧게 ("secara pendek"), lalu digabung dengan kata kerja. Perhatikan juga 자르다 adalah kata 르 tidak beraturan: 자르 + 아요 menjadi 잘라요, dengan ㄹ menggandakan diri — pola yang sama dengan 모르다 → 몰라요 di Pelajaran 5.6.',
      swaps: [
        {
          alt: '짧게 잘라 주세요.',
          effect:
            'Tanpa 조금만. Artinya menjadi "potong pendek" tanpa batasan — bisa berujung jauh lebih pendek daripada yang kamu bayangkan.',
        },
        {
          alt: '너무 짧지 않게 잘라 주세요.',
          effect:
            'Pengaman terbaik: "jangan terlalu pendek". Memakai -지 않다 (Pelajaran 3.3) yang diubah menjadi keterangan dengan -게.',
        },
      ],
    },
    {
      sentence: {
        ko: '염색해 봤어요?',
        id: 'Pernah mewarnai rambut?',
        highlight: ['해 봤어요'],
        highlightKind: 'ending',
      },
      rows: [
        {
          unit: '염색해',
          formula: '염색하다 → 염색해요 → 염색해',
          meaning: 'Mewarnai; bentuk 해요체 tanpa 요',
        },
        {
          unit: '봤어요?',
          formula: '보다 → 봐요 → 봤어요',
          meaning: '"Pernah mencoba?" — 보다 di sini bukan "melihat"',
        },
      ],
      why:
        'Pola -아/어 보다 secara harfiah berarti "melakukan lalu melihat (hasilnya)" — yaitu "mencoba". Dalam bentuk lampau, -아/어 봤어요 menjadi cara baku menanyakan PENGALAMAN: "pernah …?". Ini penting karena 염색했어요? hanya menanyakan apakah kamu melakukannya baru-baru ini, sedangkan 염색해 봤어요? menanyakan apakah kamu pernah sama sekali seumur hidup.',
      swaps: [
        {
          alt: '염색했어요?',
          effect:
            '"Sudah mewarnai (rambut)?" — menanyakan kejadian tertentu, bukan pengalaman secara umum.',
        },
        {
          alt: '염색해 보고 싶어요.',
          effect:
            '"Saya ingin mencoba mewarnai." Menggabungkan -아/어 보다 dengan -고 싶다 dari Pelajaran 3.3.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '미용실', id: 'salon rambut', pos: 'kata benda' },
    {
      ko: '자르다',
      id: 'memotong',
      pos: 'kata kerja',
      note: '르 tidak beraturan: 잘라요.',
      example: { ko: '머리 좀 잘라 주세요.', id: 'Tolong potong rambut saya.' },
    },
    { ko: '다듬다', id: 'merapikan ujung rambut', pos: 'kata kerja', note: '해요체: 다듬어요.' },
    { ko: '앞머리', id: 'poni', pos: 'kata benda' },
    { ko: '염색', id: 'pewarnaan rambut', pos: 'kata benda', note: '염색하다 = mewarnai.' },
    { ko: '파마', id: 'keriting, perm', pos: 'kata benda', note: '파마하다 = mengeriting.' },
    { ko: '감다', id: 'mencuci (rambut)', pos: 'kata kerja', note: '머리를 감다. 해요체: 감아요.' },
    { ko: '그대로', id: 'biarkan seperti semula', pos: 'kata keterangan' },
    { ko: '예약', id: 'reservasi, janji', pos: 'kata benda', note: '예약하다 = memesan tempat.' },
    { ko: '어울리다', id: 'cocok, serasi', pos: 'kata kerja', note: '해요체: 어울려요.' },
    { ko: '이 정도', id: 'sekitar segini', pos: 'ungkapan' },
  ],

  grammar: [
    {
      title: '-게 — menjelaskan hasil yang kamu mau',
      form: 'batang kata sifat + 게 + kata kerja',
      body:
        'Akhiran -게 mengubah kata sifat menjadi keterangan, sehingga kamu bisa menyebut BAGAIMANA sesuatu harus dilakukan. Di salon, ini adalah pola yang paling kamu butuhkan.',
      table: {
        columns: ['Kata sifat', 'Menjadi', 'Contoh', 'Arti'],
        rows: [
          ['짧다', '짧게', '짧게 잘라 주세요', 'potong pendek'],
          ['가볍다', '가볍게', '가볍게 다듬어 주세요', 'rapikan tipis saja'],
          ['자연스럽다', '자연스럽게', '자연스럽게 해 주세요', 'buat natural'],
          ['예쁘다', '예쁘게', '예쁘게 해 주세요', 'buat cantik'],
          ['같다', '같게', '이거랑 같게 해 주세요', 'buat sama seperti ini'],
        ],
      },
      examples: [
        { ko: '짧게 잘라 주세요.', id: 'Tolong potong pendek.' },
        { ko: '자연스럽게 해 주세요.', id: 'Tolong buat terlihat natural.' },
        {
          ko: '너무 짧지 않게 해 주세요.',
          id: 'Tolong jangan terlalu pendek.',
          note: '-지 않다 (Pelajaran 3.3) pun bisa diberi -게.',
        },
      ],
      more:
        'Pola 너무 ～지 않게 adalah pengaman yang sangat berguna, dan bukan hanya di salon. 너무 맵지 않게 해 주세요 ("jangan terlalu pedas") akan menyelamatkanmu di restoran, dan 너무 길지 않게 ("jangan terlalu panjang") berguna saat meminta penjelasan.',
    },
    {
      title: '-아/어 보다 — mencoba, dan pernah mencoba',
      form: 'bentuk 해요체 − 요 + 보다',
      body:
        'Dibentuk persis seperti -아/어 주세요 dan -아/어 드릴게요 yang sudah kamu kuasai. Dalam bentuk sekarang artinya "mencoba"; dalam bentuk lampau artinya "pernah".',
      table: {
        caption: 'Bentuk lampau -아/어 봤어요 adalah cara baku menanyakan pengalaman seumur hidup.',
        columns: ['Kata kerja', '해요체', 'Mencoba', 'Pernah'],
        rows: [
          ['하다', '해요', '해 보세요', '해 봤어요'],
          ['먹다', '먹어요', '먹어 보세요', '먹어 봤어요'],
          ['가다', '가요', '가 보세요', '가 봤어요'],
          ['입다', '입어요', '입어 보세요', '입어 봤어요'],
          ['염색하다', '염색해요', '염색해 보세요', '염색해 봤어요'],
        ],
      },
      examples: [
        { ko: '한국 음식 먹어 봤어요?', id: 'Pernah makan makanan Korea?' },
        { ko: '제주도에 가 봤어요.', id: 'Saya pernah ke Pulau Jeju.' },
        { ko: '이 스타일 해 보고 싶어요.', id: 'Saya ingin mencoba gaya ini.' },
        { ko: '한번 입어 보세요.', id: 'Coba pakai dulu.', note: '한번 ("sekali") sering menemani pola ini.' },
      ],
      mistakes: [
        {
          wrong: '한국에 간 적 있어요? (kalau maksudnya percakapan biasa)',
          right: '한국에 가 봤어요?',
          why: 'Bentuk -(으)ㄴ 적 있다 memang ada dan benar, tetapi -아/어 봤어요 jauh lebih umum dalam percakapan sehari-hari.',
        },
      ],
      more:
        'Perbedaan 했어요? dan 해 봤어요? penting. 어제 염색했어요? menanyakan kejadian tertentu ("kemarin mewarnai rambut?"), sedangkan 염색해 봤어요? menanyakan pengalaman seumur hidup ("pernah mewarnai rambut?"). Kalau kamu ingin tahu apakah seseorang pernah melakukan sesuatu, hampir selalu yang kamu butuhkan adalah -아/어 봤어요.',
    },
    {
      title: 'Menyebut takaran dengan aman',
      body:
        'Di salon, salah satu kalimat bisa berakibat sebulan menyesal. Kata-kata takaran ini membuat permintaanmu jauh lebih jelas.',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Kapan dipakai'],
        rows: [
          ['조금만', 'sedikit saja', 'Membatasi jumlah potongan'],
          ['많이', 'banyak', 'Kalau memang ingin berubah drastis'],
          ['이 정도', 'sekitar segini', 'Sambil menunjuk dengan jari'],
          ['너무 ～지 않게', 'jangan terlalu …', 'Pengaman paling berguna'],
          ['그대로', 'biarkan seperti semula', 'Untuk bagian yang tidak diubah'],
          ['다듬기만 해 주세요', 'rapikan ujungnya saja', 'Kalau tidak mau dipotong'],
        ],
      },
      examples: [
        { ko: '앞머리는 그대로 두세요.', id: 'Poninya biarkan saja.', note: '두다 = membiarkan.' },
        { ko: '뒤만 조금 다듬어 주세요.', id: 'Bagian belakang saja yang dirapikan sedikit.' },
      ],
      more:
        'Satu kebiasaan yang menyelamatkan: tunjukkan foto. 이 사진처럼 해 주세요 ("tolong buat seperti foto ini") dipahami di salon mana pun, dan penata rambut Korea justru mengharapkannya. Kata 처럼 berarti "seperti".',
    },
    {
      title: 'Alur di 미용실',
      body:
        'Urutan dan pertanyaan yang hampir selalu muncul. Mengenalinya membuat kamu tidak perlu menerka saat ditanya.',
      table: {
        columns: ['Tahap', 'Yang dikatakan penata rambut', 'Arti'],
        rows: [
          ['Masuk', '예약하셨어요?', 'Sudah reservasi?'],
          ['Konsultasi', '머리 어떻게 해 드릴까요?', 'Mau ditata bagaimana?'],
          ['Keramas', '머리 감겨 드릴게요.', 'Saya cucikan rambutnya ya.'],
          ['Saat memotong', '이 정도 괜찮으세요?', 'Segini sudah pas?'],
          ['Selesai', '어떠세요?', 'Bagaimana menurut Anda?'],
          ['Bayar', '계산 도와드릴게요.', 'Mari saya bantu pembayarannya.'],
        ],
      },
      examples: [
        { ko: '예약 안 했는데 괜찮아요?', id: 'Saya belum reservasi, apakah tidak apa-apa?' },
        { ko: '네, 마음에 들어요.', id: 'Ya, saya suka.', note: '마음에 들다 = berkenan di hati, suka.' },
      ],
    },
  ],

  dialogue: {
    title: 'Potong rambut pertama kali di Korea',
    situation: 'Vio masuk ke salon tanpa reservasi.',
    lines: [
      { speaker: '디자이너', ko: '어서 오세요. 예약하셨어요?', id: 'Selamat datang. Sudah reservasi?' },
      {
        speaker: '비오',
        ko: '아니요, 예약 안 했는데 괜찮아요?',
        id: 'Belum, saya tidak reservasi — tidak apa-apa?',
        note: '안 했는데 memakai -는데 yang melembutkan; cukup kenali bentuknya dulu.',
      },
      { speaker: '디자이너', ko: '네, 괜찮아요. 머리 어떻게 해 드릴까요?', id: 'Tidak apa-apa. Rambutnya mau ditata bagaimana?' },
      {
        speaker: '비오',
        ko: '조금만 짧게 잘라 주세요. 너무 짧지 않게요.',
        id: 'Tolong potong pendek sedikit saja. Jangan terlalu pendek, ya.',
        note: '〜게요 di akhir memperhalus — mengulang permintaan dengan nada memohon.',
      },
      { speaker: '디자이너', ko: '앞머리도 자를까요?', id: 'Poninya dipotong juga?' },
      { speaker: '비오', ko: '아니요, 앞머리는 그대로 두세요.', id: 'Tidak, poninya biarkan saja.' },
      {
        speaker: '디자이너',
        ko: '네. 혹시 염색해 봤어요?',
        id: 'Baik. Ngomong-ngomong, pernah mewarnai rambut?',
        note: '-아/어 봤어요 menanyakan pengalaman, bukan kejadian tertentu.',
      },
      { speaker: '비오', ko: '아니요, 한 번도 안 해 봤어요.', id: 'Belum, belum pernah sama sekali.' },
      { speaker: '디자이너', ko: '이 정도 괜찮으세요?', id: 'Segini sudah pas?' },
      { speaker: '비오', ko: '네, 마음에 들어요. 감사합니다!', id: 'Ya, saya suka. Terima kasih!' },
    ],
    politeness:
      'Perhatikan 한 번도 안 해 봤어요 — "belum pernah sekali pun". Pola 한 번도 selalu berpasangan dengan bentuk penyangkalan, sama seperti 전혀 dan 거의 yang kamu pelajari di Pelajaran 4.1. Dan penata rambut memakai 괜찮으세요? dengan sisipan hormat 〜시〜, karena pelanggan diperlakukan sebagai pihak yang dihormati.',
  },

  passage: {
    title: '미용실에 다녀왔어요',
    intro: 'Catatan setelah potong rambut.',
    sentences: [
      { ko: '어제 회사 근처 미용실에 갔어요.', id: 'Kemarin saya pergi ke salon dekat kantor.' },
      { ko: '예약은 안 했지만 자리가 있었어요.', id: 'Saya tidak reservasi, tapi ada tempat kosong.' },
      { ko: '저는 조금만 짧게 잘라 달라고 했어요.', id: 'Saya minta dipotong pendek sedikit saja.' },
      { ko: '디자이너가 염색도 해 보라고 했어요.', id: 'Penata rambutnya menyarankan saya mencoba mewarnai juga.' },
      { ko: '하지만 저는 아직 염색해 본 적이 없어요.', id: 'Tapi saya belum pernah mewarnai rambut.' },
      { ko: '다음에는 한번 해 보고 싶어요.', id: 'Lain kali saya ingin mencobanya.' },
    ],
    vocabInContext: [
      { ko: '근처', id: 'dekat, sekitar' },
      { ko: '자리', id: 'tempat, kursi' },
      { ko: '디자이너', id: 'penata rambut' },
      { ko: '아직', id: 'belum, masih' },
    ],
    analysis: [
      '잘라 달라고 했어요 dan 해 보라고 했어요 memakai kalimat tidak langsung (melaporkan permintaan orang lain). Bentuk ini belum dipelajari — cukup kenali polanya: 〜라고 하다 berarti "berkata/meminta agar …".',
      '예약은 안 했지만 memakai -지만 ("meskipun"), yang menyambungkan dua hal bertentangan dalam satu kalimat.',
      '염색해 본 적이 없어요 adalah bentuk lain untuk menyatakan pengalaman: -(으)ㄴ 적이 있다/없다. Artinya sama dengan 염색해 봤어요/안 해 봤어요, hanya sedikit lebih formal.',
      '해 보고 싶어요 menggabungkan -아/어 보다 ("mencoba") dengan -고 싶다 ("ingin") — jadi "ingin mencoba".',
      '다음에는 memakai 에 (waktu) + 는 (kontras dengan kali ini), pola bertumpuk dari Pelajaran 2.1.',
    ],
  },

  exercises: [
    {
      id: 'm5l7-e1',
      kind: 'fill',
      prompt: 'Ubah 짧다 menjadi keterangan dengan -게.',
      sentence: '조금만 ___ 잘라 주세요.',
      translation: 'Tolong potong pendek sedikit saja.',
      answers: ['짧게'],
      explain:
        'Akhiran -게 ditempel pada batang kata sifat (짧) untuk mengubahnya menjadi keterangan: "secara pendek". Pola ini yang kamu pakai untuk menjelaskan hasil yang diinginkan.',
      tags: ['-게 + 주세요'],
    },
    {
      id: 'm5l7-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk yang menanyakan PENGALAMAN.',
      context: 'Kamu ingin tahu apakah temanmu pernah mewarnai rambut seumur hidupnya.',
      sentence: '염색___?',
      translation: 'Pernah mewarnai rambut?',
      options: ['해 봤어요', '했어요', '할 거예요', '하고 있어요'],
      answer: '해 봤어요',
      explain:
        '-아/어 봤어요 menanyakan pengalaman seumur hidup. Inilah bentuk baku untuk "pernah …?" dalam bahasa Korea.',
      whyNot: {
        했어요: 'Menanyakan kejadian tertentu — "sudah mewarnai (baru-baru ini)?", bukan "pernah sama sekali?".',
        '할 거예요': 'Itu rencana masa depan: "akan mewarnai".',
        '하고 있어요': 'Itu "sedang mewarnai".',
      },
      tags: ['-아/어 봤어요'],
    },
    {
      id: 'm5l7-e3',
      kind: 'build',
      prompt: 'Susun permintaan pengaman ini.',
      translation: 'Tolong jangan terlalu pendek.',
      tiles: ['너무', '짧지', '않게', '해 주세요'],
      distractors: ['짧게', '안'],
      answers: ['너무 짧지 않게 해 주세요'],
      explain:
        'Bentuk penyangkalan panjang -지 않다 (Pelajaran 3.3) diberi akhiran -게 sehingga menjadi keterangan: "secara tidak terlalu pendek". Ini kalimat pengaman paling berguna di salon.',
      parts: [
        { part: '너무', role: '"terlalu"' },
        { part: '짧지', role: 'batang 짧 + 지, bagian dari -지 않다' },
        { part: '않게', role: '않다 + -게, menjadi keterangan' },
        { part: '해 주세요', role: 'permintaan: "tolong buat begitu"' },
      ],
      tags: ['-게 + 주세요'],
    },
    {
      id: 'm5l7-e4',
      kind: 'match',
      prompt: 'Pasangkan kata sifat dengan bentuk keterangannya.',
      pairs: [
        { left: '짧다', right: '짧게 — secara pendek' },
        { left: '가볍다', right: '가볍게 — secara tipis/ringan' },
        { left: '자연스럽다', right: '자연스럽게 — secara natural' },
        { left: '예쁘다', right: '예쁘게 — secara cantik' },
        { left: '맵다', right: '맵게 — secara pedas' },
      ],
      explain:
        'Akhiran -게 ditempel langsung pada batang, tanpa memperhatikan 받침. Perhatikan bahwa kata ㅂ tidak beraturan seperti 가볍다 dan 맵다 pun tidak berubah di sini, karena -게 diawali konsonan.',
      tags: ['-게 + 주세요'],
    },
    {
      id: 'm5l7-e5',
      kind: 'fill',
      prompt: 'Ubah 가다 menjadi bentuk pengalaman.',
      sentence: '제주도에 ___?',
      translation: 'Pernah ke Pulau Jeju?',
      answers: ['가 봤어요'],
      explain:
        '가다 → 가요 → 가 → 가 봤어요. Pola -아/어 보다 dibentuk dari 해요체 tanpa 요, lalu 보다 dikonjugasi ke bentuk lampau.',
      tags: ['-아/어 봤어요'],
    },
    {
      id: 'm5l7-e6',
      kind: 'correct',
      prompt: 'Perbaiki bentuknya.',
      sentence: '머리를 짧 잘라 주세요.',
      translation: 'Tolong potong rambut saya pendek.',
      answers: ['머리를 짧게 잘라 주세요', '머리 짧게 잘라 주세요'],
      explain:
        'Kata sifat tidak bisa langsung menerangkan kata kerja — ia butuh akhiran -게 untuk menjadi keterangan: 짧 + 게 → 짧게.',
      tags: ['-게 + 주세요'],
    },
    {
      id: 'm5l7-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Saya ingin mencoba gaya ini.',
      answers: ['이 스타일 해 보고 싶어요', '이 스타일로 해 보고 싶어요', '이 스타일을 해 보고 싶어요'],
      explain:
        'Menggabungkan -아/어 보다 ("mencoba") dengan -고 싶다 ("ingin") dari Pelajaran 3.3: 해 보 + 고 싶어요 → 해 보고 싶어요.',
      hint: 'Dua pola digabung: "mencoba" lalu "ingin".',
      tags: ['-아/어 봤어요'],
    },
    {
      id: 'm5l7-e8',
      kind: 'mc',
      prompt: 'Apa bedanya 어제 염색했어요? dan 염색해 봤어요?',
      options: [
        'Yang pertama menanyakan kejadian kemarin; yang kedua menanyakan pengalaman seumur hidup.',
        'Yang pertama lebih sopan.',
        'Yang kedua bentuk masa depan.',
        'Keduanya artinya sama persis.',
      ],
      answerIndex: 0,
      explain:
        '했어요? menanyakan apakah suatu kejadian terjadi pada waktu tertentu. 해 봤어요? menanyakan apakah kamu pernah melakukannya sama sekali. Kalau ingin tahu soal pengalaman, pakai yang kedua.',
      whyNot: {
        'Yang pertama lebih sopan.': 'Keduanya sama-sama 해요체.',
        'Yang kedua bentuk masa depan.': 'Keduanya bentuk lampau.',
        'Keduanya artinya sama persis.': 'Perbedaan kejadian dan pengalaman justru inti pelajaran ini.',
      },
      tags: ['-아/어 봤어요'],
    },
  ],

  quiz: [
    {
      id: 'm5l7-q1',
      kind: 'fill',
      prompt: 'Ubah 자연스럽다 menjadi keterangan.',
      sentence: '___ 해 주세요.',
      translation: 'Tolong buat terlihat natural.',
      answers: ['자연스럽게'],
      explain:
        'Akhiran -게 ditempel pada batang 자연스럽. Karena -게 diawali konsonan, perubahan ㅂ tidak beraturan tidak terjadi di sini.',
      tags: ['-게 + 주세요'],
    },
    {
      id: 'm5l7-q2',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Pernah makan makanan Korea?',
      answers: ['한국 음식 먹어 봤어요?', '한국 음식을 먹어 봤어요?', '한국 음식 드셔 봤어요?'],
      explain:
        '먹다 → 먹어요 → 먹어 → 먹어 봤어요. Untuk lawan bicara yang dihormati, bentuknya menjadi 드셔 봤어요? dengan 드시다.',
      tags: ['-아/어 봤어요'],
    },
    {
      id: 'm5l7-q3',
      kind: 'mc',
      prompt: 'Kamu TIDAK ingin poninya dipotong. Mana yang paling tepat?',
      options: [
        '앞머리는 그대로 두세요.',
        '앞머리는 짧게 잘라 주세요.',
        '앞머리도 자를까요?',
        '앞머리를 다듬어 주세요.',
      ],
      answerIndex: 0,
      explain:
        '그대로 두다 berarti "biarkan seperti semula". Partikel 는 pada 앞머리는 menandai kontras — bagian lain boleh dipotong, tetapi poninya tidak.',
      whyNot: {
        '앞머리는 짧게 잘라 주세요.': 'Justru meminta poninya dipotong pendek.',
        '앞머리도 자를까요?': 'Itu kalimat yang diucapkan penata rambut, bukan pelanggan.',
        '앞머리를 다듬어 주세요.': 'Meminta poninya dirapikan — tetap dipotong sedikit.',
      },
      tags: ['ukuran & takaran'],
    },
  ],

  summary: {
    points: [
      '-게 mengubah kata sifat menjadi keterangan: 짧게, 자연스럽게, 가볍게.',
      '너무 ～지 않게 adalah pengaman terbaik: 너무 짧지 않게 해 주세요.',
      '-아/어 보다 berarti "mencoba"; -아/어 봤어요 menanyakan pengalaman seumur hidup.',
      '해 봤어요? berbeda dari 했어요? — yang pertama soal pengalaman, yang kedua soal kejadian.',
      '한 번도 selalu berpasangan dengan penyangkalan: 한 번도 안 해 봤어요.',
      '그대로 두세요 untuk bagian yang tidak ingin diubah.',
      '자르다 adalah kata 르 tidak beraturan: 잘라요.',
    ],
    pitfalls: [
      {
        wrong: '짧 잘라 주세요.',
        right: '짧게 잘라 주세요.',
        why: 'Kata sifat butuh -게 untuk bisa menerangkan kata kerja.',
      },
      {
        wrong: '(menanyakan pengalaman) 한국에 갔어요?',
        right: '한국에 가 봤어요?',
        why: '갔어요? menanyakan kejadian tertentu, bukan pengalaman.',
      },
      {
        wrong: '자르아 주세요.',
        right: '잘라 주세요.',
        why: '자르다 adalah kata 르 tidak beraturan: 자르 + 아요 → 잘라요.',
      },
    ],
  },
}
