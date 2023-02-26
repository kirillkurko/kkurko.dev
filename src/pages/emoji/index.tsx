import Head from 'next/head';
import { useState } from 'react';
import Emoji from '@components/Emoji';
import { PageTitle, Paragraph } from '@components/typography';
import { EmojiName, getAllEmojis } from '@lib/models/emoji';
import { InferGetStaticPropsType } from 'next';

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

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const EmojiBoard = ({ emojis }: Props) => {
  const [data, setData] = useState(emojis);
  const upvoteEmoji = async (emoji: EmojiName) => {
    const response = await fetch('/api/emoji', {
      method: 'POST',
      body: JSON.stringify({ emoji }),
    });

    const updatedData = await response.json();

    setData((prevState) =>
      prevState.map((item) =>
        item.id == updatedData.emoji.id ? updatedData.emoji : item,
      ),
    );
  };

  return (
    <div>
      <Head>
        <title>Emoji | Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mt-8 mb-12 inline-block'>
        <header className='mb-8'>
          <PageTitle>Emoji board</PageTitle>
          <Paragraph primary={false}>
            This is the board on which the battle for the title of the best
            emoji takes place. Click on an item with your favorite emoji to
            support it.
          </Paragraph>
        </header>
        <div className='grid grid-cols-1 select-none min-[360px]:grid-cols-2 sm:grid-cols-3 gap-4'>
          {data.map(({ emoji, upvoteCount }) => (
            <Emoji
              key={emoji}
              emoji={EmojiMap[emoji]}
              counter={upvoteCount}
              onClick={() => upvoteEmoji(emoji)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmojiBoard;

export async function getStaticProps() {
  const emojis = await getAllEmojis();

  return {
    props: {
      emojis,
    },
    revalidate: 1,
  };
}
