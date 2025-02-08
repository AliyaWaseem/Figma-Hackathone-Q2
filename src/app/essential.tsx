import { Button } from "../components/ui/button";
import Image from "next/image";
import E1 from "../../public/assets/images/essential1.png";
import E2 from "../../public/assets/images/essential2.png";
import E3 from "../../public/assets/images/essential3.png";
export default function Essentials() {
  return (
    <section className="px-10">
      <h2 className="mb-4 font-bold text-xl m-4">The Essentials</h2>
    
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 m-auto relative">
        <Image src={E1} alt="Mens Thumbnail"/>
        <div className="absolute bottom-10 left-8">
          <button className="bg-white px-6 py-2 rounded-full">Men&apos;s</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 m-auto relative">
        <Image src={E2} alt="Womens Thumbnail"/>
        <div className="absolute bottom-10 left-8">
          <button className="bg-white px-6 py-2 rounded-full">Women&apos;s</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 m-auto relative">
        <Image src={E3} alt="Kids Thumbnail"/>
        <div className="absolute bottom-10 left-8">
          <button className="bg-white px-6 py-2 rounded-full">Kid&apos;s</button>
        </div>
      </div>
    </div>
  </section>
  );
}
