import Link from "next/link";

export const metadata = { title: "Hizmetler" };

const services = [
  {
    title: "Kurumsal Web Sitesi",
    items: [
      "Mobil uyumlu, hızlı ve sade tasarım",
      "İletişim/teklif odaklı sayfa kurgusu",
      "Temel teknik SEO altyapısı",
      "Yayına alma ve son kontroller",
    ],
  },
  {
    title: "Google Haritalar İşletme Kaydı",
    items: [
      "Kurulum ve doğrulama süreci desteği",
      "Kategori, açıklama ve hizmet alanı düzeni",
      "Görünürlük için temel profil optimizasyonu",
      "İşletme profili genel kontrol listesi",
    ],
  },
  {
    title: "Temel SEO (Lokal Görünürlük)",
    items: [
      "Başlık/metadata düzeni",
      "Site içi sayfa yapısı ve hız kontrolleri",
      "Yerel anahtar kelime odaklı içerik düzeni",
      "Google Search Console temel kurulum yönlendirmesi",
    ],
  },
  {
    title: "Bakım & Destek",
    items: [
      "İçerik güncelleme desteği",
      "Hız ve performans iyileştirmeleri",
      "Teknik sorunlarda hızlı müdahale",
      "Düzenli kontrol ve öneri",
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Hizmetler</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        İhtiyacınıza göre kapsamı netleştirir, size en doğru çözümü öneririz.
        Fiyatı sitede paylaşmıyoruz; önce hedefi ve işi anlayıp plan çıkarıyoruz.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-gray-50 p-6">
        <div className="font-semibold">Hızlı Başlangıç</div>
        <p className="mt-2 text-sm text-gray-600">
          Kısaca işletmenizi, hedefinizi ve mevcut durumunuzu yazın. Size en doğru yol haritasını iletelim.
        </p>
        <div className="mt-4">
          <Link
            href="/iletisim"
            className="inline-flex rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}
