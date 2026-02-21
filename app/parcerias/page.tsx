import Link from "next/link";
import TikTokEmbed from "@/components/TikTokEmbed";

export default function ParceriasPage() {
  const emailGeral = "contato@fairpaytecnologia.com.br";
  const emailSuporte = "suporte@fairpaytecnologia.com.br";
  const emailFinanceiro = "financeiro@fairpaytecnologia.com.br";
  const emailJuridico = "juridico@fairpaytecnologia.com.br";
  const emailCompliance = "compliance@fairpaytecnologia.com.br";

  const instagramUrl = "https://www.instagram.com/fairpaymobile/";
  const facebookUrl = "https://www.facebook.com/share/1AZm6qlibu";
  const youtubeChannelUrl = "https://www.youtube.com/@fairpaymobile";

  // YouTube
  const youtubeVideoId = "PNkY7iIwfPE";

  // TikTok (link direto do vídeo que você enviou)
  const tiktokUrl = "https://www.tiktok.com/@fairpaymobile/video/7609121948496366864?is_from_webapp=1&sender_device=pc";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Parcerias</h1>
        <p className="mt-3 text-neutral-700">
          Atuamos com parceiros financeiros, fintechs/PSPs, integradores e originadores. O relacionamento é B2B,
          com foco em governança e operacionalização.
        </p>
      </header>

      <section className="mt-12 grid gap-10 lg:grid-cols-12">
        {/* COLUNA ESQUERDA – Vídeos */}
        <div className="lg:col-span-7 space-y-6">
          {/* YouTube */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold">Vídeo institucional</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Apresentação da FairPay Mobile e nossa proposta de infraestrutura digital.
              </p>
            </div>

            <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="FairPay Mobile — YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-6 flex justify-between items-center">
              <Link
                href={youtubeChannelUrl}
                target="_blank"
                className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                Ver canal no YouTube →
              </Link>
            </div>
          </div>

          {/* TikTok */}
          <TikTokEmbed url={tiktokUrl} title="TikTok FairPay Mobile" />
        </div>

        {/* COLUNA DIREITA – Contatos */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Para quem é</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
              <li>Fintechs / PSPs / integradores</li>
              <li>Fundos / originadores / correspondentes habilitados</li>
              <li>Times de compliance e jurídico</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Contato institucional</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Para parcerias, integrações e tratativas B2B, utilize os canais abaixo.
            </p>

            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${emailGeral}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Contato geral — {emailGeral}
              </a>

              <a
                href={`mailto:${emailSuporte}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Suporte — {emailSuporte}
              </a>

              <a
                href={`mailto:${emailFinanceiro}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Financeiro — {emailFinanceiro}
              </a>

              <a
                href={`mailto:${emailJuridico}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Jurídico — {emailJuridico}
              </a>

              <a
                href={`mailto:${emailCompliance}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Compliance — {emailCompliance}
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href={instagramUrl} target="_blank" className="rounded-xl border px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                Instagram
              </Link>

              <Link href={facebookUrl} target="_blank" className="rounded-xl border px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                Facebook
              </Link>

              <Link href={youtubeChannelUrl} target="_blank" className="sm:col-span-2 rounded-xl border px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                YouTube
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
