'use client';
import { useEffect } from 'react';
import { trackBlogPostView } from './trackView';

interface Props {
  slug: string;
}

function ViewTracker({ slug }: Props) {
  useEffect(() => {
    trackBlogPostView(slug);
  }, [slug]);

  return <></>;
}

export default ViewTracker;
