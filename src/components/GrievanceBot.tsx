import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { CheckCircle2, Headset, Send, X } from 'lucide-react';

/**
 * Paste the Make webhook URL into a .env file as VITE_GRIEVANCE_WEBHOOK_URL
 * (e.g. https://hook.eu1.make.com/xxxxxxxx). Never commit a real URL.
 */
const WEBHOOK_URL = import.meta.env.VITE_GRIEVANCE_WEBHOOK_URL as string | undefined;

const PRODUCTS = ['Solar Pump', 'Rooftop Solar', 'Inverter', 'Battery', 'Other'];

type Key = 'name' | 'location' | 'product' | 'phone' | 'email' | 'issue' | 'repeat_issue';
type Answers = Record<Key, string>;

interface Step {
  key: Key;
  question: string;
  type: 'text' | 'tel' | 'email' | 'textarea' | 'choice';
  choices?: string[];
  validate?: (v: string) => string | null;
}

const STEPS: Step[] = [
  {
    key: 'name',
    question: "Hello! I'm here to register your complaint. What is your name?",
    type: 'text',
    validate: (v) => (v.length < 2 ? 'Please enter your full name.' : null),
  },
  {
    key: 'location',
    question: 'Thank you. Which village, town or district are you in?',
    type: 'text',
    validate: (v) => (v.length < 2 ? 'Please enter your location.' : null),
  },
  { key: 'product', question: 'Which product is the complaint about?', type: 'choice', choices: PRODUCTS },
  {
    key: 'phone',
    question: 'What is the best phone number to reach you on?',
    type: 'tel',
    validate: (v) =>
      /^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) ? null : 'Please enter a valid 10-digit mobile number.',
  },
  {
    key: 'email',
    question: "What's your email address? We'll send your complaint confirmation there.",
    type: 'email',
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : 'Please enter a valid email address.'),
  },
  {
    key: 'issue',
    question: 'Please describe the issue you are facing.',
    type: 'textarea',
    validate: (v) => (v.length < 10 ? 'Please add a little more detail (at least 10 characters).' : null),
  },
  { key: 'repeat_issue', question: 'Have you faced this same issue before?', type: 'choice', choices: ['Yes', 'No'] },
];

const LABELS: Record<Key, string> = {
  name: 'Name',
  location: 'Location',
  product: 'Product',
  phone: 'Phone',
  email: 'Email',
  issue: 'Issue',
  repeat_issue: 'Repeat issue',
};

const EMPTY: Answers = { name: '', location: '', product: '', phone: '', email: '', issue: '', repeat_issue: '' };


