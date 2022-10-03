import styled, { css } from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorTextPrimary = ({ theme }: ThemeProps) => theme.colors.textPrimary;
const colorTextLink = ({ theme }: ThemeProps) => theme.colors.textLink;
const colorLinkHover = ({ theme }: ThemeProps) => theme.colors.linkHover;

export const Link = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0.3rem 0.75rem;
  border-radius: 8px;

  &:hover {
    background-color: ${colorLinkHover};
  }

  p {
    margin: 0;
    color: ${colorTextLink};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;

      p {
        color: ${colorTextPrimary};
      }
    `}
`;
