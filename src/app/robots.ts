import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://xn--mersinyazlm-7zbb.com/sitemap.xml",
  };
}
