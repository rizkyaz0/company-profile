/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
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
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
            <Image
              src="/logo-black.png"
              alt="Company Logo"
              width={70}
              height={70}
              priority
              className="rounded-lg transition-transform duration-300 group-hover:rotate-3 dark:drop-shadow-cyan-50"
            />
          </motion.div>
        </Link>

        {/* ✅ Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2 relative">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-200
                          ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                      >
                        {link.label}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}

              {/* ✅ Services Dropdown */}
              <NavigationMenuItem
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <NavigationMenuTrigger
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md
                    ${
                      pathname.startsWith("/services")
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  Services
                </NavigationMenuTrigger>

                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-4 z-50"
                    >
                      <ul className="space-y-2">
                        {[
                          {
                            href: "/services/web",
                            title: "Web Development",
                            desc: "Modern web applications",
                          },
                          {
                            href: "/services/app",
                            title: "App Development",
                            desc: "Mobile & desktop apps",
                          },
                          {
                            href: "/services/it",
                            title: "IT Consulting",
                            desc: "Strategic technology advice",
                          },
                        ].map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className={`block px-3 py-2 rounded-lg transition-all duration-200 group
                                    ${
                                      isActive
                                        ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
                                        : "hover:bg-blue-50 dark:hover:bg-blue-950/20 text-gray-900 dark:text-white"
                                    }`}
                                >
                                  <div
                                    className={`font-medium ${
                                      isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    }`}
                                  >
                                    {item.title}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.desc}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Dark/Light Mode */}
          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>

        {/* ✅ Menu Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileTap={{ scale: 0.95 }}
                aria-label="Open Menu"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.button>
            </SheetTrigger>

            {/* ✅ Tambahkan Header agar aksesibel */}
            <SheetContent
              side="right"
              className="w-80 p-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-l border-gray-200 dark:border-gray-800 data-[state=open]:animate-in data-[state=open]:slide-in-from-right"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Mobile Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* Header dalam sidebar */}
                <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                  <Image
                    src="/logo-black.png"
                    alt="Company Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Isi navigasi mobile */}
                <nav className="flex-1 p-6 space-y-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/projects", label: "Projects" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-colors
                          ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
