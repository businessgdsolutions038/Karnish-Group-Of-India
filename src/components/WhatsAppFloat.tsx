import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/data';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-20 lg:bottom-6 lg:right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden lg:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all bg-white text-slate-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg border border-slate-200 whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl group-hover:bg-[#1da851] transition-colors">
          <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
        </span>
      </span>
    </a>
  );
}
