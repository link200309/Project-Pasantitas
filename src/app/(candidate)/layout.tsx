import AppSidebar from "@/shared/components/AppSidebar";
import { SidebarProvider } from "@/shared/components/ui";
import { Telescope, FileUser, Bookmark } from "lucide-react";

interface CandidateLayoutProps {
  children: React.ReactNode;
}

const options = [
  {
    groupName: "Pasantías",
    navLinks: [
      { icon: Telescope, label: "Explorar", url: "/internships" },
      { icon: FileUser, label: "Mis postulaciones", url: "/applications" },
      {
        icon: Bookmark,
        label: "Guardados",
        url: "/applications",
      },
    ],
  },
];
export default function CandidateLayout({ children }: CandidateLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar options={options} />
      <main>{children}</main>
    </SidebarProvider>
  );
}
