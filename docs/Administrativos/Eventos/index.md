---
title: Eventos
sidebar_label: Eventos
sidebar_class_name: ocultar-item
---

# Eventos UMMA 

<style>
  {`
  /* --- ESTILOS ENCAPSULADOS: SOLO PARA ESTE PANEL DE EVENTOS --- */
  
  /* 1. Encapsulador Principal */
  .seccion-eventos-unica {
    margin-top: 2rem;
    padding: 1rem;
  }

  /* 2. Grid de Tarjetas (Afecta solo aquí) */
  .seccion-eventos-unica .grid-eventos-principal { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 25px; 
    margin-top: 30px; 
  }

  /* 3. Estilo de la Tarjeta (Afecta solo aquí) */
  .seccion-eventos-unica .card-evento-pro { 
    background-color: #1A3867 !important; /* Azul UMMA exacto */
    border-radius: 18px; 
    padding: 40px 20px; 
    text-align: center; 
    text-decoration: none !important; 
    display: flex !important; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    min-height: 180px; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  }

  /* 4. Efecto Hover (Afecta solo aquí) */
  .seccion-eventos-unica .card-evento-pro:hover { 
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    background-color: #1a3867cc !important; /* Un poco más claro al hover */
  }

  /* 5. Icono Blanco (Afecta solo aquí) */
  .seccion-eventos-unica .icon-svg-blanco { 
    width: 55px !important; 
    height: auto !important; 
    filter: brightness(0) invert(1); /* Vuelve blanco el icono .png */
    margin-bottom: 15px; 
  }

  /* 6. Texto de la Tarjeta (Afecta solo aquí) */
  .seccion-eventos-unica .card-evento-pro h3 { 
    color: #ffffff !important; 
    font-size: 1.25rem; 
    margin: 0 !important; 
    font-weight: 600;
  }
  `}
</style>

# Eventos 

{/* USAMOS EL ENCAPSULADOR AQUÍ */}
<div className="seccion-eventos-unica">

  <div className="grid-eventos-principal">

    {/* 1. EVENTOS ACADÉMICOS */}
    <a href="./Eventos_Academicos" className="card-evento-pro">
      <img src={require('@site/src/components/Icons/collections bookmark.png').default} className="icon-svg-blanco" />
      <h3>Eventos Académicos</h3>
    </a>

    {/* 2. EVENTOS CULTURALES */}
    <a href="./Eventos_Culturales" className="card-evento-pro">
      <img src={require('@site/src/components/Icons/calendar.png').default} className="icon-svg-blanco" />
      <h3>Eventos Culturales</h3>
    </a>

  </div>

</div>