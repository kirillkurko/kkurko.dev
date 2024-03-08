'use server';
import { trackView } from '@lib/models/blog';

export async function trackBlogPostView(slug: string) {
  return trackView(slug);
}
