import { Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';

const bullets = [
  'On-grid & off-grid solar solutions',
  'Rooftop solar installations',
  'Solar EPC services',
  'Solar pumping solutions',
  'Solar street lighting',
  'Batteries and power equipment',
  'Engineering and technical support',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/about-1.jpg"
                  alt="Karnish Group engineers installing a solar panel mounting structure"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              {/* Secondary smaller image */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-56 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white hidden sm:block">
                <img
                  src="/about-2.jpg"
                  alt="Karnish Solar team member at a solar panel installation"
                  className="w-full h-32 lg:h-36 object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -top-5 -left-5 bg-brand-600 text-white rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
                <div className="text-2xl font-display font-extrabold leading-none">10+</div>
                <div className="text-xs text-brand-100 mt-0.5">Years Experience</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={120}>
            <SectionHeading
              eyebrow="About Us"
              align="left"
              title="Complete Solar & Power Solutions Under One Roof"
              description="We provide end-to-end solutions ranging from solar system design and engineering to installation, solar products, batteries and power equipment — serving residential, commercial and industrial clients."
            />

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brand-700" strokeWidth={3} />
                  </span>
                  <span className="text-slate-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <LinkButton href="#solutions" variant="ghost" size="md" className="!text-brand-700 hover:!bg-brand-50 font-semibold group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
