import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const Header = styled.header`
  margin-bottom: 50px;

  p {
    opacity: 0.6;
  }
`;

export const Content = styled.main`
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export const Article = styled.article`
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
  color: #fff;

  img {
    width: 100%;
    height: auto;
  }

  figure {
    margin-left: 0;
    margin-right: 0;
  }

  p {
    font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  }

  figcaption {
    opacity: 0.6;
  }
`;

export const Blockquote = styled.blockquote`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  margin: 0;
`;

export const PostsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;
