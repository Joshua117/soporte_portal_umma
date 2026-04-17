---
title: Ciclo  
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Agregar Ciclo" iconName="person add.png" link="./Agregar_Ciclo" />
        <AdminCard title="Calendario" iconName="calendar.png" link="./Calendario" />
      </>
    );
  })()}
</div>