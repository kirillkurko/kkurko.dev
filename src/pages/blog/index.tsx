import Head from 'next/head';
import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import ArticlePreview from '@components/ArticlePreview';
import { allBlogs } from '@contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { getAllBlogs } from '@lib/models/blog';

export default function Blog({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Blog | Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='my-8 inline-block'>
        <header className='mb-8'>
          <PageTitle>Blog</PageTitle>
          <Paragraph primary={false}>
            Weekly content about frontend development, productivity, team
            performance, management, and collaboration. All from own experience
            and real cases.
          </Paragraph>
        </header>

        <SectionTitle>All Posts</SectionTitle>
        <ol className='list-none m-0 p-0'>
          {blogs.map((blog) => (
            <ArticlePreview blog={blog} key={blog.slug} />
          ))}
        </ol>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
  const views = await getAllBlogs();

  const blogs = sortedBlogs.map((blog) => ({
    slug: blog.slug,
    title: blog.title,
    publishedAt: blog.publishedAt,
    views: views.find((view) => view.slug === blog.slug)?.views || 0,
  }));

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
}
