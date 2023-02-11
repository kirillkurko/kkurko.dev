import { useMemo } from 'react';
import NextLink from 'next/link';
import { Paragraph, ArticleTitle } from '@components/typography';

type Props = {
  blog: any;
};

const ArticlePreview = ({ blog }: Props) => {
  const date = useMemo(() => {
    return new Date(blog.publishedAt).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }, [blog.publishedAt]);

  const link = `/blog/${blog.slug}`;

  return (
    <li className='mb-4 border border-neutral-700 rounded-md py-4 px-8'>
      <NextLink href={link}>
        <a>
          <ArticleTitle>{blog.title}</ArticleTitle>

          <Paragraph className='!my-0 opacity-60 font-primary text-base'>
            {date}
          </Paragraph>
        </a>
      </NextLink>
    </li>
  );
};

export default ArticlePreview;
