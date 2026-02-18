import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main>
        <Link href={"/login"}>Log In</Link>
      </main>
    </div>
  );
}
