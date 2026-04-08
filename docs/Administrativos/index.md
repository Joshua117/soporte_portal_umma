---
title: Administrativos
---

<style>
  {`
  /* ============================================================
     1. VARIABLES MAESTRAS (MODO CLARO)
     ============================================================ */
  :root {
    --umma-blue: #1A3867;
    --color-breadcrumbs-enlace: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;

    /* Estructura Global */
    --bg-global: var(--umma-white);
    --sidebar-bg: var(--umma-white);
    --text-global: var(--umma-blue);
    --navbar-bg: #1A3867;
    
    /* Menú Lateral (Sidebar) */
    --menu-link-color: var(--umma-blue);
    --menu-link-bg-hover: rgba(26, 56, 103, 0.1);
    --menu-link-bg-active: #a5bfe9;
    
    /* Tarjetas (Cards) */
    --card-bg: var(--umma-blue);
    --card-text: var(--umma-white);
    --card-hover-bg: var(--umma-blue-hover);
    --card-border: transparent;
    
    /* Paginación (Botón Anterior/Siguiente) */
    --pagination-bg: var(--umma-white);
    --pagination-text: var(--umma-blue);
    --pagination-border: var(--umma-blue);
    --pagination-hover-bg: var(--umma-blue);
    --pagination-hover-text: var(--umma-white);

    /* Filtros e Iconos */
    --icon-filter: brightness(0) invert(1);
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
  }

  /* ============================================================
     2. CONFIGURACIÓN MODO OSCURO
     ============================================================ */
  [data-theme='dark'] {
    --bg-global: #262624;
    --sidebar-bg: #262624;
    --text-global: #e3e3e3;
    --navbar-bg: #1a2a3f;
    
    /* Sidebar en Oscuro */
    --menu-link-color: #ffffff; 
    --menu-link-bg-hover: rgba(255, 255, 255, 0.05);
    --menu-link-bg-active: #ffffff;

    /* Tarjetas en Oscuro */
    --card-bg: #1e1f20; 
    --card-text: #ffffff;
    --card-hover-bg: #2d2e30;
    --card-border: #30363d;

    /* Paginación en Oscuro */
    --pagination-bg: #1e1f20;
    --pagination-text: #ffffff;
    --pagination-border: #444;
    --pagination-hover-bg: #1A3867;
    
    --umma-shadow-card: rgba(0, 0, 0, 0.5);
  }
/* ELIMINAR CUADRO DE PAGINACIÓN */
  .pagination-nav__link { 
    background-color: transparent !important; 
    border: none !important; 
    box-shadow: none !important; 
  } 
  /* ============================================================
     3. APLICACIÓN DE ESTILOS (SIDEBAR, CARDS, PAGINACIÓN)
     ============================================================ */

  /* Menú Lateral */
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--card-border) !important; }
  .menu__link { color: var(--menu-link-color) !important; transition: all 0.2s ease; }
  .menu__link:hover { background-color: var(--menu-link-bg-hover) !important; }
  .menu__link--active { background-color: var(--menu-link-bg-active) !important; color: var(--menu-link-color) !important; font-weight: bold !important; }

  /* Paginación */
  .pagination-nav__link {
    background-color: var(--pagination-bg) !important;
    border: 2px solid var(--pagination-border) !important;
    border-radius: 12px !important;
    transition: all 0.3s ease-in-out !important;
  }
  .pagination-nav__sublabel, .pagination-nav__label { color: var(--pagination-text) !important; }
  .pagination-nav__link:hover { background-color: var(--pagination-hover-bg) !important; border-color: var(--pagination-hover-bg) !important; }
  .pagination-nav__link:hover .pagination-nav__sublabel, .pagination-nav__link:hover .pagination-nav__label { color: var(--pagination-hover-text) !important; }

  /* Grid de Tarjetas */
  .grid-admin-total { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; margin-bottom: 20px; }
  
  html body .grid-admin-total a.card-total {
    background-color: var(--card-bg) !important;
    color: var(--card-text) !important;
    border: 1px solid var(--card-border) !important;
    border-radius: 15px;
    padding: 25px 10px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    box-shadow: var(--umma-shadow-card) !important;
    transition: all 0.3s ease-in-out;
    text-decoration: none !important;
  }

  html body .grid-admin-total a.card-total:hover { transform: translateY(-8px) !important; background-color: var(--card-hover-bg) !important; }
  html body .grid-admin-total a.card-total img.icon-admin-svg { width: 50px !important; filter: var(--icon-filter) !important; margin-bottom: 12px; }
  html body .grid-admin-total a.card-total h3 { color: var(--card-text) !important; font-size: 1.1rem !important; margin: 0 !important; font-weight: 600 !important; }

  /* Globales */
  .main-wrapper { background-color: var(--bg-global) !important; }
  .navbar { background-color: var(--navbar-bg) !important; }
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--text-global) !important; }
  `}
