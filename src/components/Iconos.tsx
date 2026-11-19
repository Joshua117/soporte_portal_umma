import React from 'react';

// Alias de iconos relacionados con los módulos de Administrativos y Protección Civil
export const iconos = {
  // Panel / Tablero de control
  panel: 'space_dashboard',
  tableroPanel: 'dashboard',
  monitoreoPanel: 'monitoring',

  // Protección Civil (Brigadas, Control Conteo, Panel)
  proteccionCivil: 'health_and_safety',
  brigadas: 'groups',
  brigadaEmergencia: 'emergency',
  controlConteo: 'assignment',
  conteoPersonas: 'how_to_reg',
  evacuacion: 'directions_run',
  simulacro: 'campaign',
  extintor: 'fire_extinguisher',
  puntoReunion: 'pin_drop',

  // Carga Académica
  cargaAcademica: 'library_books',
  agregarCarga: 'add_box',
  generarCarga: 'calendar_clock',
  supervision: 'fact_check',

  // Ciclo
  ciclo: 'event_note',
  calendario: 'calendar_month',
  horarios: 'schedule',

  // Cobranza
  cobranza: 'payments',
  cajas: 'point_of_sale',
  tramites: 'category',
  tiposPago: 'paid',
  citas: 'calendar_month',
  agendarCita: 'calendar_clock',
  ajustesCitas: 'settings',

  // Configuración
  configuracion: 'settings',
  permisos: 'security',
  areas: 'category',

  // Deportes
  deportes: 'sports_soccer',
  categorias: 'sports_basketball',
  asistencia: 'how_to_reg',

  // Enfermería
  enfermeria: 'medical_services',
  visita: 'medical_information',
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

  // Grados y Áreas Escolares
  gradosAreas: 'account_tree',

  // Inventario
  inventario: 'inventory_2',

  // Justificantes
  justificantes: 'assignment_turned_in',

  // Materias
  materias: 'menu_book',

  // Mobiliario
  mobiliario: 'chair',

  // Pase Vehicular
  paseVehicular: 'directions_car',

  // Planes de Estudio
  planesEstudio: 'collections_bookmark',

  // Salones
  salones: 'meeting_room',

  // Seguridad
  seguridad: 'security',

  // Talleres
  talleres: 'palette',

  // Transporte UMMA
  transporte: 'directions_bus',

  // Generales y acciones base
  agregar: 'add_box',
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