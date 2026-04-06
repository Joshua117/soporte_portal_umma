---
title: Gestión Alumnos
sidebar_class_name: ocultar-item
---

<style>
  {`
  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .card-total {
    background-color: #1A3867 !important;
    border-radius: 15px;
    padding: 25px 10px;
    text-align: center;
    text-decoration: none !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
  }

  .card-total:hover {
    transform: translateY(-5px);
    background-color: #224a85 !important;
  }

  .card-total h3 {
    color: #ffffff !important;
    font-size: 1rem;
    margin: 12px 0 0 0;
  }

  .icon-admin-svg {
    width: 45px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  `}
</style>

# Gestión de Alumnos

<div className="grid-admin-total">

  <a href="./Agregar_Estudiantes" className="card-total">
    <img src={require('@site/src/components/Icons/person add.png').default} className="icon-admin-svg" />
    <h3>Agregar Estudiantes</h3>
  </a>

  <a href="./Alumnos_Ausentes" className="card-total">
    <img src={require('@site/src/components/Icons/person remove.png').default} className="icon-admin-svg" />
    <h3>Alumnos Ausentes</h3>
  </a>

  <a href="./Lista_Estudiantes" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Lista Estudiantes</h3>
  </a>
</div>