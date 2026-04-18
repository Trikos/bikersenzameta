import { services } from '../data/brands.js'

const iconMap = {
  helmet: HelmetIcon,
  tape: TapeIcon,
  road: RoadIcon,
  mountain: MountainIcon,
  wrench: WrenchIcon,
  people: PeopleIcon
}

export default function Services() {
  return (
    <section id="servizi" className="section">
      <div className="mb-16 max-w-3xl">
        <div className="section-kicker">Cosa offriamo</div>
        <h2 className="section-title">PIÙ DI UN<br />NEGOZIO.</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Entra, fai domande, prova. Noi ti diamo consiglio sincero e prodotto giusto.
          Niente fretta, niente upsell forzato — solo quello che fa per te.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] || HelmetIcon
          return (
            <div
              key={s.title}
              className="group relative p-8 bg-asphalt-900 border border-asphalt-800 hover:border-racing-500 transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-racing-500/10 text-racing-500 border border-racing-500/30 mb-6 group-hover:bg-racing-500 group-hover:text-black transition-all">
                <Icon />
              </div>
              <div className="text-xs font-display tracking-widest text-zinc-500 mb-2">
                0{i + 1} / 0{services.length}
              </div>
              <h3 className="font-display text-2xl text-white mb-3 tracking-wide">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Ico({ children }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

function HelmetIcon() { return <Ico><path d="M4 14a8 8 0 1 1 16 0v3H4v-3Z"/><path d="M4 17h16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"/><path d="M8 14h5"/></Ico> }
function TapeIcon() { return <Ico><path d="M4 7h16v10H4z"/><path d="M4 11h2M8 11h2M12 11h2M16 11h2M20 11h0"/></Ico> }
function RoadIcon() { return <Ico><path d="M4 20 9 4M20 20l-5-16M12 7v2M12 13v2M12 19v1"/></Ico> }
function MountainIcon() { return <Ico><path d="m3 20 6-10 4 6 2-3 6 7H3Z"/><circle cx="16" cy="6" r="2"/></Ico> }
function WrenchIcon() { return <Ico><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></Ico> }
function PeopleIcon() { return <Ico><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></Ico> }
