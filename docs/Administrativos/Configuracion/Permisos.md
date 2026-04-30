---
title: Permisos
sidebar_position: 2
hide_table_of_contents: true
pagination_next: Administrativos/Configuracion/index
---

import DualLayout from '@site/src/components/DualLayout';

<DualLayout 
  imageSrc="/img/Configuracion/Permisos.jpg" 
  altText="Agregar Servicio" 
  stickyImage={true}
>

Este módulo es el núcleo de seguridad y control de acceso del **PortaLUMMA**. Su objetivo es definir con precisión qué acciones pueden ejecutar los distintos departamentos dentro del sistema, garantizando que cada área trabaje únicamente con las herramientas y datos necesarios para sus funciones.

### Gestión de Funciones por Departamento
No todas las áreas tienen las mismas responsabilidades, por lo cual este módulo permite una configuración granular:

* **Asignación de Roles:** Define qué departamentos tienen acceso a qué módulos del sistema.
* **Control de Acciones:** Establece permisos específicos sobre los datos:
    * **Visualización:** Solo consulta de información.
    * **Edición:** Capacidad de modificar registros existentes.
    * **Gestión Total:** Autorización para crear, eliminar o administrar recursos.

### Importancia de la Restricción
La implementación de permisos y restricciones es vital para mantener la integridad operativa del sistema:

> **Seguridad y Orden:** Al limitar el uso por área, evitamos errores humanos y accesos no autorizados, asegurando que cada departamento se enfoque exclusivamente en sus tareas asignadas, protegiendo así la información sensible de la institución.

### Configuración de Permisos
La administración de permisos es dinámica, permitiendo adaptar el sistema a medida que la institución crece o las funciones de los departamentos evolucionan, asegurando siempre un entorno de trabajo organizado y seguro.

</DualLayout>