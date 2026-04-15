---
title: Agregar Carga
---


{/* Estructura de Texto + Imagen Estática */}
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 300px', 
  gap: '70px', 
  paddingLeft: '50px', 
  marginTop: '50px',
  alignItems: 'start' 
}}>

  {/* Lado izquierdo: Tu texto */}
  <div> 
    <h3>Título de tu sección</h3>
    <p>Aquí escribes la descripción de tu módulo. Esta imagen se quedará fija y no tendrá animaciones.</p>
  </div>

  {/* Lado derecho: Imagen estática */}
  <div style={{ width: '300px' }}>
    <img 
      src="/img/EstudiantesPanel/AlumnosAusentes.png" 
      style={{ width: '100%', height: 'auto', display: 'block' }} 
      alt="Descripción de imagen" 
    />
  </div>

</div>