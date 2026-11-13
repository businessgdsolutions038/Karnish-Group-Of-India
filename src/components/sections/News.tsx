import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Link2, MessageCircle, X } from 'lucide-react';

/** Time each slide stays before the carousel advances (ms). */
const AUTOPLAY_MS = 6500;

type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: { lead?: string; text: string }[] }
  | { t: 'quote'; text: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'byline'; name: string; role: string }
  | { t: 'refs'; items: { label: string; url: string }[] }
  | { t: 'note'; text: string };

interface NewsItem {
  id: string;
  tag: string;
  tagClass: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  /** Optional. Without a photo, a branded cover showing `coverText` is used instead. */
  image?: string;
  imageAlt: string;
  coverText?: string;
  /** Dense infographics: the picture in the open article links to the full-size file. */
  zoomable?: boolean;
  /** Where the photo is cropped on the card (the full picture shows when the article opens). */
  focus?: string;
  body: Block[];
}

/**
 * Add, remove or reorder entries here to change the News section. Images live in /public/news.
 * Each `id` becomes the article's own link:  https://your-site.com/#news/<id>
 * Keep ids short, lowercase, hyphenated, and never change one after the link has been shared.
 */
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
  {
    id: 'power-of-5-percent',
    tag: 'Insights',
    tagClass: 'bg-sky-100 text-sky-800',
    date: 'Nov 2026',
    title: 'The Power of 5%: Can a Small Change in Energy Consumption Make a Big Difference to India?',
    subtitle: 'Understanding lifetime fossil-fuel consumption, carbon emissions and the impact of collective action.',
    excerpt:
      'An analysis by Rajesh Kumar Padhy, Lead – Technology, on what a 5% reduction in fossil-fuel consumption could mean for one person over a lifetime, and for India as a whole.',
    image: '/news/news-5.jpg',
    imageAlt: 'Infographic: India fossil-fuel impact, actual vs 5% reduced – lifetime energy and CO₂ savings for one person and for India',
    focus: 'center 30%',
    zoomable: true,
    body: [
      { t: 'byline', name: 'Rajesh Kumar Padhy', role: 'Lead – Technology, Karnish Group of India' },
      { t: 'h', text: 'Introduction' },
      {
        t: 'p',
        text: 'Every day, we consume energy to travel, cook, work, operate industries and power our homes. Much of this energy still comes from fossil fuels such as coal, petrol, diesel and natural gas.',
      },
      {
        t: 'p',
        text: 'While fossil fuels have contributed significantly to India’s economic development, their consumption also releases carbon dioxide (CO₂) and other pollutants into the atmosphere.',
      },
      {
        t: 'p',
        text: 'We often hear about carbon emissions in millions and billions of tonnes. But have we ever considered how much energy one human being consumes throughout an average lifetime?',
      },
      { t: 'p', text: 'More importantly, what would happen if every individual reduced their fossil-fuel consumption by just 5%?' },
      { t: 'p', text: 'Let’s understand the numbers.' },
      { t: 'h', text: 'Understanding One Human Lifetime' },
      {
        t: 'p',
        text: 'For this analysis, we consider an average lifespan of 75 years and use India’s reported energy consumption and fossil-fuel mix as the basis for an illustrative estimate.',
      },
      {
        t: 'p',
        text: 'An average person’s lifetime fossil-fuel energy consumption is estimated at approximately 530,000 kWh, equivalent to 530,000 electricity units.',
      },
      {
        t: 'p',
        text: 'Similarly, using an annual per-capita CO₂ emission estimate of approximately 2.1 tonnes, the lifetime carbon footprint would be around 157.5 tonnes of CO₂, assuming the present emission rate remains constant.',
      },
      {
        t: 'p',
        text: 'These figures represent statistical estimates of energy and emissions allocated to an individual, including indirect consumption through the economy.',
      },
      { t: 'h', text: 'What If We Reduce It by Just 5%?' },
      {
        t: 'p',
        text: 'A 5% reduction may sound insignificant. However, its impact becomes interesting when translated into everyday measurements.',
      },
      {
        t: 'table',
        head: ['Parameter', 'Actual', 'After 5% reduction', 'Saving'],
        rows: [
          ['Lifetime energy', '530,000 units', '503,500 units', '26,500 units'],
          ['Lifetime CO₂', '157.5 tonnes', '149.625 tonnes', '7.875 tonnes'],
        ],
      },
      { t: 'p', text: 'What does saving 26,500 electricity units mean in practical terms?' },
      {
        t: 'p',
        text: 'It is equivalent to powering a household consuming 100 electricity units per month for approximately 22 years.',
      },
      { t: 'p', text: 'It is also equivalent to operating a 100-watt LED bulb continuously for approximately 30 years.' },
      {
        t: 'p',
        text: 'One small percentage reduction, sustained over a lifetime, can therefore represent a substantial amount of avoided energy consumption.',
      },
      { t: 'h', text: 'What If Every Indian Does the Same?' },
      {
        t: 'p',
        text: 'According to the United Nations’ 2026 population projection, India has approximately 147.66 crore people.',
      },
      { t: 'p', text: 'India’s reported CO₂ emissions in 2024 were approximately 3,154 million tonnes.' },
      {
        t: 'p',
        text: 'Now imagine a hypothetical scenario in which everyone contributes to a 5% reduction in fossil-fuel consumption and the associated emissions fall proportionally.',
      },
      { t: 'p', text: 'The potential annual impact would be:' },
      {
        t: 'table',
        head: ['Parameter', 'Estimated impact'],
        rows: [
          ['India’s annual CO₂ baseline', '3,154 million tonnes'],
          ['CO₂ after 5% reduction', '2,996.3 million tonnes'],
          ['Annual CO₂ avoided', '157.7 million tonnes'],
        ],
      },
      { t: 'p', text: 'That is approximately 432,000 tonnes of CO₂ avoided every day.' },
      {
        t: 'p',
        text: 'To put this into perspective, the annual saving is equivalent to approximately 18 days of India’s current total annual CO₂ emissions.',
      },
      {
        t: 'note',
        text: 'This is an illustrative emissions-equivalent comparison, not a prediction of an actual nationwide shutdown or a guaranteed reduction.',
      },
      { t: 'h', text: 'Why Does This Matter?' },
      {
        t: 'p',
        text: 'Fossil-fuel combustion releases more than carbon dioxide. Depending on the fuel and combustion conditions, it can also produce carbon monoxide, sulphur dioxide, nitrogen oxides and particulate matter.',
      },
      {
        t: 'p',
        text: 'These pollutants contribute to air pollution, respiratory health risks and environmental degradation, while CO₂ contributes to global warming.',
      },
      {
        t: 'p',
        text: 'Reducing unnecessary energy consumption, improving efficiency, avoiding fuel wastage and making responsible transportation choices can all contribute to lowering our environmental footprint.',
      },
      {
        t: 'p',
        text: 'The objective is not to compromise economic development or modern lifestyles. It is to achieve growth with more responsible energy consumption.',
      },
      { t: 'h', text: 'Conclusion: Small Changes, Collective Impact' },
      { t: 'p', text: 'The calculations highlight an important message.' },
      {
        t: 'p',
        text: 'A 5% reduction in fossil-fuel consumption by one individual could represent approximately 26,500 units of lifetime energy savings and 7.875 tonnes of avoided CO₂ emissions under the assumptions used here.',
      },
      {
        t: 'p',
        text: 'If similar reductions were achieved across India, the potential annual CO₂ saving could reach approximately 157.7 million tonnes.',
      },
      {
        t: 'p',
        text: 'Environmental responsibility is not exclusively the responsibility of governments or industries. It begins with individual choices and becomes powerful through collective participation.',
      },
      {
        t: 'p',
        text: 'If just 5% can make this much difference, imagine what a collective 10%, 20% or greater improvement could mean for our future.',
      },
      {
        t: 'quote',
        text: 'A cleaner and healthier future does not necessarily begin with one giant change. Sometimes, it begins with a small change adopted by millions.',
      },
      { t: 'h', text: 'About the Author' },
      { t: 'p', text: 'Rajesh Kumar Padhy, Lead – Technology, Karnish Group of India.' },
      {
        t: 'note',
        text: 'This article presents an independent analytical perspective on fossil-fuel consumption, energy efficiency and the potential impact of collective carbon reduction.',
      },
      { t: 'h', text: 'Research References' },
      {
        t: 'refs',
        items: [
          {
            label: 'US Energy Information Administration (EIA) – India energy consumption and energy profile',
            url: 'https://www.eia.gov/international/overview/country/IND',
          },
          { label: 'Ministry of Statistics and Programme Implementation (MoSPI) – Energy Statistics India', url: 'https://www.mospi.gov.in/' },
          {
            label: 'PRS Legislative Research – India’s CO₂ emissions and fossil-fuel energy share',
            url: 'https://prsindia.org/budgets/parliament/demand-for-grants-2026-27-analysis-environment-forests-and-climate-change',
          },
          { label: 'Our World in Data – India’s CO₂ emissions profile', url: 'https://ourworldindata.org/profile/co2/india' },
          { label: 'United Nations – World Population Prospects 2024', url: 'https://population.un.org/wpp/' },
          { label: 'Global Carbon Project – Global Carbon Budget and emissions research', url: 'https://globalcarbonbudget.org/' },
        ],
      },
      { t: 'h', text: 'Methodology and Disclaimer' },
      {
        t: 'note',
        text: 'This analysis assumes a 75-year lifespan. Lifetime energy consumption is an illustrative estimate derived from national per-capita energy consumption and the fossil-fuel share. CO₂ calculations use approximately 2.1 tonnes per capita annually. The national 5% reduction scenario assumes proportional emissions reductions.',
      },
      {
        t: 'note',
        text: 'Population-wide lifetime calculations are hypothetical and hold the 2026 population constant. Actual individual consumption and future emissions will vary with lifestyle, economic activity, energy mix and technology. The figures are intended for public awareness and educational purposes and should not be interpreted as official government forecasts.',
      },
    ],
  },
];

