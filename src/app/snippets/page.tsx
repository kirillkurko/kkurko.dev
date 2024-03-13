import WorkInProgress from '@components/WorkInProgress';
import type { Metadata } from 'next';
import { BASE_URL } from '../../utils/conts';

export const metadata: Metadata = {
  title: 'Snippets',
  description:
    'Short code snippets that I found useful and want to keep at hand.',
  openGraph: {
    url: new URL(`${BASE_URL}/snippets`),
  },
};

function Page() {
  return <WorkInProgress />;
}

export default Page;
