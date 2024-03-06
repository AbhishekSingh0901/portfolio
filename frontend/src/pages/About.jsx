import { ReactTyped } from "react-typed";
import illustration from "../assets/illustration.png";

function About() {
  return (
    <section className=" relative  mb-20 md:p-20 p-3 px-12 overflow-hidden">
      <h2 className="w-full md:w-1/2 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300">
        ABOUT ME
      </h2>
      <div className="flex relative items-center md:items-start md:justify-start justify-center flex-col md:flex-row p-6 gap-20">
        <img
          src={illustration}
          className=" h-[200px] md:h-[400px] lg:h-[500px] rounded-2xl shadow-lg"
        />

        <div className="  h-full text-neutral-50 lg:text-xl">
          <p className="mb-10">
            B.Tech graduate in Electronics and Communications with expertise in
            Frontend Development, proficient in JavaScript, ReactJS, Redux,
            SCSS, and problem-solving skills with 200+ DSA problems solved on
            platforms like LeetCode and GeeksforGeeks. adept at translating
            design concepts into efficient code for a seamless user experience,
            eager to contribute technical acumen and collaborative skills to
            innovative projects in Frontend Development.
          </p>
          <p className="text-5xl text-neutral-600 font-medium">
            I am a{" "}
            <ReactTyped
              strings={["Developer", "Designer", "Problem Solver"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
