import { ArrowRight, Sun, Zap, Battery, ShieldCheck } from 'lucide-react';
import { LinkButton } from '../Button';
import { IMAGES } from '@/lib/data';

const trustIndicators = [
  {
    icon: Sun,
    title: 'Solar Solutions',
    sub: 'On-Grid & Off-Grid',
  },
  {
    icon: Zap,
    title: 'Complete EPC Services',
    sub: 'Design • Supply • Installation',
  },
  {
    icon: Battery,
    title: 'Power Products',
    sub: 'Solar • Batteries • Equipment',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroRooftop}
          alt="Rooftop solar panel installation"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-950/90 via-slate-950/85 to-brand-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-ocean-500/15 rounded-full blur-3xl" />

      <div className="container-x relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              Trusted Solar &amp; Power Engineering Company
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
              Powering a Smarter,
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-ocean-300 bg-clip-text text-transparent">
                More Sustainable Future
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Complete solar energy and power solutions for homes, businesses, industries and communities —
              from system design and EPC to solar products and power equipment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <LinkButton href="#quote-form" size="lg" variant="primary">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </LinkButton>
              <LinkButton href="#solutions" size="lg" variant="outline" className="!border-white/25 !text-white !bg-white/5 hover:!bg-white/10 hover:!border-white/40">
                Explore Our Solutions
              </LinkButton>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/hero.jpg"
                alt="Karnish Group team with solar panels"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 w-64 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <div className="text-2xl font-display font-extrabold text-slate-900">4500+</div>
                  <div className="text-xs text-slate-500 font-medium">Installations Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {trustIndicators.map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 hover:bg-white/12 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/30 to-ocean-500/30 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-brand-300" />
              </div>
              <div>
                <div className="text-white font-display font-semibold text-base">{title}</div>
                <div className="text-white/60 text-sm">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
