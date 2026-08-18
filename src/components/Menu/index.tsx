import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <RouterLink
          href='/'
          className={styles.menuLink}
          title='Home'
          aria-label='Home'
        >
          <HouseIcon />
        </RouterLink>
        <RouterLink
          href='/history/'
          className={styles.menuLink}
          title='History'
          aria-label='History'
        >
          <HistoryIcon />
        </RouterLink>
        <RouterLink
          href='/settings/'
          className={styles.menuLink}
          title='Settings'
          aria-label='Settings'
        >
          <SettingsIcon />
        </RouterLink>
        <a
          className={styles.themeButton}
          title='Change Theme'
          aria-label='Change Theme'
          onClick={handleTheme}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
