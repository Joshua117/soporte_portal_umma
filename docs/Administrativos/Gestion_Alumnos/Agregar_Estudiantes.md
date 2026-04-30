---
title: Agregar Estudiantes
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/EstudiantesPanel/Registro1.png', 
    '/img/EstudiantesPanel/Registro2.png'
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
        alt="Registro" 
      />
    </IphoneWrapper>
  );
};

{/* Contenedor Principal Adaptable */}
<div className="container-estudiantes" style={{ 
  display: 'flex', 
  flexWrap: 'wrap-reverse', /* En móvil, pone lo que está abajo (teléfono) arriba */
  gap: '40px', 
  padding: '20px',
  alignItems: 'flex-start'
}}>
  
  {/* Columna de Texto */}
  <div style={{ flex: '1 1 400px' }}> 
    Este módulo está diseñado para formalizar el ingreso de estudiantes a la institución, garantizando que cada alumno sea clasificado correctamente dentro de la oferta académica y cuente con su identidad digital desde el primer día.

    ### Proceso de Registro
    El sistema sigue una lógica estructurada para asegurar la integridad de los datos académicos:

    * **Selección de Grado Escolar:** El proceso inicia definiendo el nivel académico del aspirante.
    * **Determinación del Área:** Una vez seleccionado el grado, el sistema identifica automáticamente el área correspondiente.
    * **Selección de Licenciatura:** Se elige el programa académico específico.
    * **Captura de Datos Personales:** Registro básico de la información del alumno.

    ### Automatización y Asignación de Identidad
    * **Matrícula:** Se genera una clave única institucional.
    * **Correo Institucional:** Se crea automáticamente la cuenta oficial.

    > **Propósito del Módulo:** La estandarización permite asegurar el orden administrativo y mantener la consistencia de los datos para reportes y estadísticas.
  </div>

  {/* Columna del Slider - Se ajusta al ancho del iPhone */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto',
    position: 'relative' /* Quitamos sticky para que sea estático como pediste */
  }}>
    <RegistroSlider />
  </div>

</div>