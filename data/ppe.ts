export type PpeItem = {
  name: string;
  icon: "footprints" | "hand" | "glasses" | "hardhat" | "headphones" | "shirt" | "wind";
  purpose: string;
  use: string;
  when: string;
  caution: string;
};

export const ppeItems: PpeItem[] = [
  { name: "Safety shoes", icon: "footprints", purpose: "Melindungi kaki dari benturan, benda jatuh, atau risiko tusukan sesuai spesifikasi sepatu.", use: "Gunakan sepatu keselamatan yang sesuai ukuran, terawat, dan memenuhi ketentuan tempat praktik.", when: "Saat bekerja di area bengkel atau menangani komponen berat.", caution: "Sepatu biasa atau yang rusak tidak memberikan perlindungan setara." },
  { name: "Safety gloves", icon: "hand", purpose: "Membantu melindungi tangan dari bahaya tertentu sesuai jenis sarung tangan.", use: "Pilih bahan sarung tangan berdasarkan pekerjaan dan bahaya yang dinilai.", when: "Untuk pekerjaan yang memang mensyaratkan perlindungan tangan.", caution: "Sarung tangan dapat tersangkut pada bagian berputar; ikuti instruksi dan jangan gunakan dekat mesin berputar bila dilarang." },
  { name: "Safety glasses", icon: "glasses", purpose: "Melindungi mata dari partikel, percikan, atau bahaya mata lain sesuai desainnya.", use: "Pastikan kacamata pas, bersih, tidak retak, dan memiliki pelindung samping bila diperlukan.", when: "Saat ada risiko serpihan, debu, atau percikan.", caution: "Kacamata biasa bukan pengganti kacamata keselamatan." },
  { name: "Safety helmet", icon: "hardhat", purpose: "Membantu melindungi kepala dari bahaya benturan atau benda jatuh sesuai kelas dan spesifikasinya.", use: "Periksa kondisi helm dan gunakan dengan benar sesuai petunjuk produsen.", when: "Di area yang mewajibkan pelindung kepala atau memiliki bahaya kepala.", caution: "Jangan gunakan helm retak atau yang sudah melewati batas pakai menurut produsennya." },
  { name: "Ear protection", icon: "headphones", purpose: "Mengurangi paparan kebisingan jika perlindungan pendengaran diperlukan.", use: "Pilih dan pasang earplug atau earmuff sesuai instruksi.", when: "Di area dengan kebisingan yang dinilai berisiko atau diwajibkan bengkel.", caution: "Jangan abaikan alarm atau instruksi; perlindungan pendengaran bukan izin untuk berada di area berbahaya." },
  { name: "Coverall / wearpack", icon: "shirt", purpose: "Melindungi tubuh dan pakaian dari kotoran serta percikan ringan sesuai bahannya.", use: "Kenakan ukuran pas, tutup bagian yang longgar, dan rawat tetap bersih.", when: "Selama praktik bengkel sesuai tata tertib sekolah.", caution: "Hindari ujung kain longgar, tali terbuka, atau aksesori dekat komponen bergerak." },
  { name: "Respirator / masker", icon: "wind", purpose: "Melindungi pernapasan dari kontaminan tertentu hanya bila jenisnya sesuai dan terpasang benar.", use: "Identifikasi bahaya terlebih dahulu; gunakan tipe yang ditentukan instruktur dan ikuti petunjuk fit/pemakaian.", when: "Saat penilaian risiko dan prosedur tempat kerja mensyaratkan perlindungan pernapasan.", caution: "Masker kain/medis tidak otomatis melindungi dari uap kimia; jangan bekerja dengan bahan tak dikenal." },
];
