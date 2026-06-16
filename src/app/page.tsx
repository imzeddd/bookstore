import BookCard from "@/components/BookCard";
import SubstackBanner from "@/components/SubstackBanner";
import { books } from "@/lib/books";
import { ArrowDown, Star } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-red-950 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, #ef4444 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star size={12} fill="currentColor" /> Bestselling Author
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
            Books That Rewire <br className="hidden md:block" />
            <span className="text-yellow-400">How You Think</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Practical wisdom for modern minds. Instant digital downloads. Life-changing ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#books"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base"
            >
              Browse All Books
            </a>
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base"
            >
              Free Newsletter
            </a>
          </div>
          <a href="#books" className="mt-16 text-gray-500 hover:text-gray-300 transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Books Grid */}
        <section id="books" className="py-20">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Collection</h2>
              <p className="text-gray-500 mt-2">Every book ships as PDF, EPUB, or physical copy.</p>
            </div>
            <span className="text-sm text-gray-400 font-medium">{books.length} titles</span>
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
    </>
  );
}
