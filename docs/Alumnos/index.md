---
title: Alumnos
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
    background-color: var(--umma-blue) !important;
    border-radius: 15px;
    padding: 25px 10px;
    text-align: center;
    text-decoration: none !important;
    box-shadow: var(--umma-shadow-card);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
  }

  .card-total:hover {
    transform: translateY(-5px);
    background-color: var(--umma-blue-hover) !important;
    box-shadow: var(--umma-shadow-hover);
  }

  .card-total h3 {
    color: var(--umma-white) !important;
    font-size: 1rem;
    margin: 12px 0 0 0;
  }

  .icon-admin-svg {
    width: 45px;
    height: auto;
    filter: brightness(0) invert(1);
  }

  .section-divider {
    color: var(--umma-blue);
    border-bottom: 2px solid var(--umma-blue);
    margin: 30px 0 15px 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
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