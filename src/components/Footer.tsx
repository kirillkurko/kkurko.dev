import NextLink from 'next/link';
import ExternalLink from '@components/ExternalLink';
import { LinkText } from '@components/typography';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start mb-8 py-0'>
      <hr className='w-full h-[0.5px] mt-0 mx-0 mb-4 bg-zinc-500 border-none' />
      <div className='w-[80%] flex flex-row justify-between max-[600px]:flex-col'>
        <div className='flex flex-col'>
          <NextLink href='/'>
            <LinkText>Home</LinkText>
          </NextLink>
          <NextLink href='/about'>
            <LinkText>About</LinkText>
          </NextLink>
          <NextLink href='/newsletter'>
            <LinkText>Newsletter</LinkText>
          </NextLink>
        </div>
        <div className='flex flex-col'>
          <ExternalLink href='https://github.com/kirillkurko'>
            GitHub
          </ExternalLink>
          <ExternalLink href='https://www.threads.net/@aqwergqwec'>
            Threads
          </ExternalLink>
          <ExternalLink href='https://www.instagram.com/aqwergqwec/'>
            Instagram
          </ExternalLink>
        </div>
        <div className='flex flex-col'>
          <NextLink href='/gallery'>
            <LinkText>Gallery</LinkText>
          </NextLink>
          <NextLink href='/snippets'>
            <LinkText>Snippets</LinkText>
          </NextLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
