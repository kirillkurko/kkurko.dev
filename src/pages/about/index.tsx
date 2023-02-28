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
    avatar: 'from-rose-300 to-sky-300',
    username: 'detailed-lion933',
    message: [
      `You know, there are people who you look at and understand that everything will be cool for them. As cool as they imagine it to be. People usually say about them, "dude, this is too much, stop" or "man, are you crazy??" For them, the world has no limits. And the funny thing is, you can't even imagine how they will do it. You just KNOW that they will reach their final destination. Sooner or later. It's some kind of magic.`,
      `I only know three people like that. Kirill is the first on the list.`,
    ],
  },
  {
    avatar: 'from-amber-300 to-rose-700',
    username: 'knowing-pelican118',
    message: [
      `Well, I’ve heard that penguins are intelligent, but this individual seems to be on top of his kind. Kirill is one of the most inspiring personalities that I have ever met. I’d like to say that he is an outstanding developer - but I can hardly read the code. However, I can say for sure that he is a perfect problem solver - no matter what kind of problems we face, if Kirill joins the discussion I feel safe.`,
      `I know for sure that every developer who knows Kirill says that he has extraordinary deep knowledge of the subject. He has an ability to absorb information at unprecedented rates - there must be some magic involved, I see no other explanation. But what I like most about Kirill is his inner child who is willing to play all day long but with one correction - this child plays with code 🙂`,
    ],
  },
  {
    avatar: 'from-green-400 to-blue-800',
    username: 'impressive-otter549',
    message: [
      `Kirill is a very pleasant person who is happy to listen to you and give advice. At first, he may seem quiet, but in reality Kirill is talkative, just in his own way. You'll find out what that means when you sign up for the Premium subscription. Despite being a programmer and already a little bit of a manager, Kirill knows a lot about HR, which undoubtedly makes him the best programmer in the world!`,
    ],
  },
  {
    avatar: 'from-orange-500 to-cyan-300',
    username: 'responsible-bee152',
    message: [
      `(I wrote this as if from you, but it can be presented as some interesting facts that your acquaintances say about you)`,
      `I know, I know, in this section you all want to see the answer to the question: "Who am I?" So, here are a few facts about me:`,
      `I'm a big fan of Vercel, and it shows in every piece of my work. I love programming so much that I gave my colleagues a program written in cupcakes as a gift for the holiday! I'm against personal work messages. I'm all for group (channel) messages where everyone has the same information. I read the book "Project Phoenix" and recommended it to my PM and she loved it. Every day, I try to read new articles and strengthen my knowledge.`,
      `I have my own perspective on many things, which is why you're on my website right now, to immerse yourself in the atmosphere and enjoy my experience.`,
    ],
  },
  {
    avatar: 'from-blue-600 to-rose-400',
    username: 'practical-dolphin845',
    message: [
      `Hello everyone, I'm the cat on the gate. I have known a man named Kirill for a long time...`,
      `Together we have been through a lot of fire (Belarusian summer) and water (Belarusian rain). About Kirill, I can say that this is my old friend, but gold, and no, he's not metal, he's just handsome guy :) Kirill is really a very versatile person with whom you can talk on any topic and in many of them he shows a high degree of competence and knowledge, over the years of friendship with him, I can say with confidence that he always does his job efficiently and hard-working!`,
      `It is not surprising that this guy will break into businesses and will definitely achieve his goal, but please not 5 stars in GTA.`,
      `In the end, I would like to add that everything on this site is made with love and absolutely unique, not to mention how cool and simple information on a variety of topics is presented here.`,
      `Sincerely, my dear readers, Kirill's humble friend Nikita is a Java Developer (they rule, if anything).`,
      `P.S. We will definitely send you a photo from the Maldives!`,
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
            {`This page is about me, but not from me. I asked some of my close friends, managers and peers to write something about me without format restrictions. Usernames are generated - I wanted to "blur" their roles - what matters is people and what they say, not their titles.`}
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
