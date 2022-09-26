import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: ThemeProps) => theme.colors.footer};
  overflow: hidden;
`;

export const BlobWrapper = styled.div``;

export const TextBlock = styled.div`
  width: 30%;
  max-width: 500px;
`;

export const Text = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  font-size: ${18 / 16}rem;
  word-break: break-word;
  color: #fff;
`;

export const Title = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: ${32 / 16}rem;
  word-break: break-word;
  font-weight: bold;
  color: #fff;
`;
