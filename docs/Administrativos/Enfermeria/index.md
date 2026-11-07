---
title: Enfermeria
pagination_prev: null
---

# Enfermería

Administra las visitas, el inventario y las fichas clínicas del área de enfermería.

<div className="umma-cards-grid">

  <a href="./Agregar_Visita" className="umma-card">
    <div className="umma-icon-box">
      <img
        src={require('@site/src/components/Icons/Add_Box.png').default}
        alt="Agregar Visita"
      />
    </div>
    <h3 className="umma-card-title">Agregar Visita</h3>
    <p className="umma-card-desc">
      Registra las visitas y atenciones realizadas en el área de enfermería.
    </p>
  </a>

  <a href="./Inventario" className="umma-card">
    <div className="umma-icon-box">
      <img
        src={require('@site/src/components/Icons/Inventory.png').default}
        alt="Inventario"
      />
    </div>
    <h3 className="umma-card-title">Inventario</h3>
    <p className="umma-card-desc">
      Consulta y administra los materiales e insumos disponibles en enfermería.
    </p>
  </a>

  <a href="./Ficha_Clinica" className="umma-card">
    <div className="umma-icon-box">
      <img
        src={require('@site/src/components/Icons/FichaClinica.png').default}
        alt="Ficha Clínica"
      />
    </div>
    <h3 className="umma-card-title">Ficha Clínica</h3>
    <p className="umma-card-desc">
      Consulta y gestiona las fichas clínicas de los pacientes registrados.
    </p>
  </a>

</div>
