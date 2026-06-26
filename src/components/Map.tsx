import React from 'react';

const Map = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-t border-border/60">
      <div className="section-shell">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Location</p>
          <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">
            Visit Our <span className="text-gradient-brand">Office</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of Nairobi, Kenya. Come visit us or reach out for a consultation.
          </p>
        </div>

        <div className="relative w-full h-96 rounded-md overflow-hidden border border-border/80">
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

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="section-card p-6 text-center">
            <h3 className="font-bold text-card-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Ojijo Rd, Nairobi</p>
          </div>
          <div className="section-card p-6 text-center">
            <h3 className="font-bold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">0777795985</p>
          </div>
          <div className="section-card p-6 text-center">
            <h3 className="font-bold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@juxtrx.ke</p>
          </div>
          <div className="section-card p-6 text-center">
            <h3 className="font-bold text-card-foreground mb-2">Business Hours</h3>
            <p className="text-muted-foreground text-sm">Mon-Fri: 8:00am - 6:00pm</p>
            <p className="text-muted-foreground text-sm">Sat: 9:00am - 2:00pm</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/rbHrexMcHv9NKm2K7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;