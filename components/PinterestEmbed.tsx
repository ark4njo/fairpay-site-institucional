"use client";

import Script from "next/script";
import Link from "next/link";

type PinterestEmbedProps = {
  /** Link do Pin ou do Board */
  url: string;
  title?: string;
  subtitle?: string;
};

export default function PinterestEmbed({
  url,
  title = "Pinterest",
  subtitle = "Referências visuais e materiais da marca.",
}: PinterestEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      </div>

      <div className="px-6 pb-6">
        {/* Embed oficial Pinterest */}
        <a
          data-pin-do="embedPin"
          href={url}
          className="block"
        >
          {url}
        </a>

        <div className="mt-4">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Abrir no Pinterest →
          </Link>
        </div>

        <Script async defer src="https://assets.pinterest.com/js/pinit.js" strategy="afterInteractive" />
      </div>
    </div>
  );
}
