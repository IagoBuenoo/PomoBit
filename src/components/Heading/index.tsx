import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Heading() {
  return (
    <div className={styles.heading}>
      <RouterLink className={styles.logo} href='/'>
        Pomodoro
      </RouterLink>
    </div>
  );
}
