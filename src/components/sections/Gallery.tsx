import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';

const SLIDE_INTERVAL_MS = 4000;

const slides = [
  { src: '/gallery-1.jpg', caption: 'Staff at Work' },
  { src: '/gallery-2.jpg', caption: 'Solar Pumps' },
  { src: '/gallery-3.jpg', caption: 'Quality Check' },
  { src: '/gallery-4.jpg', caption: 'Ultratech Expo' },
  { src: '/gallery-5.jpg', caption: 'Safety First' },
  { src: '/gallery-6.jpg', caption: 'Team at Work' },
  { src: '/gallery-7.jpg', caption: 'Local Festival Celebration' },
  { src: '/gallery-8.jpg', caption: 'Awareness Programme' },
  { src: '/gallery-9.jpg', caption: 'School Awareness' },
  { src: '/gallery-10.jpg', caption: 'On-Grid Solar' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  // Auto-advance every 4 seconds. Depending on `index` restarts the timer
  // whenever a slide changes (including manual clicks), so a slide always
  // gets its full 4 seconds.
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(next, SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Our Work in Pictures"
            description="A look at our teams, installations and community programmes across the field."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className="mt-12 relative rounded-3xl overflow-hidden shadow-card-hover bg-slate-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/8]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Photo gallery"
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                aria-hidden={i !== index}
              >
                {/* Blurred copy fills the frame; full photo sits on top uncropped */}
                <img
                  src={slide.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
                />
                <img
                  src={slide.src}
                  alt={slide.caption}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="relative w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/80 to-transparent px-6 pt-16 pb-5 pointer-events-none">
              <div className="flex items-end justify-between gap-4">
                <span className="text-white font-display font-semibold text-lg">{slides[index].caption}</span>
                <span className="text-white/70 text-sm tabular-nums">
                  {index + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Scroll buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
