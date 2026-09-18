---
title: Pase Vehicular
pagination_next: Administrativos/Pase_Vehicular/index
hide_table_of_contents: true
---
import Link from '@docusaurus/Link';
import PageLayout from '@site/src/components/PageLayout';

<PageLayout>

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'start' }}>

  {/* 1. IMAGEN PRIMERO: Esto hace que en celular se vea arriba */}
  <div style={{ flex: '1 1 300px', order: 1 }}>
    <img 
      src="/img/Pase Vehicular/PanelPase.webp" 
      alt="Lista de estudiantes" 
      style={{ 
        width: '100%', 
        borderRadius: '40px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginTop: '20px'
      }} 
    />
  </div>

  {/* 2. TEXTO DESPUÉS: Esto hace que en celular quede abajo */}
  <div style={{ flex: '2 1 400px', order: 2 }}>

En este apartado se describe el proceso para la **emisión e inscripción de pases vehiculares**, garantizando la validación documental y el control estricto de accesos institucionales.

Para completar el alta de un vehículo, es indispensable solicitar y validar la **Identificación Oficial (INE)** del solicitante y la **Tarjeta de Circulación** vigente de la unidad. El procedimiento se gestiona desde el módulo de <Link to="/docs/Administrativos/Pase_Vehicular/Añadir_Editar" className="link-destacado">Añadir / Crear</Link>, donde el sistema asigna automáticamente un **folio único e irrepetible** tras capturar la información requerida.

Una vez registrado el vehículo, el panel general permite:
* **Monitorear el inventario de pases:** Visualización completa de todas las unidades y usuarios dados de alta en el sistema.
* **Verificación de estado documental:** Control y consulta rápida para confirmar que los expedientes cuenten con sus requisitos en orden y al día.

> **Propósito del Módulo:** Centralizar la gestión vehicular para mantener un control riguroso de las entradas y salidas, previniendo la duplicación de folios, la pérdida de datos y asegurando la integridad del registro institucional.
</div>

</div>

</PageLayout>