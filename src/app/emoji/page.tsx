import Emoji from '@components/Emoji';
import { PageTitle, Paragraph } from '@components/typography';
import { EmojiName, getAllEmojis } from '@lib/models/emoji';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Emoji',
  description: 'Upvote your favorite emoji.',
};

export const revalidate = 1;

const EmojiPage = async () => {
  const emojis = await getAllEmojis();

  const upvoteEmoji = async (emoji: EmojiName) => {
    await fetch('/api/emoji', {
      method: 'POST',
      body: JSON.stringify({ emoji }),
    });

    // const updatedData = await response.json();
  };

  return (
    <section className='mt-8 mb-12 inline-block'>
      <header className='mb-8'>
        <PageTitle>Emoji board</PageTitle>
        <Paragraph className='opacity-60'>
          This is the board on which the battle for the title of the best emoji
          takes place. Click on an item with your favorite emoji to support it.
        </Paragraph>
      </header>
      <div className='grid grid-cols-1 select-none min-[360px]:grid-cols-2 sm:grid-cols-3 gap-4'>
        {emojis.map(({ emoji, upvoteCount }) => (
          <Emoji
            key={emoji}
            emoji={EmojiMap[emoji]}
            counter={upvoteCount}
            onClick={() => upvoteEmoji(emoji)}
          />
        ))}
      </div>
    </section>
  );
};

export default EmojiPage;
