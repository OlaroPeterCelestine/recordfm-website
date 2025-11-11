import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/shows', label: 'Shows' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold">RecordFM 97.7</Link>
          <nav>
            <ul className="flex gap-4 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} RecordFM 97.7. All rights reserved.</p>
          <p>123 Radio Street, Broadcast City, BC 12345 · (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
}
