---
title: Grados y Áreas Escolares
pagination_next: Administrativos/Grados_y_Areas_Escolares/index
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/GradoEscolar/Grado.webp',
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
        alt="Grados y Áreas" 
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

    Este módulo centraliza la administración de los niveles educativos que componen la oferta académica de la institución: Bachillerato, Licenciatura y Posgrado. Funciona como el eje estructural del sistema, permitiendo organizar y gestionar la progresión de los estudiantes de manera jerarquizada.

    ### Áreas Escolares
    Además de los niveles académicos, el módulo permite definir las Áreas Escolares, las cuales segmentan la oferta educativa y operativa en cuatro categorías fundamentales:

    * **Extraescolares:** Enfocada en actividades complementarias, deportivas o culturales.
    * **Medicina:** Área especializada para la formación técnica y clínica en el sector médico.
    * **Multidisciplinario:** Espacio destinado a programas transversales que combinan diversas disciplinas.
    * **Salud:** Área enfocada en programas, prevención y atención relacionados con el bienestar.

    ### Integración Estratégica
    La configuración de los grados escolares es un nodo de enlace vital para:

    * **Materias:** Filtra y asigna la oferta de asignaturas correspondiente a cada nivel.
    * **Ciclos Escolares:** Facilita la asociación de los periodos lectivos específicos.
    * **Planes de Estudio:** Alinea los programas educativos al nivel académico correspondiente.

    ### Propósito del Módulo
    Esta arquitectura de datos está diseñada para optimizar la configuración institucional, permitiendo:

    * **Facilidad de Asignación:** Entrelazar componentes de manera ágil.
    * **Coherencia Curricular:** Garantizar la integridad académica mediante planes de estudio y materias vinculados.
    * **Gestión Dinámica:** Adaptar cambios en la oferta educativa de forma rápida para toda la institución.
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