---
title: Vehiculos
hide_table_of_contents: true
pagination_next: Administrativos/Transporte_UMMA/index
---

import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Transporte/PanelVehi.jpg", "/img/Transporte/AgregarVehi.jpg"]} />
}>

# Vehiculos

El módulo de Vehículos permite la administración integral de la flotilla de transporte institucional. Esta interfaz centraliza el catálogo de unidades disponibles, facilitando el monitoreo constante de su estado y garantizando que la información técnica esté siempre actualizada para una logística eficiente.

Gestión de Unidades
Para mantener un control preciso, cada vehículo debe ser registrado en el sistema con la siguiente información:

Identificación: Nombre o modelo del vehículo.

Matrícula: Identificador oficial de la unidad.

Capacidad: Número máximo de pasajeros permitidos (incluyendo al conductor).

Referencia visual: Imagen del vehículo para facilitar su identificación inmediata por parte del personal administrativo y de vigilancia.

Operaciones Disponibles
El sistema ofrece total flexibilidad para gestionar el ciclo de vida de cada unidad:

Alta: Registro de nuevas unidades ingresando todos los datos técnicos requeridos.

Modificación: Edición de datos existentes para actualizar información en caso de cambios o ajustes operativos.

Baja: Eliminación de unidades del sistema cuando estas ya no forman parte de la flotilla activa o han sido dadas de baja del servicio.

</DualLayout>