import { useMemo, useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavLink from '@atoms/NavLink';
import { useTranslation } from 'next-i18next';
import { useStyles } from './atoms';

function NavBar() {
  const [activeLink, setActiveLink] = useState('hero');
  const [sections, setSections] = useState<NodeListOf<HTMLElement>>();
  const classes = useStyles();
  const { t } = useTranslation('common');

  const links = useMemo(() => {
    return [
      { id: 'skills', href: '#skills', label: t('navbar.skills') },
      { id: 'about', href: '#about', label: t('navbar.about') },
      { id: 'experience', href: '#experience', label: t('navbar.experience') },
      { id: 'contact', href: '#contact', label: t('navbar.contact') },
    ];
  }, [t]);

  const isActive = (currentLink: string) => activeLink === currentLink;

  const handleClick = (href: string) => setActiveLink(href);

  const handleScroll = useCallback(() => {
    sections?.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        setActiveLink(section.getAttribute('id') ?? ';');
      }
    });
  }, [sections]);

  useEffect(() => {
    if (document) {
      setSections(document.querySelectorAll('section'));
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AppBar position='sticky' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        {links.map(({ id, href, label }) => (
          <NavLink
            href={href}
            label={label}
            key={href}
            active={isActive(id)}
            onClick={handleClick}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
