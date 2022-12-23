import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Snippets = () => {
  return (
    <div>
      <Head>
        <title>Snippets - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default Snippets;
