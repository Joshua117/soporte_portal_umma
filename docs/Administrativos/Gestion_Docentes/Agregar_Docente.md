---
title: Agregar Docente
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/DocentesPanel/AgregarDoc1.jpg', 
    '/img/DocentesPanel/AgregarDoc2.jpg'
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
        alt="Registro Docente" 
      />
    </IphoneWrapper>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  {/* Columna de Texto */}
  <div> 
    ## Agregar Docentes

    Este módulo está diseñado para agilizar el proceso de alta de nuevos docentes a la institución. Su interfaz intuitiva permite capturar de manera eficiente toda la información necesaria para crear el perfil académico y habilitar los accesos correspondientes a las plataformas institucionales.

    ### Información del Registro
    Para dar de alta a un docente, el sistema requiere la recopilación de los siguientes datos, organizados por categorías:

    **Datos Personales y de Adscripción:**
    * **Campus:** Sede a la que será asignado el docente.
    * **Identidad:** Nombre(s), Apellidos y sexo.
    * **Contacto (Opcional):** Número de teléfono personal para comunicación operativa.

    **Accesos e Identificación Institucional:**
    * **Correo Institucional:** Generado automáticamente a partir de la matrícula del docente.
    * **Usuario Portal:** Credencial única para acceder al "portalumma".
    * **Tarjeta de Checador (Opcional):** Identificador físico para el registro de asistencia.

    **Perfil Académico:**
    * **Nivel de Estudios:** Clasificación del grado académico del docente.
    * **Nombre de la Especialidad/Título:** Nombre específico de su formación.

    ### Propósito del Módulo
    La captura precisa de esta información es fundamental no solo para el control administrativo, sino para mantener un expediente docente actualizado que permita conocer la capacidad académica del personal que colabora en la institución. Este registro garantiza que, desde el primer día, el docente cuente con los accesos necesarios para integrarse a sus actividades académicas.
  </div>

  {/* Columna del Slider (Sticky) */}
  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <RegistroSlider />
  </div>

</div>