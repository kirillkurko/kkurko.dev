import React from 'react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Red_Hat_Text, IBM_Plex_Sans } from '@next/font/google';
import AnalyticsWrapper from '@components/AnalyticsWrapper';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import './global.css';

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kirill Kurko',
    template: '%s | Kirill Kurko',
  },
  description: 'Frontend Developer and Penguin',
  icons: {
    shortcut: '/favicon.ico',
  },
};

interface Props {
  children: React.ReactNode;
}
const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang='en'
      className={clsx(
        'scroll-smooth bg-zinc-900',
        redHatText.variable,
        ibmPlexSans.variable,
      )}
    >
      <body className='font-primary box-border max-[1200px]:overflow-auto'>
        <div className='mx-auto my-0 max-w-[700px] pt-8 pb-0 px-[20px]'>
          <NavBar />
          <main className='py-0'>
            {children}
            <AnalyticsWrapper />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
