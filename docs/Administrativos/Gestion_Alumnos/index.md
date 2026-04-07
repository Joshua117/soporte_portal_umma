---
title: Gestión Alumnos
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
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);
  }

  /* --- ESTILOS DE NAVEGACIÓN Y GLOBAL --- */
  .navbar { background-color: var(--umma-blue) !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  .theme-doc-sidebar-container { background-color: var(--umma-white) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--umma-blue) !important; }
  .breadcrumbs__link, .breadcrumb-home-icon, .breadcrumbs__item--active .breadcrumbs__link { color: var(--umma-blue) !important; }
  .main-wrapper { background-color: var(--umma-white) !important; }
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--umma-blue) !important; }
  .menu__link:hover { background-color: var(--umma-bg-hover) !important; color: var(--umma-blue) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--umma-blue) !important; font-weight: bold !important; }

  /* --- DISEÑO DE GESTIÓN UNIFICADO Y BLINDADO --- */
  .grid-gestion-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  /* Blindaje máximo para tarjetas de Gestión */
  html body .grid-gestion-total a.card-total,
  html body .grid-gestion-total a.card-total:hover,
  html body .grid-gestion-total a.card-total:visited,
  html body .grid-gestion-total a.card-total:active,
  html body .grid-gestion-total a.card-total:focus {
    background-color: var(--umma-blue) !important;
    color: var(--umma-white) !important;
    opacity: 1 !important;
    visibility: visible !important;
    text-decoration: none !important;
    border-radius: 12px;
    padding: 30px 15px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    box-shadow: var(--umma-shadow-card) !important;
    transition: all 0.3s ease-in-out;
  }

  /* Hover específico con tu variable de sombra y color */
  html body .grid-gestion-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: var(--umma-blue-hover) !important;
    box-shadow: var(--umma-shadow-hover) !important;
    filter: brightness(1.1) !important;
  }

  /* Iconos de Gestión */
  html body .grid-gestion-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    height: auto !important;
    filter: brightness(0) invert(1) !important;
    opacity: 1 !important;
    margin-bottom: 12px;
    display: block !important;
  }

  /* Títulos de Gestión */
  html body .grid-gestion-total a.card-total h3 {
    color: var(--umma-white) !important;
    opacity: 1 !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }
  `}
</style>
# Gestión Alumnos

<div className="grid-gestion-total">

  <a href="./Agregar_Estudiantes" className="card-total">
    <img src={require('@site/src/components/Icons/person add.png').default} className="icon-admin-svg" />
    <h3>Agregar Estudiantes</h3>
  </a>

  <a href="./Alumnos_Ausentes" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Alumnos Ausentes</h3>
  </a>

  <a href="./Lista_Estudiantes" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Lista de Estudiantes</h3>
  </a>

</div>