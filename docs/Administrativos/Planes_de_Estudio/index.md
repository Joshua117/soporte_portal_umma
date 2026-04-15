---
title: Planes de Estudio
pagination_prev: null
---

<style>
  {`
  :root {
    /* ============================================================
       ZONA DE CONTROL DE COLORES
       ============================================================ */
    --color-encabezado: #1A3867; 
    --umma-blue: #1A3867;
    --umma-light-blue: #2563EB;
    --umma-white: #ffffff;
    --umma-shadow-card: rgba(26, 56, 103, 0.1);
    --umma-navbar: #1A3867;
  }

  /* FUERZA BRUTA PARA EL TÍTULO (Resuelve el problema de visibilidad) */
  header h1, 
  article h1, 
  .markdown h1, 
  h1[class*='docTitle'] { 
    color: var(--color-encabezado) !important; 
    opacity: 1 !important;
  }

  [data-theme='light'] {
    --bg-page: #f5f6f7;
    --text-page: #1A3867;
    --umma-navbar: #1A3867;
    --color-paginacion-enlace: #1A3867;
    --color-breadcrumbs-enlace: #1A3867;
    --card-bg: var(--umma-blue);
    --card-border: var(--umma-blue);
    --sidebar-bg: var(--umma-white);
    --sidebar-link: var(--umma-blue);
    --c-txt-card: #ffffff;
    --icon-f: brightness(0) invert(1); 
  }

  [data-theme='dark'] {
    --bg-page: #262624;
    --text-page: #ffffff;
    --umma-navbar: #1a2a3f;
    --color-encabezado: #ffffff; /* Título blanco en modo oscuro */
    --color-paginacion-enlace: #fefeff; 
    --color-breadcrumbs-enlace: #ffffff;
    --card-bg: #1e1f20;
    --card-border: #30363d;
    --sidebar-bg: #262624; 
    --sidebar-link: #ffffff;
    --c-txt-card: #ffffff;
    --icon-f: brightness(0) invert(1);
  }

  /* --- APLICACIÓN GENERAL --- */
  .main-wrapper { 
    background-color: var(--bg-page) !important; 
    color: var(--text-page) !important;
  }

  /* SIDEBAR (Mantiene el fondo oscuro y texto blanco de tus fotos) */
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; }
  .menu__link { color: var(--sidebar-link) !important; }

  /* PAGINACIÓN Y BREADCRUMBS */
  .pagination-nav__link { 
    background-color: transparent !important; 
    border: none !important; 
    box-shadow: none !important; 
  }
  .pagination-nav__label { color: var(--color-paginacion-enlace) !important; }
  .breadcrumbs__link { color: var(--color-breadcrumbs-enlace) !important; }

  /* --- GRID Y TARJETAS (ESTRUCTURA ORIGINAL) --- */
  .grid-gestion-total { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 20px; 
    margin-top: 20px; 
  }
  
  html body .card-total {
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
    transition: transform 0.3s ease;
  }

  .card-total:hover { transform: translateY(-5px); }

  html body .card-total h3 { 
    color: var(--c-txt-card) !important; 
    font-size: 1.15rem !important; 
    margin: 0 !important; 
    font-weight: 600 !important;
  }
  
  html body .card-total img.icon-admin-svg { 
    width: 55px !important; 
    margin-bottom: 12px; 
    filter: var(--icon-f) !important; 
  }
  `}
</style>