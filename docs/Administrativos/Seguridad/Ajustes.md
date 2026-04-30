---
title: Ajustes Visita
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Seguridad/AjustesVis.jpg', 
    '/img/Seguridad/AjustesVis1.jpg'
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
      ## Configurar Áreas de Visita

      Este módulo optimiza la recepción y canalización de visitantes o personas que acuden a realizar trámites administrativos a áreas específicas de la institución. Al registrar el ingreso, se especifica el motivo de la visita (por ejemplo: pagos, solicitudes de información, entre otros), lo que permite al sistema enviar una notificación automática al empleado responsable del área correspondiente.

      ### Características del Módulo
      * **Gestión por Modo Tablet:** El proceso se centraliza a través del <Link to="/docs/Administrativos/Seguridad/Modo_Tablet" className="link-destacado">Modo Tablet</Link>, permitiendo un registro rápido y autónomo.
      * **Notificaciones en Tiempo Real:** Aviso automático al empleado responsable del área visitada al momento del registro.
      * **Control y Trazabilidad:** Bitácora detallada del flujo de personas que ingresan a las instalaciones, garantizando seguridad y orden administrativo.
    </div>

    {/* Columna de la imagen */}
    <div className="col col--5">
      <RegistroSlider />
    </div>

  </div>
</div>