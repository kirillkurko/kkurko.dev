import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

type Props = {
  size: number;
};

export const Wrapper = styled.section`
  width: 100vw;
  height: ${({ theme }: ThemeProps) => theme.sizes.height.full};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: calc(35vw + 600px);
`;

export const Side = styled.div<Props>`
  width: ${({ size }: Props) => `${size}vw`};
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
