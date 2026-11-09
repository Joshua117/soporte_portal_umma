---
title: Gestión Alumnos
pagination_prev: null
---

import Icono from '@site/src/components/Iconos';

# Gestión Alumnos

Administra el registro, las ausencias y la información de los estudiantes de la institución.

<div className="umma-cards-grid">

  <a href="./Agregar_Estudiantes" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="person_add" size={80} />
    </div>
    <h3 className="umma-card-title">Agregar Estudiantes</h3>
    <p className="umma-card-desc">
      Registra nuevos estudiantes y administra su información académica y personal.
    </p>
  </a>

  <a href="./Alumnos_Ausentes" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="person_off" size={80} />
    </div>
    <h3 className="umma-card-title">Alumnos Ausentes</h3>
    <p className="umma-card-desc">
      Consulta y da seguimiento a los estudiantes que registran ausencias.
    </p>
  </a>

  <a href="./Lista_Estudiantes" className="umma-card">
    <div className="umma-icon-box">
      <Icono nombre="groups" size={80} />
    </div>
    <h3 className="umma-card-title">Lista de Estudiantes</h3>
    <p className="umma-card-desc">
      Consulta y administra el listado general de estudiantes registrados.
    </p>
  </a>

</div>
