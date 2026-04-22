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
        <AdminCard title="Agregar Carga" iconName="Add_Book.png" link="./Agregar_Carga" />
        <AdminCard title="Generar Carga" iconName="Add_Documents.png" link="./Generar_Carga" />
      </>
    );
  })()}
</div>