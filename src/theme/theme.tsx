type FontFamiliesType = {
  primary: string;
  mono: string;
};

export const fontFamilies: FontFamiliesType = {
  primary: ['Red Hat Text', 'sans-serif'].join(','),
  mono: ['IBM Plex Sans', 'sans-serif'].join(','),
};

export interface ThemeInterface {
  colors: {
    background: string;
    white: string;
    primary: string;
    text: string;
    footer: string;
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
  fontFamilies,
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
