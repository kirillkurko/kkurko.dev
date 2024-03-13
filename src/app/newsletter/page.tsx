import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/conts';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Follow my newsletter on software development and management.',
  openGraph: {
    url: new URL(`${BASE_URL}/newsletter`),
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
