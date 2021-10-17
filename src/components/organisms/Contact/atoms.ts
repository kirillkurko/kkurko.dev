import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

export const Wrapper = styled.section`
  height: calc(100vh - 128px);
  background: ${({ theme }: ThemeProps) => theme.colors.text};
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 90px;
`;

export const Header = styled.h2`
  margin: 0 0 20vh 0;
  text-transform: uppercase;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.header};
`;

export const Content = styled.div`
  display: flex;
`;

export const Side = styled.div`
  width: 50%;
`;

export const LinksSide = styled(Side)`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h4`
  margin: 0;
  text-transform: uppercase;
`;

export const LinksGroup = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: max-content max-content;
  gap: 20px 40px;
  grid-template-areas:
    '. . .'
    '. . .';
`;

export const Link = styled.a`
  flex: 1 0 33%;
  width: fit-content;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Mail = styled.p``;
