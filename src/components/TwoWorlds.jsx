export default function TwoWorlds() {
  return (
    <section id="mondi" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="section-kicker">I due mondi</div>
          <h2 className="section-title">SCEGLI IL TUO<br />TERRENO.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <WorldCard
            id="mondo-strada"
            accent="racing"
            kicker="Mondo Strada"
            title="ASFALTO"
            subtitle="Touring · Sport · Urban"
            desc="Giacche, pantaloni e tute certificate. Caschi premium. Stivali e scarpe touring o racing. Accessori per viaggi e quotidianità."
            highlights={["REV'IT!", 'SPIDI', 'NOLAN', 'SHARK', 'SIDI']}
            bgUrl="https://images.unsplash.com/photo-1558981001-792f6c0d5068?w=1200&q=80"
            socialRoad
          />
          <WorldCard
            id="mondo-offroad"
            accent="trail"
            kicker="Senzameta Offroad"
            title="OFFROAD"
            subtitle="Motocross · Enduro · MTB"
            desc="Gear racewear completi, protezioni integrali, goggles, neck brace, scarpe flat MTB. Per chi non teme fango, salti e trail."
            highlights={['FOX', 'LEATT', 'TROY LEE DESIGNS', 'SCOTT', 'ZANDONÀ']}
            bgUrl="https://images.unsplash.com/photo-1517672651691-24622a91b550?w=1200&q=80"
          />
        </div>
      </div>
    </section>
  )
}

function WorldCard({ id, accent, kicker, title, subtitle, desc, highlights, bgUrl, socialRoad }) {
  const accentColor = accent === 'racing' ? 'racing-500' : 'trail-500'
  const btnClass = accent === 'racing' ? 'btn-racing' : 'btn-trail'

  return (
    <article
      id={id}
      className="group relative overflow-hidden bg-asphalt-900 border border-asphalt-800 hover:border-zinc-600 transition-all min-h-[560px] flex flex-col"
    >
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/70 to-transparent" />
      </div>

      <div className={`absolute top-0 left-0 w-1 h-full bg-${accentColor}`} />

      <div className="relative flex-1 p-8 md:p-12 flex flex-col">
        <div className={`text-xs uppercase tracking-[0.3em] text-${accentColor} font-bold mb-4`}>
          {kicker}
        </div>
        <h3 className="font-display text-7xl md:text-8xl text-white leading-none">{title}</h3>
        <div className="mt-2 text-zinc-400 uppercase tracking-widest text-sm">{subtitle}</div>

        <p className="mt-6 text-zinc-300 max-w-md leading-relaxed">{desc}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {highlights.map((b) => (
            <span
              key={b}
              className="px-3 py-1 text-xs font-medium border border-zinc-700 bg-asphalt-950/60 backdrop-blur text-zinc-300"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 flex flex-wrap gap-3">
          <a href="#brands" className={btnClass}>Vedi marchi</a>
          <a
            href={socialRoad ? 'https://www.instagram.com/bikersenzameta/' : 'https://www.instagram.com/senzameta_offroad/'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Instagram
          </a>
        </div>
      </div>
    </article>
  )
}
