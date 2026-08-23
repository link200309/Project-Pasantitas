import AppSidebar from "@/shared/components/AppSidebar";
import { SidebarProvider } from "@/shared/components/ui";

interface CandidateLayoutProps {
  children: React.ReactNode;
}

export default function CandidateLayout({ children }: CandidateLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-7 w-full">{children}</main>
    </SidebarProvider>
  );
}
