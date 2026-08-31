import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/shared/components";
import { Company } from "../types";
import Image from "next/image";
import { Edit3, PlusCircle } from "lucide-react";

type Props = {
  companyData: Omit<Company, "email">;
};

export function Banner({ companyData }: Props) {
  return (
    <Card>
      <CardContent className="flex gap-5 items-center">
        <Image
          src={companyData.image}
          alt={companyData.description ?? "Imagen"}
          width={70}
          height={70}
          className="rounded-lg w-16 h-16"
        />

        <div className="space-y-1">
          <CardTitle className="text-section-title font-bold">
            {companyData.name}
          </CardTitle>

          <p className="text-caption text-muted-foreground mt-2">
            {companyData.description?.slice(0, 110)}...
          </p>
          <p className="text-caption text-muted-foreground">
            {companyData.sector} • {companyData.ubication} • {companyData.size}
          </p>
        </div>

        <div className="flex gap-5 ml-auto">
          <Button variant={"outline"}>
            <Edit3 />
            Editar perfil
          </Button>
          <Button>
            <PlusCircle className="text-green-500" />
            Publicar Pasantia
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
