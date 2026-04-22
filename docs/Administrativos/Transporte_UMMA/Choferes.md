---
title: Choferes
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Transporte/PanelChof.jpg", "/img/Transporte/AgregarChof.jpg"]} />
}>

# Choferes
El personal de choferes es responsable de la operación y supervisión de las unidades de transporte. Cada conductor tiene asignada una unidad específica, siendo responsable de su cuidado preventivo y del mantenimiento del orden dentro del vehículo.

Funciones y responsabilidades:
Validación de acceso: Tienen la responsabilidad crítica de escanear los boletos de los alumnos al abordar, asegurando un registro preciso de los pasajeros que ingresan a la unidad.

Consulta de información: A través de la interfaz del sistema, pueden consultar los horarios programados y la disponibilidad de asientos en tiempo real.

Restricciones del sistema: Por motivos de seguridad y control administrativo, los choferes cuentan con acceso de solo lectura. Esto significa que no tienen permisos para modificar horarios, asignar asientos ni generar nuevos boletos; su capacidad operativa se limita exclusivamente a la validación de accesos.

Programación: Cada chofer opera bajo un esquema de rutas, horarios y días asignados previamente por la administración para garantizar la cobertura del servicio.
</DualLayout>