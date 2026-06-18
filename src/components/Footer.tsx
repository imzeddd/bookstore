import { Flag } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-black text-lg mb-3 tracking-tight">
            <Flag size={18} className="text-red-500" />
            The <span className="text-red-500">Grid</span>Talk
          </div>
          <p className="text-sm leading-relaxed">
            Books about speed, machines, and the people who push both to the limit. Written for those who want the full story.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">All Books</Link></li>
            <li>
              <a
                href="https://zanwer25.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="https://imojo.in/fullthrottle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Buy Full Throttle F1
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/refunds" className="hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Racing stripe + copyright */}
      <div className="flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>
      <div className="px-4 py-5 text-center text-xs text-zinc-700">
        © {new Date().getFullYear()} The GridTalk. All rights reserved.
      </div>
    </footer>
  );
}
