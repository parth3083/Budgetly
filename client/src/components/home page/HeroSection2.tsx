import FeatureCard from "../FeatureCard"
function HeroSection2() {
    return <div className="w-[90vw]  ml-2 md:ml-0 flex flex-col items-center justify-center h-fit">
        <h1 className="text-4xl sm:text-base md:text-xl lg:text:4xl xl:text-6xl text-white text-center font-bold">
            Features
        </h1>
        <div className="w-full  flex mt-10 items-center justify-between h-fit">
            <FeatureCard/>
        </div>
  </div>;
}

export default HeroSection2;
