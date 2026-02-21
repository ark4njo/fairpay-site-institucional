import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "FairPay — Infraestrutura financeira",
  description:
    "Infraestrutura financeira para originação e estruturação de crédito com governança e parcerias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-neutral-100 relative overflow-x-hidden">
        {/* FUNDO ESPACIAL */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1200px 700px at 15% 10%, rgba(59,130,246,0.18), transparent 60%)," +
                "radial-gradient(1000px 600px at 85% 20%, rgba(37,99,235,0.15), transparent 65%)," +
                "radial-gradient(800px 500px at 50% 90%, rgba(30,58,138,0.12), transparent 70%)," +
                "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,1))",
            }}
          />

          {/* Logo como marca d’água espacial (discreta) */}
          <div className="absolute right-[8%] top-[20%] opacity-[0.08] blur-[0.4px]">
            <Image
              src="/images/fairpay-mobile-logo.png"
              alt=""
              width={420}
              height={420}
              priority
            />
          </div>
        </div>

        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
