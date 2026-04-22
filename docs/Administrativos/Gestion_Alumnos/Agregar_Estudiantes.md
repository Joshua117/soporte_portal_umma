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

# Estudiantes

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  <div> 
    
## Agregar Estudiantes

Aquí tienes la documentación para el módulo de Inscripción de Nuevos Alumnos. He organizado el flujo para que quede claro qué pasos realiza el usuario y qué procesos gestiona automáticamente el sistema.

Inscripción de Nuevos Alumnos
Este módulo está diseñado para formalizar el ingreso de estudiantes a la institución, garantizando que cada alumno sea clasificado correctamente dentro de la oferta académica y cuente con su identidad digital desde el primer día.

### Proceso de Registro
El sistema sigue una lógica estructurada para asegurar la integridad de los datos académicos:

Selección de Grado Escolar: El proceso inicia definiendo el nivel académico del aspirante.

Determinación del Área: Una vez seleccionado el grado, el sistema identifica automáticamente el área correspondiente, permitiendo visualizar únicamente las opciones académicas válidas para ese nivel.

Selección de Licenciatura: Se elige el programa académico específico que cursará el estudiante.

Captura de Datos Personales: El usuario ingresa la información básica del alumno:

Nombre(s)

Apellidos

### Automatización y Asignación de Identidad
Una vez completada la captura, el sistema realiza la gestión administrativa de forma automática, eliminando errores de formato y agilizando la creación del perfil:

Matrícula: Se genera una clave única especial para el alumno, la cual servirá como su identificador dentro de toda la institución.

Correo Institucional: Se crea automáticamente la cuenta de correo personal del alumno basada en su nueva matrícula, facilitando su acceso inmediato a las plataformas digitales institucionales.

### Propósito del Módulo
La estandarización de este proceso permite:

Orden Administrativo: Asegurar que ningún alumno sea registrado sin una licenciatura o grado asignado.

Agilidad Operativa: Crear la identidad digital (matrícula y correo) en un solo paso, permitiendo al alumno integrarse rápidamente a sus actividades escolares.

Consistencia de Datos: Mantener la relación correcta entre Grado, Área y Licenciatura para facilitar reportes y estadísticas posteriores.
  </div>

  <div style={{ width: '300px' }}>
    <RegistroSlider />
  </div>

</div>