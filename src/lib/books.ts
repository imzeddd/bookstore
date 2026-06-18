import { Book } from "@/types";

export const books: Book[] = [
  {
    id: "1",
    slug: "full-throttle-f1",
    title: "Full Throttle: The Complete Story of Formula 1",
    author: "Zed",
    price: 19.99,
    coverImage: "/covers/full-throttle-f1.jpg",
    description:
      "From Silverstone 1950 to the present day — the complete, unsparing story of Formula 1. Covering every era, every champion, and every defining moment, this is the book for anyone who wants to understand why millions are obsessed with the fastest sport on earth.",
    excerpt:
      "The date is 13 May 1950. The place is Silverstone, a former Royal Air Force airfield carved into the flat farmland of Northamptonshire, its wartime runways hastily repurposed as the world's most improbable racing circuit. The pit lane is a row of wooden shacks. Haystacks mark the apex of several corners. And yet seventy thousand people have come, pressing against rope barriers, craning their necks for a glimpse of something the world has never quite seen before: the inaugural Formula One World Championship Grand Prix.",
    formats: ["pdf", "epub", "physical"],
    reviews: [
      {
        id: "r1",
        author: "James R.",
        rating: 5,
        body: "Gripping from the very first page. Zed writes about F1 the way it deserves — with full depth and zero fluff.",
        date: "2026-01-10",
      },
      {
        id: "r2",
        author: "Sarah K.",
        rating: 5,
        body: "I knew nothing about Formula 1 before this book. Now I can't stop watching races. Absolutely brilliant.",
        date: "2026-02-22",
      },
    ],
    stripePriceId: "price_placeholder_1",
    category: "Formula 1",
    badge: "New",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
