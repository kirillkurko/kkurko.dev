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
    white: string;
    primary: string;
    text: string;
  };
  fontSize: {
    nav: string;
    hero: string;
    words: string;
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
    white: '#FFF',
    primary: '#284FCD',
    text: '#1F1F1F',
  },
  fontSize: {
    nav: `${16 / 16}rem`,
    hero: `${35 / 16}rem`,
    words: `calc(2vw + 2.5vh)`,
  },
  sizes: {
    height: {
      full: `calc(100vh - 64px)`,
    },
  },
  fontFamilies,
  ...miuTheme,
};
