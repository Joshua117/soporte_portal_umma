
import React from 'react';

export const iconos = {
  // Navegación y configuración
  configuracion: 'settings',
  permisos: 'security',
  areas: 'category',
  agregar: 'add_box',

  // Académico
  escuela: 'school',
  calendario: 'calendar_month',
  horarios: 'schedule',
  supervision: 'fact_check',
  ciclo: 'event_note',

  // Cobranza
  cobranza: 'payments',
  agendarCita: 'event_available',
  citas: 'calendar_month',
  tramites: 'receipt_long',
  tiposPago: 'payments',
  ajustesCitas: 'settings_suggest',
  cajas: 'point_of_sale',

  // Deportes
  deportes: 'sports_soccer',
  categorias: 'category',
  asistencia: 'fact_check',

  // Enfermería
  enfermeria: 'medical_services',
  visita: 'medical_information',
  inventario: 'inventory_2',
  fichaClinica: 'clinical_notes',

  // Eventos
  eventos: 'event',
  eventosAcademicos: 'date_range',
  eventosCulturales: 'theater_comedy',

  // Acciones generales
  buscar: 'search',
  editar: 'edit',
  eliminar: 'delete',
  guardar: 'save',
  imprimir: 'print',
  descargar: 'download',
  siguiente: 'arrow_forward',
} as const;

type NombreIcono = keyof typeof iconos;

interface IconoProps {
  nombre: NombreIcono;
  size?: number;
  className?: string;
}

export default function Icono({
  nombre,
  size = 28,
  className = '',
}: IconoProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      {iconos[nombre]}
    </span>
  );
}
