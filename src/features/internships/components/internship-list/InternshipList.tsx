import InternshipCard from "./InternshiptCard";

const internshipsMock = [
  {
    title: "Desarrollador Frontend",
    company: "Google",
    location: "Ciudad de México",
    workMode: "Remoto",
    postedAt: "Hace 2 días",
  },
  {
    title: "Desarrollador Backend",
    company: "Meta",
    location: "Monterrey",
    workMode: "Presencial",
    postedAt: "Hace 1 semana",
  },
  {
    title: "Diseñador UX/UI",
    company: "Apple",
    location: "Guadalajara",
    workMode: "Híbrido",
    postedAt: "Hace 3 días",
  },
  {
    title: "Analista de Datos",
    company: "Microsoft",
    location: "Buenos Aires",
    workMode: "Remoto",
    postedAt: "Hace 5 días",
  },
  {
    title: "Ingeniero DevOps",
    company: "Amazon",
    location: "Bogotá",
    workMode: "Híbrido",
    postedAt: "Hace 1 día",
  },
  {
    title: "Científico de Datos",
    company: "Netflix",
    location: "Santiago de Chile",
    workMode: "Remoto",
    postedAt: "Hace 4 días",
  },
  {
    title: "Ingeniero de Machine Learning",
    company: "Spotify",
    location: "Lima",
    workMode: "Híbrido",
    postedAt: "Hace 2 días",
  },
  {
    title: "Desarrollador Mobile",
    company: "Uber",
    location: "Ciudad de México",
    workMode: "Presencial",
    postedAt: "Hace 6 días",
  },
  {
    title: "Ingeniero de Software",
    company: "Airbnb",
    location: "Medellín",
    workMode: "Remoto",
    postedAt: "Hace 3 días",
  },
];

export default function InternshipList() {
  return (
    <section>
      {internshipsMock.map((intership, index) => (
        <InternshipCard
          key={index}
          title={intership.title}
          company={intership.company}
          location={intership.location}
          workMode={intership.workMode}
          postedAt={intership.postedAt}
        />
      ))}
    </section>
  );
}
