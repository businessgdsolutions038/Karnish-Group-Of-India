import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ScrollReveal from '../ScrollReveal';
import { Button } from '../Button';
import { COMPANY, LOCATIONS, REQUIREMENT_OPTIONS, WHATSAPP_LINK, TEL_LINK } from '@/lib/data';
import { submitEnquiry } from '@/lib/api';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: COMPANY.phone, href: TEL_LINK },
  { icon: MessageCircle, label: 'WhatsApp', value: COMPANY.whatsappDisplay, href: WHATSAPP_LINK },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    try {
      await submitEnquiry({
        name: (formData.get('name') as string).trim(),
        phone: (formData.get('phone') as string).trim(),
        email: (formData.get('email') as string).trim(),
        location: (formData.get('location') as string).trim(),
        requirement_type: (formData.get('requirement') as string).trim(),
        message: (formData.get('message') as string).trim(),
      });
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Discuss Your Energy Requirements"
            description="Reach out for a free consultation. Our team will help you find the right solar or power solution for your needs."
          />
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-7 lg:p-8 shadow-card border border-slate-100 h-full">
              <h3 className="font-display font-bold text-xl text-slate-900">Get in Touch</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                We're here to answer your questions and help you get started with solar.
              </p>

              <div className="mt-7 space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'WhatsApp' ? '_blank' : undefined}
                    rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-100 hover:border-brand-200 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:border-brand-600 transition-all flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
                      <div className="text-sm text-slate-800 font-semibold">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Availability</div>
                    <div className="text-sm text-slate-700 mt-0.5">{COMPANY.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={120}>
            <div className="bg-white rounded-3xl p-7 lg:p-8 shadow-card border border-slate-100">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-5 animate-pulse-ring">
                    <CheckCircle2 className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900">Thank You!</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-sm">
                    Your enquiry has been submitted successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-brand-700 font-semibold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Requirement
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all bg-white"
                    >
                      <option value="" disabled>Select your requirement</option>
                      {REQUIREMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your energy requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request a Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    We'll respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Locations */}
        <ScrollReveal delay={160}>
          <div className="mt-14">
            <h3 className="font-display font-bold text-xl text-slate-900 text-center">Our Locations</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.address}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600" />
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        loc.type === 'Head Office'
                          ? 'bg-brand-600 text-white'
                          : 'bg-ocean-50 text-ocean-700 border border-ocean-100'
                      }`}
                    >
                      {loc.type}
                    </span>
                  </div>
                  <div className="mt-4 font-display font-semibold text-slate-900">{loc.city}</div>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
