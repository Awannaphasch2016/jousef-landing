import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { siteConfig, navLinks } from "@/config/content";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          {/* Logo - Clean text style like Leadflow */}
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold">JM</span>
              </div>
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5 text-foreground">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-background">
                <SheetHeader>
                  <SheetTitle className="font-display italic text-xl text-primary">
                    {siteConfig.name}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {navLinks.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <a
                      href={siteConfig.cta.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {siteConfig.cta.text}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((route, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-sm tracking-wide ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Leadflow style with arrow */}
          <div className="hidden md:flex">
            <Button asChild size="sm" className="px-6 shadow-sm hover:shadow-md transition-shadow">
              <a
                href={siteConfig.cta.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                {siteConfig.cta.text}
                <span>→</span>
              </a>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
