"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Bot,
  ClipboardCheck,
  HardHat,
  LayoutDashboard,
  Menu,
  ShieldAlert,
  ShieldCheck,
  X,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Beranda", icon: LayoutDashboard },
  { href: "/chat", label: "Asisten AI", icon: Bot },
  { href: "/materi", label: "Materi K3", icon: BookOpen },
  { href: "/apd", label: "Alat pelindung diri", icon: HardHat },
  { href: "/bahaya", label: "Identifikasi bahaya", icon: ShieldAlert },
  { href: "/sop", label: "SOP bengkel", icon: Wrench },
  { href: "/kuis", label: "Kuis K3", icon: ClipboardCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-3 px-6 py-7" onClick={() => setMobileOpen(false)}>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-sm">
          <ShieldCheck size={24} strokeWidth={2.2} />
        </div>
        <div>
          <p className="text-sm font-extrabold tracking-wide text-navy-900">K3 SMART</p>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-600">ASSISTANT</p>
        </div>
      </Link>
      <div className="px-4 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        Menu utama
      </div>
      <nav className="flex-1 space-y-1 px-3" aria-label="Navigasi utama">
        {navigation.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-brand-50 text-brand-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-navy-900"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={19} />
              {label}
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-500" />}
            </Link>
          );
        })}
      </nav>
      <div className="m-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
        <div className="mb-2 flex items-center gap-2 text-emerald-800">
          <ShieldCheck size={17} />
          <span className="text-xs font-bold">Utamakan keselamatan</span>
        </div>
        <p className="text-xs leading-5 text-emerald-800/75">
          Materi ini mendukung pembelajaran, bukan pengganti arahan instruktur atau SOP resmi.
        </p>
      </div>
      <div className="border-t border-slate-100 px-6 py-4 text-[11px] text-slate-400">
        K3 Smart Assistant · Belajar dengan aman
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[252px] border-r border-slate-100 bg-white lg:block">
        {sidebar}
      </aside>
      <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-slate-100 bg-white/95 px-4 backdrop-blur md:px-8 lg:ml-[252px]">
        <button
          type="button"
          className="rounded-xl p-2 text-navy-900 hover:bg-slate-100 lg:hidden"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <p className="text-sm font-semibold text-slate-600 lg:ml-0">Ruang belajar K3 TKR</p>
        <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
          <span className="h-2 w-2 rounded-full bg-safety" />
          Siap belajar
        </div>
      </header>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy-950/40"
            aria-label="Tutup menu"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative h-full w-[290px] max-w-[85vw] bg-white shadow-2xl">{sidebar}</aside>
        </div>
      )}
      <main className="min-h-[calc(100vh-68px)] px-4 py-6 md:px-8 md:py-9 lg:ml-[252px]">
        <div className="mx-auto w-full max-w-[1280px]">{children}</div>
      </main>
    </div>
  );
}
