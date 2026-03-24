import type { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import type React from 'react';

type DefaultInputProps = {
  children: React.ReactNode;
  id: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({ children, id, ...rest }: DefaultInputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <input className={styles.input} id={id} {...rest} />
    </>
  );
}
