import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Book, BookFormat } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (book: Book, format: BookFormat) => void;
  removeItem: (bookId: string, format: BookFormat) => void;
  updateQuantity: (bookId: string, format: BookFormat, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (book, format) => {
        const existing = get().items.find(
          (i) => i.book.id === book.id && i.format === format
        );
        if (existing) {
          set((s) => ({
            items: s.items.map((i) =>
              i.book.id === book.id && i.format === format
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          }));
        } else {
          set((s) => ({ items: [...s.items, { book, format, quantity: 1 }] }));
        }
      },

      removeItem: (bookId, format) =>
        set((s) => ({
          items: s.items.filter(
            (i) => !(i.book.id === bookId && i.format === format)
          ),
        })),

      updateQuantity: (bookId, format, quantity) => {
        if (quantity <= 0) {
          get().removeItem(bookId, format);
          return;
        }
        set((s) => ({
          items: s.items.map((i) =>
            i.book.id === bookId && i.format === format
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.book.price * i.quantity, 0),
    }),
    { name: "bookstore-cart" }
  )
);
