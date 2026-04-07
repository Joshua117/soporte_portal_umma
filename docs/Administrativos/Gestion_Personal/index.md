---
title: Gestión Personal
---

<style>
  {`
  :root {
    /* Colores Principales UMMA */
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;
    
    /* Sombras para las Tarjetas */
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);

    /* Estados de Navegación */
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
  }

  /* --- ESTILOS GLOBALES DE NAVEGACIÓN --- */
  .navbar { background-color: var(--umma-blue) !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  .theme-doc-sidebar-container { background-color: var(--umma-white) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--umma-blue) !important; }
  .breadcrumbs__link, .breadcrumb-home-icon, .breadcrumbs__item--active .breadcrumbs__link { color: var(--umma-blue) !important; }
  .main-wrapper { background-color: var(--umma-white) !important; }
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--umma-blue) !important; }

  /* --- DISEÑO DE GESTIÓN BLINDADO --- */
  .grid-gestion-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  /* Blindaje máximo para que las tarjetas no cambien de color ni desaparezcan */
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

  /* Efecto Hover con tus variables */
  html body .grid-gestion-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: var(--umma-blue-hover) !important;
    box-shadow: var(--umma-shadow-hover) !important;
    filter: brightness(1.1) !important;
  }

  /* Iconos siempre blancos */
  html body .grid-gestion-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    height: auto !important;
    filter: brightness(0) invert(1) !important;
    opacity: 1 !important;
    margin-bottom: 12px;
    display: block !important;
  }

  /* Títulos siempre blancos */
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

# Gestión Personal

<div className="grid-gestion-total">

  <a href="./Agregar_Personal" className="card-total">
    <img src={require('@site/src/components/Icons/person add.png').default} className="icon-admin-svg" />
    <h3>Agregar Personal</h3>
  </a>

  <a href="./Asistencia_Faltas" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Asistencia y Faltas</h3>
  </a>

  <a href="./Lista_Personal" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Lista de Personal</h3>
  </a>

</div>