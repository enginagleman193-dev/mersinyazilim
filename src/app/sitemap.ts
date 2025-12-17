import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mersinyazılım.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projeler`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
    },
  ];
}
