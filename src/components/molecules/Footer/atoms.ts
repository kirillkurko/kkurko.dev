import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.footer`
  width: 100%;
  background: ${({ theme }: ThemeProps) => theme.colors.text};
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  line-height: 0.8;
  margin: 26px 0;
  text-align: center;
`;
