import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Time each testimonial stays on screen before the next one slides in. */
const SLIDE_INTERVAL_MS = 5000;

/** Images live in /public. Add, remove or reorder entries here to change the carousel. */
const TESTIMONIALS = [
  {
    src: '/testimonial-1.jpg',
    alt: 'Testimonial from Mr. Chandan Panda, Pandia, Ganjam: "The pump works great."',
  },
  {
    src: '/testimonial-2.jpg',
    alt: 'Testimonial from Mr. Brajadhar Bishoye, Burukudi, Ganjam: "Even in a storm, they stood with me."',
  },
  {
    src: '/testimonial-3.jpg',
    alt: 'Testimonial from Mr. Ram Chandra Sahu, Chikiti, Ganjam, about his PM Surya Ghar solar plant.',
  },
  {
    src: '/testimonial-4.jpg',
    alt: 'Testimonial from K. Srinivas, Gudari, Rayagada, who installed 5 PM Surya Ghar Yojana systems.',
  },
  {
    src: '/testimonial-5.jpg',
    alt: 'Testimonial from Mr. Panda, Gudari, Rayagada: "What they committed, they delivered."',
  },
];

export default function SplashTestimonials() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const paused = hovered || keyboardFocus;

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  // Advance every 5 seconds. Depending on `index` restarts the timer whenever the slide changes
  // (including after an arrow or dot click), so each testimonial always gets its full 5 seconds.
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(next, SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section aria-labelledby="splash-testimonials" className="mx-auto mt-16 max-w-6xl">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Testimonials</p>
        <h2
          id="splash-testimonials"
          className="mt-2 font-display text-2xl font-extrabold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl"
        >
          What Our Customers Say
        </h2>
      </div>

      <div
        className="relative mt-8 aspect-[1400/744] overflow-hidden rounded-3xl bg-ocean-950/60 shadow-card ring-1 ring-white/15"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        onFocus={(e) => {
          // Only keyboard focus pauses it; clicking an arrow with a mouse must not freeze the rotation
          if (e.target.matches(':focus-visible')) setKeyboardFocus(true);
        }}
        onBlur={() => setKeyboardFocus(false)}
      >
        {TESTIMONIALS.map((t, i) => (
          <img
            key={t.src}
            src={t.src}
            alt={t.alt}
            loading="lazy"
            decoding="async"
            aria-hidden={i !== index}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950 sm:left-4 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950 sm:right-4 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Dots: show position and let people jump straight to one */}
      <div className="mt-5 flex justify-center gap-2" role="group" aria-label="Choose a testimonial">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1} of ${TESTIMONIALS.length}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
