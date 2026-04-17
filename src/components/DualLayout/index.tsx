import React from 'react';
import styles from './styles.module.css';
import IphoneWrapper from '../IphoneWrapper'; 

interface DualLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  altText: string;
  textWidth?: string;
  stickyImage?: boolean;
}

export default function DualLayout({ 
  children, 
  imageSrc, 
  altText, 
  textWidth = '100%',
  stickyImage = false 
}: DualLayoutProps) {
  
  return (
    <div className={styles.container}>  
      <div className={styles.content} style={{ maxWidth: textWidth }}>
        {children}
      </div>
      
      <div className={`${styles.imageWrapper} ${stickyImage ? styles.sticky : ''}`}>
        {/* Usamos tu componente externo aquí */}
        <IphoneWrapper>
          <img src={imageSrc} alt={altText} className={styles.image} />
        </IphoneWrapper>
      </div>
    </div>
  );
}
