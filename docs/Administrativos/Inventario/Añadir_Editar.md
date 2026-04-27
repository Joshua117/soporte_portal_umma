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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
      
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '10px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Cobranza" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '10px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
          }}/>
        ))}
      </div>
    </div>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>

  <div> 


## Añadir y Editar

El módulo de Control de Inventario permite gestionar de manera eficiente el flujo de insumos que ingresan a la institución. Su objetivo principal es centralizar la información de los productos para optimizar la toma de decisiones, mantener un seguimiento preciso de las existencias y controlar los gastos operativos.

### Registro y Gestión de Productos
Para dar de alta o modificar un producto, el sistema requiere la captura de los siguientes datos, garantizando así una trazabilidad completa:

**Información General:**
* **Nombre del Producto:** Identificación clara del insumo.
* **Descripción:** Breve detalle del producto.
* **Categoría:** Departamento al que será asignado.
* **Unidad de Medida:** Especificación de la unidad de control (piezas, litros, centímetros, kg, etc.).
* **Ubicación:** Selección del área de almacenamiento mediante el módulo de <Link to="/docs/Administrativos/Inventario/Ubicacion" className="link-destacado">Ubicación</Link>.

**Control de Stock:**
* **Cantidad:** Existencia inicial ingresada.
* **Cantidad Mínima:** Límite inferior para mantener el control y prevenir el desabastecimiento.

**Datos Financieros y Logísticos:**
* **Costo Unitario:** Valor del producto para el control de gastos.
* **Fecha de Caducidad:** (Opcional) Registro para el seguimiento de productos perecederos.
* **Referencia Visual:** Espacio para la imagen del producto, permitiendo una identificación rápida en el catálogo.

### Beneficios del Módulo
Esta centralización permite a la administración tener una visibilidad total de los recursos disponibles, facilitando el reporte de gastos y asegurando que las instalaciones cuenten siempre con los insumos necesarios para su correcto funcionamiento.

</div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>