// components/layout/navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Import but hide the visible button
import { CommandPalette } from "@/components/ui/command-palette";
import { ThreeDCard } from "@/components/3d-card";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);        // ← hydration-safe gate
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const { theme } = useTheme();

  // Mark mounted (prevents SSR/CSR mismatches)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll hide/show + scrolled background
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const current = window.scrollY || 0;

      // hide on scroll-down (after 100px), show on scroll-up
      if (current > lastScrollYRef.current && current > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(current > 20);
      lastScrollYRef.current = current;
    };

    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Active section (client-only)
  useEffect(() => {
    if (!mounted) return;
    setActiveSection(window.location.pathname);
  }, [mounted]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.5, duration: 0.1 },
    },
    exit: { y: -100, opacity: 0, transition: { duration: 0.1, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Only compute theme classes after mount (avoids SSR/CSR style mismatch)
  const isScrolledBgClass =
    mounted && theme === "dark"
      ? "bg-background/30 backdrop-blur-md border-[0.5px] border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
      : "bg-background/40 backdrop-blur-md border-[0.5px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]";

  const notScrolledBgClass =
    mounted && theme === "dark"
      ? "bg-background/20 backdrop-blur-sm border-[0.5px] border-white/5"
      : "bg-background/20 backdrop-blur-sm border-[0.5px] border-white/10";

  return (
    <>
      {/* keep palette but hidden */}
      <div className="sr-only">
        <CommandPalette />
      </div>

      {/* Do not render animated header until mounted to avoid hydration issues */}
      <AnimatePresence>{mounted && isVisible && (
        <motion.header
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-xl py-3 px-4",
            isScrolled ? isScrolledBgClass : notScrolledBgClass
          )}
        >
          <ThreeDCard className="w-full">
            <div className="flex items-center justify-between">
              <div className="w-[160px]">
                <Link
                  href="/"
                  className="font-display text-xl font-bold transition-colors hover:text-primary"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Ansh Agarwal
                  </motion.span>
                </Link>
              </div>

              <div className="hidden md:flex justify-center flex-1">
                <nav className="flex items-center gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 rounded-md text-sm font-medium transition-all hover:text-primary hover:bg-muted/50 variable-font",
                          activeSection === item.href
                            ? "text-primary bg-muted/60 font-variation-settings: 'wght' 600"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setActiveSection(item.href)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="w-[160px] flex justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <ThemeSwitch />
                </motion.div>
              </div>

              {/* Mobile menu */}
              <Sheet>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="md:hidden ml-4"
                >
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                </motion.div>
                <SheetContent side="right" className="p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 flex justify-between items-center">
                      <Link
                        href="/"
                        className="font-display text-2xl font-bold transition-colors hover:text-primary"
                      >
                        Ansh Agarwal
                      </Link>
                      <ThemeSwitch />
                    </div>
                    <div className="flex-1 px-6 py-8">
                      <ul className="flex flex-col gap-1">
                        {navItems.map((item, i) => (
                          <motion.li
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              className={cn(
                                "block py-3 px-4 text-lg font-medium rounded-md transition-colors",
                                activeSection === item.href
                                  ? "text-primary bg-muted/60"
                                  : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                              )}
                              onClick={() => setActiveSection(item.href)}
                            >
                              {item.title}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </ThreeDCard>
        </motion.header>
      )}</AnimatePresence>
    </>
  );
}
