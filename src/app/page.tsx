import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main>
        <Link href={"/login"}>
          <Button variant={"link"} className="cursor-pointer">
            Iniciar sesión
          </Button>
        </Link>
      </main>
    </div>
  );
}