/** Photo if the article has one, otherwise a branded gradient cover. */
function Cover({ n, variant }: { n: NewsItem; variant: 'card' | 'modal' }) {
  if (n.image) {
    return variant === 'card' ? (
      <img
        src={n.image}
        alt={n.imageAlt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: n.focus }}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      n.zoomable ? (
        <a href={n.image} target="_blank" rel="noopener noreferrer" title="Open full-size image" className="block cursor-zoom-in">
          <img src={n.image} alt={n.imageAlt} className="max-h-[60dvh] w-full bg-slate-100 object-contain" />
        </a>
      ) : (
        <img src={n.image} alt={n.imageAlt} className="max-h-[50dvh] w-full bg-slate-100 object-contain" />
      )
    );
  }
  return (
    <div
      role="img"
      aria-label={n.imageAlt}
      className={`grid place-items-center bg-gradient-to-br from-brand-700 via-brand-800 to-ocean-950 ${
        variant === 'card' ? 'h-full w-full transition-transform duration-500 group-hover:scale-105' : 'h-44 w-full sm:h-56'
      }`}
    >
      <span className="font-display text-7xl font-black tracking-tighter text-white/90 sm:text-8xl">{n.coverText}</span>
    </div>
  );
}

/** Each article's own address, e.g. https://site.com/#news/noida-branch-2026 */
const articleUrl = (id: string) => `${window.location.origin}${window.location.pathname}${window.location.search}#news/${id}`;

