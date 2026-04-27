---
sidebar_label: Formatos Docentes
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
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
        alt="Formatos" 
      />
    </IphoneWrapper>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  <div> 
    ## Formatos

    Este módulo actúa como el repositorio centralizado de toda la documentación esencial del profesorado. Su objetivo es estandarizar la recopilación, el almacenamiento y la consulta de la información necesaria para el ciclo de vida laboral del docente, desde su contratación hasta su evaluación continua.

    ### Catálogo de Documentación
    El sistema gestiona diversos formatos que permiten obtener una visión integral del perfil y la labor docente:

    * **Curriculum Vitae (CV):** Registro detallado de la trayectoria profesional, la formación académica y la experiencia previa del docente.
    * **Planes Programáticos:** Documentos que detallan los contenidos, objetivos y metodologías de enseñanza, asegurando la alineación con los requerimientos institucionales.
    * **Reportes de Desempeño:** Historial de evaluaciones y métricas sobre la labor del docente en el aula, permitiendo un seguimiento constante de la calidad académica.

    > **Propósito del Módulo:** La digitalización de estos formatos permite optimizar procesos críticos:
    > * **Agilidad en la Contratación:** Centraliza la información para que Recursos Humanos pueda validar perfiles rápidamente.
    > * **Inducción Efectiva:** Facilita el acceso a políticas y estándares institucionales desde el primer día.
    > * **Eficiencia en la Búsqueda:** Elimina el uso de archivos físicos dispersos, creando un proceso digital ordenado y consultable en segundos.
  </div>

<div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <RegistroSlider />
  </div>

</div>