export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="section-kicker">Chi siamo</div>
          <h2 className="section-title">Negozio per<br />bikers veri.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            Bikersenzameta nasce dalla passione per tutto ciò che ha due ruote. Non siamo un e-commerce
            anonimo, siamo un <span className="text-white font-semibold">negozio fisico a Marostica</span>
            {' '}dove entri, provi, tocchi e parli con chi in sella ci va davvero.
          </p>
          <p>
            Selezioniamo solo i marchi che riteniamo all'altezza: quelli che usiamo noi, che consigliamo
            agli amici, quelli che — quando serve — ti proteggono davvero. Niente scorciatoie sulla
            sicurezza, niente prodotti che non crediamo.
          </p>
          <p>
            Sotto un unico tetto trovi <span className="text-racing-500 font-semibold">Mondo Strada</span>,
            dedicato ai motociclisti da asfalto, e{' '}
            <span className="text-trail-500 font-semibold">Senzameta Offroad</span>, la nostra linea per
            motocross, enduro e mountain bike. Due anime, una sola filosofia: qualità vera e consiglio
            sincero.
          </p>

          <div className="pt-6 grid sm:grid-cols-3 gap-4">
            <ValueCard title="Qualità" desc="Solo marchi che stanno dietro al prodotto." />
            <ValueCard title="Consulenza" desc="Parliamo con te, non ti piazziamo l'offerta." />
            <ValueCard title="Passione" desc="Lo facciamo perché ci piace, si vede." />
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueCard({ title, desc }) {
  return (
    <div className="border-l-2 border-racing-500 pl-4 py-1">
      <div className="font-display text-xl text-white tracking-wide">{title}</div>
      <div className="text-sm text-zinc-400 mt-1">{desc}</div>
    </div>
  )
}
