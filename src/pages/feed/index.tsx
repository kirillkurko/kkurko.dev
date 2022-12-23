import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Feed = () => {
  return (
    <div>
      <Head>
        <title>Feed - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default Feed;
