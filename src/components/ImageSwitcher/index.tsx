import React, { useState } from 'react';
import IphoneWrapper from '../IphoneWrapper';
import styles from './styles.module.css';

const Iz1 = require('../Icons/Iz1.png').default;
const De1 = require('../Icons/De1.png').default;
const Iz = require('../Icons/Iz.png').default;
const De = require('../Icons/De.png').default;

interface ImageSwitcherProps {
  images: string[];
}

export default function ImageSwitcher({ images }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  const prevImage = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className={styles.container}>
      
      {/* El teléfono se queda arriba por el flujo del container */}
      <div className={styles.phoneSection}>
        <IphoneWrapper>
          <img 
            src={images[currentIndex]} 
            alt={`Vista ${currentIndex + 1}`} 
            className={styles.carouselImage}
          />
        </IphoneWrapper>
      </div>

      {/* Los controles aparecen siempre debajo */}
      <div className={styles.controls}>
        <button 
          onClick={prevImage} 
          className={styles.navButton}
          disabled={currentIndex === 0}
        >
          <img className={`light-only ${styles.navIcon}`} src={Iz1} alt="Anterior" />
          <img className={`dark-only ${styles.navIcon}`} src={Iz} alt="Anterior" />
        </button>
        
        <span className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </span>

        <button 
          onClick={nextImage} 
          className={styles.navButton}
          disabled={currentIndex === images.length - 1}
        >
          <img className={`light-only ${styles.navIcon}`} src={De1} alt="Siguiente" />
          <img className={`dark-only ${styles.navIcon}`} src={De} alt="Siguiente" />
        </button>
      </div>
    </div>
  );
}