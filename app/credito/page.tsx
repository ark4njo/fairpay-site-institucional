export const metadata = {
  title: "Crédito | FairPay",
  description:
    "Como a FairPay atua em operações de crédito e o que não faz, com foco em proteção jurídica e governança."
};

export default function CreditoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Crédito</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          Esta página descreve o escopo institucional: o que a FairPay viabiliza e o que não realiza,
          para alinhamento com parceiros, jurídico e compliance.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-base font-semibold">O que fazemos</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-600">
            <li>Infraestrutura e suporte à originação e elegibilidade</li>
            <li>Camadas de integração, automação e rastreabilidade</li>
            <li>Relacionamento B2B com parceiros habilitados</li>
            <li>Estruturação documental e alinhamento operacional</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-base font-semibold">O que não fazemos</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-600">
            <li><strong>Não concedemos crédito diretamente ao público</strong></li>
            <li>Não operamos como atendimento comercial ao consumidor final</li>
            <li>Não divulgamos ofertas, taxas, ou promessas de aprovação</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-base font-semibold">Nota</h2>
        <p className="mt-3 leading-relaxed text-neutral-600">
          Operações e condições específicas dependem de contratos, políticas, validações e do parceiro habilitado.
          Este site é institucional e informativo.
        </p>
      </section>
    </main>
  );
}
