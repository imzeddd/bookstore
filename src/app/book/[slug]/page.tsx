"use client";

import { books } from "@/lib/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { Star, Zap, BookOpen, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import SubstackBanner from "@/components/SubstackBanner";
import { useState } from "react";

const INSTAMOJO_LINK = "https://imojo.in/fullthrottle";

const CHAPTERS = [
  { num: "01", title: "The World Starts Its Engine", sub: "Silverstone · 1950–1958" },
  { num: "02", title: "The British Invasion", sub: "Clark, Hill, Stewart · 1958–1969" },
  { num: "03", title: "Speed and Sacrifice", sub: "Death, Rindt, and the Safety War · 1968–1975" },
  { num: "04", title: "Fire on the Mountain", sub: "Lauda vs Hunt · The 1976 Championship" },
  { num: "05", title: "The People's Champion", sub: "Gilles Villeneuve · 1977–1982" },
  { num: "06", title: "The Turbo Wars", sub: "Technology Redraws the Map · 1977–1988" },
  { num: "07", title: "Legends at War", sub: "Senna vs Prost · The Greatest Rivalry in Motorsport" },
  { num: "08", title: "The Black Weekend", sub: "Imola · 1st May 1994" },
  { num: "09", title: "The Recovery Years", sub: "Hill, Villeneuve, and Häkkinen · 1994–1999" },
  { num: "10", title: "The Red Empire", sub: "Schumacher, Ferrari & Five in a Row · 2000–2004" },
  { num: "11", title: "The Alonso Years", sub: "The End of the Schumacher Era · 2005–2006" },
  { num: "12", title: "One Point", sub: "The Three-Way Title Fight of 2007" },
  { num: "13", title: "The New Giants", sub: "Hamilton (2008) and Vettel's Four Titles · 2008–2013" },
  { num: "14", title: "The Silver Era", sub: "Hamilton, Mercedes & Seven · 2014–2020" },
  { num: "15", title: "The New King", sub: "Max Verstappen · 2021–Present" },
  { num: "16", title: "The Business of Speed", sub: "Money, Power, and the Global Expansion of F1" },
  { num: "17", title: "The Science of Speed", sub: "Aerodynamics, Tyres, and the Art of Strategy" },
  { num: "18", title: "The Future", sub: "Where Formula 1 Goes Next" },
  { num: "19", title: "The Great Teams", sub: "Ferrari, McLaren, Williams, and Red Bull" },
  { num: "20", title: "The Sacred Circuits", sub: "Monaco, Monza, Spa, Silverstone, and the Nürburgring" },
  { num: "21", title: "The Engineering Legends", sub: "Chapman, Murray, Newey · The Men Who Designed the Sport" },
  { num: "22", title: "The Nearly Men", sub: "Moss, Gilles Villeneuve, Alonso, and the Price of Greatness" },
];

