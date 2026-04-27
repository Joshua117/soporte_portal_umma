import React from 'react';

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="container margin-vert--lg">
      <div className="row">
        {/* Aquí está el diseño de tablet que definimos */}
        <div className="col col--8 col--offset-2">
          {children}
        </div>
      </div>
    </div>
  );
}