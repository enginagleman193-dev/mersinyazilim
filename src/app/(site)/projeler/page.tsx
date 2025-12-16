export const metadata = { title: "Projeler" };

const projects = [
  {
    name: "Mersin Korkmaz Nakliyat",
    url: "https://www.mersinkorkmaznakliyat.com",
    desc: "Kurumsal tanıtım ve iletişim odaklı web sitesi.",
  },
  {
    name: "Mersin Hizan Evden Eve Nakliyat",
    url: "https://www.mersinhizanevdenevenakliyat.com.tr",
    desc: "Yerel müşteri kitlesine yönelik sade ve güven veren yapı.",
  },
  {
    name: "Mersin Kardeşler Nakliyat",
    url: "https://www.mersinkardeslernakliyat.com",
    desc: "Mobil uyumlu, hizmet odaklı kurumsal web sitesi.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Projeler</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Daha önce teslim ettiğimiz projelerden bazı örnekler. Referanslarımız gerçek sitelerdir.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:bg-gray-50"
          >
            <div className="font-semibold">{p.name}</div>
            <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            <div className="mt-4 text-xs text-gray-500 underline">Siteyi görüntüle</div>
          </a>
        ))}
      </div>
    </main>
  );
}
