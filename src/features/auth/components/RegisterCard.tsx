"use client";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/shared/components/ui";
import InputForm from "@/shared/components/InputForm";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function RegisterCard() {
  return (
    <Card className="min-w-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-section-title font-bold">
          Crea tu cuenta en Pasantitas
        </CardTitle>
        <CardDescription>Ingresa tus datos para registrarte</CardDescription>
      </CardHeader>

      <Tabs className="w-full space-y-3" defaultValue="candidato">
        <TabsList className="w-full mb-5" variant={"line"}>
          <TabsTrigger value="candidato">Soy candidato</TabsTrigger>
          <TabsTrigger value="empresa">Soy una empresa</TabsTrigger>
        </TabsList>

        <CardContent className="grid grid-cols-2 gap-5">
          <TabsContent
            value="candidato"
            className="grid grid-cols-2 gap-5 col-span-2"
          >
            <InputForm label="Nombres" placeholder="Ingresa tu nombre" />
            <InputForm label="Apellidos" placeholder="Ingresa tu apellido" />
          </TabsContent>

          <TabsContent value="empresa" className="space-y-5 col-span-2">
            <InputForm
              label="Nombre de tu empresa"
              placeholder="Ingresa el nombre de tu empresa"
            />
          </TabsContent>

          <InputForm
            type={"email"}
            label="Correo electrónico"
            placeholder="example@gmail.com"
            Icon={Mail}
            additionalClassName="col-span-2"
          />

          <InputForm
            type="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            Icon={Lock}
            additionalClassName="col-span-2"
          />
          <InputForm
            type="password"
            label="Repite tu contraseña"
            placeholder="Repite tu contraseña"
            Icon={Lock}
            additionalClassName="col-span-2"
          />
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-5">
          <div className="flex text-caption gap-1">
            <input type="checkbox" />
            <span>Acepto los </span>
            <Link href="#" className="text-primary underline">
              términos y condiciones
            </Link>
            <span> y </span>
            <Link href="#" className="text-primary underline">
              Politicas de privacidad
            </Link>
          </div>
          <Button className="w-full">Registrarse</Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
