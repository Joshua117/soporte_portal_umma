---
title: Transporte UMMA
pagination_prev: null
---

<div className="grid-gestion-total">
  {(() => {
    const AdminCard = require('@site/src/components/AdminCard').default;
    return (
      <>
        <AdminCard title="Agregar Servicio" iconName="person_add.png" link="./Agregar_Servicio" />
        <AdminCard title="Boletos" iconName="calendar.png" link="./Boletos" />
        <AdminCard title="Choferes" iconName="Gruups.png" link="./Choferes" />
        <AdminCard title="Historial" iconName="calendar.png" link="./Historial" />
        <AdminCard title="Horarios" iconName="Clock.png" link="./Horarios" />
        <AdminCard title="Tiempos" iconName="CalendarClock.png" link="./Tiempos" />
        <AdminCard title="Vehículos" iconName="Bus.png" link="./Vehiculos" />
      </>
    );
  })()}
</div>