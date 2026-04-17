import React from 'react';
import Layout from '@theme/Layout';
import AdminCard from '../components/AdminCard'; // Esta ruta SÍ funcionará aquí

export default function TransportePage() {
  return (
    <Layout title="Transporte UMMA">
      <div className="container margin-vert--lg">
        <h1>Panel Administrativo</h1>
        <div className="grid-gestion-total">
          <AdminCard title="Agregar Servicio" iconName="person_add.png" link="./Agregar_Servicio" />
          <AdminCard title="Boletos" iconName="calendar.png" link="./Boletos" />
          <AdminCard title="Choferes" iconName="Gruups.png" link="./Choferes" />
          <AdminCard title="Historial" iconName="calendar.png" link="./Historial" />
          <AdminCard title="Horarios" iconName="Gruups.png" link="./Horarios" />
          <AdminCard title="Tiempos" iconName="person_add.png" link="./Tiempos" />
          <AdminCard title="Vehículos" iconName="Bus.png" link="./Vehiculos" />
        </div>
      </div>
    </Layout>
  );
}
