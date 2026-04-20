---
title: Agregar Estudiantes
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/EstudiantesPanel/Registro1.jpg', 
    '/img/EstudiantesPanel/Registro2.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <IphoneWrapper>
      <img 
        src={imagenes[index]} 
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
        alt="Registro" 
      />
    </IphoneWrapper>
  );
};

# Registro

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  <div> 
    
## Grado Escolar

Para poder agregar los [Grados y Areas Escolares](/docs/Administrativos/Grados_y_Areas_Escolares/Añadir_Editar) para ir a otro módulo.
  </div>

  <div style={{ width: '300px' }}>
    <RegistroSlider />
  </div>

</div>