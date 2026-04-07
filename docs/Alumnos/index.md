---
title: Sección Alumnos
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

# Panel de Alumnos

<div className="grid-admin-total">

  <a href="./Citas_Cobranza" className="card-total">
    <img src={require('@site/src/components/Icons/paid.png').default} className="icon-admin-svg" />
    <h3>Citas Cobranza</h3>
  </a>

  <a href="./Eventos" className="card-total">
    <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-admin-svg" />
    <h3>Eventos</h3>
  </a>

  <a href="./Transporte_UMMA" className="card-total">
    <img src={require('@site/src/components/Icons/Bus.png').default} className="icon-admin-svg" />
    <h3>Transporte UMMA</h3>
  </a>

</div>