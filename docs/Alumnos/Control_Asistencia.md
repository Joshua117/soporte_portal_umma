---
title: Control de Asistencia
sidebar_label: Control de Asistencia
sidebar_position: 2
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Alumnos/Faltas.webp' },
    { type: 'image', src: '/img/Alumnos/Faltas1.webp' },
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
    <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      
      <button onClick={anteriorImagen} style={{ ...botonStyle, left: '-10px' }} aria-label="Anterior">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Control de Asistencia" 
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

<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">

    {/* Columna de Texto */}
    <div className="col col--7">
      En este módulo podrás llevar un **control puntual de tus asistencias** por materia, consultar las faltas registradas durante el periodo escolar y tramitar tus justificantes de manera 100% digital.

      ### Control de Inasistencias y Justificantes
      El portal te permite gestionar tus ausencias para mantener en orden tu historial académico. Ten en cuenta los siguientes lineamientos clave:

      * **Límite Semestral:** Tienes derecho a solicitar un **máximo de 3 justificantes por semestre**. Una vez agotados, el sistema no permitirá tramitar solicitudes adicionales.
      * **Plazo de Solicitud:** Contarás con un margen de **hasta 7 días naturales** a partir de la fecha de la falta para ingresar la solicitud en el portal.
      * **Proceso de Tramitación:** Al generar la solicitud desde la plataforma, asegúrate de **verificar y seleccionar correctamente la fecha** de la inasistencia.

      ---

      ### Pasos para tramitar un Justificante
      Ingresar tu solicitud en el portal es rápido y sencillo:

      1. **Accede al módulo:** Ingresa al apartado de **Control de Asistencia** desde tu panel de alumno.
      2. **Selecciona la falta:** Ubica la materia y la fecha exacta en la que registraste la inasistencia.
      3. **Completa los datos:** Adjunta la documentación comprobatoria o motivo de tu ausencia y confirma la fecha.
      4. **Envía la solicitud:** Una vez enviado el registro, el trámite pasará a revisión por la coordinación correspondiente.

      ---

      ### Seguimiento y Notificaciones de tu Solicitud
      Todo el seguimiento de tu trámite se realiza directamente desde la plataforma:

      * **Estatus en el Portal:** El resultado de tu solicitud (aprobada o rechazada) se notificará automáticamente dentro del portal.
      * **Aprobación y Recolección:** Si tu justificante es **aprobado**, podrás acudir al área correspondiente a recoger el documento impreso presentando tu **número de folio**.
      * **Rechazo o Correcciones:** En caso de no ser aprobado, se te indicará el motivo a través de una notificación en el portal para que puedas revisarlo.

      > **¡Importante!** Consulta periódicamente las notificaciones en tu portal. Mantenerte al pendiente te asegurará enviar tus trámites dentro del plazo de 7 días y recoger tus justificantes aprobados a tiempo.
    </div>

    {/* Columna del Mockup (Sticky) */}
    <div className="col col--5" style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
      <ArrowSlider />
    </div>

  </div>
</div>