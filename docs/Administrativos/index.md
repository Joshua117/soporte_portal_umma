---
title: Administrativos
---

<style>
  {`
  .section-divider {
    color: var(--umma-blue);
    border-bottom: 2px solid var(--umma-blue);
    margin: 30px 0 15px 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    display: block;
  }

  .grid-admin-total {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .card-total {
    background-color: var(--umma-blue) !important;
    border-radius: 15px;
    padding: 25px 10px;
    text-align: center;
    text-decoration: none !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    box-shadow: var(--umma-shadow-card);
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .card-total:hover {
    transform: translateY(-5px);
    background-color: var(--umma-blue-hover) !important;
    box-shadow: var(--umma-shadow-hover);
  }

  .icon-admin-svg {
    width: 45px !important;
    height: auto !important;
    filter: brightness(0) invert(1);
    margin-bottom: 10px;
  }

  .card-total h3 {
    color: var(--umma-white) !important;
    font-size: 1rem;
    margin: 0 !important;
    font-weight: bold;
  }
  `}
</style>

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
    <img src={require('@site/src/components/Icons/Gruups.png').default} className="icon-admin-svg" />
    <h3>Gestión Personal</h3>
  </a>
</div>

<div className="grid-admin-total">

  <a href="./Carga_Academica" className="card-total">
    <img src={require('@site/src/components/Icons/Folder.png').default} className="icon-admin-svg" />
    <h3>Carga Académica</h3>
  </a>

  <a href="./Ciclo" className="card-total">
    <img src={require('@site/src/components/Icons/Date range.png').default} className="icon-admin-svg" />
    <h3>Ciclo</h3>
  </a>

  <a href="./Cobranza" className="card-total">
    <img src={require('@site/src/components/Icons/paid.png').default} className="icon-admin-svg" />
    <h3>Cobranza</h3>
  </a>

  <a href="./Grados-Areas" className="card-total">
    <img src={require('@site/src/components/Icons/School.png').default} className="icon-admin-svg" />
    <h3>Grados y Escolares</h3>
  </a>

  <a href="./Inventario" className="card-total">
    <img src={require('@site/src/components/Icons/Inventory.png').default} className="icon-admin-svg" />
    <h3>Inventario</h3>
  </a>

  <a href="./Materias" className="card-total">
    <img src={require('@site/src/components/Icons/Books.png').default} className="icon-admin-svg" />
    <h3>Materias</h3>
  </a>

  <a href="./Mobiliario" className="card-total">
    <img src={require('@site/src/components/Icons/Chair.png').default} className="icon-admin-svg" />
    <h3>Mobiliario</h3>
  </a>

  <a href="./Planes_Estudio" className="card-total">
    <img src={require('@site/src/components/Icons/Forms.png').default} className="icon-admin-svg" />
    <h3>Planes de Estudio</h3>
  </a>

  <a href="./Salones" className="card-total">
    <img src={require('@site/src/components/Icons/Classroom.png').default} className="icon-admin-svg" />
    <h3>Salones</h3>
  </a>

  <a href="./Seguridad" className="card-total">
    <img src={require('@site/src/components/Icons/Security.png').default} className="icon-admin-svg" />
    <h3>Seguridad</h3>
  </a>

  <a href="./Talleres" className="card-total">
    <img src={require('@site/src/components/Icons/Palette.png').default} className="icon-admin-svg" />
    <h3>Talleres</h3>
  </a>

  <a href="./Transporte_UMMA" className="card-total">
    <img src={require('@site/src/components/Icons/Bus.png').default} className="icon-admin-svg" />
    <h3>Transporte UMMA</h3>
  </a>
</div>