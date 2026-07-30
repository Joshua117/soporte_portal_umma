---
title: Añadir y Editar
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'; 
import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Inventario/Inventario.jpg' },
    { type: 'image', src: '/img/Inventario/AgregarInv1.jpg' },
    { type: 'image', src: '/img/Inventario/AgregarInv2.jpg' },
  ];

  const siguienteImagen = () => {
    setIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const botonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      
      {/* Botones por fuera del marco del iPhone */}
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '-15px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Inventario" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '-15px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      {/* Indicadores alineados abajo */}
      <div style={{ position: 'absolute', bottom: '-22px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'var(--ifm-color-primary)' : 'rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease'
          }}/>
        ))}
      </div>
    </div>
  );
};

{/* Contenedor Adaptable */}
<div className="responsive-container">

  {/* Columna del Slider (Aparecerá arriba en Celular y a la Derecha en PC) */}
  <div className="slider-column">
    <ArrowSlider />
  </div>

  {/* Columna de Texto con HTML seguro para MDX */}
  <div className="text-column">

<p>El módulo de Control de Inventario permite gestionar de manera eficiente el flujo de insumos que ingresan a la institución. Su objetivo principal es centralizar la información de los productos para optimizar la toma de decisiones, mantener un seguimiento preciso de las existencias y controlar los gastos operativos.</p>

<h3 style={{ marginTop: '15px', marginBottom: '5px' }}>Registro y Gestión de Productos</h3>
<p>Para dar de alta o modificar un producto, el sistema requiere la captura de los siguientes datos, garantizando así una trazabilidad completa:</p>

<p style={{ marginBottom: '5px' }}><strong>Información General:</strong></p>
<ul>
  <li><strong>Nombre del Producto:</strong> Identificación clara del insumo.</li>
  <li><strong>Descripción:</strong> Breve detalle del producto.</li>
  <li><strong>Categoría:</strong> Departamento al que será asignado.</li>
  <li><strong>Unidad de Medida:</strong> Especificación de la unidad de control (piezas, litros, centímetros, kg, etc.).</li>
  <li><strong>Ubicación:</strong> Selección del área de almacenamiento mediante el módulo de <Link to="/docs/Administrativos/Inventario/Ubicacion" className="link-destacado">Ubicación</Link>.</li>
</ul>

<p style={{ marginTop: '10px', marginBottom: '5px' }}><strong>Control de Stock:</strong></p>
<ul>
  <li><strong>Cantidad:</strong> Existencia inicial ingresada.</li>
  <li><strong>Cantidad Mínima:</strong> Límite inferior para mantener el control y prevenir el desabastecimiento.</li>
</ul>

<p style={{ marginTop: '10px', marginBottom: '5px' }}><strong>Datos Financieros y Logísticos:</strong></p>
<ul>
  <li><strong>Costo Unitario:</strong> Valor del producto para el control de gastos.</li>
  <li><strong>Fecha de Caducidad:</strong> (Opcional) Registro para el seguimiento de productos perecederos.</li>
  <li><strong>Referencia Visual:</strong> Espacio para la imagen del producto, permitiendo una identificación rápida en el catálogo.</li>
</ul>

<h3 style={{ marginTop: '15px', marginBottom: '5px' }}>Beneficios del Módulo</h3>
<p>Esta centralización permite a la administración tener una visibilidad total de los recursos disponibles, facilitando el reporte de gastos y asegurando que las instalaciones cuenten siempre con los insumos necesarios para su correcto funcionamiento.</p>

  </div>

</div>

{/* Reglas CSS Responsivas */}
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