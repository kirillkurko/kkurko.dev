import clsx from 'clsx';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';
import { useRouter } from 'next/router';

const items = [
  {
    href: '/',
    title: 'Home',
    transitionDelay: '150ms',
  },
  {
    href: '/about',
    title: 'About',
    transitionDelay: '175ms',
  },
  {
    href: '/emoji',
    title: 'Emoji',
    transitionDelay: '205ms',
  },
  {
    href: '/blog',
    title: 'Blog',
    transitionDelay: '220ms',
  },
  {
    href: '/newsletter',
    title: 'Newsletter',
    transitionDelay: '235ms',
  },
  {
    href: '/gallery',
    title: 'Gallery',
    transitionDelay: '250ms',
  },
  {
    href: '/snippets',
    title: 'Snippets',
    transitionDelay: '275ms',
  },
];

const MobileMenu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    },
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  useEffect(() => {
    return () => {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    };
  }, [router.pathname]);

  return (
    <div>
      <button
        className='w-10 h-10 visible sm:hidden flex items-center justify-center'
        aria-label='Open menu'
        type='button'
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
      </button>
      {isMenuMounted && (
        <div
          className={clsx(
            styles.menu,
            'flex flex-col absolute bg-zinc-900 py-8 px-5',
            isMenuRendered && styles.menuRendered,
          )}
        >
          <button
            className='w-10 h-10 ml-[-10px] visible flex items-center justify-center'
            aria-label='Close menu'
            type='button'
            onClick={toggleMenu}
          >
            <CrossIcon data-hide={!isMenuOpen} />
          </button>
          <ul>
            {items.map(({ href, title, transitionDelay }) => (
              <li
                key={href}
                className='border-b border-neutral-400 text-neutral-400 font-medium mt-4'
                style={{ transitionDelay }}
              >
                <Link href={href} className='flex w-auto pb-4'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-6 w-6 text-neutral-400'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-6 w-6 text-neutral-400'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
};
