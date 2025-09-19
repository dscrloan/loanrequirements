import { STATES, CITIES, TOPICS } from './router';

export interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export function generateSitemapUrls(): SitemapUrl[] {
  const baseUrl = 'https://dscrloanrequirements.com';
  const today = new Date().toISOString().split('T')[0];
  const urls: SitemapUrl[] = [];

  // Home page
  urls.push({
    url: `${baseUrl}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // Sitemap page
  urls.push({
    url: `${baseUrl}/sitemap`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.3'
  });

  // State hub pages
  Object.keys(STATES).forEach(stateKey => {
    urls.push({
      url: `${baseUrl}/states/${stateKey}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // City overview pages
  Object.entries(CITIES).forEach(([stateKey, cities]) => {
    cities.forEach(city => {
      urls.push({
        url: `${baseUrl}/states/${stateKey}/${city}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.7'
      });
    });
  });

  // City topic pages
  Object.entries(CITIES).forEach(([stateKey, cities]) => {
    cities.forEach(city => {
      TOPICS.forEach(topic => {
        urls.push({
          url: `${baseUrl}/states/${stateKey}/${city}/${topic}`,
          lastmod: today,
          changefreq: 'weekly',
          priority: '0.6'
        });
      });
    });
  });

  return urls;
}

export function generateSitemapXML(): string {
  const urls = generateSitemapUrls();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = urls.map(url => {
    return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`;
}

export function getSitemapStats() {
  const urls = generateSitemapUrls();
  return {
    totalUrls: urls.length,
    statePages: Object.keys(STATES).length,
    cityPages: Object.values(CITIES).flat().length,
    topicPages: Object.values(CITIES).flat().length * TOPICS.length,
    lastGenerated: new Date().toISOString()
  };
}