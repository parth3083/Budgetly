"use client";

import HeroScetion1 from "./home page/HeroScetion1";
import HeroSection2 from "./home page/HeroSection2";
import HeroSection3 from "./home page/HeroSection3";
import HeroSection4 from "./home page/HeroSection4";
import { HeroHighlight } from "./ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <div className="w-full min-h-screen">
       <HeroHighlight>
      <HeroScetion1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4/>
    </HeroHighlight>
   </div>
  );
}

