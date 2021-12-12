import { createTheme, Theme } from '@mui/material/styles';

const miuTheme = createTheme();

type FontFamiliesType = {
  primary: string;
  mono: string;
};

export const fontFamilies: FontFamiliesType = {
  primary: ['Red Hat Text', 'sans-serif'].join(','),
  mono: ['Overpass Mono', 'monospace'].join(','),
};

export interface ThemeInterface extends Theme {
  colors: {
    background: string;
    white: string;
    primary: string;
    text: string;
    footer: string;
  };
  fontSize: {
    nav: string;
    hero: string;
    words: string;
    quote: string;
    title: string;
    header: string;
    description: string;
    skills: string;
    h4: string;
    mail: string;
  };
  sizes: {
    height: {
      full: string;
    };
  };
  fontFamilies: FontFamiliesType;
}

export interface ThemeProps {
  theme: ThemeInterface;
}

export const theme: ThemeInterface = {
  colors: {
    background: '#FFF',
    white: '#FFF',
    primary: '#284FCD',
    text: '#121212',
    footer: '#121212',
  },
  fontSize: {
    nav: `${16 / 16}rem`,
    hero: `${35 / 16}rem`,
    words: `calc(2vw + 2.5vh)`,
    skills: `${32 / 16}rem`,
    quote: `${30 / 16}rem`,
    title: `${40 / 16}rem`,
    header: `${50 / 16}rem`,
    description: `${25 / 16}rem`,
    h4: `${20 / 16}rem`,
    mail: `${18 / 16}rem`,
  },
  sizes: {
    height: {
      full: `calc(100vh - 64px)`,
    },
  },
  fontFamilies,
  ...miuTheme,
};

export const themeDark: ThemeInterface = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#121212',
    white: '#FFF',
    primary: '#284FCD',
    text: '#FFF',
  },
};

export const device = {
  mobileS: '(min-width: 320px)',
  mobileM: '(min-width: 375px)',
  mobileL: '(min-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  desktop: '(min-width: 2560px)',
  desktopL: '(min-width: 2560px)',
};

export const themes = {
  DARK: themeDark,
  LIGHT: theme,
};
