import type { MetadataRoute } from 'next'
import { allPostsForSitemapQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/fetch'

const COM_URL = 'https://www.ryannchandler.com'
const DEV_URL = 'https://www.ryannchandler.dev'
const POST_URL = '/posts/'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const results = await sanityFetch({
        query: allPostsForSitemapQuery,
        perspective: "published",
        stega: false,
      });

      const mapped_results: MetadataRoute.Sitemap = results.map((post: any) => ({
        url: `${DEV_URL}${POST_URL}${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8
    }))
      
    return [
        {
            url: DEV_URL,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1
        },
        ...mapped_results
    ]
}
