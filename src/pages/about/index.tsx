import { Content, Header, PostsList, Wrapper } from '@components/Blog/atoms';
import Head from 'next/head';
import { PageTitle, Paragraph, SectionTitle } from '@components/atoms';
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
          <PageTitle>About me</PageTitle>
          <Paragraph>
            Weekly content about frontend development, productivity, team
            performance, management, and collaboration. All from own experience
            and real cases.
          </Paragraph>
        </Header>

        <SectionTitle>All Posts</SectionTitle>
        <PostsList></PostsList>
      </Content>
    </Wrapper>
  );
}
