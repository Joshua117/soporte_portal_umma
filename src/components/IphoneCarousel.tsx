import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import IphoneWrapper from './IphoneWrapper';
import styles from './styles.module.css';

const iconIzq = require('../Icons/Iz.png').default;
const iconDer = require('../Icons/De.png').default;

interface ImageSwitcherProps {
  images: string[];
}

export default function ImageSwitcher({ images }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true 
  });

  return (
    /* El contenedor ahora maneja el flujo estático y el orden superior para móvil */
    <div className={styles.container}>
      
      {/* 1. Imagen del teléfono (Siempre arriba en móvil gracias a flex-direction: column) */}
      <div {...handlers} className={styles.imageColumn}> 
        <IphoneWrapper>
          <img 
            src={images[currentIndex]} 
            alt={`Vista ${currentIndex + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} 
          />
        </IphoneWrapper>
      </div>

      {/* 2. Controles (Aparecen debajo en móvil) */}
      <div className={styles.controls}>
        <button onClick={prevImage} className={styles.navButton}>
          <img src={iconIzq} alt="Anterior" className={styles.navIcon} />
        </button>
        
        <span className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </span>

        <button onClick={nextImage} className={styles.navButton}>
          <img src={iconDer} alt="Siguiente" className={styles.navIcon} />
        </button>
      </div>
    </div>
  );
}