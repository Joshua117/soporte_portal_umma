---
title: Áreas
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Configuracion/Areas.webp' },
    { type: 'image', src: '/img/Configuracion/AgregarAreas.webp' },

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

Este módulo funciona como el catálogo central de la estructura organizacional de la institución. Su propósito principal es permitir la visualización, gestión y creación de las distintas áreas operativas que componen el sistema.

### Gestión de Áreas
Aquí podrás mantener un registro actualizado de todas las unidades o departamentos existentes, facilitando el orden institucional:

* **Visualización General:** Accede a una lista completa de las áreas disponibles en el sistema para tener un panorama claro de la estructura actual.
* **Creación de Nuevas Áreas:** El sistema es flexible y escalable; si surge un nuevo departamento o área, puedes registrarlo de manera sencilla ingresando únicamente su nombre.

### Relación con Permisos
Una vez creada un área, el sistema permite definir su alcance operativo. Al vincular cada área con los **Permisos** correspondientes, podrás determinar con precisión qué acciones pueden o no realizar los integrantes de dicha área, asegurando que cada sector tenga acceso solo a las funciones necesarias para su labor.

---

> **Nota:** La correcta administración de estas áreas es fundamental para mantener un entorno de trabajo organizado y seguro dentro de PortaLUMMA.

  </div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>