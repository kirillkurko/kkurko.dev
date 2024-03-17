'use client';
import { useEffect } from 'react';
import { trackBlogPostView } from './trackView';

interface Props {
  slug: string;
}

let finished = false;

function ViewTracker({ slug }: Props) {
  useEffect(() => {
    if (!finished) {
      trackBlogPostView(slug);
    }

    return () => {
      finished = true;
    };
  }, [slug]);

  return <></>;
}

export default ViewTracker;
