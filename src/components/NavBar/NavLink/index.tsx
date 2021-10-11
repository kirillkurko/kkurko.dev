import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  href: string;
  label: string;
  active: boolean;
  onClick: (href: string) => void;
};

function NavLink({ href, label, active, onClick }: Props): JSX.Element {
  return (
    <Wrapper title={label} active={active} onClick={() => onClick(href)}>
      <Link href={href}>{label}</Link>
    </Wrapper>
  );
}

type WrapperProps = {
  active: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  text-transform: uppercase;
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.nav};
  margin: 0 20px;
  line-height: 1;
  transition: color 0.5s;

  color: ${({ theme, active }: ThemeProps & WrapperProps) =>
    active ? theme.colors.primary : theme.colors.text};

  ${({ active }: WrapperProps) =>
    active &&
    css`
      text-decoration: none !important;
      font-weight: 700;
    `}

  &:after {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default NavLink;
