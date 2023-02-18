import type { Metadata } from 'next';
import WorkInProgress from '@components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Leave your mark.',
};

const GuestbookPage = () => {
  return <WorkInProgress />;
};

export default GuestbookPage;
