import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorBorder = ({ theme }: ThemeProps) => theme.colors.border;
const colorBackground = ({ theme }: ThemeProps) => theme.colors.background;
const colorTextPrimary = ({ theme }: ThemeProps) => theme.colors.textPrimary;
const fontSecondary = ({ theme }: ThemeProps) => theme.fontFamilies.secondary;

export const Wrapper = styled.div``;

export const Header = styled.header`
  margin-bottom: 50px;

  p {
    opacity: 0.6;
  }
`;

export const Content = styled.section``;

export const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${colorTextPrimary};
  
  pre {
    background: ${colorBackground}; !important;
    border: 1px solid ${colorBorder};
    border-radius: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  figure {
    margin-left: 0;
    margin-right: 0;

  p {
    letter-spacing: 1px;
    font-family: ${fontSecondary};
  }

  figcaption {
    opacity: 0.6;
  }
`;

export const Blockquote = styled.blockquote`
  font-family: ${fontSecondary};
  margin: 0;
  letter-spacing: 1px;
  line-height: 1.6;
`;
