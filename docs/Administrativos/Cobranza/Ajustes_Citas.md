---
title: Ajustes Citas
sidebar_position: 1
hide_table_of_contents: true
---

import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'start' }}>

  {/* 1. IMAGEN PRIMERO: Esto hace que en celular se vea arriba */}
  <div style={{ flex: '1 1 300px', order: 1 }}>
    <img 
      src="/img/Cobranza/ConfCitas.webp" 
      alt="Lista de estudiantes" 
      style={{ 
        width: '100%', 
        borderRadius: '40px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginTop: '20px'
      }} 
    />
  </div>

  {/* 2. TEXTO DESPUÉS: Esto hace que en celular quede abajo */}
  <div style={{ flex: '2 1 400px', order: 2 }}>

# Configuracion
En este apartado se configuran las reglas operativas, intervalos de tiempo y experiencia visual durante la atención en ventanilla, garantizando un flujo eficiente de usuarios y el correcto control de la agenda.

### Configuración de Tiempos de Citas
Permite definir los parámetros temporales de atención para calcular con precisión la capacidad de las cajas y evitar saturación en las filas:

* **Tiempo de Atención:** Duración estimada para el procesamiento de trámites por cada persona en ventanilla.
* **Tiempo de Espera Intermedia:** Intervalo de tolerancia o preparación configurado entre la salida de un usuario y el llamado del siguiente.
* **Tiempo de Descanso:** Ventana de pausas programadas o recesos operativos para las cajas tras finalizar una atención.
* **Margen Mínimo de Agendamiento:** Anticipación mínima requerida por el sistema para que un usuario pueda reservar o programar una cita.

---

### Disponibilidad de Fechas y Horarios
Facilita la estructuración del calendario operativo para ofrecer una representación visual clara de las jornadas habilitadas:

* **Rango de Fechas:** Definición flexible de periodos específicos (intervalos de fecha de inicio a fecha de fin).
* **Jornadas Operativas:** Configuración de días de atención (como esquemas de lunes a sábado) distinguiendo claramente entre días hábiles e inhábiles.
* **Visualización de Disponibilidad:** Interfaz clara que permite tanto al personal como al usuario identificar de un vistazo las fechas y espacios libres para agendar.

---

### Panel de Espera y Contenido Multimedia
Permite personalizar la pantalla pública que observan los usuarios mientras aguardan la llamada de su turno:

* **Avisos Informativos:** Muestra de textos institucionales, comunicados o instrucciones generales en pantalla.
* **Contenido Multimedia:** Integración de videos promocionales o educativos mediante enlaces externos para amenizar el tiempo de espera.

> **Propósito del Módulo:** Balancear la carga de trabajo en ventanillas, evitar cuellos de botella en la atención y brindar una experiencia de espera clara y dinámica para la comunidad institucional.

    </div>

</div>

</PageLayout>