"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-[#A1A1AA] hover:text-white hover:bg-white/10 transition w-full"
    >
      <span>Toggle Theme</span>
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-fit">
        <nav
          className="flex items-center gap-4 bg-[#111111] px-4 py-2 rounded-full"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-white text-black"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#A1A1AA] hover:text-white hover:bg-white/10 rounded-full bg-[#111111]"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#000000] border-[#222222] pt-12">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition",
                      isActive
                        ? "bg-white text-black"
                        : "text-[#A1A1AA] hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <MobileThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
