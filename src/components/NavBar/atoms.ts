import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorThemeToggle = ({ theme }: ThemeProps) => theme.colors.themeToggle;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavItemsWrapper = styled.div`
  display: flex;
`;

export const ToggleThemeButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background-color: ${colorThemeToggle};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
