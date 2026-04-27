---
title: Ajustes
sidebar_position: 7
hide_table_of_contents: true
---


import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Cobranza/AgregarCaj.jpg' },
    { type: 'image', src: '/img/Cobranza/Cajas.jpg' },
    { type: 'image', src: '/img/Cobranza/TipoTra.jpg' },
    { type: 'image', src: '/img/Cobranza/TipoPag.jpg' },

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

## Ajustes de Citas
Este apartado agrupa las funciones necesarias para administrar la operatividad financiera y de atención al cliente de la institución.

### Tipos de Trámites
Este módulo permite gestionar el catálogo de servicios que la institución ofrece a los usuarios. Los tipos predeterminados incluyen Inscripción, Pago de Parcialidad y Reinscripción.

* **Gestión de Estados:** Cada trámite cuenta con un interruptor de estado (Activo / No Activo), permitiendo habilitar o deshabilitar servicios según la temporada o necesidad operativa.
* **Creación de Trámites:** El sistema permite añadir nuevos servicios capturando el nombre del trámite y, si aplica, un subtipo para mayor especificidad.

**Cómo agregar un trámite:**
1. Dirígete a la sección **Tipos de Trámites**.
2. Haz clic en el botón **"Nuevo Trámite"** o **"Agregar"**.
3. Captura el nombre del trámite y el subtipo (en caso de tenerlo).
4. Activa o desactiva el interruptor según su disponibilidad (Estado).
5. Haz clic en **"Guardar"** para confirmar.

---

### Métodos de Pago
Esta sección define las formas en que los usuarios pueden realizar sus pagos en las cajas.

* **Flexibilidad:** El sistema incluye por defecto Efectivo y Tarjeta, pero es totalmente escalable: si se implementa un nuevo método de pago, el administrador puede agregarlo simplemente ingresando el nombre del nuevo método.
* **Integración:** Estos métodos se reflejan automáticamente al momento de agendar una cita, garantizando que el usuario conozca las opciones disponibles antes de acudir.

**Cómo agregar un método de pago:**
1. Accede al módulo **Métodos de Pago**.
2. Haz clic en el botón **"Agregar nuevo método"**.
3. Escribe el nombre del nuevo método (ej. Transferencia).
4. Haz clic en **"Añadir"** o **"Guardar"**. Este aparecerá automáticamente en las opciones de citas.

---

### Administración de Cajas
Las cajas representan los cubículos físicos o virtuales donde se realizan los pagos. Este módulo asegura que cada punto de atención esté correctamente estructurado.

**Configuración Integral:**
Al crear una caja, el administrador debe asignar:
* **Personal:** Trabajador encargado del cubículo.
* **Horarios:** Días de operación (Lunes a Sábado) y horas específicas de atención.
* **Capacidades:** Vinculación de los tipos de trámites y métodos de pago que esa caja específica puede procesar.
* **Control Operativo:** Al igual que los trámites, las cajas pueden ser activadas o desactivadas, permitiendo gestionar el personal y los recursos según la demanda.

**Cómo configurar una caja:**
1. Ve al módulo de **Cajas** y selecciona **"Crear Nueva Caja"**.
2. Selecciona al trabajador encargado en el desplegable (debe estar registrado previamente).
3. Marca los días de operación (Lunes a Sábado) y establece el rango de **Hora de Inicio** y **Hora de Fin**.
4. Selecciona mediante casillas los **Tipos de Trámites** y **Métodos de Pago** disponibles para dicha caja.
5. Asegúrate de que el estado esté en **"Activo"**.
6. Haz clic en **"Guardar configuración"**.

---

### Ajustes de Citas
Este panel permite configurar la lógica de flujo de las citas y la experiencia del usuario en la sala de espera.

**Lógica de Atención:**
* **Tiempo entre citas:** Define el intervalo necesario para procesar cada servicio.
* **Modalidad de asignación:** Permite elegir entre citas diarias o una selección automatizada por el sistema.

**Experiencia en Sala de Espera:**
* El sistema permite configurar contenido multimedia (video) y mensajes de texto informativos que se mostrarán en pantalla mientras los usuarios aguardan su turno, mejorando la experiencia de espera.

**Cómo configurar los ajustes:**
1. Entra en el panel de **Ajustes de Citas**.
2. Establece el **"Tiempo entre citas"** y selecciona el modo de asignación (Citas Diarias o Selección Automática).
3. Para la **Experiencia en Espera**, sube el archivo de video correspondiente y redacta el mensaje informativo que verán los usuarios.
4. Haz clic en **"Guardar Cambios"** para aplicar la configuración global.

  </div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>