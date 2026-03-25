---
sidebar_label: Transporte
sidebar_position: 1
---
<style>
  {`
  /* 1. BARRA SUPERIOR (NAVBAR) */
  .navbar {
    background-color: #8099bc !important; /* Color de fondo de la barra de arriba */
    border-bottom: 1px solid #30363d !important; /* Línea delgada inferior */
  }
  .navbar__link, .navbar__title, .navbar__item {
    color: #ffffff !important; /* Color de las letras y logo en la barra superior */
  }

  /* 2. BARRA LATERAL IZQUIERDA (SIDEBAR) */
  .theme-doc-sidebar-container {
    background-color: #5b1b1b !important; 
    border-right: 1px solid #333 !important;
  }
  .menu__link { 
    color: #0b2236 !important; 
  }
  .menu__link--active {
    color: #58a6ff !important; 
    background-color: rgba(88, 166, 255, 0.1) !important;
  }

  /* 3. FONDO GENERAL DE LA PANTALLA (MÁRGENES Y DERECHA) */
  .main-wrapper {
    background-color: #0d1117 !important; 
  }

  /* 4. LETRAS GENERALES (SOBRE EL FONDO) */
  .markdown, .markdown p, .markdown li {
    color: #b0bfd0 !important; 
  }
  .markdown h1, .markdown h2, .markdown h3 {
    color: #ffffff !important; 
  }
  `}
</style>

{/* --- EJEMPLO DE USO --- */}

# Título Principal
Este texto está en la zona general con fondo oscuro.

<div className="mi-cuadro-personalizado">
  <h2>Título en el Cuadro</h2>
  <p>
    Este es el espacio delimitado donde puedes escribir con fondo blanco 
    y letras oscuras, resaltando sobre el resto de la página.
  </p>
</div>

{/* --- ASÍ SE USA EL CÓDIGO EN TU PÁGINA --- */}

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

{/* Aquí puedes seguir escribiendo fuera del cuadro */}
Más texto sobre el fondo general...

# Transporte

El transporte UMMA es un sistema de gestión de asientos que permite a los docentes reservar y asistir a los alumnos en los salones de la universidad. Este sistema se encarga de gestionar el asiento de los alumnos, así como la asistencia de los docentes.

<table style={{ border: 'none', borderCollapse: 'collapse', width: '100%' }}>
  <tbody>
    {/* Fila 1 */}
    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>El transporte UMMA permite a los docentes reservar y asistir a los alumnos en los salones de la universidad. Este sistema se encarga de gestionar el asiento de los alumnos de manera eficiente</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    {/* Fila 2 */}
    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Registra la entrada y salida de cada estudiante en tiempo real. Los docentes pueden visualizar quién ha ocupado su lugar asignado y generar reportes automáticos al finalizar la sesión.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    {/* Fila 3 - Nueva */}
    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Mediante el uso de algoritmos de distribución, el sistema sugiere la mejor disposición de los alumnos para maximizar el aforo de las aulas manteniendo las normativas de seguridad institucional.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '500px', height: 'auto' }} />
      </td>
    </tr>

    {/* Fila 4 - Nueva */}
    <tr style={{ border: 'none' }}>
      <td style={{ border: 'none', padding: '10px' }}><strong>Hazme un lorem ipsum de palabras para que la sección sea más grande y se vea bien en la web. Al expandir el contenido, logramos un equilibrio visual con la imagen lateral, mejorando la legibilidad general.</strong></td>
      <td style={{ border: 'none', padding: '10px', textAlign: 'right' }}>
        <img src={require('./image.png').default} style={{ width: '5000px', height: 'auto' }} />
      </td>
    </tr>
  </tbody>
</table>
