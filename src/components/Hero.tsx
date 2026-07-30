
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight mb-4">
              Wholesale Delivery <br /> 
              <span className="text-brand-red">Right To Your Door</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Urban Wholesalers Ltd provides quality food, drinks, and more to off-license stores across the UK. 
              Cash and carry convenience with direct delivery to your shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red/10">
                <Link to="/order">Place Order</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg aspect-[4/3] overflow-hidden">
              <img 
                src={withBase("/lovable-uploads/37b5feae-0dcc-4b5e-b8f8-24e0a4fabd5b.png")}
                alt="Urban Wholesalers delivery service in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-brand-charcoal">Cash and carry at your door.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Wide Selection</h3>
              <p className="text-gray-600">From food and drinks to vapes and confectionery, we carry everything your off-license needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Flexible Delivery</h3>
              <p className="text-gray-600">Choose weekly or twice-weekly deliveries to match your store's needs and inventory turnover.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Wholesale Pricing</h3>
              <p className="text-gray-600">Competitive pricing that helps maximize your profit margins while maintaining quality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
