import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Heading() {
  return (
    <div className={styles.heading}>
      <RouterLink className={styles.logo} href='/'>
        PomoBit
      </RouterLink>
      <div className={styles['heading-buttons']}>
        <button className={styles['heading-button']}>Sign Up</button>
        <button className={styles['heading-button']}>Sign In</button>
      </div>
    </div>
  );
}
