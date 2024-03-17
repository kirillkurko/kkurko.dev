'use server';
import { updateEmojiUpvoteCount } from '@lib/models/emoji';
import { EmojiName } from '../../types/EmojiName';

export async function upvoteEmoji(emoji: EmojiName, upvoteCount: number) {
  return updateEmojiUpvoteCount(emoji, upvoteCount);
}
