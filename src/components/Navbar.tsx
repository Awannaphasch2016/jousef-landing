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

import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";

// GigRadar-style navigation
const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Academy", href: "#academy" },
  { label: "Reviews", href: "#reviews" },
  { label: "Community", href: "#community" },
  { label: "Blog", href: "#blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          {/* Logo - GigRadar Style */}
          <NavigationMenuItem className="font-bold flex items-center gap-2">
            <a
              rel="noreferrer noopener"
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-200"
            >
              {/* Logo icon */}
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg">GigRadar.io</span>
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <span className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex lg:hidden h-5 w-5 text-foreground">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-white">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <span className="font-semibold">GigRadar.io</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-6">
                  {navLinks.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg transition-all duration-200"
                    >
                      {label}
                    </a>
                  ))}
                  <Button className="mt-4 rounded-full bg-gradient-to-r from-primary to-blue-600">
                    Get a Demo
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((route, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {route.label}
                {route.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* CTA Button - Pill Style */}
          <div className="hidden lg:flex">
            <Button
              size="lg"
              className="px-6 rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/20"
            >
              Get a Demo
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
