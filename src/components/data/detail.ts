import { StaticImageData } from "next/image";
import max1 from "../../../public/assets/images/max1.png";
import max2 from "../../../public/assets/images/max2.png";
import max3 from "../../../public/assets/images/max3.png";
import G1 from "../../../public/assets/images/product1.png";
import G2 from "../../../public/assets/images/product2.png";
import G3 from "../../../public/assets/images/product3.png";
import G4 from "../../../public/assets/images/product4.png";

export interface ProductDetail {
  id: string | number; // Flexible ID type
  name: string;
  description: string;
  price: string | number; // Flexible price type
  imageUrl: string | StaticImageData; // Supports both static and dynamic images
  category?: "men" | "women"; // Optional category for categorization
}

export const products: ProductDetail[] = [
  // Reordered Products with Best Images
  {
    id: 1,
    name: "Nike Air Max Pulse",
    description: "Women's Shoe",
    price: "$13.99",
    imageUrl: max1,
    category: "women",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    description: "Men's Shoe",
    price: "$13.99",
    imageUrl: max2,
    category: "men",
  },
  {
    id: 3,
    name: "Nike Air 97 SE",
    description: "Men's Shoe",
    price: "$16.95",
    imageUrl: max3,
    category: "men",
  },

  // Remaining Products
  {
    id: 4,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short Sleeve",
    price: "₹3895",
    imageUrl: G1,
    category: "men",
  },
  {
    id: 5,
    name: "Nike Dri-FIT ADV Challenger",
    description: "Men's 18cm (approx.)",
    price: "₹2495",
    imageUrl: G2,
    category: "men",
  },
  {
    id: 6,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long Sleeve",
    price: "₹5295",
    imageUrl: G3,
    category: "women",
  },
  {
    id: 7,
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running",
    price: "₹3795",
    imageUrl: G4,
    category: "women",
  },
];
