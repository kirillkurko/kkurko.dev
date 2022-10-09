import { ReactNode } from 'react';
import { Theme } from '@app-types/theme';
import { themes } from '@theme/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from 'next-themes';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { theme } = useTheme();

  console.log(theme);

  // @ts-ignore
  const currentTheme = themes[theme ?? Theme.Dark];

  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
