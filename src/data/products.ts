
import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "11",
    name: "House Hold Products",
    category: "household",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&auto=format&fit=crop",
    price: 45.99,
    packSize: "Mixed box",
    description: "Essential household products for your convenience store."
  },
  {
    id: "12",
    name: "Stationery",
    category: "stationery",
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?w=800&auto=format&fit=crop",
    price: 34.25,
    packSize: "Assorted pack",
    description: "Quality stationery items for your store."
  },
  {
    id: "13",
    name: "Warehouse Sale Items",
    category: "warehouse-sale",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    price: 99.99,
    packSize: "Bulk pack",
    description: "Special warehouse sale items at competitive prices."
  },
  {
    id: "14",
    name: "Miscellaneous Products",
    category: "miscellaneous",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop",
    price: 29.99,
    packSize: "Various",
    description: "Various miscellaneous products for your store needs."
  },
  // ---- Snacksters sandwiches (NOTE: prices are placeholders - update with real trade prices) ----
  {
    id: "15",
    name: "Snacksters Chicken Tikka",
    category: "sandwiches",
    brand: "Snacksters",
    image: "/products/snacksters-chicken-tikka.webp",
    price: 1.35,
    packSize: "Single sandwich",
    description: "Cooked chicken pieces in a mild tikka spiced mayonnaise on oatmeal bread. Keep refrigerated below 5°C."
  },
  {
    id: "16",
    name: "Snacksters Double Cheese & Onion",
    category: "sandwiches",
    brand: "Snacksters",
    image: "/products/snacksters-double-cheese-onion.webp",
    price: 1.25,
    packSize: "Single sandwich",
    description: "Grated cheese and diced onion in mayonnaise on oatmeal bread. Suitable for vegetarians."
  },
  {
    id: "17",
    name: "Snacksters Cheese & Pickle",
    category: "sandwiches",
    brand: "Snacksters",
    image: "/products/snacksters-cheese-pickle.webp",
    price: 1.25,
    packSize: "Single sandwich",
    description: "Mature cheese with tangy pickle on oatmeal bread. Suitable for vegetarians."
  },
  {
    id: "18",
    name: "Snacksters Ham & Cheese",
    category: "sandwiches",
    brand: "Snacksters",
    image: "/products/snacksters-ham-cheese.webp",
    price: 1.35,
    packSize: "Single sandwich",
    description: "Cooked formed ham pieces and grated cheese in mayonnaise on oatmeal bread."
  },
  {
    id: "19",
    name: "Snacksters Tuna Mayo",
    category: "sandwiches",
    brand: "Snacksters",
    image: "/products/snacksters-tuna-mayo.webp",
    price: 1.35,
    packSize: "Single sandwich",
    description: "Tuna and mayonnaise on oatmeal bread. A lunchtime best seller."
  },
  // ---- Target A Snack sandwiches & wraps ----
  {
    id: "20",
    name: "Target A Snack Chicken Caesar Wrap",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-chicken-caesar-wrap.webp",
    price: 1.55,
    packSize: "Single wrap",
    description: "Chicken caesar wrap made using halal chicken. Keep refrigerated below 5°C."
  },
  {
    id: "21",
    name: "Target A Snack Chicken Fajita Wrap",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-chicken-fajita-wrap.webp",
    price: 1.55,
    packSize: "Single wrap",
    description: "Spiced chicken fajita wrap made using halal chicken. Keep refrigerated below 5°C."
  },
  {
    id: "22",
    name: "Target A Snack Chicken & Bacon Mayo",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-chicken-bacon-mayo.webp",
    price: 1.45,
    packSize: "Single sandwich",
    description: "Chicken and bacon in mayonnaise on oatmeal bread."
  },
  {
    id: "23",
    name: "Target A Snack Chicken Tikka",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-chicken-tikka.webp",
    price: 1.45,
    packSize: "Single sandwich",
    description: "Chicken tikka sandwich made using halal chicken, on oatmeal bread."
  },
  {
    id: "24",
    name: "Target A Snack Chunky Egg Mayo",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-chunky-egg-mayo.webp",
    price: 1.30,
    packSize: "Single sandwich",
    description: "Chunky egg mayonnaise on oatmeal bread. Suitable for vegetarians."
  },
  {
    id: "25",
    name: "Target A Snack Double Cheese & Onion",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-double-cheese-onion.webp",
    price: 1.30,
    packSize: "Single sandwich",
    description: "Double cheese and onion sandwich on oatmeal bread. Suitable for vegetarians."
  },
  {
    id: "26",
    name: "Target A Snack Ham & Cheese",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-ham-cheese.webp",
    price: 1.40,
    packSize: "Single sandwich",
    description: "Ham and cheese sandwich on oatmeal bread."
  },
  {
    id: "27",
    name: "Target A Snack Tuna Mayo",
    category: "sandwiches",
    brand: "Target A Snack",
    image: "/products/target-tuna-mayo.webp",
    price: 1.40,
    packSize: "Single sandwich",
    description: "Tuna mayo sandwich on oatmeal bread."
  },
  // ---- Hunts Bakery cakes (NOTE: prices are placeholders - update with real trade prices) ----
  {
    id: "28",
    name: "Hunts Bakery Chocolate Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-chocolate.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Rich chocolate sponge topped with chocolate ganache and a drizzle pattern."
  },
  {
    id: "29",
    name: "Hunts Bakery Coffee Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-coffee-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Coffee-flavoured sponge topped with coffee icing and a white chocolate drizzle."
  },
  {
    id: "30",
    name: "Hunts Bakery Fruit Cake",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-fruit.webp",
    price: 0.99,
    packSize: "Single slice",
    description: "Traditional fruit cake with sultanas and glace cherries, baked to a golden top."
  },
  {
    id: "31",
    name: "Hunts Bakery Iced Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-icing.webp",
    price: 0.85,
    packSize: "Single slice",
    description: "Vanilla sponge topped with white icing and rainbow sprinkles."
  },
  {
    id: "32",
    name: "Hunts Bakery Jam & Coconut Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-jam-coconut-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Vanilla sponge topped with raspberry jam and desiccated coconut."
  },
  {
    id: "33",
    name: "Hunts Bakery Jam Drizzle Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-jam-drizzle.webp",
    price: 0.85,
    packSize: "Single slice",
    description: "Soft sponge finished with a ribboned jam drizzle top."
  },
  {
    id: "34",
    name: "Hunts Bakery Lemon Drizzle Cake",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-lemon-drizzle.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Classic lemon sponge finished with a tangy lemon sugar drizzle crust."
  },
  {
    id: "35",
    name: "Hunts Bakery Lemon Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-lemon-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Lemon sponge topped with lemon fondant icing and a chocolate drizzle."
  },
  {
    id: "36",
    name: "Hunts Bakery Raspberry Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-raspberry-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Raspberry-flavoured sponge topped with pink fondant icing and a white drizzle."
  },
  {
    id: "37",
    name: "Hunts Bakery Strawberry Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-strawberry-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Strawberry sponge topped with pink icing and rainbow sprinkles."
  },
  {
    id: "38",
    name: "Hunts Bakery Toffee Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-toffee-sponge.webp",
    price: 0.89,
    packSize: "Single slice",
    description: "Toffee sponge topped with caramel icing and a chocolate drizzle."
  },
  {
    id: "39",
    name: "Hunts Bakery Victoria Sponge",
    category: "cakes",
    brand: "Hunts Bakery",
    image: "/products/hunts-victoria-sponge.webp",
    price: 0.95,
    packSize: "Single slice",
    description: "Two layers of classic sponge sandwiched with jam and dusted with icing sugar."
  },
  // ---- Balconi (Italy, est. 1953) ----
  {
    id: "40",
    name: "Balconi Choco Dessert",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-choco-dessert.webp",
    price: 0,
    packSize: "400g",
    description: "Cocoa sponge layered with cream, coated and topped with chocolate shavings. Product of Italy."
  },
  {
    id: "41",
    name: "Balconi Rollino Latte",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-rollino-latte.webp",
    price: 0,
    packSize: "6 rollini, 222g",
    description: "Individually wrapped mini sponge rolls with a milk cream filling. No palm oil."
  },
  {
    id: "42",
    name: "Balconi Rollino Cacao",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-rollino-cacao.webp",
    price: 0,
    packSize: "6 x 37g, 222g",
    description: "Individually wrapped mini sponge rolls with a yummy cocoa cream filling. Free from preservatives and colours."
  },
  {
    id: "43",
    name: "Balconi Strawberry Cake",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-strawberry-cake.webp",
    price: 0,
    packSize: "400g",
    description: "Sponge cake with strawberry filling, topped with white chocolate shavings. Product of Italy."
  },
  {
    id: "44",
    name: "Balconi Tiramisu",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-tiramisu.webp",
    price: 0,
    packSize: "400g",
    description: "Soft and creamy layered sponge with coffee-flavoured cream, dusted with cocoa."
  },
  {
    id: "45",
    name: "Balconi Rollino Nocciola",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-rollino-nocciola.webp",
    price: 0,
    packSize: "6 x 37g, 222g",
    description: "Individually wrapped mini sponge rolls with a hazelnut cream filling. Free from preservatives and artificial colours."
  },
  {
    id: "46",
    name: "Balconi Viennese",
    category: "cakes",
    brand: "Balconi",
    image: "/products/balconi-viennese.webp",
    price: 0,
    packSize: "400g",
    description: "Soft sponge cake with apricot jam and cocoa cream filling, coated in chocolate. Product of Italy."
  },
  // ---- Coolmore (West Cork Bakery, Ireland, est. 1988) ----
  {
    id: "47",
    name: "Coolmore Chocolate Orange Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-chocolate-orange.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Zingy and zesty chocolate sponge with orange, finished in chocolate coating and candied orange pieces."
  },
  {
    id: "48",
    name: "Coolmore Classic Carrot Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-carrot-cake.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Sweet and tasty carrot sponge topped with cream cheese icing and chopped nuts."
  },
  {
    id: "49",
    name: "Coolmore Bubblegum Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-bubblegum-cake.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Deliciously sweet vanilla sponge topped with pink bubblegum-flavoured icing and sprinkles."
  },
  {
    id: "50",
    name: "Coolmore Chocolate Fudge Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-chocolate-fudge.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Deliciously sweet chocolate fudge sponge coated in rich chocolate icing. Gold winner, Blas na hEireann Irish Food Awards 2018."
  },
  {
    id: "51",
    name: "Coolmore Coffee & Walnut Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-coffee-walnut.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Smooth and sweet coffee sponge topped with coffee icing, walnuts and chocolate shavings."
  },
  {
    id: "52",
    name: "Coolmore Lemon Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-lemon-cake.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Tangy and tasty lemon sponge topped with a smooth lemon icing."
  },
  {
    id: "53",
    name: "Coolmore Red Velvet Cake",
    category: "cakes",
    brand: "Coolmore",
    image: "/products/coolmore-red-velvet.webp",
    price: 0,
    packSize: "Whole cake",
    description: "Smooth and rich red velvet sponge topped with a classic cream cheese icing."
  }
];

// Brands shown on the home page. Add new brands here.
export const brands = [
  {
    slug: "Snacksters",
    name: "Snacksters",
    tagline: "Fresh-filled sandwiches on oatmeal bread",
    image: "/products/brand-snacksters.webp"
  },
  {
    slug: "Target A Snack",
    name: "Target A Snack",
    tagline: "\"I target your hunger\" - sandwiches & wraps, halal chicken range",
    image: "/products/brand-target-a-snack.webp"
  },
  {
    slug: "Hunts Bakery",
    name: "Hunts Bakery",
    tagline: "Est. 1949 - traditional cake slices, freshly baked",
    image: "/products/brand-hunts-bakery.webp"
  },
  {
    slug: "Balconi",
    name: "Balconi",
    tagline: "Milano, Italy - 1953 - Italian sponge cakes and rollini",
    image: "/products/brand-balconi.webp"
  },
  {
    slug: "Coolmore",
    name: "Coolmore",
    tagline: "West Cork Bakery, Ireland - Since 1988 - traditional Irish cakes",
    image: "/products/brand-coolmore.webp"
  }
];
