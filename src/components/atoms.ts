import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const PageTitle = styled.h1`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: ${32 / 16}rem;
  word-break: break-word;
  font-weight: bold;
  color: #fff;

  &:first-child {
    margin-top: 0;
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  font-size: ${18 / 16}rem;
  word-break: break-word;
  color: #fff;
`;
