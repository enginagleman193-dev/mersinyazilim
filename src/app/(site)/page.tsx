import Link from "next/link";

export const metadata = {
  title: "Mersin Yazılım | Web Sitesi • Google Haritalar • SEO",
  description:
    "Mersin’de web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri. Sade, hızlı ve güven veren dijital yapı.",
};

<section className="sr-only">
  <h2>Mersin Web Tasarım ve Dijital Çözümler</h2>
  <p>
    Mersin Yazılım, Yenişehir, Mezitli ve Akdeniz bölgelerinde
    kurumsal web sitesi, Google Haritalar işletme kaydı ve
    temel SEO hizmetleri sunar.
  </p>
</section>

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gray-200 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-gray-200 blur-3xl" />
        </div>

        <div className="relative max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            <span className="text-gray-900">Mersin’de</span> İşinizi Dijitale Taşıyın.
          </h1>

          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Web sitesi, Google Haritalar işletme kaydı ve temel SEO ile daha görünür,
            daha ulaşılabilir olun. Sade, hızlı ve güven veren bir dijital yapı kuruyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Ön Görüşme Talep Et
            </Link>

            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Hizmetleri Gör
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Not: Fiyatı sitede yazmıyoruz. İhtiyaca göre kapsamı netleştirip en doğru çözümü öneriyoruz.
          </p>
        </div>
      </section>

      {/* 3 KART */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Card
          title="Kurumsal Web Sitesi"
          desc="Mobil uyumlu, hızlı, iletişim odaklı. Müşterinizin güven duyacağı temiz bir vitrin."
        />
        <Card
          title="Google Haritalar Kaydı"
          desc="Kurulum ve optimizasyon. Yerel aramalarda daha görünür olmanız için doğru yapılandırma."
        />
        <Card
          title="Temel SEO"
          desc="Teknik temel, sayfa hızı ve içerik yapısı. Lokal görünürlük için sağlam başlangıç."
        />
      </section>

      {/* NASIL ÇALIŞIYORUZ */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          Nasıl Çalışıyoruz?
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          Süreç net, iletişim hızlı. İşin kapsamını birlikte belirler, teslimatı adım adım yönetiriz.
        </p>

        <div className="mt-8 grid gap-4">
          <Step
            no="1"
            title="İhtiyaç Analizi"
            desc="Hedef, sektör ve mevcut durum netleşir. Sayfa yapısı belirlenir."
          />
          <Step
            no="2"
            title="Tasarım & İçerik"
            desc="Kurumsal görünüm hazırlanır. Metinler sade ve anlaşılır şekilde düzenlenir."
          />
          <Step
            no="3"
            title="Yayın & Kontrol"
            desc="Hız, mobil uyum ve iletişim kanalları test edilir. Yayına alınır."
          />
          <Step
            no="4"
            title="Destek"
            desc="Gerekli güncellemeler ve iyileştirmeler için hızlı destek sağlanır."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl border bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-900">
              Hazır mısınız? Kısa bir ön görüşme yapalım.
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Mersin Merkez: Yenişehir / Mezitli / Akdeniz çevresi
            </div>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Ön Görüşme Talep Et
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================== */
/* BİLEŞENLER         */
/* ================== */

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="font-semibold text-gray-900">{title}</div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Step({
  no,
  title,
  desc,
}: {
  no: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-gray-900">
        {no}. {title}
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
