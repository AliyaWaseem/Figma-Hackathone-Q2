import Image from "next/image";
import Hero from "./hero";
import Featured from "./Featured"
import DontMiss from "./DontMiss";
import Essentials from "./essential";
import Lists from "./lists";
import ProductSlider from "./AirMaxSlider";
import GearUpSlider from "./GearUpSlider";


export default function Home() {
  return (
    <main>
    <Hero />
    <section className="px-10">
          <ProductSlider />
      </section>
    <Featured />
    <GearUpSlider />
    <DontMiss />
    <Essentials />
    <Lists />
 
    </main>
  );
}
