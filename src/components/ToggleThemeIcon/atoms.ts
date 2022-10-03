import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorIcon = ({ theme }: ThemeProps) => theme.colors.icon;

export const Wrapper = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: ${colorIcon};
`;
