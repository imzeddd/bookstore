import Link from "next/link";
import { XCircle } from "lucide-react";

export const metadata = { title: "Order Cancelled" };

export default function CancelPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <XCircle size={72} className="text-gray-300" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          No worries — your cart is still waiting for you. Come back whenever
          you&apos;re ready.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  );
}
