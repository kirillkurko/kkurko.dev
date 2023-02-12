// @ts-nocheck
import Head from 'next/head';
import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import ArticlePreview from '@components/ArticlePreview';
import { allBlogs } from '@contentlayer/generated';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mt-8 mb-12'>
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
          {allBlogs.map((blog, index) => (
            <ArticlePreview blog={blog} key={index} />
          ))}
        </ol>
      </section>
    </div>
  );
}
