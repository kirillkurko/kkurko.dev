import styled from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

export const Wrapper = styled.section`
  height: 100vh !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }: ThemeProps) => theme.colors.background};
  padding: 30px;

  @media only screen and ${device.laptop} {
    flex-direction: row;
    padding: unset;
    justify-content: unset;
  }
`;

export const Block = styled.div`
  display: flex;
`;

export const TextBlock = styled(Block)`
  flex-direction: column;
  justify-content: center;
  order: 2;

  @media only screen and ${device.laptop} {
    padding-left: 90px;
    width: 35%;
    order: 1;
  }
`;

export const BombBlock = styled(Block)`
  width: 45%;
  order: 3;
  align-self: center;

  @media only screen and ${device.laptop} {
    align-items: flex-end;
    align-self: unset;
    width: 20%;
    order: 2;
    padding-bottom: 20px;
  }
`;

export const SkillsBlock = styled(Block)`
  align-items: center;
  order: 1;
  width: 38vh;
  align-self: center;

  @media only screen and ${device.laptop} {
    padding-right: 90px;
    width: 45%;
    order: 3;
    align-self: unset;
  }
`;

export const SkillsWrapper = styled.div`
  width: 100%;

  img {
    top: 50px !important;
    left: -10px !important;
    min-height: 100% !important;
    min-width: 100% !important;
    max-height: 100% !important;
    max-width: 100% !important;
  }
`;

export const BombWrapper = styled.div`
  cursor: pointer;
  width: 100%;

  img {
    top: 0 !important;
    min-height: 75% !important;
    min-width: 75% !important;
    max-height: 75% !important;
    max-width: 75% !important;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.title};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  text-transform: uppercase;
  margin: 0;
`;

export const Description = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.fontFamilies.primary};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.description};
  text-transform: uppercase;
  margin: 0;
`;
