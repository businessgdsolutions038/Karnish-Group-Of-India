import { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { fetchUpdates, type UpdatePost } from '@/lib/api';
import { IMAGES } from '@/lib/data';

const categoryColors: Record<string, string> = {
  Projects: 'bg-brand-100 text-brand-700',
  Products: 'bg-ocean-100 text-ocean-700',
  'Company News': 'bg-amber-100 text-amber-700',
  'Solar Updates': 'bg-purple-100 text-purple-700',
};

const fallbackUpdates: UpdatePost[] = [
  {
    id: '1',
    title: 'New 50 kW Rooftop Solar Installation Completed in Pune',
    slug: 'rooftop-solar-pune',
    excerpt: 'Our team successfully commissioned a 50 kW rooftop solar system for a manufacturing facility in Pune, reducing their energy costs by 40%.',
    content: '',
    category: 'Projects',
    image_url: IMAGES.serviceEpc,
    published_at: '2026-09-15',
  },
  {
    id: '2',
    title: 'Launch of New Solar Street Light Series: 12W, 18W & 24W',
    slug: 'new-solar-street-lights',
    excerpt: 'We are excited to announce our new range of energy-efficient solar street lights available in 12W, 18W, and 24W configurations.',
    content: '',
    category: 'Products',
    image_url: IMAGES.productStreetLight,
    published_at: '2026-09-08',
  },
  {
    id: '3',
    title: 'Solar Pump Installation Supports Local Farming Community',
    slug: 'solar-pump-farming-community',
    excerpt: 'Our recent solar water pump installation is helping local farmers reduce irrigation costs and improve water access.',
    content: '',
    category: 'Company News',
    image_url: IMAGES.productPump,
    published_at: '2026-08-28',
  },
  {
    id: '4',
    title: 'Understanding On-Grid vs Off-Grid Solar: Which Is Right for You?',
    slug: 'on-grid-vs-off-grid-solar',
    excerpt: 'A quick guide to help you choose between on-grid and off-grid solar systems based on your location and energy needs.',
    content: '',
    category: 'Solar Updates',
    image_url: IMAGES.projectCommercial,
    published_at: '2026-08-20',
  },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Updates() {
  const [posts, setPosts] = useState<UpdatePost[]>(fallbackUpdates);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchUpdates()
      .then((data) => {
        if (mounted && data.length > 0) setPosts(data);
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <section id="updates" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Updates"
            title="Latest Updates"
            description="Project announcements, new product launches, industry insights and company news — stay informed about our latest work in solar and power."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.slice(0, 3).map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 80}>
              <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 border border-slate-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold ${
                      categoryColors[post.category] || 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.published_at)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>
                  <a
                    href="#updates"
                    className="mt-4 inline-flex items-center gap-2 text-brand-700 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
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
