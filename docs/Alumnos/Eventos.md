---
sidebar_label: Eventos
sidebar_position: 3
---

<style>
  {`
  /* 1. EL FONDO DE TODA LA PÁGINA (DERECHA Y MÁRGENES) */
  .main-wrapper {
    background-color: #ffffff !important; /* Cambia este por tu color de fondo */
    min-height: 100vh;
  }

  /* 2. EL FONDO DE LA BARRA LATERAL (IZQUIERDA) */
  .theme-doc-sidebar-container {
    background-color: #020407 !important; 
    border-right: 1px solid #010407 !important;
  }

  /* 3. ESTILO PARA ESCRIBIR DIRECTAMENTE SOBRE EL FONDO */
  .area-escritura {
    background: transparent !important;
    color: #180606 !important; /* Color de la letra para que se vea en el fondo */
    padding: 20px 0;
  }

  /* 4. AJUSTE DE TÍTULOS PARA QUE NO SEAN NEGROS */
  .area-escritura h1, .area-escritura h2, .area-escritura h3 {
    color: #01070d !important; /* Un azul suave tipo GitHub/Ionic */
  }
  `}
</style>

{/* --- AQUÍ EMPIEZA TU CONTENIDO --- */}

<div className="area-escritura">

  # Eventos 
  
  Aquí ya puedes escribir normalmente. El texto flotará directamente sobre el fondo 
  que elegiste arriba (en este caso, el azul oscuro #040c17).
  
  ### ¿Cómo funciona esto?
  Al usar la clase `area-escritura`, le decimos a Docusaurus que el fondo de este 
  bloque es **transparente**. Así, lo que ves de fondo es el color global de la página.

  * **Punto 1:** 
  * **Punto 2:** 
  * **Punto 3:** 

</div>

{/* Si después quieres meter un cuadro blanco otra vez, solo usa el código anterior */}