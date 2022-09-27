import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@components/Hero';
import SocialMedia from '@components/SocialMedia';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penguin</title>
        <meta name='description' content='My personal website' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <main>
        <SocialMedia />
        <Hero />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? '', ['common'])),
    },
  };
}
