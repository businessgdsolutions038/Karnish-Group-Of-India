import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Building2, Home, MessageCircle } from 'lucide-react';
import SplashEscalation from './SplashEscalation';
import { WHATSAPP_COMMERCIAL_LINK, WHATSAPP_DOMESTIC_LINK } from '@/lib/data';

/** "Proceed to website" lands on the top of the full site (an in-page hash). */
const FULL_SITE_HREF = '#home';

/** Full-screen deep-blue solar background. Swap this for any image URL or another file in /public. */
const SPLASH_BACKGROUND = '/splash-bg.jpg';

/** Pictures that fill the Domestic and Commercial boxes (files in /public). */
const DOMESTIC_IMAGE = '/domestic-rooftop.jpg';
const COMMERCIAL_IMAGE = '/commercial-solar.jpg';

interface ChoiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  whatsappHref: string;
  image: string;
  imageAlt: string;
}

function ChoiceCard({
  id,
  title,
  description,
  icon: Icon,
  iconClass,
  whatsappHref,
  image,
  imageAlt,
}: ChoiceCardProps) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate flex min-h-[240px] flex-1 overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-900 to-ocean-700 shadow-card ring-1 ring-slate-900/5 sm:min-h-[260px]"
    >
      {/* The picture fills the whole box */}
      <img
        src={image}
        alt={imageAlt}
        decoding="async"
        onError={(e) => {
          // If the photo ever fails to load, fall back to the blue panel instead of a broken-image icon
          e.currentTarget.style.display = 'none';
        }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Darkening so the white text stays readable: from the bottom on phones, from the left on larger screens */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-950/90 via-ocean-950/45 to-ocean-950/10 sm:hidden" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-ocean-950/90 via-ocean-950/50 to-ocean-950/5 sm:block" />

      <div className="flex w-full flex-col justify-end gap-5 p-6 sm:justify-center sm:p-8">
        <div className="flex items-center gap-4">
          <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-md ${iconClass}`}>
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2
              id={id}
              className="font-display text-3xl font-extrabold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">{description}</p>
          </div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with us on WhatsApp about ${title.toLowerCase()} solar`}
          className="inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl bg-[#0f7d43] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#0b6335] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950 max-sm:w-full"
        >
          <MessageCircle className="h-5 w-5" fill="currentColor" aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default function SplashScreen() {
  return (
    <div className="splash-bg relative isolate flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Full-screen deep-blue solar picture; the top is darkened so the logo stays crisp */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={SPLASH_BACKGROUND}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d24]/70 via-transparent to-[#050d24]/40" />
      </div>

      <header className="flex flex-col items-center gap-3 px-5 pt-8 text-center sm:pt-10 lg:pt-12">
        <img
          src="/logo-light.png"
          alt="Karnish Group of India"
          className="h-28 w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:h-32 lg:h-40"
        />
        <h1 className="font-display text-xl font-semibold italic text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-2xl lg:text-3xl">
          Cleaner Energy, Brighter Tomorrow
        </h1>
      </header>

      <main className="container-x flex-1 pb-10 pt-8 lg:pt-12">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          {/* Left column: Get a Quote, 1 Domestic, 2 Commercial */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-center px-2 py-3">
              {/* Display only: not a link or a button that does anything */}
              <div className="quote-glow">Get a Quote</div>
            </div>

            <ChoiceCard
              id="splash-domestic"
              title="Domestic"
              description="Solar solutions for homes"
              icon={Home}
              iconClass="bg-amber-100 text-amber-700"
              whatsappHref={WHATSAPP_DOMESTIC_LINK}
              image={DOMESTIC_IMAGE}
              imageAlt="Rooftop solar panels installed on a home"
            />
            <ChoiceCard
              id="splash-commercial"
              title="Commercial"
              description="Solar solutions for businesses and industries"
              icon={Building2}
              iconClass="bg-ocean-100 text-ocean-700"
              whatsappHref={WHATSAPP_COMMERCIAL_LINK}
              image={COMMERCIAL_IMAGE}
              imageAlt="Commercial solar installation on a business building"
            />
          </div>

          {/* Right column: 3 Escalation matrix */}
          <SplashEscalation />
        </div>

        {/* Centred under the Commercial card and the escalation matrix */}
        <div className="mt-10 flex justify-center">
          <a
            href={FULL_SITE_HREF}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-9 py-4 font-display text-lg font-bold text-white underline decoration-brand-400 decoration-2 underline-offset-4 shadow-lg backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950"
          >
            Proceed to website
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
