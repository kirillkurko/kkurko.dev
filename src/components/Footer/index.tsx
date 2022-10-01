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
          <NextLink href='/'>
            <Link>
              <Paragraph>Home</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/about'>
            <Link>
              <Paragraph>About</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/newsletter'>
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
          <NextLink href='/gallery'>
            <Link>
              <Paragraph>Gallery</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/snippets'>
            <Link>
              <Paragraph>Snippets</Paragraph>
            </Link>
          </NextLink>
          <NextLink href='/guestbook'>
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
