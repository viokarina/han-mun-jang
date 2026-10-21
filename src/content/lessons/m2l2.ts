import type { Lesson } from '../../types/curriculum'

export const m2l2: Lesson = {
  id: 'm2-l2',
  moduleId: 'm2',
  number: '2.2',
  title: '이/가 — menunjuk pelaku dan hal baru',
  subtitle: 'Perbandingan tuntas dengan 은/는',
  objective:
    'Setelah pelajaran ini kamu bisa memilih antara 은/는 dan 이/가 berdasarkan situasi, bukan hafalan — dan tahu kenapa keduanya bisa muncul dalam satu kalimat.',
  focus: ['이/가', '은/는'],
  estimatedMinutes: 16,

  coreExamples: [
    {
      ko: '민호 씨가 왔어요.',
      id: 'Minho yang datang.',
      highlight: ['가'],
      note: 'Jawaban atas pertanyaan 누가 왔어요?',
    },
    { ko: '날씨가 좋아요.', id: 'Cuacanya bagus.', highlight: ['가'] },
    { ko: '시간이 없어요.', id: 'Saya tidak punya waktu.', highlight: ['이'] },
    {
      ko: '오늘은 날씨가 좋아요.',
      id: 'Hari ini cuacanya bagus.',
      highlight: ['은', '가'],
      note: 'Topik dan subjek hadir bersama dalam satu kalimat.',
    },
    { ko: '어, 고양이가 있어요!', id: 'Eh, ada kucing!', highlight: ['가'] },
  ],

  breakdowns: [
    {
      sentence: {
        ko: '오늘은 날씨가 좋아요.',
        id: 'Hari ini cuacanya bagus.',
        highlight: ['은', '가'],
      },
      rows: [
        {
          unit: '오늘은',
          formula: '오늘 + 은',
          meaning: 'Hari ini — latar pembicaraan (topik)',
        },
        {
          unit: '날씨가',
          formula: '날씨 + 가',
          meaning: 'Cuaca — subjek, yaitu hal yang persisnya dinilai bagus',
        },
        { unit: '좋아요', formula: '좋다 → 좋아요', meaning: 'Bagus, kata sifat dalam 해요체' },
      ],
      why:
        'Kalimat ini membuktikan bahwa 은/는 dan 이/가 bukan dua pilihan yang saling menggantikan — keduanya bisa hadir bersamaan karena tugasnya berbeda. 오늘은 menetapkan "soal hari ini", lalu 날씨가 menunjuk apa persisnya yang sedang dinilai. Struktur "topik + subjek" ini sangat lazim dalam bahasa Korea dan tidak punya padanan langsung dalam bahasa Indonesia, yang cukup berkata "hari ini cuacanya bagus".',
      swaps: [
        {
          alt: '오늘 날씨가 좋아요.',
          effect:
            'Tanpa 은, kalimatnya netral — sekadar melaporkan cuaca hari ini. Inilah bentuk yang paling sering dipakai.',
        },
        {
          alt: '오늘이 날씨가 좋아요. (janggal)',
          effect:
            'Dua subjek berturut-turut membuat kalimatnya tidak enak didengar. 오늘이 baru tepat kalau "hari ini" sendirilah jawabannya — misalnya 오늘이 제 생일이에요 ("hari inilah ulang tahun saya").',
        },
      ],
    },
    {
      sentence: {
        ko: '시간이 없어요.',
        id: 'Saya tidak punya waktu.',
        highlight: ['이'],
      },
      rows: [
        { unit: '시간이', formula: '시간 + 이', meaning: 'Waktu — subjek kalimat' },
        { unit: '없어요', formula: '없다 → 없어요', meaning: 'Tidak ada, 해요체' },
      ],
      why:
        '있다 dan 없다 menyatakan keberadaan, dan apa yang ada atau tidak ada selalu berperan sebagai SUBJEK. Bahasa Indonesia berkata "saya tidak punya waktu" dengan "waktu" sebagai objek, tetapi logika Korea adalah "waktu itu tidak ada". Karena itu 시간을 없어요 salah — dan ini salah satu kesalahan paling sering bagi penutur bahasa Indonesia.',
      swaps: [
        {
          alt: '시간은 없어요.',
          effect:
            '"Waktu sih tidak ada (tapi mungkin hal lain ada)." Benar, tetapi membawa nuansa membandingkan — cocok kalau kamu baru saja ditawari dua hal.',
        },
        {
          alt: '시간이 있어요?',
          effect:
            'Bentuk tanyanya. Partikelnya tetap 이, karena perannya tidak berubah. Dalam percakapan santai partikel ini sering dilepas: 시간 있어요?',
        },
      ],
    },
  ],

  vocab: [
    { ko: '날씨', id: 'cuaca', pos: 'kata benda' },
    { ko: '시간', id: 'waktu', pos: 'kata benda' },
    { ko: '우산', id: 'payung', pos: 'kata benda' },
    { ko: '사무실', id: 'ruang kantor', pos: 'kata benda' },
    { ko: '자리', id: 'tempat duduk, posisi', pos: 'kata benda' },
    {
      ko: '있다',
      id: 'ada, punya',
      pos: 'kata kerja',
      note: 'Subjeknya memakai 이/가. 해요체: 있어요.',
      example: { ko: '우산이 있어요.', id: 'Saya punya payung.' },
    },
    {
      ko: '없다',
      id: 'tidak ada, tidak punya',
      pos: 'kata kerja',
      note: 'Subjeknya memakai 이/가. 해요체: 없어요.',
    },
    { ko: '좋다', id: 'bagus, baik', pos: 'kata sifat', note: 'Kata SIFAT — subjeknya memakai 이/가.' },
    { ko: '많다', id: 'banyak', pos: 'kata sifat', note: '해요체: 많아요.' },
    { ko: '그래서', id: 'karena itu, jadi', pos: 'kata keterangan' },
  ],

  grammar: [
    {
      title: '이 atau 가?',
      form: 'kata benda + 이 (ada 받침) · 가 (tanpa 받침)',
      body:
        'Aturan bentuknya sama seperti 은/는: ditentukan oleh konsonan penutup. Yang berbeda adalah kapan kamu memakainya.',
      table: {
        columns: ['Kata benda', 'Alasan', 'Hasil'],
        rows: [
          ['시간', '받침 ㄴ → 이', '시간이'],
          ['우산', '받침 ㄴ → 이', '우산이'],
          ['날씨', 'vokal → 가', '날씨가'],
          ['친구', 'vokal → 가', '친구가'],
        ],
      },
    },
    {
      title: 'Tiga situasi yang menuntut 이/가',
      body:
        'Kalau salah satu dari tiga situasi ini berlaku, pilih 이/가 tanpa ragu. Di luar itu, 은/는 biasanya lebih wajar.',
      table: {
        columns: ['Situasi', 'Contoh', 'Kenapa'],
        rows: [
          [
            'Menjawab / menanyakan "siapa, apa"',
            '누가 왔어요? → 민호 씨가 왔어요.',
            'Yang ditanyakan adalah identitas pelakunya',
          ],
          [
            'Informasi yang baru muncul',
            '어, 비가 와요!',
            'Sesuatu yang belum diketahui pendengar',
          ],
          [
            'Subjek kata sifat dan 있다/없다',
            '날씨가 좋아요. · 시간이 없어요.',
            'Kata sifat menggambarkan keadaan subjeknya',
          ],
        ],
      },
      examples: [
        {
          ko: '한국어가 어려워요.',
          id: 'Bahasa Koreanya sulit.',
          highlight: ['가'],
          note: 'Melaporkan keadaan — misalnya setelah membuka buku pelajaran dan terkejut.',
        },
        {
          ko: '한국어는 어려워요.',
          id: 'Bahasa Korea itu sulit.',
          highlight: ['는'],
          note: 'Mengangkat bahasa Korea sebagai topik lalu mengomentarinya secara umum.',
        },
      ],
    },
    {
      title: '은/는 vs 이/가 — tabel keputusan',
      body:
        'Kalau kamu hanya ingat satu hal dari pelajaran ini, ingat ini: 은/는 menata APA YANG DIBICARAKAN, 이/가 menunjuk SIAPA ATAU APA YANG BERPERAN.',
      table: {
        caption:
          'Jangan menganggap salah satunya "benar" dan yang lain "salah" — keduanya benar dalam situasi masing-masing.',
        columns: ['Pakai 은/는 kalau…', 'Pakai 이/가 kalau…'],
        rows: [
          ['Memperkenalkan diri atau menetapkan topik', 'Menjawab pertanyaan "siapa / apa"'],
          ['Membandingkan dua hal', 'Melaporkan sesuatu yang baru terjadi'],
          ['Hal itu sudah diketahui bersama', 'Hal itu baru bagi pendengar'],
          ['Bercerita tentang kebiasaan umum', 'Subjek dari kata sifat, 있다, 없다'],
        ],
      },
      more:
        'Hati-hati dengan "aturan" yang terlalu sederhana seperti "은/는 untuk topik, 이/가 untuk subjek". Itu benar sebagai titik awal, tetapi menyesatkan kalau dianggap mutlak — karena 은/는 juga bisa menggantikan 을/를, dan satu kalimat bisa memuat keduanya. Yang lebih berguna adalah bertanya: apakah saya sedang MENATA pembicaraan, atau sedang MENUNJUK sesuatu?',
      moreExamples: [
        {
          ko: '제가 할게요.',
          id: 'Biar saya yang melakukannya.',
          note: 'Menonjolkan diri sebagai pelaku → 제가, bukan 저는.',
        },
        {
          ko: '저는 커피를 안 마셔요.',
          id: 'Kalau saya, tidak minum kopi.',
          note: 'Menetapkan diri sebagai topik → 저는.',
        },
      ],
    },
    {
      title: 'Tiga kata yang berubah bentuk',
      body:
        'Sebagian besar kata benda cukup ditempeli 이 atau 가. Tetapi tiga kata ganti berikut berubah bentuknya, dan ini wajib dihafal.',
      table: {
        columns: ['Kata', '+ 이/가', '+ 은/는'],
        rows: [
          ['저 (saya, sopan)', '제가', '저는'],
          ['나 (aku, santai)', '내가', '나는'],
          ['누구 (siapa)', '누가', '— (jarang dipakai)'],
        ],
      },
      mistakes: [
        { wrong: '저가 갈게요.', right: '제가 갈게요.', why: 'Bentuk 저가 tidak ada.' },
        { wrong: '누구가 왔어요?', right: '누가 왔어요?', why: 'Bentuk 누구가 tidak ada.' },
      ],
    },
  ],

  dialogue: {
    title: 'Hujan mendadak',
    situation: 'Sujin melihat ke jendela kantor dan terkejut.',
    lines: [
      {
        speaker: '수진',
        ko: '어, 밖에 비가 와요!',
        id: 'Eh, di luar hujan!',
        note: 'Informasi yang baru terlihat → 비가, bukan 비는.',
      },
      {
        speaker: '민호',
        ko: '정말요? 우산이 있어요?',
        id: 'Benarkah? Punya payung?',
        note: '있다 menuntut subjek dengan 이/가.',
      },
      { speaker: '수진', ko: '아니요, 우산이 없어요.', id: 'Tidak, saya tidak punya payung.' },
      {
        speaker: '민호',
        ko: '제 우산이 두 개 있어요. 하나 쓰세요.',
        id: 'Saya punya dua payung. Pakai saja satu.',
        note: '쓰세요 adalah bentuk permintaan sopan -(으)세요, dibahas di Modul 3.',
      },
      {
        speaker: '수진',
        ko: '고마워요! 민호 씨는 정말 친절해요.',
        id: 'Terima kasih! Minho memang baik sekali.',
        note: 'Di sini topik berpindah ke Minho, jadi memakai 는 — bukan lagi melaporkan hal baru.',
      },
    ],
    politeness:
      'Perhatikan pergantian partikelnya: saat melaporkan sesuatu yang baru (비가, 우산이) dipakai 이/가, tetapi begitu pembicaraan beralih untuk mengomentari seseorang (민호 씨는), partikelnya berubah menjadi 는.',
  },

  passage: {
    title: '우리 사무실',
    intro: 'Perhatikan pergantian antara 은/는 dan 이/가 di setiap kalimat.',
    sentences: [
      { ko: '우리 사무실은 십 층에 있어요.', id: 'Kantor kami ada di lantai sepuluh.' },
      { ko: '사무실에 창문이 많아요.', id: 'Di kantor banyak jendelanya.' },
      { ko: '그래서 햇빛이 좋아요.', id: 'Karena itu cahayanya bagus.' },
      { ko: '제 자리는 창문 옆이에요.', id: 'Tempat duduk saya di sebelah jendela.' },
      { ko: '저는 이 자리가 정말 좋아요.', id: 'Saya sangat suka tempat ini.' },
    ],
    vocabInContext: [
      { ko: '층', id: 'lantai (tingkat)' },
      { ko: '창문', id: 'jendela' },
      { ko: '햇빛', id: 'cahaya matahari' },
      { ko: '옆', id: 'sebelah, samping' },
    ],
    analysis: [
      '우리 사무실은 dan 제 자리는 memakai 은/는 karena keduanya diangkat sebagai topik yang hendak dijelaskan.',
      '창문이 많아요 dan 햇빛이 좋아요 memakai 이/가 karena 많다 dan 좋다 adalah kata sifat, dan kata sifat selalu menggambarkan keadaan subjeknya.',
      'Kalimat terakhir memuat topik DAN subjek: 저는 (topik) + 이 자리가 (subjek). Pola 저는 〜이/가 좋아요 adalah cara paling lazim menyatakan kesukaan dengan kata sifat 좋다. Bandingkan dengan 저는 이 자리를 좋아해요, yang memakai kata kerja 좋아하다 dan karenanya memakai 를.',
      '사무실에 창문이 많아요 memakai 에 (bukan 에서) karena 많다 menyatakan keberadaan, bukan kegiatan.',
    ],
  },

  exercises: [
    {
      id: 'm2l2-e1',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Temanmu bertanya 누가 한국어를 공부해요? ("Siapa yang belajar bahasa Korea?")',
      sentence: '수진 씨___ 한국어를 공부해요.',
      translation: 'Sujin yang belajar bahasa Korea.',
      options: ['가', '는', '를', '도'],
      answer: '가',
      explain:
        'Menjawab pertanyaan "siapa" berarti menunjuk pelakunya, dan itu selalu memakai 이/가. 수진 씨 berakhir vokal, jadi bentuknya 가.',
      whyNot: {
        는: '수진 씨는 한국어를 공부해요 terdengar seperti "kalau Sujin sih, dia belajar bahasa Korea" — membandingkan, bukan menjawab.',
        를: '를 menandai objek. Di sini objeknya sudah ada: 한국어를.',
        도: '도 berarti "juga" — baru cocok kalau sebelumnya ada orang lain yang disebut.',
      },
      tags: ['이/가'],
    },
    {
      id: 'm2l2-e2',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: 'Kamu menolak ajakan karena sedang tidak sempat.',
      sentence: '미안해요, 시간___ 없어요.',
      translation: 'Maaf, saya tidak punya waktu.',
      options: ['이', '을', '는', '에'],
      answer: '이',
      explain:
        '없다 selalu menuntut subjek dengan 이/가. 시간 berakhir dengan 받침 ㄴ, jadi bentuknya 이.',
      whyNot: {
        을: 'Kesalahan yang sangat umum karena bahasa Indonesia berkata "punya waktu". 없다 bukan kata kerja transitif dan tidak pernah memakai 을/를.',
        는: '시간은 없어요 benar, tetapi menambahkan nuansa membandingkan — "waktu sih tidak ada, tapi…". Untuk permintaan maaf biasa, 이 lebih netral.',
        에: '에 menandai waktu sebagai keterangan (세 시에), bukan subjek kalimat.',
      },
      tags: ['이/가'],
    },
    {
      id: 'm2l2-e3',
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat untuk bagian yang kosong.',
      context:
        'Seseorang bertanya tentang cuaca hari ini. Kamu menjawab dengan menjadikan "hari ini" sebagai latar.',
      sentence: '오늘___ 날씨가 좋아요.',
      translation: 'Hari ini cuacanya bagus.',
      options: ['은', '이', '를', '에서'],
      answer: '은',
      explain:
        '오늘 berperan sebagai latar pembicaraan, bukan sebagai hal yang dinilai. Yang dinilai bagus adalah 날씨, dan ia sudah memakai 가. Satu kalimat memang bisa memuat topik dan subjek sekaligus.',
      whyNot: {
        이: '오늘이 날씨가 좋아요 menumpuk dua subjek dan terdengar janggal. 오늘이 baru tepat kalau "hari ini" sendirilah jawabannya, seperti 오늘이 제 생일이에요.',
        를: 'Tidak ada tindakan yang dikenakan pada "hari ini", jadi tidak ada objek di sini.',
        에서: '에서 menandai tempat kegiatan, tidak pernah dipakai untuk waktu.',
      },
      tags: ['이/가', '은/는'],
    },
    {
      id: 'm2l2-e4',
      kind: 'match',
      prompt: 'Pasangkan setiap situasi dengan partikel yang tepat.',
      pairs: [
        { left: '누가 왔어요?', right: 'jawabannya memakai 이/가' },
        { left: '저___ 인도네시아 사람이에요.', right: 'perkenalan diri → 은/는' },
        { left: '어, 비___ 와요!', right: 'informasi baru → 이/가' },
        { left: '시간___ 없어요.', right: 'subjek dari 없다 → 이/가' },
        { left: '커피___ 좋아해요, 차는 싫어해요.', right: 'membandingkan → 은/는' },
      ],
      explain:
        'Pertanyaan yang perlu kamu ajukan selalu sama: apakah saya sedang MENATA pembicaraan (은/는), atau sedang MENUNJUK pelaku/keadaan (이/가)?',
      tags: ['이/가', '은/는'],
    },
    {
      id: 'm2l2-e5',
      kind: 'build',
      prompt: 'Susun kalimat yang memuat topik sekaligus subjek.',
      translation: 'Saya sangat suka tempat duduk ini.',
      tiles: ['저는', '이 자리가', '정말', '좋아요'],
      distractors: ['이 자리를', '제가'],
      answers: ['저는 이 자리가 정말 좋아요'],
      explain:
        '좋다 adalah kata SIFAT, jadi hal yang disukai berperan sebagai subjek dengan 가 — bukan objek dengan 를. Sementara 저는 menjadi topiknya. Kalau ingin memakai 를, kata kerjanya harus diganti: 저는 이 자리를 정말 좋아해요.',
      parts: [
        { part: '저는', role: 'topik: tentang saya' },
        { part: '이 자리가', role: 'subjek dari kata sifat 좋다' },
        { part: '정말', role: 'keterangan: sungguh, sangat' },
        { part: '좋아요', role: 'kata sifat 좋다 dalam 해요체' },
      ],
      altNote:
        'Versi dengan kata kerja — 저는 이 자리를 정말 좋아해요 — juga benar dan artinya hampir sama.',
      tags: ['이/가'],
    },
    {
      id: 'm2l2-e6',
      kind: 'correct',
      prompt: 'Perbaiki partikel pada kalimat ini.',
      sentence: '저가 할게요.',
      translation: 'Biar saya yang melakukannya.',
      answers: ['제가 할게요'],
      explain:
        '저 bertemu partikel subjek 가 berubah bentuk menjadi 제가 — bentuk 저가 tidak ada dalam bahasa Korea. Hal yang sama berlaku untuk 나 → 내가 dan 누구 → 누가.',
      tags: ['이/가'],
    },
    {
      id: 'm2l2-e7',
      kind: 'mc',
      prompt:
        'Berdasarkan bacaan 우리 사무실, kenapa kalimat 창문이 많아요 memakai 이 dan bukan 은?',
      context: 'Pikirkan jenis kata 많다.',
      options: [
        '많다 adalah kata sifat, dan kata sifat menggambarkan keadaan subjeknya.',
        'Karena 창문 berakhir dengan 받침.',
        'Karena jendela adalah objek dari kalimat itu.',
        'Karena kalimatnya membandingkan jendela dengan benda lain.',
      ],
      answerIndex: 0,
      explain:
        '많다 ("banyak") adalah kata sifat yang menyatakan keadaan. Hal yang digambarkan keadaannya selalu berperan sebagai subjek, jadi memakai 이/가. Kebetulan 창문 memang punya 받침 — tapi itu hanya menentukan BENTUKNYA (이 bukan 가), bukan alasan memilih 이/가 daripada 은/는.',
      whyNot: {
        'Karena 창문 berakhir dengan 받침.':
          'Itu hanya menjelaskan kenapa bentuknya 이 dan bukan 가. Pertanyaannya adalah kenapa 이/가 dipilih, bukan 은/는.',
        'Karena jendela adalah objek dari kalimat itu.':
          '많다 bukan kata kerja transitif, jadi kalimat ini tidak punya objek.',
        'Karena kalimatnya membandingkan jendela dengan benda lain.':
          'Justru membandingkan adalah tugas 은/는, bukan 이/가.',
      },
      tags: ['이/가', 'pemahaman bacaan'],
    },
  ],

  quiz: [
    {
      id: 'm2l2-q1',
      kind: 'mc',
      prompt: 'Manakah pernyataan yang PALING tepat tentang 은/는 dan 이/가?',
      options: [
        'Keduanya bisa muncul dalam satu kalimat karena tugasnya berbeda.',
        '은/는 selalu untuk subjek, 이/가 selalu untuk objek.',
        'Keduanya tidak pernah muncul bersama dalam satu kalimat.',
        '이/가 hanyalah bentuk sopan dari 은/는.',
      ],
      answerIndex: 0,
      explain:
        'Contoh paling jelas adalah 오늘은 날씨가 좋아요: 오늘은 menetapkan topik, 날씨가 menunjuk subjeknya. Keduanya punya tugas berbeda, jadi bisa hadir bersamaan.',
      whyNot: {
        '은/는 selalu untuk subjek, 이/가 selalu untuk objek.':
          'Penanda objek adalah 을/를. Dan 은/는 justru bisa menggantikan 을/를 saat membandingkan.',
        'Keduanya tidak pernah muncul bersama dalam satu kalimat.':
          'Struktur "topik + subjek" justru sangat lazim dalam bahasa Korea.',
        '이/가 hanyalah bentuk sopan dari 은/는.':
          'Keduanya tidak ada hubungannya dengan tingkat kesopanan.',
      },
      tags: ['이/가', '은/는'],
    },
    {
      id: 'm2l2-q2',
      kind: 'fill',
      prompt: 'Lengkapi dengan partikel yang tepat.',
      context: 'Kamu baru membuka pintu kantor dan terkejut melihat sesuatu.',
      sentence: '어, 고양이___ 있어요!',
      translation: 'Eh, ada kucing!',
      answers: ['가'],
      explain:
        'Dua alasan sekaligus: informasi ini baru bagi pendengar, dan 있다 memang menuntut subjek dengan 이/가. 고양이 berakhir vokal ㅣ, jadi bentuknya 가.',
      tags: ['이/가'],
    },
    {
      id: 'm2l2-q3',
      kind: 'build',
      prompt: 'Susun jawaban atas pertanyaan 누가 왔어요?',
      translation: 'Guru yang datang.',
      tiles: ['선생님이', '왔어요'],
      distractors: ['선생님은', '선생님을'],
      answers: ['선생님이 왔어요'],
      explain:
        'Menjawab "siapa" selalu memakai 이/가. 선생님 punya 받침 ㅁ, jadi bentuknya 이. Dengan 은, jawabannya akan terdengar membandingkan guru dengan orang lain.',
      parts: [
        { part: '선생님이', role: 'pelaku yang ditanyakan, dengan penanda subjek 이' },
        { part: '왔어요', role: '오다 dalam bentuk lampau' },
      ],
      tags: ['이/가'],
    },
  ],

  summary: {
    points: [
      '이 dipakai setelah 받침, 가 setelah vokal.',
      'Pakai 이/가 untuk menjawab "siapa/apa", melaporkan hal baru, dan sebagai subjek kata sifat, 있다, dan 없다.',
      '있다/없다 selalu memakai 이/가 — bukan 을/를 — meskipun bahasa Indonesia berkata "punya".',
      '은/는 dan 이/가 bisa hadir bersama: 오늘은 날씨가 좋아요.',
      '저 → 제가, 나 → 내가, 누구 → 누가. Tiga bentuk ini berubah dan harus dihafal.',
    ],
    pitfalls: [
      {
        wrong: '시간을 없어요.',
        right: '시간이 없어요.',
        why: '없다 menuntut subjek dengan 이/가, bukan objek.',
      },
      {
        wrong: '저가 할게요.',
        right: '제가 할게요.',
        why: '저 + 가 selalu menyusut menjadi 제가.',
      },
      {
        wrong: '오늘이 날씨가 좋아요.',
        right: '오늘은 날씨가 좋아요.',
        why: 'Dua subjek berturut-turut. Latar waktu seharusnya menjadi topik dengan 은.',
      },
    ],
  },
}
