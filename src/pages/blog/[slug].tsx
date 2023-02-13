import Head from 'next/head';
import { PageTitle, Paragraph } from '@components/typography';
import { Mdx } from '@components/mdx';
import { allBlogs } from '@contentlayer/generated';
import { ParsedUrlQuery } from 'querystring';
import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { useEffect } from 'react';

const Blog = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    if (blog) {
      fetch(`/api/blog/${blog.slug}`, {
        method: 'POST',
      });
    }
  }, [blog]);

  if (!blog) {
    return null;
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { slug } = context.params as Params;

  const currentBlog = allBlogs.find((blog) => blog.slug === slug);

  return {
    props: {
      blog: currentBlog,
    },
    revalidate: 1,
  };
}
