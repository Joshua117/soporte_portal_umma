---
title: Salones
sidebar_position: 10
hide_table_of_contents: true
pagination_next: Administrativos/Salones/index
---

import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Salon/PanelSalon.webp' },
    { type: 'image', src: '/img/Salon/AgregarSal1.webp' },
    { type: 'image', src: '/img/Salon/AgregarSal2.webp' },
   ];

  const siguienteImagen = () => {
    setIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const botonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
      
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '10px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Cobranza" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '10px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
          }}/>
        ))}
      </div>
    </div>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>

  <div>

## Salones

### Panel de Salones
El Panel de Salones permite consultar el catálogo de espacios disponibles para la actividad académica. En esta vista, podrá visualizar información detallada de cada salón, incluyendo su nombre, modalidad (virtual o presencial), capacidad de aforo y el <Link to="/docs/Administrativos/Mobiliario/Añadir_Editar" className="link-destacado">mobiliario</Link> asignado. Esta interfaz optimiza la gestión logística, facilitando la toma de decisiones al contar con datos precisos sobre el cupo y los recursos disponibles al momento de realizar una asignación.

### Crear un Salón
Para registrar un nuevo salón, defina la modalidad (presencial o virtual), asigne un nombre identificativo y establezca la capacidad máxima de alumnos. Durante el proceso de creación, podrá configurar el mobiliario y el equipamiento tecnológico del espacio, incluyendo elementos como televisores y proyectores, asegurando que cada salón cuente con los recursos necesarios para su operación.

###
Podremos ver tambien como esta designado el mobiliario indicado de cada salon mediante una vista simulativa para poder ver el acomodamiento adecuado y ver mas facilmente que clase de mobilirio hay

  </div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>