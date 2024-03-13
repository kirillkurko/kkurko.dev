import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/conts';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'I like photography and here are a couple of my favorite pictures.',
  openGraph: {
    url: new URL(`${BASE_URL}/gallery`),
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
