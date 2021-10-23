import styled, { css } from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

type Props = {
  primary?: boolean;
};

export const Wrapper = styled.section`
  width: 100vw;
  display: flex;
`;

export const Side = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }: ThemeProps) => theme.colors.primary};
  color: ${({ theme }: ThemeProps) => theme.colors.text};

  @media only screen and ${device.laptop} {
    background: ${({ theme }: ThemeProps) => theme.colors.background};
  }

  ${({ primary }: Props) =>
    primary &&
    css`
      display: none;

      @media only screen and ${device.laptop} {
        display: flex;
        background: ${({ theme }: ThemeProps) => theme.colors.primary};
        color: ${({ theme }: ThemeProps) => theme.colors.white};
      }
    `}
`;

export const Text = styled.p`
  margin: 0;
  max-width: 60%;
  text-transform: uppercase;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.quote};
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-weight: bold;
`;
