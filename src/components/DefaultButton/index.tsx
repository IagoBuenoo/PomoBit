import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function DefaultButton({
  children,
  className = '',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        className={`${styles.button} ${className}`}
        type='button'
        {...props}
      >
        {children}
      </button>
    </>
  );
}
