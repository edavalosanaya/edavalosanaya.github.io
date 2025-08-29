import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom"; // ← use react-router-dom
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./sheet"; // ← add SheetClose
import { Button } from "./button";

// Union type: internal routes (to) OR external links (href)
type NavItem =
  | { label: string; to: string; end?: boolean }
  | { label: string; href: string; external?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "RedForest Labs", href: "https://redforestai.github.io", external: true },
  // { label: "Research", to: "/research" },
  // { label: "Students", to: "/students" },
  // Example PDF in /public:
  // { label: "CV (PDF)", href: new URL("cv.pdf", import.meta.env.BASE_URL).toString(), external: true },
];

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={"to" in item ? item.to : item.href}>
            <NavigationMenuLink asChild>
              {"to" in item ? (
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent text-accent-foreground" : "text-foreground",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <nav className="mt-6 grid gap-1">
          {NAV_ITEMS.map((item) => (
            // SheetClose closes the drawer when the child is clicked
            <SheetClose asChild key={"to" in item ? item.to : item.href}>
              {"to" in item ? (
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      "w-full text-left px-3 py-2 rounded-md text-base font-medium",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent text-accent-foreground" : "text-foreground",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="w-full px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              )}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between gap-3">
          {/* Brand → send home */}
          <div className="flex items-center gap-3">
            <NavLink to="/" className="text-lg md:text-xl font-bold">
              Eduardo Davalos, Ph.D.
            </NavLink>
          </div>

          <DesktopNav />
          <div className="md:hidden flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
