import { Button } from "../components/ui/button";
import Image from "next/image";
import HeroImage from "../../public/assets/images/hero3.png"
export default function Miss() {
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl py-5">Don't Miss</h1>
      </div>
      {/* image */}
      <div className="flex justify-center items-center px-4">
        <Image
          src={HeroImage}
          alt="men"
          width={1150}
          height={700}
          className="w-full max-w-7xl h-auto"
        />
      </div>
      
    </main>
  );
}
