import { FaFigma, FaGitAlt } from "react-icons/fa6";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { SparklesCore } from "../components/ui/sparkles";

function Skills() {
  const className =
    "bg-neutral-900 shadow-md text-neutral-200 text-5xl flex flex-col justify-center items-center gap-3 w-32 h-32 md:w-48 md:h-48 rounded-full border-neutral-700 hover:shadow-xl hover:scale-110 border-8 transition-all duration-300";

  return (
    <div className=" relative bg-gradient-to-br from-neutral-800 to-neutral-900 pt-28 pb-14 px-12">
      <div className="w-full z-0 absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20">
        <h2 className="w-1/2 text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300">
          Skills
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto">
            <div
              className={` ${className}   hover:text-orange-400 hover:border-orange-500 `}
            >
              <SiHtml5 />
              <p className="text-sm lg:text-xl ">HTML</p>
            </div>
            <div
              className={` ${className}   hover:text-blue-400 hover:border-blue-500`}
            >
              <SiCss3 />
              <p className=" text-sm lg:text-xl ">CSS</p>
            </div>
            <div
              className={` ${className}    hover:text-cyan-400 hover:border-cyan-500`}
            >
              <SiTailwindcss />
              <p className="text-sm md:text-xl ">Tailwind</p>
            </div>
            <div
              className={` ${className}   hover:text-pink-400 hover:border-pink-500`}
            >
              <SiSass />
              <p className="text-sm md:text-xl ">Scss</p>
            </div>
            <div
              className={` ${className}   hover:text-emerald-400 hover:border-emerald-500`}
            >
              <FaFigma />
              <p className="text-sm md:text-xl ">Figma</p>
            </div>
            <div
              className={` ${className}   hover:text-amber-400 hover:border-amber-500`}
            >
              <SiJavascript />
              <p className="text-sm md:text-xl ">Javascript</p>
            </div>
            <div
              className={` ${className}   hover:text-teal-400 hover:border-teal-500`}
            >
              <SiReact />
              <p className="text-sm md:text-xl ">React</p>
            </div>
            <div
              className={` ${className}   hover:text-purple-400 hover:border-purple-500`}
            >
              <SiRedux />
              <p className="text-sm md:text-xl ">Redux</p>
            </div>
            <div
              className={` ${className}   hover:text-rose-400 hover:border-rose-500`}
            >
              <SiReactquery />
              <p className="text-sm md:text-xl ">React Query</p>
            </div>
            <div
              className={` ${className}   hover:text-red-400 hover:border-red-500`}
            >
              <FaGitAlt />
              <p className="text-xl">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
