# Requerimientos del MVP — Plataforma de Pasantías

## 1) Requerimientos funcionales

### 1.1 Autenticación y cuentas

- RF-01: El sistema debe permitir registro con email y contraseña.
- RF-02: El sistema debe permitir login con email y contraseña.
- RF-03: El sistema debe manejar dos roles: `candidato` y `empresa`.
- RF-04: El usuario autenticado debe poder cerrar sesión.
- RF-05: El usuario debe permitir login con Google.

### 1.2 Perfil de candidato

- RF-05: El candidato debe poder crear y editar su perfil.
- RF-06: El perfil debe incluir: nombre, bio, habilidades, experiencia previa (opcional), email de contacto y foto de perfil.
- RF-07: El candidato debe poder ver su perfil público.

### 1.3 Perfil de empresa

- RF-08: La empresa debe poder crear y editar su perfil.
- RF-09: El perfil debe incluir: nombre de empresa, descripción, sitio web, email de contacto y foto de perfil.

### 1.4 Gestión de pasantías

- RF-10: La empresa debe poder publicar pasantías.
- RF-11: Cada pasantía debe incluir: título, descripción, requisitos, área, modalidad, duración.
- RF-12: La empresa debe poder editar sus pasantías publicadas.
- RF-13: El sistema debe listar pasantías disponibles para candidatos.
- RF-14: El sistema debe permitir filtrar pasantías por área y modalidad.
- RF-15: El sistema debe mostrar el detalle completo de una pasantía.

### 1.5 Postulaciones

- RF-16: El candidato debe poder postular a una pasantía con un clic.
- RF-17: El sistema debe evitar postulaciones duplicadas a la misma pasantía por el mismo candidato.
- RF-18: La empresa debe poder ver la lista de candidatos postulados a cada pasantía.
- RF-19: La empresa debe poder ver el perfil completo de cada candidato postulante.

## 2) Requerimientos no funcionales

### 2.1 Seguridad

- RNF-01: Las contraseñas deben almacenarse con hash seguro (bcrypt o equivalente).
- RNF-02: La API debe requerir autenticación para operaciones privadas.
- RNF-03: El sistema debe aplicar autorización por rol (`candidato`/`empresa`).
- RNF-04: Validar entradas obligatorias en backend para evitar datos inválidos.

### 2.2 Rendimiento

- RNF-05: El listado de pasantías debe responder en menos de 2 segundos en condiciones normales.
- RNF-06: Login y registro deben responder en menos de 2 segundos en condiciones normales.

### 2.3 Disponibilidad y confiabilidad

- RNF-07: Disponibilidad objetivo del MVP: 99% mensual.
- RNF-08: El sistema debe manejar errores con mensajes claros sin exponer información sensible.

### 2.4 Usabilidad

- RNF-09: El flujo registro → perfil → postulación debe poder completarse sin capacitación.
- RNF-10: La interfaz debe ser responsive para desktop y móvil.

### 2.5 Mantenibilidad

- RNF-11: Mantener convenciones de código y estructura modular por dominios (auth, perfiles, pasantías, postulaciones).

### 2.6 Escalabilidad mínima

- RNF-14: El diseño de base de datos debe soportar crecimiento inicial (índices en filtros y postulaciones).
- RNF-15: La API debe permitir paginación en listados para evitar respuestas excesivas.

## 3) Criterios de aceptación globales (MVP)

- CA-01: Un candidato puede registrarse, completar perfil y postular a una pasantía.
- CA-02: Una empresa puede registrarse, publicar una pasantía y ver postulantes.
- CA-03: El filtro por área y modalidad devuelve resultados correctos.
- CA-04: No se permiten postulaciones duplicadas a la misma pasantía.
- CA-05: Solo usuarios autenticados y autorizados pueden ejecutar acciones privadas.
