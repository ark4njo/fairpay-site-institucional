"use client";

import Script from "next/script";

type TikTokEmbedProps = {
  url: string; 
  title?: string;
  subtitle?: string;
  maxWidth?: number;
};

export default function TikTokEmbed({
  url,
  title = "TikTok",
  subtitle = "Clipes, bastidores e conteúdos rápidos para parceiros e público.",
  maxWidth = 605,
}: TikTokEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      </div>

      <div className="px-6 pb-6">
        {/* Blockquote de embed do TikTok */}
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id=""
          style={{ maxWidth, minWidth: 325, margin: "0 auto" }}
        >
          <section>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Assistir no TikTok
            </a>
          </section>
        </blockquote>

        {/* Script oficial do TikTok para embutir */}
        <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
      </div>
    </div>
  );
}
