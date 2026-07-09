import { ShoppingCart, Package, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Pharmaceutical Consultation Kit",
      price: "KES 15,000",
      rating: 4.8,
      reviews: 124,
      image: "/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png",
      description: "Complete consultation toolkit for pharmaceutical professionals"
    },
    {
      id: 2,
      name: "Regulatory Compliance Guide",
      price: "KES 8,500",
      rating: 4.9,
      reviews: 89,
      image: "/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png",
      description: "Comprehensive guide to Kenyan pharmaceutical regulations"
    },
    {
      id: 3,
      name: "Market Analysis Reports",
      price: "KES 12,000",
      rating: 4.7,
      reviews: 156,
      image: "/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png",
      description: "Latest pharmaceutical market insights and trends"
    },
    {
      id: 4,
      name: "Training Materials Package",
      price: "KES 6,000",
      rating: 4.6,
      reviews: 78,
      image: "/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png",
      description: "Professional development materials for healthcare teams"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <ShoppingCart className="text-white" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">
                Pharmaceutical Shop
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Discover our curated collection of pharmaceutical resources, consultation materials, and professional development tools.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between mb-12 p-6 bg-card rounded-2xl shadow-soft border border-border">
              <h2 className="text-2xl font-bold text-card-foreground">Our Products</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={20} />
                Filter & Sort
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="aspect-square bg-gradient-subtle p-8 flex items-center justify-center">
                    <Package className="text-primary" size={64} />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-500 fill-current" size={16} />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" className="hover:shadow-medium">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-foreground p-12 rounded-3xl text-background">
              <h3 className="text-3xl font-bold mb-4">
                Need Custom Solutions?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We offer customized pharmaceutical solutions tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                  Contact Sales Team
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Request Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;