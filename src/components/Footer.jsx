import { contact } from '../data/brands.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-asphalt-950 border-t border-asphalt-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 bg-racing-500 text-black font-display text-2xl flex items-center justify-center rounded-sm">B</span>
            <span className="font-display text-2xl tracking-widest">
              BIKER<span className="text-racing-500">SENZAMETA</span>
            </span>
          </div>
          <p className="text-zinc-400 max-w-md leading-relaxed">
            Abbigliamento e attrezzatura per chi la moto la vive. Strada, offroad e MTB,
            sotto un unico tetto a Marostica.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">Naviga</div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="#about" className="hover:text-racing-500">Chi siamo</a></li>
            <li><a href="#mondi" className="hover:text-racing-500">I due mondi</a></li>
            <li><a href="#brands" className="hover:text-racing-500">Marchi</a></li>
            <li><a href="#servizi" className="hover:text-racing-500">Servizi</a></li>
            <li><a href="#contatti" className="hover:text-racing-500">Contatti</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">Info</div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>{contact.address}</li>
            <li><a href={contact.phoneLink} className="hover:text-racing-500">{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-racing-500">{contact.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href={contact.social.instagramRoad} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-asphalt-700 hover:border-racing-500 hover:text-racing-500 transition-all" aria-label="Instagram Strada">
              <IGIcon />
            </a>
            <a href={contact.social.instagramOffroad} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-asphalt-700 hover:border-trail-500 hover:text-trail-500 transition-all" aria-label="Instagram Offroad">
              <IGIcon />
            </a>
            <a href={contact.social.facebookRoad} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-asphalt-700 hover:border-white transition-all" aria-label="Facebook">
              <FBIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-asphalt-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <div>© {year} Bikersenzameta. Tutti i diritti riservati.</div>
          <div>Marostica (VI) · P.IVA da definire</div>
        </div>
      </div>
    </footer>
  )
}

function IGIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function FBIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>
    </svg>
  )
}
