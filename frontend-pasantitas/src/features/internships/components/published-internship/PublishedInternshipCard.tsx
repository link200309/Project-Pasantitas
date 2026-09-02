import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components";
import { PublishedInternship } from "../../types/published-internship-interface";

import { Users, ChevronRight } from "lucide-react";

interface Props {
  publishedInternshipData: PublishedInternship;
}

export function PublishedInternshipCard({ publishedInternshipData }: Props) {
  return (
    <Card className="hover:shadow-lg">
      <CardContent className="space-y-4">
        <CardTitle>{publishedInternshipData.title}</CardTitle>
        <CardDescription>{publishedInternshipData.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          <Badge variant={"light"}>{publishedInternshipData.area}</Badge>
          <Badge variant={"light"}>{publishedInternshipData.workMode}</Badge>
          <Badge variant={"light"}>{publishedInternshipData.duration}</Badge>
          <Badge variant={"light"}>{publishedInternshipData.salary}</Badge>
        </div>

        <Button
          variant={"secondary"}
          className="w-full *:flex *:items-center *:gap-1 justify-between"
        >
          <div>
            <Users />
            Ver Candidatos Postulados
          </div>

          <div>
            <span className="w-5 h-5 rounded-full bg-primary text-muted">
              5
            </span>
            <ChevronRight />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}
