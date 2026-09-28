import { useEffect, useState } from 'react';
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
import SplashScreen from './components/splash/SplashScreen';

/** True when the URL points at a section of the full site, e.g. /#contact or /#home. */
const hasSectionHash = () => window.location.hash.length > 1;

function FullSite() {
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

export default function App() {
  // The splash shows on a plain visit to the site. Any link that carries a section
  // (e.g. /#contact) goes straight to the full website.
  const [showSplash, setShowSplash] = useState(() => !hasSectionHash());

  // "Proceed to website" and "Get a Quote" are ordinary links to #home / #quote-form.
  useEffect(() => {
    const onHashChange = () => {
      if (hasSectionHash()) setShowSplash(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // The target section only exists once the full site has rendered, so scroll to it here.
  useEffect(() => {
    if (showSplash) return;
    const id = window.location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [showSplash]);

  return showSplash ? <SplashScreen /> : <FullSite />;
}
