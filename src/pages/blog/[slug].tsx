import Head from 'next/head';
import { PageTitle, Paragraph } from '@components/typography';
import { Mdx } from '@components/mdx';
import { allBlogs } from '@contentlayer/generated';

const Blog = ({ post }) => {
  if (!post) {
    return;
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

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const post = allBlogs.find((blog) => blog.slug === slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
