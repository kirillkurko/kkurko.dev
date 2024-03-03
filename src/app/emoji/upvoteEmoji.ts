'use server';
import { EmojiName, updateEmojiUpvoteCount } from '@lib/models/emoji';

export async function upvoteEmoji(emoji: EmojiName, upvoteCount: number) {
  return updateEmojiUpvoteCount(emoji, upvoteCount);
}
