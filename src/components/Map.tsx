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
            src={`https://www.google.com/maps?q=Juxt%20Rx%20Nairobi%20Kenya&output=embed`}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Nairobi, Kenya</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">0777795985</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@juxtrx.ke</p>
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