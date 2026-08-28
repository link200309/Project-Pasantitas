import { InternshipCard } from "./InternshiptCard";

const internshipsMock = [
  {
    title: "Desarrollador Frontend",
    company: "Google",
    location: "Ciudad de México",
    workMode: "Remoto",
    postedAt: "Hace 2 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Desarrollador Backend",
    company: "Meta",
    location: "Monterrey",
    workMode: "Presencial",
    postedAt: "Hace 1 semana",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Diseñador UX/UI",
    company: "Apple",
    location: "Guadalajara",
    workMode: "Híbrido",
    postedAt: "Hace 3 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Analista de Datos",
    company: "Microsoft",
    location: "Buenos Aires",
    workMode: "Remoto",
    postedAt: "Hace 5 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Ingeniero DevOps",
    company: "Amazon",
    location: "Bogotá",
    workMode: "Híbrido",
    postedAt: "Hace 1 día",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Científico de Datos",
    company: "Netflix",
    location: "Santiago de Chile",
    workMode: "Remoto",
    postedAt: "Hace 4 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Ingeniero de Machine Learning",
    company: "Spotify",
    location: "Lima",
    workMode: "Híbrido",
    postedAt: "Hace 2 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Desarrollador Mobile",
    company: "Uber",
    location: "Ciudad de México",
    workMode: "Presencial",
    postedAt: "Hace 6 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
  {
    title: "Ingeniero de Software",
    company: "Airbnb",
    location: "Medellín",
    workMode: "Remoto",
    postedAt: "Hace 3 días",
    salary: "200 USD",
    duration: "6 meses",
    postulate: true,
  },
];

export function InternshipList() {
  return (
    <section className="w-full">
      {internshipsMock.map((intership, index) => (
        <InternshipCard key={index} intership={intership} />
      ))}
    </section>
  );
}
