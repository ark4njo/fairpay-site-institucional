import Link from "next/link";

type PinterestEmbedProps = {
  pinId: string;
  title?: string;
  subtitle?: string;
  /** Tamanhos do próprio Pinterest: pequeno/médio/grande/extragrande */
  size?: "small" | "medium" | "large" | "xlarge";
  /** Link do pin para abrir fora */
  pinUrl?: string;
};

const SIZE_MAP = {
  small: { width: 236, height: 233 },
  medium: { width: 345, height: 345 },
  large: { width: 450, height: 470 },
  xlarge: { width: 600, height: 900 },
} as const;

export default function PinterestEmbed({
  pinId,
  title = "Pinterest",
  subtitle = "Referências visuais e materiais da marca.",
  size = "medium",
  pinUrl,
}: PinterestEmbedProps) {
  const { width, height } = SIZE_MAP[size];
  const url = `https://assets.pinterest.com/ext/embed.html?id=${pinId}`;
  const openUrl = pinUrl ?? `https://br.pinterest.com/pin/${pinId}/`;

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex justify-center">
          <iframe
            src={url}
            width={width}
            height={height}
            frameBorder="0"
            scrolling="no"
            title="Pinterest embed"
            className="rounded-xl border border-neutral-200 bg-white"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Abrir no Pinterest →
          </Link>
        </div>
      </div>
    </div>
  );
}
