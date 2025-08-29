import React from "react";
import { Menu, Github } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Separator } from "./components/ui/separator";
import { CodeBlock } from "./components/ui/code-block"
import { InlineCode } from "./components/ui/inline-code"
import { AvatarCard } from "./components/ui/avatar-card";
import { YouTubeEmbed } from "./components/ui/youtube-embed";
import { HomePage } from "./pages/home";

// https://gist.github.com/SheldonWangRJT/8d3f44a35c8d1386a396b9b49b43c385

// If you're using Vite/CRA asset imports, replace with your logo path or remove
// import logo from "./logo.svg";

/**
 * Single-page App scaffold for the WebEyeTrack site
 * - Top fixed navbar built with shadcn/ui
 * - Smooth in-page scrolling to sections
 * - Mobile menu via <Sheet>
 * - Accessible, keyboard-friendly nav
 */

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "demo", label: "Demo" },
  { id: "publications", label: "Publications" },
  { id: "team", label: "Our Team" },
  { id: "acknowledgements", label: "Acknowledgements" },
  { id: "licensing", label: "Licensing" },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {SECTIONS.map((s) => (
          <NavigationMenuItem key={s.id}>
            <NavigationMenuLink asChild>
              <Button
                variant="ghost"
                size="sm"
                className="font-medium"
                onClick={() => scrollToId(s.id)}
              >
                {s.label}
              </Button>
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
        <div className="mt-6 space-y-2">
          {SECTIONS.map((s) => (
            <Button
              key={s.id}
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => {
                scrollToId(s.id);
                // Close the sheet by clicking the overlay programmatically
                const overlay = document.querySelector<HTMLElement>(
                  "[data-state='open'][data-radix-sheet-override]"
                );
                overlay?.click();
              }}
            >
              {s.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Section({ id, title, children }: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section
      id={id}
      className="scroll-mt-24 md:scroll-mt-28 py-6"
      aria-label={title}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <Separator className="mb-6 mt-2" />
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground w-full">
      {/* Fixed top bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex h-16 md:h-20 items-center justify-between gap-3">
            {/* Brand */}
            <div className="flex items-center gap-3">
              {/* Uncomment if you have a logo asset */}
              {/* <img src={logo} alt="WebEyeTrack logo" className="h-7 w-7" /> */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("hero");
                }}
                className="text-lg md:text-xl font-bold"
              >
                Eduardo Davalos, Ph.D.
              </a>
            </div>

            <DesktopNav />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/RedForestAI/WebEyeTrack"
                target="_blank"
                rel="noreferrer noopener"
                className="hidden sm:inline-flex"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Banner with WebEyeTrack slogan*/}
        <HomePage />
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebEyeTrack Team. All rights reserved.
        </div>
      </footer>

      {/* Back to top */}
      <div className="fixed bottom-5 right-5">
        <Button
          variant="secondary"
          onClick={() => scrollToId("hero")}
          className="shadow-lg"
        >
          Back to top
        </Button>
      </div>
    </div>
  );
}
