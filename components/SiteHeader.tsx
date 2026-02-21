"use client";

import Link from "next/link";
import { useState } from "react";

const MENU = [
  {
    label: "Empresa",
    items: [
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Contato / Parcerias", href: "/parcerias" },
    ],
  },
  {
    label: "Soluções",
    items: [
      { label: "Crédito", href: "/credito" },
      { label: "FairPay Mobile", href: "/" },
    ],
  },
  {
    label: "Mídia",
    items: [
      { label: "YouTube", href: "https://www.youtube.com/@fairpaymobile" },
      { label: "Instagram", href: "https://www.instagram.com/fairpaymobile/" },
      { label: "TikTok", href: "https://www.tiktok.com/@fairpaymobile" },
      { label: "Pinterest", href: "https://br.pinterest.com/pin/1137088605936429474/" },
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FairPay <span className="text-neutral-500">Tecnologia Ltda</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {MENU.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpen(group.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="text-sm font-medium text-neutral-700 hover:text-black">
                {group.label}
              </button>

              {open === group.label && (
                <div className="absolute left-0 mt-3 w-56 rounded-xl border border-neutral-200 bg-white shadow-lg">
                  <div className="py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
