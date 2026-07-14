import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const contactInfo = [
  {
    icon: Phone,
    iconColor: 'text-primary',
    title: 'Phone',
    details: ['0777795985'],
    action: 'Call Now',
    actionLink: 'tel:0777795985',
  },
  {
    icon: Mail,
    iconColor: 'text-secondary',
    title: 'Email',
    details: ['info@juxtrx.ke'],
    action: 'Send Email',
    actionLink: 'mailto:info@juxtrx.ke',
  },
  {
    icon: MapPin,
    iconColor: 'text-tertiary',
    title: 'Office Location',
    details: ['Nairobi, Kenya', 'Westlands Business District'],
    action: 'Get Directions',
    actionLink: 'https://maps.google.com/?q=Westlands,Nairobi,Kenya',
  },
  {
    icon: Clock,
    iconColor: 'text-primary',
    title: 'Business Hours',
    details: ['Sun – Fri: 8:00am – 10:00pm'],
    action: null,
    actionLink: null,
  },
];

const services = [
  'Regulatory Development',
  'Systems & Operations',
  'Brand Management',
  'Creative Operations',
  'Trade Development',
  'People Improvement',
];

const Contact = () => {
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
      const res = await fetch(api, { method: 'POST', body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) throw new Error(data.error || 'Failed');
      toast({ title: 'Message sent', description: 'We will get back to you shortly.' });
      form.reset();
    } catch {
      toast({ title: 'Failed to send', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="section-shell">
        <div className="text-center mb-14 md:mb-16">
          <p className="section-label mb-3">Contact</p>
          <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">
            Get In <span className="text-gradient-brand">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your regulated-markets needs? Our team is here to help you
            navigate compliance, systems, and growth across Kenya and East Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, iconColor, title, details, action, actionLink }) => (
              <div key={title} className="section-card p-5 flex gap-4 items-start">
                <div className="shrink-0 mt-0.5">
                  <Icon className={iconColor} size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
                  {details.map((d) => (
                    <p key={d} className="text-sm text-muted-foreground">{d}</p>
                  ))}
                  {action && actionLink && (
                    <a
                      href={actionLink}
                      target={actionLink.startsWith('http') ? '_blank' : undefined}
                      rel={actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block mt-2 text-xs font-medium text-secondary hover:text-secondary/80 transition-colors"
                    >
                      {action} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="section-card p-8 w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+254 XXX XXX XXX" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground text-sm"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or requirements..."
                  className="h-32"
                  required
                />
              </div>

              <Button className="w-full btn-brand" size="lg" type="submit" disabled={submitting}>
                <Send className="mr-2" size={18} />
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10">
          <div className="relative w-full h-80 rounded-md overflow-hidden border border-border/80">
            <iframe
              title="JMRC.intel Office Location"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.5!2d36.807!3d-1.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17396572bd49%3A0x4e16e47bacd956e7!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1"
            />
          </div>
          <div className="mt-3 text-right">
            <a
              href="https://maps.app.goo.gl/rbHrexMcHv9NKm2K7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary hover:text-secondary/80 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
