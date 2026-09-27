import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  as?: 'button';
}

interface LinkButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md hover:-translate-y-0.5',
  secondary:
    'bg-ocean-700 text-white hover:bg-ocean-800 shadow-sm hover:shadow-md hover:-translate-y-0.5',
  outline:
    'border-2 border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-700 bg-white hover:bg-brand-50',
  ghost: 'text-slate-700 hover:text-brand-700 hover:bg-brand-50',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1da851] shadow-sm hover:shadow-md hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = 'primary', size = 'md', className = '', children, href, target, rel }: LinkButtonProps) {
  return (
    <a href={href} target={target} rel={rel} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </a>
  );
}
