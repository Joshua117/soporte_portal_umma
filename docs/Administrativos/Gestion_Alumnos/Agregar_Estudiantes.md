---
title: Agregar Estudiantes
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/EstudiantesPanel/Registro1.webp', 
    '/img/EstudiantesPanel/Registro2.webp'
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
    Este módulo está diseñado para **formalizar de manera ágil y precisa el ingreso de estudiantes** a la institución, garantizando que cada alumno sea clasificado correctamente dentro de la oferta académica y cuente con su **identidad digital** desde el primer día de su trayectoria universitaria.

### Proceso de Registro

* **Selección de Grado Escolar:** El proceso inicia definiendo el nivel académico del aspirante (licenciatura, maestría o posgrado).
* **Determinación del Área:** Una vez seleccionado el grado, el sistema identifica y despliega automáticamente las áreas de conocimiento correspondientes.
* **Selección de Licenciatura:** Se elige el programa académico específico en el que se inscribirá el estudiante.
* **Captura de Datos Personales:** Registro detallado de la información general del alumno para su expediente digital oficial.

### Automatización y Asignación de Identidad
Al completar el registro, el sistema ejecuta **procesos automatizados** para integrar de inmediato al estudiante a la plataforma:

* **Matrícula:** Se genera de forma automática una clave única institucional para trámites académicos y administrativos.
* **Correo Institucional:** Se crea automáticamente la cuenta oficial de correo electrónico, otorgándole acceso inmediato a las herramientas de la plataforma.

> **Propósito del Módulo:** Agiliza el flujo de inscripción.  
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