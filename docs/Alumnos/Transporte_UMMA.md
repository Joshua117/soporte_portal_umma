---
sidebar_label: Transporte
sidebar_position: 1
---

<style>
  {`
  .navbar { background-color: #1A3867 !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: #ffffff !important; }

  .theme-doc-sidebar-container { background-color: #ffffff !important; border-right: 1px solid #1A3867 !important; }
  .menu__link { color: #1A3867 !important; }

  .breadcrumbs { margin-bottom: 1.5rem !important; }
  .breadcrumbs__link { color: #1A3867 !important; font-weight: 500; }
  .breadcrumbs__item:not(:last-child)::after, 
  .breadcrumb-home-icon,
  .breadcrumbs__item--active .breadcrumbs__link { color: #1A3867 !important; }

  .main-wrapper { background-color: #ffffff !important; }
  .markdown, .markdown p, .markdown li { color: #1A3867 !important; }
  .markdown h1, .markdown h2, .markdown h3 { color: #1A3867 !important; }

  .mi-cuadro-personalizado {
    background-color: #ffffff !important; 
    padding: 35px;
    border-radius: 20px;
    color: #1A3867 !important;
  }

  .menu__link:hover {
    background-color: rgba(26, 56, 103, 0.1) !important;
    color: #1A3867 !important;
  }

  .menu__link--active {
    background-color: #a5bfe9 !important;
    color: #1A3867 !important;
    font-weight: bold !important;
  }

  .menu__caret:before {
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  }

  .menu__list-item--active > .menu__link .menu__caret:before,
  .menu__link--active .menu__caret:before {
    filter: brightness(1) invert(0) !important;
  }

  .menu__caret {
    transition: transform 0.2s ease;
  }

  .pagination-nav__link {
    border: 1px solid #1A3867 !important;
    background-color: #ffffff !important;
    transition: all 0.3s ease !important;
  }

  .pagination-nav__sublabel, .pagination-nav__label {
    color: #1A3867 !important;
  }

  .pagination-nav__link:hover {
    background-color: #1A3867 !important;
    border-color: #1A3867 !important;
    text-decoration: none !important;
  }

  .pagination-nav__link:hover .pagination-nav__sublabel,
  .pagination-nav__link:hover .pagination-nav__label {
    color: #ffffff !important;
  }
  `}
</style>

# Título Principal
Este texto está en la zona general con fondo oscuro.

<div className="mi-cuadro-personalizado">
  <h2>Título en el Cuadro</h2>
  <p>
    Este es el espacio delimitado donde puedes escribir con fondo blanco 
    y letras oscuras, resaltando sobre el resto de la página.
  </p>
</div>

# Título en el Fondo General
Este texto flota sobre el fondo oscuro de la página.

<div className="mi-cuadro-personalizado">
  <h3>Título dentro del Cuadro</h3>
  <p>
    Todo lo que escribas aquí adentro tendrá el color de fondo y de letra 
    que configuraste en el punto 4 y 5.
  </p>
  <ul>
    <li>Punto con letra personalizada</li>
    <li>Fondo independiente al de la página</li>
  </ul>
</div>

Más texto sobre el fondo general...

# Transporte

El transporte UMMA es un sistema de gestión de asientos que permite a los docentes reservar y asistir a los alumnos en los salones de la universidad. Este sistema se encarga de gestionar el asiento de los alumnos, así como la asistencia de los docentes.

<table style={{ border: 'none', borderCollapse: 'collapse', width: '100%' }}>
  <tbody>
    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>El transporte UMMA permite a los docentes reservar y asistir a los alumnos en los salones de la universidad. Este sistema se encarga de gestionar el asiento de los alumnos de manera eficiente</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Registra la entrada y salida de cada estudiante en tiempo real. Los docentes pueden visualizar quién ha ocupado su lugar asignado y generar reportes automáticos al finalizar la sesión.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Mediante el uso de algoritmos de distribución, el sistema sugiere la mejor disposición de los alumnos para maximizar el aforo de las aulas manteniendo las normativas de seguridad institucional.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Hazme un lorem ipsum de palabras para que la sección sea más grande y se vea bien en la web. Al expandir el contenido, logramos un equilibrio visual con la imagen lateral, mejorando la legibilidad general.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '5000px', height: 'auto' }} />
      </td>
    </tr>
  </tbody>
</table>