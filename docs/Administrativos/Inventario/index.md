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
        <AdminCard title="Añadir / Editar" iconName="Add_Box.png" link="./Añadir_Editar"/>
        <AdminCard title="Categoria" iconName="Category.png" link="./Categoria" />
        <AdminCard title="Ubicacion" iconName="Add_Location.png" link="./Ubicacion" />
      </>
    );
  })()}
</div>