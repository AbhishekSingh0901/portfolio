import { ThreeDCardDemo } from "../components/ThreeDCard";
import aurelia from "../assets/aurelia.png";
import crypto from "../assets/crypto.png";
import tranquil from "../assets/tranquil.png";

function Projects() {
  return (
    <section className="w-full mb-24 md:p-20 p-3 px-12 ">
      <h2 className="w-full md:w-1/2 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300">
        PROJECTS
      </h2>
      <div className="w-full md:w-4/5  mx-auto  max-w-8xl grid grid-cols-1 gap-16 xl:grid-cols-2 2xl:grid-cols-3">
        <ThreeDCardDemo
          name={"Aurelia Threads"}
          description={"E-commerce shop"}
          image={aurelia}
        />
        <ThreeDCardDemo
          name={"Tranquil Peaks"}
          description={"management app"}
          image={tranquil}
        />
        <ThreeDCardDemo
          name={"CryptoTrack"}
          description={"cryptocurrency dashboard"}
          image={crypto}
        />
      </div>
    </section>
  );
}

export default Projects;
