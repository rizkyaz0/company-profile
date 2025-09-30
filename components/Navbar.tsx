"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="p-1 rounded bg-transparent dark:bg-white dark:shadow-lg transition-all">
            <Image
              src="/logo-black.png"
              alt="Company Logo"
              width={70}
              height={70}
              priority
              className="rounded-lg"
            />
          </div>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <ul className="grid gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/web">Web Development</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/app">App Development</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/it">IT Consulting</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Dark/Light Mode Toggle */}
          <ModeToggle />
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open Menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <ModeToggle />
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <details>
                  <summary className="cursor-pointer">Services</summary>
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link href="/services/web" onClick={() => setOpen(false)}>
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/app" onClick={() => setOpen(false)}>
                        App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/it" onClick={() => setOpen(false)}>
                        IT Consulting
                      </Link>
                    </li>
                  </ul>
                </details>
                <Link href="/projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
