import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "İletişim" };

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
        İletişim
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Formu doldurun, en kısa sürede dönüş yapalım. İsterseniz WhatsApp üzerinden de yazabilirsiniz.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ContactForm />

        <div className="rounded-2xl border p-6">
          <div className="font-semibold">Hızlı İletişim</div>

          <div className="mt-4 grid gap-2 text-sm text-gray-700">
            <div>
              <span className="text-gray-500">Telefon:</span> +90 531 841 03 47
            </div>
            <div>
              <span className="text-gray-500">E-posta:</span> mersinyazilim1@gmail.com
            </div>
            <div>
              <span className="text-gray-500">Bölge:</span> Mersin Merkez (Yenişehir / Mezitli / Akdeniz çevresi)
            </div>
            <div>
              <span className="text-gray-500">Çalışma:</span> Pzt-Cmt 09:00-19:00
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            Not: “Google Haritalar işletme kaydı” istiyorsanız işletme adınızı ve mevcut konumunuzu yazmanız yeterli.
          </div>

          <div className="mt-6">
            <Link
              href="/hizmetler"
              className="inline-flex rounded-xl border bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Hizmetleri Gör
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
