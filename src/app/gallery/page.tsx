import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/const';
import { OG_IMAGE } from '../../utils/ogImage';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'I like photography and here are a couple of my favorite pictures.',
  openGraph: {
    url: new URL(`${BASE_URL}/gallery`),
    images: [OG_IMAGE],
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
