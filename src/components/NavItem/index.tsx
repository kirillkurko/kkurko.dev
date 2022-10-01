import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Paragraph } from '@components/atoms';
import { Link } from './atoms';

interface Props {
  href: string;
  text: string;
  disabled?: boolean;
}

const NavItem = ({ href, text, disabled = false }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} aria-disabled={disabled} passHref>
      <Link isActive={isActive}>
        <Paragraph>{text}</Paragraph>
      </Link>
    </NextLink>
  );
};

export default NavItem;
