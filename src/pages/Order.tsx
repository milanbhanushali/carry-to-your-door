
import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";
import OrderForm from "@/components/OrderForm";

const Order = () => {
  return (
    <MainLayout>
      <Seo
        title="Place Your Order"
        description="Request wholesale delivery for your off-licence store. Tell us your shop, postcode and preferred delivery frequency and we'll confirm your order via WhatsApp."
        path="/order"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brand-charcoal mb-2">Place Your Order</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to request wholesale delivery to your off-license store. 
            We'll contact you to confirm your order and delivery schedule.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <OrderForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Order;
