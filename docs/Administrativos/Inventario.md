---
sidebar_label: Inventario
sidebar_position: 9
---

<style>
  {`
  :root {
    /* Colores Principales UMMA */
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-light-blue: #2563EB;
    --umma-white: #ffffff;
    --umma-hero: #1A3867;
    --umma-hero2: #8c2f2f;
    --umma-navbar: #1a2a3f;
    
    /* Estados de Navegación */
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
    
    /* Sombras para las Tarjetas */
    --umma-shadow-card: rgba(26, 56, 103, 0.1);
    --umma-shadow-hover: rgba(26, 56, 103, 0.2);
  }

  /* --- TUS ESTILOS DE NAVEGACIÓN ACTUALIZADOS CON VARIABLES --- */
  .navbar { background-color: var(--umma-blue) !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }

  .theme-doc-sidebar-container { background-color: var(--umma-white) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--umma-blue) !important; }

  .breadcrumbs__link, .breadcrumb-home-icon, .breadcrumbs__item--active .breadcrumbs__link { color: var(--umma-blue) !important; }
  
  .main-wrapper { background-color: var(--umma-white) !important; }
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--umma-blue) !important; }

  .menu__link:hover { background-color: var(--umma-bg-hover) !important; color: var(--umma-blue) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--umma-blue) !important; font-weight: bold !important; }

  .pagination-nav__link { border: 1px solid var(--umma-blue) !important; background-color: var(--umma-white) !important; }
  .pagination-nav__sublabel, .pagination-nav__label { color: var(--umma-blue) !important; }
  .pagination-nav__link:hover { background-color: var(--umma-blue) !important; }
  .pagination-nav__link:hover .pagination-nav__sublabel, .pagination-nav__link:hover .pagination-nav__label { color: var(--umma-white) !important; }

  /* --- DISEÑO DE TARJETAS BLINDADO --- */
  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  html body .grid-admin-total a.card-total,
  html body .grid-admin-total a.card-total:visited {
    background-color: var(--umma-blue) !important;
    color: var(--umma-white) !important;
    box-shadow: var(--umma-shadow-card) !important;
    opacity: 1 !important;
    visibility: visible !important;
    text-decoration: none !important;
    border-radius: 15px;
    padding: 25px 10px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    transition: all 0.3s ease-in-out;
  }

  html body .grid-admin-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: var(--umma-blue-hover) !important;
    box-shadow: var(--umma-shadow-hover) !important;
    filter: brightness(1.1) !important;
  }

  html body .grid-admin-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    filter: brightness(0) invert(1) !important;
    opacity: 1 !important;
    margin-bottom: 12px;
    display: block !important;
  }

  html body .grid-admin-total a.card-total h3 {
    color: var(--umma-white) !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  `}
</style>

# hola

oha 