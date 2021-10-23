import styled from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Line = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.header};
  margin: 0;
  line-height: 1;

  @media only screen and ${device.laptop} {
    width: 50%;
    color: ${({ theme }: ThemeProps) => theme.colors.text};
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.words};
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
