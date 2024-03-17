import { allBlogs } from '@contentlayer/generated';
import { unstable_noStore as noStore } from 'next/cache';
import { client } from '@lib/database/client';
import { getBlogPostViewsKey } from '@lib/database/utils';

export function getAllBlogPosts() {
  return allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function getBlogPostViews(slug: string) {
  noStore();

  const key = getBlogPostViewsKey(slug);
  const viewsCount = await client.get<number>(key);

  return { [slug]: viewsCount ?? 0 };
}

export async function trackView(slug: string) {
  const key = getBlogPostViewsKey(slug);
  await client.incr(key);
}
