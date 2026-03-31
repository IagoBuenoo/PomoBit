import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <img src='/sun.png' alt='' />,
    light: <img src='/moon.png' alt='' />,
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
          <img src='/home.png' alt='' />
        </RouterLink>
        <RouterLink
          href='/history/'
          className={styles.menuLink}
          title='History'
          aria-label='History'
        >
          <img src='/history.png' alt='' />
        </RouterLink>
        <RouterLink
          href='/settings/'
          className={styles.menuLink}
          title='Settings'
          aria-label='Settings'
        >
          <img src='/settings.png' alt='' />
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
