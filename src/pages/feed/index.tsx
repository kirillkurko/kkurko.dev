import { Wrapper } from '@components/Blog/atoms';
import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Feed = () => {
  return (
    <Wrapper>
      <Head>
        <title>Feed - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </Wrapper>
  );
};

export default Feed;
