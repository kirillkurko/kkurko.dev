import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/const';
import { OG_IMAGE } from '../../utils/ogImage';

export const metadata: Metadata = {
  title: 'Snippets',
  description:
    'Short code snippets that I found useful and want to keep at hand.',
  openGraph: {
    url: new URL(`${BASE_URL}/snippets`),
    images: [OG_IMAGE],
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
