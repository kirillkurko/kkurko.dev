import { EmojiName } from '@app-types/EmojiName';

const BLOG_POST_VIEWS_PREFIX = 'blog-views';

export function getBlogPostViewsKey(slug: string) {
  return `${BLOG_POST_VIEWS_PREFIX}:${slug}`;
}

const EMOJI_PREFIX = 'emoji';

export function getEmojiKey(emojiName: EmojiName) {
  return `${EMOJI_PREFIX}:${emojiName}`;
}
