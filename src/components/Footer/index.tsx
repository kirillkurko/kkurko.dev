import NextLink from 'next/link';
import { Paragraph, Link } from '@components/atoms';
import ExternalLink from '@components/ExternalLink';
import { Wrapper, Line, ColumnsWrapper, Column } from './atoms';

const Footer = () => {
  return (
    <Wrapper>
      <Line />
      <ColumnsWrapper>
        <Column>
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
        </Column>
        <Column>
          <ExternalLink href='https://github.com/kirillkurko'>
            <Paragraph>GitHub</Paragraph>
          </ExternalLink>
          <ExternalLink href='https://twitter.com/kirillkurko'>
            <Paragraph>Twitter</Paragraph>
          </ExternalLink>
          <ExternalLink href='https://www.instagram.com/aqwergqwec/'>
            <Paragraph>Instagram</Paragraph>
          </ExternalLink>
        </Column>
        <Column>
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
        </Column>
      </ColumnsWrapper>
    </Wrapper>
  );
};

export default Footer;
