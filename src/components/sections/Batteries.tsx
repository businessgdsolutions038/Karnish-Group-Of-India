import { Battery, Bike, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';
import { IMAGES } from '@/lib/data';

const batteries = [
  {
    icon: Battery,
    name: 'Inverter Batteries',
    description: 'Reliable battery solutions for backup power systems and inverter applications.',
    specs: ['Tubular & Flat Plate', 'Long Life Design', 'Low Maintenance'],
    image: IMAGES.batteryInverter,
  },
  {
    icon: Bike,
    name: 'E-Rickshaw Batteries',
    description: 'Durable battery solutions designed for electric rickshaw applications.',
    specs: ['High Discharge Rate', 'Deep Cycle Performance', 'Extended Mileage'],
    image: IMAGES.batteryERickshaw,
  },
];

export default function Batteries() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Batteries & Power Equipment"
            title="Reliable Power When You Need It"
            description="Quality batteries and power equipment engineered for backup power, electric mobility and continuous energy reliability."
          />
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {batteries.map((battery, idx) => (
            <ScrollReveal key={battery.name} delay={idx * 100}>
              <article className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 border border-slate-100">
                <div className="grid sm:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-56 sm:h-full overflow-hidden min-h-[240px]">
                    <img
                      src={battery.image}
                      alt={battery.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <battery.icon className="w-5 h-5 text-brand-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-7 flex flex-col">
                    <h3 className="font-display font-bold text-xl text-slate-900">{battery.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{battery.description}</p>

                    <ul className="mt-4 space-y-2">
                      {battery.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-brand-600 hover:text-white font-semibold text-sm transition-all group/btn"
                      >
                        Enquire Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <LinkButton href="#contact" variant="secondary" size="lg">
              <Zap className="w-5 h-5" />
              Find the Right Battery
              <ArrowRight className="w-5 h-5" />
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
