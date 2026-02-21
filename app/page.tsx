import Link from "next/link";
import PinterestEmbed from "@/components/PinterestEmbed";
import TikTokEmbed from "@/components/TikTokEmbed";

export default function HomePage() {
  // =========================
  // LINKS (troque quando quiser)
  // =========================
  const youtubeVideoId = "PNkY7iIwfPE"; // Jingle oficial
  const tiktokUrl =
    "https://www.tiktok.com/@fairpaymobile/video/7609121948496366864?is_from_webapp=1&sender_device=pc";

  // Aqui é onde você vai trocar para LINKS DIRETOS (post específico), não perfil:
  // Cole o link do REELS/post do Instagram e o link do post/vídeo do Facebook.
  const instagramPostUrl = "https://www.instagram.com/fairpaymobile/"; // TROCAR PELO LINK DO VÍDEO
  const facebookPostUrl = "https://www.facebook.com/share/1AZm6qlibu"; // TROCAR PELO LINK DO VÍDEO
  const youtubeChannelUrl = "https://www.youtube.com/@fairpaymobile";
  const pinterestPinId = "1137088605936429474";
  const pinterestPinUrl = "https://br.pinterest.com/pin/1137088605936429474/";
  // =========================

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">FairPay Tecnologia Ltda</h1>
        <p className="mt-3 text-neutral-700">
          Infraestrutura digital para operações B2B: integração, governança e operacionalização.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/parcerias" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
            Contato / Parcerias →
          </Link>
          <Link href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
            YouTube →
          </Link>
        </div>
      </header>

      {/* ====== SEÇÃO: VÍDEOS (HOME) ====== */}
      <section className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          {/* YouTube - Jingle oficial */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold">Jingle oficial (2026)</h2>
              <p className="mt-2 text-sm text-neutral-600">
                FairPay Mobile — peça oficial do canal.
              </p>
            </div>

            <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="FairPay Mobile | Jingle 2026"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-6 flex flex-wrap items-center gap-3">
              <Link href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                Ver canal no YouTube →
              </Link>
              <Link href={instagramPostUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                Ver este vídeo no Instagram →
              </Link>
              <Link href={facebookPostUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                Ver este vídeo no Facebook →
              </Link>
            </div>
          </div>

          {/* TikTok */}
          <TikTokEmbed
            url={tiktokUrl}
            title="TikTok (conteúdo em destaque)"
            subtitle="Vídeo em destaque do @fairpaymobile."
          />
           {/* Pinterest */}
          <PinterestEmbed
  pinId={pinterestPinId}
  pinUrl={pinterestPinUrl}
  title="Pinterest (pin em destaque)"
  subtitle="Coleção visual — FairPay Mobile | Jingle 2026."
  size="medium"
/>
        </div>

        {/* Coluna direita - CTA institucional */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Quer integrar com a FairPay?</h3>
            <p className="mt-3 text-neutral-700">
              Para parcerias, integrações técnicas e tratativas B2B, acesse a página de contato.
            </p>
            <div className="mt-5">
              <Link href="/parcerias" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                Ir para Contato / Parcerias →
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
