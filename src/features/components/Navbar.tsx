"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/features/context/CartContext";
import { useTheme } from "next-themes";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch for theme icon
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Company", href: "/company" },
    { name: "Why Us", href: "/WhyUs" },
  ];

  const currentTheme = resolvedTheme || theme;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-900/90 dark:bg-slate-900/90 border-b border-gray-800/80 text-white transition-colors duration-200">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-extrabold text-lg shadow-sm group-hover:bg-indigo-500 transition-colors">
                M
              </span>
              <span>
                Maisy<span className="text-indigo-400">Store</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "text-indigo-400 bg-gray-800/60 font-semibold"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action Items (Desktop & Mobile) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors"
                aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
                type="button"
              >
                {currentTheme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-amber-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-indigo-300" />
                )}
              </button>
            )}

            {/* Shopping Cart Icon with Counter */}
            <Link
              href="/cart"
              className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-bold text-white ring-2 ring-gray-900 animate-pulse">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Log in Button (Desktop) */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
            >
              Log in &rarr;
            </Link>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              type="button"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/80 py-4 px-2 space-y-2 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-indigo-400 bg-gray-800/80 font-semibold"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-800/60 flex flex-col space-y-2 px-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}