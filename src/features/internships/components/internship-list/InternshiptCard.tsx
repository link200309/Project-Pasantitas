import jalaLogo from "@/assets/jala-logo.png";
import Image from "next/image";

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  workMode: string;
  postedAt: string;
}

export default function InternshipCard({
  title,
  company,
  location,
  workMode,
  postedAt,
}: InternshipCardProps) {
  return (
    <article className="grid grid-cols-[35px_1fr] border-b p-3 gap-3">
      <Image
        src={jalaLogo}
        alt="logo-jala"
        width={35}
        height={35}
        className="rounded row-span-full"
      />
      <div>
        <h3 className="text-primary">{title}</h3>
        <p className="text-caption">{company}</p>
        <p className="text-caption">{location}/</p>
        <p className="text-caption">{workMode}</p>
        <p className="text-caption">{postedAt}</p>
      </div>
    </article>
  );
}
