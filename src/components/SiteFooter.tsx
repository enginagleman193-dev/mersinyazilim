import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold">Mersin Yazılım</div>
          <p className="mt-2 text-sm text-gray-600">
            Web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri.
            Sade, hızlı ve güven veren dijital yapı.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-medium">Hızlı Linkler</div>
          <div className="mt-2 grid gap-2 text-gray-600">
            <Link href="/hizmetler">Hizmetler</Link>
            <Link href="/projeler">Projeler</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-medium">İletişim</div>
          <div className="mt-2 grid gap-2 text-gray-600">
            <div>+90 531 841 03 47</div>
            <div>mersinyazilim1@gmail.com</div>
            <div>Mersin Merkez (Yenişehir / Mezitli / Akdeniz çevresi)</div>

            {/* Aslan Medya WhatsApp linki */}
            <a
              href="https://wa.me/905318410347?text=Merhaba%2C%20Mersin%20Yaz%C4%B1l%C4%B1m%20sitesi%20%C3%BCzerinden%20yaz%C4%B1yorum."
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
            >
              Aslan Medya – WhatsApp
            </a>

            <div className="pt-2 text-xs text-gray-500">
              © {new Date().getFullYear()} Mersin Yazılım
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
