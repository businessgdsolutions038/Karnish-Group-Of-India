interface LogoProps {
  className?: string;
  /** Use the white-text version on dark backgrounds (e.g. the footer). */
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={light ? '/logo-light.png' : '/logo.png'}
        alt="Karnish Group of India"
        className="h-12 lg:h-14 w-auto"
      />
    </div>
  );
}
