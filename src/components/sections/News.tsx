import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, X } from 'lucide-react';

/** Time each slide stays before the carousel advances (ms). */
const AUTOPLAY_MS = 6500;

type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: { lead?: string; text: string }[] }
  | { t: 'quote'; text: string };

interface NewsItem {
  id: string;
  tag: string;
  tagClass: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** Where the photo is cropped on the card (the full picture shows when the article opens). */
  focus: string;
  body: Block[];
}

/** Add, remove or reorder entries here to change the News section. Images live in /public/news. */
const NEWS: NewsItem[] = [
  {
    id: 'ravan-podi-2026',
    tag: 'Recognition',
    tagClass: 'bg-brand-100 text-brand-800',
    date: 'Oct 2026',
    title: 'Karnish Group of India Honoured for Its Contribution to the Solar & Green Energy Industry in South Odisha',
    subtitle: 'A Moment of Pride | Ravan Podi 2026',
    excerpt:
      'Karnish Group of India was honoured with a Smarak Patra (Memento of Recognition) by Hon’ble MLA Shri K. Anil Kumar on the occasion of Ravan Podi 2026.',
    image: '/news/news-1.jpg',
    imageAlt: 'Karnish Group of India receiving a Smarak Patra at Ravan Podi 2026',
    focus: 'center 40%',
    body: [
      {
        t: 'p',
        text: 'Karnish Group of India is proud to announce that the company has been honoured with a Smarak Patra (Memento of Recognition) by Hon’ble MLA Shri K. Anil Kumar on the occasion of Ravan Podi 2026, in recognition of its contribution to the Solar and Green Energy industry in South Odisha.',
      },
      {
        t: 'p',
        text: 'The recognition was received on behalf of Karnish Group of India by Mr. Rajesh Kumar Padhy, Lead – Technology, representing the company’s commitment to advancing renewable energy and promoting sustainable development across the region.',
      },
      {
        t: 'p',
        text: 'Karnish Group of India has consistently worked towards expanding the adoption of clean energy through its diverse range of solutions, including on-grid and off-grid solar systems, solar water pumps, solar street lighting, and other renewable energy technologies.',
      },
      {
        t: 'p',
        text: 'This honour is a testament to the dedication, technical expertise, and collective efforts of the Karnish team, along with the continued trust and support of our customers, partners, and stakeholders.',
      },
      {
        t: 'p',
        text: 'We extend our sincere gratitude to Hon’ble MLA Shri K. Anil Kumar for this recognition and encouragement.',
      },
      {
        t: 'p',
        text: 'At Karnish Group of India, we remain committed to accelerating the renewable energy movement and contributing to a sustainable and energy-independent Odisha.',
      },
      { t: 'quote', text: 'Karnish Group of India – Powering South Odisha Towards a Greener Tomorrow.' },
      { t: 'p', text: 'Team Karnish Group of India' },
    ],
  },
  {
    id: 'rei-expo-2026',
    tag: 'Events',
    tagClass: 'bg-ocean-100 text-ocean-800',
    date: '22–24 Oct 2026',
    title: 'Karnish Group of India at REI Expo 2026 – Exploring the Future of Renewable Energy',
    subtitle: 'Knowledge | Innovation | Future-Ready Energy Solutions',
    excerpt:
      'Our Noida Management Lead, Ms. Nisha Nidhi, represented Karnish at Renewable Energy India (REI) Expo 2026, exploring battery storage, next-generation solar and smart energy technologies.',
    image: '/news/news-2.jpg',
    imageAlt: 'Karnish Group of India at Renewable Energy India Expo 2026',
    focus: 'center 20%',
    body: [
      {
        t: 'p',
        text: 'Karnish Group of India continues to strengthen its commitment to renewable energy innovation and industry advancement.',
      },
      {
        t: 'p',
        text: 'Our Noida Management Lead, Ms. Nisha Nidhi, attended the Renewable Energy India (REI) Expo 2026 on 25 October 2026, representing Karnish Group of India and gaining valuable insights into the evolving renewable energy landscape.',
      },
      {
        t: 'p',
        text: 'The expo provided an excellent opportunity to explore emerging technologies, industry innovations, and the future direction of the green energy sector.',
      },
      { t: 'h', text: 'Key areas of learning and exploration' },
      {
        t: 'ul',
        items: [
          {
            lead: 'Advanced Battery Energy Storage Systems (BESS)',
            text: 'Understanding next-generation energy storage technologies and their role in improving energy reliability.',
          },
          {
            lead: 'Future of Solar Energy',
            text: 'Exploring advancements in solar panels, high-efficiency modules, and next-generation solar solutions.',
          },
          {
            lead: 'Energy Management & Smart Technologies',
            text: 'Learning about intelligent energy monitoring, integration, and optimization.',
          },
          {
            lead: 'Renewable Energy Innovations',
            text: 'Exploring emerging technologies and solutions shaping the future of clean energy.',
          },
          {
            lead: 'Industry Networking',
            text: 'Interacting with industry professionals, technology providers, manufacturers, and renewable energy experts.',
          },
        ],
      },
      {
        t: 'p',
        text: 'The knowledge and industry insights gained from this expo will contribute to Karnish Group’s vision of adopting advanced technologies, strengthening its technical capabilities, and delivering future-ready renewable energy solutions to customers.',
      },
      {
        t: 'p',
        text: 'At Karnish, we believe that continuous learning and industry engagement are essential to staying ahead in the rapidly evolving green energy sector.',
      },
      { t: 'quote', text: 'Our Vision: Learn Today. Innovate Tomorrow. Power a Greener Future.' },
      { t: 'p', text: 'Team Karnish Group of India' },
    ],
  },
  {
    id: 'bharat-re-summit-2026',
    tag: 'Events',
    tagClass: 'bg-amber-100 text-amber-800',
    date: 'Nov 2026',
    title: 'Karnish Group of India Represents Odisha at Bharat Renewable Energy Summit 2026 at Bharat Mandapam, New Delhi',
    subtitle: 'Advancing Solar Technology, Strengthening Industry Knowledge and Contributing to India’s Renewable Energy Vision',
    excerpt:
      'Mr. Rajesh Kumar Padhy, Lead – Technology, attended the national summit as an inaugural delegate and joined the Odisha Plenary Session, exploring next-generation solar and storage technology.',
    image: '/news/news-3.jpg',
    imageAlt: 'Mr. Rajesh Kumar Padhy at the Bharat Renewable Energy Summit 2026',
    focus: 'center 30%',
    body: [
      {
        t: 'p',
        text: 'Karnish Group of India, an Odisha-based solar energy company and registered vendor under the Government of India’s PM Surya Ghar: Muft Bijli Yojana, marked an important milestone through its participation in the Bharat Renewable Energy Summit 2026, held at Bharat Mandapam, New Delhi.',
      },
      {
        t: 'p',
        text: 'Representing the organization, Mr. Rajesh Kumar Padhy, Lead – Technology, Karnish Group of India, attended the prestigious national-level summit as an inaugural delegate on Day 1, in the presence of the Hon’ble Prime Minister of India.',
      },
      {
        t: 'p',
        text: 'His participation continued on Day 2, when he attended the Odisha Plenary Session as a distinguished delegate. The session provided an opportunity to engage with the Hon’ble Chief Minister of Odisha, Deputy Chief Ministers and the Hon’ble Minister of Energy, along with other representatives and stakeholders associated with the state’s renewable energy ecosystem.',
      },
      { t: 'h', text: 'Exploring the Next Generation of Solar Technology' },
      {
        t: 'p',
        text: 'The summit served as an important platform for understanding emerging developments, innovations and the future direction of India’s renewable energy sector.',
      },
      {
        t: 'p',
        text: 'One of the key areas of interest was the evolution of high-capacity solar modules, including next-generation panels exceeding 700 W, with products from manufacturers such as Avaada drawing attention.',
      },
      { t: 'p', text: 'Other significant technological developments explored during the summit included:' },
      {
        t: 'ul',
        items: [
          {
            lead: 'High-Wattage Solar Modules',
            text: 'Emerging solar panel technologies exceeding 700 W, offering new possibilities for optimising installation capacity and space utilisation.',
          },
          {
            lead: 'Non-Breakable and Advanced Durable Solar Panels',
            text: 'Innovations focused on improving panel strength, durability and resistance to physical stress.',
          },
          {
            lead: 'Flexible Solar Panels',
            text: 'A promising technology with potential applications beyond conventional rooftop installations, particularly where traditional rigid modules may not be suitable.',
          },
          {
            lead: 'Battery Energy Storage Systems (BESS)',
            text: 'Advancements in energy storage technology that can improve energy management, backup availability and the integration of renewable energy into everyday electricity consumption.',
          },
        ],
      },
      {
        t: 'p',
        text: 'These developments represent an important shift in the solar industry, moving beyond conventional electricity generation towards smarter, more flexible and storage-integrated energy solutions.',
      },
      { t: 'h', text: 'Knowledge Sharing Beyond the Summit' },
      {
        t: 'p',
        text: 'For Karnish Group of India, participation in a national platform is not merely about representation; it is about bringing valuable industry knowledge back to the field.',
      },
      {
        t: 'p',
        text: 'Mr. Rajesh Kumar Padhy intends to share the technological insights and industry developments gathered at the summit with the organisation’s technical and operational teams, as well as fellow PM Surya Ghar registered solar vendors in Odisha.',
      },
      {
        t: 'p',
        text: 'The objective is to encourage greater awareness of emerging solar technologies, improve technical understanding and help the solar installation ecosystem prepare for the next phase of renewable energy adoption.',
      },
      {
        t: 'p',
        text: 'As India’s rooftop solar sector expands, continuous learning and technological awareness will be essential for delivering better solutions to consumers.',
      },
      { t: 'h', text: 'Strengthening Odisha’s Role in India’s Renewable Energy Journey' },
      {
        t: 'p',
        text: 'The PM Surya Ghar: Muft Bijli Yojana has created significant opportunities for households, solar vendors, manufacturers and service providers across India.',
      },
      {
        t: 'p',
        text: 'As a registered vendor under this national initiative, Karnish Group of India continues to contribute to the adoption of rooftop solar energy in Odisha through solar solutions, technical implementation and customer-oriented services.',
      },
      {
        t: 'p',
        text: 'Participation in the Bharat Renewable Energy Summit reinforces the organisation’s commitment to staying connected with national developments, understanding emerging technologies and contributing to the growth of a stronger renewable energy ecosystem.',
      },
      { t: 'h', text: 'A Commitment to Learn, Innovate and Grow' },
      {
        t: 'p',
        text: 'The participation of Karnish Group of India at Bharat Mandapam represents more than an institutional presence at a national summit. It reflects the organisation’s belief that the future of the solar industry will be shaped by continuous innovation, technical knowledge, collaboration and responsible implementation.',
      },
      {
        t: 'p',
        text: 'From implementing today’s rooftop solar solutions to understanding tomorrow’s energy technologies, Karnish Group of India remains committed to contributing to India’s clean energy transition.',
      },
      { t: 'quote', text: 'Representing Odisha. Learning from the Nation. Building a Sustainable Energy Future.' },
    ],
  },
  {
    id: 'noida-branch-2026',
    tag: 'Expansion',
    tagClass: 'bg-violet-100 text-violet-800',
    date: '2 Nov 2026',
    title: 'Karnish Group of India Expands Its Presence with the Inauguration of Its Noida Branch',
    subtitle: 'Strengthening Our Reach, Building Partnerships and Bringing Solar Solutions Closer to Customers',
    excerpt:
      'Karnish Group of India inaugurated its new branch office in Noida on 2 November 2026, formally inaugurated by Mr. Ranjit Kumar Maharana, Owner of Sevak Solar Energy.',
    image: '/news/news-4.jpg',
    imageAlt: 'Inauguration of the Karnish Group of India Noida branch',
    focus: 'center 40%',
    body: [
      {
        t: 'p',
        text: 'Karnish Group of India marked an important milestone in its growth journey with the inauguration of its new branch office in Noida on 2 November 2026. The expansion reflects the organisation’s continued commitment to strengthening its presence, improving customer accessibility and supporting the growing demand for reliable solar energy solutions across India.',
      },
      {
        t: 'p',
        text: 'The new branch was formally inaugurated by Mr. Ranjit Kumar Maharana, Owner of Sevak Solar Energy. His presence made the occasion special and highlighted the importance of industry relationships and collaboration in accelerating India’s renewable energy journey.',
      },
      { t: 'h', text: 'Expanding Beyond Odisha' },
      {
        t: 'p',
        text: 'With its roots in Odisha, Karnish Group of India has been actively involved in solar energy solutions, including on-grid and off-grid solar systems, solar pumps, solar street lighting and rooftop solar installations under the PM Surya Ghar: Muft Bijli Yojana.',
      },
      {
        t: 'p',
        text: 'The Noida branch represents a step towards expanding the organisation’s operational reach and creating stronger connections with customers, partners and stakeholders in new markets.',
      },
      { t: 'h', text: 'Building a Stronger Solar Ecosystem' },
      {
        t: 'p',
        text: 'At Karnish Group of India, we believe that the growth of renewable energy depends on more than installations. It requires dependable service, technical expertise, strong partnerships and a customer-focused approach.',
      },
      {
        t: 'p',
        text: 'The new branch will support the organisation’s broader vision of making quality solar solutions more accessible while contributing to India’s clean energy transition.',
      },
      { t: 'h', text: 'A New Chapter in Our Growth Journey' },
      {
        t: 'p',
        text: 'The inauguration of the Noida branch is not just an expansion of our geographical presence; it is another step in our long-term vision to grow responsibly, strengthen partnerships and contribute meaningfully to India’s renewable energy sector.',
      },
      { t: 'quote', text: 'Karnish Group of India remains committed to powering progress through sustainable energy solutions.' },
      { t: 'p', text: 'Team Karnish Group of India' },
    ],
  },
];

