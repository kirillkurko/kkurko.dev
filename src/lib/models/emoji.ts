import { getEmojiKey } from '@lib/database/utils';
import { client } from '@lib/database/client';
import { EmojiName } from '@app-types/EmojiName';

export async function getAllEmojis() {
  const emojiNames = Object.values(EmojiName);
  const keys = emojiNames.map((emojiName) => getEmojiKey(emojiName));
  const upvoteCounts = await client.mget<Array<number>>(keys);

  return emojiNames.map((emojiName, index) => ({
    id: keys[index],
    emoji: emojiName,
    upvoteCount: upvoteCounts[index],
  }));
}

export async function updateEmojiUpvoteCount(
  emojiName: EmojiName,
  upvoteCount: number,
) {
  const key = getEmojiKey(emojiName);
  await client.set(key, upvoteCount);
}
