import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  SidebarTrigger,
} from "@/shared/components/ui";
import { ChevronsUpDown, LogOut, User, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Adachi from "@/assets/adachi.webp";
import Image from "next/image";

interface GroupOption {
  groupName: string;
  navLinks: {
    label: string;
    url: string;
    icon: LucideIcon;
  }[];
}

interface AppSidebarProps {
  options: GroupOption[];
}

export default function AppSidebar({ options = [] }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex-row justify-between">
        <span className="group-data-[collapsible=icon]:hidden">Pasantitas</span>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        {options.map((option: GroupOption) => (
          <SidebarGroup title={option.groupName} key={option.groupName}>
            <SidebarGroupLabel>{option.groupName}</SidebarGroupLabel>
            <SidebarMenu>
              {option.navLinks.map((navLink, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={navLink.url}>
                      {<navLink.icon />}
                      {navLink.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="flex justify-between">
                  <Image
                    src={Adachi}
                    width={35}
                    height={35}
                    alt="adachi_profile"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p>Adachi</p>
                    <p>adachi@gmail.com</p>
                  </div>
                  <div>
                    <ChevronsUpDown size={20} />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User />
                  <span>Mi perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/login"}>
                    <LogOut />
                    <span>Cerrar sesion</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
