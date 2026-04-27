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

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  {/* Columna de Texto */}
  <div> 
    ## Agregar Estudiantes

    Este módulo está diseñado para formalizar el ingreso de estudiantes a la institución, garantizando que cada alumno sea clasificado correctamente dentro de la oferta académica y cuente con su identidad digital desde el primer día.

    ### Proceso de Registro
    El sistema sigue una lógica estructurada para asegurar la integridad de los datos académicos:

    * **Selección de Grado Escolar:** El proceso inicia definiendo el nivel académico del aspirante.
    * **Determinación del Área:** Una vez seleccionado el grado, el sistema identifica automáticamente el área correspondiente, filtrando únicamente las opciones académicas válidas para ese nivel.
    * **Selección de Licenciatura:** Se elige el programa académico específico que cursará el estudiante.
    * **Captura de Datos Personales:** Registro básico de la información del alumno, incluyendo nombre(s) y apellidos.

    ### Automatización y Asignación de Identidad
    Una vez completada la captura, el sistema gestiona los recursos administrativos de forma automática, eliminando errores de formato y agilizando la creación del perfil:

    * **Matrícula:** Se genera una clave única institucional, la cual servirá como el identificador principal del alumno en todo el sistema.
    * **Correo Institucional:** Se crea automáticamente la cuenta de correo oficial basada en la nueva matrícula, facilitando el acceso inmediato a las plataformas digitales de la institución.

    > **Propósito del Módulo:** La estandarización de este proceso permite asegurar el orden administrativo al registrar a los alumnos, agilizar la creación de su identidad digital en un solo paso y mantener la consistencia de los datos entre grados, áreas y licenciaturas para facilitar reportes y estadísticas posteriores.
  </div>

  {/* Columna del Slider (Sticky) */}
  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <RegistroSlider />
  </div>

</div>