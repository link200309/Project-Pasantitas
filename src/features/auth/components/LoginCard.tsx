"use client";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/components/ui";
import InputForm from "@/shared/components/InputForm";
import Image from "next/image";
import Divider from "@/shared/components/Divider";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-section-title font-bold">
          Iniciar sesión
        </CardTitle>
        <CardDescription>
          Ingresa tus credenciales para continuar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <InputForm
          type={"email"}
          label="Correo electrónico"
          placeholder="example@gmail.com"
          Icon={Mail}
        />
        <div>
          <InputForm
            type="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            Icon={Lock}
          />
          <u className="text-caption no-underline hover:underline cursor-pointer">
            ¿Olvidaste tu contraseña?
          </u>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-5">
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>

        <Divider />

        <Button variant={"outline"} className="w-full">
          <Image src="/google.svg" alt="logo" width={15} height={15} />
          Iniciar sesión con google
        </Button>

        <div className="text-caption space-x-2">
          <span>¿No tienes cuenta?</span>
          <Link
            href={"/register"}
            className="text-primary no-underline hover:underline cursor-pointer"
          >
            Registrate gratis
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
