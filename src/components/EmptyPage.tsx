import { PageTitle, Paragraph } from '@components/typography';
import NextLink from 'next/link';

interface Props {
  title: string;
  description: string;
}

const EmptyPage = ({ title, description }: Props) => {
  return (
    <div className='flex flex-col justify-center my-8'>
      <PageTitle>{title}</PageTitle>
      <Paragraph>{description}</Paragraph>
      <NextLink href='/'>
        <a className='rounded-lg font-bold text-center py-4 px-16 cursor-pointer mt-8 mb-0 mx-auto text-neutral-50 bg-zinc-700'>
          Return Home
        </a>
      </NextLink>
    </div>
  );
};

export default EmptyPage;
