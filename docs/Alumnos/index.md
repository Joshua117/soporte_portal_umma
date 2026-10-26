---
title: 🎓 Alumnos
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Citas de Cobranza" iconName="paid.png" link="./Citas_Cobranza" />
        <AdminCard title="Eventos" iconName="calendar.png" link="./Eventos" />
        <AdminCard title="Transporte UMMA" iconName="Bus.png" link="./Transporte_UMMA" />
        <AdminCard title="Control de asistencia" iconName="CalendarClock.png" link="./Control_Asistencia" />
        <AdminCard title="Horarios" iconName="Clock.png" link="./Horarios" />
      </>
    );
  })()}
</div>

