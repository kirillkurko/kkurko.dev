import styled from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

type Props = {
  size: number;
};

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: ThemeProps) => theme.colors.background};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and ${device.laptop} {
    flex-direction: row;
    width: calc(35vw + 600px);
  }
`;

export const Side = styled.div<Props>`
  width: ${({ size }: Props) => `${size}vh`};
  display: flex;
  justify-content: center;

  @media only screen and ${device.laptop} {
    width: ${({ size }: Props) => `${size}vw`};
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.hero};
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  font-weight: normal;
  text-transform: uppercase;
  width: fit-content;
  text-align: left;

  @media only screen and ${device.laptop} {
    margin: 0 0 0 ${60 / 16}rem;
    text-align: left;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
