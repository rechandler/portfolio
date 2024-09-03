import type { MetadataRoute } from 'next'
import { allPostsForSitemapQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/fetch'

const COM_URL = 'https://www.ryannchandler.com'
const DEV_URL = 'https://www.ryannchandler.dev'
const POST_URL = 'posts'

export async function GET(props: any): Promise<Response> {

  const host = props.headers.get('host')
  const url = host.includes('.dev') ? DEV_URL : COM_URL
  const posts = await sanityFetch({
      query: allPostsForSitemapQuery,
      perspective: "published",
      stega: false,
    });

  return new Response(generateSiteMap(url, posts), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function generateSiteMap(url: string, posts: any) {
  const date = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${url}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
      </url>
      <url>
        <loc>${url}/${POST_URL}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
     ${posts.map((post: any) => {
      return `
        <url>
          <loc>${url}/${POST_URL}/${post.slug}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
     })
       .join('')}
   </urlset>
 `;
}
