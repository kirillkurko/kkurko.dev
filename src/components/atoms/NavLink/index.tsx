import Link from 'next/link';
import { Wrapper } from './atoms';

type Props = {
  href: string;
  label: string;
  active: boolean;
  onClick: (href: string) => void;
};

function NavLink({ href, label, active, onClick }: Props) {
  return (
    <Wrapper title={label} active={active} onClick={() => onClick(href)}>
      <Link href={href}>{label}</Link>
    </Wrapper>
  );
}

export default NavLink;
