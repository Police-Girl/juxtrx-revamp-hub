import { 
  Shield, 
  FileText, 
  Users, 
  Stethoscope, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import laboratoryImage from '@/Images/medicine-1582472.jpg';
import pharmacyOperationsImage from '@/Images/tablets-5620566.jpg';
import consultationImage from '@/Images/medications-257336.jpg';

const Services = () => {
  const servicesData = [
    {
      icon: <Shield className="text-primary" size={48} />,
      title: "Local Trade Representative (LTR) & Brand Management",
      description: "Comprehensive market representation and brand management services for pharmaceutical companies looking to expand their reach and visibility in Kenya and East Africa.",
      features: [
        "Market entry strategy and planning",
        "Brand positioning and marketing",
        "Local partnership development",
        "Market intelligence and analysis"
      ],
      image: laboratoryImage,
      link: "/services/ltr"
    },
    {
      icon: <FileText className="text-secondary" size={48} />,
      title: "Regulatory Support & Product Registration",
      description: "Navigate regulatory pathways efficiently with expert guidance for approvals, certifications, and product registrations in Kenya.",
      features: [
        "Regulatory compliance consulting",
        "Product registration assistance", 
        "Documentation preparation",
        "Regulatory submission support"
      ],
      image: pharmacyOperationsImage,
      link: "/services/regulatory"
    },
    {
      icon: <Stethoscope className="text-tertiary" size={48} />,
      title: "Pharmacy Operations, PBM & Consultancy",
      description: "Optimize pharmacy workflows, implement PBM, and enhance patient outcomes through scalable, tech-enabled operations.",
      features: [
        "Pharmacy operations management",
        "Pharmacy Benefit Management (PBM)",
        "Quality assurance programs",
        "Healthcare consultancy services"
      ],
      image: consultationImage,
      link: "/services/pharmacy"
    }
  ];

  const additionalServices = [
    {
      icon: <Users size={24} />,
      title: "Training & Development",
      description: "Professional development programs for healthcare professionals and pharmaceutical teams."
    },
    {
      icon: <Globe size={24} />,
      title: "Market Research",
      description: "Comprehensive market analysis and intelligence services for strategic decision making."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Assurance",
      description: "Implementation of quality management systems and compliance monitoring."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive pharmaceutical solutions designed to support your business growth 
            and ensure regulatory compliance in the healthcare industry.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-20">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={service.link}>
                  <Button 
                    className="mt-6" 
                    size="lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-strong w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center relative z-10">
          <div className="bg-gradient-hero p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Healthcare Operations?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our team of experts help you navigate the pharmaceutical landscape 
              and achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a href="/#contact" className="inline-flex">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-strong"
                >
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;