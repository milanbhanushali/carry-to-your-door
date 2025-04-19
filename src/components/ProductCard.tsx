
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "./CategoryFilter";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  packSize: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image || "/placeholder.svg"} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        <h3 className="font-semibold text-brand-charcoal text-lg mb-1">{product.name}</h3>
        <div className="flex justify-between items-baseline">
          <p className="text-gray-600 text-sm">Pack: {product.packSize}</p>
          <p className="font-bold text-brand-charcoal">£{product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal/10"
          asChild
        >
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
