import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCapsules from '@/Images/capsules-1079838.jpg';
import heroMedical from '@/assets/hero-medical.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCapsules})` }}
      >
        <div className="absolute inset-0 medical-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-white/20 glass-effect text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Welcome to Juxt Rx
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Pharmacy Operations, PBM,
                <span className="block text-secondary-light">LTR & Regulatory Support</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We specialize in pharmacy operations and consultancy, Pharmacy Benefit Management (PBM), Local Trade Representative (LTR) & brand management, and regulatory support & product registration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-4">
                <a href="#services" className="flex items-center">Discover Our Services<ArrowRight className="ml-2" size={20} /></a>
              </Button>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-strong text-lg px-8 py-4">
                <a href="#contact">Contact Us Today</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/10 glass-effect p-6 rounded-2xl border border-white/20">
              <Shield className="text-secondary-light mb-4" size={32} />
              <h3 className="text-white text-xl font-semibold mb-2">Regulatory Excellence</h3>
              <p className="text-white/80">
                Navigate complex pharmaceutical regulations with our expert guidance and support.
              </p>
            </div>

            <div className="bg-white/10 glass-effect p-6 rounded-2xl border border-white/20">
              <Users className="text-secondary-light mb-4" size={32} />
              <h3 className="text-white text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-white/80">
                Access our team of experienced pharmaceutical professionals and consultants.
              </p>
            </div>

            <div className="bg-white/10 glass-effect p-6 rounded-2xl border border-white/20">
              <Award className="text-secondary-light mb-4" size={32} />
              <h3 className="text-white text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-white/80">
                Maintain the highest standards with our comprehensive quality management systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default Hero;