---
sidebar_label: Control de asistencias
sidebar_position: 2
---
<style>
  {`
  /* ============================================================
     1. VARIABLES Y MODO CLARO
     ============================================================ */
  :root {
    /* Colores Base UMMA */
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;

    /* Variables de Aplicación Dinámica (Modificables) */
    --bg-global: var(--umma-white);        /* Fondo de la página */
    --sidebar-bg: var(--umma-white);     /* Fondo del menú lateral */
    --text-global: var(--umma-blue);       /* Color de letras principal */
    --navbar-bg: #1A3867;                /* Fondo de la barra superior */
    
    /* Configuración de Tarjetas */
    --card-bg: var(--umma-blue);           /* Fondo de las tarjetas */
    --card-text: var(--umma-white);        /* Texto de las tarjetas */
    --card-hover-bg: var(--umma-blue-hover);
    --card-border: transparent;
    
    /* Sombras y Navegación */
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
    
    /* Filtros (Iconos) */
    --icon-filter: brightness(0) invert(1); /* Convierte iconos a blanco */
  }

  /* ============================================================
     2. CONFIGURACIÓN MODO OSCURO
     ============================================================ */
  [data-theme='dark'] {
    --bg-global: #262624;
    --sidebar-bg: #262624;
    --text-global: #e3e3e3;
    --navbar-bg: #1a2a3f;
    
    /* Tarjetas en Modo Oscuro */
    --card-bg: #1e1f20; 
    --card-text: #ffffff;
    --card-hover-bg: #2d2e30;
    --card-border: #30363d;
    
    /* Ajustes de Acentos */
    --umma-blue: #262624;
    --umma-shadow-card: rgba(0, 0, 0, 0.5);
    --umma-shadow-hover: rgba(0, 0, 0, 0.7);
    --umma-bg-hover: rgba(255, 255, 255, 0.05);
    --umma-bg-active: #1A3867;
    
    /* Iconos */
    --icon-filter: brightness(0) invert(1);
  }

  /* ============================================================
     3. ESTILOS FUNCIONALES (No tocar si no es necesario)
     ============================================================ */

  /* Estructura Global */
  .main-wrapper { background-color: var(--bg-global) !important; transition: background-color 0.3s ease; }
  .navbar { background-color: var(--navbar-bg) !important; border-bottom: 1px solid #30363d !important; transition: background-color 0.3s ease; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--text-global) !important; }
  .breadcrumbs__link, .breadcrumb-home-icon, .breadcrumbs__item--active .breadcrumbs__link { color: var(--text-global) !important; }
  
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--text-global) !important; }
  
  .menu__link:hover { background-color: var(--umma-bg-hover) !important; color: var(--text-global) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--text-global) !important; font-weight: bold !important; }

  /* Paginación */
  .pagination-nav__link { border: 1px solid var(--umma-blue) !important; background-color: var(--bg-global) !important; }
  .pagination-nav__sublabel, .pagination-nav__label { color: var(--text-global) !important; }
  .pagination-nav__link:hover { background-color: var(--umma-blue) !important; }
  .pagination-nav__link:hover .pagination-nav__sublabel, .pagination-nav__link:hover .pagination-nav__label { color: var(--umma-white) !important; }

  /* --- DISEÑO DE TARJETAS --- */
  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

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

  html body .grid-admin-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: var(--card-hover-bg) !important;
    box-shadow: var(--umma-shadow-hover) !important;
    filter: brightness(1.1) !important;
  }

  html body .grid-admin-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    filter: var(--icon-filter) !important;
    margin-bottom: 12px;
    display: block !important;
  }

  html body .grid-admin-total a.card-total h3 {
    color: var(--card-text) !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  `}
</style>
<body>
<h2>Titulo</h2>
</body>