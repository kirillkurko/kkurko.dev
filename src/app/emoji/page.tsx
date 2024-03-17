import Emoji from './Emoji';
import { PageTitle, Paragraph } from '@components/typography';
import { getAllEmojis } from '@lib/models/emoji';
import { type Metadata } from 'next';
import { BASE_URL } from '@utils/const';
import { OG_IMAGE } from '@utils/ogImages';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Emoji',
  description: 'Here you can have fun and vote for your favorite emoji.',
  openGraph: {
    url: new URL(`${BASE_URL}/emoji`),
    images: [OG_IMAGE],
  },
};

async function Page() {
  const emojis = await getAllEmojis();

  return (
    <section className='mt-8 mb-12 inline-block'>
      <header className='mb-8'>
        <PageTitle>Emoji board</PageTitle>
        <Paragraph primary={false}>
          This is the board on which the battle for the title of the best emoji
          takes place. Click on an item with your favorite emoji to support it.
        </Paragraph>
      </header>
      <div className='grid grid-cols-1 select-none min-[360px]:grid-cols-2 sm:grid-cols-3 gap-4'>
        {emojis.map(({ emoji, upvoteCount }) => (
          <Emoji key={emoji} emoji={emoji} initialCounter={upvoteCount} />
        ))}
      </div>
    </section>
  );
}

export default Page;
