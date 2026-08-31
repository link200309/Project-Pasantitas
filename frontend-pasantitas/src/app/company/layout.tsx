import { AppSidebar, SidebarProvider, AppNavbar } from "@/shared/components";
import { Role } from "@/shared/types";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar role={Role.COMPANY} />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
