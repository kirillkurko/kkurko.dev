import Emoji from '@components/Emoji';
import { PageTitle, Paragraph } from '@components/typography';
import { getAllEmojis } from '@lib/models/emoji';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emoji',
  description: 'Upvote your favorite emoji.',
};

export const revalidate = 1;

const EmojiPage = async () => {
  const emojis = await getAllEmojis();

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
          <Emoji key={emoji} emoji={emoji} counter={upvoteCount} />
        ))}
      </div>
    </section>
  );
};

export default EmojiPage;
