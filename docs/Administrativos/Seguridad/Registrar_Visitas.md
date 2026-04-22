---
pagination_next: Administrativos/Seguridad/index
title: Registro Visitas
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Seguridad/RegistrarVis.jpg', 
    '/img/Seguridad/RegistrarVis1.jpg'
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

{/* Contenedor con padding-horiz--lg para separar del borde */}
<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">
    
    {/* Columna de texto */}
    <div className="col col--7"> 
      ## Registro Visitas
      <p>
      Este módulo permite gestionar el control de acceso a las instalaciones, tanto para peatones como para personas que ingresan en vehículo. El proceso es supervisado por el guardia de vigilancia en la puerta de acceso, garantizando la seguridad y agilizando el flujo de entrada.

Para completar el registro, el visitante debe cumplir con los siguientes pasos:

Captura de identidad: Se realiza una toma fotográfica para el registro de identidad del visitante.

Datos personales: Ingreso obligatorio del nombre y apellidos completos.

Destino y Notificación: Selección del área de destino. El sistema notificará automáticamente al departamento correspondiente configurado en <Link to="/docs/Administrativos/Seguridad/Ajustes" className="link-destacado">Ajustes Visita</Link>, permitiendo brindar una atención más eficiente y coordinada.

Contacto: Registro de un número telefónico de contacto para cualquier comunicación necesaria durante la estancia.

Datos del vehículo: En caso de ingresar en unidad propia, es obligatorio registrar la información del vehículo en el campo habilitado para ello.
      </p>
    </div>

    {/* Columna de la imagen */}
    <div className="col col--5">
      <RegistroSlider />
    </div>

  </div>
</div>