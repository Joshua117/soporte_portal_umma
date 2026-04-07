---
title: Gestión Docentes
sidebar_label: Inicio
---

<style>
  {`
  .grid-gestion-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .card-total {
    background-color: var(--umma-blue, #1A3867) !important;
    border-radius: 12px;
    padding: 30px 15px;
    text-align: center;
    text-decoration: none !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-height: 160px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .card-total:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    filter: brightness(1.1);
  }
  .icon-admin-svg {
    width: 50px !important;
    height: auto !important;
    filter: brightness(0) invert(1);
    margin-bottom: 12px;
  }
  .card-total h3 {
    color: #ffffff !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
  }
  [data-theme='dark'] .card-total {
    background-color: #242526 !important;
    border: 1px solid #3e3e3e;
  }
  `}
</style>

# Gestión Docentes 

<div className="grid-gestion-total">

  <a href="./Agregar_Docente" className="card-total">
    <img src={require('@site/src/components/Icons/person add.png').default} className="icon-admin-svg" />
    <h3>Agregar Docente</h3>
  </a>

  <a href="./Control_Asistencia" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Control Asistencia</h3>
  </a>

  <a href="./Formatos_Docente" className="card-total">
    <img src={require('@site/src/components/Icons/Folder.png').default} className="icon-admin-svg" />
    <h3>Formatos Docente</h3>
  </a>

  <a href="./Gafetes_Docentes" className="card-total">
    <img src={require('@site/src/components/Icons/Card.png').default} className="icon-admin-svg" />
    <h3>Gafetes Docentes</h3>
  </a>

  <a href="./Lista_Docentes" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Lista de Docentes</h3>
  </a>

  <a href="./Seguimiento_Docentes" className="card-total">
    <img src={require('@site/src/components/Icons/person search.png').default} className="icon-admin-svg" />
    <h3>Seguimiento Docentes</h3>
  </a>

</div>