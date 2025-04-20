
import { Product } from "@/components/ProductCard";
import { Package, Box, Cigarette, Pill, Battery, House, Pencil, Warehouse, Package as MiscPackage } from "lucide-react";

export const products: Product[] = [
  {
    id: "1",
    name: "Carrier Bags",
    category: "carrier-bags",
    image: "/placeholder.svg",
    price: 15.99,
    packSize: "100 pieces",
    description: "High-quality carrier bags for retail use. Durable and practical for everyday use."
  },
  {
    id: "2",
    name: "Rolling Papers",
    category: "rolling-papers",
    image: "/placeholder.svg",
    price: 24.50,
    packSize: "50 booklets",
    description: "Premium quality rolling papers. Various sizes available."
  },
  {
    id: "3",
    name: "Raw Products",
    category: "raw-products",
    image: "/placeholder.svg",
    price: 45.00,
    packSize: "Mixed box",
    description: "Selection of raw products for your store. High demand items."
  },
  {
    id: "4",
    name: "Filter Tips",
    category: "filter-tips",
    image: "/placeholder.svg",
    price: 18.75,
    packSize: "100 packs",
    description: "Quality filter tips. Essential stock for your shop."
  },
  {
    id: "5",
    name: "ELF Pre‑Filled Pods",
    category: "elf-pods",
    image: "/placeholder.svg",
    price: 32.99,
    packSize: "20 units",
    description: "ELF pre-filled pods in various flavors. Popular among customers."
  },
  {
    id: "6",
    name: "Smoke Requisites",
    category: "smoke-requisites",
    image: "/placeholder.svg",
    price: 22.50,
    packSize: "Mixed box",
    description: "Essential smoke requisites for your store."
  },
  {
    id: "7",
    name: "Lighters",
    category: "lighters",
    image: "/placeholder.svg",
    price: 28.00,
    packSize: "50 pieces",
    description: "Reliable lighters in various designs and colors."
  },
  {
    id: "8",
    name: "Medicines",
    category: "medicines",
    image: "/placeholder.svg",
    price: 56.50,
    packSize: "Assorted pack",
    description: "Over-the-counter medicines and healthcare products."
  },
  {
    id: "9",
    name: "Batteries",
    category: "batteries",
    image: "/placeholder.svg",
    price: 25.00,
    packSize: "48 units",
    description: "Long-lasting batteries in various sizes."
  },
  {
    id: "10",
    name: "IVG 2400 Reload Pods",
    category: "ivg-pods",
    image: "/placeholder.svg",
    price: 120.00,
    packSize: "24 units",
    description: "IVG 2400 reload pods. Latest stock with popular flavors."
  },
  {
    id: "11",
    name: "House Hold Products",
    category: "household",
    image: "/placeholder.svg",
    price: 45.99,
    packSize: "Mixed box",
    description: "Essential household products for your convenience store."
  },
  {
    id: "12",
    name: "Stationery",
    category: "stationery",
    image: "/placeholder.svg",
    price: 34.25,
    packSize: "Assorted pack",
    description: "Quality stationery items for your store."
  },
  {
    id: "13",
    name: "Warehouse Sale Items",
    category: "warehouse-sale",
    image: "/placeholder.svg",
    price: 99.99,
    packSize: "Bulk pack",
    description: "Special warehouse sale items at competitive prices."
  },
  {
    id: "14",
    name: "Miscellaneous Products",
    category: "miscellaneous",
    image: "/placeholder.svg",
    price: 29.99,
    packSize: "Various",
    description: "Various miscellaneous products for your store needs."
  }
];

