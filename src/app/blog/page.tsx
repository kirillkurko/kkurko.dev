import ArticlePreview from '@components/ArticlePreview';
import { type Metadata } from 'next';
import { getAllBlogPosts } from '@lib/models/blog';
import { BASE_URL } from '@utils/const';
import { OG_IMAGE } from '@utils/ogImages';
import { PageTitle } from '@components/typography';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Weekly content about software development and management. All articles are based on my own experience and real cases.',
  openGraph: {
    url: new URL(`${BASE_URL}/blog`),
    images: [OG_IMAGE],
  },
};

function Page() {
  const blogPosts = getAllBlogPosts();

  return (
    <section className='my-8 inline-block prose prose-invert'>
      <header className='mb-8'>
        <PageTitle>Blog</PageTitle>
        <p>
          Weekly content about frontend development, productivity, team
          performance, management, and collaboration. All from own experience
          and real cases.
        </p>
      </header>
      <h2 className='mt-0'>All Posts</h2>
      <ol className='list-none m-0 p-0'>
        {blogPosts.map((blog) => (
          <ArticlePreview blog={blog} key={blog.slug} />
        ))}
      </ol>
    </section>
  );
}

export default Page;
