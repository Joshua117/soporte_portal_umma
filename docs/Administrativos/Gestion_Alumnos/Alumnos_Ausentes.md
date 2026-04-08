---
title: Alumnos Ausentes
pagination_prev: null
---

<style>
  {`
  /* ============================================================
     1. VARIABLES Y CONFIGURACIÓN BASE
     ============================================================ */
  :root {
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;
    --color-encabezado: #262624;

    /* Aplicación Dinámica */
    --bg-global: var(--umma-white);
    --sidebar-bg: var(--umma-white);
    --text-global: var(--umma-blue);
    --navbar-bg: #1A3867;
    
    /* Tarjetas */
    --card-bg: var(--umma-blue);
    --card-text: var(--umma-white);
    --card-hover-bg: var(--umma-blue-hover);
    --card-border: transparent;
    
    --umma-shadow-card: rgba(0, 0, 0, 0.1);
    --umma-bg-active: #a5bfe9;
    --icon-filter: brightness(0) invert(1);
  }

  [data-theme='dark'] {
    --bg-global: #262624;
    --sidebar-bg: #262624;
    --text-global: #e3e3e3;
    --navbar-bg: #1a2a3f;
    --color-encabezado: #ffffff;
    
    --card-bg: #1e1f20; 
    --card-text: #ffffff;
    --card-hover-bg: #2d2e30;
    --card-border: #30363d;
    
    --umma-bg-active: #1A3867;
    --icon-filter: brightness(0) invert(1);
  }

  /* ============================================================
     2. FUERZA BRUTA PARA TÍTULOS Y ESTRUCTURA
     ============================================================ */
  header h1, article h1, .markdown h1, h1[class*='docTitle'] { 
    color: var(--color-encabezado) !important; 
    opacity: 1 !important;
  }

  .main-wrapper { background-color: var(--bg-global) !important; }
  .navbar { background-color: var(--navbar-bg) !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--text-global) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--text-global) !important; }

  /* BLOQUEO DE PAGINACIÓN (Oculta la barra inferior para evitar saltos de sección) */
  .pagination-nav { display: none !important; }

  /* ============================================================
     3. GRID Y TARJETAS
     ============================================================ */
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
    filter: brightness(1.1) !important;
  }

  html body .grid-admin-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    filter: var(--icon-filter) !important;
    margin-bottom: 12px;
  }

  html body .grid-admin-total a.card-total h3 {
    color: var(--card-text) !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  `}
</style>
