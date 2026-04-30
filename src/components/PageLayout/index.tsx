import React from 'react';

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="container margin-vert--lg">
      <div className="row">
        {/* Mantenemos el diseño centrado de tablet/escritorio */}
        <div className="col col--8 col--offset-2">
          {/* Usamos un div simple con estilo en línea para asegurar que el 
              contenido (incluyendo el teléfono) esté centrado y sea estático */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%',
            position: 'static' 
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}