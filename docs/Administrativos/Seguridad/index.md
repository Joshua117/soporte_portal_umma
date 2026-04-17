---
title: Seguridad
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Ajustes" iconName="Security.png" link="./Ajustes" />
        <AdminCard title="Modo Tablet" iconName="Settings.png" link="./Modo_Tablet" />
        <AdminCard title="Registrar Visitas" iconName="person search.png" link="./Registrar_Visitas" />
      </>
    );
  })()}
</div>