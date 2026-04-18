import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'Chi siamo' },
  { href: '#mondi', label: 'I due mondi' },
  { href: '#brands', label: 'Marchi' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#contatti', label: 'Contatti' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-asphalt-950/90 backdrop-blur-md border-b border-asphalt-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 bg-racing-500 text-black font-display text-2xl flex items-center justify-center rounded-sm group-hover:rotate-3 transition-transform">
            B
          </span>
          <span className="font-display text-xl md:text-2xl tracking-widest">
            BIKER<span className="text-racing-500">SENZAMETA</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider font-medium text-zinc-300 hover:text-racing-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contatti" className="btn-racing text-xs py-2 px-4">Contattaci</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-asphalt-900 border-t border-asphalt-800 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base uppercase tracking-wider font-medium text-zinc-300 hover:text-racing-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
