import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const fontPrimary = ({ theme }: ThemeProps) => theme.fontFamilies.primary;
const fontSecondary = ({ theme }: ThemeProps) => theme.fontFamilies.secondary;
const colorTextPrimary = ({ theme }: ThemeProps) => theme.colors.textPrimary;
const colorBackground = ({ theme }: ThemeProps) => theme.colors.background;
const colorAccent = ({ theme }: ThemeProps) => theme.colors.accent;
const colorLinkTextHover = ({ theme }: ThemeProps) =>
  theme.colors.linkTextHover;

export const PageTitle = styled.h1`
  font-family: ${fontPrimary};
  font-size: 2.4rem;
  word-break: break-word;
  font-weight: bold;
  color: ${colorTextPrimary};
`;

export const SectionTitle = styled.h2`
  font-family: ${fontPrimary};
  font-size: 1.8rem;
  word-break: break-word;
  font-weight: bold;
  color: ${colorTextPrimary};
  border-bottom: 1px solid ${colorTextPrimary};
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const ArticleTitle = styled.h3`
  font-family: ${fontPrimary};
  font-size: 1.4rem;
  word-break: break-word;
  font-weight: bold;
  color: ${colorTextPrimary};
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-family: ${fontSecondary};
  word-break: break-word;
  color: ${colorTextPrimary};
  line-height: 1.6;
  letter-spacing: 1px;
`;

export const BorderBlock = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
  padding: 1.5rem;
  box-sizing: border-box;
  color: ${colorTextPrimary};
  background: ${colorBackground};
  background-clip: padding-box;
  border: solid 5px transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(180deg, #e16c0d 0%, #ffe445 100%);
`;

export const Link = styled.a`
  cursor: pointer;

  p {
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    margin: 1rem 0 0 0;

    color: ${colorAccent};

    &:hover {
      color: ${colorLinkTextHover};
    }
  }
`;
