import { Theme } from '@app-types/theme';

type FontFamiliesType = {
  primary: string;
  secondary: string;
};

export const fontFamilies: FontFamiliesType = {
  primary: ['Red Hat Text', 'sans-serif'].join(','),
  secondary: ['IBM Plex Sans', 'sans-serif'].join(','),
};

export interface ThemeInterface {
  colors: {
    textPrimary: string;
    background: string;
    themeToggle: string;
    icon: string;
    border: string;
    button: string;
    accent: string;
    textLink: string;
    linkHover: string;
    linkTextHover: string;
  };
  fontFamilies: FontFamiliesType;
}

export interface ThemeProps {
  theme: ThemeInterface;
}

export const themeDark: ThemeInterface = {
  colors: {
    textPrimary: '#fff',
    background: '#121212',
    themeToggle: '#404040',
    icon: '#e5e7eb',
    button: 'rgb(34, 34, 34)',
    border: 'rgba(255, 255, 255, 0.2)',
    accent: 'rgb(102, 102, 102)',
    textLink: 'rgb(255, 255, 255, 0.6)',
    linkHover: 'rgb(234, 234, 234, 0.1)',
    linkTextHover: 'rgb(69, 69, 69)',
  },
  fontFamilies,
};

export const theme: ThemeInterface = {
  ...themeDark,
  colors: {
    ...themeDark.colors,
    textPrimary: '#121212',
    background: '#fff',
    themeToggle: '#e5e7eb',
    icon: '#1f2937',
    button: 'rgba(234, 234, 234, 0.8)',
    border: 'rgba(255, 255, 255, 0.2)',
    accent: 'rgb(102, 102, 102)',
    textLink: 'rgb(102, 102, 102)',
    linkHover: 'rgba(234, 234, 234, 0.8)',
    linkTextHover: 'rgb(69, 69, 69)',
  },
};

export const themes = {
  [Theme.Dark]: themeDark,
  [Theme.Light]: theme,
};
