import { SidebarProvider, AppSidebar } from "@/shared/components";

interface CandidateLayoutProps {
  children: React.ReactNode;
}

export default function CandidateLayout({ children }: CandidateLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="px-7 py-2 w-full">{children}</main>
    </SidebarProvider>
  );
}
