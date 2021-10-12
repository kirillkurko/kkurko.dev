import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  size: number;
};

export const Wrapper = styled.div<Props>`
  width: ${({ size }: Props) => `${size}%`};
  border-radius: 50%;
  background-color: ${({ theme }: ThemeProps) => theme.colors.primary};

  img {
    min-height: 85% !important;
    min-width: 85% !important;
    max-height: 85% !important;
    max-width: 85% !important;
    top: -25px !important;
  }
`;
