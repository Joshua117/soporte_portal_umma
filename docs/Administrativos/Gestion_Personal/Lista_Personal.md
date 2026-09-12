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
      src="/img/AdministrativosPanel/ListaPer.webp" 
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

    <p>Este módulo actúa como el repositorio central de información de todo el capital humano de la institución. Su objetivo es consolidar un expediente digital completo para cada colaborador, permitiendo una administración eficiente y una gestión precisa del talento humano.</p>

    <h3 style={{ marginTop: '30px' }}>Estructura de la Información</h3>
    
    <p>El registro de cada trabajador se compone de los siguientes campos esenciales, los cuales facilitan tanto la identificación unívoca como la comunicación directa:</p>

    <p style={{ marginBottom: '5px' }}><strong>Datos de Identidad:</strong></p>
    <ul>
      <li><strong>ID:</strong> Identificador interno del sistema.</li>
      <li><strong>Matrícula:</strong> Clave única de identificación laboral asignada al trabajador.</li>
      <li><strong>Nombre y Apellidos:</strong> Identificación completa del colaborador.</li>
      <li><strong>Fecha de Nacimiento:</strong> Dato fundamental para el expediente personal.</li>
    </ul>

    <p style={{ marginTop: '10px', marginBottom: '5px' }}><strong>Datos de Contacto y Ubicación:</strong></p>
    <ul>
      <li><strong>Correo Institucional:</strong> Dirección de correo oficial para la comunicación formal.</li>
      <li><strong>Teléfono Personal:</strong> Contacto directo para situaciones operativas o de emergencia.</li>
      <li><strong>Área / Departamento:</strong> Unidad operativa donde desempeña sus funciones.</li>
      <li><strong>Campus:</strong> Clasificación geográfica del trabajador, permitiendo filtrar y gestionar el personal asignado a Carmen o Campeche.</li>
    </ul>

    <h3 style={{ marginTop: '30px' }}>Propósito del Módulo</h3>
    
    <p>La centralización de estos datos permite a la administración:</p>

    <ul>
      <li><strong>Gestión Multisede:</strong> Filtrar y visualizar al personal de manera eficiente según el campus de adscripción, garantizando que la información esté organizada por ubicación física.</li>
      <li><strong>Agilidad Operativa:</strong> Localizar rápidamente los datos de cualquier colaborador para facilitar la coordinación entre departamentos.</li>
      <li><strong>Integridad de Datos:</strong> Mantener una base de datos actualizada que sirve de soporte crítico para otros módulos del sistema.</li>
    </ul>

  </div>

</PageLayout>