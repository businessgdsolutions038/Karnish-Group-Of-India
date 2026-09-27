import { Droplets, Waves, Cpu, Lightbulb, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';
import { IMAGES } from '@/lib/data';

const products = [
  {
    icon: Droplets,
    name: 'Solar Water Pumps',
    description: 'Efficient solar-powered water pumping solutions for agricultural and commercial applications.',
    spec: '1 HP – 10 HP',
    image: IMAGES.productPump,
  },
  {
    icon: Waves,
    name: 'Solar Submersible Pumps',
    description: 'Reliable solar pumping solutions designed for efficient groundwater and water-supply applications.',
    spec: 'Up to 200m head',
    image: IMAGES.productSubmersible,
  },
  {
    icon: Cpu,
    name: 'Solar Pump Controllers',
    description: 'Smart controllers designed to efficiently manage solar-powered pumping systems.',
    spec: 'MPPT Technology',
    image: IMAGES.productController,
  },
  {
    icon: Lightbulb,
    name: 'Solar Street Lights',
    description: 'Energy-efficient solar street lighting solutions for roads, campuses and public spaces.',
    spec: '12W • 18W • 24W',
    image: IMAGES.productStreetLight,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Products"
            title="Solar Products Built for Real-World Applications"
            description="Reliable, field-tested solar products engineered for performance and durability across agricultural, commercial and public infrastructure applications."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ScrollReveal key={product.name} delay={idx * 80}>
              <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 border border-slate-100 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <product.icon className="w-4 h-4 text-brand-600" />
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-base text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{product.description}</p>

                  {/* Spec badge */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ocean-50 text-ocean-700 text-xs font-semibold">
                    {product.spec}
                  </div>

                  <a
                    href="#contact"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-700 hover:bg-brand-50 font-semibold text-sm transition-all group/btn"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
