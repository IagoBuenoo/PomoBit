import type { ToastContentProps } from 'react-toastify';
import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <div className={styles.dialog}>
      <p>{data}</p>

      <div className={styles.dialogButtons}>
        <button
          className={styles.dialogButton}
          onClick={() => closeToast(true)}
        >
          Yes
        </button>

        <button
          className={styles.dialogButton}
          onClick={() => closeToast(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
