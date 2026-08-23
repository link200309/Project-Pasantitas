//React
import Image from "next/image";
import Link from "next/link";
//Componentes
import jalaLogo from "@/assets/jala-logo.png";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
  Button,
} from "@/shared/components";

import {
  Globe,
  MapPin,
  Laptop2,
  Clock,
  Backpack,
  CheckCircle2,
  GraduationCap,
  School2,
} from "lucide-react";

interface Props {
  slug: string;
}

export function InternshipDetail({ slug }: Props) {
  return (
    <Card>
      <CardHeader className="flex gap-5 items-center">
        <Image
          src={jalaLogo}
          alt="logo-jala"
          width={75}
          height={75}
          className="rounded-sm row-span-full border"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <p className="font-semibold">TechNova Labs</p>
            <Link
              href={""}
              className="flex gap-1 text-caption items-center text-blue-500 hover:underline"
            >
              <Globe size={18} />
              Sitio oficial
            </Link>
          </div>

          <CardTitle className="text-2xl font-bold">
            Pasantía en Desarrollo Frontend (React & TypeScript)
          </CardTitle>

          <div className="flex gap-3 *:flex *:gap-1 text-caption *:items-center">
            <span>
              <MapPin size={18} />
              Latinoamerica
            </span>
            <span>
              <Laptop2 size={18} />
              Remoto
            </span>
            <span>
              <Clock size={18} />6 meses
            </span>
          </div>
          <Button>Postular</Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex gap-2 text-sm items-center font-semibold">
          <School2 size={20} />
          <h6>DESCRIPCION DEL PUESTO</h6>
        </div>

        <p className="border rounded-lg p-4 text-sm font-light">
          Buscamos un/a pasante entusiasta para unirse a nuestro squad de
          producto web. Colaborarás mano a mano con desarrolladores senior y
          diseñadores en la implementación de componentes reutilizables, consumo
          de APIs y optimización del rendimiento en nuestra plataforma central.
        </p>

        <div className="flex gap-2 text-sm items-center font-semibold">
          <CheckCircle2 size={20} />
          <h6>REQUISITOS SOLICITADOS</h6>
        </div>

        <div className="space-y-2">
          <p className="flex gap-1 items-center text-caption border p-2 rounded-lg">
            <CheckCircle2 size={18} className="fill-green-500/50 text-white" />
            Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y
            CSS3.
          </p>
          <p className="flex gap-1 items-center text-caption border p-2 rounded-lg">
            <CheckCircle2 size={18} className="fill-green-500/50 text-white" />
            Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y
            CSS3.
          </p>
          <p className="flex gap-1 items-center text-caption border p-2 rounded-lg">
            <CheckCircle2 size={18} className="fill-green-500/50 text-white" />
            Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y
            CSS3.
          </p>
          <p className="flex gap-1 items-center text-caption border p-2 rounded-lg">
            <CheckCircle2 size={18} className="fill-green-500/50 text-white" />
            Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y
            CSS3.
          </p>
          <p className="flex gap-1 items-center text-caption border p-2 rounded-lg">
            <CheckCircle2 size={18} className="fill-green-500/50 text-white" />
            Conocimientos fundamentales de JavaScript moderno (ES6+), HTML5 y
            CSS3.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
