---
title: Sección Docentes
---

<style>
  {`
  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  html body .grid-admin-total a.card-total,
  html body .grid-admin-total a.card-total:hover,
  html body .grid-admin-total a.card-total:visited,
  html body .grid-admin-total a.card-total:active,
  html body .grid-admin-total a.card-total:focus {
    background-color: #1A3867 !important;
    color: #ffffff !important;
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
    box-shadow: 0 4px 10px rgba(0,0,0,0.2) !important;
    transition: all 0.3s ease-in-out;
  }

  html body .grid-admin-total a.card-total:hover {
    transform: translateY(-5px) !important;
    background-color: #234a85 !important;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;
    filter: brightness(1.1) !important;
  }

  html body .grid-admin-total a.card-total img.icon-admin-svg {
    width: 50px !important;
    height: auto !important;
    filter: brightness(0) invert(1) !important;
    opacity: 1 !important;
    margin-bottom: 12px;
    display: block !important;
  }

  html body .grid-admin-total a.card-total h3 {
    color: #ffffff !important;
    opacity: 1 !important;
    font-size: 1.1rem !important;
    margin: 0 !important;
    font-weight: 600 !important;
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
    <img src={require('@site/src/components/Icons/Folder.png').default} className="icon-admin-svg" />
    <h3>Formatos</h3>
  </a>

  <a href="./Horario_Clases" className="card-total">
    <img src={require('@site/src/components/Icons/Date range.png').default} className="icon-admin-svg" />
    <h3>Horario Clases</h3>
  </a>

  <a href="./Horarios" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Horarios</h3>
  </a>

</div>