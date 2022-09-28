// @ts-nocheck
import Head from 'next/head';
import { getDatabase } from '../../lib/notion';
import { PageTitle, Paragraph, SectionTitle } from '@components/atoms';
import { Wrapper, Content, Header, PostsList } from '@components/Blog/atoms';
import PostPreview from '@components/PostPreview';

export default function Home({ posts }) {
  return (
    <Wrapper>
      <Head>
        <title>Blog - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content>
        <Header>
          <PageTitle>Blog</PageTitle>
          <Paragraph>
            Weekly content about frontend development, productivity, team
            performance, management, and collaboration. All from own experience
            and real cases.
          </Paragraph>
        </Header>

        <SectionTitle>All Posts</SectionTitle>
        <PostsList>
          {posts.map((post) => (
            <PostPreview post={post} key={post.id} />
          ))}
        </PostsList>
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
