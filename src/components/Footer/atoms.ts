import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorAccent = ({ theme }: ThemeProps) => theme.colors.accent;

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 2rem;
  padding: 0 10px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 0.5px;
  margin: 0 0 1rem 0;
  background-color: ${colorAccent};
  border: none;
`;

export const ColumnsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
