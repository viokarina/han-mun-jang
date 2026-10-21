import type { StudioTask } from '../types/curriculum'

/**
 * Tugas Studio Menulis.
 *
 * Dua jenis tugas:
 *  1. `answers` terisi  → jawaban diperiksa otomatis terhadap daftar yang diterima.
 *  2. `answers` kosong  → tugas terbuka. Aplikasi TIDAK menilai benar/salah;
 *     kamu membandingkan tulisanmu dengan jawaban model + daftar periksa.
 */

export const studioTasks: StudioTask[] = [
  /* ---------------- Terjemahan Indonesia → Korea ---------------- */
  {
    id: 'st-1',
    kind: 'terjemahan-id-ko',
    title: 'Pagi di kantor',
    level: 'dasar',
    prompt: 'Terjemahkan ke bahasa Korea dengan bentuk 해요체.',
    source: 'Hari ini saya pergi ke kantor.',
    helpers: [
      { ko: '오늘', id: 'hari ini' },
      { ko: '회사', id: 'kantor' },
      { ko: '가다', id: 'pergi' },
    ],
    answers: ['오늘은 회사에 가요', '오늘 회사에 가요', '저는 오늘 회사에 가요'],
    model: '오늘은 회사에 가요.',
    modelTranslation: 'Hari ini saya pergi ke kantor.',
    notes: [
      '회사에 memakai 에 karena kantor adalah tujuan pergi.',
      '오늘 adalah kata waktu yang TIDAK memakai 에 — sama seperti 어제 dan 내일.',
      '오늘은 (dengan 은) memberi kesan "kalau hari ini…", seolah membandingkan dengan hari lain. Tanpa 은 juga benar dan lebih netral.',
    ],
    alternatives: [
      { form: '오늘 회사에 가요.', nuance: 'Netral, tanpa penekanan pada "hari ini".' },
      { form: '저는 오늘 회사에 가요.', nuance: 'Menyebut pelakunya secara eksplisit — berguna kalau belum jelas siapa yang dibicarakan.' },
    ],
  },
  {
    id: 'st-2',
    kind: 'terjemahan-id-ko',
    title: 'Belajar di kafe',
    level: 'dasar',
    prompt: 'Terjemahkan ke bahasa Korea. Perhatikan partikel tempatnya.',
    source: 'Saya belajar bahasa Korea di kafe.',
    helpers: [
      { ko: '카페', id: 'kafe' },
      { ko: '한국어', id: 'bahasa Korea' },
      { ko: '공부하다', id: 'belajar' },
    ],
    answers: [
      '저는 카페에서 한국어를 공부해요',
      '카페에서 한국어를 공부해요',
      '저는 카페에서 한국어 공부해요',
    ],
    model: '저는 카페에서 한국어를 공부해요.',
    modelTranslation: 'Saya belajar bahasa Korea di kafe.',
    notes: [
      '카페에서 memakai 에서 karena ada kegiatan yang berlangsung di sana. Kalau memakai 에, artinya berubah menjadi "ke kafe".',
      'Urutannya: topik → tempat → objek → kata kerja. Keterangan tempat berada SEBELUM objek, kebalikan dari bahasa Indonesia.',
    ],
    alternatives: [
      { form: '카페에서 한국어를 공부해요.', nuance: 'Tanpa 저는 — lebih alami kalau sudah jelas kamu yang dibicarakan.' },
    ],
  },
  {
    id: 'st-3',
    kind: 'terjemahan-id-ko',
    title: 'Kemarin dan teman',
    level: 'menengah',
    prompt: 'Terjemahkan ke bahasa Korea dengan bentuk lampau.',
    source: 'Kemarin saya menonton film bersama teman.',
    helpers: [
      { ko: '어제', id: 'kemarin' },
      { ko: '친구하고', id: 'bersama teman' },
      { ko: '영화', id: 'film' },
      { ko: '보다 → 봤어요', id: 'menonton (lampau)' },
    ],
    answers: [
      '어제 친구하고 영화를 봤어요',
      '어제 친구와 영화를 봤어요',
      '어제 친구랑 영화를 봤어요',
      '저는 어제 친구하고 영화를 봤어요',
    ],
    model: '어제 친구하고 영화를 봤어요.',
    modelTranslation: 'Kemarin saya menonton film bersama teman.',
    notes: [
      '하고 di sini berarti "bersama", bukan "dan". 와/과 dan (이)랑 juga diterima — bedanya hanya tingkat keformalan.',
      '어제 tidak memakai 에.',
      '보다 → 봤어요: batang katanya 보- bertemu 았어요 lalu menyusut menjadi 봤어요.',
    ],
    alternatives: [
      { form: '어제 친구와 영화를 봤어요.', nuance: 'Sedikit lebih rapi, lazim dalam tulisan.' },
      { form: '어제 친구랑 영화를 봤어요.', nuance: 'Paling santai, untuk obrolan dengan teman dekat.' },
    ],
  },
  {
    id: 'st-4',
    kind: 'terjemahan-id-ko',
    title: 'Tidak punya waktu',
    level: 'menengah',
    prompt: 'Terjemahkan ke bahasa Korea. Hati-hati dengan partikelnya.',
    source: 'Hari ini saya tidak punya waktu.',
    helpers: [
      { ko: '시간', id: 'waktu' },
      { ko: '없다 → 없어요', id: 'tidak ada' },
    ],
    answers: ['오늘은 시간이 없어요', '오늘 시간이 없어요', '저는 오늘 시간이 없어요'],
    model: '오늘은 시간이 없어요.',
    modelTranslation: 'Hari ini saya tidak punya waktu.',
    notes: [
      '없다 selalu memakai subjek dengan 이/가 — bukan objek dengan 을/를. Logikanya bukan "saya tidak memiliki waktu", melainkan "waktu itu tidak ada".',
      '시간을 없어요 adalah kesalahan yang sangat umum bagi penutur bahasa Indonesia.',
    ],
  },

  /* ---------------- Terjemahan Korea → Indonesia ---------------- */
  {
    id: 'st-5',
    kind: 'terjemahan-ko-id',
    title: 'Membaca kalimat berpartikel ganda',
    level: 'menengah',
    prompt: 'Terjemahkan ke bahasa Indonesia yang terdengar alami.',
    source: '주말에는 집에서 쉬어요.',
    answers: [
      'Kalau akhir pekan, saya istirahat di rumah.',
      'kalau akhir pekan saya istirahat di rumah',
      'akhir pekan saya istirahat di rumah',
      'di akhir pekan saya beristirahat di rumah',
      'akhir pekan saya beristirahat di rumah',
      'kalau akhir pekan, saya beristirahat di rumah',
    ],
    model: 'Kalau akhir pekan, saya istirahat di rumah.',
    notes: [
      '주말에는 = 주말 + 에 (waktu) + 는 (topik/kontras). Gabungan ini memberi kesan "kalau akhir pekan sih…", dibandingkan hari kerja.',
      '집에서 memakai 에서 karena beristirahat adalah kegiatan yang berlangsung di rumah.',
      'Subjeknya dihilangkan — dari konteks biasanya berarti "saya".',
    ],
    alternatives: [
      { form: 'Pada akhir pekan saya beristirahat di rumah.', nuance: 'Lebih formal, kehilangan nuansa kontras dari 는.' },
    ],
  },
  {
    id: 'st-6',
    kind: 'terjemahan-ko-id',
    title: 'Perbandingan',
    level: 'menengah',
    prompt: 'Terjemahkan ke bahasa Indonesia. Perhatikan arah perbandingannya.',
    source: '저는 커피보다 차를 더 좋아해요.',
    answers: [
      'saya lebih suka teh daripada kopi',
      'saya lebih menyukai teh daripada kopi',
      'saya lebih suka teh dibanding kopi',
    ],
    model: 'Saya lebih suka teh daripada kopi.',
    notes: [
      '보다 menempel pada hal yang KALAH dalam perbandingan — di sini 커피.',
      'Kalau dibalik menjadi 차보다 커피를 더 좋아해요, artinya langsung terbalik.',
      '좋아하다 adalah kata kerja, jadi yang disukai memakai 를.',
    ],
  },

  /* ---------------- Perluasan kalimat ---------------- */
  {
    id: 'st-7',
    kind: 'perluasan',
    title: 'Dari tiga kata menjadi satu kalimat penuh',
    level: 'dasar',
    prompt:
      'Perluas kalimat dasar ini dengan menambahkan WAKTU dan TEMPAT. Tulis satu kalimat utuh.',
    source: '밥을 먹어요.',
    context: 'Kalimat awal berarti "Saya makan nasi."',
    guide: [
      'Tambahkan keterangan waktu di depan (misalnya 저녁에, 아침에, 일곱 시에).',
      'Tambahkan keterangan tempat dengan 에서 (misalnya 집에서, 식당에서).',
      'Urutannya: waktu → tempat → objek → kata kerja.',
    ],
    helpers: [
      { ko: '저녁에', id: 'di malam hari' },
      { ko: '집에서', id: 'di rumah' },
      { ko: '식당에서', id: 'di rumah makan' },
    ],
    model: '저는 저녁에 집에서 밥을 먹어요.',
    modelTranslation: 'Saya makan nasi di rumah pada malam hari.',
    notes: [
      'Urutan netral Korea: topik → waktu → tempat → objek → kata kerja.',
      'Waktu dan tempat boleh bertukar posisi tanpa mengubah arti, tetapi keduanya tetap berada di depan objek.',
      'Objek dan kata kerja tidak boleh dipisahkan oleh keterangan baru.',
    ],
    checklist: [
      'Kata kerjanya berada di akhir kalimat.',
      'Keterangan waktu memakai 에 (kecuali 오늘/어제/내일).',
      'Keterangan tempat memakai 에서 karena ada kegiatan yang berlangsung.',
      'Objeknya masih memakai 을/를.',
    ],
  },
  {
    id: 'st-8',
    kind: 'perluasan',
    title: 'Menambah alasan',
    level: 'menengah',
    prompt:
      'Perluas kalimat ini dengan menambahkan ALASAN memakai -아/어서 atau -(으)니까.',
    source: '집에 있어요.',
    context: 'Kalimat awal berarti "Saya di rumah."',
    guide: [
      'Pikirkan satu alasan sederhana: hujan, sakit, sibuk, lelah.',
      'Sambungkan dengan -아/어서 (alasan netral) atau -(으)니까 (alasan yang ditekankan).',
      'Klausa alasan selalu berada DI DEPAN klausa akibat.',
    ],
    helpers: [
      { ko: '비가 오다 → 비가 와서', id: 'karena hujan' },
      { ko: '아프다 → 아파서', id: 'karena sakit' },
      { ko: '바쁘다 → 바빠서', id: 'karena sibuk' },
    ],
    model: '비가 와서 집에 있어요.',
    modelTranslation: 'Karena hujan, saya di rumah.',
    notes: [
      '-아/어서 tidak boleh membawa penanda lampau: 비가 왔어서 ✗ → 비가 와서 ✓. Waktunya ditunjukkan oleh klausa terakhir.',
      '-(으)니까 boleh membawa penanda lampau: 비가 왔으니까 집에 있었어요.',
      'Untuk ajakan dan perintah, pakai -(으)니까, bukan -아/어서.',
    ],
    checklist: [
      'Klausa alasan berada di depan.',
      'Tidak ada 았/었 di depan -아/어서.',
      'Kalimatnya tetap berakhir dengan kata kerja.',
    ],
  },

  /* ---------------- Menulis terbimbing ---------------- */
  {
    id: 'st-9',
    kind: 'tulisan-terbimbing',
    title: 'Memperkenalkan diri',
    level: 'dasar',
    prompt: 'Tulis perkenalan dirimu dalam 4–5 kalimat bahasa Korea.',
    guide: [
      'Sapaan: 안녕하세요.',
      'Nama: 저는 ___예요/이에요.',
      'Asal: ___에서 왔어요.',
      'Pekerjaan atau status: 회사원이에요 / 학생이에요.',
      'Satu kalimat tentang hal yang kamu suka: ___을/를 좋아해요.',
    ],
    helpers: [
      { ko: '인도네시아에서 왔어요', id: 'saya datang dari Indonesia' },
      { ko: '회사원', id: 'karyawan' },
      { ko: '만나서 반갑습니다', id: 'senang bertemu dengan Anda' },
    ],
    model:
      '안녕하세요. 저는 비오예요. 인도네시아에서 왔어요. 회사원이에요. 한국 음악을 좋아해요. 만나서 반갑습니다.',
    modelTranslation:
      'Halo. Saya Vio. Saya datang dari Indonesia. Saya seorang karyawan. Saya suka musik Korea. Senang bertemu dengan Anda.',
    notes: [
      '예요 dipakai setelah vokal, 이에요 setelah konsonan: 비오예요, 회사원이에요.',
      '〜에서 왔어요 adalah pola baku untuk menyebut asal.',
      '만나서 반갑습니다 memakai 〜ㅂ니다체 yang lebih formal — wajar untuk perkenalan resmi.',
    ],
    checklist: [
      'Setiap kalimat diakhiri kata kerja atau 이에요/예요.',
      'Pemilihan 이에요 vs 예요 sudah sesuai ada/tidaknya 받침.',
      'Asal negara memakai 에서, bukan 에.',
      'Kalimat tentang kesukaan memakai 을/를 (karena 좋아하다 adalah kata kerja).',
    ],
  },
  {
    id: 'st-10',
    kind: 'tulisan-terbimbing',
    title: 'Rutinitas harian',
    level: 'menengah',
    prompt: 'Tulis 4–5 kalimat tentang kegiatan harianmu dari pagi sampai malam.',
    guide: [
      'Mulai dengan waktu: 아침에, 오전에, 점심에, 저녁에.',
      'Pakai 에서 untuk tempat kegiatan.',
      'Sambungkan dua kegiatan dengan -고: 밥을 먹고 회사에 가요.',
      'Tutup dengan satu kalimat tentang malam hari.',
    ],
    helpers: [
      { ko: '일어나다 → 일어나요', id: 'bangun tidur' },
      { ko: '출근하다 → 출근해요', id: 'berangkat kerja' },
      { ko: '퇴근하다 → 퇴근해요', id: 'pulang kerja' },
      { ko: '쉬다 → 쉬어요', id: 'beristirahat' },
    ],
    model:
      '저는 아침 일곱 시에 일어나요. 집에서 커피를 마시고 회사에 가요. 회사에서 아홉 시부터 여섯 시까지 일해요. 저녁에는 집에서 쉬어요.',
    modelTranslation:
      'Saya bangun jam tujuh pagi. Saya minum kopi di rumah lalu pergi ke kantor. Di kantor saya bekerja dari jam sembilan sampai jam enam. Malamnya saya beristirahat di rumah.',
    notes: [
      '마시고 memakai -고 untuk menyambung dua kegiatan berurutan. Bentuknya cukup batang kata + 고.',
      '아홉 시부터 여섯 시까지 — rentang waktu memakai 부터…까지.',
      '저녁에는 memakai 에 (waktu) + 는 (kontras dengan jam kerja).',
    ],
    checklist: [
      'Setiap keterangan waktu memakai 에 bila perlu.',
      'Tempat kegiatan memakai 에서, tujuan memakai 에.',
      '-고 dipasang pada batang kata, bukan pada bentuk 해요.',
      'Semua kalimat berakhir dengan 해요체.',
    ],
  },

  /* ---------------- Diari ---------------- */
  {
    id: 'st-11',
    kind: 'diari',
    title: 'Diari: hari yang sibuk',
    level: 'menengah',
    prompt:
      'Tulis diari singkat (4–6 kalimat) tentang harimu kemarin. Gunakan bentuk lampau.',
    guide: [
      'Mulai dengan 오늘은 atau 어제는 dan satu kesan umum.',
      'Ceritakan 2–3 kegiatan dengan bentuk lampau 았/었어요.',
      'Tambahkan satu alasan dengan -아/어서.',
      'Tutup dengan perasaanmu: 피곤했어요 / 좋았어요 / 재미있었어요.',
    ],
    helpers: [
      { ko: '바빴어요', id: 'sibuk (lampau)' },
      { ko: '피곤했어요', id: 'lelah (lampau)' },
      { ko: '회의가 많았어요', id: 'rapatnya banyak' },
      { ko: '늦게', id: 'terlambat, larut' },
    ],
    model:
      '어제는 정말 바빴어요. 회사에서 회의가 많았어요. 점심도 못 먹었어요. 일이 많아서 늦게 퇴근했어요. 집에 와서 바로 잤어요. 오늘은 조금 쉬고 싶어요.',
    modelTranslation:
      'Kemarin benar-benar sibuk. Di kantor banyak rapat. Makan siang pun tidak sempat. Karena pekerjaannya banyak, saya pulang terlambat. Sampai di rumah saya langsung tidur. Hari ini saya ingin sedikit beristirahat.',
    notes: [
      '점심도 못 먹었어요 — 도 di sini bermakna "bahkan", memperkuat kesan sibuk. 못 menyatakan ketidakmampuan.',
      '일이 많아서 — alasan dengan -아서, tanpa penanda lampau meskipun ceritanya tentang kemarin.',
      '집에 와서 bisa berarti "setelah sampai di rumah" — -아/어서 juga dipakai untuk urutan kejadian yang berkaitan erat.',
      '쉬고 싶어요 — keinginan dengan -고 싶다.',
    ],
    checklist: [
      'Semua kegiatan kemarin memakai bentuk lampau 았/었어요.',
      'Klausa alasan tidak memakai 았/었 sebelum -아/어서.',
      'Partikel tempat sudah tepat (에서 untuk kegiatan, 에 untuk tujuan).',
      'Ada setidaknya satu kalimat tentang perasaan.',
    ],
  },
  {
    id: 'st-12',
    kind: 'diari',
    title: 'Diari: akhir pekan yang tenang',
    level: 'dasar',
    prompt: 'Tulis 4 kalimat tentang akhir pekanmu.',
    guide: [
      'Sebutkan hari: 토요일에 / 일요일에 / 주말에.',
      'Satu kegiatan di rumah, satu kegiatan di luar.',
      'Pakai bentuk lampau.',
      'Tutup dengan kesanmu.',
    ],
    helpers: [
      { ko: '청소하다 → 청소했어요', id: 'bersih-bersih' },
      { ko: '산책하다 → 산책했어요', id: 'jalan-jalan santai' },
      { ko: '조용하다 → 조용했어요', id: 'tenang' },
    ],
    model:
      '토요일에는 집에서 청소했어요. 일요일에는 친구하고 공원에서 산책했어요. 날씨가 좋아서 기분이 좋았어요. 조용한 주말이었어요.',
    modelTranslation:
      'Hari Sabtu saya bersih-bersih di rumah. Hari Minggu saya jalan-jalan di taman bersama teman. Karena cuacanya bagus, perasaan saya senang. Akhir pekan yang tenang.',
    notes: [
      '토요일에는 / 일요일에는 — 에 untuk waktu, lalu 는 untuk membandingkan dua hari.',
      '날씨가 좋아서 — alasan, subjeknya 날씨 dengan 가.',
      '조용한 주말 — kata sifat 조용하다 menjadi 조용한 saat menerangkan kata benda.',
    ],
    checklist: [
      'Keterangan hari memakai 에.',
      'Tempat kegiatan memakai 에서.',
      'Semua kata kerja dalam bentuk lampau.',
    ],
  },

  /* ---------------- Chat ---------------- */
  {
    id: 'st-13',
    kind: 'chat',
    title: 'Chat: membatalkan janji',
    level: 'menengah',
    prompt:
      'Balas pesan temanmu. Minta maaf, sebutkan alasannya, lalu tawarkan waktu lain.',
    context: '민호: 오늘 저녁에 만날까요? (Minho: Nanti malam ketemu, yuk?)',
    guide: [
      'Mulai dengan permintaan maaf: 미안해요.',
      'Sebutkan alasan dengan -아/어서.',
      'Tawarkan waktu pengganti: 내일은 어때요?',
    ],
    helpers: [
      { ko: '일이 많다', id: 'pekerjaan banyak' },
      { ko: '어때요?', id: 'bagaimana?' },
      { ko: '다음에', id: 'lain kali' },
    ],
    model: '미안해요. 오늘은 일이 많아서 시간이 없어요. 내일은 어때요?',
    modelTranslation:
      'Maaf. Hari ini pekerjaannya banyak jadi saya tidak punya waktu. Bagaimana kalau besok?',
    notes: [
      '시간이 없어요 — 없다 memakai 이/가, bukan 을/를.',
      '오늘은 dan 내일은 memakai 는 untuk membandingkan dua hari.',
      '어때요? adalah cara sopan dan ringan untuk menawarkan sesuatu.',
    ],
    checklist: [
      'Ada permintaan maaf.',
      'Alasannya memakai -아/어서 tanpa penanda lampau.',
      'Tawaran waktu lain memakai bentuk pertanyaan.',
    ],
  },
  {
    id: 'st-14',
    kind: 'chat',
    title: 'Chat: menanyakan kabar',
    level: 'dasar',
    prompt: 'Tulis 3 kalimat chat untuk menyapa teman yang lama tidak kamu hubungi.',
    context: 'Kamu mengirim pesan lebih dulu.',
    guide: [
      'Sapa: 안녕하세요 / 잘 지냈어요?',
      'Ceritakan satu hal singkat tentang dirimu.',
      'Ajukan satu pertanyaan.',
    ],
    helpers: [
      { ko: '잘 지냈어요?', id: 'apa kabar? (sudah lama tidak bertemu)' },
      { ko: '요즘', id: 'akhir-akhir ini' },
      { ko: '바쁘다 → 바빠요', id: 'sibuk' },
    ],
    model: '안녕하세요! 오랜만이에요. 저는 요즘 일이 많아서 좀 바빠요. 잘 지냈어요?',
    modelTranslation:
      'Halo! Lama tidak bertemu. Akhir-akhir ini saya agak sibuk karena pekerjaan banyak. Apa kabar?',
    notes: [
      '오랜만이에요 adalah sapaan baku untuk "lama tidak bertemu".',
      '바쁘다 adalah kata sifat 으-tidak beraturan: 바쁘 + 아요 → 바빠요.',
      '잘 지냈어요? memakai bentuk lampau karena menanyakan periode yang sudah lewat.',
    ],
    checklist: [
      'Ada sapaan pembuka.',
      'Ada satu kalimat tentang dirimu.',
      'Ada satu pertanyaan untuk lawan bicara.',
    ],
  },

  /* ---------------- Respons percakapan ---------------- */
  {
    id: 'st-15',
    kind: 'respons',
    title: 'Memesan di kafe',
    level: 'dasar',
    prompt: 'Tulis jawabanmu sebagai pelanggan.',
    context: '직원: 뭐 드릴까요? (Pelayan: Mau pesan apa?)',
    guide: [
      'Sebutkan pesanan dengan 〜 주세요 atau 〜(으)로 할게요.',
      'Tambahkan jumlah kalau perlu: 한 잔, 두 개.',
    ],
    helpers: [
      { ko: '아메리카노', id: 'americano' },
      { ko: '한 잔', id: 'satu gelas' },
      { ko: '주세요', id: 'tolong berikan' },
    ],
    answers: [
      '아메리카노 한 잔 주세요',
      '아메리카노 주세요',
      '아메리카노 한 잔 주세요.',
      '아메리카노로 할게요',
    ],
    model: '아메리카노 한 잔 주세요.',
    modelTranslation: 'Tolong satu gelas americano.',
    notes: [
      'Pola jumlah: kata benda + angka + penghitung → 아메리카노 한 잔. Perhatikan angkanya memakai bentuk asli Korea (하나 → 한).',
      '주세요 adalah permintaan sopan yang paling serbaguna.',
      '아메리카노로 할게요 ("saya pilih americano saja") juga sangat lazim — di sini 로 menandai pilihan.',
    ],
    alternatives: [
      { form: '아메리카노로 할게요.', nuance: 'Terdengar seperti memutuskan di tempat; sangat umum saat memesan.' },
      { form: '아메리카노 하나 주세요.', nuance: '하나 dipakai tanpa penghitung — sedikit lebih santai.' },
    ],
  },
  {
    id: 'st-16',
    kind: 'respons',
    title: 'Menanggapi ajakan',
    level: 'menengah',
    prompt: 'Terima ajakan ini dan usulkan tempatnya.',
    context: '수진: 이번 주말에 같이 점심 먹을까요? (Sujin: Akhir pekan ini makan siang bersama, yuk?)',
    guide: [
      'Setujui dengan 좋아요 atau 네, 좋아요.',
      'Usulkan tempat dengan 〜에서 어때요?',
      'Tambahkan alasan singkat kalau mau.',
    ],
    helpers: [
      { ko: '좋아요', id: 'boleh, bagus' },
      { ko: '맛있다', id: 'enak' },
      { ko: '식당', id: 'rumah makan' },
    ],
    model: '네, 좋아요! 회사 앞 식당에서 어때요? 거기 음식이 맛있어요.',
    modelTranslation:
      'Ya, boleh! Bagaimana kalau di rumah makan depan kantor? Makanan di sana enak.',
    notes: [
      '〜에서 어때요? adalah cara halus mengusulkan tempat — 에서 karena makan siang berlangsung di sana.',
      '음식이 맛있어요 — 맛있다 adalah kata sifat, jadi subjeknya memakai 이/가.',
      '회사 앞 = "depan kantor"; dua kata benda disambung langsung tanpa 의.',
    ],
    checklist: [
      'Ada persetujuan yang jelas.',
      'Usulan tempat memakai 에서.',
      'Kalimat alasannya memakai 이/가 untuk kata sifat.',
    ],
  },
]

