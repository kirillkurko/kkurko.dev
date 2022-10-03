import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorTextPrimary = ({ theme }: ThemeProps) => theme.colors.textPrimary;
const colorButton = ({ theme }: ThemeProps) => theme.colors.button;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }
`;

export const LinkButton = styled.a`
  color: ${colorTextPrimary};
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  background-color: ${colorButton};
  padding: 1rem 4rem;
  margin: 1rem auto 0 auto;
  cursor: pointer;
`;
