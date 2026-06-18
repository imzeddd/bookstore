import Link from "next/link";
import { CheckCircle2, Download, BookOpen } from "lucide-react";

export const metadata = { title: "Order Confirmed — Download Your Book" };

const DOWNLOAD_URL = "/downloads/full-throttle-f1-tgt2024.pdf";

export default function SuccessPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <div className="flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <CheckCircle2 size={72} className="text-red-500 mx-auto mb-6" strokeWidth={1.5} />

        <h1 className="text-4xl font-black tracking-tight mb-3">Order Confirmed!</h1>
        <p className="text-zinc-400 text-lg mb-10">
          Thank you for your purchase. Your book is ready to download right now.
        </p>

        <a
          href={DOWNLOAD_URL}
          download="Full-Throttle-F1-The-GridTalk.pdf"
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black px-10 py-5 uppercase tracking-widest transition-colors text-base mb-4"
        >
          <Download size={20} />
          Download Full Throttle F1 — PDF
        </a>

        <p className="text-zinc-500 text-sm mb-12">
          Click the button above to save the PDF to your device.
          <br />
          The file is 1.2 MB — downloads in seconds.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 p-6 text-left mb-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-red-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">How to read your book</span>
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li><span className="text-white font-bold">On phone:</span> Open in any PDF reader app (Adobe Acrobat, Google Drive, Apple Books)</li>
            <li><span className="text-white font-bold">On laptop:</span> Opens directly in your browser, or save and open in any PDF viewer</li>
            <li><span className="text-white font-bold">Kindle / e-reader:</span> Transfer via USB or email it to your Kindle address</li>
          </ul>
        </div>

        <Link href="/" className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors">
          Back to The GridTalk
        </Link>
      </div>

      <div className="flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>
    </div>
  );
}
