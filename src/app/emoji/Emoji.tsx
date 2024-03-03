'use client';
import { useState } from 'react';
import { Paragraph } from '@components/typography';
import { EmojiName } from '@lib/models/emoji';
import { upvoteEmoji } from './upvoteEmoji';
import { useDebounce } from 'react-use';

const EMOJI_MAP = {
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
  initialCounter: number;
}

function Emoji({ emoji, initialCounter }: Props) {
  const [counter, setCounter] = useState(initialCounter);

  useDebounce(
    async () => {
      if (counter !== initialCounter) {
        upvoteEmoji(emoji, counter);
      }
    },
    1000,
    [counter],
  );

  return (
    <div className='border border-neutral-700 select-none rounded-md aspect-square flex items-center justify-center flex-col cursor-pointer'>
      <button
        className='w-full h-full'
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        <Paragraph className='text-6xl mb-4'>{EMOJI_MAP[emoji]}</Paragraph>
        <Paragraph className='text-xl font-bold'>{counter}</Paragraph>
      </button>
    </div>
  );
}

export default Emoji;