const WHAT_INSIDE = [
  "75 years of Formula 1 history across 22 chapters",
  "Every World Champion from Farina (1950) to Verstappen (2025)",
  "The Senna vs Prost rivalry told in full — race by race",
  "The complete story of the 1994 San Marino Grand Prix",
  "The science of aerodynamics, tyres, and race strategy",
  "The business empire F1 has become — and where it goes next",
  "All-time records, landmark races, and key statistics",
  "Written for both first-time fans and devoted followers",
];

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  const [showAllChapters, setShowAllChapters] = useState(false);
  const visibleChapters = showAllChapters ? CHAPTERS : CHAPTERS.slice(0, 8);
  const avgRating = book.reviews.reduce((s, r) => s + r.rating, 0) / (book.reviews.length || 1);

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      {/* Top stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      {/* Hero product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Cover */}
          <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 w-full overflow-hidden shadow-2xl shadow-red-900/30 bg-zinc-900">
            <Image src={book.coverImage} alt={book.title} fill className="object-cover" priority />
            {book.badge && (
              <span className="absolute top-4 left-0 bg-red-600 text-white text-xs font-black px-4 py-1.5 uppercase tracking-widest">
                {book.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">{book.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-2">
              {book.title}
            </h1>
            <p className="text-zinc-400 text-lg mb-4">by <span className="text-white font-bold">{book.author}</span></p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.round(avgRating) ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"} />
              ))}
              <span className="text-sm text-zinc-500 ml-1">{avgRating.toFixed(1)} · {book.reviews.length} reviews</span>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed border-l-2 border-red-600 pl-4 mb-8">
              {book.description}
            </p>

            {/* What's inside bullets */}
            <ul className="space-y-2 mb-8">
              {WHAT_INSIDE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-black text-white">₹{book.price}</span>
                <span className="text-zinc-500 text-sm">one-time purchase · instant download</span>
              </div>
              <a
                href={INSTAMOJO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 uppercase tracking-widest transition-colors text-sm mb-3"
              >
                <Zap size={16} />
                Buy Now on Instamojo
              </a>
              <p className="text-zinc-600 text-xs text-center">
                ⚡ Instant delivery · Secure payment · PDF format
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Racing stripe divider */}
      <div className="flex h-px bg-zinc-800 mx-4 sm:mx-8" />

      {/* Sample Excerpt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-red-500" />
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <BookOpen size={12} /> Sample from Chapter 1
          </span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 max-w-3xl">
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-6">
            Chapter 01 · The World Starts Its Engine · Silverstone, 1950
          </p>
          <blockquote className="border-l-4 border-red-600 pl-6 text-zinc-200 text-lg leading-relaxed italic mb-6">
            "{book.excerpt}"
          </blockquote>
          <p className="text-zinc-400 leading-relaxed">
            King George VI and Queen Elizabeth are in attendance. His Majesty watches from a covered stand as the cars are pushed to the grid by mechanics in overalls. The machines themselves are unlike anything on any public road: low-slung, open-wheeled, supercharged, dripping oil and purpose. Their engines crack and snarl at idle. When they rev, people cover their ears and grin.
          </p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            The dominant force this day is Alfa Romeo — three blood-red cars, three magnificent drivers. Giuseppe "Nino" Farina of Italy. Juan Manuel Fangio of Argentina. Luigi Fagioli, also Italian, a veteran of 51 who has been racing since before most of the crowd were born. The paddock calls them "the Three Fs," and they are, collectively, the fastest trio of men on the planet.
          </p>
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <a
              href={INSTAMOJO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3 uppercase tracking-widest transition-colors text-sm"
            >
              <Zap size={14} />
              Read the full book — ₹{book.price}
            </a>
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">22 Chapters · Full Story</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
            {visibleChapters.map((ch) => (
              <div key={ch.num} className="bg-zinc-900 p-5 flex items-start gap-4">
                <span className="text-red-600 font-black text-lg w-8 flex-shrink-0">{ch.num}</span>
                <div>
                  <p className="font-bold text-white text-sm">{ch.title}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{ch.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAllChapters(!showAllChapters)}
            className="mt-6 flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
          >
            {showAllChapters ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> Show All 22 Chapters</>}
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-red-500" />
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Reader Reviews</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

        {/* Final CTA */}
        <div className="border border-zinc-800 bg-zinc-900 p-8 text-center">
          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">75 years. One book.</p>
          <h3 className="text-3xl font-black text-white tracking-tighter mb-6">Ready to read the full story?</h3>
          <a
            href={INSTAMOJO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black px-10 py-4 uppercase tracking-widest transition-colors text-sm"
          >
            <Zap size={16} />
            Get Full Throttle F1 — ₹{book.price}
          </a>
          <p className="text-zinc-600 text-xs mt-4">Instant PDF delivery after purchase</p>
        </div>

        {/* Substack */}
        <div className="mt-16">
          <SubstackBanner />
        </div>
      </div>
    </div>
  );
}
