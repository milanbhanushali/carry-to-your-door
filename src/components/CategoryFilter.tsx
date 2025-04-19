
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type ProductCategory = "all" | "food" | "vapes" | "cakes" | "sandwiches" | "drinks";

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: { value: ProductCategory; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "food", label: "Food" },
    { value: "vapes", label: "Vapes" },
    { value: "cakes", label: "Cakes" },
    { value: "sandwiches", label: "Sandwiches" },
    { value: "drinks", label: "Drinks" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-brand-charcoal mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            className={
              selectedCategory === category.value 
                ? "bg-brand-teal hover:bg-brand-teal/90" 
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
