export type BookFormat = "pdf" | "epub" | "physical";

export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  excerpt: string;
  formats: BookFormat[];
  reviews: Review[];
  stripePriceId: string;
  category: string;
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  body: string;
  date: string;
}

export interface CartItem {
  book: Book;
  format: BookFormat;
  quantity: number;
}
