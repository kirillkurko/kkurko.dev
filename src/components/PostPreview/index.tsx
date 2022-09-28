import { useMemo } from 'react';
import { ArticleTitle } from '@components/atoms';
import Link from 'next/link';
import Text from '@components/Text';
import { Wrapper, PublishDate } from './atoms';

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
        <Link href={link}>
          <a>
            <Text data={post.properties.Name.title} />
          </a>
        </Link>
      </ArticleTitle>

      <PublishDate>{date}</PublishDate>
      <Link href={link}>
        <a style={{ color: '#fff' }}> Read post →</a>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
