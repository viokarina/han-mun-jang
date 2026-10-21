import type { LabQuestion, LabSet } from '../types/curriculum'

/**
 * Data Lab Partikel.
 *
 * Setiap soal WAJIB punya `context` supaya hanya ada satu jawaban yang benar-benar
 * wajar. Kalau sebuah kalimat sebenarnya menerima lebih dari satu partikel,
 * pilihan jawabannya dibatasi supaya tidak menyesatkan, dan alternatifnya
 * dijelaskan di bagian `explain`.
 */

export const labSets: LabSet[] = [
  {
    id: 'eun-i',
    title: '은/는 vs 이/가',
    short: '은/는 · 이/가',
    description:
      'Pasangan yang paling sering tertukar. 은/는 menata apa yang sedang dibicarakan; 이/가 menunjuk siapa atau apa yang melakukan sesuatu.',
    particles: ['은/는', '이/가'],
    comparison: {
      caption:
        'Satu kalimat bisa memakai keduanya sekaligus: 오늘은 날씨가 좋아요 — topik "hari ini", subjek "cuaca".',
      columns: ['Partikel', 'Dipakai untuk', 'Contoh', 'Rasanya seperti'],
      rows: [
        [
          '은/는',
          'Menetapkan topik, membandingkan, menyebut hal yang sudah diketahui bersama',
          '저는 학생이에요.',
          '"Kalau soal saya, …"',
        ],
        [
          '이/가',
          'Menunjuk pelaku, memperkenalkan informasi baru, menjawab "siapa/apa"',
          '민호 씨가 왔어요.',
          '"Minho-lah yang datang."',
        ],
        [
          'Setelah konsonan',
          '은 · 이',
          '학생은 · 학생이',
          '받침 ada → 은/이',
        ],
        ['Setelah vokal', '는 · 가', '친구는 · 친구가', '받침 tidak ada → 는/가'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '제 이름은 비오예요.', id: 'Nama saya Vio.', highlight: ['은'] },
        b: { ko: '제 이름이 비오예요.', id: 'Nama saya-lah Vio.', highlight: ['이'] },
        difference:
          'Versi 은 adalah cara normal memperkenalkan diri: "kalau soal nama saya, Vio." Versi 이 menyorot "Vio" sebagai jawaban — wajar kalau orang lain baru saja salah menyebut namamu.',
      },
      {
        a: { ko: '오늘은 날씨가 좋아요.', id: 'Hari ini cuacanya bagus.', highlight: ['은', '가'] },
        b: { ko: '오늘이 제 생일이에요.', id: 'Hari ini ulang tahun saya.', highlight: ['이'] },
        difference:
          'Pada kalimat pertama 오늘 hanyalah latar waktu (topik), dan yang dinilai adalah 날씨. Pada kalimat kedua 오늘 adalah jawaban atas "kapan?", sehingga ditandai 이.',
      },
      {
        a: { ko: '고양이가 있어요.', id: 'Ada kucing.', highlight: ['가'] },
        b: { ko: '고양이는 있어요.', id: 'Kucing sih ada.', highlight: ['는'] },
        difference:
          'Yang pertama sekadar memberitahu ada kucing — informasi baru. Yang kedua terasa membandingkan: kucing ada, tetapi mungkin yang lain tidak.',
      },
    ],
  },

  {
    id: 'eul-reul',
    title: '을/를 — penanda objek',
    short: '을/를',
    description:
      'Menandai sasaran tindakan. Bagian tersulitnya bukan bentuknya, melainkan membedakan kata kerja yang butuh objek (을/를) dari kata sifat yang butuh subjek (이/가).',
    particles: ['을/를'],
    comparison: {
      caption:
        '좋다 adalah kata sifat ("bagus"), 좋아하다 adalah kata kerja ("menyukai"). Keduanya diterjemahkan "suka" dalam bahasa Indonesia, tapi partikelnya berbeda.',
      columns: ['Pola', 'Partikel', 'Contoh', 'Arti'],
      rows: [
        ['Kata kerja transitif', '을/를', '한국어를 공부해요.', 'Belajar bahasa Korea'],
        ['좋아하다 (kata kerja)', '을/를', '커피를 좋아해요.', 'Saya menyukai kopi'],
        ['좋다 (kata sifat)', '이/가', '커피가 좋아요.', 'Kopinya bagus / saya suka kopi'],
        ['있다 / 없다', '이/가', '시간이 없어요.', 'Tidak ada waktu'],
        ['Setelah konsonan / vokal', '을 · 를', '밥을 · 영화를', '받침 ada → 을'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '저는 커피를 좋아해요.', id: 'Saya suka kopi.', highlight: ['를'] },
        b: { ko: '저는 커피가 좋아요.', id: 'Bagi saya, kopi itu enak.', highlight: ['가'] },
        difference:
          '좋아하다 adalah kata kerja, jadi objeknya memakai 를. 좋다 adalah kata sifat yang menggambarkan keadaan, jadi 커피 berperan sebagai subjek dengan 가. Keduanya benar, nuansanya sedikit berbeda.',
      },
    ],
  },

  {
    id: 'e-eseo',
    title: '에 vs 에서',
    short: '에 · 에서',
    description:
      'Keduanya sering diterjemahkan "di". Kuncinya: 에 menandai tujuan, keberadaan, dan waktu; 에서 menandai tempat sebuah kegiatan berlangsung, serta titik asal.',
    particles: ['에', '에서'],
    comparison: {
      columns: ['Partikel', 'Fungsi', 'Contoh', 'Arti'],
      rows: [
        ['에', 'Tujuan (pergi/datang)', '회사에 가요.', 'Pergi ke kantor'],
        ['에', 'Tempat keberadaan (있다/없다)', '집에 있어요.', 'Berada di rumah'],
        ['에', 'Waktu', '세 시에 만나요.', 'Bertemu jam tiga'],
        ['에서', 'Tempat kegiatan berlangsung', '카페에서 공부해요.', 'Belajar di kafe'],
        ['에서', 'Titik asal', '인도네시아에서 왔어요.', 'Datang dari Indonesia'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '집에 있어요.', id: 'Saya ada di rumah.', highlight: ['에'] },
        b: { ko: '집에서 일해요.', id: 'Saya bekerja di rumah.', highlight: ['에서'] },
        difference:
          'Kalimat pertama hanya menyatakan keberadaan — tidak ada kegiatan, jadi 에. Kalimat kedua punya kegiatan (bekerja) yang berlangsung di sana, jadi 에서.',
      },
      {
        a: { ko: '학교에 가요.', id: 'Saya pergi ke sekolah.', highlight: ['에'] },
        b: { ko: '학교에서 와요.', id: 'Saya datang dari sekolah.', highlight: ['에서'] },
        difference:
          '에 menunjuk arah tujuan, 에서 menunjuk titik keberangkatan. Kata kerjanya yang menentukan mana yang masuk akal.',
      },
    ],
  },

  {
    id: 'do-man',
    title: '도 & 만 — juga & hanya',
    short: '도 · 만',
    description:
      'Keduanya adalah partikel pengganti: saat dipakai, 은/는, 이/가, dan 을/를 biasanya dilepas.',
    particles: ['도', '만'],
    comparison: {
      caption:
        '저는도 ✗ dan 저를만 ✗ tidak ada. Tetapi partikel tempat seperti 에/에서 tetap dipertahankan: 집에서도, 학교에만.',
      columns: ['Partikel', 'Arti', 'Contoh', 'Catatan'],
      rows: [
        ['도', 'juga, pun', '저도 가요.', 'Menggantikan 는/가/를'],
        ['만', 'hanya, saja', '물만 마셔요.', 'Menggantikan 는/가/를'],
        ['에도 / 에서도', 'di … juga', '집에서도 공부해요.', '에/에서 tetap ditulis'],
        ['에만 / 에서만', 'hanya di …', '주말에만 쉬어요.', '에/에서 tetap ditulis'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '저도 커피를 마셔요.', id: 'Saya juga minum kopi.', highlight: ['도'] },
        b: { ko: '저는 커피도 마셔요.', id: 'Saya minum kopi juga.', highlight: ['도'] },
        difference:
          'Letak 도 menentukan apa yang "juga". Pada a, orang lain minum kopi dan saya ikut. Pada b, saya minum minuman lain dan kopi termasuk salah satunya.',
      },
    ],
  },

  {
    id: 'connect',
    title: '하고 · 와/과 · (이)랑',
    short: '하고 · 와/과',
    description:
      'Tiga cara menyambung kata benda ("dan", "dengan"). Artinya sama; yang berbeda adalah tingkat keformalannya.',
    particles: ['하고', '와/과', '(이)랑'],
    comparison: {
      caption:
        'Semuanya bisa berarti "dan" maupun "dengan". 친구하고 가요 = "pergi dengan teman".',
      columns: ['Bentuk', 'Keformalan', 'Aturan bentuk', 'Contoh'],
      rows: [
        ['하고', 'Netral — paling aman dipakai', 'Sama untuk semua kata', '빵하고 우유'],
        ['와 / 과', 'Agak formal, lazim dalam tulisan', '와 setelah vokal, 과 setelah konsonan', '친구와 · 빵과'],
        ['(이)랑', 'Santai, percakapan akrab', '랑 setelah vokal, 이랑 setelah konsonan', '친구랑 · 빵이랑'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '친구하고 영화를 봤어요.', id: 'Saya menonton film dengan teman.', highlight: ['하고'] },
        b: { ko: '친구와 영화를 봤어요.', id: 'Saya menonton film dengan teman.', highlight: ['와'] },
        difference:
          'Artinya persis sama. 하고 terdengar seperti percakapan sehari-hari, 와 sedikit lebih rapi dan sering muncul dalam tulisan.',
      },
    ],
  },

  {
    id: 'ui',
    title: '의 — kepemilikan & hubungan',
    short: '의',
    description:
      'Menyambungkan dua kata benda: "milik", "dari", atau sekadar hubungan antara keduanya. Dalam percakapan sering dilepas.',
    particles: ['의'],
    comparison: {
      caption: 'Perhatikan: 의 pada posisi partikel dibaca [에], bukan [의].',
      columns: ['Bentuk', 'Dibaca', 'Arti', 'Catatan'],
      rows: [
        ['저의 → 제', '제', 'saya punya', 'Bentuk singkat 제 jauh lebih umum'],
        ['나의 → 내', '내', 'aku punya', 'Ragam santai'],
        ['친구의 가방', '친구에 가방', 'tas teman', 'Boleh juga: 친구 가방'],
        ['한국의 날씨', '한국에 날씨', 'cuaca Korea', '의 sering dilepas dalam percakapan'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '제 가방이에요.', id: 'Ini tas saya.', highlight: ['제'] },
        b: { ko: '저의 가방이에요.', id: 'Ini tas saya.', highlight: ['저의'] },
        difference:
          'Keduanya benar, tetapi 제 adalah bentuk ringkas yang dipakai hampir selalu. 저의 terdengar kaku kecuali kamu memang ingin menekankan "milik SAYA".',
      },
    ],
  },

  {
    id: 'ege-hante',
    title: '에게 · 한테 · 께 — kepada siapa',
    short: '에게 · 한테 · 께',
    description:
      'Menandai penerima (kepada) dan sumber (dari) untuk orang atau hewan. Untuk benda dan tempat, gunakan 에 dan 에서.',
    particles: ['에게', '한테', '께', '께서'],
    comparison: {
      caption:
        'Untuk benda/tempat: 회사에 전화해요 (menelepon kantor), bukan 회사한테.',
      columns: ['Bentuk', 'Arti', 'Ragam', 'Contoh'],
      rows: [
        ['한테', 'kepada (orang)', 'Percakapan', '친구한테 줘요.'],
        ['에게', 'kepada (orang)', 'Tulisan / agak formal', '친구에게 줘요.'],
        ['께', 'kepada (orang yang dihormati)', 'Hormat', '선생님께 드려요.'],
        ['한테서 / 에게서', 'dari (orang)', 'Percakapan / tulisan', '친구한테서 받았어요.'],
        ['께서', 'penanda subjek hormat', 'Hormat', '할머니께서 오셨어요.'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '친구한테 선물을 줬어요.', id: 'Saya memberi hadiah kepada teman.', highlight: ['한테'] },
        b: { ko: '친구한테서 선물을 받았어요.', id: 'Saya menerima hadiah dari teman.', highlight: ['한테서'] },
        difference:
          'Tambahan 서 membalik arahnya: tanpa 서 berarti "kepada", dengan 서 berarti "dari". Kata kerjanya (주다 vs 받다) membantu memastikan arah yang benar.',
      },
    ],
  },

  {
    id: 'ro',
    title: '(으)로 — cara, alat, arah',
    short: '(으)로',
    description:
      'Satu partikel dengan beberapa tugas: alat/cara, bahan, arah umum, dan pilihan.',
    particles: ['(으)로'],
    comparison: {
      caption:
        'Bentuk: 로 setelah vokal dan setelah ㄹ (지하철로), 으로 setelah konsonan lain (손으로).',
      columns: ['Fungsi', 'Contoh', 'Arti', 'Catatan'],
      rows: [
        ['Alat / cara', '지하철로 가요.', 'Pergi naik kereta bawah tanah', 'Jawaban atas "dengan apa?"'],
        ['Bahasa / alat tulis', '한국어로 말해요.', 'Berbicara dalam bahasa Korea', ''],
        ['Arah umum', '왼쪽으로 가세요.', 'Belok ke kiri', 'Arah, bukan tujuan akhir'],
        ['Pilihan', '커피로 할게요.', 'Saya pilih kopi saja', 'Lazim saat memesan'],
        ['Bahan', '나무로 만들었어요.', 'Terbuat dari kayu', ''],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '학교에 가요.', id: 'Saya pergi ke sekolah.', highlight: ['에'] },
        b: { ko: '학교로 가요.', id: 'Saya menuju ke arah sekolah.', highlight: ['로'] },
        difference:
          '에 menyebut sekolah sebagai tujuan akhir. 로 lebih menekankan arah perjalanan — berguna saat memberi petunjuk jalan atau membandingkan beberapa arah.',
      },
    ],
  },

  {
    id: 'buteo-kkaji',
    title: '부터 · 까지 — dari … sampai …',
    short: '부터 · 까지',
    description:
      'Menandai titik awal dan titik akhir. Untuk waktu pakai 부터; untuk tempat, titik awalnya biasanya 에서.',
    particles: ['부터', '까지'],
    comparison: {
      columns: ['Pasangan', 'Dipakai untuk', 'Contoh', 'Arti'],
      rows: [
        ['부터 … 까지', 'Rentang waktu', '아홉 시부터 여섯 시까지 일해요.', 'Bekerja dari jam 9 sampai jam 6'],
        ['에서 … 까지', 'Rentang tempat', '집에서 회사까지 멀어요.', 'Dari rumah ke kantor jauh'],
        ['까지', 'Batas akhir / tenggat', '금요일까지 보내 주세요.', 'Tolong kirim paling lambat Jumat'],
        ['까지', 'bahkan, sampai-sampai', '비까지 왔어요.', 'Bahkan hujan pun turun'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '집에서 회사까지 한 시간 걸려요.', id: 'Dari rumah ke kantor butuh satu jam.', highlight: ['에서', '까지'] },
        b: { ko: '아침부터 저녁까지 일해요.', id: 'Saya bekerja dari pagi sampai malam.', highlight: ['부터', '까지'] },
        difference:
          'Untuk jarak tempat, titik awalnya 에서. Untuk rentang waktu, titik awalnya 부터. Titik akhirnya sama-sama 까지.',
      },
    ],
  },

  {
    id: 'boda',
    title: '보다 — perbandingan',
    short: '보다',
    description:
      'Menempel pada hal yang dijadikan pembanding: "dibandingkan dengan X". Sering disertai 더 ("lebih").',
    particles: ['보다'],
    comparison: {
      caption:
        'Urutan boleh dibalik: 커피보다 차가 좋아요 = 차가 커피보다 좋아요.',
      columns: ['Pola', 'Contoh', 'Arti', 'Catatan'],
      rows: [
        ['A보다 B가 + sifat', '커피보다 차가 좋아요.', 'Dibanding kopi, teh lebih enak', 'Yang ditempeli 보다 adalah pembandingnya'],
        ['보다 + 더', '오늘이 어제보다 더 더워요.', 'Hari ini lebih panas dari kemarin', '더 boleh dilepas'],
        ['제일 / 가장', '이게 제일 맛있어요.', 'Ini yang paling enak', 'Untuk tingkat paling tinggi'],
      ],
    },
    minimalPairs: [
      {
        a: { ko: '저는 커피보다 차를 좋아해요.', id: 'Saya lebih suka teh daripada kopi.', highlight: ['보다'] },
        b: { ko: '저는 차보다 커피를 좋아해요.', id: 'Saya lebih suka kopi daripada teh.', highlight: ['보다'] },
        difference:
          'Yang ditempeli 보다 selalu kalah. Tukar posisinya dan artinya langsung terbalik — ini kesalahan yang paling sering terjadi.',
      },
    ],
  },
]

