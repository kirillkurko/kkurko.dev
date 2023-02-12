import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Newsletter = () => {
  return (
    <div>
      <Head>
        <title>Gallery | Kirill Kurko</title>
        <link rel='icon' href='/public/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default Newsletter;
