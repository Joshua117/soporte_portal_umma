---
title: Agregar Personal
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/AdministrativosPanel/Registro1.jpg', 
    '/img/AdministrativosPanel/Registro2.jpg'
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
  
  <div> 
    
## Agregar Personal Administrativo

Este módulo permite el alta eficiente del personal administrativo dentro del sistema, garantizando la centralización de su información y la correcta asignación de permisos operativos. El registro estructurado facilita la integración rápida de nuevos colaboradores a la estructura institucional.

### Datos Requeridos para el Alta
Para completar el registro de un administrativo, es necesario capturar la siguiente información:

#### Información de Identidad:

Nombre y Apellidos: Identificación completa del colaborador.

Fecha de Nacimiento: Dato esencial para el expediente personal.

Teléfono: Número de contacto directo para comunicación interna.

#### Información Institucional:

Campus: Sede o campus al cual se asignará al colaborador.

Área / Departamento: Unidad de trabajo específica donde desempeñará sus funciones.

Correo Institucional: Dirección de correo electrónico oficial de la institución.

Usuario de Acceso: Nombre de usuario único para ingresar a los módulos y herramientas especiales del sistema administrativo.
  </div>

  <div style={{ width: '300px' }}>
    <RegistroSlider />
  </div>

</div>

{/* Aquí puedes mantener tus <style> globales o moverlos a un archivo .css */}