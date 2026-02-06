import Link from "next/link";

const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/credito", label: "Crédito" },
  { href: "/parcerias", label: "Parcerias" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">FairPay</span>
          <span className="text-sm text-neutral-500">Tecnologia Ltda</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-neutral-950"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
