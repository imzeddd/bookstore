import Link from "next/link";
import { XCircle } from "lucide-react";

export const metadata = { title: "Order Cancelled" };

export default function CancelPage() {
  return (
    <div className="bg-zinc-950 min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <XCircle size={72} className="text-zinc-700 mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-3xl font-black text-white tracking-tight mb-3">Payment Cancelled</h1>
        <p className="text-zinc-400 leading-relaxed mb-8">
          No worries — your cart is still waiting. Come back whenever you&apos;re ready.
        </p>
        <Link href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors text-sm">
          Return to Shop
        </Link>
      </div>
    </div>
  );
}
