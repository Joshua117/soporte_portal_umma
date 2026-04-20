---
title: Inventario
pagination_prev: null
---

# Inventario


<div className="grid-admin-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Añadir / Editar" iconName="Inventory.png" link="./Añadir_Editar"/>
        <AdminCard title="Categoria" iconName="Inventory.png" link="./Categoria" />
        <AdminCard title="Ubicacion" iconName="Inventory.png" link="./Ubicacion" />
      </>
    );
  })()}
</div>