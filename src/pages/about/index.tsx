import { Wrapper } from '@components/Blog/atoms';
import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const About = () => {
  return (
    <Wrapper>
      <Head>
        <title>About - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </Wrapper>
  );
};

export default About;
