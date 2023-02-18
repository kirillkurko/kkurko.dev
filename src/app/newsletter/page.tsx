import type { Metadata } from 'next';
import WorkInProgress from '@components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Stay ahead with my newsletter - sign up now!',
};

const NewsletterPage = () => {
  return <WorkInProgress />;
};

export default NewsletterPage;
