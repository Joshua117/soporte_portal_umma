---
title: Alumnos
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Citas de Cobranza" iconName="paid.png" link="./Citas_Cobranza" />
        <AdminCard title="Eventos" iconName="calendar.png" link="./Eventos" />
        <AdminCard title="Transporte UMMA" iconName="Bus.png" link="./Transporte_UMMA" />
      </>
    );
  })()}
</div>

