import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Mersin’de İşinizi Dijitale Taşıyın.
          </h1>
          <p className="mt-4 text-gray-600">
            Web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleriyle
            daha görünür, daha ulaşılabilir olun. Sade, hızlı ve güven veren bir
            dijital yapı kuruyoruz.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/iletisim"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Teklif Al
            </Link>
            <Link
              href="/hizmetler"
              className="rounded-xl border px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Hizmetlere Bak
            </Link>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            Not: Fiyatı sitede yazmıyoruz. İhtiyaca göre kapsamı netleştirip en doğru çözümü öneriyoruz.
          </div>
        </div>

        <div className="rounded-2xl border bg-gray-50 p-6">
          <div className="text-sm font-medium">Hızlı Özet</div>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl bg-white p-4 text-sm">
              Kurumsal web sitesi (mobil uyumlu, hızlı, iletişim odaklı)
            </div>
            <div className="rounded-xl bg-white p-4 text-sm">
              Google Haritalar işletme kaydı (kurulum + optimizasyon)
            </div>
            <div className="rounded-xl bg-white p-4 text-sm">
              Temel SEO (lokal görünürlük için teknik temel)
            </div>
          </div>

          <Link
            href="/iletisim"
            className="mt-5 inline-flex w-full justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Ücretsiz Ön Analiz İste
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Nasıl Çalışıyoruz?
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          Süreç net, iletişim hızlı. İşin kapsamını birlikte belirler, teslimatı adım adım yönetiriz.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              t: "1) İhtiyaç Analizi",
              d: "Hedef, sektör ve mevcut durum netleşir. Sayfa yapısı belirlenir.",
            },
            {
              t: "2) Tasarım & İçerik",
              d: "Kurumsal görünüm hazırlanır. Metinler sade ve anlaşılır şekilde düzenlenir.",
            },
            {
              t: "3) Yayın & Kontrol",
              d: "Hız, mobil uyum ve iletişim kanalları test edilir. Yayına alınır.",
            },
            {
              t: "4) Destek",
              d: "Gerekli güncellemeler ve iyileştirmeler için hızlı destek sağlanır.",
            },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border p-6">
              <div className="font-semibold">{i.t}</div>
              <p className="mt-2 text-sm text-gray-600">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section className="mt-16 rounded-2xl border bg-gray-50 p-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Önceki Projeler
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Gerçek teslim edilmiş projeler üzerinden ilerleriz.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { name: "Mersin Korkmaz Nakliyat", url: "https://www.mersinkorkmaznakliyat.com" },
            { name: "Mersin Hizan Evden Eve Nakliyat", url: "https://www.mersinhizanevdenevenakliyat.com.tr" },
            { name: "Mersin Kardeşler Nakliyat", url: "https://www.mersinkardeslernakliyat.com" },
          ].map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white p-4 text-sm hover:bg-gray-100"
            >
              <div className="font-medium">{p.name}</div>
              <div className="mt-1 text-xs text-gray-500 underline">Siteyi görüntüle</div>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/projeler"
            className="inline-flex rounded-xl border bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Tüm Projeleri Gör
          </Link>
        </div>
      </section>
    </main>
  );
}
