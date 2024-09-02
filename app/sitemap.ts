import type { MetadataRoute } from 'next'


const COM_URL = 'https://www.ryannchandler.com'
const DEV_URL = 'https://www.ryannchandler.dev'
const POST_URL = '/posts/'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: COM_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        
    ]
}
