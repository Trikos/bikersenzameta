export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-asphalt-950 via-asphalt-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,90,31,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(132,204,22,0.18),transparent_40%)]" />
        <div className="absolute inset-0 noise-bg opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-asphalt-700 rounded-full bg-asphalt-900/60 backdrop-blur text-xs uppercase tracking-widest text-zinc-400 mb-8">
              <span className="w-2 h-2 bg-racing-500 rounded-full animate-pulse-soft" />
              Marostica (VI) · dal giorno zero in sella
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] text-white">
              DUE MONDI.<br />
              <span className="text-racing-500">UNA</span> <span className="text-trail-500">PASSIONE</span>.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Abbigliamento e attrezzatura per chi la moto la vive davvero.
              <span className="text-white font-semibold"> Strada, motocross, MTB:</span> i marchi giusti,
              consulenza vera, tutto provato e scelto su misura per te.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#mondo-strada" className="btn-racing">
                Mondo Strada
                <ArrowRight />
              </a>
              <a href="#mondo-offroad" className="btn-trail">
                Mondo Offroad & MTB
                <ArrowRight />
              </a>
              <a href="#contatti" className="btn-ghost">Vieni a trovarci</a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-xl">
              <Stat value="25+" label="Marchi top" />
              <Stat value="2" label="Mondi" />
              <Stat value="1" label="Passione" />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-racing-500/30 via-transparent to-trail-500/30" />
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1 relative border-b border-white/10 overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80')] bg-cover bg-center animate-slow-pan opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs uppercase tracking-widest text-racing-500 font-bold">Mondo Strada</div>
                    <div className="font-display text-2xl md:text-3xl text-white">Asfalto & Curve</div>
                  </div>
                </div>
                <div className="flex-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80')] bg-cover bg-center animate-slow-pan opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs uppercase tracking-widest text-trail-500 font-bold">Mondo Offroad</div>
                    <div className="font-display text-2xl md:text-3xl text-white">Fango & Adrenalina</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-racing-500 text-black text-xs font-bold uppercase tracking-widest">
                Since 1.0
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-2">
        Scorri
        <span className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </a>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl text-white">{value}</div>
      <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{label}</div>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
