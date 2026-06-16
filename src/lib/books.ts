import { Book } from "@/types";

export const books: Book[] = [
  {
    id: "1",
    slug: "the-art-of-deep-work",
    title: "The Art of Deep Work",
    author: "Alex Morgan",
    price: 19.99,
    coverImage: "/covers/deep-work.svg",
    description:
      "A transformative guide to achieving extraordinary focus in a distracted world. Learn the strategies used by history's greatest minds to produce masterful work in less time.",
    excerpt:
      "In the summer of 2010, a small team of researchers at MIT made a startling discovery. Productivity, they found, was not a function of hours worked — it was a function of depth...",
    formats: ["pdf", "epub", "physical"],
    reviews: [
      {
        id: "r1",
        author: "Sarah K.",
        rating: 5,
        body: "This book completely changed how I approach my mornings. My output doubled in three weeks.",
        date: "2024-11-02",
      },
      {
        id: "r2",
        author: "James R.",
        rating: 5,
        body: "Dense with actionable insights. I've read it twice and still find new gems.",
        date: "2024-12-15",
      },
    ],
    stripePriceId: "price_placeholder_1",
    category: "Productivity",
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "systems-of-clarity",
    title: "Systems of Clarity",
    author: "Alex Morgan",
    price: 24.99,
    coverImage: "/covers/systems.svg",
    description:
      "Unlock the hidden architecture behind every successful person's life. This book teaches you to build personal operating systems that run without willpower.",
    excerpt:
      "Willpower is a myth sold to you by a society that profits from your inconsistency. What high performers actually rely on are systems — invisible structures that make the right choice automatic...",
    formats: ["pdf", "epub"],
    reviews: [
      {
        id: "r3",
        author: "Mia T.",
        rating: 4,
        body: "Practical, well-structured, and surprisingly readable. Highly recommend the chapter on decision fatigue.",
        date: "2025-01-20",
      },
    ],
    stripePriceId: "price_placeholder_2",
    category: "Self-Development",
    badge: "New",
  },
  {
    id: "3",
    slug: "the-quiet-edge",
    title: "The Quiet Edge",
    author: "Alex Morgan",
    price: 14.99,
    coverImage: "/covers/quiet-edge.svg",
    description:
      "An introvert's playbook for thriving in an extrovert's world — at work, in relationships, and in life.",
    excerpt:
      "The loudest voice in the room is rarely the wisest. This book is for those who think before they speak, feel deeply, and are tired of being told to speak up more...",
    formats: ["pdf", "epub", "physical"],
    reviews: [
      {
        id: "r4",
        author: "Chen L.",
        rating: 5,
        body: "Finally, a book that doesn't try to fix me. Just gave me better tools to work with who I am.",
        date: "2025-03-08",
      },
    ],
    stripePriceId: "price_placeholder_3",
    category: "Psychology",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
