import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TwoWorlds from './components/TwoWorlds.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-asphalt-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TwoWorlds />
        <Brands />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
