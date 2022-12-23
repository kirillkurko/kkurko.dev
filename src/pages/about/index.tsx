import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const About = () => {
  return (
    <div>
      <Head>
        <title>About - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default About;
