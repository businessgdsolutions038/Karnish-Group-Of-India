import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { COMPANY, LOCATIONS, WHATSAPP_LINK, TEL_LINK } from '@/lib/data';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: COMPANY.phone, href: TEL_LINK },
  { icon: MessageCircle, label: 'WhatsApp', value: COMPANY.whatsappDisplay, href: WHATSAPP_LINK },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Discuss Your Energy Requirements"
            description="Call, WhatsApp or email us. Our team will help you find the right solar or power solution for your needs."
          />
        </ScrollReveal>

        <div className="mt-14 max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-7 lg:p-8 shadow-card border border-slate-100">
              <h3 className="font-display font-bold text-xl text-slate-900">Get in Touch</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                We're here to answer your questions and help you get started with solar.
              </p>

              <div className="mt-7 space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'WhatsApp' ? '_blank' : undefined}
                    rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-100 hover:border-brand-200 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:border-brand-600 transition-all flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
                      <div className="text-sm text-slate-800 font-semibold">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Availability</div>
                    <div className="text-sm text-slate-700 mt-0.5">{COMPANY.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Locations */}
        <ScrollReveal delay={120}>
          <div className="mt-14">
            <h3 className="font-display font-bold text-xl text-slate-900 text-center">Our Locations</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.address}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600" />
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        loc.type === 'Head Office'
                          ? 'bg-brand-600 text-white'
                          : 'bg-ocean-50 text-ocean-700 border border-ocean-100'
                      }`}
                    >
                      {loc.type}
                    </span>
                  </div>
                  <div className="mt-4 font-display font-semibold text-slate-900">{loc.city}</div>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
