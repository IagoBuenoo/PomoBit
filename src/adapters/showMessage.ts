import { Dialog } from '../components/Dialog';
import styles from './styles.module.css';

import { toast } from 'react-toastify';

const pixel = {
  className: styles.toastMessage,
  progressClassName: styles.toastProgress,
};

export const showMessage = {
  success: (msg: string) => toast.success(msg, pixel),
  error: (msg: string) => toast.error(msg, pixel),
  warn: (msg: string) => toast.warn(msg, pixel),
  warning: (msg: string) => toast.warning(msg, pixel),
  info: (msg: string) => toast.info(msg, pixel),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: confirmation => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
