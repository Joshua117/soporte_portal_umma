---
title: Gestion de Personal
pagination_prev: null
--- 

# Administrativos

<div className="grid-admin-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Agregar Personal" iconName="person add.png" link="./Agregar_Personal" />
        <AdminCard title="Asistencia y Faltas" iconName="CalendarClock.png" link="./Asistencia_Faltas" />
        <AdminCard title="Lista de Personal" iconName="Gruups.png" link="./Lista_Personal" />
      </>
    );
  })()}
</div>