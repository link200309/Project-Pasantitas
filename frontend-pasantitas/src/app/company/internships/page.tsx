import { AppNavbar } from "@/shared/components";
import { Company } from "@/features/company/types";
import { Banner } from "@/features/company/components";

const companyMock: Omit<Company, "email"> = {
  name: "TechNova Labs",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
  description:
    "Empresa de desarrollo de software e inteligencia artificial orientada a soluciones SaaS empresariales de alto rendimiento para Latinoamérica y Estados Unidos.",
  website: "https://technovalabs.io",
  sector: "Software & Inteligencia Artificial",
  ubication: "Bogotá, Colombia (Oficinas con política 100% Remoto)",
  size: "51-200 empleados",
};

export default function Page() {
  return (
    <section>
      <AppNavbar
        title="Mis Pasantias"
        description="Crea, edita y gestiona las vacantes de tu empresa"
      />

      <div className="px-7 py-2">
        <Banner companyData={companyMock} />
      </div>
    </section>
  );
}
