"use client";

import { books } from "@/lib/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { BookFormat } from "@/types";
import { Star, Download, Package, FileText, Zap } from "lucide-react";
import SubstackBanner from "@/components/SubstackBanner";

const INSTAMOJO_LINK = "https://imojo.in/fullthrottle";

const FORMAT_LABELS: Record<BookFormat, { label: string; icon: React.ReactNode }> = {
  pdf: { label: "PDF", icon: <FileText size={16} /> },
  epub: { label: "EPUB", icon: <Download size={16} /> },
  physical: { label: "Physical Book", icon: <Package size={16} /> },
};

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) notFound();

  const [selectedFormat, setSelectedFormat] = useState<BookFormat>(book.formats[0]);

  const avgRating = book.reviews.reduce((s, r) => s + r.rating, 0) / (book.reviews.length || 1);

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Top stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Cover */}
          <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 w-full overflow-hidden shadow-2xl shadow-red-900/20 bg-zinc-900">
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
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">{book.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-2">
              {book.title}
            </h1>
            <p className="text-zinc-500 text-lg">by {book.author}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.round(avgRating) ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"} />
              ))}
              <span className="text-sm text-zinc-500 ml-1">{avgRating.toFixed(1)} ({book.reviews.length} reviews)</span>
            </div>

            <p className="mt-6 text-zinc-400 text-base leading-relaxed border-l-2 border-red-600 pl-4">
              {book.description}
            </p>

            {/* Format selector */}
            <div className="mt-8">
              <p className="font-bold text-zinc-300 mb-3 text-sm uppercase tracking-widest">Choose Format</p>
              <div className="flex flex-wrap gap-3">
                {book.formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`flex items-center gap-2 px-4 py-2.5 border text-sm font-bold uppercase tracking-wide transition-all ${
                      selectedFormat === fmt
                        ? "border-red-600 bg-red-600/10 text-red-500"
                        : "border-zinc-700 text-zinc-500 hover:border-zinc-500"
                    }`}
                  >
                    {FORMAT_LABELS[fmt].icon}
                    {FORMAT_LABELS[fmt].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="mt-8">
              <span className="text-5xl font-black text-white">₹{book.price}</span>
            </div>
            <div className="mt-5">
              <a
                href={INSTAMOJO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 uppercase tracking-widest transition-colors text-sm"
              >
                <Zap size={16} />
                Buy Now on Instamojo
              </a>
            </div>

            {selectedFormat !== "physical" && (
              <p className="text-xs text-zinc-600 mt-3">⚡ Instant delivery — download link sent to your email after purchase.</p>
            )}
            {selectedFormat === "physical" && (
              <p className="text-xs text-zinc-600 mt-3">📦 Ships within 3–5 business days.</p>
            )}
          </div>
        </div>

        {/* Excerpt */}
        <section className="mt-20 border border-zinc-800 bg-zinc-900 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Sample Excerpt</span>
          </div>
          <blockquote className="border-l-4 border-red-600 pl-6 text-zinc-300 text-lg italic leading-relaxed">
            "{book.excerpt}"
          </blockquote>
        </section>

        {/* Reviews */}
        <section className="mt-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Reader Reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {book.reviews.map((review) => (
              <div key={review.id} className="bg-zinc-900 border border-zinc-800 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"} />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed">"{review.body}"</p>
                <p className="text-sm text-zinc-600 mt-3 font-medium">
                  — {review.author},{" "}
                  {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
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
    </div>
  );
}
