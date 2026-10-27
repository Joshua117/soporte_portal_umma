---
title: Carga Académica
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
  <AdminCard title="Carga Académica" iconName="School.png" link="./Agregar_Carga" />
  <AdminCard title="Generar Carga" iconName="Add_Box.png" link="./Generar_Carga" />
  <AdminCard title="Supervision" iconName="School.png" link="./Supervision" />
      </>
    );
  })()}
</div>
  