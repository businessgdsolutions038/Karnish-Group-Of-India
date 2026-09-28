import { Headset, Settings, FileText, Users, Mail, User, Phone, ChevronRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { ESCALATION } from '@/lib/data';

interface ContactRowProps {
  email: string;
  name?: string;
  phone?: string;
  tone: 'green' | 'blue' | 'amber';
}

const tones = {
  green: 'bg-brand-700 text-white',
  blue: 'bg-ocean-700 text-white',
  amber: 'bg-amber-700 text-white',
};

function ContactRow({ email, name, phone, tone }: ContactRowProps) {
  return (
    <div className="mt-5 space-y-3">
      <a
        href={`mailto:${email}`}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold break-all hover:opacity-90 transition-opacity ${tones[tone]}`}
      >
        <Mail className="w-5 h-5 flex-shrink-0" />
        {email}
      </a>
      {name && (
        <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 px-1">
          <User className="w-4 h-4 text-slate-500 flex-shrink-0" />
          {name}
        </div>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-3 text-sm font-bold text-slate-900 px-1 hover:text-brand-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
          {phone}
        </a>
      )}
    </div>
  );
}

const steps = [
  { n: 1, title: 'Contact Level 1', text: 'for general support' },
  { n: 2, title: 'Approach Level 2', text: 'for technical or billing related issues' },
  { n: 3, title: 'Escalate to Level 3', text: 'for severe / unresolved issues' },
];

export default function EscalationMatrix() {
  return (
    <section id="support" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Customer Support"
            title="Customer Support & Escalation Matrix"
            description="We are here to support you at every step. Please reach out to the right contact for a faster resolution."
          />
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.6fr_1fr] gap-6">
          {/* Level 1 */}
          <ScrollReveal>
            <div className="h-full rounded-3xl border border-brand-200 bg-brand-50/60 p-7 shadow-card flex flex-col">
              <span className="self-center px-6 py-1.5 rounded-lg bg-brand-800 text-white font-display font-bold">Level 1</span>
              <div className="mt-5 text-center">
                <h3 className="font-display font-bold text-xl text-slate-900">Customer Care</h3>
                <p className="text-sm text-slate-600">General Support / Initial Query</p>
                <div className="mt-5 mx-auto w-16 h-16 rounded-full bg-brand-700 flex items-center justify-center">
                  <Headset className="w-8 h-8 text-white" />
                </div>
              </div>
              <ContactRow email={ESCALATION.level1.email} tone="green" />
              <p className="mt-auto pt-5 text-xs text-slate-600 text-center leading-relaxed">
                For all general queries, product information, installation updates and initial support requests, please contact our customer care team.
              </p>
            </div>
          </ScrollReveal>

          {/* Level 2 */}
          <ScrollReveal delay={100}>
            <div className="h-full rounded-3xl border border-ocean-200 bg-ocean-50/60 p-7 shadow-card flex flex-col">
              <span className="self-center px-6 py-1.5 rounded-lg bg-ocean-800 text-white font-display font-bold">Level 2</span>
              <div className="mt-5 text-center">
                <h3 className="font-display font-bold text-xl text-slate-900">Functional Resolution</h3>
                <p className="text-sm text-slate-600">For specific issues, please contact the respective team below:</p>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/80 border border-ocean-100 p-5">
                  <div className="mx-auto w-14 h-14 rounded-full bg-ocean-600 flex items-center justify-center">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="mt-3 text-center font-display font-bold text-slate-900">Technical Issues</h4>
                  <p className="text-center text-xs text-slate-600">Solar Equipment Not Working</p>
                  <ContactRow {...ESCALATION.technical} tone="blue" />
                </div>
                <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-5">
                  <div className="mx-auto w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="mt-3 text-center font-display font-bold text-slate-900">Billing Issues</h4>
                  <p className="text-center text-xs text-slate-600">Refund / Other Queries</p>
                  <ContactRow {...ESCALATION.billing} tone="amber" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Level 3 */}
          <ScrollReveal delay={200}>
            <div className="h-full rounded-3xl border border-brand-200 bg-brand-50/60 p-7 shadow-card flex flex-col">
              <span className="self-center px-6 py-1.5 rounded-lg bg-brand-800 text-white font-display font-bold">Level 3</span>
              <div className="mt-5 text-center">
                <h3 className="font-display font-bold text-xl text-slate-900">Nodal Escalation</h3>
                <p className="text-sm text-slate-600">Severe / Unresolved Issues</p>
                <div className="mt-5 mx-auto w-16 h-16 rounded-full bg-brand-700 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <ContactRow {...ESCALATION.level3} tone="green" />
              <p className="mt-auto pt-5 text-xs text-slate-600 text-center leading-relaxed">
                If your issue remains unresolved or requires senior management intervention, please escalate to our management team.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <ScrollReveal delay={120}>
          <div className="mt-8 grid md:grid-cols-3 gap-3">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-white ${
                  i === 1 ? 'bg-ocean-800' : 'bg-brand-800'
                }`}
              >
                <span className="w-9 h-9 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center flex-shrink-0">
                  {step.n}
                </span>
                <div className="text-sm leading-snug">
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-white/80">{step.text}</div>
                </div>
                {i < steps.length - 1 && <ChevronRight className="hidden md:block ml-auto w-5 h-5 text-white/60" />}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
