import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenEntered, setTokenEntered] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenEntered || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe' as any,
      zoom: 6,
      center: [36.8219, -1.2921], // Nairobi coordinates
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for Nairobi office
    new mapboxgl.Marker({
      color: 'hsl(180, 100%, 40%)', // Primary color
      scale: 1.2
    })
      .setLngLat([36.8219, -1.2921])
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-lg mb-2">JuxT Remedica</h3>
            <p class="text-sm text-gray-600 mb-2">Apothecary Solutions</p>
            <p class="text-sm">Nairobi, Kenya</p>
            <p class="text-sm">+254 (0) 123 456 789</p>
          </div>
        `)
      )
      .addTo(map.current);

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenEntered, mapboxToken]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setTokenEntered(true);
    }
  };

  if (!tokenEntered) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Location</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            To display our interactive map, please enter your Mapbox public token. 
            You can get one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="text"
              placeholder="Enter your Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTokenSubmit}>
              Load Map
            </Button>
          </div>
        </div>
      </section>
    );
  }

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
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Nairobi, Kenya</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+254 (0) 123 456 789</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
            <h3 className="font-bold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@juxtrx.ke</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;