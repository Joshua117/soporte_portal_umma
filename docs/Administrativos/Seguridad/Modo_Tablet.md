---
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Seguridad/ModoTab.jpg', 
    '/img/Seguridad/ModoTab1.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IphoneWrapper>
        <img 
          src={imagenes[index]} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
          alt="Registro" 
        />
      </IphoneWrapper>
    </div>
  );
};

{/* --- ESTRUCTURA RESPONSIVA FINAL --- */}
<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">
    
    {/* Columna de texto */}
    <div className="col col--7"> 
      ## Grado Escolar
      <p>
        Para poder agregar los <a href="/docs/Administrativos/Nada/Nada">Nada</a> para ir a otro módulo.
      </p>
    </div>

    {/* Columna del slider */}
    <div className="col col--5">
      <RegistroSlider />
    </div>

  </div>
</div>