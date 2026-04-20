import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

const iconIzq = require('../Icons/Iz.png').default;
const iconDer = require('../Icons/De.png').default;

interface ImageSwitcherProps {
  images: string[];
}

export default function ImageSwitcher({ images }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Estilo para el icono (Azul + Tamaño grande)
  const iconStyle = { 
    width: '100px', 
    height: '100px', 
    // Filtro CSS para convertir la imagen a azul
    filter: 'invert(34%) sepia(97%) saturate(2474%) hue-rotate(204deg) brightness(98%) contrast(92%)' 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      
      {/* Visualización del iPhone */}
      <IphoneWrapper>
        <img 
          src={images[currentIndex]} 
          alt={`Vista ${currentIndex + 1}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </IphoneWrapper>

      {/* Controles de navegación */}
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center', justifyContent: 'center' }}>
        
        <button onClick={prevImage} style={btnStyle}>
          <img src={iconIzq} alt="Anterior" style={iconStyle} />
        </button>
        
        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--ifm-color-emphasis-700)' }}>
          {currentIndex + 1} / {images.length}
        </span>

        <button onClick={nextImage} style={btnStyle}>
          <img src={iconDer} alt="Siguiente" style={iconStyle} />
        </button>
        
      </div>
    </div>
  );
}

const btnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '5px',
  display: 'flex',
  alignItems: 'center'
};