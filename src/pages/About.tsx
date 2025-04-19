
import MainLayout from "@/layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-brand-charcoal mb-4">About Urban Wholesalers Ltd</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted B2B partner for wholesale distribution to off-license stores across the UK.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Established in 2010, Urban Wholesalers Ltd began with a simple mission: to provide quality wholesale products to off-license stores with the convenience of direct delivery.
            </p>
            <p className="text-gray-600 mb-4">
              As off-license store owners ourselves, we understood the challenges of maintaining inventory while running a busy shop. The time spent traveling to cash and carry stores was time away from customers and business management.
            </p>
            <p className="text-gray-600">
              This insight led us to create a service that brings the cash and carry directly to your door, saving you time and hassle while ensuring you have all the products your customers demand.
            </p>
          </div>
          <div className="bg-gray-200 h-80 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
              alt="Urban Wholesalers Team" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the highest quality products that meet our rigorous standards, ensuring your customers receive the best.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent, on-time delivery you can count on, helping you manage inventory with confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">Partnership</h3>
              <p className="text-gray-600">
                We see ourselves as partners in your success, offering competitive pricing and personalized service.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-teal"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-charcoal mb-2">Time-Saving Convenience</h3>
                <p className="text-gray-600">
                  No more trips to cash and carry warehouses. We deliver directly to your store on your schedule.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-teal"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-charcoal mb-2">Extensive Product Range</h3>
                <p className="text-gray-600">
                  From food and drinks to vapes and confectionery, we offer a comprehensive selection for your store.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-teal"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-charcoal mb-2">Flexible Delivery Options</h3>
                <p className="text-gray-600">
                  Choose the delivery frequency that works for your business, whether weekly, twice-weekly, or monthly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-brand-teal"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-charcoal mb-2">Dedicated Customer Support</h3>
                <p className="text-gray-600">
                  Our team is always available to assist with orders, answer questions, and provide personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">Our Coverage Area</h2>
          <p className="text-center text-gray-600 mb-6">
            We currently provide delivery services to off-license stores throughout the following regions:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Greater London</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Manchester</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Birmingham</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Leeds</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Liverpool</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Bristol</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Sheffield</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">Newcastle</div>
            <div className="bg-white p-3 rounded text-center text-brand-charcoal">And more...</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
