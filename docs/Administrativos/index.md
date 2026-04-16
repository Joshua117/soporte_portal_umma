---
title: Administrativos
pagination_prev: null
---

<<<<<<< HEAD
=======
<style>
  {`
  /* ============================================================
      1. VARIABLES Y TEMAS (CLARO / OSCURO)
     ============================================================ */
  :root {
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;

    --bg-global: var(--umma-white);
    --sidebar-bg: var(--umma-white);
    --text-global: var(--umma-blue);
    --navbar-bg: #1A3867;
    
    --card-bg: var(--umma-blue);
    --card-text: var(--umma-white);
    --card-hover-bg: var(--umma-blue-hover);
    --card-border: transparent;
    
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
    
    --icon-filter: brightness(0) invert(1);

    /* Paginación */
    --nav-color-normal: #1A3867;
    --nav-color-hover: #1e427d;
  }

  [data-theme='dark'] {
    --bg-global: #262624;
    --sidebar-bg: #262624;
    --text-global: #e3e3e3;
    --navbar-bg: #1a2a3f;
    
    --card-bg: #1e1f20; 
    --card-text: #ffffff;
    --card-hover-bg: #2d2e30;
    --card-border: #30363d;
    
    --umma-bg-hover: rgba(255, 255, 255, 0.05);
    --umma-bg-active: #1A3867;

    --nav-color-normal: #ffffff;
    --nav-color-hover: #ffffff;
  }

  /* ============================================================
      2. PAGINACIÓN (PURO TEXTO)
     ============================================================ */
  .pagination-nav__link { 
    background-color: transparent !important; 
    border: none !important; 
    box-shadow: none !important; 
    padding: 0 !important;
  }

  .pagination-nav__sublabel, 
  .pagination-nav__label { 
    color: var(--nav-color-normal) !important; 
    transition: color 0.2s ease;
  }

  .pagination-nav__link:hover .pagination-nav__sublabel, 
  .pagination-nav__link:hover .pagination-nav__label { 
    color: var(--nav-color-hover) !important; 
    background-color: transparent !important;
    text-decoration: none !important;
  }

  /* ============================================================
      3. ESTRUCTURA Y NAVEGACIÓN GLOBAL
     ============================================================ */
  .main-wrapper { background-color: var(--bg-global) !important; transition: background-color 0.3s ease; }
  .navbar { background-color: var(--navbar-bg) !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--text-global) !important; }
  .breadcrumbs__link { color: var(--text-global) !important; }
  
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--text-global) !important; }
  
  .menu__link:hover { background-color: var(--umma-bg-hover) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--text-global) !important; font-weight: bold !important; }

  /* ============================================================
      4. DISEÑO DE TARJETAS (ACORDE A EVENTOS / ALUMNOS)
     ============================================================ */
  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  html body .grid-admin-total a.card-total {
    background-color: var(--card-bg) !important;
    color: var(--card-text) !important;
    border: 1px solid var(--card-border) !important;
    border-radius: 15px;
    padding: 30px 15px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    box-shadow: var(--umma-shadow-card) !important;
    transition: all 0.3s ease-in-out;
    text-decoration: none !important;
  }

  html body .grid-admin-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: var(--card-hover-bg) !important;
    box-shadow: var(--umma-shadow-hover) !important;
  }

  html body .grid-admin-total a.card-total img.icon-admin-svg {
    width: 55px !important;
    filter: var(--icon-filter) !important;
    margin-bottom: 12px;
  }

  html body .grid-admin-total a.card-total h3 {
    color: var(--card-text) !important;
    font-size: 1.15rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  `}
</style>

>>>>>>> ae248ce7a225970165465cd1ee98050b514d6844
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
    <img src={require('@site/src/components/Icons/person add.png').default} className="icon-admin-svg" />
    <h3>Gestión Personal</h3>
  </a>
  <a href="./Carga_Academica/" className="card-total">
    <img src={require('@site/src/components/Icons/Books.png').default} className="icon-admin-svg" />
    <h3>Carga Académica</h3>
  </a>
  <a href="./Ciclo/" className="card-total">
    <img src={require('@site/src/components/Icons/CalendarClock.png').default} className="icon-admin-svg" />
    <h3>Ciclo</h3>
  </a>
  <a href="./Cobranza/" className="card-total">
    <img src={require('@site/src/components/Icons/paid.png').default} className="icon-admin-svg" />
    <h3>Cobranza</h3>
  </a>
  <a href="./Grados_y_Areas_Escolares/" className="card-total">
    <img src={require('@site/src/components/Icons/Classroom.png').default} className="icon-admin-svg" />
    <h3>Grados y Áreas</h3>
  </a>
  <a href="./Inventario/" className="card-total">
    <img src={require('@site/src/components/Icons/Inventory.png').default} className="icon-admin-svg" />
    <h3>Inventario</h3>
  </a>
  <a href="./Materias/" className="card-total">
    <img src={require('@site/src/components/Icons/Stack Book.png').default} className="icon-admin-svg" />
    <h3>Materias</h3>
  </a>
  <a href="./Mobiliario/" className="card-total">
    <img src={require('@site/src/components/Icons/Chair.png').default} className="icon-admin-svg" />
    <h3>Mobiliario</h3>
  </a>
  <a href="./Planes_de_Estudio/" className="card-total">
    <img src={require('@site/src/components/Icons/collections bookmark.png').default} className="icon-admin-svg" />
    <h3>Planes de Estudio</h3>
  </a>
  <a href="./Salones/" className="card-total">
    <img src={require('@site/src/components/Icons/Classroom.png').default} className="icon-admin-svg" />
    <h3>Salones</h3>
  </a>
  <a href="./Seguridad/" className="card-total">
    <img src={require('@site/src/components/Icons/Security.png').default} className="icon-admin-svg" />
    <h3>Seguridad</h3>
  </a>
  <a href="./Talleres/" className="card-total">
    <img src={require('@site/src/components/Icons/Palette.png').default} className="icon-admin-svg" />
    <h3>Talleres</h3>
  </a>
  <a href="./Transporte_UMMA/" className="card-total">
    <img src={require('@site/src/components/Icons/Bus.png').default} className="icon-admin-svg" />
    <h3>Transporte UMMA</h3>
  </a>
</div>