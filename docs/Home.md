---
sidebar_position: 1
sidebar_label: INICIO
title: " "
pagination_prev: null
pagination_next: null
---

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', marginTop: '80px', paddingLeft: '150px' }}>

  <p align="center" style={{ margin: 0 }}>
    {/* Imagen para modo claro */}
    <img
      src="/img/Umma_Azul.png"
      width="500"
      className="logo-light"
      alt="Universidad Mundo Maya"
    />

    {/* Imagen para modo oscuro */}
    <img
      src="/img/Umma_Blanco.png"
      width="500"
      className="logo-dark"
      alt="Universidad Mundo Maya"
    />
  </p>

  <h1 style={{ textAlign: 'center', width: '100%', marginTop: '20px', fontSize: '2.7rem' }}>UNIVERSIDAD MUNDO MAYA</h1>

</div>

<style>
  {`
  /* ============================================================
     1. LÓGICA DE CAMBIO DE LOGO
     ============================================================ */

  .logo-dark {
    display: none !important;
  }

  .logo-light {
    display: block !important;
  }

  [data-theme='dark'] .logo-dark {
    display: block !important;
  }

  [data-theme='dark'] .logo-light {
    display: none !important;
  }

  `}
</style>