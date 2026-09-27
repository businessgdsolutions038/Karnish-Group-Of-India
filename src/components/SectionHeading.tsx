import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${
        align === 'center' ? '' : ''
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-brand-600 font-semibold text-sm tracking-wider uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-slate-900 font-display">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-500 text-base sm:text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
