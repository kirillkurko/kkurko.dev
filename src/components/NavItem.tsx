import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Paragraph } from '@components/typography';
import clsx from 'clsx';

interface Props {
  href: string;
  text: string;
  disabled?: boolean;
}

const NavItem = ({ href, text, disabled = false }: Props) => {
  const router = useRouter();
  const isActive =
    router.asPath === href ||
    (href === '/blog' && router.pathname.includes('/blog'));

  return (
    <NextLink
      href={href}
      aria-disabled={disabled}
      className={clsx(
        'inline-block px-3 sm:py-2 rounded-lg font-medium transition-all text-neutral-400 hover:text-neutral-200',
        isActive && 'bg-zinc-800 !text-neutral-200',
      )}
    >
      <p className='capsize'>{text}</p>
    </NextLink>
  );
};

export default NavItem;
