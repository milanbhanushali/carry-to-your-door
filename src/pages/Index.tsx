import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { products, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { QrCode, MessageCircle } from "lucide-react";
import { withBase } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/business";

const Index = () => {
  // Featured products on the home page - edit the ids to change what's shown
  const featuredIds = ["15", "19", "20", "21"];
  const featuredProducts = products.filter(p => featuredIds.includes(p.id));

  const whatsappLink = buildWhatsAppLink(
    "Hi, I'd like to see your product catalog and place an order."
  );
  const qrCodeSrc = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(whatsappLink)}`;
  
  return (
    <MainLayout>
      <Hero />

      {/* Shop by Brand Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-2">Shop by Brand</h2>
            <p className="text-gray-600">Pick a brand to see its full range.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {brands.map(brand => (
              <Link
                key={brand.slug}
                to={`/products?brand=${encodeURIComponent(brand.slug)}`}
                className="group block h-full"
                aria-label={`View all ${brand.name} products`}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-6">
                    <img
                      src={withBase(brand.image)}
                      alt={`${brand.name} products`}
                      loading="lazy"
                      className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 text-center border-t flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{brand.tagline}</p>
                    <span className="inline-block mt-auto pt-3 text-sm font-semibold text-brand-red">
                      View all products →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-bold text-brand-charcoal">Featured Products</h2>
            <Button asChild variant="link" className="text-brand-teal">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* WhatsApp Catalog Section */}
      <section className="py-16 bg-brand-red/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-charcoal">Order Via WhatsApp</h2>
              <p className="text-lg text-gray-600">
                Scan our QR code with your phone camera to access our complete product catalog on WhatsApp. 
                Quick, convenient ordering right from your mobile device.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red/10 p-2 rounded-full">
                    <MessageCircle className="h-5 w-5 text-brand-red" />
                  </div>
                  <p className="text-gray-700">Browse our complete inventory</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red/10 p-2 rounded-full">
                    <QrCode className="h-5 w-5 text-brand-red" />
                  </div>
                  <p className="text-gray-700">Place orders 24/7</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red/10 p-2 rounded-full">
                    <MessageCircle className="h-5 w-5 text-brand-red" />
                  </div>
                  <p className="text-gray-700">Get real-time order updates</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
                aria-label="Open WhatsApp chat with Urban Wholesalers"
              >
                <div className="bg-brand-red/5 p-5 rounded-lg">
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Real QR code encoding our WhatsApp click-to-chat link */}
                    <img
                      src={qrCodeSrc}
                      alt="Scan to open a WhatsApp chat with Urban Wholesalers"
                      loading="lazy"
                      className="w-full h-full object-contain rounded-lg shadow-md bg-white"
                    />
                    {/* WhatsApp Icon Overlay */}
                    <div className="absolute -bottom-4 -right-4 bg-green-500 p-3 rounded-full shadow-lg">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="font-semibold text-brand-charcoal">Scan to Order</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Point your camera at the QR code, or tap to open WhatsApp
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-brand-teal rounded-full text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Browse Products</h3>
                <p className="text-gray-600">
                  Explore our extensive catalog of food, vapes, cakes, sandwiches, and drinks for your off-license store.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-brand-teal rounded-full text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Submit Your Order</h3>
                <p className="text-gray-600">
                  Fill out our simple order form with your shop details and preferred delivery frequency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-brand-teal rounded-full text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Receive Your Delivery</h3>
                <p className="text-gray-600">
                  We'll deliver your wholesale order directly to your door according to your specified schedule.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
              <Link to="/order">Place Your First Order</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "Urban Wholesalers has transformed our inventory management. Their reliable delivery schedule means we never run out of essential products."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-brand-charcoal">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Corner Shop, Manchester</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "The product quality is exceptional and their pricing helps us maintain healthy margins. Highly recommended for any off-license owner."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-brand-charcoal">David Patel</p>
                    <p className="text-sm text-gray-500">Express Mart, London</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "Their wide range of products means we can offer our customers more variety. The order process is simple and their customer service is top-notch."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-brand-charcoal">Olivia Williams</p>
                    <p className="text-sm text-gray-500">Village Store, Birmingham</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Simplify Your Wholesale Orders?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of off-license stores across the UK who trust Urban Wholesalers for quality products delivered directly to their door.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-teal hover:bg-white/90">
            <Link to="/order">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
