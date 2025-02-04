import { PageTitle } from '@components/typography';
import { Mdx } from '@components/mdx';
import { allBlogs } from '@contentlayer/generated';
import { type Metadata } from 'next';
import ViewTracker from './ViewTracker';
import { BASE_URL } from '@utils/const';
import { getBlogPostOpengraphImage } from '@utils/ogImages';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const blogPost = allBlogs.find((blog) => blog.slug === slug);

  return {
    title: blogPost?.title,
    description: blogPost?.summary,
    openGraph: {
      url: new URL(`${BASE_URL}/blog/${slug}`),
      images: [getBlogPostOpengraphImage(slug)],
    },
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
        <header className='prose prose-invert'>
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
