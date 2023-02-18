import Head from 'next/head';
import type { Metadata } from 'next';
import { PageTitle, Paragraph } from '@components/typography';
import { Mdx } from '@components/mdx';
import { allBlogs } from '@contentlayer/generated';
import { notFound } from 'next/navigation';

export type PageParams = Record<string, string | string[]>;

export interface Props {
  params?: PageParams;
  searchParams?: Record<string, string | string[]>;
}

export const generateStaticParams = async () => {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const blog = allBlogs.find(
    (currentBlog) => currentBlog.slug === params?.slug,
  );

  if (!blog) {
    return;
  }

  const { title, summary: description } = blog;

  return {
    title,
    description,
  };
};

const Blog = async ({ params }: Props) => {
  const blog = allBlogs.find(
    (currentBlog) => currentBlog.slug === params?.slug,
  );

  // useEffect(() => {
  //   if (blog) {
  //     fetch(`/api/blog/${blog.slug}`, {
  //       method: 'POST',
  //     });
  //   }
  // }, [blog]);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='mt-8 inline-block'>
        <header>
          <PageTitle>{blog.title}</PageTitle>
          <Paragraph className='opacity-60'>{blog.summary}</Paragraph>
        </header>
        <section>
          <Mdx code={blog.body.code} />
        </section>
      </article>
    </div>
  );
};

export default Blog;
