import AppSidebar from "@/shared/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui";
import { Telescope, FileUser } from "lucide-react";

interface CandidateLayoutProps {
  children: React.ReactNode;
}

export default function CandidateLayout({ children }: CandidateLayoutProps) {
  const options = [
    {
      groupName: "Pasantías",
      navLinks: [
        { icon: Telescope, label: "Explorar", url: "/internships" },
        { icon: FileUser, label: "Mis postulaciones", url: "/applications" },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar options={options} />
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
}
