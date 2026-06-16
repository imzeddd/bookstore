import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <BookOpen size={20} className="text-yellow-400" />
            PageForge
          </div>
          <p className="text-sm leading-relaxed">
            Books that change how you think, work, and live. Written for people
            who take ideas seriously.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Shop All Books</Link></li>
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
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/refunds" className="hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-5 text-center text-xs">
        © {new Date().getFullYear()} PageForge. All rights reserved.
      </div>
    </footer>
  );
}
