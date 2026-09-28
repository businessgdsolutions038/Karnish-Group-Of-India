import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { LinkButton } from './Button';
import { NAV_LINKS, COMPANY, TEL_LINK } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-ocean-950 text-white/80 text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={TEL_LINK} className="flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Phone className="w-3 h-3" /> {COMPANY.phone}
            </a>
            <span className="text-white/40">|</span>
            <span>{COMPANY.hours}</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span className="text-brand-300 font-medium">Residential</span>
            <span>•</span>
            <span className="text-brand-300 font-medium">Commercial</span>
            <span>•</span>
            <span className="text-brand-300 font-medium">Industrial</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="container-x flex items-center justify-between h-16 lg:h-20">
          <a href="#home" aria-label="Karnish Group of India home">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 rounded-lg hover:bg-brand-50/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LinkButton href="#quote-form" size="md" variant="primary">
              Get a Quote
            </LinkButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="p-5 border-t border-slate-100 space-y-3">
            <LinkButton href="#quote-form" size="lg" variant="primary" className="w-full" >
              Get a Quote
            </LinkButton>
            <LinkButton href={TEL_LINK} size="md" variant="outline" className="w-full">
              <Phone className="w-4 h-4" /> Call Now
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
