---
title: Control de asistencias
sidebar_position: 2
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'; 
import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Docentes/AsistenciaDoc.png' },
    { type: 'image', src: '/img/Docentes/RegistrarFaltaDoc.png' }
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '-15px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Control de asistencias" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '-15px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      <div style={{ position: 'absolute', bottom: '-22px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'var(--ifm-color-primary)' : 'rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease'
          }}/>
        ))}
      </div>
    </div>
  );
};

<div className="responsive-container">

  <div className="slider-column">
    <ArrowSlider />
  </div>

  <div className="text-column">

Este módulo se constituye como la **herramienta central para el monitoreo en tiempo real de la puntualidad y el cumplimiento de la carga horaria del profesorado**. Su diseño permite a las autoridades administrativas contar con un registro riguroso, objetivo y transparente de la operatividad diaria en las aulas, garantizando que el servicio educativo se imparta en estricto apego a la planeación académica aprobada.

### Detalle de los Registros
Cada entrada generada en el sistema proporciona una **radiografía integral de la actividad docente** durante cada sesión programada:

* **Información General:** Identificación precisa de la fecha, hora de la sesión y asignatura impartida.
* **Estado de Asistencia:** Clasificación en tiempo real de la condición del docente (*Asistencia*, *Inasistencia* o *Incapacidad*).

#### Control Horario
* **Horario Asignado:** Bloque de tiempo estipulado oficialmente para la materia en la plantilla docente.
* **Registro de Entrada y Salida:** Marcas temporales exactas en las que el docente valida su inicio y término de actividad.
* **Retardos:** Identificación y registro automático de discrepancias cuando la entrada excede el margen de tolerancia institucional.

---

### Gestión de Incidencias y Reposición de Clases
El sistema integra una **plataforma automatizada para la justificación previa y reprogramación de horas lectivas**, permitiendo gestionar las ausencias con anticipación para mitigar el impacto en el avance curricular:

* **Notificación y Justificación Anticipada:** El docente puede avisar con tiempo a través del módulo sobre su inasistencia para justificar la falta y solicitar la reprogramación de la clase.
* **Flexibilidad en Reposiciones o Cancelaciones:** El docente puede gestionar únicamente las materias agendadas para el día en curso, teniendo la opción de programar una reposición o, en su defecto, procesar la cancelación definitiva de la sesión.
* **Modalidad de Reposición:** Se debe especificar la modalidad en que se impartirá la clase pendiente (*Virtual* o *Presencial*).
* **Asignación de Aula y Horario:** Para reposiciones presenciales, el docente debe indicar la fecha y el bloque horario propuesto; el sistema asignará automáticamente un salón disponible para la sesión.
* **Aprobación Administrativa y Notificación:** Toda solicitud debe ser validada por el administrador correspondiente. Una vez aprobada, el sistema emitirá **notificaciones automáticas vía correo institucional** notificando la confirmación al docente y a su grupo de estudiantes.

> **Propósito del Módulo:** Garantizar la cobertura total del temario universitario, optimizar la gestión de aulas y mantener un historial de asistencia y reprogramaciones transparente, dinámico y auditable.

  </div>

</div>

<style>{`
  .responsive-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0px 10px;
    align-items: flex-start;
  }

  .text-column {
    flex: 1 1 400px;
    margin-top: -20px;
  }

  .slider-column {
    flex: 0 0 320px;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 769px) {
    .text-column {
      order: 1;
    }
    .slider-column {
      order: 2;
      position: sticky;
      top: 100px;
    }
  }

  @media (max-width: 768px) {
    .responsive-container {
      padding: 0px 5px;
      gap: 30px;
    }
    .slider-column {
      order: 1;
      margin-bottom: 25px;
      width: 100%;
    }
    .text-column {
      order: 2;
      margin-top: 0;
    }
  }
`}
</style>