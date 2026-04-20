import React from 'react';
import styles from './styles.module.css';

interface TabletWrapperProps {
  children: React.ReactNode;
}

export default function TabletWrapper({ children }: TabletWrapperProps) {
  return (
    <div className={styles.tabletFrame}>
      {children}
    </div>
  );
}