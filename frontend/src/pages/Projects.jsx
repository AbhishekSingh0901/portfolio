import { ThreeDCardDemo } from "../components/ThreeDCard";
import aurelia from "../assets/aurelia.png";
import crypto from "../assets/crypto.png";
import tranquil from "../assets/tranquil.png";

function Projects() {
  return (
    <div className="w-full flex justify-center items-central pt-20 p-3 md:p-20 bg-neutral-700 ">
      <div className="w-90%  mx-auto  max-w-8xl grid grid-cols-1 gap-16 xl:grid-cols-2 2xl:grid-cols-3">
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
    </div>
  );
}

export default Projects;
