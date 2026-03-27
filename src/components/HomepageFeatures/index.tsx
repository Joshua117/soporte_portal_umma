import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 1. Definimos que cada ítem ahora usa un "iconName" en lugar de un SVG
type FeatureItem = {
  title: string;
  iconName: string; 
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Alumno',
    iconName: 'school', // Birrete de Google
    description: (
      <>
        Accede a tu historial académico, horarios y recursos diseñados 
        para tu crecimiento profesional.
      </>
    ),
  },
  {
    title: 'Docente',
    iconName: 'menu_book', // Libro de Google
    description: (
      <>
        Gestiona tus clases, materiales y mantén una comunicación 
        efectiva con tus grupos.
      </>
    ),
  },
  {
    title: 'Administrativo',
    iconName: 'admin_panel_settings', // Escudo/Admin de Google
    description: (
      <>
        Herramientas de gestión y control para optimizar los procesos 
        institucionales de la universidad.
      </>
    ),
  },
];

function Feature({title, iconName, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-vert--md">
        {/* MAGIA: Aquí dibujamos el icono con el azul #1A3867 */}
        <span 
          className="material-icons" 
          style={{ 
            fontSize: '80px', 
            color: '#1A3867', 
            userSelect: 'none',
            display: 'block',
            marginBottom: '10px'
          }}
        >
          {iconName}
        </span>
      </div>
      
      {/* Aplicamos el color #1A3867 al texto (sin fuente Gelasio) */}
      <div className="text--center padding-horiz--md" style={{color: '#1A3867'}}>
        <Heading as="h3" style={{color: '#1A3867'}}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}