import Image from "next/image";
import Hero from "./hero";
import BestAir from "./BESTAIR";
import Featured from "./FEATURED";
import { GearUpShop } from "./GearUpShop";
import DontMiss from "./dontMiss"
import Essentials from "./essential";
import Lists from "./lists";


export default function Home() {
  return (
    <div>
    <Hero />
    <BestAir />
    <Featured />
    <GearUpShop />
    <DontMiss />
    <Essentials />
    <Lists />
 
    </div>
  );
}
