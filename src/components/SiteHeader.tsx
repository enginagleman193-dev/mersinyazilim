import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Mersin Yazılım"
            width={40}
            height={40}
            priority
          />
          <span className="text-sm font-semibold tracking-tight">
            Mersin Yazılım
          </span>
        </Link>

        {/* MENÜ */}
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/projeler">Projeler</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>

        {/* CTA */}
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