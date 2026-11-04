import type { APIRoute } from 'astro';
import { routes, url } from '../lib/i18n';

// One entry per page, with its English and French versions linked to each other.
export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).toString();
  const items = routes.flatMap((r) =>
    (['en', 'fr'] as const).map((lang) => `  <url>
    <loc>${abs(url(lang, r))}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(url('en', r))}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${abs(url('fr', r))}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(url('en', r))}"/>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${items.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
