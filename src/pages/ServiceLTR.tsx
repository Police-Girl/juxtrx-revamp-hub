import { Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import laboratoryImage from '@/assets/laboratory-minimal.jpg';

const ServiceLTR = () => {
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
                  <Shield className="text-white" size={48} />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Local Trade Representative & Brand Management
                  </h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Comprehensive market representation and brand management services for pharmaceutical companies looking to expand their reach and visibility in Kenya and East Africa.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={laboratoryImage} 
                  alt="Professional laboratory setting"
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
                    "Market entry strategy and planning",
                    "Brand positioning and marketing",
                    "Local partnership development",
                    "Market intelligence and analysis"
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
                    "Initial market assessment and competitive analysis",
                    "Develop comprehensive market entry strategy",
                    "Establish local partnerships and distribution networks",
                    "Implement brand positioning and marketing campaigns",
                    "Monitor performance and optimize strategies"
                  ].map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
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
                    "Faster market penetration with reduced risks",
                    "Access to established local networks",
                    "Regulatory compliance expertise",
                    "Cost-effective market expansion",
                    "Ongoing support and monitoring"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-tertiary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">Timeline</h3>
                <p className="text-muted-foreground text-lg">
                  3-6 months for full market entry strategy implementation
                </p>
              </div>
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">Investment</h3>
                <p className="text-muted-foreground text-lg">
                  Starting from KES 500,000 - customized based on scope
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-hero p-12 rounded-3xl text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Expand Your Market Presence?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let our experienced team help you establish a strong presence in the East African pharmaceutical market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 glass-effect">
                    Request Quote
                  </Button>
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

export default ServiceLTR;