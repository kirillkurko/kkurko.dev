import styled, { css } from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  primary?: boolean;
};

export const Wrapper = styled.section`
  width: 100vw;
  display: flex;
`;

export const Side = styled.div<Props>`
  width: 50%;
  height: ${({ theme }: ThemeProps) => theme.sizes.height.full};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.white};
  color: ${({ theme }: ThemeProps) => theme.colors.text};

  ${({ primary }: Props) =>
    primary &&
    css`
      background-color: ${({ theme }: ThemeProps) => theme.colors.primary};
      color: ${({ theme }: ThemeProps) => theme.colors.white};
    `}
`;
