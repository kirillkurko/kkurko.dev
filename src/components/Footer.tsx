import NextLink from 'next/link';
import ExternalLink, { Link } from '@components/links';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start mb-8 py-0'>
      <hr className='w-full h-[0.5px] mt-0 mx-0 mb-4 bg-zinc-500 border-none' />
      <div className='w-[80%] flex flex-row justify-between max-[600px]:flex-col'>
        <div className='flex flex-col'>
          <NextLink href='/' passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href='/about' passHref>
            <Link>About</Link>
          </NextLink>
          <NextLink href='/newsletter' passHref>
            <Link>Newsletter</Link>
          </NextLink>
        </div>
        <div className='flex flex-col'>
          <ExternalLink href='https://github.com/kirillkurko'>
            GitHub
          </ExternalLink>
          <ExternalLink href='https://twitter.com/kirillkurko'>
            Twitter
          </ExternalLink>
          <ExternalLink href='https://www.instagram.com/aqwergqwec/'>
            Instagram
          </ExternalLink>
        </div>
        <div className='flex flex-col'>
          <NextLink href='/gallery' passHref>
            <Link>Gallery</Link>
          </NextLink>
          <NextLink href='/snippets' passHref>
            <Link>Snippets</Link>
          </NextLink>
          <NextLink href='/guestbook' passHref>
            <Link>Guestbook</Link>
          </NextLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
