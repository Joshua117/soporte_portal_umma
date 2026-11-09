---
title: Inventario
pagination_prev: null
---

import Icono from '@site/src/components/Iconos';

# Inventario

Administra los artículos, categorías y ubicaciones del inventario institucional.

<div className="umma-cards-grid">

  <a href="./Añadir_Editar" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="add_box" size={80} />
    </div>
    <h3 className="umma-card-title">Añadir / Editar</h3>
    <p className="umma-card-desc">
      Registra, consulta y modifica los artículos del inventario institucional.
    </p>
  </a>

  <a href="./Categoria" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="category" size={80} />
    </div>
    <h3 className="umma-card-title">Categoría</h3>
    <p className="umma-card-desc">
      Consulta y administra las categorías de los artículos registrados.
    </p>
  </a>

  <a href="./Ubicacion" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="add_location_alt" size={80} />
    </div>
    <h3 className="umma-card-title">Ubicación</h3>
    <p className="umma-card-desc">
      Registra y administra las ubicaciones de los artículos del inventario.
    </p>
  </a>

</div>
