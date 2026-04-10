import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://praxis-core.koydo.app/sitemap.xml",
    host: "https://praxis-core.koydo.app",
  };
}
