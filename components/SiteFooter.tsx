export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold">FairPay Tecnologia Ltda</div>
          <div className="mt-2 text-sm text-neutral-600">
            Nome fantasia: <strong>FAIRPAY MOBILE</strong>
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            CNAE principal: 66.19-3-99 – Atividades auxiliares dos serviços financeiros
          </div>
        </div>

        <div className="text-sm text-neutral-600">
          <div className="font-semibold text-neutral-900">Aviso institucional</div>
          <p className="mt-2 leading-relaxed">
            A FairPay atua com infraestrutura, originação e parcerias para viabilizar operações de crédito
            com governança e critério. A FairPay <strong>não concede crédito diretamente ao público</strong>.
          </p>
          <p className="mt-3 leading-relaxed">
            Este site possui caráter institucional e informativo.
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6">
        <div className="mx-auto max-w-6xl px-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} FairPay Tecnologia Ltda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