export const studioById = Object.fromEntries(studioTasks.map((t) => [t.id, t]))

export const STUDIO_KINDS: { id: string; label: string; blurb: string }[] = [
  { id: 'semua', label: 'Semua', blurb: 'Seluruh tugas menulis dan menerjemahkan.' },
  { id: 'terjemahan-id-ko', label: 'Indonesia → Korea', blurb: 'Susun kalimat Korea dari kalimat Indonesia.' },
  { id: 'terjemahan-ko-id', label: 'Korea → Indonesia', blurb: 'Baca kalimat Korea dan terjemahkan dengan wajar.' },
  { id: 'perluasan', label: 'Perluasan kalimat', blurb: 'Ubah kalimat pendek menjadi kalimat yang lebih lengkap.' },
  { id: 'tulisan-terbimbing', label: 'Menulis terbimbing', blurb: 'Tulis beberapa kalimat dengan rambu-rambu.' },
  { id: 'diari', label: 'Diari', blurb: 'Catatan harian pendek dalam bahasa Korea.' },
  { id: 'chat', label: 'Chat', blurb: 'Balas pesan singkat seperti di aplikasi obrolan.' },
  { id: 'respons', label: 'Respons percakapan', blurb: 'Jawab ucapan lawan bicara dalam situasi nyata.' },
]
