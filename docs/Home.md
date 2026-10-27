---
sidebar_position: 1
sidebar_label: INICIO
---

<p align="center">
  {/* Imagen para modo claro */}
  <img src="/img/Umma_Azul.png" width="350" className="logo-light" />
  {/* Imagen para modo oscuro */}
  <img src="/img/Umma_Blanco.png" width="350" className="logo-dark" />
</p>

# UNIVERSIDAD MUNDO MAYA

<style>
  {`
  /* ============================================================
      LÓGICA DE CAMBIO DE LOGO
     ============================================================ */
  .logo-dark { display: none !important; }
  .logo-light { display: block !important; }

  [data-theme='dark'] .logo-dark { display: block !important; }
  [data-theme='dark'] .logo-light { display: none !important; }

  /* ============================================================
      1. VARIABLES Y MODO CLARO
     ============================================================ */
  :root {
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;

    --bg-global: #FFFFFF;
    --sidebar-bg: #FFFFFF;
    --text-global: #1A3867;
    --text-secondary: #D5DEEB;
    --navbar-bg: #1A3867;
    
    --card-bg: #1A3867;
    --card-text: #ffffff;
    --card-hover-bg: #1e427d;
    --card-border: rgba(26, 56, 103, 0.2);
    
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
    
    --icon-filter: brightness(0) invert(1);
  }

  /* ============================================================
      2. CONFIGURACIÓN MODO OSCURO
     ============================================================ */
  [data-theme='dark'] {
    --bg-global: #091828;
    --sidebar-bg: #091828;
    --text-global: #ffffff;
    --text-secondary: #D5DEEB;
    --navbar-bg: #091828;
    
    --card-bg: #1a2a3f; 
    --card-text: #ffffff;
    --card-hover-bg: #243b59;
    --card-border: rgba(61, 255, 255, 0.24);
    
    --umma-blue: #091828;
    --umma-shadow-card: rgba(0, 0, 0, 0.5);
    --umma-shadow-hover: rgba(0, 0, 0, 0.7);
    --umma-bg-hover: rgba(255, 255, 255, 0.05);
    --umma-bg-active: #1A3867;
    
    --icon-filter: brightness(0) invert(1);
  }

  /* ============================================================
      3. ESTILOS FUNCIONALES
     ============================================================ */

  .markdown h1:first-of-type {
    text-align: center !important;
    margin-bottom: 30px !important;
    width: 100%;
  }

  .main-wrapper { background-color: var(--bg-global) !important; transition: background-color 0.3s ease; }
  .navbar { background-color: var(--navbar-bg) !important; border-bottom: 1px solid var(--card-border) !important; transition: background-color 0.3s ease; }
  .navbar__link, .navbar__title { color: #ffffff !important; }
  
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--card-border) !important; }
  .menu__link { color: var(--text-global) !important; }
  .breadcrumbs__link, .breadcrumb-home-icon, .breadcrumbs__item--active .breadcrumbs__link { color: var(--text-global) !important; }
  
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--text-global) !important;}
  
  .menu__link:hover { background-color: var(--umma-bg-hover) !important; color: var(--text-global) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--text-global) !important; font-weight: bold !important; }

  /* ============================================================
      4. NAVEGACIÓN LIMPIA
     ============================================================ */
  html body nav.pagination-nav {
    border: none !important;
    box-shadow: none !important;
    background: none !important;
  }

  html body .pagination-nav__link {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  html body .pagination-nav__link--next {
    align-items: flex-end !important;
    text-align: right !important;
  }

  .pagination-nav__sublabel, .pagination-nav__label { 
    color: var(--text-global) !important; 
  }

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