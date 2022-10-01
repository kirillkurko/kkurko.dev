import { Wrapper } from '@components/Blog/atoms';
import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Guestbook = () => {
  return (
    <Wrapper>
      <Head>
        <title>Guestbook - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </Wrapper>
  );
};

export default Guestbook;
