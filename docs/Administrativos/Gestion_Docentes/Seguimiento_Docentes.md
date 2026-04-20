---
sidebar_label: Seguimiento docente
pagination_next: Administrativos/Gestion_Docentes/index
sidebar_position: 6
---

import TabletWrapper from '@site/src/components/TabletWrapper/TabletWrapper';

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr', 
  gap: '30px', 
  paddingLeft: '50px', 
  marginTop: '50px',
  alignItems: 'start' 
}}>

  {/* Texto arriba */}
  <div> 
    <h3>Título de tu sección</h3>
    <p>Aquí escribes la descripción de tu módulo. La imagen ahora aparecerá dentro del marco de la tablet.</p>
  </div>

  {/* Tablet abajo */}
  <TabletWrapper>
    <img 
      src="/img/EstudiantesPanel/ListaEstu.jpg" 
      alt="Alumnos Ausentes" 
    />
  </TabletWrapper>

</div>