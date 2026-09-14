---
title: Historial
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Transporte/HistoriaAlum.webp", "/img/Transporte/HistorialPers.webp"]} />
}>

## Historial

El Historial de Validaciones funciona como la bitácora central de auditoría operativa. En este módulo se registran de manera automatizada todas las validaciones realizadas por los choferes al momento de abordar el transporte.

### Estructura de los Registros
El sistema mantiene un control detallado de cada evento de acceso. Independientemente del tipo de usuario (Alumno o Personal), el historial captura la misma estructura de datos para garantizar la trazabilidad total del servicio:

* **Fecha:** Día en el que se realizó la validación.
* **Asiento:** Identificador de la plaza ocupada en la unidad.
* **Vehículo:** Unidad asignada al servicio.
* **Chofer:** Nombre del conductor responsable de la validación.
* **Hora de salida:** Registro exacto del momento en que se validó la salida de la unidad.

### Segmentación por Perfiles
Para facilitar la consulta y el análisis, el historial está dividido en dos apartados principales que operan bajo la misma lógica de registro:

* **Apartado de Alumnos:** Contiene el registro histórico de todos los accesos realizados por la comunidad estudiantil.
* **Apartado de Personal:** Contiene el registro histórico de los accesos realizados por el personal administrativo o docente.

Esta organización permite a la institución realizar seguimientos específicos y generar reportes de flujo de personas de manera eficiente.

</DualLayout>