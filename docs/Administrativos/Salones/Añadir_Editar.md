---
title: Salones
sidebar_position: 10
hide_table_of_contents: true
---

import Link from '@docusaurus/Link';
import DualLayout from '@site/src/components/DualLayout';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

<DualLayout stickyImage={true} rightContent={
  <ImageSwitcher images={["/img/Salon/PanelSalon.jpg", "/img/Salon/AgregarSal1.jpg", "/img/Salon/AgregarSal2.jpg"]} />
}>

## Salones

### Panel de Salones
El Panel de Salones permite consultar el catálogo de espacios disponibles para la actividad académica. En esta vista, podrá visualizar información detallada de cada salón, incluyendo su nombre, modalidad (virtual o presencial), capacidad de aforo y el <Link to="/docs/Administrativos/Mobiliario/Añadir_Editar" className="link-destacado">mobiliario</Link> asignado. Esta interfaz optimiza la gestión logística, facilitando la toma de decisiones al contar con datos precisos sobre el cupo y los recursos disponibles al momento de realizar una asignación.

### Crear un Salón
Para registrar un nuevo salón, defina la modalidad (presencial o virtual), asigne un nombre identificativo y establezca la capacidad máxima de alumnos. Durante el proceso de creación, podrá configurar el mobiliario y el equipamiento tecnológico del espacio, incluyendo elementos como televisores y proyectores, asegurando que cada salón cuente con los recursos necesarios para su operación.

</DualLayout>