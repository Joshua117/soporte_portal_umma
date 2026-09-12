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
    '/img/DocentesPanel/FormatosDoc.webp', 
    '/img/DocentesPanel/AgregarFor.webp'
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

    Este módulo actúa como el **repositorio centralizado de toda la documentación esencial del profesorado**, garantizando un control integral, seguro y estructurado de los expedientes digitales. Su objetivo principal es **estandarizar la recopilación, el almacenamiento y la consulta continua** de la información indispensable a lo largo de todo el ciclo de vida laboral e institucional del docente.

### Catálogo de Documentación
El sistema gestiona diversos formatos que permiten obtener una visión detallada y actualizada del perfil, la capacidad pedagógica y la labor docente:

* **Curriculum Vitae (CV):** Registro detallado y estructurado de la trayectoria profesional, formación académica, certificaciones y especializaciones del docente.
* **Planes Programáticos:** Documentos académicos que detallan los contenidos temáticos, objetivos de aprendizaje, criterios de evaluación y metodologías de enseñanza aplicadas en cada asignatura.
* **Reportes de Desempeño:** Historial de evaluaciones docentes, métricas de cumplimiento y retroalimentación sobre la labor pedagógica en el aula para asegurar la calidad académica.

> **Propósito del Módulo:** La digitalización y centralización de estos formatos optimiza significativamente los procesos administrativos y académicos:
> * **Agilidad en la Contratación:** Centraliza la información del expediente para la validación rápida, eficiente y oportuna de los perfiles solicitados.
> * **Inducción Efectiva:** Facilita el acceso directo del personal de nuevo ingreso a las políticas, guías y lineamientos institucionales.
> * **Eficiencia en la Búsqueda:** Elimina la dependencia de archivos físicos dispersos, consolidando un entorno de consulta digital rápido, accesible y ordenado.

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