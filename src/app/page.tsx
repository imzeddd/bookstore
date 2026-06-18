import BookCard from "@/components/BookCard";
import SubstackBanner from "@/components/SubstackBanner";
import { books } from "@/lib/books";
import { ArrowDown, Flag } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.15) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 w-full">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
                The GridTalk
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tighter mb-6">
              THE FULL<br />
              <span className="text-red-500">STORY</span><br />
              OF SPEED.
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              75 years. 22 chapters. Every champion, every crash, every moment that defined the fastest sport on earth. Written for those who want the truth — not just the highlight reel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#books"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-none transition-colors text-sm uppercase tracking-widest"
              >
                <Flag size={16} />
                Get the Book
              </a>
              <a
                href="https://zanwer25.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white font-bold px-8 py-4 rounded-none transition-colors text-sm uppercase tracking-widest"
              >
                Free Newsletter
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <a href="#books" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </div>
      </section>

      {/* Racing stripe divider */}
      <div className="flex h-2">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Books Grid */}
          <section id="books" className="py-20">
            <div className="flex items-baseline justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-red-500" />
                  <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Now Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">The Collection</h2>
              </div>
              <span className="text-sm text-zinc-600 font-medium">{books.length} {books.length === 1 ? "title" : "titles"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>

          {/* Substack Banner */}
          <section className="pb-20">
            <SubstackBanner />
          </section>
        </div>
      </div>
    </>
  );
}
