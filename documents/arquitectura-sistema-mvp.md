# Arquitectura del Sistema MVP — Next.js + Server Actions

## 1) Objetivo técnico

Construir una plataforma web simple, rápida de iterar, con autenticación básica, gestión de perfiles, publicación de pasantías y postulaciones, usando Server Actions como capa principal de interacción servidor-cliente.

## 2) Stack propuesto (simple)

- **Frontend:** Next.js (App Router) para UI web.
- **Estado del cliente:** Zustand.
- **Backend:** Server Actions de Next.js y módulos server-only.
- **Validación:** Zod.
- **Base de datos:** Prisma ORM.
- **Auth:** Better Auth.
- **Deploy MVP:**
  - Frontend en Vercel.
  - DB administrada (Neon/Supabase/Aiven o equivalente).

## 3) Arquitectura lógica

- **Cliente Web (Next.js)**
  - Páginas de auth, perfiles, listado/detalle de pasantías, panel empresa.
  - Invoca Server Actions para mutaciones y consultas acotadas.
  - Usa Zustand para manejar estado global del cliente: sesión, filtros, lista de pasantías y perfil actual.
- **Capa de servidor en Next.js**
  - Server Actions organizadas por dominio: Auth, Candidatos, Empresas, Pasantías y Postulaciones.
  - Validación de payloads con Zod, autorización por rol y lógica de negocio en server-only modules.
- **Base de datos**
  - Entidades principales: users, student_profiles, company_profiles, internships, applications.

## 4) Roles y permisos

- **candidato**
  - Gestiona su perfil.
  - Lista/filtra pasantías.
  - Aplica a pasantías.
- **company**
  - Gestiona perfil de empresa.
  - Crea/edita pasantías propias.
  - Ve aplicantes y sus perfiles.

## 5) Modelo de datos mínimo

- **users**: id, email, password_hash, role, created_at
- **student_profiles**: user_id, nombre, universidad, carrera, semestre, bio, habilidades, email_contacto
- **company_profiles**: user_id, nombre_empresa, descripcion, sitio_web, email_contacto
- **internships**: id, company_user_id, titulo, descripcion, requisitos, area, modalidad, duracion, created_at, updated_at
- **applications**: id, internship_id, student_user_id, created_at

Regla clave: índice único en `(internship_id, student_user_id)` para evitar doble postulación.

## 6) Operaciones de servidor mínimas

### Auth

- `registerUser`
- `loginUser`
- `logoutUser`
- `getCurrentUser`

### Candidato

- `getMyCandidateProfile`
- `updateMyCandidateProfile`

### Empresa

- `getMyCompanyProfile`
- `updateMyCompanyProfile`

### Pasantías

- `createInternship` (company)
- `listInternships` con filtros por `area` y `modalidad`
- `getInternshipById`
- `updateInternship` (company dueña)
- `listMyInternships` (company)

### Postulaciones

- `applyToInternship` (candidato)
- `listApplicantsByInternship` (company dueña)

### Validación con Zod

Cada acción recibe un payload y se valida antes de ejecutar la lógica. Los schemas se ubican por dominio, por ejemplo:

- `auth/schemas/register-user.schema.ts`
- `auth/schemas/login-user.schema.ts`
- `candidate/schemas/update-profile.schema.ts`
- `internships/schemas/create-internship.schema.ts`

Esto permite validar datos como email, contraseña, área, modalidad, títulos obligatorios, y evitar errores en la capa final de negocio.

## 7) Flujo principal

1. Usuario se registra (candidato/company).
2. Completa perfil.
3. Empresa publica pasantía.
4. Candidato explora, filtra y aplica.
5. Empresa revisa aplicantes y ve perfiles.

## 8) Seguridad mínima MVP

- Contraseñas con bcrypt.
- Sesión gestionada por Better Auth.
- Middleware de autorización por rol.
- Validación de entrada (campos obligatorios).
- Rate limit básico en login/register.

## 9) No incluido en MVP (para mantener simple)

- Chat en tiempo real.
- Notificaciones push/email avanzadas.
- Matching con IA.
- Multi-tenant complejo.


la URL (de app) no determina necesariamente la feature.

app/
  layout.tsx
  page.tsx

  (auth)/
    layout.tsx
    login/page.tsx
    register/page.tsx

  candidate/
    layout.tsx
    profile/page.tsx
    internships/page.tsx
    internships/[id]/page.tsx
    applications/page.tsx

  company/
    layout.tsx
    profile/page.tsx
    internships/page.tsx
    internships/new/page.tsx
    internships/[id]/edit/page.tsx
    internships/[id]/applicants/page.tsx

src/
  features/
    auth/
      components/
        LoginForm.tsx
        RegisterForm.tsx
      server/
        actions/
          register-user.ts
          login-user.ts
          logout-user.ts
        queries/
          get-current-user.ts
          get-user-by-email.ts
      schemas/
        register-user.schema.ts
        login-user.schema.ts
      interfaces.ts

    candidate/
      components/
        CandidateProfileForm.tsx
      server/
        actions/
          update-profile.ts
        queries/
          get-candidate-profile.ts
      schemas/
        update-profile.schema.ts
      interfaces.ts

    company/
      components/
        CompanyProfileForm.tsx
      server/
        actions/
          create-company-profile.ts
          update-company-profile.ts
        queries/
          get-company-profile.ts
      schemas/
        company-profile.schema.ts
      interfaces.ts

    internships/
      components/
        InternshipCard.tsx
        InternshipFilters.tsx     // (Client)
        InternshipList.tsx
        InternshipForm.tsx
      server/
        actions/
          create-internship.ts
          update-internship.ts
        queries/
          get-internships.ts
          get-internship-by-id.ts
      schemas/
        create-internship.schema.ts
        update-internship.schema.ts
      interfaces.ts

    applications/
      components/
        ApplyButton.tsx           // (Client o Server Action form)
        ApplicantsList.tsx
      server/
        actions/
          apply-to-internship.ts
        queries/
          get-applicants-by-internship.ts
      schemas/
        apply-to-internship.schema.ts
      interfaces.ts

  stores/
    ui-store.ts

  shared/
    components/
      Navbar.tsx
      Footer.tsx
      ui/                         // botones, inputs, etc
    lib/
      db.ts                       // (más adelante Prisma client)
      auth.ts                     // helpers de sesión (fase 4)
    interfaces/
      common.ts
    utils/
      format.ts
