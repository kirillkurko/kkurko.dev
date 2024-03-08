import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
