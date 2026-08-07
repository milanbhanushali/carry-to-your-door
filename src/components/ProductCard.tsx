
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "./CategoryFilter";
import { withBase } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand?: string;
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
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={withBase(product.image || "/placeholder.svg")}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110 animate-fade-in"
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="mb-2 flex flex-wrap gap-1.5">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          {product.brand && (
            <span className="text-xs font-medium px-2 py-1 bg-brand-red/10 rounded-full text-brand-red">
              {product.brand}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-brand-charcoal text-lg mb-1 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-auto pt-1">Pack: {product.packSize}</p>
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
