import type { Metadata } from 'next';
import WorkInProgress from '@components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Snippets',
  description: 'Things I wanted to keep and make public.',
};

const SnippetsPage = () => {
  return <WorkInProgress />;
};

export default SnippetsPage;
