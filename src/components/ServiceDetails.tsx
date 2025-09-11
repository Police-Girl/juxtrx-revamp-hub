import { X, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    detailedInfo: {
      process: string[];
      benefits: string[];
      timeline: string;
      cost: string;
    };
  } | null;
}

const ServiceDetails = ({ isOpen, onClose, service }: ServiceDetailsProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-2">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Process */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Process</h3>
            <div className="space-y-3">
              {service.detailedInfo.process.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
            <div className="space-y-3">
              {service.detailedInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-tertiary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline and Cost */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 p-6 bg-accent rounded-xl">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
            <p className="text-muted-foreground">{service.detailedInfo.timeline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Investment</h4>
            <p className="text-muted-foreground">{service.detailedInfo.cost}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-gradient-hero text-white rounded-xl">
          <h4 className="text-xl font-semibold mb-3">Ready to Get Started?</h4>
          <p className="text-white/90 mb-4">
            Contact our expert team today to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-white text-primary hover:bg-white/90">
              <Phone className="mr-2" size={16} />
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="mr-2" size={16} />
              Request Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetails;