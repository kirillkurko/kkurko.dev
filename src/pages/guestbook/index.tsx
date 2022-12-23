import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Guestbook = () => {
  return (
    <div>
      <Head>
        <title>Guestbook - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default Guestbook;
