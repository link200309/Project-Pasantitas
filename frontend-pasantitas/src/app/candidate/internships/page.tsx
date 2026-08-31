import {
  InternshipDetail,
  InternshipList,
} from "@/features/internships/components";

import { AppNavbar } from "@/shared/components";

export default function InternshipsPage() {
  return (
    <section>
      <AppNavbar
        title="Explorar pasantias"
        description="Catalogo de pasantias en empresas verificadas"
      />
      <div className="grid grid-cols-[40%_1fr] gap-5 px-7 py-2">
        <InternshipList />
        <InternshipDetail slug="hola" />
      </div>
    </section>
  );
}
