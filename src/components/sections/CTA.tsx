import { ArrowRight, Phone } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';
import { IMAGES, TEL_LINK } from '@/lib/data';

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.ctaBg}
          alt="Solar panel field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/95 via-ocean-950/90 to-brand-950/85" />
      </div>

      <div className="container-x relative z-10 py-20 lg:py-28">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.15] tracking-tight">
              Ready to Switch to Smarter Solar Power?
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Tell us about your energy requirements and our team will help you find the right solar or
              power solution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <LinkButton href="#quote-form" size="lg" variant="primary">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </LinkButton>
              <LinkButton href={TEL_LINK} size="lg" variant="outline" className="!border-white/25 !text-white !bg-white/5 hover:!bg-white/10 hover:!border-white/40">
                <Phone className="w-5 h-5" />
                Contact Us
              </LinkButton>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <span className="text-brand-300 font-medium">Residential</span>
              <span className="text-white/30">•</span>
              <span className="text-brand-300 font-medium">Commercial</span>
              <span className="text-white/30">•</span>
              <span className="text-brand-300 font-medium">Industrial</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
