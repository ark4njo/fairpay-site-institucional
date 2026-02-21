"use client";

import Link from "next/link";

type TikTokEmbedProps = {
  /** URL do vídeo do TikTok (qualquer formato) */
  url: string;
  title?: string;
  subtitle?: string;
};

function extractTikTokVideoId(url: string): string | null {
  const m = url.match(/\/video\/(\d+)/i);
  return m?.[1] ?? null;
}

export default function TikTokEmbed({
  url,
  title = "TikTok",
  subtitle = "Assista no player abaixo ou abra direto no TikTok.",
}: TikTokEmbedProps) {
  const videoId = extractTikTokVideoId(url);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      </div>

      <div className="px-6 pb-6">
        {/* Se não conseguir extrair o ID, mostramos só o botão */}
        {!videoId ? (
          <div className="rounded-xl border border-neutral-200 p-5 text-sm text-neutral-700">
            Não consegui identificar o vídeo do TikTok pelo link.
            <div className="mt-3">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                Abrir no TikTok →
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Embed por iframe (mais estável que embed.js) */}
            <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50" style={{ paddingTop: "177.78%" }}>
              {/* 9:16 => 56.25% seria 16:9; aqui usamos ~177.78% para 9:16 */}
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                title="TikTok video player"
                frameBorder="0"
                allow="encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                Ver no TikTok →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
