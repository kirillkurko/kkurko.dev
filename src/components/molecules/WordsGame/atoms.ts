import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Line = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.words};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  margin: 0;
  line-height: 1;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
