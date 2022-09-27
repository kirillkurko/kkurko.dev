import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@components/Hero';
import SocialMedia from '@components/SocialMedia';

const Home: NextPage = () => {
  return (
    <div>
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
