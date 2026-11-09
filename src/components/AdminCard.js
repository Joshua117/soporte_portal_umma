
import React from 'react';
import Link from '@docusaurus/Link';
import Icono from '@site/src/components/Iconos';

// Compatibilidad con los nombres PNG anteriores
const iconosAntiguos = {
  'Add_Box.png': 'add_box',
  'Category.png': 'category',
  'Add_Location.png': 'add_location_alt',
  'Inventory.png': 'inventory_2',
  'Settings.png': 'settings',
  'Security.png': 'security',
  'CalendarClock.png': 'calendar_clock',
  'calendar.png': 'calendar_month',
  'Clock.png': 'schedule',
  'Gruups.png': 'groups',
  'person_add.png': 'person_add',
  'person remove.png': 'person_remove',
  'person search.png': 'person_search',
  'Date range.png': 'date_range',
  'Forms.png': 'description',
  'Book2.png': 'menu_book',
  'Palette.png': 'palette',
  'Vehicle.png': 'directions_car',
  'Tablet.png': 'tablet_mac',
  'Stack.png': 'dashboard',
  'Mobile_Ticket.png': 'confirmation_number',
  'Bus.png': 'directions_bus',
  'paid.png': 'paid',
};

export default function AdminCard({
  title,
  iconName = 'category',
  link,
}) {
  // Convierte nombres PNG antiguos a Material Symbols
  const nombreIcono =
    iconosAntiguos[iconName] ||
    iconName.replace(/\.png$/i, '');

  return (
    <Link
      to={link}
      className="card-total"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="card-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Icono
          nombre={nombreIcono}
          size={55}
          className="icon-admin-svg"
        />

        <h3>{title}</h3>
      </div>
    </Link>
  );
}
