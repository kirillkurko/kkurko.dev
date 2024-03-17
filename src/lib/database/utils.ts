import { EmojiName } from '@app-types/EmojiName';

const BLOG_POST_VIEWS_PREFIX = 'blog-views';

export function getBlogPostViewsKey(slug: string) {
  return getEnvStorageKey(`${BLOG_POST_VIEWS_PREFIX}:${slug}`);
}

const EMOJI_PREFIX = 'emoji';

export function getEmojiKey(emojiName: EmojiName) {
  return getEnvStorageKey(`${EMOJI_PREFIX}:${emojiName}`);
}

function getEnvStorageKey(key: string) {
  const env = process.env.VERCEL_ENV;
  const envPrefix = env === 'production' ? 'production' : 'staging';

  return `${envPrefix}:${key}`;
}
