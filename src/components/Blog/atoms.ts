import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const Header = styled.header`
  margin-bottom: 50px;
`;

export const Content = styled.main`
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export const Article = styled.article`
  p {
    font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  }
`;

export const Blockquote = styled.blockquote`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  margin: 0;
`;
