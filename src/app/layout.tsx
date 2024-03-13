import { IBM_Plex_Sans, Red_Hat_Text } from 'next/font/google';
import clsx from 'clsx';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import Container from '@components/Container';
import './globals.css';
import { BASE_URL } from '../utils/const';

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  weight: ['400', '500', '700'],
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
    template: '%s | Kirill Kurko',
    default: 'Kirill Kurko',
  },
  alternates: {
    canonical: './',
  },
  metadataBase: new URL(`${BASE_URL}/`),
};

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html
      lang='en'
      className={clsx(
        'scroll-smooth bg-zinc-900',
        redHatText.variable,
        ibmPlexSans.variable,
      )}
    >
      <body className='box-border max-[1200px]:overflow-auto'>
        <Container>{children}</Container>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
