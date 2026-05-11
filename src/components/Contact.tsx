import React, { useState } from 'react';
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
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      details: ["0777795985"],
      action: "Call Now",
      actionLink: "tel:0777795985"
    },
    {
      icon: <Mail className="text-secondary" size={24} />,
      title: "Email",
      details: ["info@juxtrx.ke"],
      action: "Send Email",
      actionLink: "mailto:info@juxtrx.ke"
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

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const base = (import.meta as any).env?.VITE_API_BASE || '';
      const api = base ? `${String(base).replace(/\/$/, '')}/api/contact.php` : '/api/contact.php';
      const res = await fetch(api, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) throw new Error(data.error || 'Failed');
      toast({ title: 'Message sent', description: 'We will get back to you shortly.' });
      form.reset();
    } catch (err: any) {
      toast({ title: 'Failed to send', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  }

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

        <div className="grid lg:grid-cols-1 gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-strong border border-border max-w-3xl mx-auto w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" placeholder="John" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="w-full" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" className="w-full" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+254 XXX XXX XXX" className="w-full" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                  Service of Interest
                </label>
                <select name="service" className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
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
                <Textarea id="message" name="message" placeholder="Tell us about your project or requirements..." className="w-full h-32" required />
              </div>

              <Button className="w-full" size="lg" type="submit" disabled={submitting}>
                <Send className="mr-2" size={20} />
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;