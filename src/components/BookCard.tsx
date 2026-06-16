"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Zap } from "lucide-react";
import { Book } from "@/types";
import { useCartStore } from "@/store/cart";
export default function BookCard({ book }: { book: Book }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleBuyNow = async () => {
    const defaultFormat = book.formats[0];
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ book, format: defaultFormat, quantity: 1 }],
      }),
    });

    const { url, error } = await res.json();
    if (error) {
      alert("Checkout error: " + error);
      return;
    }
    window.location.href = url;
  };

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
      {/* Cover */}
      <Link href={`/book/${book.slug}`} className="block relative aspect-[2/3] overflow-hidden bg-gray-100">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        {book.badge && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {book.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-5">
        <p className="text-xs text-indigo-500 font-semibold uppercase tracking-wide mb-1">
          {book.category}
        </p>
        <Link href={`/book/${book.slug}`}>
          <h3 className="font-bold text-gray-900 text-base leading-snug hover:text-indigo-600 transition-colors line-clamp-2">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mt-0.5">{book.author}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${book.price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => addItem(book, book.formats[0])}
              className="p-2.5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button
              onClick={handleBuyNow}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Zap size={15} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
