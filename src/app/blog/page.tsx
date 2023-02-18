import type { Metadata } from 'next';
import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import ArticlePreview from '@components/ArticlePreview';
import { allBlogs } from '@contentlayer/generated';
import { getAllBlogs } from '@lib/models/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on frontend, career, and more.',
};

const BlogPage = async () => {
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

  return (
    <section className='my-8 inline-block'>
      <header className='mb-8'>
        <PageTitle>Blog</PageTitle>
        <Paragraph className='opacity-60'>
          Weekly content about frontend development, productivity, team
          performance, management, and collaboration. All from own experience
          and real cases.
        </Paragraph>
      </header>

      <SectionTitle>All Posts</SectionTitle>
      <ol className='list-none m-0 p-0'>
        {blogs?.map((blog) => (
          <ArticlePreview blog={blog} key={blog.slug} />
        ))}
      </ol>
    </section>
  );
};

export default BlogPage;
