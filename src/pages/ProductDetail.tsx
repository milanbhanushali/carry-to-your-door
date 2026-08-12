
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { withBase } from "@/lib/utils";

const SITE_URL = "https://urbanwholesalers.co.uk";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <MainLayout>
        <Seo
          title="Product Not Found"
          description="The product you're looking for doesn't seem to exist."
          noindex
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-brand-charcoal mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't seem to exist.</p>
          <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Seo
        title={product.name}
        description={`${product.description} Pack size: ${product.packSize}.`}
        path={`/products/${product.id}`}
        image={`${SITE_URL}${withBase(product.image || "/placeholder.svg")}`}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/products" className="text-brand-teal hover:underline flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img
              src={withBase(product.image || "/placeholder.svg")}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div>
            <div className="mb-2 flex flex-wrap gap-1.5">
              <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              {product.brand && (
                <span className="text-sm font-medium px-3 py-1 bg-brand-red/10 rounded-full text-brand-red">
                  {product.brand}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-brand-charcoal mb-4">{product.name}</h1>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h2 className="text-lg font-semibold text-brand-charcoal mb-2">Description</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-brand-charcoal mb-1">Pack Information</h3>
                <p className="text-gray-600">{product.packSize}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 flex-1">
                <Link to="/order">Order Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 flex-1">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
