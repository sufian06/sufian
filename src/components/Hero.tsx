import Image from "next/image";
import sufian from "../images/sufian.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between space-x-6 bg-red-300">
      <div>
        <h2 className="text-5xl font-bold tracking-tight ">I am Abu Sufian</h2>
        <span className="capitalize font-semibold text-xl">web developer</span>
      </div>
      <div>
        <div>
          <Image src={sufian} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
