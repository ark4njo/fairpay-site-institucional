import Image from "next/image";

export const metadata = {
  title: "Quem Somos | FairPay Tecnologia Ltda",
  description:
    "A FairPay atua com infraestrutura financeira, tecnologia e parcerias para viabilizar operações de crédito com governança e critério."
};

export default function QuemSomosPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Quem Somos</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          A FairPay Tecnologia Ltda (nome fantasia: <strong>FAIRPAY MOBILE</strong>) atua na interseção entre
          tecnologia, originação e parcerias financeiras — com foco em governança, integridade operacional e estruturação.
        </p>
      </header>

      {/* Escultura */}
      <section className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/escultura.png"
              alt="Escultura institucional do globo FairPay na sede"
              width={1400}
              height={1800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Presença física e identidade</h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Nossa operação é orientada a processos, documentação e relacionamento B2B.
            O site tem caráter institucional: serve como lastro de governança e validação.
          </p>

          <dl className="mt-6 grid gap-4 rounded-2xl border border-neutral-200 p-6">
            <div>
              <dt className="text-sm font-medium text-neutral-500">Razão social</dt>
              <dd className="mt-1 text-neutral-800">FairPay Tecnologia Ltda</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-neutral-500">Nome fantasia</dt>
              <dd className="mt-1 text-neutral-800">FAIRPAY MOBILE</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-neutral-500">CNAE principal</dt>
              <dd className="mt-1 text-neutral-800">
                66.19-3-99 – Atividades auxiliares dos serviços financeiros
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Fachada */}
      <section className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Sede e referência</h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Mantemos presença física e estrutura compatível com a necessidade de relacionamento institucional,
            compliance e documentação.
          </p>

          <div className="mt-6 rounded-2xl border border-neutral-200 p-6">
            <p className="text-sm text-neutral-600">
              <strong>Nota jurídica:</strong> A FairPay não concede crédito diretamente ao público.
              Atua como infraestrutura, originação e parcerias, conforme desenho de operação e acordos firmados
              com instituições e agentes habilitados.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/fachada-358.png"
              alt="Fachada da FairPay com número 358"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cafair */}
      <section className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/cafair.png"
              alt="Cafair — espaço interno de convivência"
              width={1200}
              height={1600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Cultura e rotina</h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            O Cafair é um espaço interno de convivência e apoio à rotina operacional.
            Ele reforça um ponto simples: existe time, ambiente e continuidade.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-base font-semibold">Princípios</h3>
              <ul className="mt-3 list-disc pl-5 text-neutral-600">
                <li>Governança e rastreabilidade</li>
                <li>Critério técnico e integridade</li>
                <li>Parcerias B2B com responsabilidade</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-base font-semibold">Contato institucional</h3>
              <p className="mt-2 text-neutral-600">
                Use o canal institucional disponível na página <strong>Parcerias</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
