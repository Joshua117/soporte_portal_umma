import React from 'react';
import styles from './IphoneWrapper.module.css';

export default function IPhoneWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.notch}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}