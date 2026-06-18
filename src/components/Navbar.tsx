"use client";

import Link from "next/link";
import { ShoppingCart, Flag, Menu, X } from "lucide-react";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useCartStore } from "@/store/cart";

export default function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-white">
            <Flag className="text-red-500" size={22} />
            <span>The <span className="text-red-500">Grid</span>Talk</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Books</Link>
            <a
              href="https://zanwer25.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Newsletter
            </a>
            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          </div>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={22} className="text-zinc-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} className="text-zinc-300" /> : <Menu size={22} className="text-zinc-300" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-zinc-400">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">Books</Link>
            <a
              href="https://zanwer25.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Newsletter
            </a>
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
          </div>
        )}
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
