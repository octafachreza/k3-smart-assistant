import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "K3 Smart Assistant | Belajar aman di bengkel",
  description:
    "Teman belajar Keselamatan dan Kesehatan Kerja untuk siswa SMK Teknik Kendaraan Ringan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
