import styled from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

export const Wrapper = styled.footer`
  width: 100%;
  background: ${({ theme }: ThemeProps) => theme.colors.footer};
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  line-height: 0.8;
  text-align: center;
  margin: 30px;

  @media only screen and ${device.laptop} {
    text-align: left;
    margin: 26px 0 26px 90px;
  }
`;
