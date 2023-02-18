'use client';

import { Paragraph } from '@components/typography';
import { EmojiName } from '@lib/models/emoji';
import { useState } from 'react';

const EmojiMap = {
  [EmojiName.WavingHand]: '👋',
  [EmojiName.Fire]: '🔥',
  [EmojiName.Rocket]: '🚀',
  [EmojiName.Ship]: '🚢',
  [EmojiName.Penguin]: '🐧',
  [EmojiName.Laptop]: '💻',
  [EmojiName.RedHeart]: '❤️',
  [EmojiName.RollingOnTheFloorLaughing]: '🤣',
  [EmojiName.Dog]: '🐕',
};

interface Props {
  emoji: EmojiName;
  counter: number;
}

const Emoji = ({ emoji, counter }: Props) => {
  const [votesCount, setVotesCount] = useState(counter);

  const upvoteEmoji = async () => {
    const response = await fetch('/api/emoji', {
      method: 'POST',
      body: JSON.stringify({ emoji }),
    });
    const updatedData = await response.json();
    setVotesCount(updatedData.emoji.upvoteCount);
  };

  return (
    <div
      onClick={upvoteEmoji}
      className='border border-neutral-700 select-none rounded-md aspect-square flex items-center justify-center flex-col cursor-pointer'
    >
      <Paragraph className='text-6xl mb-4'>{EmojiMap[emoji]}</Paragraph>
      <Paragraph className='text-xl font-bold'>{votesCount}</Paragraph>
    </div>
  );
};

export default Emoji;
