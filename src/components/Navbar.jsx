import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="text-white font-semibold tracking-tight text-lg">
            <span className="text-blue-400">/</span> dev-portfolio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md shadow-lg shadow-blue-500/20 transition-colors">
              <Download size={16} /> Resume
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md shadow-lg shadow-blue-500/20 transition-colors w-max">
                <Download size={16} /> Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
