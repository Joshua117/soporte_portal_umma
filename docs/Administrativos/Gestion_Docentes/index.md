---
sidebar_label: Gestion Docentes
pagination_prev: null
---

# Gestión Docentes 

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Agregar Docente" iconName="person_add.png" link="./Agregar_Docente" />
        <AdminCard title="Control Asistencia" iconName="calendar.png" link="./Control_Asistencia" />
        <AdminCard title="Formatos Docente" iconName="Folder.png" link="./Formatos_Docente" />
        <AdminCard title="Gafetes Docentes" iconName="Card.png" link="./Gafetes_Docentes" />
        <AdminCard title="Lista de Docentes" iconName="Gruups.png" link="./Lista_Docentes" />
        <AdminCard title="Seguimiento Docentes" iconName="person search.png" link="./Seguimiento_Docentes" />
      </>
    );
  })()}
</div>