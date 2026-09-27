import { MapPin, Zap, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { LinkButton } from '../Button';
import { IMAGES } from '@/lib/data';

const projects = [
  {
    name: 'Industrial Rooftop Solar',
    location: 'Pune, Maharashtra',
    solution: 'On-Grid Rooftop Solar',
    capacity: '500 kW',
    image: IMAGES.projectRooftop,
  },
  {
    name: 'Commercial Solar Building',
    location: 'Mumbai, Maharashtra',
    solution: 'Solar EPC',
    capacity: '200 kW',
    image: IMAGES.projectCommercial,
  },
  {
    name: 'Agricultural Solar Pumping',
    location: 'Nashik, Maharashtra',
    solution: 'Solar Water Pump',
    capacity: '5 HP System',
    image: IMAGES.projectPumping,
  },
  {
    name: 'Street Lighting Project',
    location: 'Nagpur, Maharashtra',
    solution: 'Solar Street Lights',
    capacity: '120 Lights • 24W',
    image: IMAGES.projectStreetLight,
  },
  {
    name: 'Industrial Solar Farm',
    location: 'Aurangabad, Maharashtra',
    solution: 'Off-Grid Solar System',
    capacity: '1 MW',
    image: IMAGES.projectIndustrial,
  },
  {
    name: 'Pole-Mounted Solar Array',
    location: 'Kolhapur, Maharashtra',
    solution: 'Solar Power Tracking',
    capacity: '50 kW',
    image: IMAGES.projectOffGrid,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Work"
            title="Our Projects & Installations"
            description="Real-world installations across industrial, commercial, agricultural and public infrastructure — demonstrating proven engineering and execution capability."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.name} delay={idx * 70}>
              <article className="group relative h-72 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                {/* Capacity badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-brand-500/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  {project.capacity}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center gap-1.5 text-brand-300 text-xs font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                  <h3 className="text-white font-display font-bold text-lg leading-tight">{project.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{project.solution}</p>
                </div>

                {/* Hover overlay arrow */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:translate-y-0 -translate-y-2">
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <LinkButton href="#contact" variant="outline" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
