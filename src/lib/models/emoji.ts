import prisma from '@lib/prisma';
import invariant from 'tiny-invariant';

export enum EmojiName {
  WavingHand = 'waving-hand',
  Fire = 'fire',
  Rocket = 'rocket',
  Ship = 'ship',
  Penguin = 'penguin',
  Laptop = 'laptop',
  RedHeart = 'red-heart',
  RollingOnTheFloorLaughing = 'rolling-on-the-floor-laughing',
  Dog = 'dog',
}

export const getAllEmojis = async () => {
  const emojis = await prisma.emoji.findMany();

  return emojis.map((emoji) => ({
    id: emoji.id,
    emoji: emoji.emoji as EmojiName,
    upvoteCount: emoji.upvote_count,
  }));
};

export const updateEmojiUpvoteCount = async (
  emoji: EmojiName,
  upvoteCount: number,
) => {
  const emojiItem = await prisma.emoji.findUnique({
    where: {
      emoji,
    },
  });

  invariant(emojiItem, 'Emoji should be in the database');

  const updatedEmojiItem = await prisma.emoji.update({
    where: {
      emoji,
    },
    data: {
      upvote_count: upvoteCount,
    },
  });

  return {
    id: updatedEmojiItem.id,
    emoji: updatedEmojiItem.emoji,
    upvoteCount: updatedEmojiItem.upvote_count,
  };
};
