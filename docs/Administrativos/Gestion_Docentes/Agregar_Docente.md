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
    '/img/DocentesPanel/AgregarDoc1.png', 
    '/img/DocentesPanel/AgregarDoc2.png'
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
        alt="Registro Docente" 
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

    Este módulo está diseñado para agilizar el proceso de alta de nuevos docentes a la institución. Su interfaz intuitiva permite capturar de manera eficiente toda la información necesaria para crear el perfil académico y habilitar los accesos correspondientes a las plataformas institucionales.

    ### Información del Registro
    Para dar de alta a un docente, el sistema requiere la recopilación de los siguientes datos, organizados por categorías:

    **Datos Personales y de Adscripción:**
    * **Campus:** Sede a la que será asignado el docente.
    * **Identidad:** Nombre(s), Apellidos y sexo.
    * **Contacto (Opcional):** Número de teléfono personal.

    **Accesos e Identificación Institucional:**
    * **Correo Institucional:** Generado automáticamente a partir de la matrícula.
    * **Usuario Portal:** Credencial única para acceder al "portalumma".
    * **Tarjeta de Checador (Opcional):** Identificador físico para asistencia.

    **Perfil Académico:**
    * **Nivel de Estudios:** Clasificación del grado académico.
    * **Nombre de la Especialidad/Título:** Nombre específico de su formación.

    ### Propósito del Módulo
    La captura precisa de esta información es fundamental para mantener un expediente docente actualizado. Este registro garantiza que el docente cuente con los accesos necesarios para integrarse a sus actividades desde el primer día.
  </div>

  {/* Columna del Slider - Estática y Centrada en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto',
    position: 'relative' /* Estático, no sigue el scroll */
  }}>
    <RegistroSlider />
  </div>

</div>