</style>

# Panel Administrativo 

<div className="grid-admin-total">
  <a href="./Eventos/" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Eventos</h3>
  </a>
  <a href="./Gestion_Alumnos/" className="card-total">
    <img src={require('@site/src/components/Icons/School.png').default} className="icon-admin-svg" />
    <h3>Gestión Alumnos</h3>
  </a>
  <a href="./Gestion_Docentes/" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Gestión Docentes</h3>
  </a>
  <a href="./Gestion_Personal/" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Gestión Personal</h3>
  </a>
</div>

<div className="grid-admin-total">
  <a href="./Carga_Academica" className="card-total">
    <img src={require('@site/src/components/Icons/Folder.png').default} className="icon-admin-svg" />
    <h3>Carga Académica</h3>
  </a>
  <a href="./Ciclo" className="card-total">
    <img src={require('@site/src/components/Icons/Date range.png').default} className="icon-admin-svg" />
    <h3>Ciclo</h3>
  </a>
  <a href="./Cobranza" className="card-total">
    <img src={require('@site/src/components/Icons/paid.png').default} className="icon-admin-svg" />
    <h3>Cobranza</h3>
  </a>
  <a href="./Grados-Areas" className="card-total">
    <img src={require('@site/src/components/Icons/School.png').default} className="icon-admin-svg" />
    <h3>Grados y Escolares</h3>
  </a>
  <a href="./Inventario" className="card-total">
    <img src={require('@site/src/components/Icons/Inventory.png').default} className="icon-admin-svg" />
    <h3>Inventario</h3>
  </a>
  <a href="./Materias" className="card-total">
    <img src={require('@site/src/components/Icons/Books.png').default} className="icon-admin-svg" />
    <h3>Materias</h3>
  </a>
  <a href="./Mobiliario" className="card-total">
    <img src={require('@site/src/components/Icons/Chair.png').default} className="icon-admin-svg" />
    <h3>Mobiliario</h3>
  </a>
  <a href="./Planes_Estudio" className="card-total">
    <img src={require('@site/src/components/Icons/Forms.png').default} className="icon-admin-svg" />
    <h3>Planes de Estudio</h3>
  </a>
  <a href="./Salones" className="card-total">
    <img src={require('@site/src/components/Icons/Classroom.png').default} className="icon-admin-svg" />
    <h3>Salones</h3>
  </a>
  <a href="./Seguridad" className="card-total">
    <img src={require('@site/src/components/Icons/Security.png').default} className="icon-admin-svg" />
    <h3>Seguridad</h3>
  </a>
  <a href="./Talleres" className="card-total">
    <img src={require('@site/src/components/Icons/Palette.png').default} className="icon-admin-svg" />
    <h3>Talleres</h3>
  </a>
  <a href="./Transporte_UMMA" className="card-total">
    <img src={require('@site/src/components/Icons/Bus.png').default} className="icon-admin-svg" />
    <h3>Transporte UMMA</h3>
  </a>
</div>