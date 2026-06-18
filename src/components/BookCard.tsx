"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Book } from "@/types";

const INSTAMOJO_LINK = "https://imojo.in/fullthrottle";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 overflow-hidden transition-all duration-300">
      {/* Cover */}
      <Link href={`/book/${book.slug}`} className="block relative aspect-[2/3] overflow-hidden bg-zinc-800">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        {book.badge && (
          <span className="absolute top-3 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
            {book.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-5 border-t border-zinc-800">
        <p className="text-xs text-red-500 font-bold uppercase tracking-widest mb-2">
          {book.category}
        </p>
        <Link href={`/book/${book.slug}`}>
          <h3 className="font-black text-white text-base leading-snug hover:text-red-500 transition-colors line-clamp-2 tracking-tight">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-zinc-500 mt-0.5">{book.author}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-black text-white">
            ₹{book.price}
          </span>
          <a
            href={INSTAMOJO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 uppercase tracking-widest transition-colors"
          >
            <Zap size={14} />
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}
