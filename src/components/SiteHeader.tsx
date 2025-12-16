import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo dosyası: public/logo.png */}
          <Image src="/logo.png" alt="Mersin Yazılım" width={36} height={36} priority />
          <span className="font-semibold tracking-tight">Mersin Yazılım</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim"
          className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}
