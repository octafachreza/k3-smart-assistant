"use client";

import { useState } from "react";
import { Award, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { quiz } from "@/data/quiz";

export function QuizGame() {
  const [selected, setSelected] = useState<(number | null)[]>(Array(quiz.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const score = quiz.reduce((total, question, index) => total + (selected[index] === question.answer ? 1 : 0), 0);
  const percent = Math.round((score / quiz.length) * 100);

  function restart() {
    setSelected(Array(quiz.length).fill(null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
        <div><p className="text-sm font-bold text-navy-900">{quiz.length} pertanyaan · Pilihan ganda</p><p className="mt-1 text-xs text-slate-500">{selected.filter((answer) => answer !== null).length} dari {quiz.length} dijawab</p></div>
        {!submitted && <button type="button" onClick={() => setSubmitted(true)} disabled={selected.some((answer) => answer === null)} className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40">Lihat hasil</button>}
        {submitted && <button type="button" onClick={restart} className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"><RotateCcw size={15} /> Ulangi kuis</button>}
      </div>

      {submitted && (
        <div className="rounded-3xl bg-navy-900 p-6 text-white md:flex md:items-center md:justify-between md:p-8">
          <div className="flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300"><Award size={28} /></div><div><p className="text-sm text-white/60">Hasil belajarmu</p><h2 className="text-2xl font-extrabold">{score} dari {quiz.length} benar</h2></div></div>
          <div className="mt-5 md:mt-0 md:text-right"><p className="text-4xl font-black text-emerald-300">{percent}%</p><p className="text-xs text-white/60">Nilai kuis</p></div>
        </div>
      )}

      {quiz.map((item, index) => (
        <section key={item.question} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft md:p-6">
          <div className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xs font-extrabold text-brand-600">{String(index + 1).padStart(2, "0")}</span><h2 className="pt-1 text-sm font-bold leading-6 text-navy-900">{item.question}</h2></div>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {item.options.map((option, optionIndex) => {
              const isSelected = selected[index] === optionIndex;
              const isCorrect = item.answer === optionIndex;
              const resultStyle = submitted ? (isCorrect ? "border-emerald-300 bg-emerald-50 text-emerald-900" : isSelected ? "border-rose-300 bg-rose-50 text-rose-900" : "border-slate-100 text-slate-400") : isSelected ? "border-brand-300 bg-brand-50 text-brand-700" : "border-slate-100 text-slate-600 hover:border-brand-200 hover:bg-slate-50";
              return <button key={option} type="button" disabled={submitted} onClick={() => setSelected((current) => current.map((value, i) => i === index ? optionIndex : value))} className={`flex items-center gap-3 rounded-xl border p-3 text-left text-xs leading-5 transition ${resultStyle}`}><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>{submitted && isCorrect && <CheckCircle2 size={16} className="ml-auto shrink-0" />}{submitted && isSelected && !isCorrect && <XCircle size={16} className="ml-auto shrink-0" />}</button>;
            })}
          </div>
          {submitted && <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-600"><strong className="text-navy-900">Pembahasan: </strong>{item.explanation}</p>}
        </section>
      ))}
    </div>
  );
}
