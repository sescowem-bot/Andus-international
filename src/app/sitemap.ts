import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://andusinternationalng.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/financial-services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/oil-gas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/real-estate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/automobile-logistics`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/agriculture`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/general-contracting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/cac-registration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loan-application`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/investment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
