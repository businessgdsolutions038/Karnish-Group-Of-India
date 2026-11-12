import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  ArrowUp,
  BadgeCheck,
  Navigation,
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY, LOCATIONS, NAV_LINKS, WHATSAPP_LINK, TEL_LINK } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  const solutions = ['On-Grid Solar', 'Off-Grid Solar', 'Solar EPC', 'Power Conditioning'];
  const products = ['Solar Pumps', 'Solar Pump Controllers', 'Solar Street Lights', 'Inverter Batteries', 'E-Rickshaw Batteries'];

  const socials = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'LinkedIn' },
    { Icon: Youtube, label: 'YouTube' },
  ];

  const contactRows = [
    { Icon: Phone, text: COMPANY.phone, href: TEL_LINK, external: false },
    { Icon: MessageCircle, text: COMPANY.whatsappDisplay, href: WHATSAPP_LINK, external: true },
    { Icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}`, external: false },
  ];

  const headingClass = 'mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white';
  const linkClass = 'text-sm text-slate-400 transition-colors hover:text-brand-300';

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />

      {/* CTA band */}
      <div className="container-x relative pt-16">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/30 via-slate-900 to-ocean-900/40 p-8 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Go solar with Karnish</p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Ready to power your home or business with solar?
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Talk to our team for a free consultation and a quote tailored to your needs.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-brand-300" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Complete solar energy and power solutions — from system design and EPC to solar products,
              batteries and power equipment.
            </p>

            <ul className="mt-6 space-y-3">
              {contactRows.map(({ Icon, text, href, external }) => (
                <li key={text}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-brand-300"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-800/80 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    {text}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-800/80 text-brand-400">
                  <Clock className="h-4 w-4" />
                </span>
                {COMPANY.hours}
              </li>
            </ul>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => ['About Us', 'Projects', 'News', 'Contact'].includes(l.label)).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className={headingClass}>Solar Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#solutions" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className={headingClass}>Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item}>
                  <a href="#products" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-14 border-t border-white/10 pt-12">
          <h4 className={headingClass}>Visit Us</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.address}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.06]"
              >
                <span className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
                    <MapPin className="h-3.5 w-3.5" />
                    {loc.type}
                  </span>
                  <Navigation className="h-4 w-4 text-slate-600 transition-colors group-hover:text-brand-300" />
                </span>
                <span className="mt-3 font-display text-base font-semibold text-white">{loc.city}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-slate-400">{loc.address}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brand-400" /> Registered Vendor – PM Surya Ghar: Muft Bijli Yojana
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brand-400" /> Showrooms in Berhampur, Bhubaneswar &amp; Noida
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brand-400" /> {COMPANY.hours} support
          </span>
        </div>
      </div>

      {/* Wordmark: single word, scaled to fit on one line, fading into the bottom bar */}
      <div aria-hidden="true" className="relative select-none px-4 text-center">
        <p className="whitespace-nowrap bg-gradient-to-b from-white/20 via-white/5 to-transparent bg-clip-text font-display text-[19vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent">
          Karnish
        </p>
        <p className="-mt-1 pb-6 text-[2.4vw] font-semibold uppercase tracking-[0.6em] text-white/20 sm:text-xs sm:text-white/25">
          Group of India
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-slate-950/70">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-500">
              &copy; {year} {COMPANY.name}. All Rights Reserved.
            </p>
            <p className="mt-1 text-xs text-slate-600">This website is designed and maintained by GD Solutions.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-brand-300">
              Privacy Policy <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-brand-300">
              Terms &amp; Conditions <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-300"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
