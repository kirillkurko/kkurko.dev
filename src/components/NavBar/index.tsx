import { useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createStyles, makeStyles } from '@mui/styles';
import { ThemeInterface } from '@theme/theme';
import NavLink from '@components/NavBar/NavLink';
import { useTranslation } from 'next-i18next';

const useStyles = makeStyles((theme: ThemeInterface) =>
  createStyles({
    appbar: {
      background: theme.colors.white,
      color: theme.colors.text,
      boxShadow: 'none',
      fontFamily: theme.fontFamilies.primary,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '20px',
    },
  }),
);

function NavBar(): JSX.Element {
  const [activeLink, setActiveLink] = useState('');
  const classes = useStyles();
  const { t } = useTranslation('common');

  const links = useMemo(() => {
    return [
      { href: '#skills', label: t('navbar:skills') },
      { href: '#experience', label: t('navbar:experience') },
      { href: '#about', label: t('navbar:about') },
      { href: '#contact', label: t('navbar:contact') },
    ];
  }, [t]);

  const isActive = (href: string) => activeLink === href;

  const handleClick = (href: string) => setActiveLink(href);

  return (
    <AppBar position='sticky' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        {links.map(({ href, label }) => (
          <NavLink
            href={href}
            label={label}
            key={href}
            active={isActive(href)}
            onClick={handleClick}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