const CSS = `
@keyframes grv-colors{
  0%{color:#ff5c8a;text-shadow:0 0 6px #ff5c8a,0 0 16px #ff2d6f}
  20%{color:#ffb020;text-shadow:0 0 6px #ffb020,0 0 16px #ff8a00}
  40%{color:#fff27a;text-shadow:0 0 6px #fff27a,0 0 16px #ffe600}
  60%{color:#4dff9a;text-shadow:0 0 6px #4dff9a,0 0 16px #00e676}
  80%{color:#4dd8ff;text-shadow:0 0 6px #4dd8ff,0 0 16px #00b8ff}
  100%{color:#ff5c8a;text-shadow:0 0 6px #ff5c8a,0 0 16px #ff2d6f}
}
@keyframes grv-spin{to{transform:rotate(360deg)}}
@keyframes grv-pulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.35);opacity:0}}
@keyframes grv-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes grv-wiggle{0%,86%,100%{transform:rotate(0)}89%{transform:rotate(-14deg)}92%{transform:rotate(12deg)}95%{transform:rotate(-8deg)}98%{transform:rotate(5deg)}}
@keyframes grv-pop{from{opacity:0;transform:translateY(18px) scale(.92)}to{opacity:1;transform:none}}
@keyframes grv-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes grv-bg{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes grv-blink{0%,100%{opacity:1}50%{opacity:.35}}

.grv-launcher{position:fixed;display:inline-flex;align-items:center;justify-content:center;border:0;background:none;padding:0;cursor:pointer;animation:grv-float 3s ease-in-out infinite;border-radius:9999px}
.grv-launcher::before{content:"";position:absolute;inset:0;border-radius:9999px;background:#ff2d6f;animation:grv-pulse 2s ease-out infinite;z-index:-1}
.grv-ring{position:absolute;inset:-4px;border-radius:9999px;overflow:hidden;filter:blur(.5px)}
.grv-ring::before{content:"";position:absolute;left:50%;top:50%;width:300%;aspect-ratio:1;translate:-50% -50%;background:conic-gradient(#ff2d6f,#ffb020,#ffe600,#00e676,#00b8ff,#a855f7,#ff2d6f);animation:grv-spin 3s linear infinite}
.grv-inner{position:relative;display:flex;align-items:center;gap:.75rem;border-radius:9999px;background:linear-gradient(135deg,#071a3d,#0b2a63);padding:.7rem 1.4rem .7rem .8rem;box-shadow:0 10px 30px rgba(0,0,0,.45)}
.grv-icon{display:grid;place-items:center;height:3rem;width:3rem;border-radius:9999px;background:linear-gradient(135deg,#ff2d6f,#ffb020);color:#fff;animation:grv-wiggle 3.5s ease-in-out infinite}
.grv-text{font-size:1.1rem;font-weight:800;letter-spacing:.01em;white-space:nowrap;animation:grv-colors 5s linear infinite}
.grv-launcher:hover{animation-play-state:paused;transform:scale(1.05)}
.grv-launcher:focus-visible{outline:3px solid #fff;outline-offset:4px}
@media (min-width:1024px){.grv-text{font-size:1.25rem}.grv-icon{height:3.25rem;width:3.25rem}.grv-inner{padding:.8rem 1.7rem .8rem .9rem}}
@media (max-width:639px){.grv-text{font-size:.9rem}.grv-icon{height:2.25rem;width:2.25rem}.grv-icon svg{height:1.25rem;width:1.25rem}.grv-inner{padding:.4rem .95rem .4rem .45rem;gap:.5rem}.grv-ring{inset:-3px}}

.grv-window{animation:grv-pop .35s cubic-bezier(.2,.9,.3,1.2) both;transform-origin:bottom right}
.grv-header{background:linear-gradient(110deg,#0b2a63,#0f7d43,#0b2a63);background-size:200% 100%;animation:grv-bg 8s linear infinite}
.grv-avatar{display:grid;place-items:center;height:2.25rem;width:2.25rem;border-radius:9999px;background:rgba(255,255,255,.18);box-shadow:0 0 0 0 rgba(255,255,255,.6);animation:grv-ring 2s ease-out infinite}
@keyframes grv-ring{to{box-shadow:0 0 0 10px rgba(255,255,255,0)}}
.grv-online{display:inline-block;height:.5rem;width:.5rem;border-radius:9999px;background:#4dff9a;box-shadow:0 0 8px #4dff9a;animation:grv-blink 1.6s ease-in-out infinite}
.grv-bubble{animation:grv-in .35s ease-out both}
.grv-send{transition:transform .2s}
.grv-send:hover{transform:scale(1.1) rotate(-12deg)}
@media (prefers-reduced-motion:reduce){
  .grv-launcher,.grv-launcher::before,.grv-ring::before,.grv-icon,.grv-text,.grv-window,.grv-header,.grv-avatar,.grv-online,.grv-bubble{animation:none!important}
  .grv-text{color:#fff;text-shadow:0 0 10px #4dd8ff}
}
`;

type Status = 'asking' | 'review' | 'sending' | 'done' | 'error';

