import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

export const Block = styled.div`
  height: ${({ theme }: ThemeProps) => theme.sizes.height.full};
  display: flex;
`;

export const TextBlock = styled(Block)`
  padding-left: 90px;
  width: 35%;
  flex-direction: column;
  justify-content: center;
`;

export const BombBlock = styled(Block)`
  width: 20%;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const SkillsBlock = styled(Block)`
  width: 45%;
  padding-right: 90px;
  align-items: center;
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
