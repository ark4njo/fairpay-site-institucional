import Link from "next/link";

export default function ParceriasPage() {
  const emailGeral = "contato@fairpaytecnologia.com.br";
  const emailSuporte = "suporte@fairpaytecnologia.com.br";
  const emailFinanceiro = "financeiro@fairpaytecnologia.com.br";
  const emailJuridico = "juridico@fairpaytecnologia.com.br";
  const emailCompliance = "compliance@fairpaytecnologia.com.br";

  const instagramUrl = "https://www.instagram.com/fairpaymobile/";
  const facebookUrl = "https://www.facebook.com/share/1AZm6qlibu";
  const youtubeChannelUrl = "https://www.youtube.com/@fairpaymobile";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contato / Parcerias</h1>
        <p className="mt-3 text-neutral-700">
          Canais institucionais para parcerias, integrações e tratativas B2B.
        </p>
      </header>

      <section className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Para quem é</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
              <li>Fintechs / PSPs / integradores</li>
              <li>Fundos / originadores / correspondentes habilitados</li>
              <li>Times de compliance e jurídico</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Redes oficiais</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                Instagram
              </Link>
              <Link href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                Facebook
              </Link>
              <Link href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50 sm:col-span-2">
                YouTube
              </Link>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">E-mails institucionais</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Use o canal mais adequado para agilizar o atendimento.
            </p>

            <div className="mt-4 space-y-3">
              <a href={`mailto:${emailGeral}`} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                <span>Contato geral</span>
                <span className="text-neutral-700">{emailGeral}</span>
              </a>
              <a href={`mailto:${emailSuporte}`} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                <span>Suporte</span>
                <span className="text-neutral-700">{emailSuporte}</span>
              </a>
              <a href={`mailto:${emailFinanceiro}`} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                <span>Financeiro</span>
                <span className="text-neutral-700">{emailFinanceiro}</span>
              </a>
              <a href={`mailto:${emailJuridico}`} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                <span>Jurídico</span>
                <span className="text-neutral-700">{emailJuridico}</span>
              </a>
              <a href={`mailto:${emailCompliance}`} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50">
                <span>Compliance</span>
                <span className="text-neutral-700">{emailCompliance}</span>
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
