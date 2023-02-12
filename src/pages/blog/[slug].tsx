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

const Blog = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='mt-8'>
        <header>
          <PageTitle>{post.title}</PageTitle>
          <Paragraph className='opacity-60'>{post.summary}</Paragraph>
        </header>
        <section>
          <Mdx code={post.body.code} />
        </section>
      </article>
    </div>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { slug } = context.params as Params;

  const post = allBlogs.find((blog) => blog.slug === slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
