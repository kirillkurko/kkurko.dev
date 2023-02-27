import NextLink from 'next/link';
import clsx from 'clsx';

interface Props {
  href: string;
  text: string;
  isActive: boolean;
  disabled?: boolean;
}

const NavItem = ({ href, text, isActive, disabled = false }: Props) => {
  return (
    <NextLink
      href={href}
      aria-disabled={disabled}
      className={clsx(
        'inline-block px-3 sm:py-2 font-medium transition-all text-neutral-400 hover:text-neutral-200',
        isActive && '!text-neutral-200',
      )}
    >
      <p className='capsize'>{text}</p>
    </NextLink>
  );
};

export default NavItem;
