---
title: Choferes
sidebar_class_name: hidden
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Transporte/PanelChof.webp", "/img/Transporte/AgregarChof.webp"]} />
}>

El sistema permite la emisión de boletos vinculados directamente a la matrícula del alumno. Al momento de generar un acceso, el sistema valida la disponibilidad en tiempo real, permitiendo al administrador asignar un asiento específico y seleccionar el horario correspondiente, garantizando así una ocupación organizada y sin conflictos.

### Funcionalidades Destacadas

* **Emisión y Corrección:** El administrador cuenta con la flexibilidad de emitir boletos de manera recurrente o realizar ajustes manuales en caso de cambios operativos, asegurando que siempre exista un registro vigente para el usuario.
* **Gestión de Asientos Bloqueados:** Es posible inhabilitar lugares específicos mediante un bloqueo de asiento. Esta funcionalidad es crítica para dos escenarios:
    * **Mantenimiento:** Inhabilitar lugares dañados o en reparación para evitar su asignación.
    * **Reservas Especiales:** Reservar espacios exclusivos para personal, invitados o necesidades operativas, garantizando que estos asientos no sean ocupados por el flujo regular de alumnos.
* **Automatización del Ciclo de Vida:** Para optimizar la administración diaria, el sistema ejecuta un proceso de reset automático al finalizar la jornada. Este proceso limpia el registro de boletos y libera todos los asientos, asegurando que la plataforma esté lista y configurada correctamente para el inicio del siguiente día, eliminando el riesgo de errores humanos por olvidos en la limpieza manual.

</DualLayout>