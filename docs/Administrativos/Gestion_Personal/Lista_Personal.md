---
title: Lista de Personal
hide_table_of_contents: true
pagination_next: Administrativos/Gestion_Personal/index
---

import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

  <div>

    {/* Imagen centrada con estilo profesional */}
    <img 
      src="/img/AdministrativosPanel/ListaPer.png" 
      alt="Lista de personal" 
      style={{ 
        width: '100%', 
        maxWidth: '700px', 
        margin: '0px auto 10px auto', 
        display: 'block',
        borderRadius: '40px',
        boxShadow: '0 0px 20px rgba(0,0,0,0.15)'
      }} 
    />


    Este módulo actúa como el repositorio central de información de todo el capital humano de la institución. Su objetivo es consolidar un expediente digital completo para cada colaborador, permitiendo una administración eficiente y una gestión precisa del talento humano.

    {/* Usamos h3 en lugar de ### para asegurar que renderice bien dentro del div */}
    <h3 style={{ marginTop: '30px' }}>
      <span style={{backgroundColor: '#e3f2fd', color: '#1976d2', padding: '2px 10px', borderRadius: '15px', fontSize: '0.8em', marginRight: '10px'}}>📋 INFORMACIÓN</span> 
      Estructura de la Información
    </h3>
    
    El registro de cada trabajador se compone de los siguientes campos esenciales, los cuales facilitan tanto la identificación unívoca como la comunicación directa:

    **Datos de Identidad:**
    * **ID:** Identificador interno del sistema.
    * **Matrícula:** Clave única de identificación laboral asignada al trabajador.
    * **Nombre y Apellidos:** Identificación completa del colaborador.
    * **Fecha de Nacimiento:** Dato fundamental para el expediente personal.

    **Datos de Contacto y Ubicación:**
    * **Correo Institucional:** Dirección de correo oficial para la comunicación formal.
    * **Teléfono Personal:** Contacto directo para situaciones operativas o de emergencia.
    * **Área / Departamento:** Unidad operativa donde desempeña sus funciones.
    * **Campus:** Clasificación geográfica del trabajador, permitiendo filtrar y gestionar el personal asignado a Carmen o Campeche.

    <h3 style={{ marginTop: '30px' }}>
      <span style={{backgroundColor: '#f3e5f5', color: '#7b1fa2', padding: '2px 10px', borderRadius: '15px', fontSize: '0.8em', marginRight: '10px'}}>🎯 PROPÓSITO</span> 
      Propósito del Módulo
    </h3>
    
    La centralización de estos datos permite a la administración:

    * **Gestión Multisede:** Filtrar y visualizar al personal de manera eficiente según el campus de adscripción, garantizando que la información esté organizada por ubicación física.
    * **Agilidad Operativa:** Localizar rápidamente los datos de cualquier colaborador para facilitar la coordinación entre departamentos.
    * **Integridad de Datos:** Mantener una base de datos actualizada que sirve de soporte crítico para otros módulos del sistema.

  </div>

</PageLayout>