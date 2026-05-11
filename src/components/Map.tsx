import React from 'react';

const Map = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Visit Our <span className="text-primary">Office</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of Nairobi, Kenya. Come visit us or reach out for a consultation.
          </p>
        </div>

        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-strong">
          <iframe
            title="Juxt Rx Location"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8439249921166!2d36.80916067583504!3d-1.2663026356064044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171baf0a6479%3A0xdefc2a119d738138!2sNourish%20%26%20Bloom%20Pharmacy!5e0!3m2!1sen!2ske!4v1778511761180!5m2!1sen!2ske"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Ojijo Rd, Nairobi</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">0777795985</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@juxtrx.ke</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
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