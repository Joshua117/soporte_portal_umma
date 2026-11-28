---
title: Agendar Citas
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const CitasSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Cobranza/AgendCita.webp',
    '/img/Cobranza/AgendCita1.webp'
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
        alt="Agendar Citas"
      />
    </IphoneWrapper>
  );
};

{/* Contenedor Principal Adaptable */}
<div className="container-estudiantes" style={{
  display: 'flex',
  flexWrap: 'wrap-reverse', /* En móvil, pone lo que está abajo (teléfono) arriba */
  gap: '40px',
  padding: '20px',
  alignItems: 'flex-start'
}}>

  {/* Columna de Texto */}
  <div style={{ flex: '1 1 400px' }}>
Este módulo detalla el flujo guiado para **agendar citas de cobranza** a partir de la búsqueda por matrícula o datos del alumno, permitiendo consultar la disponibilidad en el calendario y completar los detalles de atención en un mismo lugar. El recorrido combina la localización del estudiante, la selección visual de la fecha y el llenado, validación y confirmación de los datos de la cita de forma ordenada:

### Búsqueda, Selección de Fecha y Confirmación de la Cita

- **Identificación y Búsqueda por Matrícula:** Inicia solicitando la matrícula (o datos de búsqueda del alumno) para ubicar su registro institucional y cargar su contexto dentro del flujo de agendamiento antes de habilitar el calendario operativo.
- **Calendario de Disponibilidad:** Tras ubicar al alumno, muestra el calendario mensual con desplazamiento entre meses y una distinción visual clara entre días con **citas disponibles**, días **sin citas** o saturados y días inhabilitados o fuera de vigencia para elegir una fecha válida.
- **Configuración de Trámite, Caja y Cupo:** Permite elegir el **concepto o tipo de trámite** (como inscripción, pago de parcialidad o reinscripción), la **forma de pago** (por ejemplo, efectivo o tarjeta), la **caja**, el **horario** y el **semestre**, reflejando en tiempo real los **cupos disponibles** según los tiempos configurados en el módulo de ajustes.
- **Confirmación y Control del Agendamiento:** Una vez verificados los campos y la disponibilidad del horario seleccionado, permite confirmar el registro mediante **Agendar**, asegurando que el turno quede asignado bajo las reglas operativas vigentes de cobranza.

> **Propósito del Módulo:** Agilizar y ordenar la programación de citas en caja con disponibilidad clara, información validada del estudiante, control de cupos por horario y trazabilidad completa del agendamiento.
  </div>

  {/* Columna del Slider - Se ajusta al ancho del iPhone */}
  <div style={{
    flex: '0 0 auto',
    margin: '0 auto',
    position: 'relative' /* Estático sin sticky */
  }}>
    <CitasSlider />
  </div>

</div>