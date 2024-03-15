import { getBlogPostViews } from '@lib/models/blog';

interface Props {
  slug: string;
}

async function ViewCounter({ slug }: Props) {
  const blogPostViews = await getBlogPostViews(slug);

  const views = blogPostViews[slug];

  return <> • {views} views</>;
}

export default ViewCounter;
