import Head from 'next/head';
import { PageTitle, Paragraph } from '@components/typography';
import AboutCard from '@components/AboutCard';

interface Feedback {
  avatar: string;
  username: string;
  message: string[];
}

const data: Feedback[] = [
  {
    avatar: 'from-amber-300 to-amber-700',
    username: 'knowing-pelican118',
    message: [
      `Well, I’ve heard that penguins are intelligent, but this individual seems to be on top of his kind. Kirill is one of the most inspiring personalities that I have ever met. I’d like to say that he is an outstanding developer - but I can hardly read the code. However, I can say for sure that he is a perfect problem solver - no matter what kind of problems we face, if Kirill joins the discussion I feel safe.`,
      `I know for sure that every developer who knows Kirill says that he has extraordinary deep knowledge of the subject. He has an ability to absorb information at unprecedented rates - there must be some magic involved, I see no other explanation. But what I like most about Kirill is his inner child who is willing to play all day long but with one correction - this child plays with code 🙂`,
    ],
  },
  {
    avatar: 'from-rose-300 to-rose-500',
    username: 'detailed-lion933',
    message: [
      `You know, there are people who you look at and understand that everything will be cool for them. As cool as they imagine it to be. People usually say about them, "dude, this is too much, stop" or "man, are you crazy??" For them, the world has no limits. And the funny thing is, you can't even imagine how they will do it. You just KNOW that they will reach their final destination. Sooner or later. It's some kind of magic.`,
      `I only know three people like that. Kirill is the first on the list.`,
    ],
  },
];

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mt-8 mb-12 inline-block'>
        <header className='mb-8'>
          <PageTitle>About</PageTitle>
          <Paragraph primary={false}>
            This is the board on which the battle for the title of the best
            emoji takes place. Click on an item with your favorite emoji to
            support it.
          </Paragraph>
        </header>
        <ol className='list-none m-0 p-0'>
          {data.map(({ avatar, username, message }) => (
            <AboutCard
              key={username}
              avatar={avatar}
              username={username}
              message={message}
            />
          ))}
        </ol>
      </section>
    </div>
  );
};

export default About;
