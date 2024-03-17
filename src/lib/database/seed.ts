import { getBlogPostViewsKey, getEmojiKey } from '@lib/database/utils';
import { client } from '@lib/database/client';
import { EmojiName } from '../../types/EmojiName';

export async function seed() {
  console.log('Seed blog post views');
  await seedBlogPostViews();

  console.log('Seed emoji');
  await seedEmoji();
}

const BLOG_POST_VIEW_DATA: Record<string, number> = {
  'big-tech-interview-experience': 31,
  'direct-messages-should-be-dead': 11,
  'fastest-flutter-vs-react-native-comparison': 11,
  'how-to-keep-your-inbox-under-control': 71,
  'how-to-use-amplitude-with-react-native': 27,
  'i-write-big-react-components': 2,
  'improve-your-imports-with-typescript-path-aliases': 25,
  'one-more-article-about-use-effect-hook': 15,
  'penguin-mentality-employee': 13,
  'slack-communication-tips': 7,
  'stay-up-to-date-with-dependabot-on-gitlab': 47,
  'the-shortcut-that-revolutionized-my-workflow': 39,
  'values-abilities-skills': 135,
  'why-i-started-my-blog': 19,
};

async function seedBlogPostViews() {
  for (const [slug, views] of Object.entries(BLOG_POST_VIEW_DATA)) {
    console.log(`Seed blog post view for slug: ${slug}`);
    await client.set(getBlogPostViewsKey(slug), views);
  }
}

const EMOJI_DATA: Record<EmojiName, number> = {
  [EmojiName.WavingHand]: 132,
  [EmojiName.Fire]: 5763,
  [EmojiName.Rocket]: 148,
  [EmojiName.Ship]: 46,
  [EmojiName.Penguin]: 164,
  [EmojiName.Laptop]: 102,
  [EmojiName.RedHeart]: 29,
  [EmojiName.RollingOnTheFloorLaughing]: 22,
  [EmojiName.Dog]: 47,
};

async function seedEmoji() {
  for (const [emojiName, value] of Object.entries(EMOJI_DATA)) {
    console.log(`Seed emoji with name: ${emojiName}`);
    await client.set(getEmojiKey(emojiName as EmojiName), value);
  }
}
