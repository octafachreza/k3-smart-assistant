import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const systemPrompt = `Kamu adalah K3 Smart Assistant, asisten virtual edukasi Keselamatan dan Kesehatan Kerja. Target pengguna adalah siswa SMK jurusan Teknik Kendaraan Ringan.

Jelaskan konsep K3 dengan bahasa Indonesia yang sederhana, sistematis, mudah dipahami siswa, dan relevan dengan lingkungan bengkel otomotif. Fokus pada dasar K3, APD, identifikasi bahaya, penilaian dan pengendalian risiko, SOP bengkel, keselamatan penggunaan peralatan otomotif, pencegahan kecelakaan, dan penanganan kondisi darurat.

Susun jawaban dengan bagian: Penjelasan, Potensi bahaya/penyebab, Langkah pencegahan, dan Kesimpulan (sesuaikan bila tidak relevan). Jangan mengarang peraturan, standar, atau prosedur. Jika informasi belum pasti, arahkan pengguna untuk memverifikasi kepada guru, instruktur, petugas K3, atau SOP resmi setempat.

Untuk kondisi darurat, prioritaskan keselamatan: hentikan pekerjaan apabila aman dilakukan, jauhi sumber bahaya, dan ikuti SOP serta instruksi petugas berwenang. Jangan memberikan instruksi yang membahayakan pengguna. Materi ini bukan pengganti instruktur, pelatihan, atau SOP resmi.`;

function simulatedAnswer(question: string) {
  const text = question.toLowerCase();
  let topic = "pekerjaan bengkel";
  let hazard = "potensi bahaya bergantung pada alat, bahan, dan kondisi area kerja";
  let actions = "Pahami instruksi kerja, kenali bahaya sebelum mulai, gunakan APD yang ditetapkan, dan minta pendampingan instruktur.";

  if (text.includes("apd") || text.includes("pelindung")) {
    topic = "alat pelindung diri (APD)";
    hazard = "APD yang tidak sesuai, rusak, atau dipakai dengan cara yang keliru mungkin tidak memberi perlindungan yang dibutuhkan.";
    actions = "Pilih APD berdasarkan bahaya pekerjaan dan arahan instruktur. Periksa kondisinya sebelum digunakan; APD tidak menggantikan pengendalian bahaya.";
  } else if (text.includes("gerinda")) {
    topic = "penggunaan mesin gerinda";
    hazard = "Bagian berputar, percikan, dan serpihan dapat menimbulkan cedera.";
    actions = "Jangan gunakan tanpa pelatihan, pelindung alat, dan APD yang ditetapkan. Jangan melepas pelindung atau menggunakan cakram rusak; minta instruktur memeriksa alat.";
  } else if (text.includes("car lift") || text.includes("lift")) {
    topic = "car lift";
    hazard = "Kendaraan yang tidak terpasang atau terangkat dengan benar dapat jatuh dan menyebabkan cedera berat.";
    actions = "Jangan operasikan tanpa izin dan pelatihan. Ikuti SOP serta panduan produsen; jangan masuk ke bawah kendaraan sampai instruktur memastikan prosedur pengamanan telah dipenuhi.";
  } else if (text.includes("oli") || text.includes("tumpah")) {
    topic = "tumpahan oli";
    hazard = "Tumpahan dapat membuat lantai licin dan menyebabkan orang terpeleset.";
    actions = "Jauhi atau beri tanda area bila aman, beri tahu instruktur, lalu ikuti prosedur pembersihan sekolah. Jangan menangani bahan yang tidak dikenal.";
  } else if (text.includes("apar") || text.includes("kebakaran") || text.includes("api")) {
    topic = "kebakaran dan APAR";
    hazard = "Api dan asap dapat menyebar cepat; alat pemadam yang tidak sesuai atau penggunaan tanpa pelatihan menambah risiko.";
    actions = "Utamakan evakuasi dan beri tahu petugas. Gunakan APAR hanya jika sudah terlatih, api masih tahap awal, jalur keluar aman, serta sesuai SOP setempat.";
  } else if (text.includes("5r") || text.includes("5s")) {
    topic = "budaya kerja 5R";
    hazard = "Area berantakan dapat membuat alat sulit ditemukan dan meningkatkan risiko tersandung atau terpeleset.";
    actions = "Terapkan Ringkas, Rapi, Resik, Rawat, dan Rajin: pilah barang, tata alat, jaga kebersihan, pertahankan standar, dan lakukan konsisten.";
  }

  return `**Penjelasan**\n${topic} perlu dipahami sebelum praktik dan dilakukan sesuai arahan instruktur.\n\n**Potensi bahaya**\n${hazard}\n\n**Langkah pencegahan**\n${actions}\n\n**Kesimpulan**\nUtamakan keselamatan dan ikuti SOP bengkel sekolah. Jawaban ini adalah simulasi edukasi, bukan prosedur resmi; verifikasi kepada guru atau instruktur.`;
}

export async function GET() {
  return NextResponse.json({ simulated: !process.env.OPENAI_API_KEY });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("question" in body) || typeof body.question !== "string") {
    return NextResponse.json({ error: "Pertanyaan harus berupa teks." }, { status: 400 });
  }
  const question = body.question.trim();
  if (!question) return NextResponse.json({ error: "Pertanyaan tidak boleh kosong." }, { status: 400 });
  if (question.length > 2000) return NextResponse.json({ error: "Pertanyaan maksimal 2.000 karakter." }, { status: 400 });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ answer: simulatedAnswer(question), simulated: true });

  try {
    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      instructions: systemPrompt,
      input: question,
      max_output_tokens: 500,
    });
    const answer = response.output_text.trim();
    if (!answer) {
      return NextResponse.json({ error: "Asisten belum menghasilkan jawaban. Silakan coba lagi." }, { status: 502 });
    }
    return NextResponse.json({ answer, simulated: false });
  } catch {
    return NextResponse.json(
      { error: "Layanan AI sedang bermasalah. Periksa konfigurasi dan koneksi, lalu coba kembali." },
      { status: 502 },
    );
  }
}
