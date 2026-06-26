import { logoMaster } from '@/lib/site-images';
import { cn } from '@/lib/utils';

interface LogoLockupProps {
  className?: string;
  imgClassName?: string;
}

const LogoLockup = ({ className, imgClassName }: LogoLockupProps) => (
  <div className={cn(className)}>
    <img
      src={logoMaster}
      alt="JMRC.intel — Creative Intelligence for Regulated Markets"
      className={cn('w-auto object-contain object-left', imgClassName)}
    />
  </div>
);

export default LogoLockup;
