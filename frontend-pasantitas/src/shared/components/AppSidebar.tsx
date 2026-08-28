"use client";

//React
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "@/shared/components/ui";
import Adachi from "@/assets/adachi.webp";
import { cn } from "@/lib/utils";

interface GroupOption {
  groupName: string;
  navLinks: {
    label: string;
    url: string;
    icon: LucideIcon;
  }[];
}

const options: GroupOption[] = [
  {
    groupName: "Pasantías",
    navLinks: [
      { icon: Telescope, label: "Explorar pasantias", url: "/internships" },
      { icon: FileUser, label: "Mis postulaciones", url: "/applications" },
      {
        icon: Bookmark,
        label: "Guardados",
        url: "/applications",
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useUiStore();

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
