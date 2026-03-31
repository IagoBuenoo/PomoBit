import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made by Iago Bueno Ferreira</p>
      <RouterLink href='/about-pomodoro/'>
        Learn about the Pomodoro Technique
      </RouterLink>
    </footer>
  );
}
