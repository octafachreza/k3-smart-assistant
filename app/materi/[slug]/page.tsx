import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CheckCircle2, ExternalLink } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { materials } from "@/data/materials";

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export default async function MaterialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) notFound();

  return <div className="mx-auto max-w-4xl"><Link href="/materi" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-brand-600"><ArrowLeft size={15} /> Kembali ke materi</Link><PageHeading eyebrow={`${material.category} · ${material.duration}`} title={material.title} description={material.summary} /><div className="space-y-5">{material.sections.map((section) => <section key={section.heading} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft md:p-7"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><BookOpen size={19} /></div><h2 className="text-lg font-bold text-navy-900">{section.heading}</h2></div><p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p><ul className="mt-4 space-y-3">{section.points.map((point) => <li key={point} className="flex gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-1 shrink-0 text-safety" />{point}</li>)}</ul></section>)}</div><section className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5"><h2 className="text-sm font-bold text-navy-900">Sumber referensi</h2><ul className="mt-3 space-y-2 text-xs leading-5 text-slate-500">{material.references.map((reference) => <li key={typeof reference === "string" ? reference : reference.url} className="flex gap-2"><span aria-hidden="true">•</span>{typeof reference === "string" ? <span>{reference}</span> : <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand-600 underline-offset-2 hover:underline">{reference.label}<ExternalLink size={12} /></a>}</li>)}</ul><p className="mt-4 text-xs leading-5 text-slate-500">Materi untuk edukasi umum. Verifikasi peraturan dan instruksi yang berlaku dengan guru, instruktur, serta sumber resmi.</p></section></div>;
}
