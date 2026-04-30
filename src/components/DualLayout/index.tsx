import React from 'react';
import styles from './styles.module.css';
import IphoneWrapper from '../IphoneWrapper';

export default function DualLayout({ 
  children, 
  rightContent, 
  imageSrc, 
  altText, 
  textWidth = '100%',
  stickyImage = false 
}: any) {
  
  return (
    <div className={styles.container}> 
      
      {/* 1. IMAGEN/TELÉFONO: Aparecerá arriba en móvil */}
      <div className={`${styles.imageColumn} ${stickyImage ? styles.sticky : ''}`}>
        {rightContent ? rightContent : (
          <IphoneWrapper>
            {/* Usamos objectFit para que la imagen siempre quede perfecta dentro del iPhone */}
            <img 
              src={imageSrc} 
              alt={altText} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </IphoneWrapper>
        )}
      </div>

      {/* 2. TEXTO: Aparecerá debajo en móvil */}
      <div className={styles.textColumn} style={{ maxWidth: textWidth }}>
        {children}
      </div>
      
    </div>
  );
}