import { Button } from "../components/ui/button";
import Image from "next/image";
import HeroImage from "../../public/assets/images/hero3.png"
export default function Miss() {
  return (
    <section className="m-4 px-10">
      <div>
        <h2 className="mb-4 font-bold text-xl">Don&apos;t Miss</h2>
      </div>
      {/* image */}
      <div className="flex justify-center items-center">
        <Image
          src={HeroImage}
          alt="men"
          width={1150}
          height={700}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-5 pt-10">
          <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
          <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
          <Button className="rounded-full">Shop</Button>
      </div>
    </section>
  );
}
