import type { Metadata } from 'next';
import { BASE_URL } from '@utils/const';
import { OG_IMAGE } from '@utils/ogImages';
import { PageTitle } from '@components/typography';

export const metadata: Metadata = {
  title: 'Kirill Kurko',
  description: 'Frontend Developer and Penguin 🐧',
  openGraph: {
    url: new URL(BASE_URL),
    images: [OG_IMAGE],
  },
};

function Page() {
  return (
    <section className='prose prose-invert flex justify-center items-center overflow-hidden py-8 max-[1200px]:h-auto max-[1200px]:overflow-auto'>
      <div>
        <PageTitle className='whitespace-pre-wrap text-4xl sm:text-5xl'>{`Kirill Kurko\nFrontend Developer\nand Penguin 🐧`}</PageTitle>
        <p>
          {`I’m a software engineer who started his career with backend
          development and then switched to frontend. Right now my primary stack
          is TypeScript, React, React Native, and I've worked with all sorts of
          things from the React ecosystem. Even though I specialize in frontend,
          I am a flexible person who is willing to take on different
          responsibilities depending on the current needs of the project and
          team.`}
        </p>
        <p>
          {`I'm a proactive person, and outside of code contributions you'll find
          me participating in product discussions, proposing ideas, initiating
          experiments, improving processes, and helping shape engineering
          culture. I love frontend development and appreciate the fact that
          there are so many things to try, but I'm on my way to an engineering
          manager role where I can focus on enabling and empowering others (and
          I feel like this is where my superpower is).`}
        </p>
      </div>
    </section>
  );
}

export default Page;
