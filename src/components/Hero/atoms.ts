import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: ThemeProps) => theme.colors.footer};
  overflow: hidden;
  padding: 2rem;
  height: 100vh;

  @media (max-width: 1200px) {
    height: auto;
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
