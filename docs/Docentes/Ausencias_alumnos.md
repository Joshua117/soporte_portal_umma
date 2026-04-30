---
title: Alumnos Ausentes
sidebar_label: Alumnos Ausentes
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Docentes/AlumnosAus.png' },
    { type: 'image', src: '/img/Alumnos/RegistrarFala.png' },
  ];

  const siguienteImagen = () => {
    setIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const botonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ position: 'sticky', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <button onClick={anteriorImagen} style={{ ...botonStyle, left: '-10px' }} aria-label="Anterior">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Cobranza" 
        />
      </IphoneWrapper>

      <button onClick={siguienteImagen} style={{ ...botonStyle, right: '-10px' }} aria-label="Siguiente">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Indicadores de puntos */}
      <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'var(--ifm-color-primary)' : 'rgba(0, 0, 0, 0.2)',
          }}/>
        ))}
      </div>
    </div>
  );
};

{/* Contenedor Adaptable */}
<div style={{ 
  display: 'flex', 
  flexWrap: 'wrap-reverse', 
  gap: '40px', 
  padding: '10px 20px',
  alignItems: 'flex-start'
}}>

  <div style={{ flex: '1 1 400px' }}>

Este módulo constituye la herramienta central para que el personal docente ejecute un seguimiento personalizado y riguroso del cumplimiento escolar. La interfaz implementa un filtro inteligente de seguridad que despliega únicamente las materias vinculadas al perfil del docente dentro del ciclo escolar activo, asegurando que la gestión administrativa sea precisa y esté restringida a su carga académica autorizada.

Panel de Consulta de Inasistencias
En este apartado, se presenta un historial consolidado de los alumnos con incidencias de inasistencia. Esta vista centralizada está diseñada para facilitar el análisis de datos, permitiendo a los docentes detectar patrones de ausentismo de forma temprana y generar reportes para las estrategias de retención académica de la institución.

Registro de Nueva Inasistencia
El sistema optimiza el flujo de captura mediante un formulario dinámico que garantiza la integridad de la información. Para efectuar un registro correcto, siga este procedimiento:

Navegación: Acceda a la sección de "Registro de Faltas" desde el menú principal del módulo.

Selección de Clase: Identifique y seleccione la materia específica dentro de su listado de cursos vigentes.

Cronología del Evento: Defina en el calendario interactivo la fecha exacta de la ausencia. El sistema validará automáticamente que la fecha corresponda al ciclo lectivo en curso.

Vinculación del Alumno: Ingrese la matrícula del estudiante. El sistema realizará una validación en tiempo real para confirmar que el alumno se encuentre inscrito y activo en la lista de asistencia del grupo seleccionado, evitando errores de duplicidad o registros cruzados.

Finalización: Tras verificar los datos, presione el botón "Guardar" o "Agregar Falta". El registro se impactará de inmediato en el expediente académico del alumno y quedará disponible para consulta administrativa.
  </div>

  {/* Columna del Slider - Estática y Arriba en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto 40px auto', /* Margen inferior para que no pegue con el texto en móvil */
    position: 'relative' 
  }}>
    <ArrowSlider />
  </div>

</div>