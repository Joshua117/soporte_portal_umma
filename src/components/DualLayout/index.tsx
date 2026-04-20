import React from 'react';
import styles from './styles.module.css';
import IphoneWrapper from '../IphoneWrapper'; 

interface DualLayoutProps {
  children: React.ReactNode;
  rightContent?: React.ReactNode; // Nuevo prop opcional
  imageSrc?: string;
  altText?: string;
  textWidth?: string;
  stickyImage?: boolean;
}

export default function DualLayout({ 
  children, 
  rightContent, 
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
        {/* Lógica inteligente: Si pasas rightContent, lo renderiza directo. 
            Si NO pasas rightContent, aplica el marco clásico automáticamente. */}
        {rightContent ? rightContent : (
          <IphoneWrapper>
            <img src={imageSrc} alt={altText} className={styles.image} />
          </IphoneWrapper>
        )}
      </div>
    </div>
  );
}