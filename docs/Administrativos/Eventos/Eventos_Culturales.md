---
title: Eventos Culturales
pagination_next: Administrativos/Eventos/index
sidebar_custom_props:
  icon: "calendar.png"
---

import React, { useState, useEffect } from 'react';

export const RegistroSlider = () => {
  const [index, setIndex] = useState(0);
  const imagenes = ['/img/Registro1.png', '/img/Registro2.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <img 
      src={imagenes[index]} 
      style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.5s ease-in-out' }} 
      alt="Registro" 
    />
  );
};

<style>{`
  :root {
    --umma-blue: #1A3867;
    --umma-blue-hover: #1e427d;
    --umma-white: #ffffff;
    --bg-global: var(--umma-white);
    --sidebar-bg: var(--umma-white);
    --text-global: var(--umma-blue);
    --navbar-bg: #1A3867;
    --card-bg: var(--umma-blue);
    --card-text: var(--umma-white);
    --card-hover-bg: var(--umma-blue-hover);
    --card-border: transparent;
    --umma-shadow-card: rgba(0, 0, 0, 0.2);
    --umma-shadow-hover: rgba(0, 0, 0, 0.3);
    --umma-bg-hover: rgba(26, 56, 103, 0.1);
    --umma-bg-active: #a5bfe9;
    --icon-filter: brightness(0) invert(1);
    --nav-color-normal: #1A3867;
    --nav-color-hover: #1e427d;
  }
  [data-theme='dark'] {
    --bg-global: #262624;
    --sidebar-bg: #262624;
    --text-global: #e3e3e3;
    --navbar-bg: #1a2a3f;
    --card-bg: #1e1f20; 
    --card-text: #ffffff;
    --card-hover-bg: #2d2e30;
    --card-border: #30363d;
    --umma-bg-hover: rgba(255, 255, 255, 0.05);
    --umma-bg-active: #1A3867;
    --nav-color-normal: #ffffff;
    --nav-color-hover: #ffffff;
  }
  .pagination-nav__link { background-color: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; }
  .pagination-nav__sublabel, .pagination-nav__label { color: var(--nav-color-normal) !important; transition: color 0.2s ease; }
  .pagination-nav__link:hover .pagination-nav__sublabel, .pagination-nav__link:hover .pagination-nav__label { color: var(--nav-color-hover) !important; background-color: transparent !important; text-decoration: none !important; }
  .main-wrapper { background-color: var(--bg-global) !important; transition: background-color 0.3s ease; }
  .navbar { background-color: var(--navbar-bg) !important; border-bottom: 1px solid #30363d !important; }
  .navbar__link, .navbar__title { color: var(--umma-white) !important; }
  .theme-doc-sidebar-container { background-color: var(--sidebar-bg) !important; border-right: 1px solid var(--umma-blue) !important; }
  .menu__link { color: var(--text-global) !important; }
  .breadcrumbs__link { color: var(--text-global) !important; }
  .markdown h1, .markdown h2, .markdown h3, .markdown p, .markdown li { color: var(--text-global) !important; }
  .menu__link:hover { background-color: var(--umma-bg-hover) !important; }
  .menu__link--active { background-color: var(--umma-bg-active) !important; color: var(--text-global) !important; font-weight: bold !important; }
  .grid-admin-total { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
  html body .grid-admin-total a.card-total { background-color: var(--card-bg) !important; color: var(--card-text) !important; border: 1px solid var(--card-border) !important; border-radius: 15px; padding: 25px 10px; display: flex !important; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; box-shadow: var(--umma-shadow-card) !important; transition: all 0.3s ease-in-out; text-decoration: none !important; }
  html body .grid-admin-total a.card-total:hover { transform: translateY(-5px) !important; background-color: var(--card-hover-bg) !important; box-shadow: var(--umma-shadow-hover) !important; }
  html body .grid-admin-total a.card-total img.icon-admin-svg { width: 50px !important; filter: var(--icon-filter) !important; margin-bottom: 12px; }
  html body .grid-admin-total a.card-total h3 { color: var(--card-text) !important; font-size: 1.1rem !important; margin: 0 !important; font-weight: 600 !important; }
`}</style>

# Eventos Culturales

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 300px', 
  gap: '70px', 
  paddingLeft: '50px', 
  marginTop: '50px',
  alignItems: 'start'
}}>

  <div style={{ maxWidth: '600px' }}>
    <h1 style={{ color: '#1A3867', fontSize: '35px' }}>Título del Documento</h1>
    <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
      Lorem ipsum dolor sit akjfdjirdfghjhgfdcgvhjkiuytghjkiuytghbhjkiuoytrfdgvgbhjkiuytrfgvbhjkuiytghmet...
    </p>
  </div>

  <div style={{ width: '300px', marginTop: '0px' }}>
    <RegistroSlider />
  </div>

</div>