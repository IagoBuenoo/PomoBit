import { ToastContainer } from 'react-toastify';
import { Heading } from '../../components/Heading';
import { Footer } from '../../components/Footer';

import type React from 'react';

import styles from './styles.module.css';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className={styles.layout}>
      <ToastContainer className={styles.toastContainer} position='top-center' />
      <Heading />
      <Menu />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
