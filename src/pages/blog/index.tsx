// @ts-nocheck
import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '../../util/notion';
import Text from '@components/Text';
import styles from './index.module.css';
import { PageTitle, Paragraph } from '@components/atoms';
import { Wrapper, Content, Header } from './atoms';

export default function Home({ posts }) {
  return (
    <Wrapper>
      <Head>
        <title>Blog - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content>
        <Header className={styles.header}>
          <PageTitle>Blog</PageTitle>
          <Paragraph>
            This is an example of a Next.js blog with data fetched with Notions
            API. The data comes from{' '}
            <a href={`https://www.notion.so/${databaseId}`}>this table</a>. Get
            the source code on{' '}
            <a href='https://github.com/samuelkraft/notion-blog-nextjs'>
              Github
            </a>{' '}
            or read{' '}
            <a href='https://samuelkraft.com/blog/building-a-notion-blog-with-public-api'>
              my blogpost
            </a>{' '}
            on building your own.
          </Paragraph>
        </Header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              },
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/blog/${post.id}`}>
                    <a>
                      <Text data={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/blog/${post.id}`}>
                  <a style={{ color: '#fff' }}> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </Content>
    </Wrapper>
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
