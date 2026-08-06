
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Sandwich,
  CakeSlice,
  ShoppingBag,
  ScrollText,
  Leaf,
  Filter,
  Zap,
  Cigarette,
  Flame,
  Pill,
  BatteryFull,
  BatteryCharging,
  Home,
  PenTool,
  Warehouse,
  Shapes,
} from "lucide-react";

export type ProductCategory =
  | "all"
  | "sandwiches"
  | "cakes"
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

// Every category gets its own distinct, meaningful icon - no repeats.
// Add new categories here and they'll automatically appear in both the
// desktop sidebar and the mobile chip scroller below.
const categories: { value: ProductCategory; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Products", icon: <LayoutGrid className="w-4 h-4" /> },
  { value: "sandwiches", label: "Sandwiches & Wraps", icon: <Sandwich className="w-4 h-4" /> },
  { value: "cakes", label: "Cakes", icon: <CakeSlice className="w-4 h-4" /> },
  { value: "carrier-bags", label: "Carrier Bags", icon: <ShoppingBag className="w-4 h-4" /> },
  { value: "rolling-papers", label: "Rolling Papers", icon: <ScrollText className="w-4 h-4" /> },
  { value: "raw-products", label: "Raw Products", icon: <Leaf className="w-4 h-4" /> },
  { value: "filter-tips", label: "Filter Tips", icon: <Filter className="w-4 h-4" /> },
  { value: "elf-pods", label: "ELF Pre‑Filled Pods", icon: <Zap className="w-4 h-4" /> },
  { value: "smoke-requisites", label: "Smoke Requisites", icon: <Cigarette className="w-4 h-4" /> },
  { value: "lighters", label: "Lighters", icon: <Flame className="w-4 h-4" /> },
  { value: "medicines", label: "Medicines", icon: <Pill className="w-4 h-4" /> },
  { value: "batteries", label: "Batteries", icon: <BatteryFull className="w-4 h-4" /> },
  { value: "ivg-pods", label: "IVG 2400 Reload Pods", icon: <BatteryCharging className="w-4 h-4" /> },
  { value: "household", label: "House Hold Products", icon: <Home className="w-4 h-4" /> },
  { value: "stationery", label: "Stationery", icon: <PenTool className="w-4 h-4" /> },
  { value: "warehouse-sale", label: "Warehouse Sale", icon: <Warehouse className="w-4 h-4" /> },
  { value: "miscellaneous", label: "Miscellaneous", icon: <Shapes className="w-4 h-4" /> },
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <>
      {/* Mobile / tablet: horizontal scrollable chip bar (sits above the product grid, no vertical space stolen) */}
      <div className="md:hidden -mx-4 px-4 mb-6">
        <div
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter products by category"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              role="tab"
              aria-selected={selectedCategory === category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                selectedCategory === category.value
                  ? "bg-brand-red text-white border-brand-red"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: sticky vertical sidebar. Stays in view while the product grid scrolls,
          but caps its own height and scrolls internally so a tall list never overlaps the footer. */}
      <div className="hidden md:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
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
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
