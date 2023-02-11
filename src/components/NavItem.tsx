import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Paragraph } from '@components/typography';
import classnames from 'classnames';

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
      <a
        className={classnames(
          isActive
            ? 'font-semibold text-gray-200'
            : 'font-normal text-gray-400',
          'max-[600px]:hidden inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-zinc-800 transition-all',
        )}
      >
        <Paragraph className='capsize !mb-0'>{text}</Paragraph>
      </a>
    </NextLink>
  );
};

export default NavItem;
