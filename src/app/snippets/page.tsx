import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snippets',
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
