
import React, { useState } from 'react';
import IphoneWrapper from '../IphoneWrapper';
import Icono from '../Iconos';
import styles from './styles.module.css';

interface ImageSwitcherProps {
  images: string[];
}

export default function ImageSwitcher({
  images,
}: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, images.length - 1)
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  return (
    <div className={styles.container}>

      {/* Visualización del iPhone */}
      <div className={styles.phoneSection}>
        <IphoneWrapper>
          {images.length > 0 && (
            <img
              src={images[currentIndex]}
              alt={`Vista ${currentIndex + 1}`}
              className={styles.carouselImage}
            />
          )}
        </IphoneWrapper>
      </div>

      {/* Controles de navegación */}
      <div className={styles.controls}>

        {/* Botón anterior */}
        <button
          type="button"
          onClick={prevImage}
          className={styles.navButton}
          disabled={currentIndex === 0}
          aria-label="Imagen anterior"
        >
          <Icono
            nombre="chevron_left"
            size={36}
          />
        </button>

        {/* Contador de imágenes */}
        <span className={styles.counter}>
          {images.length === 0 ? 0 : currentIndex + 1}
          {' / '}
          {images.length}
        </span>

        {/* Botón siguiente */}
        <button
          type="button"
          onClick={nextImage}
          className={styles.navButton}
          disabled={
            images.length === 0 ||
            currentIndex >= images.length - 1
          }
          aria-label="Imagen siguiente"
        >
          <Icono
            nombre="chevron_right"
            size={36}
          />
        </button>

      </div>
    </div>
  );
}
