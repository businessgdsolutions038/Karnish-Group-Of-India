import { ArrowRight, Grid3x3, BatteryCharging, Zap, HardHat } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';
import { IMAGES } from '@/lib/data';

const services = [
  {
    icon: Grid3x3,
    title: 'On-Grid Solar Systems',
    description: 'Efficient grid-connected solar systems designed to reduce electricity costs and maximize renewable energy generation.',
    image: IMAGES.serviceOnGrid,
    cta: 'Explore On-Grid Solar',
    href: '#contact',
  },
  {
    icon: BatteryCharging,
    title: 'Off-Grid Solar Systems',
    description: 'Reliable solar power systems designed for locations requiring energy independence and backup power.',
    image: IMAGES.serviceOffGrid,
    cta: 'Explore Off-Grid Solar',
    href: '#contact',
  },
  {
    icon: Zap,
    title: 'Solar Power Conditioning',
    description: 'Professional power conditioning and energy management solutions designed to improve power reliability and system performance.',
    image: IMAGES.serviceConditioning,
    cta: null,
    href: null,
  },
  {
    icon: HardHat,
    title: 'Solar EPC',
    description: 'End-to-end Engineering, Procurement and Construction services covering system design, equipment sourcing, installation and commissioning.',
    image: IMAGES.serviceEpc,
    cta: 'Explore EPC Services',
    href: '#contact',
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Solutions"
            title="Our Solar & Power Solutions"
            description="From grid-connected systems to off-grid independence and complete EPC services — we engineer the right solar solution for every application."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={service.title} delay={idx * 80}>
              <article className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 border border-slate-100">
                {/* Image header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <service.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  {/* Title on image */}
                  <h3 className="absolute bottom-4 left-5 right-5 text-white font-display font-bold text-xl">
                    {service.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-slate-600 text-[15px] leading-relaxed">{service.description}</p>

                  {service.cta && service.href && (
                    <a
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-2 text-brand-700 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
