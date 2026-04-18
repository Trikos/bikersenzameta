import { useState } from 'react'
import { roadBrands, offroadBrands, accessoryBrands } from '../data/brands.js'

const tabs = [
  { id: 'road', label: 'Strada', color: 'racing-500', data: roadBrands },
  { id: 'offroad', label: 'Offroad & MTB', color: 'trail-500', data: offroadBrands },
  { id: 'acc', label: 'Accessori', color: 'zinc-300', data: accessoryBrands }
]

export default function Brands() {
  const [active, setActive] = useState('road')
  const current = tabs.find((t) => t.id === active)

  return (
    <section id="brands" className="relative bg-asphalt-900 border-y border-asphalt-800">
      <div className="section">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="section-kicker">I marchi</div>
            <h2 className="section-title">SOLO IL MEGLIO<br />IN NEGOZIO.</h2>
          </div>
          <p className="text-zinc-400 max-w-md leading-relaxed">
            Una selezione curata dei brand più affidabili per strada, offroad e accessori. Tutti
            disponibili in negozio, provabili e consigliati direttamente da noi.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-asphalt-800">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-3 font-display text-lg tracking-wider uppercase transition-all border-b-2 -mb-px ${
                active === t.id
                  ? `border-${t.color} text-white`
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {t.label}
              <span className="ml-2 text-xs text-zinc-500">({t.data.length})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {current.data.map((b) => (
            <div
              key={b.name}
              className="group relative bg-asphalt-950 border border-asphalt-800 hover:border-racing-500 transition-all p-6 aspect-[4/3] flex flex-col justify-center items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-racing-500/0 to-racing-500/0 group-hover:from-racing-500/10 group-hover:to-transparent transition-all" />
              <div className="relative font-display text-xl md:text-2xl text-white tracking-wide">
                {b.name}
              </div>
              <div className="relative mt-1 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {b.tag}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-zinc-500 text-center">
          Non trovi un marchio? <a href="#contatti" className="text-racing-500 hover:underline">Chiamaci</a>,
          troviamo quello che ti serve.
        </p>
      </div>
    </section>
  )
}
