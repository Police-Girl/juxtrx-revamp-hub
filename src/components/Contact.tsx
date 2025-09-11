import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      details: ["+254 (0) 123 456 789", "+254 (0) 987 654 321"],
      action: "Call Now"
    },
    {
      icon: <Mail className="text-secondary" size={24} />,
      title: "Email",
      details: ["info@juxtrx.ke", "support@juxtrx.ke"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="text-tertiary" size={24} />,
      title: "Office Location",
      details: ["Nairobi, Kenya", "Westlands Business District"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00am - 6:00pm", "Sat: 9:00am - 2:00pm"],
      action: "View Schedule"
    }
  ];

  const services = [
    "Regulatory Consulting",
    "Product Registration",
    "Pharmacy Operations", 
    "Brand Management",
    "Market Research",
    "Quality Assurance"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your pharmaceutical needs? Our expert team is here to help 
            you navigate the healthcare landscape and achieve your business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-strong border border-border">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName"
                    placeholder="John"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName"
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+254 XXX XXX XXX"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                  Service of Interest
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your project or requirements..."
                  className="w-full h-32"
                />
              </div>

              <Button className="w-full" size="lg">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-hero p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">
                Need Immediate Assistance?
              </h4>
              <p className="text-white/90 mb-6">
                Our support team is available to help you with urgent inquiries 
                and emergency pharmaceutical consultations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-white text-primary hover:bg-white/90"
                  size="sm"
                >
                  <MessageCircle className="mr-2" size={16} />
                  Live Chat
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 glass-effect"
                  size="sm"
                >
                  <Globe className="mr-2" size={16} />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;