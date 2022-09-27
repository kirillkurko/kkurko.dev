import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: ThemeProps) => theme.colors.footer};
  overflow: hidden;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 1200px) {
    overflow: auto;
    padding-bottom: 5rem;
  }
`;

export const BlobWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const TextBlock = styled.div`
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

  &:first-child {
    margin-top: 0;
  }
`;
