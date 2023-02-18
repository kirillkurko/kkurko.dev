import type { Metadata } from 'next';
import WorkInProgress from '@components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Some photos that I took and that I love.',
};

const GalleryPage = () => {
  return <WorkInProgress />;
};

export default GalleryPage;
