import LogoLockup from '@/components/LogoLockup';

const BrandShowcase = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center py-6 lg:py-0 ${className}`}>
    <LogoLockup
      className="w-full max-w-md lg:max-w-lg"
      imgClassName="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain"
    />
  </div>
);

export default BrandShowcase;
