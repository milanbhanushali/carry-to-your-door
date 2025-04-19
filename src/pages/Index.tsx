
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);
  
  return (
    <MainLayout>
      <Hero />
      
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
