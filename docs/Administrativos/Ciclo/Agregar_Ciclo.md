---
title: Ciclo Académico
sidebar_position: 1
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'; 
import DualLayout from '@site/src/components/DualLayout';

<DualLayout 
  imageSrc="/img/Ciclo/PanelCiclo.webp" 
  altText="Agregar Servicio" 
  stickyImage={true}
>

Este módulo funciona como el eje temporal de la institución. Aquí se centraliza la administración de todos los ciclos académicos, permitiendo visualizar el historial y definir los periodos vigentes con total claridad.

### Listado de Ciclos
Aquí podrás visualizar todos los ciclos disponibles. Cada uno cuenta con un interruptor de estado (**Activo / No Activo**), lo que permite al administrador identificar rápidamente cuál es el periodo en curso y gestionar ciclos pasados o futuros de manera eficiente.

## Cómo agregar un Ciclo Académico
Para configurar un nuevo periodo lectivo, el sistema requiere la definición de parámetros clave para asegurar la integridad de la programación académica:

* **Datos Básicos:**
    * **Semestre:** Selección del periodo semestral (Enero-Junio o Julio-Diciembre).
    * **Año:** Especificar el año de inicio del ciclo.
    * **Grado Académico:** Selección del grado al que irá dirigido el ciclo.
    * **Vigencia:** Definir la fecha exacta de inicio y conclusión del ciclo.

* **Evaluaciones:**
    * **Parciales y Ordinarios:** El sistema permite configurar los periodos de exámenes, estableciendo rangos de fechas (inicio y fin) para cada etapa evaluativa, asegurando que estén debidamente calendarizados.

* **Construcción del Calendario:**
    * **Días Especiales:** Configuración de días con actividades extraordinarias.
    * **Calendario de Asistencia:** Definir días hábiles (con clases) y días inhábiles (sin clases).
    * **Eventos y Vacaciones:** Programación de periodos vacacionales y eventos institucionales, los cuales se reflejarán en el calendario escolar general.

### Calendario
<Link to="/docs/Administrativos/Ciclo/Calendario" className="link-destacado">Vista Maestra del Calendario</Link>

Este apartado funciona como la vista maestra del ciclo configurado. En esta sección, el administrador podrá:

* **Visualización Gráfica:** Ver el cronograma completo del ciclo escolar en una interfaz visual intuitiva.
* **Gestión de Fechas:** Identificar rápidamente la distribución de clases, periodos de exámenes (parciales/ordinarios) y días festivos.
* **Seguimiento:** Verificar que la planeación del ciclo sea coherente y esté correctamente distribuida, funcionando como la herramienta principal para la consulta de actividades institucionales durante todo el semestre.

</DualLayout>