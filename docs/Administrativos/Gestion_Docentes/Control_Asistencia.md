---
title: Control de asistencias
sidebar_position: 2
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/DocentesPanel/AsistenciaDoc.webp', 
    '/img/DocentesPanel/ConfDiHa.jpg'
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
        alt="Control Asistencia" 
      />
    </IphoneWrapper>
  );
};

{/* Contenedor Adaptable: Texto izquierda, Teléfono derecha (y arriba en móvil) */}
<div style={{ 
  display: 'flex', 
  flexWrap: 'wrap-reverse', 
  gap: '40px', 
  padding: '10px 20px',
  alignItems: 'flex-start'
}}>
  
  {/* Columna de Texto */}
  <div style={{ flex: '1 1 400px' }}> 

    Este módulo permite el seguimiento integral de la actividad académica del profesorado. Su función es centralizar el registro de asistencia, gestionar los horarios de clase y administrar las incidencias o reposiciones de manera eficiente, garantizando que la operatividad académica esté siempre documentada.

    ### Seguimiento de Actividades
    El sistema realiza un monitoreo en tiempo real de la jornada docente, capturando los siguientes datos clave para cada clase:

    * **Información del Docente:** Identificación del profesor y asignatura impartida.
    * **Registro de Tiempo:** Horarios asignados, hora de entrada y hora de salida real.
    * **Estado de Asistencia:** Verificación de presencia. En caso de presentarse un retardo, el sistema calcula automáticamente el tiempo exacto de demora.
    * **Asignación de Área:** Vinculación directa con el <Link to="/docs/Administrativos/Grados_y_Areas_Escolares/Añadir_Editar" className="link-destacado">Área</Link> de especialidad del maestro.

    ### Gestión de Reposición de Clases
    Cuando un docente no puede asistir a una sesión programada, el sistema ofrece una herramienta de gestión de incidencias:

    * **Programación de Reposición:** Permite asignar una nueva fecha para recuperar la clase perdida.
    * **Modalidad de Impartición:** Se especifica el entorno, permitiendo elegir entre formato Virtual o Presencial.
    * **Control de Ubicación:** Selección del salón o espacio digital para la sesión de recuperación.

    > **Propósito del Módulo:** Esta centralización de datos es esencial para la administración, ya que permite generar reportes precisos sobre el cumplimiento de horarios, evaluar la puntualidad y asegurar que todos los contenidos curriculares se impartan.
  </div>

  {/* Columna del Slider - Estática y Centrada en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto',
    position: 'relative' /* Estático para que no flote al hacer scroll */
  }}>
    <RegistroSlider />
  </div>

</div>