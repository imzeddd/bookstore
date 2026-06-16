"use client";

import Link from "next/link";
import { ShoppingCart, BookOpen, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <BookOpen className="text-indigo-600" size={24} />
            <span>PageForge</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Shop</Link>
            <a
              href="https://zanwer25.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Newsletter
            </a>
            <Link href="/#about" className="hover:text-indigo-600 transition-colors">About</Link>
          </div>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Shop</Link>
            <a
              href="https://zanwer25.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-600"
            >
              Newsletter
            </a>
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">About</Link>
          </div>
        )}
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