export default function GrievanceBot({ variant = 'site' }: { variant?: 'site' | 'splash' }) {
  const [open, setOpen] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [draft, setDraft] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('asking');
  const [ticketId, setTicketId] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const step = STEPS[stepIdx];
  const launcherPos =
    variant === 'splash'
      ? 'fixed bottom-4 right-3 sm:bottom-5 sm:right-4 lg:bottom-6 lg:right-6'
      : 'fixed bottom-20 right-4 lg:bottom-6 lg:right-6';

  // Chat history: every answered question, then the current one
  const history = useMemo(
    () => STEPS.slice(0, stepIdx).map((s) => ({ q: s.question, a: answers[s.key] })),
    [stepIdx, answers],
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [stepIdx, status, open]);

  const reset = () => {
    setStepIdx(0);
    setAnswers(EMPTY);
    setDraft('');
    setFieldError(null);
    setStatus('asking');
    setTicketId(null);
  };

  const accept = (value: string) => {
    const v = value.trim();
    const err = step.validate?.(v) ?? null;
    if (err) return setFieldError(err);
    setFieldError(null);
    setAnswers((a) => ({ ...a, [step.key]: v }));
    setDraft('');
    if (stepIdx === STEPS.length - 1) setStatus('review');
    else setStepIdx(stepIdx + 1);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    accept(draft);
  };

  const submit = async () => {
    if (!WEBHOOK_URL) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, submitted_at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json().catch(() => ({}));
      setTicketId(typeof data?.ticket_id === 'string' ? data.ticket_id : null);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <style>{CSS}</style>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Register a complaint"
          className={`grv-launcher group z-40 ${launcherPos}`}
        >
          <span className="grv-ring" aria-hidden="true" />
          <span className="grv-inner">
            <span className="grv-icon" aria-hidden="true">
              <Headset className="h-7 w-7" />
            </span>
            <span className="grv-text">
              <span className="sm:hidden">Complaint</span>
              <span className="hidden sm:inline">Register a complaint</span>
            </span>
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Complaint assistant"
          className="grv-window fixed inset-x-3 bottom-20 z-50 flex max-h-[min(36rem,calc(100dvh-6rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 sm:inset-x-auto sm:right-4 sm:w-[25rem] lg:bottom-6 lg:right-6"
        >
          <div className="grv-header flex items-center justify-between px-4 py-3.5 text-white">
            <div className="flex items-center gap-2">
              <span className="grv-avatar" aria-hidden="true">
                <Headset className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight">Complaint Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/85">
                  <span className="grv-online" aria-hidden="true" /> Online · we'll get back to you soon
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-1.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4 text-sm" aria-live="polite">
            {history.map((h) => (
              <div key={h.q} className="space-y-2">
                <Bubble side="bot">{h.q}</Bubble>
                <Bubble side="user">{h.a}</Bubble>
              </div>
            ))}

            {status === 'asking' && <Bubble side="bot">{step.question}</Bubble>}

            {status !== 'asking' && (
              <div className="space-y-2">
                <Bubble side="bot">{STEPS[STEPS.length - 1].question}</Bubble>
                <Bubble side="user">{answers.repeat_issue}</Bubble>
              </div>
            )}

            {status === 'review' && (
              <>
                <Bubble side="bot">Please check your details before I submit:</Bubble>
                <dl className="space-y-1 rounded-xl bg-white p-3 ring-1 ring-slate-200">
                  {(Object.keys(LABELS) as Key[]).map((k) => (
                    <div key={k} className="flex gap-2">
                      <dt className="w-24 shrink-0 font-semibold text-slate-500">{LABELS[k]}</dt>
                      <dd className="break-words text-slate-900">{answers[k]}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {status === 'sending' && <Bubble side="bot">Submitting your complaint…</Bubble>}

            {status === 'done' && (
              <div className="grv-bubble rounded-xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">
                <p className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Complaint registered
                </p>
                {ticketId && (
                  <p className="mt-2">
                    Your Ticket ID: <span className="font-mono font-bold">{ticketId}</span>
                  </p>
                )}
                <p className="mt-2">A confirmation has been sent to {answers.email}. Our team will contact you shortly.</p>
                
                <p className="mt-2">
                If it is not resolved within 48 hours, please contact:
               <br />
               technologydirector@karnishgroup.com (+91 90733 38336)
              </p>
              </div>
            )}

            {status === 'error' && (
              <Bubble side="bot">
                Sorry, we couldn't submit your complaint just now. Please try again, or contact us on WhatsApp.
              </Bubble>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            {status === 'asking' && step.type === 'choice' && (
              <div className="flex flex-wrap gap-2">
                {step.choices?.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => accept(c)}
                    className="rounded-full border border-ocean-700 px-4 py-1.5 text-sm font-semibold text-ocean-800 transition-colors hover:bg-ocean-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {status === 'asking' && step.type !== 'choice' && (
              <form onSubmit={onSubmit} className="flex items-end gap-2">
                {step.type === 'textarea' ? (
                  <textarea
                    autoFocus
                    rows={3}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    maxLength={1000}
                    aria-label={step.question}
                    className="min-h-[4.5rem] flex-1 resize-none rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-ocean-600 focus:outline-none focus:ring-2 focus:ring-ocean-200"
                  />
                ) : (
                  <input
                    autoFocus
                    type={step.type}
                    inputMode={step.type === 'tel' ? 'tel' : undefined}
                    autoComplete={step.type === 'tel' ? 'tel' : step.type === 'email' ? 'email' : step.key === 'name' ? 'name' : 'off'}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    maxLength={200}
                    aria-label={step.question}
                    className="flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-ocean-600 focus:outline-none focus:ring-2 focus:ring-ocean-200"
                  />
                )}
                <button
                  type="submit"
                  aria-label="Send"
                  className="grv-send grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ocean-700 text-white hover:bg-ocean-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
            {status === 'asking' && fieldError && (
              <p role="alert" className="mt-2 text-xs font-medium text-rose-600">
                {fieldError}
              </p>
            )}

            {status === 'review' && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={reset}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Start over
                </button>
                <button
                  type="button"
                  onClick={submit}
                  className="flex-1 rounded-xl bg-[#0f7d43] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0b6335]"
                >
                  Submit complaint
                </button>
              </div>
            )}

            {status === 'sending' && <p className="text-center text-xs text-slate-500">Please wait…</p>}

            {status === 'error' && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={reset}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Start over
                </button>
                <button
                  type="button"
                  onClick={() => setStatus('review')}
                  className="flex-1 rounded-xl bg-ocean-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-ocean-800"
                >
                  Try again
                </button>
              </div>
            )}

            {status === 'done' && (
              <button
                type="button"
                onClick={() => {
                  reset();
                  setOpen(false);
                }}
                className="w-full rounded-xl bg-ocean-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-ocean-800"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Bubble({ side, children }: { side: 'bot' | 'user'; children: React.ReactNode }) {
  return (
    <div className={side === 'user' ? 'flex justify-end' : 'flex justify-start'}>
      <p
        className={`grv-bubble max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 ${
          side === 'user' ? 'rounded-br-sm bg-ocean-700 text-white' : 'rounded-bl-sm bg-white text-slate-800 ring-1 ring-slate-200'
        }`}
      >
        {children}
      </p>
    </div>
  );
}
