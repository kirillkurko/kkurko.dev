// @ts-nocheck
import Head from 'next/head';
import { getDatabase } from '../../lib/notion';
import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import ArticlePreview from '@components/ArticlePreview';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mt-8'>
        <header className='mb-[50px]'>
          <PageTitle>Blog</PageTitle>
          <Paragraph className='opacity-60'>
            Weekly content about frontend development, productivity, team
            performance, management, and collaboration. All from own experience
            and real cases.
          </Paragraph>
        </header>

        <SectionTitle>All Posts</SectionTitle>
        <ol className='list-none m-0 p-0'>
          {posts.map((post) => (
            <ArticlePreview post={post} key={post.id} />
          ))}
        </ol>
      </section>
    </div>
  );
}

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
