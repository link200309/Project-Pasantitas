//React
import Image from "next/image";
import { MapPin } from "lucide-react";

//Components
import jalaLogo from "@/assets/jala-logo.png";
import { Internship } from "../../types";
import { Badge, Card } from "@/shared/components";

interface InternshipCardProps {
  intership: Internship;
}

export function InternshipCard({ intership }: InternshipCardProps) {
  return (
    <Card className="grid grid-cols-[45px_1fr] mb-3 p-4 gap-3">
      <Image
        src={jalaLogo}
        alt="logo-jala"
        width={45}
        height={45}
        className="rounded-sm row-span-full border"
      />
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="font-bold">{intership.title}</h3>
          <p className="text-caption">{intership.postedAt}</p>
        </div>
        <p className="text-caption">{intership.company}</p>
        <span className="flex gap-1 items-center font-light">
          <MapPin className="text-md" size={15} />
          <p className="text-caption">{intership.location}/</p>
        </span>

        <div className="flex gap-2">
          <Badge variant={"light"}>{intership.duration}</Badge>
          <Badge variant={"light"}>{intership.salary}</Badge>
          <Badge variant={"light"}>{intership.workMode}</Badge>
          <Badge variant={"light"}>
            {intership.postulate ? "Postulado" : "Postular"}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
