import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mersinyazılıcd C:\Users\Deniz\Desktop\mersinyazilimm.com/sitemap.xml",
  };
}
