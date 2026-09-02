import { PublishedInternship } from "../../types/published-internship-interface";
import { InternshipCard } from "../internship-list/InternshiptCard";
import { PublishedInternshipCard } from "./PublishedInternshipCard";

interface Props {}

const internships: PublishedInternship[] = [
  {
    title: "Frontend Developer Intern",
    description:
      "Support the development of modern web applications using React and Next.js.",
    location: "Cochabamba, Bolivia",
    workMode: "Hybrid",
    postedAt: "2 days ago",
    salary: "$200/month",
    duration: "6 months",
    area: "Tecnología & Software",
    applicants: 12,
  },
  {
    title: "Backend Developer Intern",
    description:
      "Work on REST APIs and backend services using Node.js and PostgreSQL.",
    location: "La Paz, Bolivia",
    workMode: "Remote",
    postedAt: "5 days ago",
    salary: "$250/month",
    duration: "4 months",
    area: "Tecnología & Software",
    applicants: 8,
  },
  {
    title: "UI/UX Design Intern",
    description:
      "Help design intuitive user interfaces and improve user experiences for web applications.",
    location: "Santa Cruz, Bolivia",
    workMode: "On-site",
    postedAt: "1 week ago",
    salary: "$180/month",
    duration: "3 months",
    area: "Tecnología & Software",
    applicants: 21,
  },
  {
    title: "Mobile Developer Intern",
    description:
      "Assist in building cross-platform mobile applications with React Native and Expo.",
    location: "Cochabamba, Bolivia",
    workMode: "Remote",
    postedAt: "1 week ago",
    salary: "$220/month",
    duration: "6 months",
    area: "Tecnología & Software",
    applicants: 15,
  },
  {
    title: "Data Analyst Intern",
    description:
      "Analyze business data, create reports, and support data-driven decision making.",
    location: "La Paz, Bolivia",
    workMode: "Hybrid",
    postedAt: "2 weeks ago",
    salary: "$200/month",
    duration: "5 months",
    area: "Tecnología & Software",
    applicants: 17,
  },
];

export function PublishedInternshipsList({}: Props) {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {internships.map((internship) => (
        <PublishedInternshipCard
          key={internship.title}
          publishedInternshipData={internship}
        />
      ))}
    </div>
  );
}
