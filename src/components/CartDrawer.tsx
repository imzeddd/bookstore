"use client";

import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

  const handleCheckout = () => {
    window.open("https://imojo.in/fullthrottle", "_blank");
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 z-50 shadow-2xl flex flex-col transition-transform duration-300 border-l border-zinc-800 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <h2 className="text-lg font-black text-white tracking-tight">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-zinc-800 transition-colors">
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-zinc-600">
              <ShoppingBag size={48} strokeWidth={1.5} />
              <p className="font-medium">Your cart is empty</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={`${item.book.id}-${item.format}`} className="flex gap-4 items-start">
                  <div className="relative w-14 h-20 flex-shrink-0 overflow-hidden bg-zinc-800">
                    <Image src={item.book.coverImage} alt={item.book.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm leading-tight truncate">{item.book.title}</p>
                    <p className="text-xs text-red-500 uppercase font-bold mt-0.5">{item.format}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.book.id, item.format, Number(e.target.value))}
                        className="text-sm bg-zinc-800 border border-zinc-700 text-white rounded px-2 py-1"
                      >
                        {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <button onClick={() => removeItem(item.book.id, item.format)} className="text-zinc-600 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="font-black text-white text-sm">₹{item.book.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-zinc-800 bg-zinc-950">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 font-medium">Total</span>
              <span className="text-xl font-black text-white">₹{totalPrice()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 uppercase tracking-widest transition-colors text-sm"
            >
              Buy on Instamojo
            </button>
            <button onClick={clearCart} className="w-full text-zinc-600 hover:text-zinc-400 text-xs mt-3 transition-colors">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
