"use client";
import { BackgroundBeams } from "./ui/background-beams";
import Typewriter from "../components/Typewriter"
// import TailwindcssButtons from "./Button";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Typewriter/>
      <BackgroundBeams />
    </div>
  );
}
