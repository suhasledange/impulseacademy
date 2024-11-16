import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const generateSitemap = async () => {
  const baseUrl = 'https://impulse-academy.in';

  const routes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/courses', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/blogs', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  ];

  const sitemapStream = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

  routes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());

  writeStream.write(sitemap);
  writeStream.end();
  console.log('Sitemap generated at ./public/sitemap.xml');
};

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err);
});
