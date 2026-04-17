import React from 'react';

export default function IphoneWrapper({ children }) {
  return (
    <div className="iphone-frame">
      {/* Aquí dentro se renderizará lo que le pases desde DualLayout */}
      {children}
    </div>
  );
}