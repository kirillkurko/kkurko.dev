import { createContext, ReactNode } from 'react';
import { Theme } from '@app-types/theme';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const themeContext = createContext<ThemeContext>({
  theme: Theme.Dark,
  toggleTheme: () => {},
});

type Props = {
  theme: Theme;
  toggleTheme: () => void;
  children: ReactNode;
};

const ThemeProvider = ({ children, theme, toggleTheme }: Props) => {
  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
