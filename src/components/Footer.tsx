import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY, NAV_LINKS, WHATSAPP_LINK, TEL_LINK } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  const solutions = ['On-Grid Solar', 'Off-Grid Solar', 'Solar EPC', 'Power Conditioning'];
  const products = ['Solar Pumps', 'Solar Pump Controllers', 'Solar Street Lights', 'Inverter Batteries', 'E-Rickshaw Batteries'];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main footer */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm text-slate-400 leading-relaxed">
              Complete solar energy and power solutions — from system design and EPC to solar products,
              batteries and power equipment.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => ['About Us', 'Projects', 'Updates', 'Contact'].includes(l.label)).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-brand-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5">Solar Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-sm text-slate-400 hover:text-brand-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm text-slate-400 hover:text-brand-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={TEL_LINK} className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-300 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-300 transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-300 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {year} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-brand-300 transition-colors flex items-center gap-1">
              Privacy Policy <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-300 transition-colors flex items-center gap-1">
              Terms &amp; Conditions <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
