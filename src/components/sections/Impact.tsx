import { Sun, Zap, Battery, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const stats = [
  {
    icon: Sun,
    value: '5+',
    suffix: ' MW',
    label: 'Clean Energy Solutions',
    description: 'Megawatts of solar capacity designed and installed.',
  },
  {
    icon: Zap,
    value: '500+',
    suffix: '',
    label: 'Solar Projects',
    description: 'Projects completed across residential, commercial and industrial sectors.',
  },
  {
    icon: Battery,
    value: '50+',
    suffix: '',
    label: 'Power Systems',
    description: 'Battery and power backup systems deployed.',
  },
  {
    icon: Users,
    value: '1,000+',
    suffix: '',
    label: 'Communities Served',
    description: 'Households, businesses and farms powered by our solutions.',
  },
];

export default function Impact() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-50 via-white to-ocean-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-ocean-200/30 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-brand-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-slate-900 font-display">
              Building a Cleaner Energy Future, Together
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
              Every installation brings us closer to a more sustainable future. These numbers represent
              our growing contribution to clean energy and the communities we serve.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 80}>
              <div className="group h-full p-6 lg:p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-card-hover hover:border-brand-200 transition-all duration-400 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-ocean-600 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform duration-400">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-display font-extrabold text-slate-900">
                  {stat.value}
                  <span className="text-brand-600">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-700">{stat.label}</div>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed hidden sm:block">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-center text-xs text-slate-400 italic">
            Placeholder statistics — replace with actual company data.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
