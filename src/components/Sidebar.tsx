import {
  Home,
  LayoutDashboard,
  FileText,
  CheckSquare,
  Clock,
  Users,
  Settings,
  LifeBuoy,
  Globe,
  ExternalLink,
  Search,
  ChevronsUpDown,
  UserIcon,
  SettingsIcon,
  BookOpenCheck,
  Circle,
  LogOutIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../shared/avatar";
import { Badge } from "../shared/badge";
import { Button } from "../shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shared/dropdown-menu";
import NavItem from "./NavItem";
import { useState } from "react";
// import { ThemeToggle } from "./ThemeToggle";

const users = [
  {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    avatar: "/userLogo.png",
    isActive: true,
  },
  {
    name: "Sienna Hewitt",
    email: "sienna@untitledui.com",
    avatar: "/secondUser.png",
    isActive: false,
  },
];

export default function Sidebar() {
  const [activeUser, setActiveUser] = useState(users[0]);

  const handleSwitchAccount = (user: typeof activeUser) => {
    setActiveUser(user);
  };
  return (
    <aside className="min-h-0 flex-grow w-64 bg-background border-none !border-0 !border-transparent h-screen px-4 py-6 flex flex-col justify-between overflow-y-auto lg:overflow-y-hidden">
      {/* top view */}
      <div>
        <div className="text-xl font-bold mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/fav.svg"
              alt="Logo"
              className="h-7 w-auto"
              loading="lazy"
            />
            <span className="font-bold tracking-widest uppercase text-lg text-gray-900 dark:text-white mb-0.5 ml-0.5">
              PRISM
            </span>
          </div>
          {/* <ThemeToggle /> */}
        </div>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-20 py-2 w-full rounded-md border border-border text-sm text-foreground bg-background cursor-pointer"
            disabled={false}
          />
          <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        <nav className="space-y-2">
          <NavItem
            icon={<Home className="w-4 h-4 text-[#717680]" />}
            title="Home"
            hasChildren
          />
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4 text-[#717680]" />}
            title="Dashboard"
            hasChildren
          >
            <div className="font-semibold text-sm leading-trim-none tracking-normal py-1.5 text-gray-700 dark:text-foreground">
              Analytics
            </div>
            <div className="font-semibold text-sm leading-trim-none tracking-normal py-1.5 text-gray-700 dark:text-foreground">
              Team
            </div>
          </NavItem>
          <NavItem
            icon={<FileText className="w-4 h-4 text-[#717680]" />}
            title="Projects"
            hasChildren
          />
          <NavItem
            icon={<CheckSquare className="w-4 h-4 text-[#717680]" />}
            title="Tasks"
            hasChildren
            badgeCount={8}
          />
          <NavItem
            icon={<Clock className="w-4 h-4 text-[#717680]" />}
            title="Reporting"
            hasChildren
          />
          <NavItem
            icon={<Users className="w-4 h-4 text-[#717680]" />}
            title="Users"
            hasChildren
          />
        </nav>
      </div>

      {/* bottom view */}
      <div className="space-y-2 pb-4">
        <NavItem
          icon={<Settings className="w-4 h-4 text-[#717680]" />}
          title="Settings"
        />
        <NavItem
          icon={<LifeBuoy className="w-4 h-4 text-[#717680]" />}
          title="Support"
          hasChildren
          rightIcon={
            <Badge className="ml-auto h-6" variant="outline">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Online
            </Badge>
          }
        />
        <NavItem
          icon={<Globe className="w-4 h-4 text-[#717680]" />}
          title="Open in browser"
          hasChildren
          rightIcon={<ExternalLink className="w-4 h-4 text-[#717680]" />}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <Button
              variant="outline"
              className="w-full justify-start py-6 px-2"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={activeUser.avatar} />
                <AvatarFallback>
                  {activeUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="text-sm mb-1 font-medium leading-none text-foreground dark:text-foreground">
                  {activeUser.name}
                </div>
                <div className="text-xs leading-none text-muted-foreground">
                  {activeUser.email}
                </div>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={4}
            className="w-72 gap-1 max-h-[calc(100dvh-100px)] overflow-y-auto sm:max-h-none"
          >
            <DropdownMenuLabel className="flex items-center">
              <UserIcon className="mr-2 h-4 w-4" />
              View profile
              <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                <span className="text-xs">⌘K→P</span>
              </kbd>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SettingsIcon className="mr-1 h-4 w-4" />
                Account settings
                <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                  <span className="text-xs">⌘S</span>
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpenCheck className="mr-1 h-4 w-4" />
                Documentation
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Switch account</DropdownMenuLabel>
            {users.map((user) => (
              <DropdownMenuItem
                key={user.email}
                onClick={() => handleSwitchAccount(user)}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start py-6 px-2"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <div className="text-sm mb-1 font-medium leading-none text-foreground">
                      {user.name}
                    </div>
                    <div className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                  {user.email === activeUser.email ? (
                    <Avatar className="w-4 h-4">
                      <AvatarImage src="/Checkbox.png" />
                    </Avatar>
                  ) : (
                    <Circle className="ml-auto h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuItem>
            ))}

            <DropdownMenuItem>
              <Button
                variant="outline"
                className="w-full justify-center py-4 px-2"
              >
                + Add account
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <LogOutIcon className="h-4 w-4" />
              Sign out
              <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                <span className="text-xs">
                  <span className="text-xs">⌘⬆Q</span>
                </span>
              </kbd>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
