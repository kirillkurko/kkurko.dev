import NextLink from 'next/link';
import { Link } from '@components/atoms';
import { Paragraph } from '@components/typography';
import ExternalLink from '@components/ExternalLink';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start mb-8 py-0'>
      <hr className='w-full h-[0.5px] mt-0 mx-0 mb-4 bg-zinc-500 border-none' />
      <div className='w-[80%] flex flex-row justify-between max-[600px]:flex-col'>
        <div className='flex flex-col'>
          <NextLink href='/' passHref>
            <Link>
              <Paragraph>Home</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/about' passHref>
            <Link>
              <Paragraph>About</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/newsletter' passHref>
            <Link>
              <Paragraph>Newsletter</Paragraph>
            </Link>
          </NextLink>
        </div>
        <div className='flex flex-col'>
          <ExternalLink href='https://github.com/kirillkurko'>
            <Paragraph>GitHub</Paragraph>
          </ExternalLink>
          <ExternalLink href='https://twitter.com/kirillkurko'>
            <Paragraph>Twitter</Paragraph>
          </ExternalLink>
          <ExternalLink href='https://www.instagram.com/aqwergqwec/'>
            <Paragraph>Instagram</Paragraph>
          </ExternalLink>
        </div>
        <div className='flex flex-col'>
          <NextLink href='/gallery' passHref>
            <Link>
              <Paragraph>Gallery</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/snippets' passHref>
            <Link>
              <Paragraph>Snippets</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/guestbook' passHref>
            <Link>
              <Paragraph>Guestbook</Paragraph>
            </Link>
          </NextLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
