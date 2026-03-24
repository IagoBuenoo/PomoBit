import { toast } from 'react-toastify';

import styles from './styles.module.css';

const pixel = {
  className: styles.pixelatedMsg,
};

export const showMessage = {
  success: (msg: string) => toast.success(msg, pixel),
  error: (msg: string) => toast.error(msg, pixel),
  warn: (msg: string) => toast.warn(msg, pixel),
  warning: (msg: string) => toast.warning(msg, pixel),
  info: (msg: string) => toast.info(msg, pixel),
};
