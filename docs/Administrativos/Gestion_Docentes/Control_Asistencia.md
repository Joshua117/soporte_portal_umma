---
title: Control de asistencias
sidebar_position: 2
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import Link from '@docusaurus/Link';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/DocentesPanel/AsistenciaDoc.jpg", "/img/DocentesPanel/ConfDiHa.jpg"]} />
}>

# Control de Asistencia

Control de Asistencia Docente
Este módulo permite el seguimiento integral de la actividad académica del profesorado. Su función es centralizar el registro de asistencia, gestionar los horarios de clase y administrar las incidencias o reposiciones de manera eficiente, garantizando que la operatividad académica esté siempre documentada.

Seguimiento de Actividades
El sistema realiza un monitoreo en tiempo real de la jornada docente, capturando los siguientes datos clave para cada clase:

Información del Docente: Identificación del profesor y asignatura impartida.

Registro de Tiempo: Horarios asignados, hora de entrada y hora de salida real.

Estado de Asistencia: Verificación de presencia. En caso de presentarse un retardo, el sistema calcula y registra automáticamente el tiempo exacto de demora.

Asignación de Área: Vinculación directa con el <Link to="/docs/Administrativos/Grados_y_Areas_Escolares/Añadir_Editar" className="link-destacado">Área</Link> de especialidad del maestro, permitiendo una mejor organización administrativa.

Gestión de Reposición de Clases
Cuando un docente no puede asistir a una sesión programada, el sistema ofrece una herramienta de gestión de incidencias para asegurar que el programa académico no se vea afectado:

Programación de Reposición: Permite asignar una nueva fecha para recuperar la clase perdida.

Modalidad de Impartición: Se especifica el entorno de la clase de reposición, permitiendo elegir entre formato Virtual o Presencial.

Control de Ubicación: Selección del salón o espacio digital donde se llevará a cabo la sesión de recuperación.

Propósito del Módulo
Esta centralización de datos es esencial para la administración, ya que permite generar reportes precisos sobre el cumplimiento de los horarios, evaluar la puntualidad y asegurar que todos los contenidos curriculares se impartan, facilitando la toma de decisiones ante cualquier eventualidad en el calendario escolar.

</DualLayout>