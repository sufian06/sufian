import { Download } from "lucide-react";
import Image from "next/image";
import sufian from "../images/sufian.jpg";

const Hero = () => {
  return (
    <section className=" relative w-full overflow-hidden overflow-x-clip border-general border-b bg-[#0B1120] wrapper">
      <div className="absolute right-[28%] top-0  h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div className="absolute bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
      <div className="absolute left-[28%] top-28 rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

      {/* main */}
      <div className="w-full justify-center py-10 bg-dpattern md:mt-[30px] lg:flex lg:h-full lg:items-center lg:py-0">
        <div className="container opacity-100">
          {/* <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between text-gray-100"> */}
          <div className="mt-12 flex flex-col items-center gap-10 md:mt-0 lg:flex-row lg:gap-28 relative z-50">
            <div className="flex-1 p-2">
              <h5 className="text-sky-400 mb-3 text-xl">Hi, I am</h5>
              <div>
                <h2 className="text-5xl font-bold">Abu Sufian. 👋</h2>
                <span className="capitalize font-medium text-xl">
                  web developer
                </span>
              </div>
              <p className="my-6 text-lg">
                I build pixel-perfect web applicaton on{" "}
                <span className="text-orange-400">Javascript</span> &{" "}
                <span className="text-sky-400">Typescript</span>
                based in Bangladesh. I am self-motivated{" "}
                <span className="font-bold capitalize">full-stack</span> web
                developer, seeking to achieve confidence and fame using my
                potential in the sector of Web Development.
              </p>
              <div className="bg-sky-400 text-black inline-block py-1 px-2 capitalize items-center rounded hover:bg-sky-500 mt-2">
                <a
                  className="inline-block text-xl"
                  href="Abu_Sufian_Resume.pdf"
                  download="Abu_Sufian_Resume.pdf"
                >
                  <Download className="inline-block mr-2" /> download resume
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="border p-2 rounded-lg inline-block border-gradient-to-r from-red-500 to-green-500">
                <Image
                  className="rounded-lg"
                  src={sufian}
                  height={350}
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
