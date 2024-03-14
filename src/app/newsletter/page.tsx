import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/const';
import { OG_IMAGE } from '../../utils/ogImages';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Follow my newsletter on software development and management.',
  openGraph: {
    url: new URL(`${BASE_URL}/newsletter`),
    images: [OG_IMAGE],
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
