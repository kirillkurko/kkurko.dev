import Head from 'next/head';
import Emoji from '@components/Emoji';
import { PageTitle, Paragraph } from '@components/typography';

const data = [
  { emoji: '👋', counter: 100 },
  { emoji: '🔥', counter: 100 },
  { emoji: '🚀', counter: 100 },
  { emoji: '🚢', counter: 100 },
  { emoji: '🐧', counter: 100 },
  { emoji: '💻', counter: 100 },
  { emoji: '❤️', counter: 100 },
  { emoji: '🤣', counter: 100 },
  { emoji: '🐕', counter: 100 },
];

const EmojiBoard = () => {
  return (
    <div>
      <Head>
        <title>Feed - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mt-8'>
        <header className='mb-[50px]'>
          <PageTitle>Emoji board</PageTitle>
          <Paragraph className='opacity-60'>
            Add the emoji you like to or upvote the existing ones.
          </Paragraph>
        </header>
        <div className='grid grid-cols-3 gap-4 mb-8'>
          {data.map(({ emoji, counter }, index) => (
            <Emoji key={index} emoji={emoji} counter={counter} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmojiBoard;
