import { contact } from '../data/brands.js'

export default function Contact() {
  return (
    <section id="contatti" className="relative bg-asphalt-900 border-y border-asphalt-800">
      <div className="section">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="section-kicker">Contatti</div>
            <h2 className="section-title">VIENI A<br />TROVARCI.</h2>
            <p className="text-zinc-300 mb-10 leading-relaxed">
              Il negozio è il cuore di tutto. Passa, parla con noi, prova. Se vuoi prenotare un appuntamento
              o chiedere se un prodotto è disponibile, chiamaci pure.
            </p>

            <div className="space-y-5">
              <InfoRow icon={<PinIcon />} label="Indirizzo">
                {contact.address}
              </InfoRow>
              <InfoRow icon={<PhoneIcon />} label="Telefono">
                <a href={contact.phoneLink} className="hover:text-racing-500">{contact.phone}</a>
              </InfoRow>
              <InfoRow icon={<MailIcon />} label="Email">
                <a href={`mailto:${contact.email}`} className="hover:text-racing-500">{contact.email}</a>
              </InfoRow>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">Orari</div>
              <div className="border border-asphalt-800 bg-asphalt-950 divide-y divide-asphalt-800">
                {contact.hours.map((h) => (
                  <div key={h.day} className="flex justify-between px-4 py-3 text-sm">
                    <span className="font-medium text-white">{h.day}</span>
                    <span className="text-zinc-400">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">Seguici</div>
              <div className="flex flex-wrap gap-3">
                <SocialBtn href={contact.social.instagramRoad} color="racing-500">IG Strada</SocialBtn>
                <SocialBtn href={contact.social.instagramOffroad} color="trail-500">IG Offroad</SocialBtn>
                <SocialBtn href={contact.social.facebookRoad}>FB Strada</SocialBtn>
                <SocialBtn href={contact.social.facebookOffroad}>FB Offroad</SocialBtn>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] border border-asphalt-800 overflow-hidden">
              <iframe
                src={contact.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa negozio"
              />
              <div className="absolute bottom-4 left-4 bg-asphalt-950/90 backdrop-blur border border-asphalt-700 px-4 py-3">
                <div className="font-display text-lg text-white">{contact.name}</div>
                <div className="text-xs text-zinc-400">{contact.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 flex items-center justify-center bg-racing-500/10 text-racing-500 border border-racing-500/30 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-zinc-500">{label}</div>
        <div className="text-white mt-1">{children}</div>
      </div>
    </div>
  )
}

function SocialBtn({ href, color = 'zinc-300', children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold border border-asphalt-700 hover:border-${color} hover:text-${color} text-zinc-300 transition-all`}
    >
      {children}
    </a>
  )
}

function PinIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
function PhoneIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg> }
function MailIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg> }
