import Image from "next/image";

export const metadata = {
  title: "Parcerias | FairPay",
  description:
    "Parcerias institucionais para originação, integração e estruturação de operações com governança."
};

export default function ParceriasPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Parcerias</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          Atuamos com parceiros financeiros, fintechs/PSPs, integradores e originadores.
          O relacionamento é B2B, com foco em governança e operacionalização.
        </p>
      </header>

      <section className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/fachada-358.png"
              alt="Sede e referência física da FairPay"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Para quem é</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-600">
            <li>Fintechs / PSPs / integradores</li>
            <li>Fundos / originadores / correspondentes habilitados</li>
            <li>Times de compliance e jurídico</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-base font-semibold">Contato institucional</h3>
            <p className="mt-2 text-neutral-600">
              Defina um e-mail institucional (ex.: <strong>contato@</strong> ou <strong>parcerias@</strong>)
              e substitua aqui quando estiver pronto.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              (Se você já tiver o e-mail do Google Workspace, eu já deixo o site com o link pronto.)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
