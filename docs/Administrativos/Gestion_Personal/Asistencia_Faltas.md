---
title: Asistencias y Faltas
hide_table_of_contents: true
---

import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

  {/* Contenedor principal corregido */}
  <div>

    {/* Imagen centrada con estilo profesional */}
    <img 
      src="/img/AdministrativosPanel/CapturaDatosBio.png" 
      alt="Lista de estudiantes" 
      style={{ 
        width: '100%', 
        maxWidth: '700px', 
        margin: '0px auto 10px auto', 
        display: 'block',
        borderRadius: '40px',
        boxShadow: '0 0px 20px rgba(0,0,0,0.15)'
      }} 
    />


    Este módulo es la herramienta central para el monitoreo, control y verificación de la asistencia de todo el personal de la institución. Su objetivo es garantizar la integridad del registro mediante el uso de tecnología de reconocimiento biométrico, asegurando que la identidad del usuario coincida con su entrada o salida.

    ### Flujo de Registro Biométrico
    Para integrar a un colaborador al sistema de asistencia, el proceso está diseñado para ser ágil y eficiente. Siga estos pasos:

    * **Selección de Tipo de Usuario:** Primero, el administrador debe clasificar el registro definiendo el perfil del usuario (Personal Administrativo o Docente).
    * **Búsqueda y Selección:** Dentro del sistema, se debe buscar al colaborador específico para el cual se están ingresando los datos.
    * **Captura Biométrica:** El sistema permite el registro de los datos mediante la cámara del dispositivo. Esta captura fotográfica actúa como el dato biométrico necesario para validar la identidad del usuario en futuros accesos.
    * **Persistencia de Datos:** Una vez capturada la imagen, se guardan los cambios para finalizar el alta del perfil en el módulo de asistencia.

    ### Propósito del Módulo
    > **"Seguridad y Control"**
    > "La implementación de este sistema permite a la administración tener una visión clara del personal presente en las instalaciones en tiempo real, facilitando auditorías y optimizando el control de asistencia. El uso de la cámara como medio de captura no solo simplifica el proceso de registro, sino que también elimina la necesidad de tarjetas de acceso físicas, reduciendo costos y evitando el intercambio de credenciales."

    </div>

</PageLayout>