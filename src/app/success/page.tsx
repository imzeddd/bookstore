import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Order Confirmed" };

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={72} className="text-emerald-500" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Order Confirmed!
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Thank you for your purchase. If you ordered a digital book, check your
          inbox — your download link is on the way. Physical orders ship within
          3–5 business days.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
