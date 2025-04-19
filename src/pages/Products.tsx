
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import CategoryFilter, { ProductCategory } from "@/components/CategoryFilter";
import ProductCard, { Product } from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;
  
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(categoryParam || "all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Update filtered products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  // Update URL params when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);
  
  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-charcoal mb-2">Product Catalog</h1>
          <p className="text-gray-600">
            Browse our extensive range of wholesale products for your off-license store.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange} 
            />
          </div>
          
          <div className="w-full md:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
