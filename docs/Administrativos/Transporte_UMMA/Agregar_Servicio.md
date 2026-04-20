---
title: Agregar Servicio
hide_table_of_contents: true
---

import DualLayout from '@site/src/components/DualLayout';
import Link from '@docusaurus/Link'; 

<DualLayout 
  imageSrc="/img/Transporte/AgregarServ.jpg" 
  altText="Agregar Servicio" 
  stickyImage={true}
>

# Agregar Servicios

## Boleto
El administrador tiene la facultad de crear un <Link to="/docs/Administrativos/Transporte_UMMA/Boletos" className="link-destacado">Boleto</Link> mediante la matrícula del alumno. Al generar el boleto, se asigna automáticamente un asiento y se selecciona el horario de salida disponible. Estos boletos pueden validarse directamente desde el dispositivo del encargado o mediante el escaneo de su código QR. Esta función permite generar accesos manualmente, saltando las restricciones habituales del <Link to="/docs/Alumnos/Transporte_UMMA" className="link-destacado">Boleto alumno</Link>.

## Choferes
En este apartado de <Link to="/docs/Administrativos/Transporte_UMMA/Choferes" className="link-destacado">Choferes</Link>, puedes gestionar el catálogo de conductores. Es posible agregar, editar o eliminar registros de manera manual. Es responsabilidad de los choferes escanear los boletos de los alumnos para registrar su acceso al transporte.

## Horarios
Desde el módulo de <Link to="/docs/Administrativos/Transporte_UMMA/Horarios" className="link-destacado">Horarios</Link>, puedes visualizar, crear, modificar o eliminar los horarios de salida programados para las rutas de transporte.

## Tiempos
En <Link to="/docs/Administrativos/Transporte_UMMA/Tiempos" className="link-destacado">Tiempos</Link>, se definen las reglas de configuración para la emisión de boletos. Aquí puedes establecer el margen de tolerancia y el tiempo límite (en minutos) previo a la salida para gestionar la disponibilidad. Una vez fuera de este rango, el sistema bloqueará automáticamente la creación de nuevos boletos.


## Tipo de Servicio
Existen dos clasificaciones de servicio: "Normal" y "Especial". Aunque ambos tienen el objetivo de transportar a los alumnos, cumplen funciones distintas:

Normal: Corresponde a la operación diaria al finalizar la jornada académica.

Especial: Se destina a salidas fuera de la rutina, como actividades extracurriculares o necesidades específicas de la institución.

## Vehiculos
El módulo de <Link to="/docs/Administrativos/Transporte_UMMA/Vehiculos" className="link-destacado">Vehículos</Link> permite administrar la flotilla. Puedes registrar, actualizar o eliminar unidades especificando los siguientes datos: modelo, matrícula, capacidad total (incluyendo al chofer), estado (uso o reposo) y una imagen de referencia.


## Grado Escolar
En la sección de <Link to="/docs/Administrativos/Grados_y_Areas_Escolares/Añadir_Editar" className="link-destacado">Grados y Areas Escolares</Link>, se definen los niveles educativos asociados al transporte (Bachillerato, Licenciatura y Posgrado). Esta configuración es esencial para asegurar que los servicios se asignen correctamente según el perfil del estudiante, evitando confusiones en la logística.
</DualLayout>