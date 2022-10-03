import { useMemo } from 'react';
import { ArticleTitle } from '@components/atoms';
import NextLink from 'next/link';
import Text from '@components/Text';
import { Wrapper, PublishDate, Link } from './atoms';

type Props = {
  post: any;
};

const PostPreview = ({ post }: Props) => {
  const date = useMemo(() => {
    return new Date(post.last_edited_time).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }, [post.last_edited_time]);

  const link = `/blog/${post.id}`;

  return (
    <Wrapper>
      <ArticleTitle>
        <NextLink href={link}>
          <a>
            <Text data={post.properties.Name.title} />
          </a>
        </NextLink>
      </ArticleTitle>

      <PublishDate>{date}</PublishDate>
      <NextLink href={link}>
        <Link>Read post →</Link>
      </NextLink>
    </Wrapper>
  );
};

export default PostPreview;
