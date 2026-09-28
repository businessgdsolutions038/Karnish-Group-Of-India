import { Phone, MessageCircle, FileText } from 'lucide-react';
import { TEL_LINK, WHATSAPP_LINK } from '@/lib/data';

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      <div className="grid grid-cols-3 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
        <a
          href={TEL_LINK}
          className="flex flex-col items-center justify-center gap-1 py-3 text-slate-700 active:bg-slate-50 transition-colors"
        >
          <Phone className="w-5 h-5 text-ocean-600" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white bg-[#25D366] active:bg-[#1da851] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white bg-brand-600 active:bg-brand-700 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-semibold">Get a Quote</span>
        </a>
      </div>
    </div>
  );
}
