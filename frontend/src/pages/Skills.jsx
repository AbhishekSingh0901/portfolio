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
import { motion } from "framer-motion";
import Skill from "../components/ui/Skill";

function Skills() {
  return (
    <section className=" relative  mb-24 md:p-20 p-3 px-12 overflow-hidden">
      <div className="relative z-20">
        <motion.h2
          initial={{ opacity: 0, translateY: "-4rem" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "backInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300"
        >
          SKILLS
        </motion.h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mx-auto h-full ">
            <Skill className={`hover:text-orange-400 hover:border-orange-500 `}>
              <SiHtml5 />
              <p className="text-sm lg:text-xl ">HTML</p>
            </Skill>
            <Skill className={`  hover:text-blue-400 hover:border-blue-500`}>
              <SiCss3 />
              <p className=" text-sm lg:text-xl ">CSS</p>
            </Skill>
            <Skill className={`  hover:text-cyan-400 hover:border-cyan-500`}>
              <SiTailwindcss />
              <p className="text-sm md:text-xl ">Tailwind</p>
            </Skill>
            <Skill className={`  hover:text-pink-400 hover:border-pink-500`}>
              <SiSass />
              <p className="text-sm md:text-xl ">Scss</p>
            </Skill>
            <Skill
              className={`   hover:text-emerald-400 hover:border-emerald-500`}
            >
              <FaFigma />
              <p className="text-sm md:text-xl ">Figma</p>
            </Skill>
            <Skill className={`   hover:text-amber-400 hover:border-amber-500`}>
              <SiJavascript />
              <p className="text-sm md:text-xl ">Javascript</p>
            </Skill>
            <Skill className={`   hover:text-teal-400 hover:border-teal-500`}>
              <SiReact />
              <p className="text-sm md:text-xl ">React</p>
            </Skill>
            <Skill
              className={`  hover:text-purple-400 hover:border-purple-500`}
            >
              <SiRedux />
              <p className="text-sm md:text-xl ">Redux</p>
            </Skill>
            <Skill className={`   hover:text-rose-400 hover:border-rose-500`}>
              <SiReactquery />
              <p className="text-sm md:text-xl ">React Query</p>
            </Skill>
            <Skill className={`  hover:text-red-400 hover:border-red-500`}>
              <FaGitAlt />
              <p className="text-xl">Git</p>
            </Skill>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
