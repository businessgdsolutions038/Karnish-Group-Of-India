import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCTABar from './components/MobileCTABar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Batteries from './components/sections/Batteries';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Projects from './components/sections/Projects';
import HowItWorks from './components/sections/HowItWorks';
import Updates from './components/sections/Updates';
import Impact from './components/sections/Impact';
import Gallery from './components/sections/Gallery';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import EscalationMatrix from './components/sections/EscalationMatrix';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Batteries />
        <WhyChooseUs />
        <Projects />
        <HowItWorks />
        <Gallery />
        <Updates />
        <Impact />
        <CTA />
        <Contact />
        <EscalationMatrix />
      </main>
      <Footer />
      <MobileCTABar />
      <WhatsAppFloat />
      {/* Bottom spacer for mobile CTA bar */}
      <div className="h-14 lg:hidden" />
    </div>
  );
}