/** Returns the article id named in the address bar (#news/<id>), or null. */
const articleIdFromHash = (): string | null => {
  const m = window.location.hash.match(/^#news\/(.+)$/);
  if (!m) return null;
  let id = m[1];
  try {
    id = decodeURIComponent(id);
  } catch {
    /* keep raw */
  }
  return NEWS.some((n) => n.id === id) ? id : null;
};

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
        if (b.t === 'byline')
          return (
            <p key={i} className="border-l-2 border-brand-600 pl-3 text-sm text-slate-500">
              Analysis by <strong className="font-semibold text-slate-900">{b.name}</strong>
              <br />
              {b.role}
            </p>
          );
        if (b.t === 'note')
          return (
            <p key={i} className="text-sm italic leading-relaxed text-slate-500">
              {b.text}
            </p>
          );
        if (b.t === 'table')
          return (
            <div key={i} className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-brand-50 text-brand-900">
                  <tr>
                    {b.head.map((h) => (
                      <th key={h} scope="col" className="px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {b.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, c) =>
                        c === 0 ? (
                          <th key={c} scope="row" className="px-4 py-3 font-semibold text-slate-900">
                            {cell}
                          </th>
                        ) : (
                          <td key={c} className="px-4 py-3">
                            {cell}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        if (b.t === 'refs')
          return (
            <ol key={i} className="list-decimal space-y-2 pl-5 text-sm marker:font-semibold marker:text-brand-700">
              {b.items.map((r) => (
                <li key={r.url}>
                  {r.label}:{' '}
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-brand-700 underline underline-offset-2 hover:text-brand-800"
                  >
                    {r.url}
                  </a>
                </li>
              ))}
            </ol>
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
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const item = NEWS.find((n) => n.id === openId) ?? null;

  // ---- Deep links: #news/<id> opens that article directly ----
  const openArticle = (id: string) => {
    window.history.pushState(null, '', `#news/${id}`);
    setOpenId(id);
  };

  const closeArticle = () => {
    if (window.location.hash.startsWith('#news/')) window.history.replaceState(null, '', '#news');
    setOpenId(null);
  };

  useEffect(() => {
    // Landing straight on an article link: show it, with the News section behind it
    const id = articleIdFromHash();
    if (id) {
      setOpenId(id);
      requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ block: 'start' }));
    }
    // Back / forward buttons and pasted links while the page is open
    const onHash = () => setOpenId(articleIdFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Tab title follows the open article, so shared tabs and bookmarks read well
  useEffect(() => {
    if (!item) return;
    const previous = document.title;
    document.title = `${item.title} | Karnish Group of India`;
    return () => {
      document.title = previous;
    };
  }, [item]);

  const copyLink = async (id: string) => {
    const url = articleUrl(id);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

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
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeArticle();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [item]);

  return (
    <section id="news" ref={sectionRef} aria-labelledby="news-heading" className="scroll-mt-24 bg-white py-16 lg:py-24">
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
                        <Cover n={n} variant="card" />
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
                        <a
                          href={`#news/${n.id}`}
                          tabIndex={visible ? 0 : -1}
                          onClick={(e) => {
                            e.preventDefault();
                            openArticle(n.id);
                          }}
                          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:underline"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          <span className="sr-only"> about {n.title}</span>
                        </a>
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
          onClick={closeArticle}
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
              onClick={closeArticle}
              aria-label="Close article"
              autoFocus
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="overflow-y-auto">
              <Cover n={item} variant="modal" />
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
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyLink(item.id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    {copied ? <Check className="h-4 w-4 text-brand-600" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
                    {copied ? 'Link copied' : 'Copy link'}
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${item.title} ${articleUrl(item.id)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> Share on WhatsApp
                  </a>
                  <span className="sr-only" aria-live="polite">
                    {copied ? 'Link copied to clipboard' : ''}
                  </span>
                </div>
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
