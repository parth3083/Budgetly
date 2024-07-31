"use client";
import { BackgroundBeams } from "./ui/background-beams";
import TailwindcssButtons from "./Button";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative  z-10 text-lg md:text-9xl bg-clip-text h-[10vw] text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   text-center font-sans font-bold">
          Budgetly
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto  my-2  text-xl tracking-widest text-center relative z-10">
          Empowering Your Financial Journey.
        </p>
        <TailwindcssButtons />
      </div>
      <BackgroundBeams />
    </div>
  );
}
