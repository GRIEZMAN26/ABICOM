import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = "https://www.abicom.cd";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/a-propos",
    "/produits",
    "/services",
    "/blog",
    "/galerie",
    "/telechargements",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
