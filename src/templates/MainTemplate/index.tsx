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
      <Heading />
      <Menu />
      <ToastContainer position='top-right' style={{ top: '6rem' }} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
