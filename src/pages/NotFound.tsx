
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-brand-teal mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
