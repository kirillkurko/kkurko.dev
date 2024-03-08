import { PageTitle } from '@components/typography';
import { Mdx } from '@components/mdx';
import { allBlogs } from '@contentlayer/generated';
import { type Metadata } from 'next';
import ViewTracker from './ViewTracker';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const blogPost = allBlogs.find((blog) => blog.slug === slug);

  return {
    title: blogPost?.title,
    description: blogPost?.summary,
  };
}

export function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog.slug }));
}

interface Props {
  params: { slug: string };
}

async function Page({ params }: Props) {
  const { slug } = params;
  const blogPost = allBlogs.find((blog) => blog.slug === slug);

  if (!blogPost) {
    return null;
  }

  return (
    <>
      <ViewTracker slug={slug} />
      <article className='mt-8 inline-block'>
        <header>
          <PageTitle>{blogPost.title}</PageTitle>
        </header>
        <section>
          <Mdx code={blogPost.body.code} />
        </section>
      </article>
    </>
  );
}

export default Page;
