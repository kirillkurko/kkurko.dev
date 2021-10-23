import styled from 'styled-components';
import { ThemeProps, device } from '@theme/theme';

export const Wrapper = styled.section`
  background: ${({ theme }: ThemeProps) => theme.colors.footer};
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: calc(100vh - 72px);

  @media only screen and ${device.laptop} {
    height: calc(100vh - 128px);
    padding: 90px;
  }
`;

export const Header = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.header};

  @media only screen and ${device.laptop} {
    margin: 0 0 20vh 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;

  @media only screen and ${device.laptop} {
    flex-direction: row;
    height: unset;
    justify-content: unset;
  }
`;

export const Side = styled.div`
  @media only screen and ${device.laptop} {
    width: 50%;
  }
`;

export const LinksSide = styled(Side)`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h4`
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};
  margin: 0 0 5px 0;
  text-transform: uppercase;

  @media only screen and ${device.laptop} {
    margin-bottom: 20px;
  }
`;

export const Mail = styled.a`
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.mail};
  border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.colors.white};
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and ${device.laptop} {
    width: 50%;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: max-content max-content;
    gap: 20px 40px;
    grid-template-areas:
      '. . .'
      '. . .';
  }
`;

export const Link = styled.a`
  width: fit-content;
  text-transform: uppercase;
  font-weight: bold;
  flex: 1 0 50%;

  @media only screen and ${device.laptop} {
    flex: unset;
    flex: 1 0 33%;
  }
`;
