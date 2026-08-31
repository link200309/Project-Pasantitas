import { SidebarProvider, AppSidebar } from "@/shared/components";
import { Role } from "@/shared/types";

interface CandidateLayoutProps {
  children: React.ReactNode;
}

export default function CandidateLayout({ children }: CandidateLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar role={Role.CANDIDATE} />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
