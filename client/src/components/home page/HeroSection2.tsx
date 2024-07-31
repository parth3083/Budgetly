import FeatureCard from "../FeatureCard"
function HeroSection2() {
    return <div className="w-[90vw] h-screen bg-red-500">
        <h1 className="text-xs sm:text-base md:text-xl lg:text:4xl xl:text-6xl text-white text-center font-bold">
            Features
        </h1>
        <div className="w-full bg-green-500 flex items-center justify-between h-fit">
            <FeatureCard/>
        </div>
  </div>;
}

export default HeroSection2;