export const labQuestions: LabQuestion[] = [
  /* ---------------- 은/는 vs 이/가 ---------------- */
  {
    id: 'lab-eun-1',
    setId: 'eun-i',
    difficulty: 'dasar',
    context: 'Kamu memperkenalkan diri untuk pertama kali di sebuah pertemuan.',
    sentence: '저___ 비오예요.',
    translation: 'Saya Vio.',
    options: ['는', '가', '를', '도'],
    answer: '는',
    explain:
      'Perkenalan diri yang netral menjadikan 저 sebagai topik: "kalau soal saya, namanya Vio". Inilah pemakaian 은/는 yang paling dasar.',
    whyNot: {
      가: 'Bentuk subjek dari 저 adalah 제가, bukan 저가. Lagi pula 제가 비오예요 terdengar seperti menegaskan "sayalah Vio" — cocok kalau ada yang salah mengenali, bukan untuk perkenalan biasa.',
      를: '를 menandai objek, yaitu sasaran tindakan. Di sini 저 adalah pokok pembicaraan, bukan sasaran.',
      도: '도 berarti "juga", hanya masuk akal kalau sebelumnya ada orang lain yang bernama Vio.',
    },
  },
  {
    id: 'lab-eun-2',
    setId: 'eun-i',
    difficulty: 'dasar',
    context: 'Temanmu bertanya: 누가 왔어요? — "Siapa yang datang?"',
    sentence: '민호 씨___ 왔어요.',
    translation: 'Minho yang datang.',
    options: ['가', '는', '를', '에'],
    answer: '가',
    explain:
      'Pertanyaan dengan 누가 menanyakan pelakunya. Jawaban yang menunjuk pelaku memakai 이/가. 민호 씨 berakhir dengan vokal, jadi bentuknya 가.',
    whyNot: {
      는: '민호 씨는 왔어요 terdengar membandingkan — "kalau Minho sih dia datang (yang lain tidak)". Itu bukan jawaban langsung atas pertanyaan "siapa yang datang?".',
      를: '를 menandai objek. Minho di sini adalah pelaku yang datang, bukan sasaran tindakan.',
      에: '에 menandai tempat atau waktu, bukan orang yang melakukan sesuatu.',
    },
  },
  {
    id: 'lab-eun-3',
    setId: 'eun-i',
    difficulty: 'menengah',
    context: 'Kamu baru saja bercerita tentang kakakmu, lalu beralih ke dirimu sendiri.',
    sentence: '언니는 의사예요. 저___ 회사원이에요.',
    translation: 'Kakak saya dokter. Kalau saya, karyawan.',
    options: ['는', '가', '도', '만'],
    answer: '는',
    explain:
      'Ini pemakaian kontras: dua hal dibandingkan berdampingan. 은/는 adalah partikel yang menandai perbandingan semacam ini.',
    whyNot: {
      가: '제가 회사원이에요 akan terdengar seperti menjawab "siapa yang karyawan?" — bukan membandingkan dirimu dengan kakakmu.',
      도: '도 berarti "juga", padahal profesimu justru berbeda dari kakakmu.',
      만: '만 berarti "hanya", yang mengubah artinya menjadi "cuma saya yang karyawan".',
    },
  },
  {
    id: 'lab-eun-4',
    setId: 'eun-i',
    difficulty: 'menengah',
    context: 'Kamu membuka pintu dan terkejut melihat sesuatu yang tidak kamu duga.',
    sentence: '어, 고양이___ 있어요!',
    translation: 'Eh, ada kucing!',
    options: ['가', '는', '를', '도'],
    answer: '가',
    explain:
      'Informasi yang benar-benar baru — sesuatu yang baru muncul di hadapanmu — diperkenalkan dengan 이/가. Selain itu 있다 memang menuntut subjek dengan 이/가.',
    whyNot: {
      는: '고양이는 있어요 terdengar seperti jawaban pembanding: "kucing sih ada (tapi anjing tidak)". Tidak cocok untuk ekspresi terkejut.',
      를: '있다 bukan kata kerja transitif, jadi tidak punya objek.',
      도: '도 berarti "juga" — hanya masuk akal kalau sudah ada hewan lain yang disebut sebelumnya.',
    },
  },
  {
    id: 'lab-eun-5',
    setId: 'eun-i',
    difficulty: 'menengah',
    context: 'Seseorang bertanya tentang cuaca hari ini.',
    sentence: '오늘___ 날씨가 좋아요.',
    translation: 'Hari ini cuacanya bagus.',
    options: ['은', '이', '를', '에'],
    answer: '은',
    explain:
      '오늘 adalah latar pembicaraan (topik), sedangkan yang dinilai bagus adalah 날씨 — itulah subjeknya, dan ia sudah memakai 가. Satu kalimat memang bisa punya topik dan subjek sekaligus.',
    whyNot: {
      이: '오늘이 날씨가 좋아요 menumpuk dua subjek dan terdengar janggal. 오늘이 baru tepat kalau "hari ini" adalah jawaban atas pertanyaan "hari apa?".',
      를: 'Tidak ada tindakan yang dikenakan pada "hari ini", jadi tidak ada objek di sini.',
      에: '오늘 termasuk kata waktu yang justru tidak memakai 에 — sama seperti 어제 dan 내일.',
    },
  },
  {
    id: 'lab-eun-6',
    setId: 'eun-i',
    difficulty: 'ulangan',
    context: 'Di restoran, temanmu bertanya: 뭐가 맛있어요? — "Yang mana yang enak?"',
    sentence: '김치찌개___ 맛있어요.',
    translation: 'Kimchi jjigae-nya enak.',
    options: ['가', '는', '를', '도'],
    answer: '가',
    explain:
      'Pertanyaannya memakai 뭐가, yang menuntut jawaban penunjuk: "yang enak adalah kimchi jjigae". Jawaban semacam ini memakai 이/가.',
    whyNot: {
      는: '김치찌개는 맛있어요 artinya "kalau kimchi jjigae sih enak" — jawaban yang menyiratkan menu lain kurang enak, bukan rekomendasi langsung.',
      를: '맛있다 adalah kata sifat, jadi tidak punya objek.',
      도: '도 berarti "juga" — baru cocok kalau sebelumnya sudah ada menu lain yang dibilang enak.',
    },
  },
  {
    id: 'lab-eun-7',
    setId: 'eun-i',
    difficulty: 'ulangan',
    context: 'Kamu menjelaskan kebiasaan sehari-harimu secara umum.',
    sentence: '저___ 아침에 커피를 마셔요.',
    translation: 'Saya minum kopi di pagi hari.',
    options: ['는', '가', '를', '에'],
    answer: '는',
    explain:
      'Pernyataan tentang kebiasaan umum menempatkan pelakunya sebagai topik. Inilah pola paling lazim untuk bercerita tentang diri sendiri.',
    whyNot: {
      가: '제가 아침에 커피를 마셔요 menyorot "sayalah yang minum kopi" — cocok untuk menjawab tuduhan atau pertanyaan "siapa?", bukan untuk bercerita.',
      를: '를 sudah dipakai oleh 커피 sebagai objek. 저 adalah pelakunya.',
      에: '에 tidak dipakai untuk orang dalam peran pelaku.',
    },
  },

  /* ---------------- 을/를 ---------------- */
  {
    id: 'lab-eul-1',
    setId: 'eul-reul',
    difficulty: 'dasar',
    context: 'Kamu menceritakan apa yang kamu makan tadi.',
    sentence: '저는 밥___ 먹어요.',
    translation: 'Saya makan nasi.',
    options: ['을', '를', '이', '에'],
    answer: '을',
    explain:
      '먹다 adalah kata kerja transitif, jadi sasarannya memakai 을/를. 밥 berakhir dengan konsonan ㅂ, maka bentuknya 을.',
    whyNot: {
      를: '를 dipakai setelah kata yang berakhir vokal, misalnya 영화를. 밥 punya 받침, jadi 을.',
      이: '이 menandai subjek. Nasi di sini bukan pelaku, melainkan yang dimakan.',
      에: '에 menandai tempat atau waktu, bukan sasaran tindakan.',
    },
  },
  {
    id: 'lab-eul-2',
    setId: 'eul-reul',
    difficulty: 'dasar',
    context: 'Kamu bercerita tentang kegiatan akhir pekanmu.',
    sentence: '친구하고 영화___ 봤어요.',
    translation: 'Saya menonton film dengan teman.',
    options: ['를', '을', '가', '에서'],
    answer: '를',
    explain:
      '보다 menuntut objek, dan 영화 berakhir dengan vokal, jadi partikelnya 를.',
    whyNot: {
      을: '을 hanya untuk kata yang berakhir konsonan. 영화 berakhir vokal.',
      가: '가 menandai subjek — film di sini bukan yang menonton.',
      에서: '에서 menandai tempat kegiatan, bukan apa yang ditonton.',
    },
  },
  {
    id: 'lab-eul-3',
    setId: 'eul-reul',
    difficulty: 'menengah',
    context: 'Kamu menyatakan selera pribadi dengan kata kerja 좋아하다 ("menyukai").',
    sentence: '저는 한국 음악___ 좋아해요.',
    translation: 'Saya suka musik Korea.',
    options: ['을', '이', '는', '도'],
    answer: '을',
    explain:
      '좋아하다 adalah KATA KERJA, jadi yang disukai menjadi objek dengan 을/를. 음악 berakhir konsonan ㄱ, maka 을. Bandingkan dengan 좋다 yang merupakan kata sifat: 한국 음악이 좋아요.',
    whyNot: {
      이: '이 akan benar kalau kata kerjanya 좋다 (kata sifat): 한국 음악이 좋아요. Dengan 좋아하다, partikelnya harus 을/를.',
      는: '는 menjadikannya topik, bukan objek — susunannya jadi janggal karena 저는 sudah menjadi topik kalimat.',
      도: '도 berarti "juga", mengubah arti kalimat.',
    },
  },
  {
    id: 'lab-eul-4',
    setId: 'eul-reul',
    difficulty: 'menengah',
    context: 'Kamu menolak ajakan karena sedang sibuk. Kata kerjanya 없다 ("tidak ada").',
    sentence: '미안해요, 시간___ 없어요.',
    translation: 'Maaf, saya tidak punya waktu.',
    options: ['이', '을', '는', '에'],
    answer: '이',
    explain:
      '있다 dan 없다 selalu memakai subjek dengan 이/가, bukan objek. Meskipun bahasa Indonesia berkata "punya waktu", logika Korea adalah "waktu itu tidak ada".',
    whyNot: {
      을: 'Ini kesalahan yang sangat umum karena terpengaruh "punya". 없다 bukan kata kerja transitif, jadi tidak menerima 을/를.',
      는: '시간은 없어요 terdengar membandingkan: "waktu sih tidak ada (tapi hal lain ada)". Bisa benar dalam konteks tertentu, tapi bukan permintaan maaf biasa.',
      에: '에 menandai waktu sebagai keterangan, misalnya 세 시에. Di sini 시간 adalah subjeknya.',
    },
  },
  {
    id: 'lab-eul-5',
    setId: 'eul-reul',
    difficulty: 'ulangan',
    context: 'Kamu menceritakan rutinitas belajarmu.',
    sentence: '매일 한국어___ 공부해요.',
    translation: 'Setiap hari saya belajar bahasa Korea.',
    options: ['를', '을', '가', '로'],
    answer: '를',
    explain:
      '공부하다 menuntut objek, dan 한국어 berakhir dengan vokal ㅓ, jadi 를.',
    whyNot: {
      을: '을 untuk kata berakhiran konsonan. 한국어 berakhir vokal.',
      가: '가 menandai subjek; bahasa Korea di sini adalah yang dipelajari.',
      로: '로 menandai cara atau alat — 한국어로 공부해요 berarti "belajar MEMAKAI bahasa Korea", arti yang berbeda.',
    },
  },

  /* ---------------- 에 vs 에서 ---------------- */
  {
    id: 'lab-e-1',
    setId: 'e-eseo',
    difficulty: 'dasar',
    context: 'Kamu memberi tahu ke mana kamu pergi pagi ini.',
    sentence: '아침에 회사___ 가요.',
    translation: 'Pagi ini saya pergi ke kantor.',
    options: ['에', '에서', '를', '로만'],
    answer: '에',
    explain:
      '가다 menyatakan perpindahan menuju suatu tempat, dan tujuan ditandai dengan 에.',
    whyNot: {
      에서: '에서 menandai tempat kegiatan berlangsung atau titik asal. 회사에서 가요 berarti "berangkat dari kantor" — arah yang berlawanan.',
      를: '가다 bukan kata kerja transitif dalam pemakaian biasa, jadi tujuan tidak memakai 를.',
      로만: '로 memang bisa menandai arah, tetapi tambahan 만 ("hanya") mengubah artinya menjadi "hanya ke arah kantor".',
    },
  },
  {
    id: 'lab-e-2',
    setId: 'e-eseo',
    difficulty: 'dasar',
    context: 'Kamu menjelaskan di mana kamu biasa belajar.',
    sentence: '저는 카페___ 공부해요.',
    translation: 'Saya belajar di kafe.',
    options: ['에서', '에', '로', '까지'],
    answer: '에서',
    explain:
      'Ada kegiatan nyata yang berlangsung di tempat itu (belajar), dan tempat kegiatan selalu ditandai 에서.',
    whyNot: {
      에: '에 dipakai untuk tujuan dan untuk keberadaan dengan 있다/없다. Untuk kegiatan seperti 공부하다, yang benar adalah 에서.',
      로: '로 menandai alat, cara, atau arah — bukan tempat berlangsungnya kegiatan.',
      까지: '까지 berarti "sampai", menandai batas akhir.',
    },
  },
  {
    id: 'lab-e-3',
    setId: 'e-eseo',
    difficulty: 'dasar',
    context: 'Temanmu menelepon dan bertanya kamu sedang di mana.',
    sentence: '지금 집___ 있어요.',
    translation: 'Sekarang saya ada di rumah.',
    options: ['에', '에서', '로', '부터'],
    answer: '에',
    explain:
      '있다 dan 없다 menyatakan keberadaan, bukan kegiatan. Tempat keberadaan ditandai 에, bukan 에서.',
    whyNot: {
      에서: 'Ini kesalahan yang paling sering terjadi. 집에서 있어요 tidak wajar karena tidak ada kegiatan yang berlangsung — hanya keberadaan.',
      로: '로 menandai arah atau cara.',
      부터: '부터 menandai titik awal waktu.',
    },
  },
  {
    id: 'lab-e-4',
    setId: 'e-eseo',
    difficulty: 'menengah',
    context: 'Kamu menjelaskan asal negaramu kepada orang Korea.',
    sentence: '저는 인도네시아___ 왔어요.',
    translation: 'Saya datang dari Indonesia.',
    options: ['에서', '에', '까지', '로'],
    answer: '에서',
    explain:
      '에서 juga menandai titik asal. Pola 〜에서 왔어요 adalah cara baku menyebut dari mana kamu berasal.',
    whyNot: {
      에: '인도네시아에 왔어요 justru berarti "saya datang KE Indonesia" — arahnya terbalik.',
      까지: '까지 menandai titik akhir, bukan titik asal.',
      로: '로 menandai arah tujuan atau cara, bukan asal.',
    },
  },
  {
    id: 'lab-e-5',
    setId: 'e-eseo',
    difficulty: 'menengah',
    context: 'Kamu membuat janji bertemu pada jam tertentu.',
    sentence: '내일 두 시___ 만나요.',
    translation: 'Besok kita bertemu jam dua.',
    options: ['에', '에서', '부터', '까지'],
    answer: '에',
    explain:
      'Waktu yang menunjuk satu titik (jam, hari, bulan) ditandai 에. Perkecualiannya: 오늘, 어제, 내일, 지금 tidak memakai 에.',
    whyNot: {
      에서: '에서 tidak pernah dipakai untuk waktu — hanya untuk tempat kegiatan dan titik asal.',
      부터: '부터 berarti "mulai dari", cocok kalau kamu menyebut rentang: 두 시부터 세 시까지.',
      까지: '까지 berarti "sampai", juga menandai rentang, bukan satu titik pertemuan.',
    },
  },
  {
    id: 'lab-e-6',
    setId: 'e-eseo',
    difficulty: 'ulangan',
    context: 'Kamu bercerita tentang akhir pekan: kamu bertemu teman di sebuah kafe.',
    sentence: '주말에 카페___ 친구를 만났어요.',
    translation: 'Akhir pekan lalu saya bertemu teman di kafe.',
    options: ['에서', '에', '한테', '까지'],
    answer: '에서',
    explain:
      '만나다 adalah kegiatan yang berlangsung di suatu tempat, jadi tempatnya memakai 에서. Perhatikan juga 주말에 yang memakai 에 karena menandai waktu.',
    whyNot: {
      에: '에 akan benar untuk tujuan (카페에 갔어요) atau keberadaan (카페에 있어요), tetapi bukan untuk tempat berlangsungnya pertemuan.',
      한테: '한테 menandai orang sebagai penerima, bukan tempat.',
      까지: '까지 menandai batas akhir.',
    },
  },

  /* ---------------- 도 & 만 ---------------- */
  {
    id: 'lab-do-1',
    setId: 'do-man',
    difficulty: 'dasar',
    context: 'Temanmu baru saja berkata 저는 커피를 마셔요. Kamu minum hal yang sama.',
    sentence: '저___ 커피를 마셔요.',
    translation: 'Saya juga minum kopi.',
    options: ['도', '는', '만', '가'],
    answer: '도',
    explain:
      '도 berarti "juga" dan menggantikan 는 di posisi itu — 저는도 tidak ada. Karena yang "juga" adalah orangnya, 도 menempel pada 저.',
    whyNot: {
      는: '는 hanya menjadikannya topik tanpa makna "juga", sehingga hubungan dengan ucapan temanmu hilang.',
      만: '만 berarti "hanya" — "cuma saya yang minum kopi", arti yang berbeda.',
      가: '가 menyorot pelakunya sebagai informasi baru, bukan menyatakan kesamaan.',
    },
  },
  {
    id: 'lab-do-2',
    setId: 'do-man',
    difficulty: 'menengah',
    context: 'Kamu sedang diet dan tidak memesan apa pun selain air putih.',
    sentence: '저는 물___ 마셔요.',
    translation: 'Saya hanya minum air putih.',
    options: ['만', '도', '을', '에'],
    answer: '만',
    explain:
      '만 berarti "hanya" dan menggantikan partikel objek 을 — 물을만 tidak ada. Jadi cukup 물만 마셔요.',
    whyNot: {
      도: '도 berarti "juga", yang justru menyiratkan kamu minum hal lain juga.',
      을: '물을 마셔요 benar secara tata bahasa, tetapi kehilangan makna "hanya" yang diminta kalimat Indonesianya.',
      에: '에 menandai waktu atau tempat, bukan objek.',
    },
  },
  {
    id: 'lab-do-3',
    setId: 'do-man',
    difficulty: 'menengah',
    context: 'Kamu belajar di kantor, dan ternyata di rumah pun kamu masih belajar.',
    sentence: '저는 집___ 한국어를 공부해요.',
    translation: 'Saya belajar bahasa Korea di rumah juga.',
    options: ['에서도', '도', '에만', '에서만'],
    answer: '에서도',
    explain:
      'Tempat kegiatan tetap butuh 에서, lalu 도 ditambahkan di belakangnya: 에서도. Berbeda dari 는/가/를, partikel tempat TIDAK dilepas saat bertemu 도.',
    whyNot: {
      도: '집도 한국어를 공부해요 akan berarti "rumah pun belajar bahasa Korea" — rumahnya yang jadi pelaku.',
      에만: 'Artinya "hanya di", dan 에 juga salah karena ada kegiatan yang berlangsung.',
      에서만: 'Bentuknya benar secara tata bahasa, tetapi artinya "hanya di rumah" — bukan "di rumah juga".',
    },
  },
  {
    id: 'lab-do-4',
    setId: 'do-man',
    difficulty: 'ulangan',
    context: 'Kamu bekerja setiap hari kecuali akhir pekan — hanya di akhir pekan kamu istirahat.',
    sentence: '주말___ 쉬어요.',
    translation: 'Saya hanya istirahat di akhir pekan.',
    options: ['에만', '만', '에도', '부터'],
    answer: '에만',
    explain:
      '주말 adalah keterangan waktu, jadi 에 tetap dipakai, lalu 만 ditambahkan: 주말에만. Polanya sama seperti 에서도.',
    whyNot: {
      만: '주말만 쉬어요 terdengar seperti "akhir pekan saja yang beristirahat" — akhir pekannya yang jadi pelaku.',
      에도: 'Artinya "di akhir pekan juga", bukan "hanya".',
      부터: '부터 berarti "mulai dari", menandai titik awal rentang waktu.',
    },
  },

  /* ---------------- 하고 · 와/과 · (이)랑 ---------------- */
  {
    id: 'lab-con-1',
    setId: 'connect',
    difficulty: 'dasar',
    context:
      'Kamu menulis daftar belanja dalam bahasa tulis yang agak formal. Pilih bentuk yang ejaannya tepat.',
    sentence: '빵___ 우유를 샀어요.',
    translation: 'Saya membeli roti dan susu.',
    options: ['과', '와'],
    answer: '과',
    explain:
      '빵 berakhir dengan konsonan ㅇ (받침), jadi bentuknya 과. Setelah vokal barulah dipakai 와, misalnya 우유와. Dalam percakapan, 빵하고 dan 빵이랑 juga sepenuhnya benar.',
    whyNot: {
      와: '와 hanya dipakai setelah kata yang berakhir vokal. 빵 punya 받침, jadi pasangannya 과.',
    },
  },
  {
    id: 'lab-con-2',
    setId: 'connect',
    difficulty: 'dasar',
    context: 'Pilih bentuk yang ejaannya tepat untuk kata yang berakhir vokal.',
    sentence: '친구___ 같이 갔어요.',
    translation: 'Saya pergi bersama teman.',
    options: ['와', '과'],
    answer: '와',
    explain:
      '친구 berakhir dengan vokal ㅜ, jadi bentuknya 와. Perhatikan bahwa 와/과 juga bisa berarti "dengan", bukan hanya "dan". Versi percakapannya: 친구하고 / 친구랑.',
    whyNot: {
      과: '과 hanya dipakai setelah konsonan penutup, misalnya 선생님과.',
    },
  },
  {
    id: 'lab-con-3',
    setId: 'connect',
    difficulty: 'menengah',
    context:
      'Kamu mengobrol santai dengan teman dekat. Pilih bentuk paling santai yang ejaannya benar untuk kata berakhiran konsonan.',
    sentence: '동생___ 게임을 해요.',
    translation: 'Saya main game bersama adik.',
    options: ['이랑', '랑'],
    answer: '이랑',
    explain:
      '동생 berakhir dengan konsonan ㅇ, jadi bentuknya 이랑. Setelah vokal cukup 랑, misalnya 친구랑. (이)랑 adalah bentuk paling santai di antara ketiganya.',
    whyNot: {
      랑: '랑 dipakai setelah vokal. Karena 동생 punya 받침, bentuknya menjadi 이랑.',
    },
  },

  /* ---------------- 의 ---------------- */
  {
    id: 'lab-ui-1',
    setId: 'ui',
    difficulty: 'dasar',
    context: 'Kamu menunjuk tas milikmu sendiri dengan cara yang paling lazim.',
    sentence: '이건 ___ 가방이에요.',
    translation: 'Ini tas saya.',
    options: ['제', '저의', '저는', '저를'],
    answer: '제',
    explain:
      '저 + 의 menyusut menjadi 제, dan bentuk pendek inilah yang hampir selalu dipakai. 저의 secara tata bahasa benar, tetapi terdengar kaku.',
    whyNot: {
      저의: 'Tidak salah, hanya saja jarang dipakai kecuali kamu ingin menekankan "milik SAYA, bukan orang lain".',
      저는: '는 menandai topik, bukan kepemilikan. 저는 가방이에요 berarti "saya adalah tas".',
      저를: '를 menandai objek tindakan, bukan pemilik.',
    },
  },
  {
    id: 'lab-ui-2',
    setId: 'ui',
    difficulty: 'menengah',
    context: 'Kamu menjelaskan bahwa buku itu milik temanmu.',
    sentence: '그건 친구___ 책이에요.',
    translation: 'Itu buku teman saya.',
    options: ['의', '가', '한테', '에'],
    answer: '의',
    explain:
      '의 menyambungkan dua kata benda dalam hubungan kepemilikan. Dalam percakapan sehari-hari 의 sering dilepas: 친구 책이에요 juga wajar.',
    whyNot: {
      가: '가 menandai subjek kalimat, bukan pemilik sebuah benda.',
      한테: '한테 menandai orang sebagai penerima sesuatu, bukan pemilik.',
      에: '에 menandai tempat atau waktu.',
    },
  },

  /* ---------------- 에게 · 한테 · 께 ---------------- */
  {
    id: 'lab-ege-1',
    setId: 'ege-hante',
    difficulty: 'dasar',
    context: 'Kamu bercerita kepada teman bahwa kamu memberi hadiah kepada temanmu yang lain.',
    sentence: '친구___ 선물을 줬어요.',
    translation: 'Saya memberi hadiah kepada teman.',
    options: ['한테', '에', '에서', '으로'],
    answer: '한테',
    explain:
      'Penerima yang berupa orang ditandai 한테 (percakapan) atau 에게 (tulisan). Untuk benda atau tempat barulah dipakai 에.',
    whyNot: {
      에: '에 dipakai untuk benda dan tempat, misalnya 회사에 전화했어요. Untuk orang, bentuknya 한테/에게.',
      에서: '에서 menandai tempat kegiatan atau titik asal.',
      으로: '으로 menandai alat, cara, atau arah.',
    },
  },
  {
    id: 'lab-ege-2',
    setId: 'ege-hante',
    difficulty: 'menengah',
    context: 'Kamu menerima sesuatu — perhatikan arah pemberiannya.',
    sentence: '어제 친구___ 편지를 받았어요.',
    translation: 'Kemarin saya menerima surat dari teman.',
    options: ['한테서', '한테', '께', '에'],
    answer: '한테서',
    explain:
      'Tambahan 서 membalik arah: 한테 = "kepada", 한테서 = "dari". Karena kata kerjanya 받다 ("menerima"), teman adalah sumbernya.',
    whyNot: {
      한테: 'Tanpa 서 artinya "kepada teman", padahal kamu yang menerima. (Catatan: dalam percakapan sehari-hari orang Korea kadang tetap memakai 한테 di sini — tetapi 한테서 adalah bentuk yang jelas dan aman.)',
      께: '께 adalah bentuk hormat dari 한테 dan tetap berarti "kepada", bukan "dari".',
      에: '에 untuk benda dan tempat, bukan orang.',
    },
  },
  {
    id: 'lab-ege-3',
    setId: 'ege-hante',
    difficulty: 'ulangan',
    context: 'Kamu menyerahkan sesuatu kepada gurumu — gunakan bentuk hormat.',
    sentence: '선생님___ 질문을 드렸어요.',
    translation: 'Saya mengajukan pertanyaan kepada guru.',
    options: ['께', '한테', '에게서', '이'],
    answer: '께',
    explain:
      '께 adalah bentuk hormat dari 한테/에게, dipakai untuk orang yang lebih tua atau berkedudukan lebih tinggi. Kata kerjanya pun ikut naik: 주다 → 드리다.',
    whyNot: {
      한테: 'Secara tata bahasa bisa dipahami, tetapi terlalu santai untuk guru — apalagi berpasangan dengan 드렸어요 yang sudah bentuk hormat.',
      에게서: 'Artinya "dari", padahal kamu yang memberikan pertanyaan.',
      이: '이 menandai subjek. Di sini guru adalah penerima, bukan pelaku.',
    },
  },
  {
    id: 'lab-ege-4',
    setId: 'ege-hante',
    difficulty: 'ulangan',
    context: 'Kamu menceritakan bahwa nenekmu datang berkunjung — gunakan bentuk hormat untuk subjeknya.',
    sentence: '할머니___ 오셨어요.',
    translation: 'Nenek datang.',
    options: ['께서', '께', '한테', '에서'],
    answer: '께서',
    explain:
      '께서 adalah bentuk hormat dari 이/가, yaitu penanda SUBJEK. Karena nenek adalah pelaku yang datang, partikelnya 께서, dan kata kerjanya memakai sisipan hormat 〜시〜: 오다 → 오셨어요.',
    whyNot: {
      께: '께 adalah bentuk hormat dari 한테 ("kepada") — penerima, bukan pelaku.',
      한테: '한테 juga menandai penerima, dan terlalu santai untuk nenek.',
      에서: '에서 menandai tempat, bukan orang.',
    },
  },

  /* ---------------- (으)로 ---------------- */
  {
    id: 'lab-ro-1',
    setId: 'ro',
    difficulty: 'dasar',
    context: 'Temanmu bertanya kamu pergi ke kantor naik apa.',
    sentence: '지하철___ 가요.',
    translation: 'Saya pergi naik kereta bawah tanah.',
    options: ['로', '으로', '에', '에서'],
    answer: '로',
    explain:
      '(으)로 menandai alat atau cara. 지하철 berakhir dengan ㄹ, dan setelah ㄹ bentuknya tetap 로 — bukan 으로. Ini satu-satunya pengecualian bentuk yang perlu diingat.',
    whyNot: {
      으로: '으로 dipakai setelah konsonan penutup SELAIN ㄹ — misalnya 손으로 ("dengan tangan") atau 젓가락으로 ("dengan sumpit"). Karena 지하철 berakhir ㄹ, bentuknya 로.',
      에: '에 menandai tujuan, bukan alat transportasi.',
      에서: '에서 menandai tempat kegiatan atau titik asal.',
    },
  },
  {
    id: 'lab-ro-2',
    setId: 'ro',
    difficulty: 'menengah',
    context: 'Kamu menjelaskan bahwa kamu menulis catatan memakai bahasa Korea.',
    sentence: '한국어___ 메모를 써요.',
    translation: 'Saya menulis memo dalam bahasa Korea.',
    options: ['로', '를', '에', '하고'],
    answer: '로',
    explain:
      '(으)로 juga menandai "memakai/dalam" untuk bahasa dan alat tulis. 한국어 berakhir vokal, jadi bentuknya 로.',
    whyNot: {
      를: '한국어를 써요 berarti "saya memakai bahasa Korea" — bukan salah, tapi artinya bergeser dan 메모 kehilangan partikelnya.',
      에: '에 menandai tempat atau waktu.',
      하고: '하고 menyambungkan dua kata benda setara.',
    },
  },
  {
    id: 'lab-ro-3',
    setId: 'ro',
    difficulty: 'ulangan',
    context: 'Kamu memberi petunjuk arah kepada seseorang di jalan.',
    sentence: '저기에서 왼쪽___ 가세요.',
    translation: 'Dari sana, silakan belok ke kiri.',
    options: ['으로', '로', '에', '까지'],
    answer: '으로',
    explain:
      '왼쪽 berakhir dengan konsonan ㄱ, jadi bentuknya 으로. Untuk arah umum (kiri, kanan, atas) dipakai (으)로, bukan 에 yang menunjuk tujuan akhir.',
    whyNot: {
      로: '로 dipakai setelah vokal atau setelah ㄹ. 왼쪽 berakhir ㄱ, jadi 으로.',
      에: '에 menunjuk tujuan akhir yang konkret, bukan arah belokan.',
      까지: '까지 berarti "sampai", menandai batas akhir.',
    },
  },

  /* ---------------- 부터 · 까지 ---------------- */
  {
    id: 'lab-bk-1',
    setId: 'buteo-kkaji',
    difficulty: 'dasar',
    context: 'Kamu menjelaskan jam kerjamu.',
    sentence: '아홉 시___ 여섯 시까지 일해요.',
    translation: 'Saya bekerja dari jam sembilan sampai jam enam.',
    options: ['부터', '에서', '까지', '에'],
    answer: '부터',
    explain:
      'Untuk rentang WAKTU, titik awalnya ditandai 부터 dan titik akhirnya 까지.',
    whyNot: {
      에서: '에서 dipakai sebagai titik awal untuk TEMPAT: 집에서 회사까지.',
      까지: '까지 sudah muncul di bagian kedua kalimat sebagai titik akhir.',
      에: '에 menandai satu titik waktu, bukan awal sebuah rentang.',
    },
  },
  {
    id: 'lab-bk-2',
    setId: 'buteo-kkaji',
    difficulty: 'menengah',
    context: 'Kamu menjelaskan berapa lama perjalanan dari rumah ke kantor.',
    sentence: '집___ 회사까지 한 시간 걸려요.',
    translation: 'Dari rumah ke kantor butuh satu jam.',
    options: ['에서', '부터', '에', '로'],
    answer: '에서',
    explain:
      'Untuk jarak TEMPAT, titik awalnya 에서 — bukan 부터. Titik akhirnya tetap 까지. Inilah pasangan yang sering tertukar dengan 부터…까지.',
    whyNot: {
      부터: '부터 dipakai untuk rentang waktu. Untuk tempat, penutur Korea memakai 에서.',
      에: '에 menandai tujuan atau keberadaan, bukan titik awal sebuah jarak.',
      로: '로 menandai arah atau alat.',
    },
  },
  {
    id: 'lab-bk-3',
    setId: 'buteo-kkaji',
    difficulty: 'ulangan',
    context: 'Atasanmu memberi tenggat penyerahan laporan.',
    sentence: '금요일___ 보내 주세요.',
    translation: 'Tolong kirimkan paling lambat hari Jumat.',
    options: ['까지', '부터', '에서', '만'],
    answer: '까지',
    explain:
      '까지 juga menandai batas akhir atau tenggat waktu, bukan hanya ujung sebuah rentang.',
    whyNot: {
      부터: '금요일부터 berarti "mulai hari Jumat" — artinya terbalik dari tenggat.',
      에서: '에서 tidak dipakai untuk waktu.',
      만: '금요일만 berarti "hanya hari Jumat", bukan "paling lambat Jumat".',
    },
  },

  /* ---------------- 보다 ---------------- */
  {
    id: 'lab-boda-1',
    setId: 'boda',
    difficulty: 'dasar',
    context: 'Kamu lebih menyukai teh. Yang kalah dalam perbandingan adalah kopi.',
    sentence: '저는 커피___ 차를 좋아해요.',
    translation: 'Saya lebih suka teh daripada kopi.',
    options: ['보다', '하고', '도', '까지'],
    answer: '보다',
    explain:
      '보다 menempel pada hal yang DIKALAHKAN dalam perbandingan. Karena teh yang lebih disukai, maka 커피 yang mendapat 보다.',
    whyNot: {
      하고: '커피하고 차를 좋아해요 berarti "saya suka kopi dan teh" — tidak ada perbandingan.',
      도: '도 berarti "juga", bukan "daripada".',
      까지: '까지 berarti "sampai".',
    },
  },
  {
    id: 'lab-boda-2',
    setId: 'boda',
    difficulty: 'menengah',
    context: 'Kemarin sudah panas, dan hari ini terasa lebih panas lagi.',
    sentence: '오늘이 어제___ 더 더워요.',
    translation: 'Hari ini lebih panas daripada kemarin.',
    options: ['보다', '부터', '하고', '에서'],
    answer: '보다',
    explain:
      '어제 adalah pembandingnya, jadi ia yang ditempeli 보다. Kata 더 ("lebih") memperjelas, tetapi sebenarnya boleh dilepas.',
    whyNot: {
      부터: '어제부터 berarti "sejak kemarin", menandai titik awal waktu.',
      하고: '하고 menyambungkan dua kata benda setara.',
      에서: '에서 menandai tempat.',
    },
  },
  {
    id: 'lab-boda-3',
    setId: 'boda',
    difficulty: 'ulangan',
    context:
      'Kamu ingin mengatakan bahwa bahasa Korea lebih sulit daripada bahasa Inggris. Pilih kalimat yang benar.',
    sentence: '영어___ 한국어가 더 어려워요.',
    translation: 'Bahasa Korea lebih sulit daripada bahasa Inggris.',
    options: ['보다', '가', '를', '도'],
    answer: '보다',
    explain:
      'Yang ditempeli 보다 adalah pembanding yang "kalah" — di sini bahasa Inggris. Perhatikan bahwa pihak yang menang (한국어) memakai 가.',
    whyNot: {
      가: 'Kalimat sudah punya subjek 한국어가. Dua subjek berturut-turut membuat perbandingannya hilang.',
      를: '어렵다 adalah kata sifat, jadi tidak punya objek.',
      도: '도 berarti "juga" — "bahasa Inggris juga sulit", arti yang berbeda.',
    },
  },
]

export const labSetById = Object.fromEntries(labSets.map((s) => [s.id, s]))

export function questionsFor(
  setId: string | 'all',
  difficulty: 'all' | 'dasar' | 'menengah' | 'ulangan',
): LabQuestion[] {
  return labQuestions.filter(
    (q) =>
      (setId === 'all' || q.setId === setId) &&
      (difficulty === 'all' || q.difficulty === difficulty),
  )
}
