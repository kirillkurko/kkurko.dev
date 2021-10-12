import styled, { css } from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  active: boolean;
};

export const Wrapper = styled.div<Props>`
  text-transform: uppercase;
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.nav};
  margin: 0 20px;
  line-height: 1;
  transition: color 0.5s;

  color: ${({ theme, active }: ThemeProps & Props) =>
    active ? theme.colors.primary : theme.colors.text};

  ${({ active }: Props) =>
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
