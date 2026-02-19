import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/shared/components/ui";
import InputForm from "@/shared/components/InputForm";

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
        <InputForm label="Contraseña" placeholder="Ingresa tu contraseña" />
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
        <Button variant={"outline"} className="w-full">
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
