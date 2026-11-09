
import React from 'react';

// Alias de iconos para los módulos de SoporteUMMA
export const iconos = {
  // Configuración
  configuracion: 'settings',
  permisos: 'security',
  areas: 'category',

  // Generales
  agregar: 'add_box',
  escuela: 'school',
  calendario: 'calendar_month',
  horarios: 'schedule',
  supervision: 'fact_check',
  ciclo: 'event_note',

  // Carga Académica
  cargaAcademica: 'library_books',
  generarCarga: 'calendar_clock',
  materias: 'menu_book',
  planesEstudio: 'collections_bookmark',

  // Cobranza
  cobranza: 'payments',
  agendarCita: 'calendar_clock',
  citas: 'calendar_month',
  tramites: 'category',
  tiposPago: 'paid',
  ajustesCitas: 'settings',
  cajas: 'point_of_sale',

  // Deportes
  deportes: 'sports_soccer',
  categorias: 'sports_basketball',
  asistencia: 'how_to_reg',

  // Enfermería
  enfermeria: 'medical_services',
  visita: 'medical_information',
  inventario: 'inventory_2',
  fichaClinica: 'clinical_notes',

  // Eventos
  eventos: 'event',
  eventosAcademicos: 'event_note',
  eventosCulturales: 'theater_comedy',

  // Gestión Alumnos
  gestionAlumnos: 'school',
  agregarEstudiante: 'person_add',
  alumnosAusentes: 'person_off',
  listaEstudiantes: 'groups',

  // Gestión Docentes
  gestionDocentes: 'groups',
  agregarDocente: 'person_add',
  controlAsistencia: 'fact_check',
  formatosDocente: 'folder_open',
  gafetesDocentes: 'badge',
  listaDocentes: 'groups',
  seguimientoDocentes: 'person_search',

  // Gestión Personal
  gestionPersonal: 'manage_accounts',

  // Otros módulos administrativos
  gradosAreas: 'account_tree',
  justificantes: 'assignment_turned_in',
  mobiliario: 'chair',
  paseVehicular: 'directions_car',
  salones: 'meeting_room',
  seguridad: 'security',
  talleres: 'palette',
  transporte: 'directions_bus',

  // Acciones generales
  buscar: 'search',
  editar: 'edit',
  eliminar: 'delete',
  guardar: 'save',
  imprimir: 'print',
  descargar: 'download',
  siguiente: 'arrow_forward',
  anterior: 'arrow_back',
  cerrar: 'close',
  verificar: 'check_circle',
  cancelar: 'cancel',
  informacion: 'info',
  advertencia: 'warning',
  usuario: 'person',
  usuarios: 'groups',
  inicio: 'home',
  ajustes: 'settings',
} as const;

interface IconoProps {
  nombre: string;
  size?: number;
  color?: string;
  fill?: boolean;
  weight?: number;
  className?: string;
}

export default function Icono({
  nombre,
  size = 36,
  color,
  fill = true,
  weight = 400,
  className = '',
}: IconoProps) {
  const nombreReal =
    iconos[nombre as keyof typeof iconos] ?? nombre;

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        color: color,
        lineHeight: 1,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: '"Material Symbols Outlined"',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontVariationSettings: `
          'FILL' ${fill ? 1 : 0},
          'wght' ${weight},
          'GRAD' 0,
          'opsz' 24
        `,
      }}
      aria-hidden="true"
    >
      {nombreReal}
    </span>
  );
}
