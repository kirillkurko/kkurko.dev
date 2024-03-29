import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import ArticlePreview from '@components/ArticlePreview';
import { type Metadata } from 'next';
import { getAllBlogPosts } from '@lib/models/blog';
import { BASE_URL } from '@utils/const';
import { OG_IMAGE } from '@utils/ogImages';

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
        {blogPosts.map((blog) => (
          <ArticlePreview blog={blog} key={blog.slug} />
        ))}
      </ol>
    </section>
  );
}

export default Page;
