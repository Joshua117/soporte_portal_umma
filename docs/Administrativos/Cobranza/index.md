---
title: Cobranza
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Ajustes de Cobranza" iconName="paid.png" link="./Ajustes_de_Cobranza" />
        <AdminCard title="Citas" iconName="calendar.png" link="./Citas" />
        <AdminCard title="Citas" iconName="calendar.png" link="./Ajustes_Citas" />
      </>
    );
  })()}
</div>