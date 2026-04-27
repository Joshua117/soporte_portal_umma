import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

const iconIzq = require('../Icons/Iz.png').default;
const iconDer = require('../Icons/De.png').default;

interface ImageSwitcherProps {
  images: string[];
}

export default function ImageSwitcher({ images }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones de navegación manual
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // --- LÓGICA AUTOMÁTICA MEJORADA ---
  useEffect(() => {
    // Usamos el actualizador funcional 'prev' dentro del intervalo
    // Esto evita que React capture el valor inicial y siempre use el más nuevo
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    // Limpiamos el intervalo al desmontar para evitar errores
    return () => clearInterval(timer);
  }, [images.length]); // Solo se reinicia si cambia la lista de imágenes

  // Configuración de los gestos de swipe
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true 
  });

  const iconStyle = { 
    width: '100px', 
    height: '100px', 
    filter: 'invert(34%) sepia(97%) saturate(2474%) hue-rotate(204deg) brightness(98%) contrast(92%)' 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      
      {/* Contenedor del iPhone con Swipe */}
      <div {...handlers}> 
        <IphoneWrapper>
          <img 
            src={images[currentIndex]} 
            alt={`Vista ${currentIndex + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} 
          />
        </IphoneWrapper>
      </div>

      {/* Controles */}
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