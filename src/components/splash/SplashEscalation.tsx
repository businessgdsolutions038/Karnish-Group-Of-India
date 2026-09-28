import type { ReactNode } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { ESCALATION } from '@/lib/data';

type Tone = 'green' | 'blue' | 'amber' | 'rose';

/** Full class names are written out so Tailwind can see them. */
const tones: Record<Tone, { panel: string; badge: string; title: string; chip: string }> = {
  green: {
    panel: 'border-brand-200 bg-brand-50',
    badge: 'bg-brand-700',
    title: 'text-brand-900',
    chip: 'bg-brand-700 hover:bg-brand-800',
  },
  blue: {
    panel: 'border-ocean-200 bg-ocean-50',
    badge: 'bg-ocean-700',
    title: 'text-ocean-900',
    chip: 'bg-ocean-700 hover:bg-ocean-800',
  },
  amber: {
    panel: 'border-amber-200 bg-amber-50',
    badge: 'bg-amber-700',
    title: 'text-amber-900',
    chip: 'bg-amber-700 hover:bg-amber-800',
  },
  rose: {
    panel: 'border-rose-200 bg-rose-50',
    badge: 'bg-rose-700',
    title: 'text-rose-900',
    chip: 'bg-rose-700 hover:bg-rose-800',
  },
};

interface ContactLinesProps {
  email: string;
  name?: string;
  phone?: string;
  tone: Tone;
}

function ContactLines({ email, name, phone, tone }: ContactLinesProps) {
  return (
    <div className="mt-3">
      <a
        href={`mailto:${email}`}
        className={`flex items-start gap-1.5 [overflow-wrap:anywhere] rounded-lg px-2.5 py-2 text-[12px] font-semibold text-white sm:gap-2 sm:px-3 sm:text-[13px] transition-colors ${tones[tone].chip}`}
      >
        <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          {/* On narrow screens the address breaks after the @ rather than mid-word */}
          {email.split('@')[0]}@<wbr />
          {email.split('@')[1]}
        </span>
      </a>
      {(name || phone) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 px-1 text-[13px] font-semibold text-slate-900">
          {name && (
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden="true" />
              {name}
            </span>
          )}
          {phone && (
            <a
              href={`tel:+91${phone}`}
              className="flex items-center gap-1.5 py-0.5 transition-colors hover:text-brand-700"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden="true" />
              {phone}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

interface LevelProps {
  level: number;
  title: string;
  note: string;
  tone: Tone;
  children: ReactNode;
}

function Level({ level, title, note, tone, children }: LevelProps) {
  const t = tones[tone];
  return (
    <li className={`rounded-2xl border p-3 sm:p-4 ${t.panel}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-base font-bold text-white ${t.badge}`}
          aria-hidden="true"
        >
          {level}
        </span>
        <div>
          <h3 className={`font-display text-base font-bold leading-tight ${t.title}`}>
            <span className="sr-only">Level {level}: </span>
            {title}
          </h3>
          <p className="text-xs text-slate-600">{note}</p>
        </div>
      </div>
      {children}
    </li>
  );
}

export default function SplashEscalation() {
  return (
    <aside
      aria-labelledby="splash-support"
      className="flex flex-col rounded-3xl bg-white/90 p-4 shadow-card ring-1 ring-slate-900/5 backdrop-blur-sm sm:p-7"
    >
      <h2 id="splash-support" className="font-display text-xl font-extrabold text-ocean-950">
        Customer Support &amp; Escalation Matrix
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Start at Level 1 and move up if your issue is not resolved.
      </p>

      <ol className="mt-5 space-y-3">
        <Level level={1} title="Customer Care" note="General support / initial query" tone="green">
          <ContactLines email={ESCALATION.level1.email} tone="green" />
        </Level>

        <Level
          level={2}
          title="Functional Resolution"
          note="For specific issues, contact the team below"
          tone="blue"
        >
          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-ocean-100 bg-white p-3">
              <p className="text-sm font-bold text-ocean-900">
                Technical issues
                <span className="font-normal text-slate-600"> · Solar equipment not working</span>
              </p>
              <ContactLines {...ESCALATION.technical} tone="blue" />
            </div>
            <div className={`rounded-xl border p-3 ${tones.amber.panel}`}>
              <p className={`text-sm font-bold ${tones.amber.title}`}>
                Billing issues
                <span className="font-normal text-slate-600"> · Refund / other queries</span>
              </p>
              <ContactLines {...ESCALATION.billing} tone="amber" />
            </div>
          </div>
        </Level>

        <Level level={3} title="Nodal Escalation" note="Severe or unresolved issues" tone="rose">
          <ContactLines {...ESCALATION.level3} tone="rose" />
        </Level>
      </ol>
    </aside>
  );
}
