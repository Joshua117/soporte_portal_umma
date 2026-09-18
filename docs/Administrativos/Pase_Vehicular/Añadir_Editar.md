---
title: Añadir/Editar
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Pase Vehicular/AgregarPase.webp' },
    { type: 'image', src: '/img/Pase Vehicular/AgregarPase1.webp' },

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

# Añadir

Este módulo detalla el procedimiento guiado para la **asignación formal de un pase vehicular** a los miembros de la comunidad universitaria. El flujo está optimizado para completarse en un par de pasos sencillos dentro del sistema:

### Requisitos Previos y Flujo de Asignación

* **Registro de Documentación Base:** Antes de iniciar la asignación, es indispensable haber cargado previamente en el sistema los datos validados de la **Identificación Oficial (INE)** y la **Tarjeta de Circulación** del vehículo.
* **Selección del Rol Institucional:** Con la documentación registrada, se debe definir el **rol del usuario** dentro de la institución (Alumnos, Docentes o Administrativos) para aplicar los criterios y permisos correspondientes.
* **Generación del Folio Único:** Al confirmar los datos y el rol, el sistema procesa la solicitud y **genera automáticamente un folio único**, vinculando formalmente la unidad al expediente del usuario.

> **Propósito del Módulo:** Garantizar que ninguna unidad ingrese al campus sin la validación previa de documentos y la vinculación a un perfil activo dentro de la institución.

</div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>