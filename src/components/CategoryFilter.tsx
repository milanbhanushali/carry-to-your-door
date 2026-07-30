
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Package, Box, Cigarette, Pill, Battery, House, Pencil, Warehouse } from "lucide-react";

export type ProductCategory = 
  | "all"
  | "sandwiches"
  | "carrier-bags"
  | "rolling-papers"
  | "raw-products"
  | "filter-tips"
  | "elf-pods"
  | "smoke-requisites"
  | "lighters"
  | "medicines"
  | "batteries"
  | "ivg-pods"
  | "household"
  | "stationery"
  | "warehouse-sale"
  | "miscellaneous";

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: { value: ProductCategory; label: string; icon?: React.ReactNode }[] = [
    { value: "all", label: "All Products" },
    { value: "sandwiches", label: "Sandwiches & Wraps", icon: <Package className="w-4 h-4" /> },
    { value: "carrier-bags", label: "Carrier Bags", icon: <Package className="w-4 h-4" /> },
    { value: "rolling-papers", label: "Rolling Papers" },
    { value: "raw-products", label: "Raw Products", icon: <Box className="w-4 h-4" /> },
    { value: "filter-tips", label: "Filter Tips" },
    { value: "elf-pods", label: "ELF Pre‑Filled Pods", icon: <Cigarette className="w-4 h-4" /> },
    { value: "smoke-requisites", label: "Smoke Requisites", icon: <Cigarette className="w-4 h-4" /> },
    { value: "lighters", label: "Lighters" },
    { value: "medicines", label: "Medicines", icon: <Pill className="w-4 h-4" /> },
    { value: "batteries", label: "Batteries", icon: <Battery className="w-4 h-4" /> },
    { value: "ivg-pods", label: "IVG 2400 Reload Pods", icon: <Battery className="w-4 h-4" /> },
    { value: "household", label: "House Hold Products", icon: <House className="w-4 h-4" /> },
    { value: "stationery", label: "Stationery", icon: <Pencil className="w-4 h-4" /> },
    { value: "warehouse-sale", label: "Warehouse Sale", icon: <Warehouse className="w-4 h-4" /> },
    { value: "miscellaneous", label: "Miscellaneous", icon: <Package className="w-4 h-4" /> },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-brand-charcoal mb-4">Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            className={`justify-start ${
              selectedCategory === category.value 
                ? "bg-brand-red hover:bg-brand-red/90" 
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.icon && <span className="mr-2">{category.icon}</span>}
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
