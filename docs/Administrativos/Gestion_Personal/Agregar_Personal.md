---
title: Agregar Personal
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/AdministrativosPanel/Registro1.png', 
    '/img/AdministrativosPanel/Registro2.png'
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

    Este módulo permite el alta eficiente del personal administrativo dentro del sistema, garantizando la centralización de su información y la correcta asignación de permisos operativos. El registro estructurado facilita la integración rápida de nuevos colaboradores a la estructura institucional.

    ### Datos Requeridos para el Alta
    Para completar el registro de un administrativo, es necesario capturar la siguiente información:

    * **Información de Identidad:**
        * **Nombre y Apellidos:** Identificación completa del colaborador.
        * **Fecha de Nacimiento:** Dato esencial para el expediente personal.
        * **Teléfono:** Número de contacto directo para comunicación interna.

    * **Información Institucional:**
        * **Campus:** Sede o campus al cual se asignará al colaborador.
        * **Área / Departamento:** Unidad de trabajo específica donde desempeñará sus funciones.
        * **Correo Institucional:** Dirección de correo electrónico oficial de la institución.
        * **Usuario de Acceso:** Nombre de usuario único para ingresar a los módulos y herramientas especiales del sistema administrativo.
  </div>

  {/* Columna del Slider - Estática y Centrada en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto',
    position: 'relative' 
  }}>
    <RegistroSlider />
  </div>

</div>