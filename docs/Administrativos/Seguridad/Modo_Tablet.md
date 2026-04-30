---
title: Modo Tablet
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Seguridad/ModoTab.png',
    '/img/Seguridad/ModoTab1.png'
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

<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">
    
    <div className="col col--7"> 
      ## Modo Tablet
      
      El acceso a las instalaciones mediante el Modo Tablet sigue un flujo estructurado diseñado para garantizar la seguridad y agilizar la atención. Para completar el registro de manera correcta, el visitante deberá seguir estos pasos:

      * **Captura de identidad:** Se requiere la toma de una fotografía para el registro gráfico del visitante.
      * **Datos personales:** Ingreso de nombre y apellidos completos en los campos correspondientes.
      * **Destino y Notificación:** Selección del área de visita. El sistema notificará automáticamente al departamento correspondiente mediante la configuración establecida en <Link to="/docs/Administrativos/Seguridad/Ajustes" className="link-destacado">Ajustes Visita</Link>, permitiendo brindar una atención más eficiente.
      * **Contacto:** Provisión de un número telefónico para cualquier comunicación necesaria.
      * **Vehículo:** En caso de arribar en vehículo, se deberán registrar los datos del mismo en el campo habilitado para ello.
    </div>

    {/* Columna del slider */}
    <div className="col col--5">
      <RegistroSlider />
    </div>

  </div>
</div>