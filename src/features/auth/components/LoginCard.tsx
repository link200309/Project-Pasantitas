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
        <InputForm label="Correo electrónico" placeholder="Ingresa tu correo" />
        <div>
          <InputForm label="Contraseña" placeholder="Ingresa tu contraseña" />
          <u className="text-caption no-underline hover:underline cursor-pointer">
            ¿Olvidaste tu contraseña?
          </u>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-5">
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>

        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="border border-gray-800 absolute inset-0"></div>
          <span className="absolute px-3 bg-card">o</span>
        </div>

        <Button variant={"outline"} className="w-full">
          <Image src="/google.svg" alt="logo" width={15} height={15} />
          Iniciar sesión con google
        </Button>

        <div className="text-caption space-x-2">
          <span>¿No tienes cuenta?</span>
          <u className="text-primary no-underline hover:underline cursor-pointer">
            Registrate gratis
          </u>
        </div>
      </CardFooter>
    </Card>
  );
}
