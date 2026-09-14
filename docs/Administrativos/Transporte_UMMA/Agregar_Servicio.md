---
title: Agregar Servicio
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ServicioSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Transporte/AgregarServ.webp', 
    '/img/Transporte/AgregarServ1.webp'
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
          alt="Agregar Servicio" 
        />
      </IphoneWrapper>
    </div>
  );
};

<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">

    <div className="col col--7"> 
      ## Agregar Servicio

      Para **configurar un nuevo servicio de transporte**, el sistema requiere la interacción con diversos módulos que aseguran una gestión integral y eficiente del traslado institucional:

      * **<Link to="/docs/Administrativos/Transporte_UMMA/Choferes" className="link-destacado">Choferes</Link>:** Gestión y consulta del catálogo de conductores asignados y disponibles.
      * **<Link to="/docs/Administrativos/Transporte_UMMA/Horarios" className="link-destacado">Horarios</Link>:** Configuración de los tiempos de operación, itinerarios y frecuencias de ruta.
      * **<Link to="/docs/Administrativos/Transporte_UMMA/Vehiculos" className="link-destacado">Vehículos</Link>:** Administración completa y control del estado operativo de la flotilla.
      * **<Link to="/docs/Administrativos/Grados_y_Areas_Escolares/Añadir_Editar" className="link-destacado">Grados y Áreas Escolares</Link>:** Definición de los niveles educativos (Bachillerato, Licenciatura y Posgrado) vinculados directamente al servicio.

      ### Tipo de Servicio
      El sistema permite dos **clasificaciones estratégicas de servicio**, adaptadas al objetivo y logística del traslado:

      * **Normal:** Corresponde a la operación cotidiana y recurrente al finalizar la jornada académica, programada de lunes a sábados.
      * **Especial:** Destinado a traslados eventuales fuera de la rutina, como viajes académicos, eventos deportivos o actividades extracurriculares, permitiendo una programación logística flexible por día.

      > **Propósito del Módulo:** Centralizar la asignación de recursos operativos para garantizar viajes seguros, coordinados y con trazabilidad completa de horarios, conductores y unidades.
    </div>

    {/* Columna del mockup con slider */}
    <div className="col col--5">
      <ServicioSlider />
    </div>

  </div>
</div>