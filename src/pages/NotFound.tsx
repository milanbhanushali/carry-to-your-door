
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";

const NotFound = () => {
  return (
    <MainLayout>
      <Seo
        title="Page Not Found"
        description="The page you are looking for doesn't exist or has been moved."
        noindex
      />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-7xl font-bold text-brand-red mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. It might have been a
          product link that's since changed, or a typo in the address.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-red hover:bg-brand-red/90">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
