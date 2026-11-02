import Link from "next/link";
import { ArrowRight, BookOpen, Bot, CheckCircle2, ClipboardCheck, HardHat, ShieldAlert, Sparkles, Wrench } from "lucide-react";
import { materials } from "@/data/materials";

const features = [
  { href: "/chat", title: "Chatbot AI", description: "Diskusikan pertanyaan K3 dengan asisten virtual.", icon: Bot, color: "bg-blue-50 text-blue-600", label: "Mulai bertanya" },
  { href: "/materi", title: "Materi K3", description: "Pelajari konsep dasar hingga pencegahan risiko.", icon: BookOpen, color: "bg-violet-50 text-violet-600", label: "Jelajahi materi" },
  { href: "/apd", title: "Panduan APD", description: "Kenali perlindungan yang sesuai dengan pekerjaan.", icon: HardHat, color: "bg-amber-50 text-amber-600", label: "Lihat panduan" },
  { href: "/bahaya", title: "Identifikasi bahaya", description: "Kenali risiko yang umum ditemui di bengkel.", icon: ShieldAlert, color: "bg-rose-50 text-rose-600", label: "Kenali bahaya" },
  { href: "/sop", title: "SOP bengkel", description: "Ulas tahapan kerja aman sebelum hingga sesudah praktik.", icon: Wrench, color: "bg-emerald-50 text-emerald-600", label: "Baca panduan" },
  { href: "/kuis", title: "Kuis K3", description: "Uji pemahamanmu melalui latihan interaktif.", icon: ClipboardCheck, color: "bg-cyan-50 text-cyan-600", label: "Kerjakan kuis" },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[28px] bg-navy-900 px-6 py-9 text-white md:px-10 md:py-12">
        <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" />
        <div className="absolute -bottom-28 right-36 h-56 w-56 rounded-full bg-brand-500/10 blur-2xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-brand-100"><Sparkles size={13} /> Ruang belajar K3 untuk siswa TKR</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">Halo, calon teknisi hebat! <span className="text-brand-100">👋</span></h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:text-base">Belajar mengenali bahaya dan membangun kebiasaan kerja aman di bengkel otomotif, satu langkah pada satu waktu.</p>
          <p className="mt-4 text-xs font-semibold tracking-wide text-emerald-300">“Kenali Bahaya, Cegah Kecelakaan, Terapkan Keselamatan.”</p>
          <Link href="/chat" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600">Tanya asisten K3 <ArrowRight size={17} /></Link>
        </div>
        <div className="absolute bottom-8 right-10 hidden h-36 w-36 items-center justify-center rounded-[32px] border border-white/10 bg-white/5 text-brand-100 md:flex"><HardHat size={82} strokeWidth={1.2} /></div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Jelajahi platform</p><h2 className="mt-1 text-xl font-extrabold text-navy-900">Apa yang ingin kamu pelajari?</h2></div></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(({ href, title, description, icon: Icon, color, label }) => <Link key={href} href={href} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"><div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}><Icon size={21} /></div><h3 className="mt-4 font-bold text-navy-900">{title}</h3><p className="mt-1 min-h-10 text-xs leading-5 text-slate-500">{description}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-600">{label}<ArrowRight size={14} className="transition group-hover:translate-x-1" /></span></Link>)}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft md:p-6">
          <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-600">Mulai dari sini</p><h2 className="mt-1 text-lg font-extrabold text-navy-900">Materi pilihan</h2></div><Link href="/materi" className="text-xs font-bold text-brand-600">Semua materi →</Link></div>
          <div className="mt-4 divide-y divide-slate-100">
            {materials.slice(0, 3).map((material) => <Link key={material.slug} href={`/materi/${material.slug}`} className="flex items-center gap-3 py-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><BookOpen size={17} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-navy-900">{material.title}</p><p className="mt-0.5 text-xs text-slate-400">{material.category} · {material.duration}</p></div><ArrowRight size={16} className="shrink-0 text-slate-300" /></Link>)}
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
          <div className="flex items-center gap-2 text-emerald-800"><CheckCircle2 size={19} /><h2 className="font-bold">Tips keselamatan hari ini</h2></div>
          <p className="mt-4 text-sm leading-6 text-emerald-900/80">Sebelum praktik, luangkan waktu untuk mengenali area kerja. Pastikan jalur berjalan rapi, alat dalam kondisi yang layak, dan APD sesuai instruksi.</p>
          <div className="mt-5 rounded-xl bg-white/70 p-3 text-xs leading-5 text-emerald-900/70">Jika menemukan kondisi tidak aman, jangan menebak atau memperbaikinya sendiri. Beri tahu guru atau instruktur.</div>
        </div>
      </section>
    </div>
  );
}
