interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Karnish Group of India"
        className="h-10 lg:h-11 w-auto rounded-lg"
      />
    </div>
  );
}
