import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Order Confirmed" };

export default function SuccessPage() {
  return (
    <div className="bg-zinc-950 min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle2 size={72} className="text-red-500 mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-3xl font-black text-white tracking-tight mb-3">Order Confirmed!</h1>
        <p className="text-zinc-400 leading-relaxed mb-8">
          Thank you for your purchase. Check your inbox — your download link is on the way.
        </p>
        <Link href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors text-sm">
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
