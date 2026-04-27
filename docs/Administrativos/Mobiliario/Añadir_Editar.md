---
title: Mobiliario
pagination_next: Administrativos/Mobiliario/index
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Mobiliario/Mobiliario.jpg", "/img/Mobiliario/AgregarMob.jpg"]} />
}>

## Mobiliario

### Panel de Mobiliario
El Panel de Mobiliario centraliza el inventario total de recursos de la institución (sillas, mesas, sillones, etc.). Esta interfaz permite monitorear el estatus de cada elemento, proporcionando un conteo preciso de las unidades disponibles y las que se encuentran actualmente en uso, indicando específicamente el salón de destino. Desde este panel, es posible gestionar los registros: editar nombres, clasificar el tipo de mobiliario, actualizar cantidades o eliminar elementos del sistema.

### Agregar Mobiliario
Utilice el formulario de Agregar Mobiliario para dar de alta nuevos recursos al inventario. Seleccione la categoría correspondiente, asigne un nombre distintivo y especifique la cantidad total disponible. Este proceso integrará el nuevo mobiliario al sistema, permitiendo su administración y asignación previa a las diversas aulas de la universidad.

</DualLayout>