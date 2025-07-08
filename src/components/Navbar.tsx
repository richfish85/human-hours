'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // tiny icon lib

const links = [
  { href: '/', label: 'Home' },
  { href: '/stats', label: 'Stats' },
  { href: '/news', label: 'News' },
  { href: '/stories', label: 'Stories' },
  { href: '/resources', label: 'Resources' },
  { href: '/balance', label: 'Balance' },
  { href: '/manifesto', label: 'Manifesto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-surface/70 backdrop-blur dark:bg-surface-dark/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-brand">
          Human Hours
        </Link>

        {/* Burger (mobile) */}
        <button
          className="lg:hidden p-2 text-brand"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Links */}
        <ul
          className={`flex flex-col gap-6 lg:flex-row lg:static ${
            open
              ? 'absolute inset-x-0 top-full bg-surface dark:bg-surface-dark p-6'
              : 'hidden lg:flex'
          }`}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    active
                      ? 'bg-brand text-white'
                      : 'text-gray-700 hover:bg-brand/10 dark:text-gray-200'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
