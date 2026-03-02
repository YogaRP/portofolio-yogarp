import { useLogout } from "@/features/auth/hooks";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { LayoutDashboard, Users, UserCheck, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard/Overview",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Collab Request",
    url: "/admin/collab-request",
    icon: Users,
  },
  {
    name: "User and Availability",
    url: "/admin/user-availability",
    icon: UserCheck,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const logout = useLogout();

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-lg font-bold mx-auto p-4">Admin Dashboard</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-4 ">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                className="text-red-600"
                onClick={() =>
                  logout.mutate(undefined, {
                    onSuccess: () => router.replace("/auth/login-admin"),
                  })
                }
              >
                <LogOut />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
