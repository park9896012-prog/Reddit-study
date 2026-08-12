import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

app.use(express.json());

// SEO: robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/sitemap.xml
`);
});

// SEO: sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaplogs.com/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ko" href="https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/?lang=ko"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/?lang=en"/>
  </url>
  <url>
    <loc>https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/#glossary</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/#guide</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/#usecases</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ais-dev-7y3cw7ejinm6v45b7klpn3-592087418000.asia-northeast1.run.app/#faq</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`);
});

// Favicon handler
app.get(["/favicon.ico", "/favicon.svg"], (req, res) => {
  res.type("image/svg+xml");
  res.send(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#FF4500" />
    <circle cx="35" cy="45" r="7" fill="#FFFFFF" />
    <circle cx="65" cy="45" r="7" fill="#FFFFFF" />
    <path d="M 32 62 Q 50 78 68 62" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none" />
    <circle cx="78" cy="22" r="6" fill="#FFFFFF" />
    <line x1="50" y1="28" x2="74" y2="24" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
  </svg>`);
});

// API Info endpoint
app.get("/api/info", (req, res) => {
  res.json({
    title: "Reddit 쉽게 이해하고 활용하기 (Mastering Reddit Guide)",
    version: "1.0.0",
    contactEmail: "ju9896012@gmail.com",
    languages: ["ko", "en"],
    adsenseReady: true,
    adsensePolicyCompliant: {
      hasOriginalContent: true,
      hasPrivacyPolicy: true,
      hasTermsOfService: true,
      hasContactInfo: true,
      hasAdPlaceholders: true,
      copyrightFreeAssets: true
    }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
}

startServer();