function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
      {blocks.map((b, i) => {
        if (b.t === 'h')
          return (
            <h4 key={i} className="pt-2 font-display text-lg font-bold text-ocean-900">
              {b.text}
            </h4>
          );
        if (b.t === 'quote')
          return (
            <p key={i} className="rounded-xl border-l-4 border-brand-600 bg-brand-50 px-4 py-3 font-semibold italic text-brand-900">
              {b.text}
            </p>
          );
        if (b.t === 'ul')
          return (
            <ul key={i} className="space-y-3">
              {b.items.map((it) => (
                <li key={it.lead ?? it.text} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                  <span>
                    {it.lead && <strong className="font-semibold text-slate-900">{it.lead}: </strong>}
                    {it.text}
                  </span>
                </li>
              ))}
            </ul>
          );
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}

export default function News() {
  const [openId, setOpenId] = useState<string | null>(null);
  const item = NEWS.find((n) => n.id === openId) ?? null;

  // ---- Carousel ----
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const touchX = useRef<number | null>(null);
  const maxIndex = Math.max(0, NEWS.length - perView);

  // Cards per screen: 1 on phones, 2 on tablets, 3 on desktop
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // Auto-rotate; paused while hovering, while an article is open, or if the visitor prefers reduced motion
  useEffect(() => {
    if (maxIndex === 0 || hovered || item) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [maxIndex, hovered, item, index]);

  // Close with Escape and stop the page behind from scrolling while an article is open
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenId(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [item]);

  return (
    <section id="news" aria-labelledby="news-heading" className="scroll-mt-24 bg-white py-16 lg:py-24">
      {/* Keeps any old #updates link working */}
      <span id="updates" aria-hidden="true" />
      <div className="container-x mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">News</p>
          <h2 id="news-heading" className="mt-3 font-display text-4xl font-extrabold text-ocean-950 sm:text-5xl">
            Latest News
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Recognition, events and industry insights from Karnish Group of India — stay informed about our latest work
            in solar and power.
          </p>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Latest news"
        >
          <div
            className="-mx-3.5 -my-6 overflow-hidden px-0 py-6"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
            }}
          >
            <div
              className="flex items-stretch transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {NEWS.map((n, i) => {
                const visible = i >= index && i < index + perView;
                return (
                  <div
                    key={n.id}
                    className="shrink-0 px-3.5"
                    style={{ width: `${100 / perView}%` }}
                    aria-hidden={!visible}
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={n.image}
                          alt={n.imageAlt}
                          loading="lazy"
                          decoding="async"
                          style={{ objectPosition: n.focus }}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${n.tagClass}`}>
                          {n.tag}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="flex items-center gap-2 text-xs text-slate-500">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {n.date}
                        </p>
                        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ocean-950 transition-colors group-hover:text-brand-700">
                          {n.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">{n.excerpt}</p>
                        <button
                          type="button"
                          tabIndex={visible ? 0 : -1}
                          onClick={() => setOpenId(n.id)}
                          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:underline"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          <span className="sr-only"> about {n.title}</span>
                        </button>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous news"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next news"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      {item && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ocean-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpenId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="news-dialog-title"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close article"
              autoFocus
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="overflow-y-auto">
              <img src={item.image} alt={item.imageAlt} className="max-h-[50dvh] w-full bg-slate-100 object-contain" />
              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.tagClass}`}>{item.tag}</span>
                  <span className="flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.date}
                  </span>
                </div>
                <h3 id="news-dialog-title" className="mt-4 font-display text-2xl font-extrabold leading-tight text-ocean-950 sm:text-3xl">
                  {item.title}
                </h3>
                {item.subtitle && <p className="mt-2 text-base font-semibold text-brand-700">{item.subtitle}</p>}
                <div className="mt-6">
                  <ArticleBody blocks={item.body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
