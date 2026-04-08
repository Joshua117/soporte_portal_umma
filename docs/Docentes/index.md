---
title: Sección Docentes
---

<style>
  {`
  :root {
    /* ============================================================
       ZONA DE CONTROL DE COLORES
       ============================================================ */
    --color-encabezado: #262624;   /* Color para el título h1 */
    --color-iconos: #ffffff;       /* Cambia el color de los iconos aquí */
    --color-texto-cards: #ffffff;  /* Cambia el color del texto de las tarjetas aquí */
    
    /* Colores Principales UMMA */
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-light-blue: #2563EB;
    --umma-white: #ffffff;
    --umma-navbar: #1a2a3f;
    --umma-bg-hover: #f0f7ff;
    --umma-shadow-card: rgba(26, 56, 103, 0.1);
  }

  /* Aplicación de colores personalizados */
  h1 { color: var(--color-encabezado) !important; }

  [data-theme='light'] {
    /* --- AJUSTES MODO CLARO --- */
    --color-paginacion-enlace: #2563EB;
    --color-paginacion-label: #1A3867;
    --color-breadcrumbs-enlace: #2563EB;

    --bg-page: var(--umma-white);
    --nav-page: var(--umma-blue);
    --text-page: var(--umma-blue);
    --card-bg: var(--umma-blue);
    --card-border: var(--umma-blue);
    --sidebar-bg: var(--umma-white);
    --sidebar-link: var(--umma-blue);
    --sidebar-active-bg: var(--umma-blue);
    --sidebar-active-text: var(--umma-blue);
    --breadcrumb-bg-active: rgba(26, 56, 103, 0.1);
    --breadcrumb-text: var(--umma-blue);
    
    --c-txt-card: var(--color-texto-cards);
    --icon-f: brightness(0) invert(1); 
  }

  [data-theme='dark'] {
    /* --- AJUSTES MODO OSCURO --- */
    --color-paginacion-enlace: #fefeff; 
    --color-paginacion-label: #ffffff;
    --color-breadcrumbs-enlace: #ffffff;

    --bg-page: #262624;
    --nav-page: var(--umma-navbar);
    --text-page: #e3e3e3;
    --card-bg: #1e1f20;
    --card-border: #30363d;
    --sidebar-bg: #262624;
    --sidebar-link: #ffffff;
    --sidebar-active-bg: var(--umma-blue);
    --sidebar-active-text: #ffffff;
    --sidebar-hover: rgba(255, 255, 255, 0.05);
    --breadcrumb-bg-active: #2d2d2d; 
    --breadcrumb-text: var(--umma-white);
    --breadcrumb-home: var(--umma-white);

    --c-txt-card: #ffffff;
    --icon-f: brightness(0) invert(1);
  }

  /* --- APLICACIÓN A COMPONENTES --- */
  
  /* ELIMINAR CUADRO DE PAGINACIÓN */
  .pagination-nav__link { 
    background-color: transparent !important; 
    border: none !important; 
    box-shadow: none !important; 
  } 
  
  .pagination-nav__label { color: var(--color-paginacion-enlace) !important; }
  .pagination-nav__sublabel { color: var(--color-paginacion-label) !important; }

  .breadcrumbs__link { color: var(--color-breadcrumbs-enlace) !important; }

  .main-wrapper { background-color: var(--bg-page) !important; }
  .navbar { background-color: var(--nav-page) !important; }

  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid rgba(255,255,255,0.05) !important; }
  .menu__link { color: var(--sidebar-link) !important; }
  .menu__link:hover { background-color: var(--sidebar-hover, var(--umma-bg-hover)) !important; }
  .menu__link--active { background-color: var(--sidebar-active-bg) !important; color: var(--sidebar-active-text) !important; border-radius: 8px !important; }

  .breadcrumb-home-icon { color: var(--breadcrumb-home, var(--umma-light-blue)) !important; fill: currentColor !important; }
  .breadcrumbs__item--active .breadcrumbs__link { background-color: var(--breadcrumb-bg-active) !important; padding: 4px 16px !important; border-radius: 20px !important; }

  .grid-admin-total { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
  
  html body .grid-admin-total a.card-total {
    background-color: var(--card-bg) !important;
    border: 2px solid var(--card-border) !important;
    border-radius: 15px;
    padding: 30px 15px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    text-decoration: none !important;
    box-shadow: var(--umma-shadow-card) !important;
  }

  html body .grid-admin-total a.card-total h3 { 
    color: var(--c-txt-card) !important; 
    font-size: 1.15rem !important; 
    margin: 0 !important; 
  }
  
  html body .grid-admin-total a.card-total img.icon-admin-svg { 
    width: 55px !important; 
    margin-bottom: 12px; 
    filter: var(--icon-f) !important; 
  }

.pagination-nav {
    display: none !important; /* Esto obliga al usuario a usar solo tus cuadros para navegar */
}
  `}
</style>

# Panel de Docentes

<div className="grid-admin-total">

  <a href="./Ausencias_alumnos" className="card-total">
    <img src={require('@site/src/components/Icons/person remove.png').default} className="icon-admin-svg" />
    <h3>Ausencias Alumnos</h3>
  </a>

  <a href="./Control_asistencias" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Control Asistencias</h3>
  </a>

  <a href="./Formatos" className="card-total">
    <img src={require('@site/src/components/Icons/Folder.png').default} className="icon-admin-svg" />
    <h3>Formatos</h3>
  </a>

  <a href="./Horario_Clases" className="card-total">
    <img src={require('@site/src/components/Icons/Date range.png').default} className="icon-admin-svg" />
    <h3>Horario Clases</h3>
  </a>

  <a href="./Horarios" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Horarios</h3>
  </a>

</div>