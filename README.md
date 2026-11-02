# K3 Smart Assistant

Website edukasi Keselamatan dan Kesehatan Kerja (K3) untuk siswa SMK Teknik Kendaraan Ringan. Aplikasi menggunakan Next.js App Router, TypeScript, Tailwind CSS, Lucide React, dan API backend Next.js. Data materi, APD, bahaya, serta kuis disimpan lokal di folder `data`.

## Persyaratan

- Node.js LTS (disarankan 20 atau lebih baru)
- npm

Jika Node.js baru saja dipasang dan perintah `node`/`npm` belum dikenali, tutup lalu buka kembali terminal atau VS Code agar perubahan PATH terbaca.

## Menjalankan secara lokal

1. Buka folder proyek di VS Code.
2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000).

## Mengaktifkan chatbot OpenAI

1. Salin `.env.example` sebagai `.env.local` di root proyek.
2. Isi variabel server:

   ```env
   OPENAI_API_KEY=isi_api_key_anda
   OPENAI_MODEL=gpt-4o-mini
   ```

3. Mulai ulang server pengembangan setelah mengubah file environment.

API key hanya dibaca oleh endpoint server `/api/chat`. Jangan menambahkan awalan `NEXT_PUBLIC_` atau mengirimkan key ke kode browser. File `.env.local` dikecualikan dari Git.

Jika `OPENAI_API_KEY` tidak tersedia, endpoint menggunakan mode simulasi edukasi dan antarmuka menampilkan pemberitahuan bahwa jawabannya bukan berasal dari AI sungguhan. Pastikan model yang dipilih tersedia pada akun API Anda.

## Fitur

- Dashboard dengan akses ke semua fitur pembelajaran.
- Chatbot dengan validasi input, status memuat, pesan kesalahan, pertanyaan rekomendasi, hapus percakapan, dan mode simulasi.
- Sepuluh materi K3 beserta halaman detail dan referensi, termasuk ergonomi, keselamatan bahan kimia, dan tanggap darurat.
- Panduan tujuh jenis APD dan batas penggunaannya.
- Pengenalan bahaya bengkel otomotif dan tindakan pencegahan umum.
- Panduan tahapan praktik dan keamanan peralatan bengkel.
- Kuis 15 soal, skor otomatis, pembahasan, dan tombol mengulang.
- Navigasi responsif untuk desktop dan perangkat mobile.

## Perintah pemeriksaan

```bash
npm run build
npm run typecheck
```

## Catatan keselamatan

Konten merupakan edukasi umum, bukan pengganti pelatihan, arahan guru/instruktur, penilaian risiko, instruksi produsen, maupun SOP resmi bengkel sekolah. Verifikasi peraturan dan prosedur lokal kepada pihak yang berwenang.
