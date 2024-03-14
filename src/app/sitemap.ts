import { MetadataRoute } from 'next';
import { BASE_URL } from '../utils/const';
import { getAllBlogPosts } from '@lib/models/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostsSitemap = getBlogPostsSitemap();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPostsSitemap,
    {
      url: `${BASE_URL}/emoji`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/snippets`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

function getBlogPostsSitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();

  return blogPosts.map((blogPost) => ({
    url: `${BASE_URL}/blog/${blogPost.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
