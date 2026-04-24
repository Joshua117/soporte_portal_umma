---
title: Lista Estudiantes
hide_table_of_contents: true
pagination_next: Administrativos/Gestion_Alumnos/index
---

<div className="container margin-vert--lg">
  <div className="row">
    <div className="col col--10 col--offset-1">

      {/* Imagen centrada con estilo profesional */}
      <img 
        src="/img/EstudiantesPanel/ListaAlumnos.png" 
        alt="Lista de estudiantes" 
        style={{ 
          width: '100%', 
          maxWidth: '900px', 
          margin: '0 auto 30px auto', 
          display: 'block',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }} 
      />

      ## Lista
      <p>
        Este módulo funciona como el hub de consulta principal para visualizar la población estudiantil de la institución. 
        Su objetivo es proporcionar una vista integral y organizada de todos los alumnos, facilitando la búsqueda rápida, 
        la validación de estatus académico y la consulta de datos generales.
      </p>

      ### Filtros de Búsqueda
      <p>
        Para optimizar la localización de información, el sistema permite realizar consultas filtradas mediante los siguientes parámetros:
      </p>
      <ul>
        <li><strong>Grado Escolar:</strong> Nivel académico al que pertenece el alumno.</li>
        <li><strong>Área Académica:</strong> Especialidad o área de adscripción.</li>
        <li><strong>Plan de Estudios:</strong> Selección del programa académico específico.</li>
      </ul>
      <p>
        Estos filtros actúan de manera conjunta para acotar la búsqueda y reducir el tiempo de respuesta al consultar grandes volúmenes de registros.
      </p>

      ### Visualización de Datos
      <p>
        Una vez aplicado el filtro, el sistema despliega una tabla detallada con información clave que permite al personal administrativo conocer el estado actual de cada estudiante:
      </p>
      <ul>
        <li><strong>Estatus del Alumno:</strong> Indica si el alumno se encuentra Activo o inactivo en la institución.</li>
        <li><strong>Semestre:</strong> Identificación del avance académico (periodo actual).</li>
        <li><strong>Turno:</strong> Jornada horaria asignada al estudiante.</li>
      </ul>

      ### Propósito del Módulo
      <p>La centralización de esta información permite a la administración:</p>
      <ul>
        <li><strong>Búsqueda Ágil:</strong> Localizar perfiles de alumnos de manera inmediata sin navegar por múltiples pantallas.</li>
        <li><strong>Monitoreo de Estatus:</strong> Identificar rápidamente la situación académica de los estudiantes para procesos de inscripción, reinscripción o atención personalizada.</li>
        <li><strong>Gestión de Datos:</strong> Mantener un registro verificado que sirve como base para reportes institucionales y seguimiento escolar.</li>
      </ul>

    </div>
  </div>
</div>