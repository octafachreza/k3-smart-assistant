"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, CircleAlert, LoaderCircle, RotateCcw, Send, ShieldCheck, UserRound } from "lucide-react";

type Message = { role: "assistant" | "user"; content: string };
const greeting =
  "Halo, selamat datang di K3 Smart Assistant!\n\nSaya adalah asisten virtual yang siap membantu kamu mempelajari Keselamatan dan Kesehatan Kerja (K3), khususnya dalam kegiatan praktik bengkel Teknik Kendaraan Ringan.\n\nKamu dapat bertanya mengenai penggunaan APD, identifikasi bahaya, prosedur keselamatan kerja, SOP bengkel, hingga penanganan kondisi darurat.\n\nApa yang ingin kamu pelajari hari ini?";
const suggestions = [
  "Apa fungsi APD dalam bengkel otomotif?",
  "Apa saja potensi bahaya saat menggunakan mesin gerinda?",
  "Bagaimana prosedur keselamatan menggunakan car lift?",
  "Apa yang harus dilakukan ketika terjadi tumpahan oli?",
  "Bagaimana cara menggunakan APAR?",
  "Apa yang dimaksud dengan 5R dalam lingkungan kerja?",
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: greeting }]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [simulated, setSimulated] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/chat")
      .then(async (response) => {
        if (!response.ok) throw new Error("Status layanan tidak dapat diperiksa.");
        const data = (await response.json()) as { simulated: boolean };
        if (active) setSimulated(data.simulated);
      })
      .catch(() => {
        if (active) setError("Status layanan belum dapat diperiksa. Coba muat ulang halaman.");
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }), [messages, loading]);

  async function sendMessage(event?: FormEvent, preset?: string) {
    event?.preventDefault();
    const text = (preset ?? question).trim();
    if (!text || loading) return;
    if (text.length > 2000) {
      setError("Pertanyaan terlalu panjang. Gunakan maksimal 2.000 karakter.");
      return;
    }

    setError("");
    setQuestion("");
    setMessages((current) => [...current, { role: "user", content: text }]);
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      const data = (await response.json()) as { answer?: string; simulated?: boolean; error?: string };
      if (!response.ok || !data.answer) throw new Error(data.error || "Jawaban belum dapat dimuat. Silakan coba lagi.");
      setSimulated(Boolean(data.simulated));
      setMessages((current) => [...current, { role: "assistant", content: data.answer! }]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  function clearConversation() {
    setMessages([{ role: "assistant", content: greeting }]);
    setQuestion("");
    setError("");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
      <section className="flex min-h-[620px] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Bot size={21} /></div>
            <div>
              <h2 className="text-sm font-bold text-navy-900">Asisten K3</h2>
              <p className="text-xs text-slate-400">Teman belajar praktik bengkel</p>
            </div>
          </div>
          <button onClick={clearConversation} type="button" disabled={loading} className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-navy-900 disabled:cursor-not-allowed disabled:opacity-40">
            <RotateCcw size={15} /> <span className="hidden sm:inline">Hapus percakapan</span><span className="sm:hidden">Reset</span>
          </button>
        </div>

        <div className="chat-scrollbar flex-1 space-y-5 overflow-y-auto px-4 py-6 md:px-7">
          {messages.map((message, index) => (
            <div key={`${index}-${message.role}`} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              {message.role === "assistant" && <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Bot size={17} /></div>}
              <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 md:max-w-[80%] ${message.role === "user" ? "rounded-tr-sm bg-navy-900 text-white" : "rounded-tl-sm bg-slate-50 text-slate-700"}`}>
              {message.content.split("\n").map((line, lineIndex) => line ? <p key={lineIndex} className={lineIndex ? "mt-3" : ""}>{line.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) => part.startsWith("**") && part.endsWith("**") ? <strong key={partIndex} className="font-bold">{part.slice(2, -2)}</strong> : part)}</p> : <div key={lineIndex} className="h-2" />)}
              </div>
              {message.role === "user" && <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><UserRound size={17} /></div>}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Bot size={17} /></div>
              <div role="status" className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500"><LoaderCircle size={16} className="animate-spin" /> Asisten sedang menyiapkan jawaban...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-slate-100 p-4 md:p-6">
          {error && <div role="alert" className="mb-3 flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-xs text-rose-700"><CircleAlert size={15} />{error}</div>}
          <form onSubmit={(event) => sendMessage(event)} className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-white p-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
            <label htmlFor="chat-question" className="sr-only">Tulis pertanyaan K3</label>
            <textarea id="chat-question" value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage();
              }
            }} maxLength={2000} rows={1} placeholder="Tulis pertanyaan seputar K3 bengkel..." className="max-h-32 min-h-11 flex-1 resize-y border-0 bg-transparent px-3 py-3 text-sm text-navy-900 outline-none placeholder:text-slate-400" />
            <button type="submit" disabled={loading || !question.trim()} aria-label="Kirim pertanyaan" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"><Send size={17} /></button>
          </form>
          <p className="mt-2 text-center text-[11px] text-slate-400">Hindari membagikan data pribadi. Jawaban AI bukan pengganti instruktur atau SOP resmi.</p>
        </div>
      </section>

      <aside className="space-y-5">
        {simulated !== null && (
          <div className={`rounded-2xl border p-4 ${simulated ? "border-amber-200 bg-amber-50" : "border-emerald-100 bg-emerald-50"}`}>
            <div className={`mb-1 flex items-center gap-2 text-sm font-bold ${simulated ? "text-amber-900" : "text-emerald-900"}`}>
              <ShieldCheck size={17} />{simulated ? "Mode simulasi aktif" : "Asisten AI aktif"}
            </div>
            <p className={`text-xs leading-5 ${simulated ? "text-amber-900/75" : "text-emerald-900/75"}`}>
              {simulated ? "API key belum dikonfigurasi. Contoh jawaban berasal dari respons simulasi, bukan AI sungguhan." : "Jawaban dibuat AI dan tetap perlu diverifikasi kepada instruktur serta SOP bengkel."}
            </p>
          </div>
        )}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-navy-900">Coba tanyakan</p>
          <p className="mt-1 text-xs text-slate-400">Pilih topik untuk memulai percakapan</p>
          <div className="mt-4 space-y-2">
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => void sendMessage(undefined, suggestion)} disabled={loading} className="w-full rounded-xl border border-slate-100 px-3 py-2.5 text-left text-xs leading-5 text-slate-600 transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-600 disabled:opacity-50">{suggestion}</button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-navy-900 p-5 text-white">
          <div className="mb-2 flex items-center gap-2 text-brand-100"><ShieldCheck size={17} /><span className="text-sm font-bold">Ingat, ya!</span></div>
          <p className="text-xs leading-5 text-white/70">Untuk situasi darurat, segera jauhi sumber bahaya bila aman dan ikuti instruksi guru, instruktur, atau petugas yang berwenang.</p>
        </div>
      </aside>
    </div>
  );
}
