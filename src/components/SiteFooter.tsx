import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-tight text-gray-900">Mersin Yazılım</div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri.
              Sade, hızlı ve güven veren bir dijital yapı kuruyoruz.
            </p>

            <div className="mt-5 inline-flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="rounded-full border bg-gray-50 px-3 py-1">Mobil Uyumlu</span>
              <span className="rounded-full border bg-gray-50 px-3 py-1">Hız Odaklı</span>
              <span className="rounded-full border bg-gray-50 px-3 py-1">Lokal Görünürlük</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Hızlı Linkler</div>
            <div className="mt-3 grid gap-2 text-sm text-gray-600">
              <Link className="hover:text-gray-900" href="/">
                Ana Sayfa
              </Link>
              <Link className="hover:text-gray-900" href="/hizmetler">
                Hizmetler
              </Link>
              <Link className="hover:text-gray-900" href="/projeler">
                Projeler
              </Link>
              <Link className="hover:text-gray-900" href="/iletisim">
                İletişim
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-900">İletişim</div>
            <div className="mt-3 grid gap-2 text-sm text-gray-600">
              <div>
                <span className="text-gray-500">Telefon:</span> +90 531 841 03 47
              </div>
              <div>
                <span className="text-gray-500">E-posta:</span> mersinyazilim1@gmail.com
              </div>
              <div>
                <span className="text-gray-500">Bölge:</span> Mersin Merkez (Yenişehir / Mezitli / Akdeniz)
              </div>
            </div>

            <a
              href="https://wa.me/905318410347?text=Merhaba%2C%20mersinyazilim.com%20%C3%BCzerinden%20yaz%C4%B1yorum.%20Bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              WhatsApp’tan Yaz
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Mesajlara mesai saatleri içinde hızlı dönüş yapılır.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Mersin Yazılım. Tüm hakları saklıdır.</div>

          {/* Aslan Medya attribution (isteğin doğrultusunda) */}
          <a
            href="https://wa.me/905318410347"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900"
          >
            Aslan Medya – WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
