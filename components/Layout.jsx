import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaHeadphones,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaChevronRight,
} from 'react-icons/fa';
import { showsLineup } from '@/data/shows';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/shows', label: 'Shows' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  const lineup = useMemo(() => showsLineup, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 flex-1 w-full">
        <header className="py-4 lg:py-8 border-b border-gray-800">
          <nav className="flex items-center justify-between">
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <span className="text-sm font-bold">RF</span>
                </div>
                <div>
                  <span className="text-lg lg:text-2xl font-bold text-white">RecordFM 97.7</span>
                  <p className="text-xs text-zinc-400 -mt-1 hidden sm:block">Your Voice, Your Station</p>
                </div>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-white hover:text-red-500 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-10 text-zinc-300">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={clsx(
                        'font-medium pb-1 transition-all duration-300 border-b-2 border-transparent hover:text-white hover:border-red-500',
                        router.pathname === link.href && 'text-red-500 border-red-500'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex flex-1 justify-end">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 professional-shadow hover-lift inline-flex items-center gap-2"
              >
                <FaPhone />
                Contact Us
              </Link>
            </div>
          </nav>

          {menuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <ul className="space-y-3 pt-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className={clsx(
                        'block text-zinc-300 font-medium py-2 border-b border-gray-800 transition-colors',
                        router.pathname === link.href ? 'text-white' : 'hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={handleNavClick}
                    className="block text-zinc-300 font-medium py-2 border-b border-gray-800 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header>

        <main className="flex-1">{children}</main>
      </div>

      <Footer />

      <button
        type="button"
        aria-label="Open shows lineup"
        onClick={() => setSheetOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 transition-transform hover-lift"
      >
        <FaHeadphones />
        Shows
      </button>

      {/* Bottom Sheet Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 transition-opacity duration-300 bottom-sheet-backdrop',
          sheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setSheetOpen(false)}
      />

      <div
        className={clsx(
          'fixed inset-x-0 bottom-0 z-50 bg-[#050505]/95 border-t border-white/10 bottom-sheet transition-transform duration-300',
          sheetOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="px-6 pt-6 pb-10 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-red-400">On RecordFM</p>
              <h2 className="text-2xl font-bold text-white mt-1">Shows Lineup</h2>
            </div>
            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Close shows lineup"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lineup.map((show) => (
              <div key={`${show.title}-${show.timeframe}`} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 hover-lift">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={show.poster}
                    alt={`${show.title} poster`}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{show.title}</h3>
                  <p className="text-sm text-red-400 font-medium">{show.timeframe}</p>
                  <p className="text-xs text-zinc-300 mt-0.5">Hosted by {show.host}</p>
                  {show.description && (
                    <p className="text-xs text-zinc-500 mt-1">{show.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <Link
              href="/schedule"
              onClick={() => setSheetOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
            >
              View full schedule
              <FaChevronRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-sm font-bold">RF</div>
              <div>
                <h3 className="text-2xl font-bold">RecordFM 97.7</h3>
                <p className="text-red-500 font-medium">Your Voice, Your Station</p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6 max-w-lg leading-relaxed">
              Broadcasting quality news, music, and community content 24/7. Connecting our community through the power of radio.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-zinc-400">
              {navLinks.map((link) => (
                <li key={`footer-${link.href}`}>
                  <Link
                    href={link.href}
                    className="hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs text-red-500">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-sm text-zinc-300">
              <div>
                <p className="text-zinc-400">Call Us</p>
                <p className="text-white font-medium">(555) 123-4567</p>
              </div>
              <div>
                <p className="text-zinc-400">Email</p>
                <p className="text-white font-medium">info@recordfm977.com</p>
              </div>
              <div>
                <p className="text-zinc-400">Visit Us</p>
                <p className="text-white font-medium">123 Radio Street<br />Broadcast City, BC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} RecordFM 97.7. All rights reserved. | FCC Licensed</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Advertise With Us', 'Careers'].map((item) => (
              <a key={item} href="#" className="hover:text-red-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
