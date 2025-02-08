import { FaCartPlus } from "react-icons/fa";
import { Button } from "../../components/ui/button"; // Assuming you have a Button component
import Image from "next/image";
import Shoe from "../../../public/assets/products/product-3.png"
export default function ProductDetail() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 sm:p-10">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={Shoe} // Replace with your image URL
          alt="Product"
          width={650}
          height={650}
          className="w-full h-auto max-w-full max-h-[650px]" // Adjust sizing to fit your layout
        />
      </div>

      {/* Right Section with Text and Button */}
      <div className="w-full md:w-1/2 flex justify-center items-left">
        <div className="flex justify-center items-left flex-col gap-3 p-10">
          <h2 className="text-4xl font-bold uppercase text-left">
          Nike Air Force 1 
          PLT.AF.ORM
          </h2>
          <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-left">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &lsquo;inside&rsquo; out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          {/* Price Text Above Button */}
          <p className="text-2xl font-bold text-left pt-3 pb-2">
          ₹ 8 695.00
          </p>
          <Button className="flex items-center gap-2 w-[150px] text-white">
            <FaCartPlus /> Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
