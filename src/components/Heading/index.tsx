import styles from './styles.module.css';

export function Heading() {
  return (
    <div className={styles.heading}>
      <h1 className={styles.logo}>
        <span>PomoBit</span>
        <img src='pomobit-logo.svg' alt='PomoBit Logo' />
      </h1>
      <div className={styles['heading-buttons']}>
        <button className={styles['heading-button']}>Sign Up</button>
        <button className={styles['heading-button']}>Sign In</button>
      </div>
    </div>
  );
}
