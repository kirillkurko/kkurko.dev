import styled, { css } from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  size: number;
  maxContent?: boolean;
};

export const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
`;

export const Side = styled.div<Props>`
  width: ${({ size }: Props) => `${size}%`};

  ${({ maxContent }: Props) =>
    maxContent &&
    css`
      max-width: max-content;
    `}
`;

export const Title = styled.h1`
  margin: 0 0 0 ${60 / 16}rem;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.hero};
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  font-weight: normal;
  text-transform: uppercase;
  width: fit-content;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
