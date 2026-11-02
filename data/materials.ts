export type Material = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  sections: { heading: string; body: string; points: string[] }[];
  references: (string | { label: string; url: string })[];
};

export const materials: Material[] = [
  {
    slug: "pengertian-k3",
    title: "Pengertian dan Tujuan K3",
    category: "Dasar K3",
    duration: "5 menit",
    summary: "Kenali tujuan keselamatan dan kesehatan kerja serta penerapannya di bengkel.",
    sections: [
      {
        heading: "Apa itu K3?",
        body: "Keselamatan dan Kesehatan Kerja (K3) merupakan upaya untuk melindungi pekerja dan orang lain di tempat kerja, menjaga sumber produksi, serta mendukung proses kerja yang aman dan sehat.",
        points: ["Mencegah kecelakaan dan penyakit akibat kerja.", "Melindungi pekerja, siswa, dan orang di sekitar bengkel.", "Menjaga alat, bahan, dan lingkungan kerja."],
      },
      {
        heading: "K3 dalam praktik TKR",
        body: "K3 dimulai sebelum alat dinyalakan: pahami instruksi, kenali bahaya, gunakan APD yang sesuai, dan laporkan kondisi tidak aman kepada instruktur.",
        points: ["Ikuti pengarahan guru atau instruktur.", "Jangan mengoperasikan alat tanpa izin dan pelatihan.", "Hentikan pekerjaan bila ada kondisi yang membahayakan."],
      },
    ],
    references: ["Undang-Undang Republik Indonesia Nomor 1 Tahun 1970 tentang Keselamatan Kerja.", "International Labour Organization (ILO), Safety and health at work."],
  },
  {
    slug: "dasar-hukum",
    title: "Dasar Hukum K3",
    category: "Regulasi",
    duration: "6 menit",
    summary: "Pahami kerangka aturan K3 dan pentingnya mengikuti ketentuan yang berlaku.",
    sections: [
      {
        heading: "Kerangka dasar",
        body: "Di Indonesia, Undang-Undang Nomor 1 Tahun 1970 tentang Keselamatan Kerja menjadi salah satu dasar penyelenggaraan keselamatan kerja. Peraturan Pemerintah Nomor 50 Tahun 2012 mengatur penerapan Sistem Manajemen K3 (SMK3) sesuai cakupan yang ditetapkan.",
        points: ["Aturan dapat berubah; periksa naskah resmi terbaru.", "Penerapan di sekolah juga mengikuti kebijakan satuan pendidikan.", "Guru atau petugas K3 adalah rujukan untuk aturan lokal."],
      },
      {
        heading: "Penerapan di lingkungan sekolah",
        body: "Materi umum tidak menggantikan peraturan internal bengkel. Selalu ikuti tata tertib, instruksi kerja, rambu, dan pengarahan yang berlaku di sekolah.",
        points: ["Tanyakan jika prosedur tidak jelas.", "Jangan mengutip standar yang belum diverifikasi.", "Gunakan sumber resmi pemerintah untuk memeriksa regulasi."],
      },
    ],
    references: ["UU RI Nomor 1 Tahun 1970 tentang Keselamatan Kerja (JDIH Kementerian Ketenagakerjaan).", "PP RI Nomor 50 Tahun 2012 tentang Penerapan SMK3 (JDIH Sekretariat Negara)."],
  },
  {
    slug: "identifikasi-risiko",
    title: "Identifikasi Bahaya dan Penilaian Risiko",
    category: "Manajemen risiko",
    duration: "7 menit",
    summary: "Belajar mengamati sumber bahaya, kemungkinan kejadian, dan dampaknya.",
    sections: [
      {
        heading: "Bahaya dan risiko",
        body: "Bahaya adalah sesuatu yang berpotensi menimbulkan cedera atau kerusakan. Risiko menggambarkan kemungkinan bahaya itu terjadi beserta tingkat keparahan akibatnya.",
        points: ["Amati alat, bahan, lingkungan, dan cara kerja.", "Pertimbangkan siapa yang dapat terdampak.", "Nilai risiko mengikuti metode yang diajarkan instruktur."],
      },
      {
        heading: "Contoh pengamatan di bengkel",
        body: "Oli yang tumpah dapat membuat lantai licin. Identifikasi sumbernya, batasi akses bila aman, dan laporkan agar pembersihan dilakukan dengan prosedur yang tepat.",
        points: ["Cari kondisi tidak aman sebelum praktik.", "Jangan menyentuh bahan yang tidak dikenal.", "Laporkan bahaya dan kondisi nyaris celaka."],
      },
    ],
    references: ["ILO, Guidelines on occupational safety and health management systems (ILO-OSH 2001).", "UU RI Nomor 1 Tahun 1970 tentang Keselamatan Kerja."],
  },
  {
    slug: "pengendalian-risiko",
    title: "Pengendalian Risiko Kerja",
    category: "Pencegahan",
    duration: "6 menit",
    summary: "Kenali urutan pengendalian risiko sebelum mengandalkan APD.",
    sections: [
      {
        heading: "Hierarki pengendalian",
        body: "Pengendalian risiko umumnya dipertimbangkan dari langkah yang paling efektif: eliminasi, substitusi, rekayasa teknis, pengendalian administratif, lalu alat pelindung diri. Pilihan nyata harus ditentukan oleh pihak yang berwenang.",
        points: ["Hilangkan bahaya bila memungkinkan.", "Gunakan rekayasa atau pengamanan alat yang sesuai.", "APD adalah lapisan perlindungan, bukan pengganti pengendalian lain."],
      },
      {
        heading: "Penerapan bagi siswa",
        body: "Siswa tidak boleh memodifikasi mesin atau pelindung alat. Sampaikan masalah kepada guru, ikuti prosedur sekolah, dan gunakan APD yang ditetapkan.",
        points: ["Jangan melepas pelindung mesin.", "Jangan bekerja jika pengendalian wajib tidak tersedia.", "Minta pemeriksaan instruktur sebelum melanjutkan."],
      },
    ],
    references: ["NIOSH, Hierarchy of Controls (Centers for Disease Control and Prevention).", "ILO, Occupational safety and health."],
  },
  {
    slug: "k3-bengkel-otomotif",
    title: "Penerapan K3 di Bengkel Otomotif",
    category: "Praktik bengkel",
    duration: "8 menit",
    summary: "Terapkan kebiasaan aman pada area kerja dan servis kendaraan.",
    sections: [
      {
        heading: "Sebelum dan selama praktik",
        body: "Ikuti briefing, periksa area kerja, kenakan pakaian kerja yang pas dan APD yang disyaratkan, serta pastikan setiap pekerjaan berada di bawah pengawasan sesuai aturan sekolah.",
        points: ["Ikat rambut panjang dan hindari aksesori yang dapat tersangkut.", "Jaga area tetap rapi dan jalur evakuasi terbuka.", "Gunakan alat sesuai fungsi dan instruksi."],
      },
      {
        heading: "Setelah praktik",
        body: "Matikan dan simpan alat sesuai prosedur, rapikan area, kelola limbah menurut arahan sekolah, lalu laporkan kerusakan atau kejadian.",
        points: ["Jangan tinggalkan alat beroperasi tanpa pengawasan.", "Pisahkan bahan/limbah sesuai petunjuk.", "Pastikan area aman sebelum meninggalkannya."],
      },
    ],
    references: ["UU RI Nomor 1 Tahun 1970 tentang Keselamatan Kerja.", "Instruksi kerja dan tata tertib bengkel sekolah (rujuk dokumen setempat)."],
  },
  {
    slug: "budaya-5r",
    title: "Budaya 5R / 5S",
    category: "Budaya kerja",
    duration: "5 menit",
    summary: "Bangun kebiasaan kerja tertib melalui ringkas, rapi, resik, rawat, dan rajin.",
    sections: [
      {
        heading: "Lima langkah 5R",
        body: "5R adalah Ringkas, Rapi, Resik, Rawat, dan Rajin. Istilah ini sejalan dengan pendekatan 5S: Seiri, Seiton, Seiso, Seiketsu, dan Shitsuke.",
        points: ["Ringkas: pisahkan yang perlu dan tidak perlu.", "Rapi: simpan alat pada tempat yang ditentukan.", "Resik: jaga area bersih; Rawat: pertahankan standar; Rajin: lakukan konsisten."],
      },
      {
        heading: "Manfaat di bengkel",
        body: "Tempat kerja yang tertata membantu mengurangi tersandung, memudahkan menemukan alat, dan mendukung pemeriksaan kondisi kerja.",
        points: ["Kembalikan alat setelah digunakan.", "Segera laporkan tumpahan atau kerusakan.", "Ikuti jadwal dan tanggung jawab piket."],
      },
    ],
    references: ["Kementerian Ketenagakerjaan RI, materi budaya kerja 5R/5S.", "ILO, Workplace improvement tools and practical guidance."],
  },
  {
    slug: "pencegahan-kecelakaan",
    title: "Pencegahan Kecelakaan Kerja",
    category: "Pencegahan",
    duration: "6 menit",
    summary: "Kurangi kejadian dengan kewaspadaan, komunikasi, dan pelaporan.",
    sections: [
      {
        heading: "Kebiasaan pencegahan",
        body: "Kecelakaan dapat dicegah dengan mengikuti prosedur, memperhatikan kondisi area, menggunakan alat dan APD yang tepat, serta tidak terburu-buru atau bercanda saat bekerja.",
        points: ["Pastikan memahami instruksi sebelum mulai.", "Jaga jarak dari bagian bergerak dan sumber energi.", "Jangan mengoperasikan alat saat lelah atau tidak fokus."],
      },
      {
        heading: "Jika terjadi insiden",
        body: "Utamakan keselamatan, hentikan pekerjaan jika aman, jauhi bahaya, dan segera panggil guru atau petugas yang berwenang. Jangan melakukan tindakan di luar kemampuan atau pelatihan.",
        points: ["Ikuti prosedur darurat sekolah.", "Jangan memindahkan korban kecuali ada bahaya langsung dan aman dilakukan.", "Laporkan kejadian, termasuk nyaris celaka."],
      },
    ],
    references: ["UU RI Nomor 1 Tahun 1970 tentang Keselamatan Kerja.", "ILO, Safety and health at work."],
  },
  {
    slug: "ergonomi-bengkel",
    title: "Ergonomi dan Postur Kerja",
    category: "Kesehatan kerja",
    duration: "6 menit",
    summary: "Kenali bagaimana posisi kerja dan penanganan komponen dapat memengaruhi tubuh.",
    sections: [
      {
        heading: "Apa itu ergonomi?",
        body: "Ergonomi adalah upaya menyesuaikan pekerjaan, alat, dan lingkungan dengan kemampuan serta keterbatasan manusia. Posisi janggal dan pekerjaan berulang dapat menyebabkan rasa tidak nyaman atau gangguan otot dan sendi.",
        points: ["Perhatikan postur janggal atau terlalu lama.", "Beban yang berat atau bentuknya sulit dipegang perlu bantuan.", "Getaran dan pengulangan tugas juga dapat menjadi faktor risiko."],
      },
      {
        heading: "Kebiasaan yang lebih aman",
        body: "Jangan memaksakan mengangkat atau menjangkau komponen. Atur area kerja bila diizinkan, gunakan alat bantu yang disetujui, dan minta bantuan instruktur jika beban atau posisi tidak aman.",
        points: ["Minta bantuan untuk komponen yang terlalu berat atau sulit dipegang.", "Gunakan alat bantu hanya setelah mendapat arahan.", "Sampaikan keluhan atau ketidaknyamanan kepada instruktur."],
      },
    ],
    references: [
      { label: "NIOSH — Ergonomics and Musculoskeletal Disorders", url: "https://www.cdc.gov/niosh/ergonomics/about/index.html" },
    ],
  },
  {
    slug: "bahan-kimia-bengkel",
    title: "Keselamatan Bahan Kimia Bengkel",
    category: "Bahan berbahaya",
    duration: "7 menit",
    summary: "Belajar mencari informasi bahaya sebelum menggunakan cairan atau produk kimia.",
    sections: [
      {
        heading: "Kenali produk sebelum digunakan",
        body: "Produk pembersih, pelumas, dan cairan servis dapat memiliki bahaya yang berbeda. Jangan menyimpulkan sifat produk dari warna atau baunya; baca label dan lembar data keselamatan (SDS) bersama instruktur.",
        points: ["Pastikan identitas dan label produk terbaca.", "Pahami bahaya, penanganan, penyimpanan, dan APD yang tercantum di SDS.", "Jangan menggunakan atau mencampur produk yang tidak dikenal."],
      },
      {
        heading: "Jika label hilang atau terjadi paparan",
        body: "Jangan menebak isi wadah atau melakukan penanganan di luar pelatihan. Jauhi area bila aman, beri tahu instruktur, dan ikuti SDS serta prosedur tanggap darurat sekolah.",
        points: ["Jangan memindahkan bahan ke wadah tanpa label.", "Laporkan wadah bocor, tumpahan, atau gejala paparan.", "Penanganan dan APD harus ditetapkan oleh instruktur berdasarkan bahan dan prosedur setempat."],
      },
    ],
    references: [
      { label: "NIOSH — Pocket Guide to Chemical Hazards", url: "https://www.cdc.gov/niosh/npg/default.html" },
      { label: "OSHA — Hazard Communication (informasi label dan SDS)", url: "https://www.osha.gov/hazcom" },
    ],
  },
  {
    slug: "tanggap-darurat",
    title: "Kesiapsiagaan dan Tanggap Darurat",
    category: "Keadaan darurat",
    duration: "6 menit",
    summary: "Ketahui cara mengenali alarm, meminta bantuan, dan mengikuti rencana darurat sekolah.",
    sections: [
      {
        heading: "Persiapan sebelum praktik",
        body: "Kenali tanda alarm, jalur evakuasi, titik kumpul, dan cara menghubungi guru atau petugas yang ditetapkan. Tanyakan lokasi dan peran yang belum dipahami sebelum pekerjaan dimulai.",
        points: ["Ikuti pengarahan darurat dari sekolah.", "Jaga jalur evakuasi agar tidak terhalang.", "Ketahui siapa yang harus diberi tahu saat insiden."],
      },
      {
        heading: "Saat keadaan darurat",
        body: "Utamakan keselamatan diri dan orang di sekitar. Hentikan pekerjaan hanya bila aman, jauhi bahaya, beri tahu petugas, dan ikuti rencana serta instruksi resmi sekolah.",
        points: ["Gunakan jalur evakuasi dan titik kumpul sesuai instruksi.", "Jangan kembali ke area berbahaya tanpa izin petugas.", "Jangan mencoba memadamkan api atau menolong korban di luar pelatihan dan kondisi aman."],
      },
    ],
    references: [
      { label: "NIOSH — Protecting Emergency Response and Recovery Workers", url: "https://www.cdc.gov/niosh/emres/" },
      "Rencana tanggap darurat, peta evakuasi, dan instruksi resmi bengkel/sekolah masing-masing.",
    ],
  },
];
