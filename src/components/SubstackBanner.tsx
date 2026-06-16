import { Mail, ArrowRight } from "lucide-react";

export default function SubstackBanner() {
  return (
    <section className="bg-gradient-to-br from-red-600 to-yellow-500 rounded-3xl px-8 py-14 md:py-20 text-white text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Mail size={14} />
          Free Weekly Newsletter
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Ideas Worth Your Attention
        </h2>
        <p className="text-yellow-100 text-lg mb-8 leading-relaxed">
          Every week I share the best ideas from across my books, research, and
          reading — distilled into a fast, high-signal read. Join&nbsp;
          <strong className="text-white">12,000+ subscribers</strong>.
        </p>

        <a
          href="https://zanwer25.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-2xl hover:bg-yellow-50 transition-colors text-base shadow-xl"
        >
          Subscribe on Substack
          <ArrowRight size={18} />
        </a>

        <p className="text-yellow-200 text-xs mt-5">
          Free. No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
