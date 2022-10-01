import { Wrapper } from '@components/Blog/atoms';
import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Newsletter = () => {
  return (
    <Wrapper>
      <Head>
        <title>Gallery - Kirill Kurko</title>
        <link rel='icon' href='/public/favicon.ico' />
      </Head>

      <WorkInProgress />
    </Wrapper>
  );
};

export default Newsletter;
