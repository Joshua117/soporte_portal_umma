---
title: Gestión de Personal
sidebar_class_name: ocultar-item
---

<style>
  {`
  .grid-admin-total { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
  .card-total { background-color: #1A3867 !important; border-radius: 15px; padding: 25px 10px; text-align: center; text-decoration: none !important; display: flex !important; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
  .icon-admin-svg { width: 45px !important; height: auto !important; filter: brightness(0) invert(1); margin-bottom: 10px; }
  .card-total h3 { color: #ffffff !important; font-size: 1rem; margin: 0 !important; }
  `}
</style>

# Gestión de Personal

<div className="grid-admin-total">
  <a href="./Agregar_Personal" className="card-total">
    <img src={require('@site/src/components/Icons/Group add.png').default} className="icon-admin-svg" />
    <h3>Agregar Personal</h3>
  </a>
  <a href="./Asistencia_Faltas" className="card-total">
    <img src={require('@site/src/components/Icons/CalendarClock.png').default} className="icon-admin-svg" />
    <h3>Asistencia y Faltas</h3>
  </a>
  <a href="./Lista_Personal" className="card-total">
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Lista de Personal</h3>
  </a>
</div>