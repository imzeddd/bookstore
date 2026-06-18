import { Mail, ArrowRight } from "lucide-react";

export default function SubstackBanner() {
  return (
    <section className="relative bg-zinc-900 border border-zinc-800 px-8 py-16 md:py-20 overflow-hidden">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-red-500" />
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Mail size={12} /> Free Weekly Newsletter
          </span>
          <div className="h-px w-8 bg-red-500" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
          The Grid. Every Week.
        </h2>
        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
          Race analysis, motorsport history, and stories from the edge of speed — delivered straight to your inbox. Join <strong className="text-white">thousands of readers</strong> who take their F1 seriously.
        </p>

        <a
          href="https://zanwer25.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors text-sm"
        >
          Subscribe on Substack
          <ArrowRight size={16} />
        </a>

        <p className="text-zinc-600 text-xs mt-5">
          Free. No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
