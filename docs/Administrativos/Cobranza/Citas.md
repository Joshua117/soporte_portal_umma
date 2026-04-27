---
title: Citas
sidebar_position: 1
hide_table_of_contents: true
pagination_next: Administrativos/Cobranza/index
---

import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

  {/* Imagen centrada con estilo profesional */}
  <img 
    src="/img/Cobranza/Citas.png" 
    alt="Lista de estudiantes" 
    style={{ 
      width: '100%', 
      maxWidth: '700px', 
      margin: '0px auto 10px auto', 
      display: 'block',
      borderRadius: '10px',
      boxShadow: '0 0px 20px rgba(0,0,0,0.15)'
    }} 
  />

 
    ## Citas
    Este módulo centraliza la administración de los servicios de atención programada en la institución. Su función principal es organizar y visualizar todas las citas agendadas, permitiendo al personal administrativo llevar un control preciso de los flujos de atención en los diferentes módulos o "cajas" disponibles.

    ### Visualización y Búsqueda
    La interfaz permite gestionar la demanda de atención mediante las siguientes herramientas:

    * **Filtro por Fecha:** Selección dinámica de días para visualizar las citas programadas de forma rápida y eficiente.
    * **Consulta de Disponibilidad:** Listado general de todas las estaciones de servicio (cajas) habilitadas en la universidad.
    * **Búsqueda avanzada:** Función de búsqueda rápida mediante la matrícula del usuario, facilitando la localización inmediata de cualquier registro de cita en casos especiales o de atención personalizada.

    ## Agregar Cita
    El proceso de creación de nuevas citas está diseñado para ser intuitivo y evitar conflictos de agenda. El sistema utiliza una interfaz visual de calendario que permite identificar la disponibilidad de espacios en tiempo real.

    ### Flujo de Registro
    Para agendar una nueva cita, el usuario debe seguir estos pasos básicos:

    1. **Selección de Fecha:** Navegar por el calendario para elegir el día deseado.
    2. **Interpretación de Disponibilidad:** El sistema utiliza un código de colores en cada día del calendario para indicar la carga de trabajo:
        * **Disponible:** Indica que existen espacios libres para agendar una cita.
        * **Ocupado:** Indica que el día ha alcanzado su capacidad máxima de atención.
    3. **Confirmación:** Una vez seleccionado un espacio disponible, el sistema procesa la solicitud y vincula la cita al registro del usuario, completando la agenda.

    </PageLayout>
