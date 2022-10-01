import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Paragraph } from '@components/atoms';
import { Link } from './atoms';

interface Props {
  href: string;
  text: string;
  disabled?: boolean;
}

const NavItem = ({ href, text, disabled = false }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} aria-disabled={disabled}>
      <Link isActive={isActive}>
        {/*className={cn(*/}
        {/*  isActive*/}
        {/*    ? 'font-semibold text-gray-800 dark:text-gray-200'*/}
        {/*    : 'font-normal text-gray-600 dark:text-gray-400',*/}
        {/*  'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'*/}
        {/*)}*/}
        <Paragraph>{text}</Paragraph>
      </Link>
    </NextLink>
  );
};

export default NavItem;
