import { FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import pharmacyImage from '@/Images/thermometer-1539191.jpg';

const ServiceRegulatory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <ArrowLeft size={20} />
                  Back to Home
                </Link>
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="text-white" size={48} />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Regulatory Support & Product Registration
                  </h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Navigate the complex regulatory landscape with our expert guidance, ensuring compliance and smooth product registration processes.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={pharmacyImage} 
                  alt="Modern pharmacy operations"
                  className="rounded-2xl shadow-strong w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Features */}
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Key Features</h3>
                <div className="space-y-4">
                  {[
                    "Regulatory compliance consulting",
                    "Product registration assistance", 
                    "Documentation preparation",
                    "Regulatory submission support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Our Process</h3>
                <div className="space-y-4">
                  {[
                    "Regulatory landscape assessment",
                    "Documentation review and preparation",
                    "Submission to Pharmacy & Poisons Board",
                    "Follow-up and compliance monitoring",
                    "Post-registration support and maintenance"
                  ].map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Benefits</h3>
                <div className="space-y-4">
                  {[
                    "100% compliance with Kenyan regulations",
                    "Expedited approval processes",
                    "Reduced regulatory risks",
                    "Expert guidance throughout",
                    "Ongoing compliance support"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-tertiary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <Link to="/#contact"><Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">Talk to Us</Button></Link>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-hero p-12 rounded-3xl text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Need Regulatory Support?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Our regulatory experts will ensure your products meet all compliance requirements for the Kenyan market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#contact" className="inline-flex">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                      Schedule Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRegulatory;