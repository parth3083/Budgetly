import How_it_works_Card from "../How_it_works_Card"

function HeroSection3() {
  return (
      <div className="w-full h-fit  mt-20 px-4 ">
          <h1 className="text-4xl sm:text-base md:text-xl lg:text:4xl xl:text-6xl text-white text-center font-bold">
          How it Works
          </h1>
          <div className="w-full flex mt-10 items-center justify-between h-fit">
           <How_it_works_Card/>
        </div>
    </div>
  )
}

export default HeroSection3