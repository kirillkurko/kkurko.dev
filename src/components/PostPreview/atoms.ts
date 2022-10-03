import styled from 'styled-components';
import { Paragraph } from '@components/atoms';
import { ThemeProps } from '@theme/theme';

const fontPrimary = ({ theme }: ThemeProps) => theme.fontFamilies.primary;
const colorTextPrimary = ({ theme }: ThemeProps) => theme.colors.textPrimary;

export const Wrapper = styled.li`
  margin-bottom: 50px;
`;

export const PublishDate = styled(Paragraph)`
  margin-top: 0;
  margin-bottom: 12px;
  opacity: 0.65;
  font-family: ${fontPrimary};
  font-size: 1rem;
`;

export const Link = styled.a`
  color: ${colorTextPrimary};
`;
