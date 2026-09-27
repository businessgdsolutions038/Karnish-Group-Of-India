import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { Phone, ClipboardList, Ruler, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Consultation',
    description: 'Understand your energy requirements.',
  },
  {
    num: '02',
    icon: ClipboardList,
    title: 'Site Assessment',
    description: 'Evaluate your location, power consumption and installation requirements.',
  },
  {
    num: '03',
    icon: Ruler,
    title: 'Design & Installation',
    description: 'Engineer, supply and install the appropriate solar solution.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Commissioning & Support',
    description: 'Test, commission and provide ongoing technical support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-ocean-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ocean-500/15 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How It Works"
            title={<span className="text-white">Our Simple 4-Step Process</span>}
            description="From initial consultation to ongoing support — a clear, proven process to get your solar solution up and running."
          />
        </ScrollReveal>

        {/* Horizontal timeline - desktop */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10">
              <div className="h-full w-full bg-gradient-to-r from-brand-400 via-brand-300 to-ocean-400" />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <ScrollReveal key={step.num} delay={idx * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-ocean-900 border-2 border-brand-500/40 flex items-center justify-center mb-5 hover:border-brand-400 hover:bg-ocean-800 transition-all duration-400">
                      <step.icon className="w-8 h-8 text-brand-400" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-lg">{step.title}</h3>
                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical timeline - mobile */}
        <div className="mt-12 lg:hidden">
          <div className="relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-brand-300 to-ocean-400" />

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <ScrollReveal key={step.num} delay={idx * 80}>
                  <div className="relative">
                    {/* Number circle */}
                    <div className="absolute -left-12 top-0 w-12 h-12 rounded-full bg-ocean-900 border-2 border-brand-500/40 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-brand-400 font-display font-extrabold text-sm">{step.num}</span>
                        <h3 className="text-white font-display font-bold text-base">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
