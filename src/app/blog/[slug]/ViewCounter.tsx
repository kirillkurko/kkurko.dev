'use client';
import { useEffect } from 'react';
import { trackBlogPostView } from './trackView';

interface Props {
  slug: string;
}

function ViewCounter({ slug }: Props) {
  useEffect(() => {
    trackBlogPostView(slug);
  }, [slug]);

  return <></>;
}

export default ViewCounter;
