import { Layers, Wrench, Package, Settings, HardHat, Headphones } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';

const features = [
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description: 'From consultation and engineering to installation and commissioning.',
  },
  {
    icon: Wrench,
    title: 'Technical Expertise',
    description: 'Professional engineering and technical support for solar and power projects.',
  },
  {
    icon: Package,
    title: 'Quality Products',
    description: 'Reliable solar, battery and power equipment from trusted manufacturers.',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'Solutions designed around your location, energy requirements and application.',
  },
  {
    icon: HardHat,
    title: 'Installation Support',
    description: 'Professional installation and project execution by trained engineers.',
  },
  {
    icon: Headphones,
    title: 'Long-Term Support',
    description: 'Technical assistance and support after project completion.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Us?"
            description="We combine engineering expertise with quality products and dedicated support to deliver solar and power solutions you can rely on."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <ScrollReveal key={feature.title} delay={idx * 70}>
              <div className="group h-full p-7 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-card-hover transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-ocean-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:from-brand-500 group-hover:to-ocean-600 group-hover:border-transparent transition-all duration-400">
                  <feature.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-[15px] text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
