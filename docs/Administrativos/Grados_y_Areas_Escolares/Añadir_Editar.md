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
    '/img/GradoEscolar/Grado.jpg',
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
        alt="Formatos" 
      />
    </IphoneWrapper>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>
  
  <div> 
  
## Grados y Áreas Escolares

Este módulo centraliza la administración de los niveles educativos que componen la oferta académica de la institución: Bachillerato, Licenciatura y Posgrado. Funciona como el eje estructural del sistema, permitiendo organizar y gestionar la progresión de los estudiantes de manera jerarquizada.

### Áreas Escolares
Además de los niveles académicos, el módulo permite definir las Áreas Escolares, las cuales segmentan la oferta educativa y operativa en cuatro categorías fundamentales:

* **Extraescolares:** Enfocada en actividades complementarias, deportivas o culturales que enriquecen la formación integral del alumno.
* **Medicina:** Área especializada para la formación técnica y clínica en el sector médico.
* **Multidisciplinario:** Espacio destinado a programas transversales que combinan diversas disciplinas para un aprendizaje holístico.
* **Salud:** Área enfocada en programas, prevención y atención relacionados con el bienestar y la salud pública.

### Integración Estratégica
La configuración de los grados escolares no es aislada; su importancia radica en su interconexión con otros módulos clave, lo cual simplifica drásticamente la administración académica. Este apartado actúa como un nodo de enlace para:

* **Materias:** Permite filtrar y asignar la oferta de asignaturas correspondiente a cada nivel.
* **Ciclos Escolares:** Facilita la asociación de los periodos lectivos específicos para cada grado.
* **Planes de Estudio:** Asegura que los programas educativos estén correctamente alineados al nivel académico correspondiente.

### Propósito del Módulo
Esta arquitectura de datos está diseñada con el objetivo de optimizar la configuración institucional. Debido a que las materias, los contenidos y las metodologías varían significativamente entre niveles, centralizar estas conexiones permite:

* **Facilidad de Asignación:** Entrelazar componentes de manera ágil sin errores de configuración.
* **Coherencia Curricular:** Garantizar que cada grado mantenga su integridad académica mediante planes de estudio y materias correctamente vinculados.
* **Gestión Dinámica:** Adaptar los cambios en la oferta educativa de forma rápida y sencilla para toda la institución.
 </div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <RegistroSlider />
  </div>

</div>