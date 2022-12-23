import { useMemo } from 'react';
import NextLink from 'next/link';
import Text from '@components/Text';
import { Paragraph, ArticleTitle } from '@components/typography';

type Props = {
  post: any;
};

const ArticlePreview = ({ post }: Props) => {
  const date = useMemo(() => {
    return new Date(post.last_edited_time).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }, [post.last_edited_time]);

  const link = `/blog/${post.id}`;

  return (
    <li className='mb-[50px]'>
      <ArticleTitle>
        <NextLink href={link}>
          <a>
            <Text data={post.properties.Name.title} />
          </a>
        </NextLink>
      </ArticleTitle>

      <Paragraph className='!mt-0 mb-[12px] opacity-60 font-primary text-base'>
        {date}
      </Paragraph>
      <NextLink href={link}>
        <a className='text-neutral-900 dark:text-neutral-50'>Read post →</a>
      </NextLink>
    </li>
  );
};

export default ArticlePreview;
