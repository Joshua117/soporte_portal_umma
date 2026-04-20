---
title: Sección Docentes
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Ausencias Alumnos" iconName="person remove.png" link="./Ausencias_alumnos" />
        <AdminCard title="Control Asistencias" iconName="Date range.png" link="./Control_asistencias" />
        <AdminCard title="Formatos" iconName="Forms.png" link="./Formatos" />
        <AdminCard title="Horario de Clases" iconName="Clock.png" link="./Horario_Clases" />
        <AdminCard title="Horarios" iconName="CalendarClock.png" link="./Horarios" />
      </>
    );
  })()}
</div>