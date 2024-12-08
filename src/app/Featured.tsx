import { Button } from "../components/ui/button";
import Image from "next/image";
import HeroImage from "../../public/assets/images/hero2Image.png"
export default function Featured() {
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl py-5">Featured</h1>
      </div>
      {/* image */}
      <div className="flex justify-center items-center px-4">
        <Image
          src={HeroImage}
          alt="man"
          width={1150}
          height={700}
          className="w-full max-w-7xl h-auto"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-3 p-10">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Button className="text-white">Find Your Shoe</Button>
      </div>
    </main>
  );
}
