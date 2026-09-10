---
title: Agregar Académica
sidebar_position: 1
hide_table_of_contents: true
---

import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'start' }}>

  {/* 1. IMAGEN PRIMERO: Esto hace que en celular se vea arriba */}
  <div style={{ flex: '1 1 300px', order: 1 }}>
    <img 
      src="/img/CargaAcademica/CargaAcad.png" 
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
  
    Este módulo permite gestionar y registrar la carga académica del periodo. Para crear una nueva carga, es necesario definir los parámetros que estructuran el servicio educativo, garantizando que la asignación sea precisa y organizada.

    ### Pasos para crear una Carga Académica

    Para registrar correctamente una carga, deberás completar los siguientes campos en el sistema:

    * **Ciclo Escolar:** Seleccionar el ciclo escolar actual.
    * **Tipo de Carga:** Elegir la modalidad (Materia o Taller).
    * **Plan de Estudio:** Asignar el plan de estudio correspondiente.
    * **Materia:** Seleccionar la asignatura a impartir.
    * **Grupo:** Definir el grupo destino.
    * **Docente:** Asignar al profesor encargado.
    * **Programación:** Definir los días de clase.
    * **Salón:** Seleccionar el aula asignada.
    * **Cupo:** Establecer la cantidad máxima de alumnos.
    * **Horario:** Configurar hora de inicio y finalización.

    Una vez configurados todos estos puntos, el sistema permitirá guardar la carga académica, quedando activa y disponible para el ciclo seleccionado.
  </div>

</div>

</PageLayout>