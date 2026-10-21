import type { Lesson } from '../../types/curriculum'

export const m5l6: Lesson = {
  id: 'm5-l6',
  moduleId: 'm5',
  number: '5.6',
  title: 'Menunjukkan arah',
  subtitle: 'Saat turis bertanya dan kamu bisa menjawab',
  objective:
    'Setelah pelajaran ini kamu bisa bertanya arah dengan sopan, memahami petunjuk yang diberikan, dan menuntun orang lain ke tujuannya dalam bahasa Korea.',
  focus: ['-(으)면', '번째', 'petunjuk arah'],
  estimatedMinutes: 17,

  coreExamples: [
    { ko: '실례합니다. 명동역이 어디예요?', id: 'Permisi. Stasiun Myeongdong di mana?', highlight: ['이'] },
    { ko: '여기서 쭉 가세요.', id: 'Dari sini lurus saja.', highlight: ['쭉'] },
    {
      ko: '두 번째 신호등에서 왼쪽으로 가세요.',
      id: 'Di lampu merah kedua, belok ke kiri.',
      highlight: ['두 번째', '으로'],
    },
    {
      ko: '쭉 가면 오른쪽에 있어요.',
      id: 'Kalau lurus terus, ada di sebelah kanan.',
      highlight: ['가면'],
      highlightKind: 'ending',
    },
    { ko: '걸어서 십 분쯤 걸려요.', id: 'Jalan kaki sekitar sepuluh menit.', highlight: ['걸어서'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '쭉 가면 오른쪽에 있어요.',
        id: 'Kalau lurus terus, ada di sebelah kanan.',
        highlight: ['가면'],
        highlightKind: 'ending',
      },
      rows: [
        { unit: '쭉', formula: '—', meaning: 'Lurus terus, tanpa belok' },
        { unit: '가면', formula: '가다 → 가 + 면', meaning: 'Kalau (kamu) jalan — menyatakan syarat' },
        { unit: '오른쪽에', formula: '오른쪽 + 에', meaning: 'Di sebelah kanan — menyatakan keberadaan' },
        { unit: '있어요', formula: '있다 → 있어요', meaning: 'Ada' },
      ],
      why:
        '-(으)면 menyatakan syarat atau waktu: "kalau …" atau "begitu …". Dibentuk dari BATANG — 면 setelah vokal, 으면 setelah konsonan. Dalam petunjuk arah pola ini muncul terus-menerus, karena setiap langkah menjadi syarat bagi langkah berikutnya. Perhatikan juga 오른쪽에 memakai 에, bukan 에서, karena kalimatnya menyatakan KEBERADAAN (Pelajaran 2.4).',
      swaps: [
        {
          alt: '쭉 가세요. 그러면 오른쪽에 있어요.',
          effect:
            'Dipecah menjadi dua kalimat. 그러면 ("kalau begitu") sebenarnya adalah 그렇다 + -(으)면 yang sudah membeku menjadi satu kata.',
        },
        {
          alt: '쭉 가면 오른쪽에 있어요?',
          effect:
            'Dengan tanda tanya, kalimatnya berbalik menjadi konfirmasi dari pihak yang bertanya: "kalau lurus, ada di kanan ya?"',
        },
      ],
    },
    {
      sentence: {
        ko: '두 번째 신호등에서 왼쪽으로 가세요.',
        id: 'Di lampu merah kedua, belok ke kiri.',
        highlight: ['두 번째', '에서', '으로'],
      },
      rows: [
        { unit: '두 번째', formula: '둘 → 두 + 번째', meaning: 'Yang kedua — bilangan tingkat' },
        { unit: '신호등에서', formula: '신호등 + 에서', meaning: 'Di lampu lalu lintas — tempat tindakan terjadi' },
        { unit: '왼쪽으로', formula: '왼쪽 + 으로', meaning: 'Ke arah kiri — menandai ARAH' },
        { unit: '가세요', formula: '가다 + (으)세요', meaning: 'Silakan pergi — permintaan sopan' },
      ],
      why:
        'Satu kalimat, tiga hal dari pelajaran sebelumnya bekerja bersama. 번째 membentuk bilangan tingkat dari angka asli. 에서 dipakai karena berbelok adalah KEGIATAN yang terjadi di titik itu (Pelajaran 2.5). Dan 으로 menandai ARAH, bukan tujuan akhir — inilah sebabnya dipakai 왼쪽으로 dan bukan 왼쪽에 (Pelajaran 2.9).',
      swaps: [
        {
          alt: '첫 번째 신호등에서 오른쪽으로 가세요.',
          effect:
            '"Di lampu pertama belok kanan." Perhatikan 첫 번째 — bukan 한 번째. Ini satu-satunya bentuk tidak beraturan pada bilangan tingkat.',
        },
        {
          alt: '신호등에서 길을 건너세요.',
          effect: '"Seberangi jalan di lampu lalu lintas." 건너다 dipakai untuk menyeberang.',
        },
      ],
    },
  ],

  vocab: [
    { ko: '실례합니다', id: 'permisi (menyapa orang asing)', pos: 'ungkapan' },
    { ko: '쭉', id: 'lurus terus', pos: 'kata keterangan' },
    { ko: '신호등', id: 'lampu lalu lintas', pos: 'kata benda' },
    { ko: '사거리', id: 'perempatan', pos: 'kata benda' },
    { ko: '횡단보도', id: 'tempat penyeberangan', pos: 'kata benda' },
    { ko: '건너편', id: 'seberang', pos: 'kata benda' },
    { ko: '출구', id: 'pintu keluar', pos: 'kata benda', note: 'Nomornya memakai angka Sino: 사 번 출구.' },
    { ko: '번째', id: 'ke- (bilangan tingkat)', pos: 'penghitung', note: 'Angka asli: 두 번째, 세 번째.' },
    {
      ko: '모르다',
      id: 'tidak tahu',
      pos: 'kata kerja',
      note: '르 tidak beraturan: 몰라요.',
      example: { ko: '죄송해요, 저도 잘 몰라요.', id: 'Maaf, saya juga kurang tahu.' },
    },
    {
      ko: '물어보다',
      id: 'bertanya',
      pos: 'kata kerja',
      note: 'Dari 묻다 (ㄷ tidak beraturan) + 보다. 해요체: 물어봐요.',
    },
    { ko: '건너다', id: 'menyeberang', pos: 'kata kerja', note: '해요체: 건너요.' },
  ],

  grammar: [
    {
      title: '-(으)면 — kalau, begitu',
      form: 'batang + 면 (vokal) · 으면 (konsonan)',
      body:
        'Menyatakan syarat atau waktu yang belum terjadi. Klausa -(으)면 selalu berada di DEPAN, persis seperti klausa alasan -아/어서 dari Pelajaran 4.2.',
      table: {
        columns: ['Bentuk kamus', 'Batang', 'Hasil', 'Arti'],
        rows: [
          ['가다', '가', '가면', 'kalau pergi'],
          ['먹다', '먹', '먹으면', 'kalau makan'],
          ['있다', '있', '있으면', 'kalau ada'],
          ['모르다', '모르', '모르면', 'kalau tidak tahu'],
          ['하다', '하', '하면', 'kalau melakukan'],
          ['춥다', '춥', '추우면', 'kalau dingin (ㅂ berubah)'],
        ],
      },
      examples: [
        { ko: '쭉 가면 왼쪽에 있어요.', id: 'Kalau lurus terus, ada di sebelah kiri.' },
        { ko: '시간이 있으면 같이 가요.', id: 'Kalau ada waktu, ayo pergi bersama.' },
        { ko: '모르면 물어보세요.', id: 'Kalau tidak tahu, silakan bertanya.' },
      ],
      more:
        'Bandingkan dengan -아/어서 (Pelajaran 4.2). -아/어서 menyatakan sebab yang SUDAH terjadi: 비가 와서 집에 있어요 ("karena hujan, saya di rumah"). Sedangkan -(으)면 menyatakan syarat yang BELUM tentu terjadi: 비가 오면 집에 있을 거예요 ("kalau hujan, saya akan di rumah"). Dan tidak seperti -아/어서, klausa -(으)면 boleh diikuti perintah dan ajakan.',
    },
    {
      title: '번째 dan 번 — dua angka yang mirip tapi berbeda',
      body:
        'Keduanya memakai kata 번, tetapi sistem angkanya berlawanan. Ini sering tertukar justru karena bentuknya terlihat mirip.',
      table: {
        caption:
          '첫 번째 adalah satu-satunya bentuk tidak beraturan — bukan 한 번째.',
        columns: ['Bentuk', 'Arti', 'Sistem angka', 'Contoh'],
        rows: [
          ['번째', 'urutan ke-', 'Asli Korea', '두 번째 신호등'],
          ['번', 'nomor (label)', 'Sino-Korea', '사 번 출구'],
          ['번', 'kali (frekuensi)', 'Asli Korea', '세 번 갔어요'],
        ],
      },
      examples: [
        { ko: '두 번째 사거리에서 오른쪽으로 가세요.', id: 'Di perempatan kedua, belok kanan.' },
        { ko: '사 번 출구로 나가세요.', id: 'Keluarlah lewat pintu nomor empat.' },
        { ko: '첫 번째 골목에서 왼쪽이에요.', id: 'Di gang pertama, sebelah kiri.' },
      ],
      mistakes: [
        {
          wrong: '한 번째 신호등',
          right: '첫 번째 신호등',
          why: 'Bilangan tingkat untuk "pertama" memakai 첫, bukan 한.',
        },
        {
          wrong: '네 번 출구',
          right: '사 번 출구',
          why: 'Nomor pintu keluar adalah LABEL, jadi memakai angka Sino.',
        },
      ],
    },
    {
      title: 'Kalimat petunjuk arah yang siap pakai',
      body:
        'Hampir semua petunjuk arah di Korea tersusun dari kombinasi kalimat-kalimat ini. Hafalkan beberapa saja, lalu rangkai sesuai kebutuhan.',
      table: {
        columns: ['Bahasa Korea', 'Arti', 'Catatan'],
        rows: [
          ['쭉 가세요.', 'Lurus terus.', 'Paling sering dipakai'],
          ['오른쪽으로 가세요.', 'Belok ke kanan.', '으로 menandai arah'],
          ['왼쪽으로 도세요.', 'Belok ke kiri.', '돌다 = berputar'],
          ['길을 건너세요.', 'Seberangi jalan.', '길 memakai 을'],
          ['지하철을 타세요.', 'Naik kereta bawah tanah.', '타다 memakai 을/를'],
          ['건너편에 있어요.', 'Ada di seberang.', '에 untuk keberadaan'],
          ['여기서 멀어요?', 'Jauh dari sini?', '여기서 = 여기에서'],
          ['걸어서 십 분쯤 걸려요.', 'Jalan kaki sekitar 10 menit.', '걸어서 bukan 걸음으로'],
        ],
      },
      examples: [
        {
          ko: '쭉 가세요. 그리고 사거리에서 오른쪽으로 가세요. 건너편에 있어요.',
          id: 'Lurus terus. Lalu di perempatan belok kanan. Ada di seberang.',
          note: 'Tiga kalimat pendek lebih mudah dipahami daripada satu kalimat panjang.',
        },
      ],
      more:
        'Perhatikan 걸어서 ("dengan berjalan kaki"). Ini bentuk -아/어서 dari 걷다, yang merupakan kata kerja ㄷ tidak beraturan: ㄷ berubah menjadi ㄹ sebelum vokal, jadi 걷다 → 걸어요 → 걸어서. Jangan memakai 걸음으로 — bentuk itu tidak dipakai dalam percakapan.',
    },
    {
      title: 'Bertanya arah — dan mengaku tidak tahu',
      body:
        'Membuka pertanyaan kepada orang asing butuh sapaan yang tepat. Dan sama pentingnya: tahu cara mundur dengan sopan kalau kamu sendiri tidak tahu jalannya.',
      table: {
        columns: ['Situasi', 'Kalimat', 'Catatan'],
        rows: [
          ['Membuka', '실례합니다 / 저기요', '실례합니다 lebih sopan'],
          ['Menanyakan tempat', '명동역이 어디예요?', 'Memakai 이/가'],
          ['Menanyakan cara', '명동역에 어떻게 가요?', '어떻게 = bagaimana'],
          ['Menanyakan jarak', '여기서 멀어요?', ''],
          ['Tidak tahu', '죄송해요, 저도 잘 몰라요.', '모르다 → 몰라요'],
          ['Menutup', '감사합니다 / 조심히 가세요', '조심히 = hati-hati'],
        ],
      },
      examples: [
        { ko: '실례합니다. 이 근처에 지하철역이 있어요?', id: 'Permisi. Apakah di dekat sini ada stasiun kereta?' },
        { ko: '죄송해요, 저도 여기 처음이에요.', id: 'Maaf, saya juga baru pertama kali ke sini.' },
      ],
      more:
        '모르다 adalah kata kerja 르 tidak beraturan: batang 모르 bertemu 아요 berubah menjadi 몰라요 — ㄹ menggandakan diri. Pola yang sama berlaku untuk 다르다 → 달라요 ("berbeda") dan 부르다 → 불러요 ("memanggil"). Ini kelompok tidak beraturan terakhir yang perlu kamu kenali.',
    },
  ],

  dialogue: {
    title: 'Turis bertanya di jalan',
    situation: 'Seorang wisatawan asing menghampiri Vio di dekat Myeongdong.',
    lines: [
      {
        speaker: '관광객',
        ko: '실례합니다. 혹시 한국말 하세요?',
        id: 'Permisi. Apakah Anda bisa bahasa Korea?',
        note: '혹시 ("kalau-kalau") melembutkan pertanyaan kepada orang asing.',
      },
      { speaker: '비오', ko: '네, 조금 해요.', id: 'Ya, sedikit.' },
      { speaker: '관광객', ko: '명동역이 어디예요?', id: 'Stasiun Myeongdong di mana?' },
      {
        speaker: '비오',
        ko: '여기서 쭉 가세요. 그리고 두 번째 신호등에서 왼쪽으로 가세요.',
        id: 'Dari sini lurus saja. Lalu di lampu merah kedua, belok kiri.',
        note: '여기서 adalah bentuk singkat 여기에서 (Pelajaran 2.5).',
      },
      { speaker: '관광객', ko: '여기서 멀어요?', id: 'Jauh dari sini?' },
      {
        speaker: '비오',
        ko: '아니요, 걸어서 십 분쯤 걸려요.',
        id: 'Tidak, jalan kaki sekitar sepuluh menit.',
        note: '십 분 memakai angka Sino karena menyebut menit.',
      },
      {
        speaker: '관광객',
        ko: '아, 그리고 지하철은 몇 번 출구예요?',
        id: 'Oh, dan keretanya pintu keluar nomor berapa?',
        note: '몇 번 출구 — nomor pintu keluar, memakai 번 dengan angka Sino.',
      },
      { speaker: '비오', ko: '사 번 출구예요.', id: 'Pintu keluar nomor empat.' },
      { speaker: '관광객', ko: '정말 감사합니다!', id: 'Terima kasih banyak!' },
      { speaker: '비오', ko: '아니에요. 조심히 가세요.', id: 'Sama-sama. Hati-hati di jalan.' },
    ],
    politeness:
      '아니에요 di akhir berfungsi seperti "sama-sama" — jawaban baku atas ucapan terima kasih, bersama 별말씀을요 yang lebih formal. Dan 조심히 가세요 ("hati-hati di jalan") adalah penutup hangat yang sangat lazim saat berpisah dengan orang yang akan berjalan jauh.',
  },

  passage: {
    title: '길을 가르쳐 줬어요',
    intro: 'Catatan harian setelah membantu seorang turis.',
    sentences: [
      { ko: '어제 명동에서 외국인 관광객을 만났어요.', id: 'Kemarin saya bertemu wisatawan asing di Myeongdong.' },
      { ko: '그 사람이 저한테 길을 물어봤어요.', id: 'Orang itu bertanya arah kepada saya.' },
      { ko: '조금 긴장했어요. 하지만 한국말로 대답했어요.', id: 'Saya agak gugup. Tapi saya menjawab dalam bahasa Korea.' },
      { ko: '저는 천천히 길을 가르쳐 줬어요.', id: 'Saya menunjukkan jalannya pelan-pelan.' },
      { ko: '관광객이 아주 고마워했어요.', id: 'Wisatawan itu sangat berterima kasih.' },
      { ko: '한국어를 공부해서 정말 기뻤어요.', id: 'Saya benar-benar senang sudah belajar bahasa Korea.' },
    ],
    vocabInContext: [
      { ko: '관광객', id: 'wisatawan' },
      { ko: '긴장하다', id: 'gugup, tegang' },
      { ko: '가르쳐 주다', id: 'menunjukkan, mengajarkan (untuk orang lain)' },
      { ko: '기쁘다', id: 'senang, gembira' },
    ],
    analysis: [
      '저한테 길을 물어봤어요 — penerima pertanyaan adalah orang, jadi memakai 한테 (Pelajaran 2.8), dan 길 menjadi objek dengan 을.',
      '한국말로 대답했어요 — (으)로 menandai bahasa yang dipakai, persis seperti 한국어로 메모를 써요 di Pelajaran 2.9.',
      '가르쳐 줬어요 memakai -아/어 주다 ("melakukan untuk orang lain") dari Pelajaran 5.2, dalam bentuk lampau.',
      '고마워했어요 berasal dari 고맙다 (ㅂ tidak beraturan) + -아/어하다, yang dipakai untuk menyatakan perasaan ORANG LAIN — sama seperti 좋아하다 dari 좋다.',
      '공부해서 기뻤어요 — di sini -아/어서 bermakna sebab: "karena sudah belajar, saya senang".',
    ],
  },

  exercises: [
    {
      id: 'm5l6-e1',
      kind: 'fill',
      prompt: 'Ubah 가다 menjadi bentuk syarat dengan -(으)면.',
      sentence: '쭉 ___ 오른쪽에 있어요.',
      translation: 'Kalau lurus terus, ada di sebelah kanan.',
      answers: ['가면'],
      explain:
        'Batang 가 berakhir vokal, jadi memakai 면 → 가면. Klausa syarat selalu berada di depan klausa utamanya.',
      hint: 'Batang 가다 berakhir dengan vokal.',
      tags: ['-(으)면'],
    },
    {
      id: 'm5l6-e2',
      kind: 'particle',
      prompt: 'Pilih bentuk bilangan tingkat yang tepat.',
      context: 'Belok di lampu lalu lintas yang PERTAMA.',
      sentence: '___ 신호등에서 왼쪽으로 가세요.',
      translation: 'Di lampu merah pertama, belok kiri.',
      options: ['첫 번째', '한 번째', '일 번째', '하나 번째'],
      answer: '첫 번째',
      explain:
        'Bilangan tingkat untuk "pertama" memakai bentuk khusus 첫, bukan 한. Mulai dari yang kedua barulah mengikuti pola normal: 두 번째, 세 번째.',
      whyNot: {
        '한 번째': 'Bentuk ini tidak ada. 한 번 berarti "sekali", bukan "pertama".',
        '일 번째': '번째 memakai angka asli, bukan Sino.',
        '하나 번째': '하나 menyusut menjadi 한 di depan penghitung — tapi untuk "pertama" bentuknya tetap 첫.',
      },
      tags: ['번째'],
    },
    {
      id: 'm5l6-e3',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menyuruh orang berbelok ke arah kanan, bukan menuju tempat tertentu.',
      sentence: '사거리에서 오른쪽___ 가세요.',
      translation: 'Di perempatan, belok ke kanan.',
      options: ['으로', '에', '에서', '까지'],
      answer: '으로',
      explain:
        '(으)로 menandai ARAH, dan itulah yang dimaksud saat memberi petunjuk belokan. 오른쪽 berakhir konsonan ㄱ, jadi bentuknya 으로.',
      whyNot: {
        에: '에 menunjuk tujuan akhir yang konkret, bukan arah belokan.',
        에서: '에서 menandai tempat kegiatan atau titik asal — di kalimat ini sudah dipakai oleh 사거리에서.',
        까지: '까지 berarti "sampai", menandai batas akhir.',
      },
      tags: ['petunjuk arah'],
    },
    {
      id: 'm5l6-e4',
      kind: 'build',
      prompt: 'Susun petunjuk arah ini.',
      translation: 'Di lampu merah kedua, belok ke kiri.',
      tiles: ['두 번째', '신호등에서', '왼쪽으로', '가세요'],
      distractors: ['두 번', '왼쪽에'],
      answers: ['두 번째 신호등에서 왼쪽으로 가세요'],
      explain:
        '두 번째 adalah bilangan tingkat dengan angka asli. 에서 karena berbelok adalah kegiatan yang terjadi di titik itu, dan 으로 karena yang ditandai adalah arah.',
      parts: [
        { part: '두 번째', role: 'bilangan tingkat (urutan ke-2)' },
        { part: '신호등에서', role: 'tempat tindakan terjadi' },
        { part: '왼쪽으로', role: 'arah belokan dengan (으)로' },
        { part: '가세요', role: 'permintaan sopan dengan -(으)세요' },
      ],
      tags: ['번째', 'petunjuk arah'],
    },
    {
      id: 'm5l6-e5',
      kind: 'match',
      prompt: 'Pasangkan kalimat petunjuk arah dengan artinya.',
      pairs: [
        { left: '쭉 가세요', right: 'lurus terus' },
        { left: '길을 건너세요', right: 'seberangi jalan' },
        { left: '건너편에 있어요', right: 'ada di seberang' },
        { left: '여기서 멀어요?', right: 'jauh dari sini?' },
        { left: '조심히 가세요', right: 'hati-hati di jalan' },
        { left: '저도 잘 몰라요', right: 'saya juga kurang tahu' },
      ],
      explain:
        'Enam kalimat ini sudah cukup untuk menangani hampir semua percakapan arah — termasuk yang terakhir, untuk mundur dengan sopan kalau kamu sendiri tidak tahu.',
      tags: ['petunjuk arah'],
    },
    {
      id: 'm5l6-e6',
      kind: 'correct',
      prompt: 'Perbaiki nomor pintu keluarnya.',
      sentence: '네 번 출구로 나가세요.',
      translation: 'Keluarlah lewat pintu nomor empat.',
      answers: ['사 번 출구로 나가세요', '사번 출구로 나가세요'],
      explain:
        'Nomor pintu keluar adalah LABEL, bukan jumlah — jadi memakai angka Sino: 사 번. Bandingkan dengan 네 번 갔어요 ("pergi empat kali") yang memakai angka asli karena menyatakan frekuensi.',
      tags: ['번째'],
    },
    {
      id: 'm5l6-e7',
      kind: 'translate',
      prompt: 'Terjemahkan ke bahasa Korea.',
      direction: 'id-ko',
      source: 'Kalau tidak tahu, silakan bertanya.',
      answers: ['모르면 물어보세요', '모르시면 물어보세요'],
      explain:
        '모르다 → batang 모르 → 모르면. Perhatikan bahwa bentuk -(으)면 memakai batang apa adanya, jadi perubahan 르 tidak beraturan (몰라요) tidak terjadi di sini.',
      hint: 'Bentuk -(으)면 diambil dari batang, bukan dari bentuk 해요체.',
      tags: ['-(으)면'],
    },
    {
      id: 'm5l6-e8',
      kind: 'mc',
      prompt: 'Dari bacaan 길을 가르쳐 줬어요, bagaimana perasaan penulis di akhir?',
      options: [
        'Senang, karena bisa membantu berkat belajar bahasa Korea.',
        'Kesal, karena turisnya banyak bertanya.',
        'Takut, karena tidak tahu jalannya.',
        'Biasa saja, tidak ada kesan khusus.',
      ],
      answerIndex: 0,
      explain:
        'Kalimat terakhir berbunyi 한국어를 공부해서 정말 기뻤어요 — "karena sudah belajar bahasa Korea, saya benar-benar senang". Klausa -아/어서 di sini menyatakan sebabnya.',
      whyNot: {
        'Kesal, karena turisnya banyak bertanya.': 'Justru turisnya digambarkan 아주 고마워했어요.',
        'Takut, karena tidak tahu jalannya.': 'Penulis sempat 긴장했어요 (gugup), tetapi tetap bisa menjawab.',
        'Biasa saja, tidak ada kesan khusus.': 'Kata 정말 기뻤어요 menunjukkan kesan yang kuat.',
      },
      tags: ['pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm5l6-q1',
      kind: 'fill',
      prompt: 'Ubah 있다 menjadi bentuk syarat.',
      sentence: '시간이 ___ 같이 가요.',
      translation: 'Kalau ada waktu, ayo pergi bersama.',
      answers: ['있으면'],
      explain:
        'Batang 있 berakhir konsonan, jadi memakai 으면 → 있으면. Perhatikan bahwa -(으)면 BOLEH diikuti ajakan — berbeda dari -아/어서 yang tidak boleh.',
      tags: ['-(으)면'],
    },
    {
      id: 'm5l6-q2',
      kind: 'mc',
      prompt: 'Manakah yang SEMUA angkanya benar?',
      options: [
        '첫 번째 사거리 · 사 번 출구 · 세 번 갔어요',
        '한 번째 사거리 · 네 번 출구 · 세 번 갔어요',
        '일 번째 사거리 · 사 번 출구 · 삼 번 갔어요',
        '첫 번째 사거리 · 네 번 출구 · 삼 번 갔어요',
      ],
      answerIndex: 0,
      explain:
        'Tiga pola berbeda: 번째 (urutan) memakai angka asli dengan 첫 untuk yang pertama; 번 sebagai nomor label memakai angka Sino; 번 sebagai frekuensi memakai angka asli.',
      tags: ['번째'],
    },
    {
      id: 'm5l6-q3',
      kind: 'build',
      prompt: 'Susun jawabanmu untuk turis yang bertanya jarak.',
      translation: 'Tidak, jalan kaki sekitar sepuluh menit.',
      tiles: ['아니요,', '걸어서', '십 분쯤', '걸려요'],
      distractors: ['열 분쯤', '걸음으로'],
      answers: ['아니요, 걸어서 십 분쯤 걸려요'],
      explain:
        '걸어서 adalah bentuk -아/어서 dari 걷다 (ㄷ tidak beraturan → 걸어요). Menit memakai angka Sino: 십 분, bukan 열 분.',
      parts: [
        { part: '아니요,', role: 'menyangkal "jauh"' },
        { part: '걸어서', role: '"dengan berjalan kaki"' },
        { part: '십 분쯤', role: 'sekitar sepuluh menit (angka Sino)' },
        { part: '걸려요', role: '걸리다 = memakan waktu' },
      ],
      tags: ['petunjuk arah'],
    },
  ],

  summary: {
    points: [
      '-(으)면 menyatakan syarat ("kalau"); dibentuk dari batang dan boleh diikuti perintah atau ajakan.',
      'Bedanya dengan -아/어서: 면 untuk yang belum tentu terjadi, 서 untuk sebab yang sudah terjadi.',
      '번째 = urutan, memakai angka asli — tetapi "pertama" adalah 첫 번째, bukan 한 번째.',
      '번 sebagai nomor label memakai angka Sino: 사 번 출구.',
      'Arah belokan memakai (으)로, bukan 에: 왼쪽으로 가세요.',
      '걸어서 ("jalan kaki") berasal dari 걷다 yang ㄷ-nya berubah menjadi ㄹ.',
      '모르다 adalah 르 tidak beraturan: 몰라요 — tapi bentuk -(으)면-nya tetap 모르면.',
    ],
    pitfalls: [
      {
        wrong: '한 번째 신호등',
        right: '첫 번째 신호등',
        why: '"Pertama" memakai bentuk khusus 첫.',
      },
      {
        wrong: '네 번 출구',
        right: '사 번 출구',
        why: 'Nomor pintu keluar adalah label, jadi memakai angka Sino.',
      },
      {
        wrong: '왼쪽에 가세요.',
        right: '왼쪽으로 가세요.',
        why: 'Arah belokan ditandai (으)로, bukan 에.',
      },
    ],
  },
}
