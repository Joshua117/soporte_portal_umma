---
title: Tiempos
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';

<DualLayout 
  imageSrc="/img/Transporte/Tiempos.jpg" 
  altText="Agregar Servicio" 
  stickyImage={true}
>

## Tiempos

Este módulo es fundamental para regular el flujo de usuarios y garantizar la eficiencia operativa mediante la definición de ventanas temporales. Aquí se establecen los parámetros de tiempo (calculados estrictamente en minutos) que determinan cuándo es posible realizar acciones dentro del sistema de transporte.

### Parámetros de Control
El sistema permite configurar tres niveles de tolerancia que rigen el ciclo de vida del boleto y el servicio:

* **Tolerancia de Reservación:** Define con cuánta antelación puede un usuario solicitar su boleto, evitando saturaciones o reservas prematuras fuera del periodo establecido.
* **Tiempo Límite de Cierre:** Establece el margen mínimo de tiempo antes de la salida del transporte para dejar de emitir boletos. Una vez alcanzado este límite, el sistema inhabilita automáticamente la creación de nuevas solicitudes.
* **Margen de Inicio de Servicio:** Define la ventana de tiempo necesaria para preparar la unidad previo a la salida, asegurando que los tiempos operativos sean respetados.

### Validación de Acceso
El sistema actúa como un filtro estricto: toda solicitud de boleto debe encontrarse dentro de los rangos configurados.

* **Fuera de rango:** Si un usuario intenta solicitar o modificar un boleto antes de la ventana de apertura o después del tiempo límite de cierre, el sistema denegará la operación automáticamente.
* **Cumplimiento normativo:** Esta lógica asegura que los horarios de las unidades se mantengan precisos, evitando cambios de último momento que puedan afectar la logística y la puntualidad del servicio.

</DualLayout>