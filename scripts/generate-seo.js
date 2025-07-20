import fs from 'fs';
import path from 'path';

// Configuration du site
const SITE_CONFIG = {
  baseUrl: 'https://avenement.com',
  lastmod: new Date().toISOString().split('T')[0], // Date actuelle au format YYYY-MM-DD
  routes: [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/services', changefreq: 'weekly', priority: '0.9' },
    { path: '/about', changefreq: 'monthly', priority: '0.7' },
    { path: '/contact', changefreq: 'monthly', priority: '0.8' },
    { path: '/services/multi-stream', changefreq: 'weekly', priority: '0.8' },
    { path: '/services/social-media', changefreq: 'weekly', priority: '0.8' },
    { path: '/services/events', changefreq: 'weekly', priority: '0.8' },
    { path: '/services/films', changefreq: 'weekly', priority: '0.8' },
    { path: '/services/website', changefreq: 'weekly', priority: '0.8' }
  ]
};

// Génération du sitemap.xml
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITE_CONFIG.routes.map(route => `  <url>
    <loc>${SITE_CONFIG.baseUrl}${route.path}</loc>
    <lastmod>${SITE_CONFIG.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Génération du robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml

# Disallow private areas
Disallow: /admin
Disallow: /private

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

  return robots;
}

// Fonction principale
function generateSEOFiles() {
  const publicDir = path.join(process.cwd(), 'public');
  const distDir = path.join(process.cwd(), 'dist');
  
  // Créer les dossiers s'ils n'existent pas
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Générer les fichiers dans public/
  const sitemapContent = generateSitemap();
  const robotsContent = generateRobots();
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  
  console.log('✅ sitemap.xml et robots.txt générés dans public/');
  
  // Si le dossier dist existe, copier les fichiers
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);
    console.log('✅ sitemap.xml et robots.txt copiés dans dist/');
  }
}

// Exécuter le script
generateSEOFiles();
