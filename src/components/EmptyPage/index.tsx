import { PageTitle, Paragraph } from '@components/atoms';
import NextLink from 'next/link';
import { Wrapper, LinkButton } from './atoms';

interface Props {
  title: string;
  description: string;
}

const EmptyPage = ({ title, description }: Props) => {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <Paragraph>{description}</Paragraph>
      <NextLink href='/'>
        <LinkButton className='p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white'>
          Return Home
        </LinkButton>
      </NextLink>
    </Wrapper>
  );
};

export default EmptyPage;
