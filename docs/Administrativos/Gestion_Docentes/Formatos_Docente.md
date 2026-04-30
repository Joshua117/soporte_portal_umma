---
title: Formatos Docentes
sidebar_position: 3
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/DocentesPanel/FormatosDoc.jpg', 
    '/img/DocentesPanel/AgregarFor.jpg'
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
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        alt="Formatos" 
      />
    </IphoneWrapper>
  );
};

{/* Contenedor Adaptable: Texto a la izquierda, Teléfono a la derecha (y arriba en móvil) */}
<div style={{ 
  display: 'flex', 
  flexWrap: 'wrap-reverse', 
  gap: '40px', 
  padding: '10px 20px',
  alignItems: 'flex-start'
}}>
  
  {/* Columna de Texto */}
  <div style={{ flex: '1 1 400px' }}> 

    Este módulo actúa como el repositorio centralizado de toda la documentación esencial del profesorado. Su objetivo es estandarizar la recopilación, el almacenamiento y la consulta de la información necesaria para el ciclo de vida laboral del docente.

    ### Catálogo de Documentación
    El sistema gestiona diversos formatos que permiten obtener una visión integral del perfil y la labor docente:

    * **Curriculum Vitae (CV):** Registro detallado de la trayectoria profesional y formación académica.
    * **Planes Programáticos:** Documentos que detallan los contenidos, objetivos y metodologías de enseñanza.
    * **Reportes de Desempeño:** Historial de evaluaciones y métricas sobre la labor del docente en el aula.

    > **Propósito del Módulo:** La digitalización de estos formatos permite optimizar procesos críticos:
    > * **Agilidad en la Contratación:** Centraliza la información para validación rápida de perfiles.
    > * **Inducción Efectiva:** Facilita el acceso a políticas institucionales.
    > * **Eficiencia en la Búsqueda:** Elimina archivos físicos dispersos, creando un proceso digital ordenado.
  </div>

  {/* Columna del Slider - Estática y Centrada en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto',
    position: 'relative' /* Estático para evitar que flote */
  }}>
    <RegistroSlider />
  </div>

</div>