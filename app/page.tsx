import Image from "next/image";
import Link from "next/link";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>;
}

export default function HomePage() {
  return (
    <main>
      {/* HERO: Prova de existência */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-semibold tracking-tight">
              Infraestrutura financeira para originação e estruturação de crédito
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              A FairPay atua na interseção entre tecnologia, análise e parcerias financeiras para viabilizar
              operações de crédito com governança, critério e sustentabilidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/parcerias"
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:border-neutral-900"
              >
                Parcerias institucionais
              </Link>
              <Link
                href="/credito"
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:border-neutral-900"
              >
                Como atuamos em crédito
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <Image
                src="/images/fachada-358.png"
                alt="Fachada da FairPay com número 358"
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Imagem institucional — sede e referência física.
            </p>
          </div>
        </div>
      </section>

      {/* Escultura: identidade */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <Image
                src="/images/escultura.png"
                alt="Escultura do globo FairPay na sede"
                width={1200}
                height={1400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionTitle>Governança, critério e parceria</SectionTitle>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Nosso posicionamento é institucional: processos, documentação e relacionamento B2B.
              O site funciona como peça de governança e validação.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 p-6">
                <div className="text-sm font-semibold">Originação</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Estruturação de fluxo e elegibilidade com rastreabilidade.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6">
                <div className="text-sm font-semibold">Tecnologia</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Integração, automação e camadas de controle operacional.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6">
                <div className="text-sm font-semibold">Parcerias</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Relações com fintechs, integradores e agentes habilitados.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/quem-somos" className="text-sm font-medium underline underline-offset-4">
                Ver Quem Somos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
