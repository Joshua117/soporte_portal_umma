---
title: Ajustes Visita
pagination_next: Administrativos/Seguridad/Modo_Tablet
hide_table_of_contents: true
---

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = [
    '/img/Seguridad/AjustesVis.jpg', 
    '/img/Seguridad/AjustesVis1.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      <IphoneWrapper>
        <img 
          src={imagenes[index]} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
          alt="Registro" 
        />
      </IphoneWrapper>
    </div>
  );
};

{/* Contenedor Adaptable */}
<div className="responsive-container">

  {/* Columna del Slider (Aparece arriba en celular) */}
  <div className="slider-column">
    <RegistroSlider />
  </div>

  {/* Columna de Texto */}
  <div className="text-column">

    <h2 style={{ marginTop: '0px' }}>Configurar Áreas de Visita</h2>

    <p>Este módulo optimiza la recepción y canalización de visitantes o personas que acuden a realizar trámites administrativos a áreas específicas de la institución. Al registrar el ingreso, se especifica el motivo de la visita (por ejemplo: pagos, solicitudes de información, entre otros), lo que permite al sistema enviar una notificación automática al empleado responsable del área correspondiente.</p>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Características del Módulo</h3>
    
    <ul>
      <li><strong>Gestión por Modo Tablet:</strong> El proceso se centraliza a través del <Link to="/docs/Administrativos/Seguridad/Modo_Tablet" className="link-destacado">Modo Tablet</Link>, permitiendo un registro rápido y autónomo.</li>
      <li><strong>Notificaciones en Tiempo Real:</strong> Aviso automático al empleado responsable del área visitada al momento del registro.</li>
      <li><strong>Control y Trazabilidad:</strong> Bitácora detallada del flujo de personas que ingresan a las instalaciones, garantizando seguridad y orden administrativo.</li>
    </ul>

  </div>

</div>

{/* CSS Responsivo */}
<style>{`
  .responsive-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0px 10px;
    align-items: flex-start;
  }

  .text-column {
    flex: 1 1 400px;
    margin-top: -20px;
  }

  .slider-column {
    flex: 0 0 320px;
    margin: 0 auto;
    position: relative;
  }

  /* Vista Escritorio (PC): Texto a la Izquierda, Slider a la Derecha */
  @media (min-width: 769px) {
    .text-column {
      order: 1;
    }
    .slider-column {
      order: 2;
      position: sticky;
      top: 100px;
    }
  }

  /* Vista Móvil (Celular): Slider ARRIBA, Texto ABAJO */
  @media (max-width: 768px) {
    .responsive-container {
      padding: 0px 5px;
      gap: 30px;
    }
    .slider-column {
      order: 1;
      margin-bottom: 25px;
      width: 100%;
    }
    .text-column {
      order: 2;
      margin-top: 0;
    }
  }
`}
</style>