---
title: Carga Académica
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Carga Académica" iconName="Stack Book.png" link="./Carga_Academica" />
        <AdminCard title="Agregar Carga" iconName="person add.png" link="./Agregar_Carga" />
        <AdminCard title="Generar Carga" iconName="Settings.png" link="./Generar_Carga" />
      </>
    );
  })()}
</div>