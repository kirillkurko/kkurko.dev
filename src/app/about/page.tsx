import type { Metadata } from 'next';
import WorkInProgress from '@components/WorkInProgress';

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend Developer and Penguin.',
};

const AboutPage = () => {
  return <WorkInProgress />;
};

export default AboutPage;
