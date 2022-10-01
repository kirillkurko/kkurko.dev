import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const PageTitle = styled.h1`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: 2.4rem;
  word-break: break-word;
  font-weight: bold;
  color: #fff;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: 1.8rem;
  word-break: break-word;
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const ArticleTitle = styled.h3`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: 1.4rem;
  word-break: break-word;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.mono};
  word-break: break-word;
  color: #fff;
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
  color: #FFF;
  background: ${({ theme }: ThemeProps) => theme.colors.text};
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

    color: rgb(102, 102, 102);

    &:hover {
      color: rgb(69, 69, 69);
    }
  }
`;
