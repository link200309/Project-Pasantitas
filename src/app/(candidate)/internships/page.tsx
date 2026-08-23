import {
  InternshipDetail,
  InternshipList,
} from "@/features/internships/components";

export default function InternshipsPage() {
  return (
    <section className="overflow-hidden">
      <h2 className="text-section-title font-bold">Pagina de pasantias</h2>
      <div className="grid grid-cols-[40%_1fr] gap-5">
        <InternshipList />
        <InternshipDetail slug="hola" />
      </div>
    </section>
  );
}
