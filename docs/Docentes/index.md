---
title: Docentes
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
    background-color: var(--umma-blue) !important; /* Usamos tu azul del :root */
    border-radius: 15px;
    padding: 25px 10px;
    text-align: center;
    text-decoration: none !important;
    box-shadow: var(--umma-shadow-card); /* Usamos tu sombra del :root */
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
  }

  .card-total:hover {
    transform: translateY(-5px);
    background-color: var(--umma-blue-hover) !important; /* Usamos tu azul claro del :root */
    box-shadow: var(--umma-shadow-hover);
  }

  .card-total h3 {
    color: var(--umma-white) !important; /* Usamos tu blanco del :root */
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

# Panel de Docentes 

<div className="grid-admin-total">

  <a href="./Ausencias_alumnos" className="card-total">
    <img src={require('@site/src/components/Icons/person remove.png').default} className="icon-admin-svg" />
    <h3>Ausencias Alumnos</h3>
  </a>

  <a href="./Control_asistencias" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Control Asistencias</h3>
  </a>

  <a href="./Formatos" className="card-total">
    <img src={require('@site/src/components/Icons/Forms.png').default} className="icon-admin-svg" />
    <h3>Formatos</h3>
  </a>

  <a href="./Horario_Clases" className="card-total">
    <img src={require('@site/src/components/Icons/CalendarClock.png').default} className="icon-admin-svg" />
    <h3>Horario Clases</h3>
  </a>

  <a href="./Horarios" className="card-total">
    <img src={require('@site/src/components/Icons/Clock.png').default} className="icon-admin-svg" />
    <h3>Horarios</h3>
  </a>

</div>