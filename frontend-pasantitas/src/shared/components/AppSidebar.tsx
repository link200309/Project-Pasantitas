"use client";

//React
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  ChevronsUpDown,
  LogOut,
  User,
  Telescope,
  FileUser,
  Bookmark,
  Sun,
  Moon,
  type LucideIcon,
} from "lucide-react";
import { useUiStore, Theme } from "@/store";

//Components
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
  Switch,
  Separator,
  Button,
} from "@/shared/components";
import Adachi from "@/assets/adachi.webp";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Role } from "../types";

interface GroupOption {
  groupName: string;
  navLinks: {
    label: string;
    url: string;
    icon: LucideIcon;
  }[];
}

const optionsCandidate: GroupOption[] = [
  {
    groupName: "PASANTIAS",
    navLinks: [
      {
        icon: Telescope,
        label: "Explorar Pasantias",
        url: "/candidate/internships",
      },
      { icon: FileUser, label: "Mis Postulaciones", url: "/applications" },
      {
        icon: Bookmark,
        label: "Guardados",
        url: "/applications",
      },
    ],
  },
];
const optionsCompany: GroupOption[] = [
  {
    groupName: "PLATAFORMA",
    navLinks: [
      { icon: Telescope, label: "Mis pasantias", url: "/company/internships" },
      {
        icon: FileUser,
        label: "Ver marketplace publico",
        url: "/applications",
      },
      {
        icon: Bookmark,
        label: "Guardados",
        url: "/applications",
      },
    ],
  },
  {
    groupName: "GESTION DE LA CUENTA",
    navLinks: [
      {
        icon: Telescope,
        label: "Perfil de Empresa",
        url: "/",
      },
    ],
  },
];

interface Props {
  role: Role;
}

export function AppSidebar({ role }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useUiStore();
  const options = Role.COMPANY === role ? optionsCompany : optionsCandidate;

  const handleSignOut = async () => {
    const { data, error } = await authClient.signOut();

    if (!error) {
      router.replace("/login");
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex-row items-center gap-7">
        <Image
          src={"/logo-main.png"}
          width={155}
          height={155}
          alt="adachi_profile"
          className="rounded-full object-cover group-data-[collapsible=icon]:hidden transition-all"
        />

        <SidebarTrigger />
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        {options.map((option: GroupOption) => (
          <SidebarGroup title={option.groupName} key={option.groupName}>
            <SidebarGroupLabel>{option.groupName}</SidebarGroupLabel>
            <SidebarMenu>
              {option.navLinks.map((navLink, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={navLink.url}
                      className={cn(
                        "",
                        pathname === navLink.url &&
                          "bg-secondary border border-border",
                      )}
                    >
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
      <Separator />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-2 items-center justify-center">
            <Sun className="text-yellow-600 fill-yellow-500" />
            <Switch
              onClick={() => toggleTheme()}
              checked={theme === Theme.DARK}
            />
            <Moon className="text-blue-600 fill-blue-500" />
          </SidebarMenuItem>

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
                  <Button onClick={() => handleSignOut()} variant={"ghost"}>
                    <LogOut />
                    <span>Cerrar sesion</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
