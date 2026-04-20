import React, { useState } from 'react';
import IphoneWrapper from '../IphoneWrapper';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      
      <IphoneWrapper>
        <img 
          src={images[currentIndex]} 
          alt={`Vista ${currentIndex + 1}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </IphoneWrapper>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Botón Anterior: Deshabilitado si es la imagen 0 */}
        <button 
          onClick={prevImage} 
          style={btnStyle}
          disabled={currentIndex === 0}
        >
          <img className="light-only" src={Iz1} alt="Anterior" style={iconStyle} />
          <img className="dark-only" src={Iz} alt="Anterior" style={iconStyle} />
        </button>
        
        <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--ifm-color-emphasis-700)', minWidth: '40px', textAlign: 'center' }}>
          {currentIndex + 1} / {images.length}
        </span>

        {/* Botón Siguiente: Deshabilitado si es la última imagen */}
        <button 
          onClick={nextImage} 
          style={btnStyle}
          disabled={currentIndex === images.length - 1}
        >
          <img className="light-only" src={De1} alt="Siguiente" style={iconStyle} />
          <img className="dark-only" src={De} alt="Siguiente" style={iconStyle} />
        </button>
        
      </div>
    </div>
  );
}

const btnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  transition: 'background-color 0.2s ease',
};

const iconStyle = { 
  width: '24px', 
  height: '24px', 
  display: 'block' 
};