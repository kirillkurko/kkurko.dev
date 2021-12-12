import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

type GridItemProps = {
  name: string;
  color: string;
};

export const Wrapper = styled.section`
  padding: 0 200px;
  width: 100vw;
  height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    'Frontend Frontend Frontend Frontend Startups Startups Design Design'
    'Frontend Frontend Frontend Frontend React React Redux Redux'
    'Next Next GraphQL GraphQL HTML CSS TS JS';
`;

export const GridItem = styled.div<GridItemProps>`
  position: relative;
  grid-area: ${({ name }: GridItemProps) => name};
  border-radius: 20px;
  background-color: ${({ color }: GridItemProps) => color};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin: 0 auto;
  width: fit-content;
  text-transform: uppercase;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.skills};
  font-weight: bold;
`;
