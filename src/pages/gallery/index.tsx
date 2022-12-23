import Head from 'next/head';
import WorkInProgress from '@components/WorkInProgress';

const Gallery = () => {
  return (
    <div>
      <Head>
        <title>Gallery - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkInProgress />
    </div>
  );
};

export default Gallery;
