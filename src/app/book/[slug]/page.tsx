"use client";

import { books } from "@/lib/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { BookFormat } from "@/types";
import { ShoppingCart, Star, Download, Package, FileText } from "lucide-react";
import SubstackBanner from "@/components/SubstackBanner";

const FORMAT_LABELS: Record<BookFormat, { label: string; icon: React.ReactNode }> = {
  pdf: { label: "PDF", icon: <FileText size={16} /> },
  epub: { label: "EPUB", icon: <Download size={16} /> },
  physical: { label: "Physical Book", icon: <Package size={16} /> },
};

export default function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) notFound();

  const [selectedFormat, setSelectedFormat] = useState<BookFormat>(book.formats[0]);
  const addItem = useCartStore((s) => s.addItem);

  const handleBuyNow = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ book, format: selectedFormat, quantity: 1 }],
      }),
    });

    const { url, error } = await res.json();
    if (error) { alert("Checkout error: " + error); return; }
    window.location.href = url;
  };

  const avgRating =
    book.reviews.reduce((s, r) => s + r.rating, 0) / (book.reviews.length || 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Cover */}
        <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-2">
            {book.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {book.title}
          </h1>
          <p className="text-gray-500 mt-2 text-lg">by {book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < Math.round(avgRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">
              {avgRating.toFixed(1)} ({book.reviews.length} reviews)
            </span>
          </div>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            {book.description}
          </p>

          {/* Format selector */}
          <div className="mt-8">
            <p className="font-semibold text-gray-800 mb-3">Choose Format</p>
            <div className="flex flex-wrap gap-3">
              {book.formats.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedFormat === fmt
                      ? "border-red-600 bg-yellow-50 text-red-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {FORMAT_LABELS[fmt].icon}
                  {FORMAT_LABELS[fmt].label}
                </button>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-8 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-gray-900">
              ${book.price.toFixed(2)}
            </span>
          </div>
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => addItem(book, selectedFormat)}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-gray-200 hover:border-yellow-400 font-semibold text-gray-700 transition-colors"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-2xl transition-colors text-sm"
            >
              Buy Now — ${book.price.toFixed(2)}
            </button>
          </div>

          {selectedFormat !== "physical" && (
            <p className="text-xs text-gray-400 mt-3">
              ⚡ Instant delivery — download link sent to your email after purchase.
            </p>
          )}
          {selectedFormat === "physical" && (
            <p className="text-xs text-gray-400 mt-3">
              📦 Ships within 3–5 business days. Free shipping on orders over $35.
            </p>
          )}
        </div>
      </div>

      {/* Excerpt */}
      <section className="mt-20 bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Excerpt</h2>
        <blockquote className="border-l-4 border-red-500 pl-6 text-gray-600 text-lg italic leading-relaxed">
          "{book.excerpt}"
        </blockquote>
      </section>

      {/* Reviews */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reader Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {book.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">"{review.body}"</p>
              <p className="text-sm text-gray-400 mt-3 font-medium">
                — {review.author},{" "}
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Substack */}
      <div className="mt-20">
        <SubstackBanner />
      </div>
    </div>
  );
}
