import { Suspense, useMemo } from 'react';
import NextLink from 'next/link';
import ViewCounter from '../app/blog/ViewCounter';

type Props = {
  blog: {
    slug: string;
    title: string;
    publishedAt: string;
  };
};

function ArticlePreview({ blog }: Props) {
  const date = useMemo(() => {
    return new Date(blog.publishedAt).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }, [blog.publishedAt]);

  const link = `/blog/${blog.slug}`;

  return (
    <li className='mb-4 border border-neutral-700 rounded-md ps-0'>
      <NextLink href={link} className='raw-link'>
        <div className='py-4 px-6'>
          <h3 className='mt-0'>{blog.title}</h3>

          <p className='!my-0 text-[#d1d5db]'>
            {date}
            <Suspense>
              <ViewCounter slug={blog.slug} />
            </Suspense>
          </p>
        </div>
      </NextLink>
    </li>
  );
}

export default ArticlePreview;
