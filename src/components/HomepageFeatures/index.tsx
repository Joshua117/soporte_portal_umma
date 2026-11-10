
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Cada apartado tiene un título, icono, descripción y enlace.
type FeatureItem = {
  title: string;
  iconName: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Alumno',
    iconName: 'school',
    link: '/docs/Alumnos',
    description: (
      <>
        Accede a tu historial académico, horarios y recursos diseñados
        para tu crecimiento profesional.
      </>
    ),
  },
  {
    title: 'Docente',
    iconName: 'menu_book',
    link: '/docs/Docentes',
    description: (
      <>
        Gestiona tus clases, materiales y mantén una comunicación
        efectiva con tus grupos.
      </>
    ),
  },
  {
    title: 'Administrativo',
    iconName: 'admin_panel_settings',
    link: '/docs/Administrativos',
    description: (
      <>
        Herramientas de gestión y control para optimizar los procesos
        institucionales de la universidad.
      </>
    ),
  },
];

function Feature({
  title,
  iconName,
  description,
  link,
}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link
        to={link}
        style={{
          display: 'block',
          height: '100%',
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer',
        }}
        aria-label={`Ir al apartado de ${title}`}
      >
        {/* Icono del apartado */}
        <div className="text--center padding-vert--md">
          <span
            className="material-icons"
            style={{
              fontSize: '80px',
              color: '#1A3867',
              userSelect: 'none',
              display: 'block',
              marginBottom: '10px',
            }}
            aria-hidden="true"
          >
            {iconName}
          </span>
        </div>

        {/* Título y descripción */}
        <div
          className="text--center padding-horiz--md"
          style={{color: '#1A3867'}}
        >
          <Heading
            as="h3"
            style={{color: '#1A3867'}}
          >
            {title}
          </Heading>

          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
