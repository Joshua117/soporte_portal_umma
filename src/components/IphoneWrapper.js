import React from 'react';

export default function IPhoneWrapper({ children }) {
  // --- ESTILOS EN LÍNEA (CSS-in-JS) ---
  const frameStyle = {
    position: 'relative',
    width: '300px',
    height: '600px',
    margin: '20px auto',
    borderRadius: '30px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    // ELIMINAMOS EL BORDER AQUÍ para usar la clase CSS
    overflow: 'hidden',
    backgroundColor: '#fff',
  };

  const notchStyle = {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '25px',
    backgroundColor: 'black',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    zIndex: '2',
  };

  const contentStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  };

  return (
    // Agregamos la clase 'iphone-frame' que controlará el borde
    <div className="iphone-outer-wrapper iphone-frame" style={frameStyle}>
      <div className="iphone-notch" style={notchStyle}></div>
      
      <div className="iphone-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}